'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function MateriPage() {
  const materiList = [
    {
      id: 1,
      title: 'Modul 1: Proses Bisnis di Bidang TJKT',
      description: 'Pemahaman mendalam mengenai siklus hidup layanan IT (ITIL), manajemen proyek jaringan, hingga operasional data center.',
      category: 'Bisnis IT',
      difficulty: 'Pemula'
    },
    {
      id: 2,
      title: 'Modul 2: Teknologi & Infrastruktur',
      description: 'Bedah tuntas teknologi transmisi modern: Arsitektur Seluler 5G, GPON Fiber Optic, protokol IoT, hingga Cloud Computing.',
      category: 'Teknologi',
      difficulty: 'Menengah'
    },
    {
      id: 3,
      title: 'Modul 3: Profesi & Kewirausahaan',
      description: 'Peta jalan jenjang karier, Sertifikasi Internasional, dan membangun bisnis Internet Service Provider (Technopreneur).',
      category: 'Karier IT',
      difficulty: 'Lanjutan'
    },
    {
      id: 4,
      title: 'Modul 4: K3LH & Budaya Industri',
      description: 'Standar Kesehatan & Keselamatan Kerja di area berisiko tinggi (Tower, Kelistrikan) dan tata kelola Data Center.',
      category: 'Keamanan',
      difficulty: 'Menengah'
    },
    {
      id: 5,
      title: 'Modul 5: OSI, Topologi & Subnetting',
      description: 'Pemahaman engineering mengenai Arsitektur Hardware, Enkapsulasi Paket Data, dan Perhitungan Subnetting IPv4.',
      category: 'Sistem',
      difficulty: 'Lanjutan'
    },
    {
      id: 6,
      title: 'Modul 6: Media Transmisi Jaringan',
      description: 'Karakteristik fisik dan standar kecepatan kabel UTP, STP, Coaxial, Fiber Optic, serta gelombang WiFi 6.',
      category: 'Hardware',
      difficulty: 'Menengah'
    },
    {
      id: 7,
      title: 'Modul 7: Alat Ukur & Analisis Jaringan',
      description: 'Metodologi penggunaan perkakas ukur presisi tinggi seperti Tone Generator, Fusion Splicer, OPM, dan OTDR.',
      category: 'Teknik',
      difficulty: 'Lanjutan'
    }
  ]

  // Hanya ada SATU deklarasi categories di sini
  const categories = ['Semua', 'Bisnis IT', 'Teknologi', 'Karier IT', 'Keamanan', 'Sistem', 'Hardware', 'Teknik']

  const [activeCategory, setActiveCategory] = useState('Semua')

  const filteredMateri = activeCategory === 'Semua'
    ? materiList
    : materiList.filter((m) => m.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Materi Pembelajaran</h1>
          <p className="text-xl text-blue-100">Jelajahi kumpulan materi lengkap untuk Teknik Komputer dan Jaringan</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition border-2 ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Materi Grid */}
          {filteredMateri.length === 0 ? (
            <div className="text-center py-16 text-gray-400 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-5xl mb-4">📭</p>
              <p className="text-lg font-medium">Tidak ada materi untuk kategori ini.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMateri.map((materi) => (
                <div key={materi.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition overflow-hidden group">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-6xl">📚</div>
                  </div>

                  <div className="p-6 relative bg-white">
                    <div className="flex gap-2 mb-4">
                      <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold border border-blue-100">
                        {materi.category}
                      </span>
                      <span className={`text-xs px-3 py-1 rounded-full font-bold border ${
                        materi.difficulty === 'Pemula' ? 'bg-green-50 text-green-700 border-green-100' :
                        materi.difficulty === 'Menengah' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' :
                        'bg-red-50 text-red-700 border-red-100'
                      }`}>
                        {materi.difficulty}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">{materi.title}</h3>
                    <p className="text-sm text-gray-500 mb-6 line-clamp-3">{materi.description}</p>

                    <Link
                      href={`/materi/${materi.id}`}
                      className="inline-block w-full text-center bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-bold shadow-sm"
                    >
                      Mulai Pelajari →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}