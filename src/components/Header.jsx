'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user || null)
      if (session?.user) {
        const { data } = await supabase
          .from('profiles')
          .select('name, avatar_url')
          .eq('id', session.user.id)
          .maybeSingle()
        setProfile(data)
      }
      setLoadingAuth(false)
    }
    checkUser()

    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user || null)
      if (session?.user) {
        const { data } = await supabase
          .from('profiles')
          .select('name, avatar_url')
          .eq('id', session.user.id)
          .maybeSingle()
        setProfile(data)
      } else {
        setProfile(null)
      }
      setLoadingAuth(false)
    })

    return () => authListener.subscription.unsubscribe()
  }, [])

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/materi', label: 'Materi' },
    { href: '/game', label: 'Game' },
    { href: '/profil', label: 'Profil' },
    { href: '/about', label: 'Tentang' },
  ]

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/5'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-md shadow-blue-200 group-hover:shadow-blue-300 transition-all group-hover:scale-105">
              <span className="text-white font-black text-sm tracking-tighter">EG</span>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <span className="text-lg font-black text-gray-900 tracking-tight">EduGame</span>
            <div className="text-[10px] text-blue-500 font-semibold -mt-1 tracking-wide">PLATFORM TKJ</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-2">
          {loadingAuth ? (
            <div className="w-24 h-9 bg-gray-100 animate-pulse rounded-xl" />
          ) : user ? (
            <Link
              href="/profil"
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <div className="w-7 h-7 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                {profile?.avatar_url ? (
                  <img src={profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white text-xs font-bold">
                    {(profile?.name || user.email)?.[0]?.toUpperCase()}
                  </span>
                )}
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 max-w-[100px] truncate">
                {profile?.name || user.email?.split('@')[0]}
              </span>
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-blue-600 rounded-xl hover:bg-gray-50 transition-all"
              >
                Masuk
              </Link>
              <Link
                href="/signin"
                className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl hover:from-blue-600 hover:to-blue-700 shadow-md shadow-blue-200 hover:shadow-blue-300 transition-all hover:-translate-y-0.5"
              >
                Daftar Gratis
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                {label}
              </Link>
            )
          })}

          <div className="pt-3 border-t border-gray-100 mt-2">
            {loadingAuth ? (
              <div className="h-10 bg-gray-100 animate-pulse rounded-xl" />
            ) : user ? (
              <Link
                href="/profil"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  {profile?.avatar_url ? (
                    <img src={profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-white font-bold">
                      {(profile?.name || user.email)?.[0]?.toUpperCase()}
                    </span>
                  )}
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm">{profile?.name || 'User'}</div>
                  <div className="text-xs text-gray-500">{user.email}</div>
                </div>
              </Link>
            ) : (
              <div className="flex gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-2.5 text-sm font-semibold text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
                >
                  Masuk
                </Link>
                <Link
                  href="/signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-md shadow-blue-200 transition-all"
                >
                  Daftar
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
