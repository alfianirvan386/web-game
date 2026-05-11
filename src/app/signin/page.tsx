'use client'

import Link from 'next/link'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function SigninPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    school: '',
    major: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Password tidak cocok!')
      return
    }

    setLoading(true)

    try {
      // 1. Daftarkan user ke Supabase Auth
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })

      if (signUpError) throw signUpError

      // 2. Simpan data profil ke tabel profiles
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: data.user.id,
            name: formData.name,
            email: formData.email,
            phone: '',
            school: formData.school,
            major: formData.major,
            created_at: new Date().toISOString()
          })

        if (profileError) throw profileError
      }

      router.push('/profil')
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Terjadi kesalahan, coba lagi.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center p-4 py-12">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-blue-600 text-white font-bold text-3xl w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
            NL
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Daftar</h1>
          <p className="text-gray-600">Buat akun baru di Nara Learning</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-2 border-red-300 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSignin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama lengkap Anda"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Sekolah/Institusi</label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              placeholder="Nama sekolah Anda"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Program Keahlian</label>
            <select
              name="major"
              value={formData.major}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition text-sm"
              required
            >
              <option value="">Pilih program keahlian</option>
              <option value="TKJ">Teknik Komputer dan Jaringan</option>
              <option value="RPL">Rekayasa Perangkat Lunak</option>
              <option value="BDP">Bisnis Daring dan Pemasaran</option>
              <option value="MM">Multimedia</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Konfirmasi Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition text-sm"
              required
            />
          </div>

          <div className="flex items-start">
            <input type="checkbox" className="mr-2 mt-1" required />
            <span className="text-gray-600 text-sm">
              Saya setuju dengan{' '}
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                Syarat & Ketentuan
              </Link>
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-bold text-lg disabled:bg-gray-400 mt-4"
          >
            {loading ? 'Memproses...' : 'Daftar'}
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600 text-sm">
          Sudah punya akun?{' '}
          <Link href="/login" className="text-blue-600 hover:text-blue-700 font-bold">
            Masuk di sini
          </Link>
        </div>
      </div>
    </div>
  )
}