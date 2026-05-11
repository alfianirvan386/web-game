import Link from 'next/link'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top wave decoration */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-sm">EG</span>
              </div>
              <div>
                <span className="text-white font-black tracking-tight">EduGame</span>
                <div className="text-[10px] text-blue-400 font-semibold -mt-0.5 tracking-wide">PLATFORM TKJ</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Platform edukasi interaktif untuk Teknik Komputer dan Jaringan. Belajar lebih seru, lebih mudah, lebih efektif.
            </p>
            <div className="flex gap-3">
              {['📘', '🐦', '📷', '🎥'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-base transition-all hover:-translate-y-0.5"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Menu</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Beranda' },
                { href: '/materi', label: 'Materi' },
                { href: '/game', label: 'Game & Quiz' },
                { href: '/profil', label: 'Profil' },
                { href: '/about', label: 'Tentang Kami' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block transition-transform"
                  >
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              {['Tutorial', 'FAQ', 'Blog', 'Dokumentasi', 'Sertifikasi'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    → {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Kontak</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <span>📧</span>
                <span>info@edugame.com</span>
              </p>
              <p className="flex items-start gap-2">
                <span>📱</span>
                <span>+62 878 9565 6337</span>
              </p>
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>Indonesia</span>
              </p>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Subscribe newsletter:</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email kamu"
                  className="flex-1 bg-gray-800 border border-gray-700 text-white text-sm px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-500"
                />
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© 2026 EduGame. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
