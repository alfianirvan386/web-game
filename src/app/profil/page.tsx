'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

interface Stats {
  total_lessons: number
  quizzes_completed: number
  average_score: number
  learning_days: number
}

interface ProgressItem {
  materi_id: number
  materi_title: string
  percentage: number
  completed: boolean
  updated_at: string
}

interface UserData {
  name: string
  email: string
  phone: string
  school: string
  major: string
  created_at: string
  avatar_url?: string // <-- Tambahan untuk foto profil
}

export default function ProfilPage() {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploadingAvatar, setUploadingAvatar] = useState(false) // <-- State loading upload foto
  
  const [userData, setUserData] = useState<UserData>({
    name: '', email: '', phone: '', school: '', major: '', created_at: '', avatar_url: ''
  })
  const [stats, setStats] = useState<Stats>({
    total_lessons: 0, quizzes_completed: 0, average_score: 0, learning_days: 0
  })
  const [progressList, setProgressList] = useState<ProgressItem[]>([])

  const achievements = [
    { id: 1, title: 'OSI Master', description: 'Selesaikan 1 materi', icon: '🎓', req: (s: Stats) => s.total_lessons >= 1 },
    { id: 2, title: 'Network Pro', description: 'Selesaikan 10 materi', icon: '🌐', req: (s: Stats) => s.total_lessons >= 10 },
    { id: 3, title: 'Quiz Champion', description: 'Selesaikan 5 quiz', icon: '🏆', req: (s: Stats) => s.quizzes_completed >= 5 },
    { id: 4, title: 'Streak Master', description: 'Belajar 30 hari', icon: '🔥', req: (s: Stats) => s.learning_days >= 30 },
  ]

  useEffect(() => {
    let isMounted = true; 
    let subscription: ReturnType<typeof supabase.channel>

    const fetchAll = async () => {
      try {
        if (isMounted) setLoading(true)
        
        const { data: { user }, error: userError } = await supabase.auth.getUser()
        
        if (userError || !user) { 
          router.replace('/login') 
          return 
        }

        const userId = user.id

        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          .maybeSingle()

        if (profileError) console.error("Gagal mengambil profil:", profileError.message)

        if (profileData && isMounted) {
          setUserData({
            name: profileData.name || '',
            email: profileData.email || user.email || '',
            phone: profileData.phone || '',
            school: profileData.school || '',
            major: profileData.major || '',
            avatar_url: profileData.avatar_url || '', // <-- Mengambil foto dari DB
            created_at: profileData.created_at
              ? new Date(profileData.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
              : ''
          })

          setStats({
            total_lessons: Number(profileData.total_lessons) || 0,
            quizzes_completed: Number(profileData.quizzes_completed) || 0,
            average_score: Number(profileData.average_score) || 0,
            learning_days: 1 
          })
        }

        try {
          const { data: progressData } = await supabase
            .from('progress')
            .select('*')
            .eq('user_id', userId)
            .eq('completed', true)
            .order('updated_at', { ascending: false })
            
          if (progressData && isMounted) setProgressList(progressData as ProgressItem[])
        } catch {}

        if (isMounted) {
          const uniqueChannelName = `profil-realtime-${userId}-${Date.now()}`
          subscription = supabase.channel(uniqueChannelName)
            .on('postgres_changes', { 
              event: 'UPDATE', schema: 'public', table: 'profiles', filter: `id=eq.${userId}` 
            }, (payload) => {
              if (isMounted) {
                setStats(prev => ({
                  ...prev,
                  quizzes_completed: payload.new.quizzes_completed ?? prev.quizzes_completed,
                  average_score: payload.new.average_score ?? prev.average_score,
                  total_lessons: payload.new.total_lessons ?? prev.total_lessons,
                }))
              }
            }).subscribe()
        }
      } catch (err) {
        console.error('Error saat memuat data profil:', err)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchAll()

    return () => {
      isMounted = false;
      if (subscription) supabase.removeChannel(subscription)
    }
  }, [router])

  // ─── FUNGSI UPLOAD FOTO ───
  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploadingAvatar(true)
      if (!event.target.files || event.target.files.length === 0) return

      const file = event.target.files[0]
      const { data: { session } } = await supabase.auth.getSession()
      if (!session?.user) return

      // Bikin nama file unik agar tidak bentrok
      const fileExt = file.name.split('.').pop()
      const fileName = `${session.user.id}-${Date.now()}.${fileExt}`

      // Upload ke bucket 'avatars' di Supabase
      const { error: uploadError } = await supabase.storage.from('avatars').upload(fileName, file)
      if (uploadError) throw uploadError

      // Ambil link URL publiknya
      const { data: { publicUrl } } = supabase.storage.from('avatars').getPublicUrl(fileName)

      // Simpan URL sementara di layar agar langsung terlihat
      setUserData(prev => ({ ...prev, avatar_url: publicUrl }))

    } catch (error) {
      alert('Gagal mengupload foto. Pastikan ukuran gambar tidak terlalu besar.')
      console.error(error)
    } finally {
      setUploadingAvatar(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user) {
        await supabase.from('profiles').update({
          name: userData.name,
          phone: userData.phone,
          school: userData.school,
          major: userData.major,
          avatar_url: userData.avatar_url // <-- Menyimpan link foto ke Database
        }).eq('id', session.user.id)
      }
      setIsEditing(false)
      window.location.reload()
    } catch (err) {
      console.error('Save error:', err)
    } finally {
      setSaving(false)
    }
  }

  const handleLogout = async () => {
    try { await supabase.auth.signOut() } catch {}
    finally { router.push('/login') }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-gray-500 font-medium">Memuat profil...</p>
        </div>
      </div>
    )
  }

  const statCards = [
    { label: 'Total Pelajaran', value: stats.total_lessons, icon: '📚', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Quiz Selesai', value: stats.quizzes_completed, icon: '✅', color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Total Poin', value: stats.average_score, icon: '🏆', color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { label: 'Hari Belajar', value: stats.learning_days, icon: '📅', color: 'text-orange-600', bg: 'bg-orange-50' },
  ]

  const colorMap: Record<number, string> = {
    1: 'bg-blue-500', 2: 'bg-orange-500', 3: 'bg-purple-500',
    4: 'bg-red-500', 5: 'bg-yellow-500', 6: 'bg-green-500'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black">👤 Profil Saya</h1>
          <p className="text-blue-200 mt-1">Kelola informasi dan pantau perkembangan belajarmu</p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-20">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-28" />
              <div className="px-6 pb-6">
                <div className="flex justify-center -mt-14 mb-4">
                  
                  {/* ─── BAGIAN FOTO PROFIL INTERAKTIF ─── */}
                  <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-lg text-5xl overflow-hidden relative group">
                    {uploadingAvatar ? (
                       <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                    ) : userData.avatar_url ? (
                       <Image src={userData.avatar_url} alt="Profile" className="w-full h-full object-cover" width={112} height={112} />
                    ) : (
                       <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white">👤</div>
                    )}
                    
                    {/* Lapisan hitam transparan muncul kalau mode Edit aktif & mouse diarahkan ke foto */}
                    {isEditing && !uploadingAvatar && (
                      <label className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-xs font-bold">Ubah Foto</span>
                        <input type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" disabled={uploadingAvatar} />
                      </label>
                    )}
                  </div>
                  
                </div>

                {isEditing ? (
                  <div className="space-y-3 mb-4">
                    <input type="text" value={userData.name} onChange={e => setUserData({ ...userData, name: e.target.value })} placeholder="Nama lengkap" className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    <input type="text" value={userData.phone} onChange={e => setUserData({ ...userData, phone: e.target.value })} placeholder="Nomor HP" className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    <input type="text" value={userData.school} onChange={e => setUserData({ ...userData, school: e.target.value })} placeholder="Sekolah/Institusi" className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    <select value={userData.major} onChange={e => setUserData({ ...userData, major: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                      <option value="">Pilih jurusan</option>
                      <option value="TKJ">Teknik Komputer dan Jaringan</option>
                      <option value="RPL">Rekayasa Perangkat Lunak</option>
                      <option value="BDP">Bisnis Daring dan Pemasaran</option>
                      <option value="MM">Multimedia</option>
                    </select>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-center text-gray-800 mb-1">{userData.name || 'User EduGame'}</h2>
                    <p className="text-center text-blue-600 font-semibold text-sm mb-4">{userData.major || 'Siswa'}</p>
                    <div className="bg-gray-50 rounded-xl p-4 space-y-2 mb-4 text-sm text-gray-600">
                      <p className="flex items-center gap-2"><span>📧</span><span className="truncate">{userData.email}</span></p>
                      <p className="flex items-center gap-2"><span>📱</span>{userData.phone || '-'}</p>
                      <p className="flex items-center gap-2"><span>🏫</span>{userData.school || '-'}</p>
                      <p className="flex items-center gap-2"><span>📅</span>Bergabung: {userData.created_at || '-'}</p>
                    </div>
                  </>
                )}

                <button onClick={isEditing ? handleSave : () => setIsEditing(true)} disabled={saving || uploadingAvatar}
                  className="w-full bg-blue-600 text-white py-2.5 rounded-xl hover:bg-blue-700 transition font-bold text-sm mb-2 disabled:bg-gray-300">
                  {saving ? 'Menyimpan...' : isEditing ? 'Simpan Perubahan' : 'Edit Profil'}
                </button>
                {isEditing && (
                  <button onClick={() => setIsEditing(false)}
                    className="w-full border border-gray-300 text-gray-600 py-2.5 rounded-xl hover:bg-gray-50 transition font-bold text-sm mb-2">
                    Batal
                  </button>
                )}
                <button onClick={handleLogout}
                  className="w-full border-2 border-red-400 text-red-500 py-2.5 rounded-xl hover:bg-red-50 transition font-bold text-sm">
                  Logout
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {/* Stats Real-time */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {statCards.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center text-2xl mx-auto mb-3`}>{s.icon}</div>
                  <div className={`text-2xl font-black ${s.color} mb-1`}>{s.value}</div>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">🏅 Pencapaian</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {achievements.map((ach) => {
                  const unlocked = ach.req(stats)
                  return (
                    <div key={ach.id} className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${unlocked ? 'border-yellow-300 bg-yellow-50' : 'border-gray-100 bg-gray-50 opacity-50'}`}>
                      <div className={`text-3xl ${!unlocked ? 'grayscale' : ''}`}>{ach.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm">{ach.title}</h4>
                        <p className="text-xs text-gray-500">{ach.description}</p>
                        {unlocked && <span className="text-xs text-yellow-600 font-bold">✓ Terbuka</span>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Progress Pembelajaran */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">📈 Progress Pembelajaran</h3>
              {progressList.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <div className="text-4xl mb-2">📭</div>
                  <p className="text-sm">Belum ada materi yang diselesaikan.</p>
                  <Link href="/materi" className="text-blue-600 text-sm font-semibold hover:underline mt-1 inline-block">Mulai belajar →</Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {progressList.map((item, idx) => {
                    const color = colorMap[item.materi_id] || 'bg-blue-500'
                    return (
                      <div key={idx}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="font-semibold text-gray-700 text-sm">{item.materi_title}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold text-sm">{item.percentage}%</span>
                            {item.completed && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">✅ Selesai</span>}
                          </div>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                          <div className={`${color} h-2.5 rounded-full transition-all duration-700`} style={{ width: `${item.percentage}%` }} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}