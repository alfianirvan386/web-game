'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface LeaderboardEntry {
  name: string
  average_score: number
}

const quizData: Record<number, { question: string; options: string[]; correct: number }[]> = {
  1: [ // Proses Bisnis TJKT
    { question: 'Apa yang dimaksud dengan Proses Bisnis di bidang TJKT?', options: ['Cara membeli perangkat jaringan', 'Serangkaian aktivitas terstruktur untuk menghasilkan layanan jaringan berkualitas', 'Proses instalasi kabel UTP', 'Cara mengkonfigurasi router'], correct: 1 },
    { question: 'Dokumen yang dihasilkan pada tahap Perencanaan proyek TJKT adalah?', options: ['Test Evidence Report', 'As-Built Drawing', 'Project Charter dan Project Management Plan', 'BAST (Berita Acara Serah Terima)'], correct: 2 },
    { question: 'WBS dalam manajemen proyek TJKT singkatan dari?', options: ['Wireless Broadband System', 'Work Breakdown Structure', 'Wide Band Standard', 'Web Based Service'], correct: 1 },
    { question: 'Pada tahap Analisis Kebutuhan, dokumen yang dihasilkan adalah?', options: ['Project Charter', 'SRS (System Requirements Specification)', 'As-Built Drawing', 'IPAM Spreadsheet'], correct: 1 },
    { question: 'UAT dalam proses pengujian jaringan singkatan dari?', options: ['Universal Access Technology', 'User Acceptance Test', 'Unified Application Tool', 'Unified Access Terminal'], correct: 1 },
    { question: 'Apa yang dimaksud dengan SLA dalam layanan maintenance jaringan?', options: ['System Log Analysis', 'Service Level Agreement — garansi response dan resolve time', 'Software License Agreement', 'Structured LAN Architecture'], correct: 1 },
    { question: 'Framework internasional manajemen layanan IT yang paling umum digunakan adalah?', options: ['ITIL v4', 'IEEE 802.11', 'TIA-568', 'PMBOK saja'], correct: 0 },
    { question: 'Tahap mana dalam proses bisnis TJKT yang menghasilkan As-Built Drawing?', options: ['Perencanaan', 'Analisis Kebutuhan', 'Implementasi', 'Serah Terima'], correct: 3 }
  ],
  2: [ // Perkembangan Teknologi TJKT
    { question: 'Teknologi seluler generasi keberapa yang pertama menggunakan arsitektur all-IP?', options: ['2G', '3G', '4G LTE', '5G'], correct: 2 },
    { question: 'Tiga pilar use case 5G yang didefinisikan ITU-R adalah?', options: ['WiFi, Fiber, Seluler', 'eMBB, URLLC, mMTC', 'LTE, NR, mmWave', 'IoT, Cloud, Edge'], correct: 1 },
    { question: 'Microwave Link menggunakan jenis media transmisi apa?', options: ['Kabel UTP', 'Kabel Fiber Optik', 'Gelombang elektromagnetik frekuensi tinggi (Line of Sight)', 'Kabel Coaxial'], correct: 2 },
    { question: 'Prinsip fisika yang digunakan Fiber Optik untuk mentransmisikan data adalah?', options: ['Electromagnetic Induction', 'Total Internal Reflection', 'Photoelectric Effect', 'Piezoelectric Effect'], correct: 1 },
    { question: 'DWDM pada Fiber Optik singkatan dari?', options: ['Digital Wideband Data Multiplexing', 'Dense Wavelength Division Multiplexing', 'Dual Wire Data Management', 'Dynamic WAN Distribution Module'], correct: 1 },
    { question: 'Protokol komunikasi IoT yang paling populer untuk jaringan bandwidth terbatas adalah?', options: ['HTTP/REST', 'FTP', 'MQTT', 'SMTP'], correct: 2 },
    { question: 'Model layanan cloud di mana pengguna hanya menggunakan aplikasi tanpa kelola server disebut?', options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'], correct: 2 },
    { question: 'Latensi ultra-rendah 5G yang memungkinkan remote surgery adalah?', options: ['<50ms', '<10ms', '<1ms', '<100ms'], correct: 2 }
  ],
  3: [ // Profesi & Kewirausahaan TJKT
    { question: 'Menurut laporan Kemenkominfo 2023, Indonesia kekurangan berapa tenaga IT profesional per tahun?', options: ['100.000', '300.000', '600.000', '1.000.000'], correct: 2 },
    { question: 'Sertifikasi networking entry-level dari Cisco yang paling diakui global adalah?', options: ['MTCNA', 'CCNA', 'CompTIA A+', 'JNCIA'], correct: 1 },
    { question: 'Model bisnis Managed IT Services memiliki keunggulan utama berupa?', options: ['Modal awal sangat besar', 'Recurring revenue bulanan yang stabil dan predictable', 'Hanya melayani perusahaan besar', 'Tidak perlu keahlian teknis'], correct: 1 },
    { question: 'Profesi cybersecurity yang bertugas menguji keamanan sistem dengan metode penyerang atas izin disebut?', options: ['SOC Analyst', 'Network Administrator', 'Penetration Tester', 'Cloud Engineer'], correct: 2 },
    { question: 'Technopreneur adalah?', options: ['Teknisi yang bekerja di perusahaan besar', 'Wirausahawan yang memanfaatkan teknologi sebagai basis bisnisnya', 'Instruktur pelatihan IT', 'Konsultan manajemen saja'], correct: 1 },
    { question: 'Sertifikasi cloud yang paling populer untuk entry-level di Indonesia adalah?', options: ['CCIE', 'AWS Cloud Practitioner', 'OSCP', 'CISSP'], correct: 1 },
    { question: 'Bug Bounty dalam cybersecurity adalah?', options: ['Program latihan hacking ilegal', 'Program di mana perusahaan membayar untuk kerentanan yang ditemukan dan dilaporkan', 'Software antivirus gratis', 'Kursus keamanan jaringan online'], correct: 1 },
    { question: 'Jenjang karir Network Engineer yang paling senior secara teknis adalah?', options: ['NOC Analyst', 'Network Engineer', 'Senior Network Engineer', 'Network Architect'], correct: 3 }
  ],
  4: [ // K3LH & Budaya Kerja Industri
    { question: 'UU Keselamatan Kerja di Indonesia yang mengatur K3 secara umum adalah?', options: ['UU No. 1 Tahun 1970', 'UU No. 13 Tahun 2003', 'UU No. 36 Tahun 2009', 'UU No. 11 Tahun 2020'], correct: 0 },
    { question: 'ESD dalam konteks K3 elektronik singkatan dari?', options: ['Electronic System Design', 'Electrostatic Discharge', 'Emergency Shutdown Device', 'External Signal Detector'], correct: 1 },
    { question: 'APD wajib saat melakukan pekerjaan di ketinggian adalah?', options: ['Sarung tangan karet', 'Safety glasses saja', 'Full body harness dengan shock absorbing lanyard', 'Masker N95'], correct: 2 },
    { question: 'Bahaya tersembunyi saat bekerja dengan kabel Fiber Optik adalah?', options: ['Tegangan listrik tinggi', 'Serat kaca yang tidak terlihat dapat melukai kulit dan mata', 'Gas beracun dari kabel', 'Sinyal radio berbahaya'], correct: 1 },
    { question: 'Metode 5R dalam budaya kerja industri berasal dari budaya negara mana?', options: ['Amerika Serikat', 'Korea Selatan', 'Jepang (5S)', 'Jerman'], correct: 2 },
    { question: '"R" pertama dalam 5R yang berarti menyingkirkan barang tidak perlu adalah?', options: ['Rapi', 'Resik', 'Ringkas', 'Rawat'], correct: 2 },
    { question: 'HIRA dalam manajemen risiko K3 singkatan dari?', options: ['High Impact Risk Analysis', 'Hazard Identification and Risk Assessment', 'Hardware Infrastructure Risk Audit', 'Human Integrated Risk Awareness'], correct: 1 },
    { question: 'Near-Miss dalam K3 adalah?', options: ['Kecelakaan yang mengakibatkan kematian', 'Kejadian yang hampir menjadi kecelakaan — penting dilaporkan', 'Alat pelindung diri yang hampir rusak', 'Kondisi pekerja yang hampir pingsan'], correct: 1 }
  ],
  5: [ // Prinsip Dasar TJKT
    { question: 'Komponen komputer yang berfungsi sebagai "otak" untuk melakukan semua kalkulasi adalah?', options: ['RAM', 'Storage', 'CPU (Processor)', 'GPU'], correct: 2 },
    { question: 'Urutan wiring T568B yang benar dari pin 1-8 adalah?', options: ['W-Gr, Gr, W-Or, Bl, W-Bl, Or, W-Br, Br', 'W-Or, Or, W-Gr, Bl, W-Bl, Gr, W-Br, Br', 'Or, W-Or, Gr, W-Gr, Bl, W-Bl, Br, W-Br', 'W-Bl, Bl, W-Or, Or, W-Gr, Gr, W-Br, Br'], correct: 1 },
    { question: 'Topologi jaringan yang paling umum digunakan di lab komputer sekolah adalah?', options: ['Bus', 'Ring', 'Star', 'Mesh'], correct: 2 },
    { question: 'OSI Model terdiri dari berapa layer?', options: ['5', '6', '7', '8'], correct: 2 },
    { question: 'Pada subnet /24, berapa jumlah host yang dapat digunakan?', options: ['256', '255', '254', '253'], correct: 2 },
    { question: 'Perintah Linux untuk melihat isi direktori adalah?', options: ['pwd', 'cd', 'ls', 'mkdir'], correct: 2 },
    { question: 'Layer OSI yang bertanggung jawab untuk pengalamatan IP dan routing adalah?', options: ['Layer 2 - Data Link', 'Layer 3 - Network', 'Layer 4 - Transport', 'Layer 5 - Session'], correct: 1 },
    { question: 'NVMe SSD dibandingkan HDD memiliki keunggulan utama berupa?', options: ['Kapasitas jauh lebih besar', 'Harga lebih murah', 'Kecepatan baca/tulis 50x lebih cepat', 'Lebih tahan terhadap benturan saja'], correct: 2 }
  ],
  6: [ // Media & Jaringan Telekomunikasi
    { question: 'Kabel UTP kategori berapa yang mendukung 10 Gbps hingga jarak 100 meter?', options: ['Cat5e', 'Cat6', 'Cat6A', 'Cat7'], correct: 2 },
    { question: 'Standar kabel UTP yang paling umum digunakan untuk jaringan baru saat ini adalah?', options: ['Cat5e', 'Cat6', 'Cat3', 'Cat4'], correct: 1 },
    { question: 'Kabel Coaxial RG-6 paling umum digunakan untuk?', options: ['Jaringan LAN komputer', 'Distribusi TV kabel dan internet ISP', 'Koneksi server ke switch', 'Kabel telepon'], correct: 1 },
    { question: 'Perbedaan utama SMF (Single Mode Fiber) vs MMF (Multimode Fiber) adalah?', options: ['SMF lebih murah dari MMF', 'SMF untuk jarak jauh (km), MMF untuk jarak dekat dalam gedung', 'MMF lebih cepat dari SMF', 'SMF dan MMF sama saja'], correct: 1 },
    { question: 'Standar keamanan WiFi yang paling kuat dan terbaru adalah?', options: ['WEP', 'WPA', 'WPA2-AES', 'WPA3-SAE'], correct: 3 },
    { question: 'WiFi 6 (802.11ax) memperkenalkan teknologi apa untuk efisiensi di lingkungan padat?', options: ['MIMO', 'OFDMA', 'DSSS', 'FHSS'], correct: 1 },
    { question: 'Frekuensi WiFi 2.4 GHz memiliki keunggulan dibanding 5 GHz berupa?', options: ['Kecepatan lebih tinggi', 'Lebih sedikit gangguan interferensi', 'Jangkauan lebih jauh dan penetrasi dinding lebih baik', 'Lebih banyak channel yang tersedia'], correct: 2 },
    { question: 'Jarak maksimum kabel UTP Cat6 untuk mendukung 1 Gbps adalah?', options: ['55 meter', '100 meter', '150 meter', '200 meter'], correct: 1 }
  ]
}

export default function GamePage() {
  const [activeFilter, setActiveFilter] = useState('Semua Game')
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [quizFinished, setQuizFinished] = useState(false)
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [questionTimeLeft, setQuestionTimeLeft] = useState(20)
  const [autoNextCountdown, setAutoNextCountdown] = useState(0)

  const fetchLeaderboard = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('name, average_score')
      .order('average_score', { ascending: false })
      .limit(5)
    if (!error && data) setLeaderboard(data as LeaderboardEntry[])
  }

  useEffect(() => {
    fetchLeaderboard()
    const sub = supabase.channel('live-leaderboard')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'profiles' }, () => fetchLeaderboard())
      .subscribe()
    return () => { supabase.removeChannel(sub) }
  }, [])

  // Timer untuk soal (20 detik per soal)
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (selectedQuiz && !quizFinished && !answered && questionTimeLeft > 0) {
      timer = setInterval(() => {
        setQuestionTimeLeft(prev => {
          if (prev <= 1) {
            // Waktu habis, otomatis ke soal berikutnya
            const questions = quizData[selectedQuiz!]
            if (currentQuestion < questions.length - 1) {
              setCurrentQuestion(q => q + 1)
              setSelectedAnswer(null)
              setAnswered(false)
              setQuestionTimeLeft(20)
              setAutoNextCountdown(0)
            } else {
              setQuizFinished(true)
              syncScoreToProfile(score)
              fetchLeaderboard()
            }
            return 20
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => {
      if (timer) clearInterval(timer)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedQuiz, quizFinished, answered, questionTimeLeft, currentQuestion, score])

  // Timer untuk auto-next soal (5 detik setelah menjawab)
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (selectedQuiz && !quizFinished && answered && autoNextCountdown > 0) {
      timer = setInterval(() => {
        setAutoNextCountdown(prev => {
          if (prev <= 1) {
            const questions = quizData[selectedQuiz!]
            if (currentQuestion < questions.length - 1) {
              setCurrentQuestion(q => q + 1)
              setSelectedAnswer(null)
              setAnswered(false)
              setQuestionTimeLeft(20)
              setAutoNextCountdown(0)
            } else {
              setQuizFinished(true)
              syncScoreToProfile(score)
              fetchLeaderboard()
            }
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => {
      if (timer) clearInterval(timer)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedQuiz, quizFinished, answered, autoNextCountdown, currentQuestion, score])

  const syncScoreToProfile = async (finalScore: number) => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session?.user) return

      const { data: profile, error: fetchError } = await supabase
        .from('profiles')
        .select('average_score, quizzes_completed')
        .eq('id', session.user.id)
        .maybeSingle()

      if (fetchError) throw fetchError

      if (profile) {
        const totalQuestions = quizData[selectedQuiz!].length
        const currentPercentage = Math.round((finalScore / totalQuestions) * 100)
        const oldScore = profile.average_score || 0
        const count = profile.quizzes_completed || 0
        const updatedTotalScore = oldScore + currentPercentage

        await supabase
          .from('profiles')
          .update({
            quizzes_completed: count + 1,
            average_score: updatedTotalScore
          })
          .eq('id', session.user.id)
      }
    } catch (err: unknown) {
      if (err instanceof Error) console.error('Gagal simpan skor:', err.message)
    }
  }

  const quizzes = [
    { id: 1, title: 'Quiz: Proses Bisnis TJKT', description: 'Uji pemahaman tentang alur proses bisnis dan manajemen proyek TJKT', category: 'Bisnis', type: 'Quiz', timeLimit: 4 },
    { id: 2, title: 'Quiz: Perkembangan Teknologi', description: 'Uji pengetahuan tentang 5G, IoT, Fiber Optik, dan Cloud Computing', category: 'Teknologi', type: 'Quiz', timeLimit: 4 },
    { id: 3, title: 'Quiz: Profesi & Kewirausahaan', description: 'Tes wawasan karir, sertifikasi, dan peluang bisnis di bidang TJKT', category: 'Karir', type: 'Quiz', timeLimit: 4 },
    { id: 4, title: 'Quiz: K3LH & Budaya Kerja', description: 'Uji pemahaman keselamatan kerja, APD, dan budaya 5R industri', category: 'K3LH', type: 'Quiz', timeLimit: 4 },
    { id: 5, title: 'Quiz: Prinsip Dasar TJKT', description: 'Hardware, software, topologi, OSI Model, dan IP addressing', category: 'Dasar', type: 'Quiz', timeLimit: 4 },
    { id: 6, title: 'Quiz: Media Jaringan', description: 'Kabel UTP, Coaxial, Fiber Optik, dan teknologi Wireless', category: 'Infrastruktur', type: 'Quiz', timeLimit: 4 }
  ]

  const filters = ['Semua Game', 'Quiz']
  const filteredQuizzes = activeFilter === 'Semua Game' ? quizzes : quizzes.filter(q => q.type === activeFilter)

  const categoryColor: Record<string, string> = {
    'Bisnis': 'bg-blue-100 text-blue-700',
    'Teknologi': 'bg-purple-100 text-purple-700',
    'Karir': 'bg-green-100 text-green-700',
    'K3LH': 'bg-yellow-100 text-yellow-700',
    'Dasar': 'bg-orange-100 text-orange-700',
    'Infrastruktur': 'bg-red-100 text-red-700',
  }

  const categoryIcon: Record<string, string> = {
    'Bisnis': '💼',
    'Teknologi': '📡',
    'Karir': '🎯',
    'K3LH': '⛑️',
    'Dasar': '🖥️',
    'Infrastruktur': '🔗',
  }

  const handleStartQuiz = (quizId: number) => {
    const quiz = quizzes.find(q => q.id === quizId)
    if (!quiz) return

    setSelectedQuiz(quizId)
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setAnswered(false)
    setQuizFinished(false)
    setQuestionTimeLeft(20) // 20 detik per soal
    setAutoNextCountdown(0)
  }

  const handleSelectAnswer = (idx: number) => {
    if (answered) return
    setSelectedAnswer(idx)
    setAnswered(true)
    if (idx === quizData[selectedQuiz!][currentQuestion].correct) {
      setScore(s => s + 1)
    }
    // Mulai countdown 5 detik untuk auto-next
    setAutoNextCountdown(5)
  }

  const handleNext = async () => {
    const questions = quizData[selectedQuiz!]
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(q => q + 1)
      setSelectedAnswer(null)
      setAnswered(false)
      setQuestionTimeLeft(20) // Reset timer ke 20 detik
      setAutoNextCountdown(0)
    } else {
      setQuizFinished(true)
      await syncScoreToProfile(score)
      fetchLeaderboard()
    }
  }

  const handleBackToList = () => {
    setSelectedQuiz(null)
    setQuizFinished(false)
    setSelectedAnswer(null)
    setAnswered(false)
  }

  // ── Tampilan Hasil Akhir ──
  if (quizFinished && selectedQuiz) {
    const questions = quizData[selectedQuiz]
    const quiz = quizzes.find(q => q.id === selectedQuiz)!
    const percentage = Math.round((score / questions.length) * 100)
    const grade = percentage >= 80 ? '🏆 Luar Biasa!' : percentage >= 60 ? '👍 Bagus!' : '📚 Terus Belajar!'

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center">
          <div className="text-6xl mb-4">{percentage >= 80 ? '🏆' : percentage >= 60 ? '🎉' : '📚'}</div>
          <h2 className="text-2xl font-bold mb-1 text-gray-800">{grade}</h2>
          <p className="text-gray-500 mb-6">{quiz.title}</p>
          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <p className="text-5xl font-bold text-blue-600 mb-1">{score}/{questions.length}</p>
            <p className="text-gray-500">Jawaban Benar</p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
              <div className={`h-3 rounded-full transition-all duration-1000 ${percentage >= 80 ? 'bg-green-500' : percentage >= 60 ? 'bg-yellow-500' : 'bg-red-400'}`}
                style={{ width: `${percentage}%` }} />
            </div>
            <p className="text-sm text-gray-500 mt-2">{percentage}% benar</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => handleStartQuiz(selectedQuiz)} className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">🔄 Ulangi</button>
            <button onClick={handleBackToList} className="flex-1 py-3 border-2 border-gray-300 rounded-xl font-semibold hover:border-blue-500 transition text-gray-700">← Menu</button>
          </div>
        </div>
      </div>
    )
  }

  // ── Tampilan Pertanyaan ──
  if (selectedQuiz && !quizFinished) {
    const questions = quizData[selectedQuiz]
    if (currentQuestion >= questions.length) {
      return null // Protective guard
    }
    const current = questions[currentQuestion]
    const progress = ((currentQuestion + 1) / quizData[selectedQuiz].length) * 100
    const timeColor = questionTimeLeft <= 10 ? 'text-red-600' : questionTimeLeft <= 20 ? 'text-yellow-600' : 'text-blue-600'

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-1 text-sm font-bold">
              <span className="text-gray-500">Soal {currentQuestion + 1} dari {quizData[selectedQuiz].length}</span>
              <div className="flex items-center gap-4">
                <span className={`font-mono text-lg font-bold ${timeColor}`}>
                  ⏱️ {questionTimeLeft}s
                </span>
                <span className="text-blue-600">Skor: {score}</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-6 leading-snug text-gray-800">{current.question}</h2>
          <div className="space-y-3 mb-6">
            {current.options.map((opt, idx) => {
              let style = 'border-gray-200 bg-white text-gray-800 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
              if (answered) {
                if (idx === current.correct) style = 'border-green-500 bg-green-50 text-green-800'
                else if (idx === selectedAnswer) style = 'border-red-500 bg-red-50 text-red-800'
                else style = 'border-gray-100 bg-gray-50 text-gray-400'
              }
              return (
                <button key={idx} onClick={() => handleSelectAnswer(idx)} disabled={answered}
                  className={`w-full p-4 text-left border-2 rounded-xl font-medium transition-all duration-200 ${style}`}>
                  <span className="inline-block w-7 h-7 rounded-full border-2 border-current mr-3 text-center text-sm font-bold leading-6">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {opt}
                </button>
              )
            })}
          </div>
          {answered && (
            <>
              <div className={`rounded-xl p-4 mb-4 text-sm font-medium ${selectedAnswer === current.correct ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {selectedAnswer === current.correct ? '✅ Benar! Jawaban kamu tepat.' : `❌ Salah. Jawaban: ${current.options[current.correct]}`}
              </div>
              <div className="text-center mb-3">
                <p className="text-sm text-gray-600">Lanjut ke soal berikutnya dalam</p>
                <p className="text-3xl font-bold text-blue-600">{autoNextCountdown}s</p>
              </div>
              <button onClick={handleNext} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
                {currentQuestion < quizData[selectedQuiz].length - 1 ? 'Soal Berikutnya →' : 'Lihat Hasil 🎉'}
              </button>
            </>
          )}
        </div>
      </div>
    )
  }

  // ── Tampilan Utama ──
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">🎮 Game & Quiz</h1>
          <p className="text-blue-100">Uji pemahamanmu per materi dan bersaing di leaderboard!</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 rounded-full font-bold transition whitespace-nowrap ${activeFilter === f ? 'bg-blue-600 text-white shadow-lg' : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-500'}`}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map(q => (
            <div key={q.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-32 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-300">
                {categoryIcon[q.category] || '❓'}
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${categoryColor[q.category] || 'bg-gray-100 text-gray-700'}`}>{q.category}</span>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2.5 py-0.5 rounded-full font-bold">{quizData[q.id].length} Soal</span>
                  <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-0.5 rounded-full font-bold">⏱️ {q.timeLimit} menit</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{q.title}</h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2">{q.description}</p>
                <button onClick={() => handleStartQuiz(q.id)} className="w-full py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
                  Mulai Quiz
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Leaderboard */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-6">🏆 Top Players (Live)</h2>
          <div className="space-y-3">
            {leaderboard.length === 0 ? (
              <p className="text-gray-400 italic">Belum ada skor tercatat.</p>
            ) : (
              leaderboard.map((p, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:border-blue-200 border border-transparent transition">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-blue-600 w-8">
                      {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}
                    </span>
                    <p className="font-bold">{p.name || 'Siswa'}</p>
                  </div>
                  <p className="font-bold text-blue-600">{p.average_score || 0} pts</p>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
