
import Link from 'next/link'

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Tentang EduGame</h1>
          <p className="text-xl text-blue-100">Platform edukasi interaktif untuk generasi muda Indonesia</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Visi Kami</h2>
              <p className="text-gray-600">
                Menjadi platform edukasi terdepan yang membuat pembelajaran Teknik Komputer dan Jaringan menjadi menyenangkan, interaktif, dan mudah diakses oleh semua siswa di Indonesia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Misi Kami</h2>
              <p className="text-gray-600">
                Memberikan pengalaman belajar yang inovatif melalui kombinasi materi berkualitas, game interaktif, dan assessment yang komprehensif untuk mempersiapkan siswa menghadapi dunia kerja.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Mengapa Memilih EduGame?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">📚</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Materi Komprehensif</h3>
                  <p className="text-gray-600">Kurikulum lengkap sesuai standar Teknik Komputer dan Jaringan dengan konten yang selalu diperbarui.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">🎮</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Belajar Sambil Bermain</h3>
                  <p className="text-gray-600">Gamifikasi membuat pembelajaran lebih menyenangkan dan meningkatkan engagement siswa.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">👨‍🏫</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Pembelajaran Personal</h3>
                  <p className="text-gray-600">Setiap siswa belajar dengan kecepatan mereka sendiri dengan sistem adaptif kami.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">📊</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Analytics & Reporting</h3>
                  <p className="text-gray-600">Pantau progress dengan detail analytics dan laporan komprehensif untuk setiap siswa.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">🌐</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Akses Dimana Saja</h3>
                  <p className="text-gray-600">Platform yang responsive dan dapat diakses dari berbagai perangkat kapan saja.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">🏆</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Sertifikasi</h3>
                  <p className="text-gray-600">Dapatkan sertifikat resmi setelah menyelesaikan setiap tingkatan pembelajaran.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Tim Kami</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
             { name: 'Alfian Irvan Ardianto', position: 'Founder & CEO', img: 'DSC_6255.JPG' },
             { name: 'Gilang Eka S', position: 'Head of Curriculum', img: 'IMG_1774.JPG' },
             { name: 'M Ali Fahmi', position: 'Technical Lead', img: 'IMG_1774.JPG' }
                ].map((member, idx) => (
            <div key={idx} className="text-center">

            {/* Ganti Emoji dengan tag img */}
        <div className="relative w-32 h-32 mx-auto mb-4">
        <img 
          src={member.img} 
          alt={member.name} 
          className="w-full h-full object-cover rounded-full shadow-lg border-2 border-blue-100"
        />
      </div>
      
      <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
      <p className="text-gray-600">{member.position}</p>
    </div>
  ))}
</div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold">10K+</div>
              <p className="mt-2">Pengguna Aktif</p>
            </div>
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold">50+</div>
              <p className="mt-2">Materi</p>
            </div>
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold">100+</div>
              <p className="mt-2">Quiz & Game</p>
            </div>
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold">95%</div>
              <p className="mt-2">Kepuasan User</p>
            </div>
          </div>

          {/* CTA Section */}
          
        </div>
      </section>
    </div>
  )
}

export default About
