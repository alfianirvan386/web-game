'use client'

import { User } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default function Home() {
  const [user, setUser] = useState<User | null | undefined>(undefined)

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getSession()
      if (!error) setUser(data?.session?.user ?? null)
    }
    checkUser()

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })

    return () => authListener.subscription.unsubscribe()
  }, [])

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-16 w-72 h-72 bg-blue-400 opacity-10 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800 opacity-20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Platform Pembelajaran Interaktif TKJ #1
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-black text-center leading-tight mb-6 tracking-tight">
            Kuasai Jaringan Komputer{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Lebih Cepat
              </span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-400/20 rounded-full -z-0" />
            </span>
            {' '}& Lebih Menyenangkan
          </h1>

          <p className="text-lg md:text-xl text-blue-100 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            Pelajari materi TKJ secara interaktif, uji kemampuan lewat quiz & game, dan pantau perkembangan belajarmu secara real-time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <Link 
              href="/game" 
              className="inline-flex items-center gap-2 bg-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-blue-50 shadow-xl transition-all hover:-translate-y-0.5"
              style={{ color: '#1d4ed8' }}
            >
              🚀 Masuk ke Stage
            </Link>
            <Link
              href="/materi"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-white/10 backdrop-blur transition-all"
            >
              📚 Lihat Materi
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { value: '10K+', label: 'Pelajar Aktif' },
              { value: '50+', label: 'Materi' },
              { value: '100+', label: 'Quiz & Game' },
            ].map((stat, i) => (
              <div key={i} className="text-center bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-blue-200 text-xs font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="relative h-12 mt-4">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full">
            <path d="M0 48L60 42.7C120 37.3 240 26.7 360 24C480 21.3 600 26.7 720 29.3C840 32 960 32 1080 29.3C1200 26.7 1320 21.3 1380 18.7L1440 16V48H1380C1320 48 1200 48 1080 48C960 48 840 48 720 48C600 48 480 48 360 48C240 48 120 48 60 48H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── FITUR ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Semua yang Kamu Butuhkan
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Dirancang khusus untuk siswa TKJ agar belajar lebih efektif dan menyenangkan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '📚',
                color: 'from-blue-500 to-blue-600',
                bg: 'bg-blue-50',
                title: 'Materi Lengkap',
                desc: 'Kurikulum TKJ yang komprehensif mulai dari dasar jaringan hingga cloud computing, disajikan dalam format slide interaktif.',
                link: '/materi',
                cta: 'Lihat Materi'
              },
              {
                icon: '🎮',
                color: 'from-purple-500 to-purple-600',
                bg: 'bg-purple-50',
                title: 'Game & Quiz',
                desc: 'Uji pemahaman lewat quiz interaktif dan game seru. Bersaing dengan sesama pelajar di papan peringkat.',
                link: '/game',
                cta: 'Main Sekarang'
              },
              {
                icon: '📊',
                color: 'from-green-500 to-green-600',
                bg: 'bg-green-50',
                title: 'Tracking Progress',
                desc: 'Pantau setiap materi yang sudah dikuasai, skor quiz, dan hari belajar secara real-time di dashboard profil.',
                link: '/profil',
                cta: 'Lihat Profil'
              },
            ].map((f, i) => (
              <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 ${f.bg} rounded-2xl flex items-center justify-center text-2xl mb-5`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{f.desc}</p>
                <Link
                  href={f.link}
                  className={`inline-flex items-center gap-1.5 text-sm font-bold bg-gradient-to-r ${f.color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all`}
                >
                  {f.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENGAPA EDUGAME ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Mengapa Memilih EduGame?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: '🎯', title: 'Fokus pada Kompetensi TKJ', desc: 'Materi dirancang khusus sesuai kurikulum SMK Teknik Komputer dan Jaringan yang relevan dengan dunia kerja.' },
              { icon: '👥', title: 'Komunitas Belajar Aktif', desc: 'Bergabunglah dengan ribuan pelajar TKJ yang saling mendukung dan berbagi pengetahuan.' },
              { icon: '🚀', title: 'Belajar Kapan Saja', desc: 'Akses materi dan quiz kapan saja, di mana saja. Platform responsif untuk desktop dan mobile.' },
              { icon: '🏆', title: 'Sistem Pencapaian', desc: 'Dapatkan badge dan sertifikat untuk setiap materi yang diselesaikan sebagai bukti kompetensi.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MATERI PREVIEW ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <div>
              <div className="inline-block bg-blue-50 text-blue-700 text-sm font-bold px-4 py-1.5 rounded-full mb-2">
                MATERI TERBARU
              </div>
              <h2 className="text-3xl font-black text-gray-900">Mulai Belajar Sekarang</h2>
            </div>
            <Link href="/materi" className="text-blue-600 font-bold text-sm hover:underline whitespace-nowrap">
              Lihat semua →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { id: 1, title: 'Dasar-Dasar Jaringan Komputer', cat: 'Jaringan', level: 'Pemula', color: 'bg-blue-500', icon: '🌐' },
              { id: 2, title: 'Konfigurasi Router dan Switch', cat: 'Hardware', level: 'Menengah', color: 'bg-orange-500', icon: '📡' },
              { id: 3, title: 'Keamanan Jaringan', cat: 'Keamanan', level: 'Lanjutan', color: 'bg-red-500', icon: '🔒' },
            ].map((m) => (
              <Link
                key={m.id}
                href={`/materi/${m.id}`}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`${m.color} h-36 flex items-center justify-center text-5xl`}>
                  {m.icon}
                </div>
                <div className="p-5">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full font-semibold">{m.cat}</span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                      m.level === 'Pemula' ? 'bg-green-100 text-green-700' :
                      m.level === 'Menengah' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>{m.level}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">{m.title}</h3>
                  <span className="text-sm font-semibold text-blue-600 group-hover:underline">Pelajari →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      {user !== undefined && (
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6">🎓</div>
            {user ? (
            <>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Lanjutkan Petualanganmu!</h2>
              <p className="text-blue-100 text-lg mb-8">
                Ayo pelajari materi selanjutnya dan selesaikan stage hari ini.
              </p>
              <Link href="/materi" className="inline-flex items-center gap-2 bg-white !text-blue-700 px-8 py-3.5 rounded-xl font-bold text-base hover:bg-blue-50 shadow-xl transition-all hover:-translate-y-0.5">
                🚀 Masuk ke Stage
              </Link>
            </>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Siap Mulai Belajar?</h2>
              <p className="text-blue-100 text-lg mb-8">
                Daftar sekarang dan mulai perjalanan belajar TKJ-mu bersama ribuan pelajar lainnya.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/signin" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-3.5 rounded-xl font-bold text-base hover:bg-blue-50 shadow-xl transition-all hover:-translate-y-0.5">
                  🚀 Daftar Gratis Sekarang
                </Link>
                <Link href="/login" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-white/10 transition-all">
                  Sudah punya akun? Masuk
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
      )}
    </div>
  )
}
