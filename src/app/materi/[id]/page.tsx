'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, use, useEffect, useRef } from 'react'

interface Slide {
  title: string
  content: string
  image: string
  points: string[]
  example: {
    title: string
    description: string
  }
}

interface MateriData {
  title: string
  category: string
  difficulty: string
  duration: string
  description: string
  youtubeId: string
  slides: Slide[]
}

const materiDetails: Record<string, MateriData> = {
  '1': {
    title: 'Proses Bisnis di Bidang TJKT',
    category: 'Bisnis',
    difficulty: 'Pemula',
    duration: '60 menit',
    description: 'Pelajari alur kerja industri TJKT mulai dari perencanaan, analisis kebutuhan, desain, implementasi, pengujian, serah terima, hingga perawatan jangka panjang secara profesional.',
    youtubeId: 'zq4rOPsIcZU',
    slides: [
      {
        title: 'Pengertian dan Pentingnya Proses Bisnis TJKT',
        image: '🏢',
        content: 'Proses bisnis TJKT adalah serangkaian aktivitas terstruktur yang dilakukan oleh individu, tim, atau perusahaan untuk menghasilkan layanan jaringan yang memenuhi kebutuhan pelanggan secara konsisten dan berkualitas tinggi. Tanpa proses bisnis yang terstruktur, pekerjaan teknis yang bagus sekalipun bisa gagal karena tidak memenuhi ekspektasi pelanggan, melebihi anggaran, atau tidak selesai tepat waktu.\n\nStandar internasional seperti ITIL v4 (Information Technology Infrastructure Library) dan ISO 20000 adalah framework yang digunakan perusahaan IT profesional di seluruh dunia untuk membangun proses bisnis yang terukur, dapat diaudit, dan dapat terus ditingkatkan. ITIL v4 mendefinisikan 34 praktik manajemen layanan yang mencakup seluruh siklus hidup layanan IT dari desain hingga pensiun.\n\nBagi pelajar TJKT, memahami proses bisnis bukan sekadar teori tambahan — ini adalah apa yang membedakan gaji Rp 5 juta dari Rp 15 juta untuk pekerjaan di bidang yang sama secara teknis. Perusahaan bersedia membayar lebih untuk profesional yang bisa mengelola proyek secara mandiri, berkomunikasi dengan pelanggan, dan mendokumentasikan pekerjaan dengan standar industri.',
        points: [
          'Proses bisnis adalah alur kerja sistematis terdokumentasi yang memastikan konsistensi kualitas di setiap proyek',
          'Melibatkan: pelanggan (pemberi proyek), project manager (koordinator), teknisi lapangan, dan manajemen',
          'Standar internasional: ITIL v4 (manajemen layanan IT), PMBOK (manajemen proyek), ISO 20000',
          'Setiap tahap menghasilkan dokumen deliverable yang menjadi dasar kontraktual tahap berikutnya',
          'Kegagalan di satu tahap berdampak berantai ke semua tahap selanjutnya secara signifikan',
          'Perusahaan bersertifikat ISO lebih mudah memenangkan tender pemerintah dan korporat besar',
          'Proses terstandar memungkinkan onboarding karyawan baru lebih cepat dan konsisten',
          'Data PMI: 70% kegagalan proyek IT disebabkan perencanaan buruk, bukan masalah teknis'
        ],
        example: {
          title: '💡 Mengapa Proses Bisnis Menentukan Kemenangan Tender',
          description: 'PT. Nusa Network Solutions memenangkan tender jaringan 50 sekolah senilai Rp 2,5 miliar bukan karena harga termurah, tetapi karena proposal mereka menyertakan: WBS (Work Breakdown Structure) detail 47 task, Risk Register dengan 23 risiko dan mitigasinya, rekam jejak 15 proyek sejenis terdokumentasi, sertifikasi ISO 9001, dan SLA dengan penalti terukur. Perusahaan lain yang lebih murah gugur di tahap seleksi administrasi karena tidak memiliki dokumentasi proses yang memadai.'
        }
      },
      {
        title: 'Tahap 1 — Perencanaan (Planning)',
        image: '📋',
        content: 'Perencanaan adalah tahap di mana seluruh proyek TJKT didefinisikan secara detail sebelum satu sekrup pun dipasang. Ini mencakup tiga dimensi utama yang saling terkait: ruang lingkup (scope) — apa yang akan dan tidak akan dikerjakan; jadwal (schedule) — kapan setiap pekerjaan dilakukan dan berapa lamanya; dan anggaran (budget) — berapa biaya setiap komponen pekerjaan.\n\nAlat bantu perencanaan yang wajib dikuasai: WBS (Work Breakdown Structure) untuk memecah proyek menjadi task-task kecil yang terukur dan dapat dikerjakan oleh satu orang dalam 1-2 hari; Gantt Chart untuk memvisualisasikan jadwal, urutan, dan ketergantungan antar task; Risk Register untuk mengidentifikasi potensi masalah sebelum terjadi dan menyiapkan rencana respons; serta RACI Matrix untuk memperjelas siapa yang Responsible, Accountable, Consulted, dan Informed untuk setiap task.\n\nDokumen output wajib dari tahap perencanaan: Project Charter (dokumen resmi yang mengotorisasi dimulainya proyek, menetapkan tujuan, dan menunjuk project manager) dan Project Management Plan (panduan komprehensif bagaimana proyek akan dieksekusi, dipantau, dan dikontrol).',
        points: [
          'Scope Definition: tentukan secara tertulis apa yang dikerjakan (in-scope) dan apa yang tidak (out-of-scope)',
          'WBS (Work Breakdown Structure): pecah proyek menjadi deliverable hierarkis hingga level task yang dapat dikerjakan',
          'Gantt Chart: jadwal visual dengan durasi, urutan, dependensi, dan milestone penting proyek',
          'Estimasi biaya: material (kabel, perangkat, rak), jasa (tenaga kerja), overhead, dan kontingensi 10-15%',
          'Risk Register: daftar risiko dengan probability, impact, risk score, dan rencana mitigasi spesifik',
          'RACI Matrix: kejelasan peran setiap anggota tim untuk mencegah tumpang tindih dan kekosongan tanggung jawab',
          'Stakeholder analysis: identifikasi semua pihak yang terdampak, tingkat pengaruh, dan strategi komunikasi',
          'Baseline: setelah disetujui, scope-schedule-cost menjadi baseline yang dijaga dan perubahan harus formal'
        ],
        example: {
          title: '💡 Contoh WBS Proyek Pemasangan Jaringan Sekolah',
          description: 'Proyek "Instalasi Jaringan Lab Komputer SMK": Level 1 (Proyek) → Level 2 (Perencanaan, Pengadaan, Instalasi Fisik, Konfigurasi, Pengujian, Serah Terima) → Level 3: Instalasi Fisik dipecah menjadi (Pemasangan Conduit, Penarikan Kabel UTP, Pemasangan Patch Panel, Pemasangan Switch, Pemasangan AP) → Level 4: Penarikan Kabel dipecah per lantai. Total: 47 task teridentifikasi. Setiap task: 1 penanggungjawab, durasi estimasi, dan dependensi tercatat. Dengan WBS ini, monitoring progress menjadi sangat mudah dan akurat.'
        }
      },
      {
        title: 'Tahap 2 — Analisis Kebutuhan Pelanggan',
        image: '🔍',
        content: 'Analisis kebutuhan adalah proses menggali apa yang sebenarnya dibutuhkan pelanggan dari sistem jaringan yang akan dibangun — bukan hanya apa yang mereka katakan inginkan. Perbedaan antara "want" dan "need" ini sangat krusial: pelanggan mungkin berkata "kami butuh WiFi yang cepat", tetapi analisis mendalam bisa mengungkap bahwa masalah sebenarnya adalah bottleneck di backbone switch, bukan kualitas access point.\n\nTeknik analisis kebutuhan yang efektif: wawancara terstruktur dengan stakeholder kunci menggunakan pertanyaan terbuka yang menggali konteks dan dampak bisnis; observasi langsung penggunaan sistem existing (jika ada) untuk melihat pain point yang tidak disebutkan dalam wawancara; pengukuran traffic jaringan existing menggunakan tools seperti PRTG, Wireshark, atau ntopng untuk data kuantitatif; dan analisis dokumen seperti org chart (untuk estimasi pengguna per area) dan denah bangunan (untuk perencanaan coverage wireless).\n\nHasil analisis kebutuhan harus didokumentasikan dalam SRS (System Requirements Specification) yang membedakan antara functional requirements (apa yang sistem harus bisa lakukan) dan non-functional requirements (bagaimana sistem harus berperforma: kecepatan, ketersediaan, keamanan, skalabilitas). SRS yang ditandatangani kedua pihak adalah perlindungan hukum bagi penyedia jasa.',
        points: [
          'User requirements: berapa pengguna aktif bersamaan, jenis aktivitas (browsing/video/transfer file besar/VoIP)',
          'Network requirements: bandwidth total yang dibutuhkan, latensi maksimum yang bisa diterima, redundancy',
          'Site survey: denah fisik, jarak antar titik, material penghalang (beton/kaca/besi), sumber interferensi',
          'Security requirements: siapa yang perlu dipisahkan (VLAN), autentikasi (802.1X/RADIUS/portal), firewall',
          'Availability requirements: berapa % uptime yang dibutuhkan? 99% = max 87 jam downtime/tahun',
          'Scalability requirements: berapa pertumbuhan yang diantisipasi dalam 3-5 tahun ke depan?',
          'Integration requirements: sistem apa yang sudah ada dan harus diintegrasikan (CCTV, telepon, akses kontrol)?',
          'Budget constraints: anggaran yang tersedia, prioritas jika tidak cukup, opsi untuk upgrade bertahap'
        ],
        example: {
          title: '💡 Site Survey yang Menyelamatkan Proyek WiFi Rumah Sakit',
          description: 'Tim teknisi melakukan site survey di RS Harapan Sehat sebelum mendesain WiFi. Temuan kritis: dinding beton 30 cm antara ruang ICU dan nurse station melemahkan sinyal -35 dB (hampir tidak tembus). Peralatan MRI di lantai 2 menghasilkan interferensi kuat di frekuensi 2.4 GHz. Solusi yang hanya bisa ditemukan lewat site survey: gunakan frekuensi 5 GHz di sekitar MRI, pasang AP tambahan di setiap sisi dinding tebal, gunakan antena directional untuk hallway panjang. Tanpa site survey, desain berdasarkan denah saja pasti gagal dan proyek harus diulang.'
        }
      },
      {
        title: 'Tahap 3 — Desain Sistem Jaringan',
        image: '📐',
        content: 'Desain jaringan adalah proses mentransformasi kebutuhan yang sudah terdefinisi menjadi blueprint teknis yang spesifik, detail, dan dapat langsung diimplementasikan oleh teknisi di lapangan. Desain yang baik mencegah 80% masalah implementasi karena semua keputusan teknis dipikirkan matang-matang di atas kertas sebelum dikerjakan di lapangan.\n\nDesain jaringan enterprise profesional mengikuti model hierarki tiga layer Cisco yang sudah terbukti: Core Layer (switch/router berkapasitas tinggi yang menjadi "tulang punggung" — harus ultra-reliable, berkecepatan tinggi, dan tidak boleh ada konfigurasi policy yang kompleks di sini), Distribution Layer (tempat routing antar VLAN, penerapan access control list, dan aggregasi koneksi dari access layer), dan Access Layer (titik koneksi langsung pengguna akhir — switch dengan fitur PoE untuk mendukung access point dan IP phone, port security).\n\nDokumen desain yang wajib dihasilkan: Network Topology Diagram (logical dan physical dalam satu atau dua diagram terpisah), IP Address Plan (tabel alokasi lengkap dengan justifikasi setiap subnet), VLAN Design Document (nama, ID, tujuan, dan port assignment setiap VLAN), Bill of Materials (daftar semua perangkat dan material dengan part number dan harga), serta Cabling Plan (denah fisik dengan jalur kabel, nomor port, dan label sistem).',
        points: [
          'Logical design: arsitektur IP, VLAN, routing protocol, redundancy (HSRP/VRRP), security zones',
          'Physical design: penempatan fisik perangkat, jalur kabel, spesifikasi rack, kebutuhan power dan cooling',
          'Cisco 3-tier model: Core (kecepatan) → Distribution (policy) → Access (konektivitas user)',
          'IP Address Plan: alokasi terstruktur per site/gedung/lantai/fungsi dengan ruang untuk pertumbuhan',
          'VLAN Design: segmentasi logis untuk keamanan dan manajemen traffic (VLAN user, server, manajemen, guest)',
          'Redundancy: LACP bonding, dual uplink, Spanning Tree Protocol, failover untuk kritikalitas tinggi',
          'Wireless design: heat map coverage, channel planning (non-overlapping), roaming seamless, kapasitas per AP',
          'Security design: firewall zones (trust/untrust/DMZ), NAC, 802.1X, port security, DHCP snooping'
        ],
        example: {
          title: '💡 IP Address Plan yang Terstruktur untuk Kampus',
          description: 'Kampus dengan 3 gedung menggunakan supernet 10.0.0.0/16 dibagi terstruktur: Gedung A: 10.1.x.x (VLAN 10 Staff: 10.1.10.0/24, VLAN 20 Siswa: 10.1.20.0/23 untuk 400 siswa, VLAN 30 Server: 10.1.30.0/24, VLAN 40 CCTV: 10.1.40.0/25). Gedung B: 10.2.x.x dengan pola sama. Gedung C: 10.3.x.x. Management VLAN 99: 10.99.0.0/24 untuk semua perangkat aktif. Struktur ini memudahkan troubleshooting ("10.2. berarti Gedung B"), memudahkan firewall rules ("deny any 10.x.20.x to 10.x.30.x" untuk cegah siswa akses server), dan mudah dipahami siapapun yang membaca dokumentasi.'
        }
      },
      {
        title: 'Tahap 4 — Implementasi (Instalasi & Konfigurasi)',
        image: '🔧',
        content: 'Implementasi adalah tahap eksekusi yang mengubah desain di atas kertas menjadi sistem nyata yang berfungsi. Kunci keberhasilan implementasi bukan hanya keahlian teknis, tetapi disiplin untuk mengikuti SOP yang sudah ditetapkan — bahkan ketika kondisi lapangan memaksa untuk "improvisasi". Improvisasi tanpa dokumentasi adalah akar masalah jaringan di masa depan.\n\nPrinsip "Plan the work, work the plan" harus diterapkan secara ketat: setiap penyimpangan dari desain yang disetujui harus melalui proses Change Request formal — bukan keputusan sepihak di lapangan oleh teknisi. Change Request mencatat: apa yang berubah, mengapa berubah, dampak terhadap scope/schedule/budget, dan persetujuan dari project manager dan pelanggan.\n\nImplementasi yang profesional selalu paralel dengan dokumentasi real-time: foto sebelum dan sesudah untuk setiap pekerjaan fisik signifikan, spreadsheet tracking kabel (dari port switch mana ke port patch panel mana ke face plate mana), dan update as-built drawing setiap hari untuk mencerminkan kondisi aktual lapangan. Dokumentasi ini bukan "pekerjaan tambahan" — ini adalah bagian integral dari deliverable proyek.',
        points: [
          'Pre-implementation checklist: verifikasi semua material tersedia dan tidak cacat, tools siap, APD tersedia',
          'Instalasi infrastruktur pasif: conduit, cable tray/basket, rack server, patch panel, face plate outlet',
          'Penarikan dan terminasi kabel UTP: ikuti standar TIA-568-C.2, minimum bending radius 4x diameter kabel',
          'Labeling sistematis: format label konsisten misal [SW01]-[Port24]-[Rm301]-[PC01], tempel di kedua ujung kabel',
          'Konfigurasi perangkat aktif: hostname, VLAN, routing, STP, port security, DHCP, NTP, syslog',
          'Konfigurasi wireless: SSID, security (WPA3/WPA2-Enterprise), channel, power, band steering, roaming',
          'Implementasi keamanan: firewall rules, NAT, ACL, port security, DHCP snooping, dynamic ARP inspection',
          'As-built documentation: update diagram, IP plan, dan cabling schedule setiap akhir hari kerja'
        ],
        example: {
          title: '💡 Change Request yang Menyelamatkan Anggaran Proyek',
          description: 'Saat instalasi, teknisi menemukan konduit yang direncanakan melewati ruang server sudah penuh kabel lama. Solusi alternatif: pasang cable tray eksterior di koridor dengan biaya tambahan Rp 8 juta dan waktu 2 hari. Tanpa Change Request: teknisi memutuskan sendiri, biaya membengkak tanpa approval, pelanggan komplain. Dengan Change Request yang benar: teknisi melaporkan ke PM → PM membuat CR dengan 3 opsi solusi → pelanggan menyetujui opsi terbaik → addendum kontrak ditandatangani → pekerjaan dilanjutkan. Tidak ada kejutan, tidak ada konflik. Professional.'
        }
      },
      {
        title: 'Tahap 5 — Pengujian (Testing & Commissioning)',
        image: '🧪',
        content: 'Pengujian sistematis adalah jaring pengaman terakhir sebelum sistem diserahkan kepada pelanggan. Ini bukan sekadar "cek apakah internet bisa jalan" — pengujian profesional mencakup setiap komponen, setiap koneksi, setiap layanan, dan setiap skenario kegagalan yang relevan.\n\nStruktur pengujian mengikuti tingkatan dari yang paling fundamental: Physical Layer Testing (uji kabel dan koneksi fisik menggunakan LAN tester, OTDR, optical power meter), Link Layer Testing (uji konektivitas Layer 2 dengan ping antar VLAN, verifikasi MAC address table), Network Layer Testing (uji routing antar subnet dan ke internet, traceroute untuk verifikasi jalur), Application Layer Testing (uji setiap layanan: internet, file sharing, CCTV stream, VoIP call), Load Testing (simulasi penggunaan maksimum oleh semua pengguna bersamaan), dan Security Testing (verifikasi isolasi VLAN, firewall rules, akses tidak sah).\n\nSetiap hasil pengujian dicatat dalam Test Evidence Report: parameter diuji, nilai yang diharapkan (berdasarkan spesifikasi), nilai aktual yang terukur, pass/fail, dan jika fail: rencana perbaikan dan tanggal re-test. Test Evidence Report yang ditandatangani pelanggan adalah dokumen hukum yang melindungi penyedia jasa.',
        points: [
          'Physical testing: LAN tester advanced (continuity, wiring map, length, attenuation, NEXT) per port',
          'Fiber testing: OTDR untuk panjang dan lokasi fault, optical power meter untuk insertion loss per link',
          'Connectivity testing: ping matrix (semua perangkat ke semua perangkat), traceroute, DNS resolution',
          'Bandwidth testing: iPerf3 untuk throughput nyata antar titik (bukan hanya link speed yang tertera)',
          'Application testing: akses internet, file sharing, streaming CCTV, VoIP call quality (MOS score)',
          'Security testing: VLAN isolation (coba akses antar VLAN yang seharusnya terblokir), firewall penetration',
          'Load testing: simulasikan 80-100% pengguna aktif bersamaan, ukur degradasi performa (latency, packet loss)',
          'Failover testing: cabut uplink utama, verifikasi traffic berpindah ke backup dalam waktu yang ditentukan SLA'
        ],
        example: {
          title: '💡 Load Test yang Mengungkap Bottleneck Tersembunyi',
          description: 'Saat load test jaringan perkantoran 200 pengguna, koneksi terasa lambat saat 150+ pengguna aktif meski link speed semua 1 Gbps. iPerf3 test mengungkap: throughput antar VLAN turun dari 950 Mbps ke 120 Mbps saat load tinggi. Root cause: inter-VLAN routing dikerjakan di switch distribusi yang CPU-nya terbebani karena juga menjalankan Spanning Tree recalculation dari port yang unstable. Solusi: pindah inter-VLAN routing ke router dedicated, dan stabilkan port yang flapping. Masalah ini tidak akan terdeteksi tanpa load test yang sistematis.'
        }
      },
      {
        title: 'Tahap 6 — Serah Terima dan Dokumentasi Akhir',
        image: '📄',
        content: 'Serah terima proyek adalah momen formal yang menandai perpindahan tanggung jawab operasional dari kontraktor kepada pelanggan. Ini adalah titik di mana pekerjaan konstruksi berakhir dan periode garansi dimulai. Serah terima yang dilakukan dengan benar melindungi kedua pihak dari dispute di masa depan.\n\nPaket dokumen serah terima yang lengkap dan profesional mencakup: As-Built Drawing (diagram topologi fisik dan logis yang mencerminkan kondisi aktual setelah instalasi — bisa berbeda signifikan dari desain awal), IP Address Management (IPAM) spreadsheet yang mencatat setiap IP yang digunakan beserta perangkat, interface, dan VLAN, Configuration Backup (file konfigurasi running config semua perangkat aktif, terenkripsi, tersimpan di storage yang diserahkan kepada pelanggan), Asset Inventory (daftar lengkap semua perangkat dengan serial number, MAC address, firmware version, tanggal garansi berakhir, dan status lisensi), Test Evidence Report yang sudah ditandatangani, User Guide, dan Berita Acara Serah Terima (BAST) yang ditandatangani kedua pihak.\n\nTraining untuk administrator pelanggan adalah bagian serah terima yang sering diabaikan padahal sangat kritis. Administrator yang tidak terlatih akan membuat kesalahan konfigurasi, menambah beban support, dan dapat menganulir garansi. Training minimal mencakup: cara mengakses sistem monitoring, prosedur backup konfigurasi, troubleshooting tier 1 (restart, cek kabel, cek LED), dan prosedur eskalasi yang benar.',
        points: [
          'As-Built Drawing: diagram yang mencerminkan "bagaimana sebenarnya dibangun" — akurat, terbaru, dan mudah dibaca',
          'IP Address Management: spreadsheet IPAM dengan semua IP, MAC, hostname, lokasi, VLAN, dan contact PIC',
          'Configuration backup: running config semua perangkat, diarsipkan dengan timestamp, tersimpan di USB/cloud customer',
          'Asset inventory: serial number, MAC address, firmware, tanggal beli, garansi berakhir, nomor lisensi',
          'Test Evidence Report: rekap hasil semua pengujian yang sudah ditandatangani pelanggan sebagai persetujuan',
          'BAST (Berita Acara Serah Terima): dokumen legal yang menyatakan bahwa pekerjaan telah selesai dan diterima',
          'Training administrator: akses NMS, prosedur backup, troubleshooting dasar, kontak support, eskalasi',
          'Warranty terms: apa yang dijamin, berapa lama, kondisi void warranty, prosedur klaim garansi'
        ],
        example: {
          title: '💡 As-Built Drawing yang Bernilai Miliaran Rupiah',
          description: '5 tahun setelah proyek selesai, perusahaan manufaktur hendak merenovasi gedung A. Kontraktor bangunan perlu tahu jalur kabel untuk menghindari saat drilling dinding. As-Built Drawing yang diserahkan 5 tahun lalu menunjukkan persis jalur semua kabel: UTP di conduit lantai 3 dinding utara, fiber antar gedung di conduit bawah tanah koordinat GPS. Renovasi selesai tanpa satu kabel pun terpotong. Nilai As-Built Drawing yang hanya butuh beberapa jam untuk dibuat: mencegah downtime berhari-hari dan potensi klaim ganti rugi bernilai miliaran.'
        }
      },
      {
        title: 'Tahap 7 — Perawatan Jangka Panjang (Maintenance)',
        image: '🛠️',
        content: 'Maintenance adalah fase yang seringkali menghasilkan lebih banyak nilai bisnis berkelanjutan dibandingkan proyek instalasi satu kali. Dari perspektif penyedia jasa, kontrak maintenance adalah recurring revenue yang stabil dan dapat diprediksi — jauh lebih menguntungkan daripada terus-menerus mencari proyek baru. Dari perspektif pelanggan, maintenance yang baik memastikan infrastruktur yang sudah diinvestasikan tetap berfungsi optimal dan aman.\n\nMaintenance jaringan profesional mencakup dua jenis yang saling melengkapi: Preventive Maintenance (PM) — kegiatan terjadwal yang dilakukan secara proaktif untuk mencegah kegagalan sebelum terjadi, seperti membersihkan debu dari perangkat aktif, memeriksa kondisi fisik kabel dan konektor, memverifikasi log error, dan memperbarui firmware; dan Corrective Maintenance (CM) — respons terhadap kegagalan atau degradasi performa yang sudah terjadi, dengan waktu respons dan resolusi yang diatur dalam SLA.\n\nNetwork Monitoring System (NMS) modern seperti PRTG, Zabbix, Nagios, atau SolarWinds adalah investasi yang wajib ada dalam layanan maintenance. NMS memungkinkan monitoring proaktif 24/7 dengan alert otomatis via SMS/email/WhatsApp ketika ada anomali — sebelum pengguna melapor. Dengan NMS yang dikonfigurasi dengan baik, tim maintenance dapat bertindak dalam hitungan menit setelah masalah pertama kali terdeteksi.',
        points: [
          'Preventive Maintenance schedule: bulanan (inspeksi fisik, cek log), kuartalan (update firmware, backup config), tahunan (audit lengkap)',
          'Network Monitoring: PRTG/Zabbix untuk uptime, traffic utilization, CPU/memory perangkat, response time',
          'Alert management: konfigurasi threshold yang tepat (tidak terlalu sensitif), eskalasi bertingkat, on-call rotation',
          'Patch management: track CVE (Common Vulnerabilities and Exposures) yang relevan, jadwal patching di luar jam sibuk',
          'Backup automation: script backup konfigurasi otomatis ke storage terpusat, verifikasi backup bisa di-restore',
          'SLA tiers: Critical (jaringan mati total) response 1 jam/resolve 4 jam; Major response 2 jam/resolve 8 jam',
          'Change management: setiap perubahan konfigurasi harus melalui approval, memiliki rollback plan, dan terdokumentasi',
          'Monthly report: uptime (%), jumlah insiden per tier, MTTR, rekomendasi untuk peningkatan dan kapasitas'
        ],
        example: {
          title: '💡 Model Bisnis Maintenance yang Menguntungkan',
          description: 'CV Digi Networks mengelola 25 klien korporat dengan kontrak maintenance tier Gold (Rp 8 juta/bulan) dan Silver (Rp 5 juta/bulan). Revenue: 10 klien Gold + 15 klien Silver = Rp 155 juta/bulan = Rp 1,86 miliar/tahun. Biaya operasional: 3 teknisi maintenance (Rp 45 juta), 1 koordinator (Rp 15 juta), tools dan transportasi (Rp 20 juta), NMS license (Rp 5 juta) = total Rp 85 juta/bulan. Margin bersih: Rp 70 juta/bulan. Tanpa perlu mengejar tender baru setiap bulan. Ini adalah model bisnis yang jauh lebih sustainable dan predictable.'
        }
      },
      {
        title: 'Ringkasan — Proses Bisnis TJKT',
        image: '🎓',
        content: 'Tujuh tahap proses bisnis TJKT yang telah kamu pelajari bukan sekadar teori — ini adalah peta jalan dari seorang pelajar SMK menjadi profesional IT yang diakui industri. Setiap tahap membangun di atas tahap sebelumnya, dan menguasai semua tahap ini adalah apa yang membedakan teknisi biasa dari konsultan IT yang berpenghasilan tinggi.\n\nDi era transformasi digital yang semakin cepat, kemampuan untuk mengelola proyek IT secara end-to-end — dari analisis kebutuhan pelanggan hingga penyerahan sistem yang berfungsi dan terdokumentasi — adalah skill yang sangat langka dan sangat dicari. Banyak teknisi yang sangat kompeten secara teknis, tetapi hanya sedikit yang bisa juga mengelola proyek, berkomunikasi dengan pelanggan, dan menghasilkan dokumentasi berkualitas tinggi.\n\nMulai bangun portofolio proses bisnis dari sekarang: dokumentasikan setiap proyek yang kamu kerjakan — bahkan yang kecil seperti setting WiFi rumah saudara. Buat proposal, buat WBS sederhana, dokumentasikan konfigurasi, buat laporan singkat. Portfolio dokumentasi teknis yang baik adalah tiket masuk ke posisi dan gaji yang lebih tinggi.',
        points: [
          '✅ Perencanaan: WBS, Gantt Chart, Risk Register, anggaran, RACI Matrix',
          '✅ Analisis Kebutuhan: site survey, wawancara user, SRS dengan functional dan non-functional requirements',
          '✅ Desain: logical/physical design, IP plan, VLAN design, BOM, cabling plan',
          '✅ Implementasi: SOP ketat, change request untuk perubahan, as-built documentation real-time',
          '✅ Pengujian: physical, connectivity, application, load, security, UAT berlapis dan terdokumentasi',
          '✅ Serah Terima: as-built drawing, IPAM, config backup, asset inventory, BAST, training admin',
          '✅ Maintenance: preventive maintenance terjadwal, NMS 24/7, SLA terukur, change management'
        ],
        example: {
          title: '🚀 Roadmap Karir Berbasis Proses Bisnis',
          description: 'Tahun 1-2 (Teknisi Junior): kuasai implementasi dan troubleshooting teknis, mulai pahami dokumentasi. Tahun 3-4 (Teknisi Senior): mulai pimpin proyek kecil, kuasai tahap perencanaan dan desain, ambil sertifikasi PMP atau CAPM. Tahun 5-7 (Project Manager IT): kelola proyek Rp 500jt-2 miliar secara mandiri, gaji Rp 20-35 juta. Tahun 8+ (IT Consultant/Director): konsultasi strategis, evaluasi teknologi, gaji Rp 50-150 juta atau bangun firma IT sendiri. Setiap langkah butuh fondasi proses bisnis yang kuat.'
        }
      }
    ]
  },

  '2': {
    title: 'Perkembangan Teknologi TJKT',
    category: 'Teknologi',
    difficulty: 'Pemula',
    duration: '65 menit',
    description: 'Memahami secara mendalam evolusi teknologi seluler 1G hingga 5G, Microwave Link, Fiber Optik, Internet of Things (IoT), Smart Device, dan Cloud Computing yang mendominasi industri TJKT saat ini.',
    youtubeId: 'Uspmks5Muws',
    slides: [
      {
        title: 'Evolusi Teknologi Jaringan: 1G hingga 5G',
        image: '📡',
        content: 'Setiap generasi teknologi seluler bukan hanya membawa peningkatan kecepatan, tetapi membuka ekosistem aplikasi dan model bisnis yang sebelumnya tidak mungkin ada. Memahami evolusi ini penting bagi teknisi TJKT untuk memahami arah industri dan mengidentifikasi peluang karir dan bisnis di masa depan.\n\n1G (1980-an) adalah teknologi analog pertama yang hanya mendukung komunikasi suara dengan kualitas buruk dan tanpa enkripsi — siapa saja bisa menyadap pembicaraan dengan radio scanner. 2G (1991) membawa digitalisasi yang merevolusi privasi komunikasi dan melahirkan SMS. 3G (2001) membuka era internet mobile sesungguhnya. 4G LTE (2009) menjadi enabler ekonomi digital — tanpa 4G, tidak ada Gojek, Tokopedia, atau Traveloka seperti yang kita kenal. 5G (2019) membuka babak baru yang mendefinisikan kembali hubungan antara dunia fisik dan digital.\n\nDi Indonesia, timeline adopsi sedikit terlambat dari global: 2G merata sekitar 2000, 3G merata 2012, 4G mulai 2015 dan kini mencakup >90% populasi perkotaan, 5G mulai di-deploy 2021 di Jakarta, Surabaya, Bali, dan Makassar. Setiap generasi membuka lapangan kerja baru bagi teknisi TJKT: 3G butuh ribuan teknisi instalasi BTS, 4G butuh teknisi fiber backhaul, 5G butuh teknisi small cell dan edge computing.',
        points: [
          '1G (1980): analog AMPS, hanya suara, 2.4 Kbps, tidak ada enkripsi, mudah disadap dengan radio scanner',
          '2G (1991): GSM digital, SMS lahir, GPRS 114 Kbps, EDGE 384 Kbps, enkripsi A5 (lemah tapi ada)',
          '3G (2001): WCDMA, HSDPA 14.4 Mbps, HSPA+ 42 Mbps — era BlackBerry, mobile internet sesungguhnya',
          '4G LTE (2009): all-IP architecture, 150 Mbps (Cat.4), 1 Gbps (LTE-A Pro), VoLTE, latensi 30-50ms',
          '5G (2019): tiga use case eMBB/URLLC/mMTC, <1ms latency, 20 Gbps teoritis, network slicing',
          '5G di Indonesia: Telkomsel dan IOH mulai 2021, NSA mode (radio 5G + core 4G), migrasi ke SA bertahap',
          'Infrastruktur pendukung 5G: fiber backhaul kapasitas tinggi ke setiap small cell, edge computing nodes',
          'Peluang TJKT: instalasi small cell 5G, upgrade backhaul fiber, edge data center deployment'
        ],
        example: {
          title: '💡 Dampak Ekonomi Setiap Generasi di Indonesia',
          description: '2G: industri SMS premium dan ring back tone menghasilkan Rp 5 triliun/tahun di puncaknya (2008). 3G: BlackBerry messenger mengubah cara komunikasi bisnis, lahirnya startup portal berita mobile. 4G: Gojek mencapai valuasi USD 10 miliar (2019), Tokopedia USD 7 miliar, Traveloka USD 3 miliar — semua berbasis infrastruktur 4G yang dibangun oleh ribuan teknisi TJKT. 5G: proyeksi McKinsey, 5G akan berkontribusi USD 2,2 triliun ke ekonomi global pada 2030, dengan manufaktur dan logistik sebagai sektor terbesar. Teknisi TJKT yang memahami 5G akan menjadi bagian dari gelombang ekonomi berikutnya.'
        }
      },
      {
        title: 'Teknologi 4G LTE: Fondasi Konektivitas Mobile Modern',
        image: '📱',
        content: '4G LTE (Long Term Evolution) adalah standar yang merevolusi cara manusia terhubung dengan internet — dari "internet di komputer" menjadi "internet di saku kita". Arsitektur all-IP yang menjadi fondasi 4G memungkinkan konvergensi semua layanan komunikasi (data, suara, video) dalam satu infrastruktur jaringan yang efisien.\n\nKomponen utama infrastruktur jaringan 4G yang akan ditemui teknisi TJKT di lapangan: eNodeB (evolved Node B, atau BTS 4G yang lebih cerdas dari BTS sebelumnya — dapat berkomunikasi langsung dengan eNodeB lain via X2 interface), EPC (Evolved Packet Core, terdiri dari MME untuk manajemen mobilitas, S-GW untuk routing data, P-GW untuk koneksi ke internet), dan backhaul (koneksi dari eNodeB ke EPC yang hampir selalu menggunakan fiber optik atau microwave link berkecepatan tinggi).\n\nPemahaman tentang frekuensi band yang digunakan di Indonesia penting untuk troubleshooting dan perencanaan: Band 8 (900 MHz, Telkomsel/IOH) memiliki coverage terluas dan penetrasi gedung terbaik tapi kapasitas terbatas; Band 3 (1800 MHz) adalah workhorse yang digunakan semua operator untuk kapasitas; Band 40 (2300 MHz, Telkomsel) memberikan kapasitas ekstra di area padat dengan coverage yang lebih pendek.',
        points: [
          'Kecepatan: teoritis Cat.4 = 150 Mbps DL/50 Mbps UL; LTE-A Pro Cat.20 hingga 3 Gbps dengan carrier aggregation',
          'Latensi: 30-50 ms — memungkinkan real-time applications: gaming, video conference, telemedicine',
          'OFDMA (DL) dan SC-FDMA (UL): teknik multiple access yang efisien, membagi spektrum menjadi resource blocks',
          'MIMO: 2x2 MIMO pada smartphone biasa, hingga 4x4 MIMO pada perangkat premium',
          'Carrier Aggregation: gabungkan hingga 5 band frekuensi berbeda untuk throughput lebih tinggi',
          'VoLTE: panggilan telepon sebagai paket data IP, kualitas HD Voice (AMR-WB), handover seamless ke 3G',
          'eMBMS (evolved Multimedia Broadcast Multicast Service): siaran konten ke banyak perangkat secara efisien',
          'LTE-U/LAA: 4G yang menggunakan frekuensi unlicensed 5 GHz untuk kapasitas tambahan di indoor'
        ],
        example: {
          title: '💡 Pekerjaan Teknisi TJKT dalam Ekosistem 4G',
          description: 'Di balik streaming Netflix yang lancar di HP kamu, ada ribuan teknisi TJKT yang bekerja: teknisi tower yang memasang dan merawat antena eNodeB di atas menara 40 meter; teknisi fiber yang menarik kabel SMF dari tower ke POP (Point of Presence) operator; teknisi data center yang mengelola perangkat EPC yang memproses jutaan sesi bersamaan; dan NOC engineer yang memonitor seluruh jaringan 24/7. Setiap posisi ini membutuhkan kompetensi TJKT yang berbeda — semua terbuka bagi lulusan TJKT yang kompeten.'
        }
      },
      {
        title: 'Teknologi 5G: Tiga Dimensi Konektivitas Masa Depan',
        image: '🚀',
        content: '5G adalah redesign fundamental dari arsitektur jaringan seluler — bukan evolusi dari 4G, melainkan revolusi yang memungkinkan use case yang secara fisik tidak mungkin dilakukan dengan 4G. Tiga pilar use case 5G yang didefinisikan oleh ITU-R (International Telecommunication Union Radiocommunication Sector) mencerminkan kebutuhan yang sangat berbeda yang dilayani oleh satu platform jaringan yang sama.\n\neMBB (enhanced Mobile Broadband): perluasan dari apa yang sudah ada di 4G, tetapi dengan skala yang jauh lebih besar — target 100 Mbps experience throughput bahkan di area padat seperti stadion 80.000 orang, dan hingga 20 Gbps untuk fixed wireless access. Aplikasi kunci: streaming 8K, AR/VR collaborative yang imersif, holographic communication.\n\nURLLC (Ultra-Reliable Low-Latency Communications): this changes everything — latensi <1ms dengan keandalan 99.9999% memungkinkan aplikasi yang sebelumnya hanya bisa dilakukan dengan koneksi kabel langsung. Remote surgery (dokter di Jakarta mengoperasi pasien di Papua dengan robot bedah), autonomous vehicle coordination (mobil self-driving bertukar informasi dalam microseconds), dan kendali robot industri real-time.\n\nmMTC (massive Machine-Type Communications): menghubungkan 1 juta perangkat per km² dengan konsumsi daya ultra-rendah — memungkinkan sensor IoT berbaterai yang bisa beroperasi 10+ tahun tanpa ganti baterai.',
        points: [
          'eMBB: 100 Mbps experience (bukan hanya peak), 20 Gbps teoritis, untuk AR/VR/8K streaming dan FWA',
          'URLLC: <1ms end-to-end latency, 99.9999% reliability — remote surgery, autonomous vehicle, smart grid control',
          'mMTC: 1 juta device/km² dengan NB-IoT/eMTC, baterai 10 tahun — massive sensor deployment',
          'Frekuensi: Sub-6GHz (coverage luas, Indonesia menggunakan 700MHz/2.1GHz/2.3GHz/3.5GHz untuk 5G)',
          'mmWave (>24GHz): kecepatan sangat tinggi tapi jangkauan <200m — cocok untuk indoor hotspot, stadion',
          'Network Slicing: buat multiple virtual network di atas satu infrastruktur fisik — URLLC slice untuk ambulans, eMBB slice untuk penonton stadion',
          'Massive MIMO: 64-256 antena di satu panel — beamforming ke setiap pengguna secara individual',
          'MEC (Multi-access Edge Computing): proses data di edge (dekat BTS) untuk kurangi latensi ke cloud'
        ],
        example: {
          title: '💡 Smart Factory 5G di Indonesia: Bukan Masa Depan, Ini Sekarang',
          description: 'PT. Astra Honda Motor di Karawang sedang mengimplementasikan 5G Private Network untuk lini produksi motor: 200+ robot AGV (Automated Guided Vehicle) bernavigasi secara autonomous menggunakan 5G URLLC (latensi <5ms), kamera AI 4K memeriksa kualitas cat setiap motor secara real-time menggunakan eMBB, dan ribuan sensor IoT di setiap mesin mengirim data ke edge server menggunakan mMTC. Sebelum 5G, semua ini membutuhkan ribuan meter kabel kontrol yang rumit, mahal, dan mengurangi fleksibilitas tata letak. Dengan 5G, layout pabrik bisa diubah dalam hitungan jam. Peluang karir yang nyata bagi teknisi TJKT yang memahami integrasi 5G.'
        }
      },
      {
        title: 'Microwave Link: Backbone Nirkabel Jarak Jauh',
        image: '📶',
        content: 'Microwave Link (juga disebut Radio Link atau Point-to-Point Wireless) adalah teknologi transmisi data nirkabel yang menggunakan gelombang elektromagnetik frekuensi tinggi (1 GHz hingga 100 GHz) untuk menghubungkan dua titik yang terlihat satu sama lain (Line of Sight) atau hampir terlihat satu sama lain (Near Line of Sight) dengan kapasitas yang setara atau mendekati kapasitas fiber optik.\n\nPrinsip teknis yang harus dipahami: Path Loss (pelemahan sinyal karena jarak dan frekuensi — semakin tinggi frekuensi dan semakin jauh jarak, semakin besar path loss), Rain Attenuation (frekuensi di atas 10 GHz sangat rentan terhadap hujan lebat — di Indonesia dengan curah hujan tinggi, ini faktor kritis), dan Multipath Fading (sinyal yang datang dari jalur berbeda akibat refleksi dari bangunan atau permukaan air dapat saling melemahkan). Perencanaan Microwave Link yang profesional menggunakan software seperti Pathloss, ICS Telecom, atau Radio Mobile untuk memperhitungkan semua faktor ini dan memastikan Fade Margin yang cukup.\n\nDi Indonesia, Microwave Link menjadi tulang punggung backhaul untuk operator seluler di kepulauan dan daerah terpencil. Setelah fiber optik (ground cable atau SKKL laut) tidak dapat menjangkau suatu area dengan ekonomis, Microwave Link adalah solusi default yang digunakan.',
        points: [
          'Frekuensi Low-band (6-11 GHz): jangkauan 30-80 km, tahan hujan, kapasitas 100-500 Mbps — backbone regional',
          'Frekuensi Mid-band (13-23 GHz): jangkauan 10-25 km, kapasitas 500 Mbps-2 Gbps — backhaul kota',
          'Frekuensi High-band E-band (71-86 GHz): jangkauan <5 km, kapasitas hingga 10 Gbps — fiber-like wireless',
          'Fade Margin: cadangan daya sinyal (dB) di atas threshold minimum untuk memastikan link tidak putus saat rain fade',
          'Rain attenuation: di Indonesia dengan 200+ mm/jam hujan ekstrem, frekuensi >18 GHz perlu fade margin >35 dB',
          'Peralatan: ODU (Outdoor Unit, antena + RF module) + IDU (Indoor Unit, interface data + manajemen)',
          'Antena: parabola (gain tinggi untuk jarak jauh), flat panel (compact, untuk jarak pendek), MIMO antena',
          'Tools commissioning: spectrum analyzer, alignment tool dengan level bubble, RF power meter'
        ],
        example: {
          title: '💡 Membangun Backbone Telekomunikasi di Pulau Terpencil',
          description: 'Untuk menyediakan internet broadband ke Pulau Morotai (Maluku Utara) sebelum ada kabel bawah laut, Telkom membangun Microwave Link hop-by-hop: Ternate (hub utama dengan fiber) → Pulau Tidore (relay, tower 50m) → Pulau Mare (relay, tower 45m) → Morotai (destination). Total 3 hop, masing-masing menggunakan frekuensi 7 GHz dengan kapasitas 1 Gbps per hop. Setiap relay station membutuhkan: tower, power supply dari PLN + genset backup + solar panel, shelter untuk IDU dengan AC, sistem grounding dan penangkal petir. Instalasi dan maintenance sistem ini adalah pekerjaan yang sangat spesifik dan bergaji tinggi.'
        }
      },
      {
        title: 'Fiber Optik: Cahaya yang Menghubungkan Dunia',
        image: '💡',
        content: 'Fiber optik adalah pencapaian teknik yang memungkinkan ribuan tera bit per detik data bergerak melintasi benua dan samudera dalam serat kaca setipis rambut manusia. Prinsip fisikanya — Total Internal Reflection — adalah fenomena yang sudah diketahui sejak abad ke-19, tetapi baru bisa dimanfaatkan secara praktis sejak tahun 1970-an ketika Charles Kao berhasil membuat serat kaca dengan atenuasi yang cukup rendah untuk komunikasi (karya ini membuatnya mendapat Nobel Fisika 2009).\n\nKarakteristik unggul fiber optik dibandingkan semua media transmisi lainnya: bandwidth yang praktis tidak terbatas (satu serat dapat membawa 100+ panjang gelombang cahaya masing-masing berkapasitas >10 Gbps menggunakan DWDM — total >1 Tbps per serat), zero electromagnetic interference (foton tidak terpengaruh oleh medan magnet atau listrik), extremely low attenuation (0.2 dB/km untuk SMF vs 20+ dB/100m untuk UTP — bisa transmisi tanpa penguat hingga 80 km), physical security (menyadap fiber optik memerlukan membengkokkan serat yang akan langsung terdeteksi oleh OTDR), dan total electrical isolation (tidak ada ground loop, tidak menghantarkan petir).\n\nEkosistem industri fiber optik di Indonesia sedang booming: program Palapa Ring menghubungkan 57 kota di seluruh Indonesia, ekspansi FTTH (Fiber to the Home) oleh Telkom IndiHome dan operator lain, dan pembangunan SKKL (Sistem Komunikasi Kabel Laut) baru untuk kapasitas internet internasional yang terus bertumbuh.',
        points: [
          'SMF OS2 (ITU-T G.657): inti 9μm, atenuasi 0.2 dB/km, panjang gelombang 1310/1550nm, jarak hingga 160km tanpa amplifier',
          'MMF OM3 (ITU-T G.651.1): inti 50μm, atenuasi 3.5 dB/km @850nm, mendukung 10 GbE hingga 300m',
          'MMF OM4: inti 50μm premium, mendukung 10 GbE hingga 550m, 100 GbE hingga 150m — standar data center modern',
          'DWDM (Dense Wavelength Division Multiplexing): kirim 80-160 channel data di panjang gelombang berbeda dalam 1 serat',
          'EDFA (Erbium-Doped Fiber Amplifier): penguat optik yang menguatkan sinyal tanpa mengubah ke listrik — untuk jarak >80 km',
          'Connector types: LC (Lucent Connector, paling compact, dominan di perangkat modern), SC, FC, ST, MPO (parallel)',
          'Polish types: PC (Physical Contact), UPC (Ultra PC, lebih baik), APC (Angled PC, terbaik untuk return loss)',
          'Cable types: ADSS (All Dielectric Self Supporting, untuk overhead), Direct Buried armored, Indoor tight buffer'
        ],
        example: {
          title: '💡 Bagaimana Satu Kabel Laut Menopang Seluruh Internet Indonesia',
          description: 'Kabel SEA-ME-WE 6 yang akan beroperasi 2025 membentang 19.200 km dari Singapura ke Prancis dengan kapasitas 140 Tbps — lebih dari 100x kapasitas pendahulunya. Kabel fisiknya berdiameter hanya 3 cm, mengandung 24 pasang serat optik. Di kedalaman 8.000 meter (zona abyssal), kabel ini dilindungi oleh armoring baja tipis. Di dekat pantai (kedalaman <200m) yang rawan jangkar kapal, armoring lebih tebal. Setiap tahun, beberapa kabel laut putus akibat jangkar atau aktivitas seismik — membutuhkan kapal kabel khusus senilai USD 200 juta untuk memperbaikinya. Ribuan insinyur dan teknisi dari seluruh dunia, termasuk Indonesia, terlibat dalam operasional infrastruktur ini.'
        }
      },
      {
        title: 'Internet of Things (IoT): Revolusi Perangkat Terhubung',
        image: '🌐',
        content: 'IoT (Internet of Things) bukan sekadar teknologi — ini adalah pergeseran paradigma fundamental tentang bagaimana manusia berinteraksi dengan dunia fisik melalui perantara digital. Ketika setiap objek fisik memiliki "awareness" digital — dapat mengumpulkan data tentang dirinya dan lingkungannya, dapat melaporkan data tersebut, dan dapat menerima instruksi — maka batas antara dunia fisik dan digital mulai blur.\n\nArsitektur IoT yang matang terdiri dari lima lapisan yang bekerja secara sinergis: Perception Layer (sensor fisik: suhu, kelembaban, tekanan, cahaya, gerakan, kimia — juga aktuator yang bisa mengubah state fisik); Connectivity Layer (protokol komunikasi yang mengirim data dari sensor ke gateway: BLE, Zigbee, Z-Wave, LoRaWAN, NB-IoT, WiFi, 4G/5G — pilihan tergantung jarak, konsumsi daya, dan data rate yang dibutuhkan); Processing Layer (gateway dan edge computing yang melakukan preprocessing sebelum mengirim ke cloud); Cloud Layer (platform IoT yang menerima, menyimpan, dan memproses data dari jutaan device: AWS IoT Core, Azure IoT Hub, Google Cloud IoT, ThingsBoard open source); dan Application Layer (dashboard analitik, automation rules, mobile apps, dan API untuk integrasi dengan sistem enterprise).\n\nKeamanan IoT adalah tantangan terbesar yang belum terpecahkan: miliaran device dengan resource komputasi terbatas, firmware yang jarang diupdate, credential default yang tidak diganti, dan network segmentation yang buruk menciptakan attack surface yang sangat besar. Mirai botnet (2016) yang menginfeksi jutaan IP camera dan router untuk meluncurkan DDoS attack terbesar dalam sejarah adalah pelajaran keras tentang konsekuensi mengabaikan keamanan IoT.',
        points: [
          'Protokol short-range: BLE 5.0 (data rate 2 Mbps, jarak 10-40m), Zigbee (mesh network, konsumsi daya sangat rendah)',
          'Protokol mid-range: WiFi 6 (throughput tinggi untuk video camera), Z-Wave (mesh, proprietary, smart home)',
          'LPWAN long-range: LoRaWAN (jarak 15 km rural/5 km urban, data rate rendah, baterai 10 tahun)',
          'LPWAN berbasis operator: NB-IoT (narrowband, jaringan 4G operator, coverage indoor lebih baik)',
          'MQTT protocol: publish-subscribe, lightweight (overhead minimum), ideal untuk jaringan bandwidth terbatas',
          'Edge computing: proses data di gateway dekat sensor untuk real-time decision tanpa delay cloud round-trip',
          'Digital Twin: model virtual real-time dari aset fisik yang diupdate dari data sensor IoT untuk simulasi dan prediksi',
          'IoT security best practices: network segmentation (VLAN khusus IoT), certificate-based auth, OTA update, monitoring anomali'
        ],
        example: {
          title: '💡 Implementasi IoT di Pelabuhan Tanjung Priok',
          description: 'Pelabuhan Tanjung Priok mengimplementasikan Industrial IoT untuk meningkatkan efisiensi: 500 sensor vibrasi di crane dan RTG (Rubber Tired Gantry) mengirim data via WiFi 6 setiap 100ms ke edge server untuk predictive maintenance (deteksi bearing yang akan rusak 2 minggu sebelum terjadi, mengurangi unexpected breakdown 70%). 200 GPS tracker di setiap container chassis memberikan real-time location via NB-IoT (baterai bertahan 3 tahun). Sistem antrian truk otomatis menggunakan kamera ANPR (Automatic Number Plate Recognition) dan sensor loop di jalan masuk, diintegrasikan dengan TOS (Terminal Operating System). Hasilnya: dwelling time turun dari 4.5 hari ke 2.8 hari, menghemat USD 150 juta biaya logistik nasional per tahun.'
        }
      },
      {
        title: 'Cloud Computing: Infrastruktur On-Demand',
        image: '☁️',
        content: 'Cloud computing merevolusi cara organisasi mengakses dan mengelola infrastruktur IT — dari model "beli dan kelola sendiri" (CapEx besar di awal) menjadi model "sewa sesuai kebutuhan" (OpEx fleksibel). Ini bukan sekadar pergeseran teknologi tetapi pergeseran model bisnis IT yang fundamental.\n\nTiga model layanan cloud yang saling melengkapi: IaaS (Infrastructure as a Service) menyediakan building blocks — server virtual, storage, networking. Pengguna mendapat fleksibilitas penuh tetapi bertanggung jawab atas OS, middleware, dan aplikasi. Contoh: AWS EC2 + S3, Azure Virtual Machines + Blob Storage, Google Compute Engine. PaaS (Platform as a Service) menyediakan platform siap pakai — pengguna fokus pada kode aplikasi tanpa memikirkan infrastruktur. Contoh: AWS Elastic Beanstalk, Google App Engine, Azure App Service, Heroku. SaaS (Software as a Service) adalah aplikasi siap pakai berbasis web — zero maintenance dari sisi pelanggan. Contoh: Gmail, Microsoft 365, Salesforce, Zoom, Slack, Canva.\n\nUntuk teknisi TJKT, cloud computing menciptakan category of work baru yang sangat relevan: cloud networking. Setiap perusahaan yang mengadopsi cloud membutuhkan koneksi yang aman dan andal dari kantor mereka ke cloud provider — melalui dedicated circuit (AWS Direct Connect, Azure ExpressRoute), VPN site-to-site, atau SD-WAN. Ini adalah interseksi antara traditional networking dan cloud yang persis berada dalam kompetensi inti TJKT.',
        points: [
          'IaaS: VM (EC2, Azure VM, GCE), storage (S3, Azure Blob, GCS), VPC networking — kontrol OS penuh',
          'PaaS: platform deploy aplikasi (App Engine, Heroku, Railway) — tidak perlu kelola server',
          'SaaS: aplikasi siap pakai (Gmail, M365, Salesforce) — zero IT maintenance untuk pengguna',
          'FaaS/Serverless: fungsi kode tanpa server (Lambda, Azure Functions) — bayar per eksekusi',
          'Deployment models: Public (multi-tenant), Private (single-tenant), Hybrid (gabungan), Multi-cloud',
          'Cloud networking: VPC design, subnetting, security groups, load balancer, VPN gateway, Direct Connect',
          'FinOps: cloud cost optimization — rightsizing instance, reserved instances, spot instances, budget alerts',
          'Cloud security: IAM (Identity and Access Management), encryption at rest dan in transit, CloudTrail audit'
        ],
        example: {
          title: '💡 Hybrid Cloud untuk Bank: Keamanan Data + Fleksibilitas Cloud',
          description: 'Bank Mandiri menggunakan hybrid cloud architecture: core banking system (data nasabah sensitif) tetap di private cloud on-premises di data center milik sendiri di Jakarta untuk compliance OJK. Aplikasi mobile banking (perlu scale drastis saat peak) berjalan di AWS dan Azure dengan auto-scaling. Machine learning untuk fraud detection berjalan di Google Cloud karena BigQuery dan Vertex AI yang superior. Koneksi antar environment: AWS Direct Connect 10 Gbps + Azure ExpressRoute 5 Gbps dari data center ke cloud, terenkripsi end-to-end. Teknisi TJKT yang memahami desain dan troubleshooting koneksi hybrid cloud ini sangat dicari dengan gaji Rp 25-45 juta/bulan.'
        }
      },
      {
        title: 'Smart Device: Komputasi Terdistribusi di Mana-mana',
        image: '📲',
        content: 'Smart device adalah manifestasi fisik dari konvergensi tiga tren teknologi: miniaturisasi prosesor (SoC ARM Cortex-A yang lebih powerful dari server 10 tahun lalu, dikemas dalam chip seukuran kuku), ubiquity of connectivity (WiFi, Bluetooth, seluler, NFC, UWB — setiap device dapat terhubung dengan berbagai cara), dan democratization of AI (model neural network yang berjalan on-device tanpa perlu koneksi cloud untuk inference).\n\nEkosistem smart home sedang mengalami momen "iPhone moment"-nya sendiri dengan standar Matter yang di-release 2022. Matter, yang didukung bersama oleh Apple, Google, Amazon, Samsung, dan ratusan vendor perangkat, menyelesaikan masalah fragmentasi yang sudah lama menghambat adopsi smart home: sebelumnya, lampu Philips Hue tidak bisa dikontrol oleh Amazon Alexa kecuali dengan bridge khusus, dan kunci pintu August tidak kompatibel dengan Google Home. Dengan Matter (berbasis IP di atas Thread atau WiFi), perangkat dari vendor manapun dapat saling berinteroperasi.\n\nBagi teknisi TJKT, smart home dan smart building adalah pasar B2C dan B2B yang berkembang cepat. Pemilik rumah premium bersedia membayar Rp 50-200 juta untuk sistem smart home terintegrasi. Gedung komersial modern mewajibkan sistem BAS (Building Automation System) yang mengintegrasikan HVAC, lighting, access control, dan keamanan dalam satu platform IoT.',
        points: [
          'Smartphone flagship 2024: SoC 3nm dengan CPU, GPU, NPU (Neural Processing Unit) on-chip — AI on-device real-time',
          'Smartwatch health: ECG medical-grade, SpO2, skin temp, continuous glucose monitoring (CGM) pada model premium',
          'Smart home hub: Matter bridge untuk unifikasi ekosistem, local automation (no internet needed), Thread routing',
          'Smart speaker far-field: 6-8 microphone array, beamforming untuk noise cancellation, TinyML untuk wake word',
          'AR glasses/headset: Apple Vision Pro (visionOS, spatial computing), Meta Quest (metaverse platform)',
          'Industrial wearable: AR headset untuk guided maintenance, smart glove untuk assembly assistance',
          'Matter standard: protocol berbasis IP (Wi-Fi/Thread/Ethernet) untuk interoperabilitas cross-vendor smart home',
          'Edge AI: TensorFlow Lite, ONNX Runtime — deploy model AI langsung di device tanpa kirim data ke cloud'
        ],
        example: {
          title: '💡 Smart Building: Gedung yang Belajar dari Penghuninya',
          description: 'Gedung BCA Tower Jakarta mengimplementasikan intelligent building system berbasis IoT: 5.000 sensor (suhu, CO2, cahaya, occupancy) di seluruh 62 lantai mengirim data ke edge server setiap 30 detik. AI model memprediksi pola penggunaan ruangan berdasarkan kalender Outlook karyawan dan data historis. Sistem AC secara otomatis mendinginkan ruangan rapat 30 menit sebelum meeting dimulai dan mematikannya 5 menit setelah meeting selesai berdasarkan data occupancy sensor. Hasilnya: penghematan energi 28% (setara Rp 4,2 miliar/tahun), biaya operasional gedung turun 18%, dan comfort index naik 35% dalam survei karyawan. Arsitek sistem ini adalah tim Network Engineer + IoT Specialist — gabungan kompetensi yang sangat relevan bagi pelajar TJKT.'
        }
      },
      {
        title: 'Ringkasan — Perkembangan Teknologi TJKT',
        image: '🎓',
        content: 'Perjalanan dari 1G analog (1980) ke 5G (2020an), dari kabel coaxial ke fiber optik DWDM berkapasitas Tbps, dari komputer mainframe terpusat ke edge computing yang terdistribusi, dari manual ke IoT automation — ini adalah 50 tahun revolusi teknologi yang terus berlanjut dengan kecepatan yang semakin meningkat.\n\nSatu konstanta dalam semua perubahan ini: setiap lompatan teknologi menciptakan kebutuhan besar akan profesional yang dapat memahami, mengimplementasikan, dan merawat infrastruktur baru tersebut. Adopsi 5G di Indonesia dalam 5 tahun ke depan akan membutuhkan puluhan ribu teknisi untuk instalasi small cell, upgrade backhaul fiber, dan deployment edge computing. Ekspansi IoT membutuhkan insinyur yang memahami protokol LPWAN, edge computing, dan platform cloud. Migrasi ke hybrid cloud membutuhkan network engineer yang memahami cloud networking.\n\nInvestasi terbaik yang bisa kamu lakukan hari ini: kuasai dasar-dasar yang akan tetap relevan meski teknologi berubah (jaringan IP, Linux, protokol komunikasi, keamanan), kemudian bangun spesialisasi di satu area teknologi baru yang sesuai dengan minat dan peluang pasar lokal.',
        points: [
          '✅ 4G LTE: all-IP, VoLTE, carrier aggregation, backbone ekonomi digital Indonesia',
          '✅ 5G: tiga use case eMBB/URLLC/mMTC, network slicing, <1ms latency, peluang industri besar',
          '✅ Microwave Link: LOS, rain fade, frekuensi 6-80 GHz, backhaul daerah terpencil',
          '✅ Fiber Optik: Total Internal Reflection, SMF/MMF, DWDM, tulang punggung internet',
          '✅ IoT: 5 lapisan arsitektur, protokol LPWAN, MQTT, edge computing, security challenges',
          '✅ Cloud: IaaS/PaaS/SaaS/FaaS, hybrid cloud, cloud networking, FinOps',
          '✅ Smart Device: edge AI, Matter standard, smart home/building, industrial wearable'
        ],
        example: {
          title: '🚀 Spesialisasi yang Paling Dicari Industri 2025-2030',
          description: '5G Network Engineer (Rp 20-45 juta): deploy dan optimize infrastruktur 5G, memahami 5G Core dan RAN. Cloud Network Engineer (Rp 18-40 juta): design dan troubleshoot cloud networking (AWS/Azure VPC, SD-WAN). IoT Solution Architect (Rp 22-50 juta): design end-to-end IoT dari sensor ke cloud ke aplikasi. Edge Computing Engineer (Rp 20-45 juta): deploy dan manage computing di edge network untuk latency-critical applications. Semua spesialisasi ini butuh fondasi jaringan yang kuat — fondasi yang sedang kamu bangun sekarang di TJKT.'
        }
      }
    ]
  },

  '3': {
    title: 'Profesi dan Kewirausahaan (Technopreneur)',
    category: 'Karir',
    difficulty: 'Pemula',
    duration: '55 menit',
    description: 'Panduan lengkap peluang karir TJKT, jalur sertifikasi profesional, strategi membangun bisnis IT dari nol, kisah sukses, dan action plan konkret untuk memulai perjalanan karir.',
    youtubeId: 'q3w_lzBOc3w',
    slides: [
      {
        title: 'Lanskap Karir IT di Indonesia: Peluang yang Menunggu',
        image: '💼',
        content: 'Indonesia berada dalam persimpangan dua tren besar: transformasi digital yang dipercepat pandemi dan kekurangan talenta IT yang sangat serius. Laporan Kemenkominfo 2023 menyebutkan Indonesia membutuhkan 600.000 tambahan tenaga IT profesional per tahun, sementara supply dari seluruh perguruan tinggi dan SMK hanya 200.000 per tahun — gap 400.000 posisi yang menciptakan kondisi seller\'s market bagi pencari kerja IT yang kompeten.\n\nKondisi ini berbeda fundamental dari banyak profesi lain di Indonesia di mana supply melebihi demand. Di bidang IT TJKT, yang terjadi adalah perusahaan yang bersaing memperebutkan kandidat terbaik — bukan sebaliknya. Perusahaan besar seperti Telkom, XL, Pertamina, dan bank BUMN aktif merekrut langsung dari SMK TJKT terbaik bahkan sebelum siswa lulus, melalui program magang-to-hire.\n\nSektor-sektor yang paling agresif merekrut tenaga TJKT: telekomunikasi (operator seluler, ISP, tower company), perbankan dan fintech (infrastructure engineer, cloud engineer, security), pemerintahan (BSSN, KOMINFO, Kemenkeu untuk transformasi digital), manufaktur (Industry 4.0 dan IoT implementasi), dan startup teknologi (cloud/DevOps/SRE).',
        points: [
          'Gap demand-supply: 400.000 posisi IT tidak terisi per tahun — kondisi ideal bagi pencari kerja kompeten',
          'Starting salary TJKT kompeten: Rp 5-8 juta (lebih tinggi dari rata-rata UMR Jakarta dan mayoritas S1)',
          'Mid-level 3-5 tahun pengalaman: Rp 10-20 juta, bergantung spesialisasi dan sertifikasi',
          'Senior 7+ tahun: Rp 20-50 juta; spesialis langka (Cloud Architect, CISO): Rp 50-150 juta',
          'Remote work internasional: ratusan posisi IT remote dengan gaji USD tersedia di job board global',
          'Sektor tumbuh: cybersecurity (+35%/tahun), cloud (+30%), IoT (+25%), AI/ML (+40%)',
          'Program BUMN: Telkom, PLN, Pertamina aktif rekrut fresh graduate TJKT untuk transformasi digital',
          'Ekosistem startup: 2.400+ startup aktif di Indonesia, mayoritas butuh infrastructure dan cloud engineer'
        ],
        example: {
          title: '💡 Kisah Nyata: SMK TJKT ke Gaji Rp 25 Juta dalam 4 Tahun',
          description: 'Dito lulus dari SMK TJKT Surabaya 2020, diterima magang di perusahaan ISP regional. Gaji pertama: Rp 4 juta sebagai NOC engineer. Tahun 1: MTCNA (MikroTik), gaji naik ke Rp 6 juta. Tahun 2: CCNA + banyak belajar Linux, loncat ke perusahaan cloud MSP Jakarta, gaji Rp 12 juta. Tahun 3: AWS Solutions Architect Associate, gaji naik ke Rp 18 juta. Tahun 4: loncat ke startup fintech sebagai Senior Cloud Engineer, gaji Rp 25 juta + stock option. Total kenaikan: 525% dalam 4 tahun. Investasi sertifikasi total: ~Rp 15 juta. ROI yang tidak ada tandingannya.'
        }
      },
      {
        title: 'Network Engineer: Arsitek Infrastruktur Digital',
        image: '🖥️',
        content: 'Network Engineer adalah tulang punggung infrastruktur IT di setiap organisasi. Tanpa jaringan yang dikelola dengan baik, tidak ada cloud, tidak ada aplikasi bisnis, tidak ada komunikasi digital. Ini adalah alasan mengapa Network Engineer selalu dibutuhkan terlepas dari tren teknologi yang datang dan pergi — teknologinya berubah (dari copper ke fiber, dari physical ke virtual), tetapi kebutuhan akan profesional yang memahami cara kerja jaringan tidak pernah berkurang.\n\nNamun Network Engineering modern sudah jauh berbeda dari 10 tahun lalu. Selain konfigurasi CLI tradisional, Network Engineer masa kini harus memahami: SDN (Software-Defined Networking) yang memisahkan control plane dari data plane dan memungkinkan konfigurasi jaringan melalui API; network automation menggunakan Python dengan library Netmiko, NAPALM, atau framework Ansible/Terraform untuk mengelola ratusan perangkat secara programatik; cloud networking (VPC, Transit Gateway, Azure Virtual Network) karena semakin banyak infrastruktur yang bermigrasi ke cloud; dan network observability menggunakan tools seperti Prometheus, Grafana, dan elk stack untuk visibility mendalam ke performa jaringan.\n\nJenjang karir yang terstruktur dan terukur menjadikan Network Engineering sebagai salah satu jalur karir IT dengan visibilitas masa depan terbaik. Dari entry-level NOC Analyst hingga Network Architect dan CTO, setiap level memiliki kompetensi yang jelas, sertifikasi yang diakui, dan kisaran gaji yang transparan.',
        points: [
          'NOC Analyst/Junior Network Eng: monitoring, troubleshooting Tier 1, eskalasi, dokumentasi — Rp 4-7 juta',
          'Network Engineer: implementasi proyek, konfigurasi routing/switching/wireless/firewall — Rp 10-18 juta',
          'Senior Network Engineer: arsitektur solusi, mentoring, troubleshooting kompleks, vendor evaluation — Rp 18-35 juta',
          'Network Architect: desain strategis infrastruktur enterprise, evaluasi roadmap teknologi — Rp 30-60 juta',
          'Cisco certification path: CCNA (entry) → CCNP Enterprise/Security/DC → CCIE (expert, paling bergengsi global)',
          'Alternative paths: Juniper JNCIA→JNCIP, Nokia NRS I→II, Aruba ACAA→ACEP untuk wireless specialist',
          'Modern skills: Python Netmiko/NAPALM, Ansible, Terraform, SDN/SD-WAN, cloud networking',
          'Specializations: wireless engineer, security engineer, DC/cloud network engineer, service provider engineer'
        ],
        example: {
          title: '💡 Network Automation: Mengubah 8 Jam Pekerjaan Menjadi 5 Menit',
          description: 'Senior Network Engineer di perusahaan retail dengan 200 cabang harus update ACL (Access Control List) di semua router cabang setiap kali ada perubahan kebijakan security — sebelumnya membutuhkan 8 jam kerja manual (200 router × 2.4 menit per router via SSH satu per satu). Dengan Netmiko + Python script 50 baris, engineer ini menulis kode yang login ke 200 router secara paralel, push konfigurasi baru, verifikasi hasilnya, dan generate laporan — total 5 menit. Script yang sama digunakan berulang setiap ada perubahan. Skill Python + Netmiko yang dipelajari dalam 2 bulan mengubah pekerjaan 8 jam menjadi 5 menit. Ini adalah nilai yang diukur dalam ratusan jam kerja per tahun.'
        }
      },
      {
        title: 'Cybersecurity: Garda Terdepan Era Digital',
        image: '🔐',
        content: 'Cybersecurity bukan lagi niche specialty — ini adalah kebutuhan existensial setiap organisasi digital. Insiden keamanan siber yang menjadi headline di Indonesia dalam beberapa tahun terakhir — kebocoran data 279 juta peserta BPJS (2021), ransomware di PDNS (Pusat Data Nasional Sementara) yang melumpuhkan 210 instansi pemerintah selama 3 minggu (2024) — menggambarkan betapa kritisnya kebutuhan akan profesional cybersecurity yang kompeten.\n\nLandscape karir cybersecurity lebih beragam dari yang banyak orang bayangkan. Blue Team (defensif): SOC Analyst (monitoring dan triage alert dari SIEM), Threat Intelligence Analyst (analisis TTP penyerang untuk proactive defense), Incident Responder (investigasi dan containment ketika breach terjadi), Security Engineer (implementasi dan maintenance security tools). Red Team (ofensif etis): Penetration Tester (uji keamanan dengan metode penyerang atas izin), Bug Bounty Hunter (temukan kerentanan di platform publik untuk reward). GRC (Governance, Risk, Compliance): ISO 27001 implementor, DPO (Data Protection Officer) untuk UU PDP, auditor keamanan.\n\nKeunggulan lulusan TJKT yang ingin masuk cybersecurity: fondasi networking yang kuat adalah prerequisite yang tidak bisa dilewati. 70% konsep cybersecurity dibangun di atas pemahaman tentang bagaimana jaringan bekerja — TCP/IP stack, routing, firewall, DNS, HTTP. Lulusan TJKT sudah memiliki 70% pengetahuan dasar yang dibutuhkan.',
        points: [
          'SOC Analyst L1: monitoring SIEM (Splunk/Sentinel/QRadar), triage alert, dokumentasi insiden — Rp 6-10 juta',
          'SOC Analyst L2/3: analisis mendalam, threat hunting, forensik digital — Rp 12-25 juta',
          'Penetration Tester: ethical hacking, pentest report writing, remediation guidance — Rp 15-45 juta',
          'Security Architect: design security controls, zero trust architecture, cloud security — Rp 25-60 juta',
          'CISO: leadership security function, board-level communication, risk management — Rp 60-200 juta',
          'Entry certifications: CompTIA Security+, CEH, eJPT (eLearnSecurity, gratis trial)',
          'Advanced certifications: OSCP (gold standard untuk pentester), CISSP, CISM, GPEN, GWAPT',
          'Free learning: TryHackMe (guided paths), HackTheBox (challenges), PentesterLab, OWASP WebGoat'
        ],
        example: {
          title: '💡 Bug Bounty: Dibayar untuk Menemukan Kerentanan',
          description: 'HackerOne Indonesia memiliki ribuan researcher aktif yang mencari kerentanan di program bug bounty perusahaan-perusahaan besar. Tokopedia, Gojek, BCA, dan ratusan perusahaan global membayar reward rata-rata USD 500-10.000 per kerentanan yang ditemukan dan dilaporkan secara responsible. Andi, alumni SMK TJKT Bandung, menghabiskan 6 bulan belajar web security dari OWASP dan TryHackMe. Laporan bug bounty pertamanya (XSS di platform e-commerce) mendapat reward USD 300. Dalam setahun, total earning dari bug bounty: USD 8.500 (Rp 130 juta) — sambil tetap bekerja full-time sebagai network engineer. Bug bounty adalah cara terbaik untuk membuktikan kompetensi cybersecurity dengan hasil yang nyata dan terukur.'
        }
      },
      {
        title: 'Cloud & DevOps: Masa Depan Infrastruktur IT',
        image: '☁️',
        content: 'Dalam 5 tahun terakhir, tidak ada pergeseran yang lebih signifikan dalam industri IT dibandingkan migrasi ke cloud dan adopsi DevOps. Hampir tidak ada perusahaan teknologi baru yang membangun data center sendiri — semuanya born in the cloud. Dan perusahaan enterprise yang sudah ada sedang dalam berbagai tahap cloud migration.\n\nCloud Engineering dan DevOps bukan dua hal yang terpisah — mereka adalah dua sisi mata uang yang sama dalam model operasional IT modern. Cloud Engineer menyediakan infrastruktur yang dibutuhkan (VPC, subnetting, load balancer, managed database, serverless), sementara DevOps Engineer mengotomasi siklus hidup pengembangan dan deployment aplikasi di atas infrastruktur tersebut. Keduanya menggunakan Infrastructure as Code (Terraform, CloudFormation, Pulumi) untuk mendefinisikan infrastruktur dalam kode yang dapat di-version control.\n\nKenapa ini peluang besar bagi lulusan TJKT: Cloud networking (VPC design, subnetting, security groups, VPN, Direct Connect) adalah ekstensi langsung dari skill networking tradisional ke environment cloud. Lulusan TJKT yang sudah memahami subnetting, routing, dan firewall memiliki keunggulan besar untuk beralih ke cloud networking dibandingkan developer yang tidak memiliki background networking.',
        points: [
          'Cloud Engineer: provision VPC/subnets/security groups, IAM roles, managed services, cost optimization — Rp 12-30 juta',
          'DevOps Engineer: CI/CD pipeline, Docker/Kubernetes, IaC (Terraform), monitoring stack — Rp 15-40 juta',
          'Platform Engineer: build internal developer platform, GitOps, service mesh — Rp 20-45 juta',
          'SRE: reliability engineering, SLI/SLO/SLA, chaos engineering, on-call — Rp 22-50 juta',
          'Kubernetes: container orchestration, Helm charts, service mesh (Istio), GitOps (ArgoCD/Flux)',
          'Observability stack: Prometheus + Grafana (metrics), ELK/Loki (logs), Jaeger (tracing) — three pillars of observability',
          'IaC tools: Terraform (multi-cloud, provider ecosystem), Pulumi (IaC with real programming languages)',
          'Certification path: AWS CP → SAA → SAP atau Azure AZ-900 → AZ-104 → AZ-305'
        ],
        example: {
          title: '💡 Zero-Downtime Deployment: DevOps dalam Aksi',
          description: 'Sebelum DevOps di startup fintech: deployment aplikasi setiap 2 minggu sekali, selalu hari Jumat malam (kalau error bisa diperbaiki akhir pekan), process: 4 jam manual, error rate deployment 30%, tim on-call stress setiap deployment. Setelah implement GitOps + ArgoCD + Kubernetes rolling updates: developer push code ke GitHub → automated tests (unit, integration, security scan) → build Docker image → push ke registry → ArgoCD auto-sync ke Kubernetes cluster dengan rolling update strategy → monitor SLO dashboard. Deployment time: 12 menit. Error rate: <2%. Frekuensi: 5-10x per hari. Zero downtime karena rolling update. Cloud Engineer yang membangun sistem ini: Rp 38 juta/bulan + Rp 2 miliar stock option.'
        }
      },
      {
        title: 'Menjadi Technopreneur: Membangun Bisnis IT dari Nol',
        image: '🚀',
        content: 'Technopreneur adalah seseorang yang mengidentifikasi masalah atau peluang di pasar dan membangun solusi berbasis teknologi untuk mengatasinya — kemudian memonetisasi solusi tersebut menjadi bisnis yang sustainable. Keunggulan lulusan TJKT sebagai calon technopreneur: mereka memahami teknologi yang dibutuhkan untuk membangun dan mengoperasikan solusi IT, sehingga tidak perlu bergantung pada developer atau teknisi mahal di tahap awal.\n\nModel bisnis yang paling proven untuk memulai tanpa modal besar dan tanpa pengalaman panjang: Managed IT Services atau IT Support Provider. Model ini tidak membutuhkan produk, tidak butuh modal besar, dan market-nya sangat luas — 65 juta UMKM Indonesia, sebagian besar belum memiliki IT support yang memadai. Mulai dengan menawarkan jasa instalasi jaringan, maintenance komputer, CCTV, dan WiFi kepada bisnis-bisnis lokal di sekitar kamu.\n\nKunci sukses model Managed IT Services: reliability dan dokumentasi. Klien membayar maintenance bulanan bukan untuk perbaikan ketika rusak — mereka membayar untuk ketenangan pikiran (peace of mind) bahwa IT mereka akan berjalan smooth. Dengan SLA yang jelas, response time yang konsisten, dan laporan bulanan yang profesional, kamu dapat membangun bisnis dengan puluhan klien yang menghasilkan recurring revenue yang stabil.',
        points: [
          'Modal minimal memulai: Rp 300-500 ribu (crimping tool, LAN tester, obeng set, multimeter basic)',
          'Market yang bisa dijangkau hari ini: warung, toko, apotek, klinik, bengkel, salon di sekitar kamu',
          'Service menu pemula: WiFi setup, pasang CCTV, jaringan komputer kantor, maintenance bulanan komputer',
          'Pricing strategy: project-based (satu kali) + maintenance retainer (bulanan berulang) = dua sumber revenue',
          'Kapasitas awal: 1 orang bisa handle 15-20 klien maintenance seefisiensi — titik rekrut karyawan pertama',
          'Legalitas: NIB OSS (gratis, online, 1 hari) → tambah PT Perorangan saat omzet >50 juta/bulan',
          'Pemasaran dengan biaya nol: Google Business Profile, foto portfolio di Instagram, minta testimonial aktif',
          'Naik kelas: dari residential ke SMB (warung makan, butik, salon) ke enterprise (kantor, pabrik, hotel)'
        ],
        example: {
          title: '💡 Anatomy Bisnis Managed IT Services yang Profitable',
          description: 'Fahmi (22 tahun, TJKT graduate) membangun bisnis secara sistematis: Tahun 1 — 8 klien maintenance (@Rp 400rb/bln) + 3-4 proyek instalasi/bulan. Revenue Rp 8 juta, profit margin 70% = profit Rp 5,6 juta. Tahun 2 — 20 klien maintenance (@Rp 600rb/bln rata-rata) + proyek lebih besar. Revenue Rp 25 juta, rekrut 1 teknisi junior. Tahun 3 — 45 klien maintenance, 2 teknisi, mulai terima klien SMB. Revenue Rp 80 juta, profit Rp 35 juta. Tahun 4 — 80 klien, 4 teknisi, 1 admin, kantor kecil, mulai proposal ke perusahaan menengah. Revenue Rp 180 juta, personal income Rp 60-70 juta/bulan. Bukan unicorn, tapi bisnis yang solid dan sustainable.'
        }
      },
      {
        title: 'Sertifikasi IT: Investasi dengan ROI Tertinggi',
        image: '🏆',
        content: 'Tidak ada instrumen investasi yang memberikan ROI (Return on Investment) lebih tinggi dan lebih konsisten dibandingkan sertifikasi IT profesional. Biaya ujian Rp 1-5 juta, dampak kenaikan gaji Rp 3-10 juta per bulan = payback period kurang dari satu bulan. Ini adalah matemtika sederhana yang tidak ada tandingannya di instrumen investasi manapun.\n\nSertifikasi IT berfungsi sebagai credential yang dapat diverifikasi secara independen — oleh perusahaan yang belum pernah bekerja denganmu, oleh recruiter internasional yang tidak bisa mengecek referensimu, dan bahkan oleh sistem ATS (Applicant Tracking System) yang memfilter resume sebelum dibaca manusia. Di industri di mana "kata-kata di CV" bisa dimanipulasi, sertifikasi dari lembaga yang diakui (Cisco, AWS, CompTIA, ISACA) adalah bukti objektif kompetensi.\n\nStrategi sertifikasi yang optimal tidak sama untuk semua orang — bergantung pada jalur karir yang dituju, anggaran yang tersedia, dan kondisi pasar kerja lokal. Untuk TJKT di Indonesia, strategi yang terbukti paling efektif untuk awal karir: MTCNA (MikroTik, paling relevan untuk ISP dan enterprise lokal, biaya terjangkau ~Rp 2 juta) sebagai sertifikasi pertama yang cepat didapat, diikuti CCNA (Cisco, diakui global, ~Rp 5 juta) untuk membuka peluang lebih luas, kemudian spesialisasi sesuai jalur.',
        points: [
          'Vendor-neutral entry: CompTIA Network+ (diakui secara global, tidak terikat vendor), Linux+ ',
          'Networking vendor: MikroTik MTCNA (Rp 1,5-2 juta, populer ISP Indonesia) → CCNA (Rp 4-5 juta) → CCNP',
          'Cloud entry free: AWS Cloud Practitioner gratis via AWS Educate; Azure Fundamentals voucher untuk pelajar',
          'Cloud professional: AWS SAA (Solutions Architect Associate) = rata-rata kenaikan gaji 60% di Indonesia',
          'Security: CompTIA Security+ (entry level, diakui DoD USA), CEH (Certified Ethical Hacker), OSCP (paling prestisius)',
          'Linux professional: RHCSA (Red Hat, standar enterprise), LFCS (Linux Foundation, vendor-neutral)',
          'Project management: CompTIA Project+ (entry), CAPM (PMI, untuk memulai), PMP (senior, Rp 5-8 juta)',
          'Free resources: Cisco NetAcad (CCNA gratis), AWS Skill Builder (100+ kursus gratis), Microsoft Learn'
        ],
        example: {
          title: '💡 Optimal Sertifikasi Roadmap Berdasarkan Target Karir',
          description: 'Target: Network Engineer di perusahaan ISP/Telco → MikroTik MTCNA (6 bulan) → CCNA (12 bulan) → Juniper JNCIA atau Cisco CCNP setelah 2 tahun kerja. Estimasi investasi: Rp 8 juta total, estimasi kenaikan gaji kumulatif: Rp 8 juta/bulan lebih tinggi dari tanpa sertifikasi = ROI 1.200% per tahun. Target: Cloud Engineer di startup/enterprise → AWS Cloud Practitioner (gratis, 3 bulan) → AWS SAA (6 bulan, Rp 3 juta ujian) → AWS SAP atau Azure AZ-305 setelah 2 tahun. Target: Cybersecurity Analyst → CompTIA Security+ (6 bulan) → CEH atau eJPT (9 bulan) → OSCP setelah 2-3 tahun pengalaman.'
        }
      },
      {
        title: 'Ringkasan — Profesi dan Kewirausahaan TJKT',
        image: '🎓',
        content: 'Bidang TJKT menawarkan salah satu ekosistem karir paling beragam, dinamis, dan menguntungkan di era digital. Dari network engineer yang membangun infrastruktur, cybersecurity specialist yang melindunginya, cloud engineer yang mengoperasikannya, hingga technopreneur yang membangun bisnis di atas keahlian teknisnya — setiap jalur memiliki peluang yang nyata dan prospek yang cerah.\n\nSatu insight terpenting: jangan tunggu "siap". Tidak ada yang pernah merasa 100% siap untuk langkah berikutnya. Budi yang sekarang menjadi Cloud Architect bergaji Rp 45 juta juga pernah merasa "belum cukup tahu" untuk melamar Network Engineer pertamanya. Fahmi yang sekarang memiliki bisnis IT beromzet Rp 150 juta juga pernah ragu apakah proyeknya layak diberi harga. Yang membedakan mereka dari yang tidak berhasil: mereka mengambil langkah pertama meski tidak sempurna, belajar dari setiap pengalaman, dan tidak berhenti.\n\nLangkah pertama yang konkret: pilih satu dari tiga jalur (karyawan / technopreneur / hybrid) yang paling sesuai dengan kepribadian dan kondisimu, tentukan satu sertifikasi yang akan kamu kejar dalam 6 bulan ke depan, dan mulai hari ini dengan mendaftar ke resource belajar yang tersedia gratis.',
        points: [
          '✅ Network Engineer: jalur karir dengan struktur jelas, CCNA→CCNP→CCIE, demand konsisten',
          '✅ Cybersecurity: demand tertinggi dan pertumbuhan tercepat, entry via SOC atau bug bounty',
          '✅ Cloud & DevOps: masa depan infrastruktur, sertifikasi AWS/Azure, skills Python dan Linux',
          '✅ IT Support: entry point terbaik untuk exposure luas, jalur natural ke spesialisasi',
          '✅ Technopreneur: Managed IT Services, modal minimal, market luas, recurring revenue',
          '✅ Sertifikasi: MTCNA/CCNA/AWS CP sebagai sertifikasi pertama tergantung target karir'
        ],
        example: {
          title: '🚀 Action Plan 30-60-90 Hari yang Bisa Dimulai Hari Ini',
          description: 'Hari ini (D-0): buat akun LinkedIn dengan foto profesional, daftar Cisco NetAcad gratis, bergabung grup Telegram "Indonesia Network Engineer Community". D-30: selesaikan modul 1-3 CCNA Introduction to Networks di NetAcad, buat topology sederhana di Packet Tracer dan posting di LinkedIn sebagai portofolio pertama, tawari jasa setting WiFi gratis kepada 1 kenalan untuk portofolio. D-60: selesaikan modul 4-7 CCNA, konfigurasi VLAN dan routing di Packet Tracer, mulai tabung dana untuk biaya ujian sertifikasi (MTCNA atau CompTIA Network+). D-90: tentukan spesialisasi (networking/cloud/security), daftar grup komunitas lokal, review progress dan adjust plan. Satu langkah per hari akan mengubah hidupmu dalam 90 hari.'
        }
      }
    ]
  },

  '4': {
    title: 'K3LH dan Budaya Kerja Industri',
    category: 'K3LH',
    difficulty: 'Pemula',
    duration: '55 menit',
    description: 'Panduan lengkap K3 untuk teknisi TJKT: APD, keselamatan elektronik, pekerjaan di ketinggian, instalasi fiber optik, implementasi 5R, manajemen risiko, dan pencegahan kecelakaan kerja.',
    youtubeId: '4h641MBTXXM',
    slides: [
      {
        title: 'K3LH: Hak, Kewajiban, dan Filosofi Keselamatan',
        image: '⛑️',
        content: 'K3LH (Keselamatan dan Kesehatan Kerja serta Lingkungan Hidup) adalah domain yang mengintegrasikan ilmu kedokteran kerja, teknik keselamatan, psikologi organisasi, dan hukum ketenagakerjaan untuk menciptakan lingkungan kerja yang aman, sehat, dan bertanggung jawab terhadap lingkungan. Di Indonesia, K3 bukan opsional — ini adalah hak setiap pekerja yang dilindungi undang-undang dan kewajiban setiap pengusaha yang sanksi pelanggarannya mencakup denda administratif hingga pidana penjara.\n\nFilosofi modern K3 telah berevolusi dari paradigma "compensatory" (ganti rugi setelah kecelakaan) menjadi paradigma "preventive" (cegah kecelakaan sebelum terjadi). Model Bird\'s Triangle (yang menyempurnakan Heinrich Triangle) menyatakan bahwa untuk setiap kecelakaan fatal, terdapat 10 kecelakaan serius, 30 kecelakaan minor, dan 600 near-miss incidents. Implikasi praktis: sistem K3 yang efektif fokus pada mengeliminasi near-miss — karena near-miss adalah sinyal peringatan dini bahwa sistem kontrol bahaya sudah berhasil ditembus dan hanya keberuntungan yang mencegah kecelakaan yang lebih serius.\n\nDi bidang TJKT, profil risiko sangat spesifik dan nyata: jatuh dari ketinggian (tower, tiang, plafon tinggi) adalah penyebab kematian terbanyak di instalasi telekomunikasi; tersengat listrik dari panel distribusi dan UPS yang masih berenergi; terkena serat kaca fiber optik yang tidak terlihat; dan WMSD (Work-related Musculoskeletal Disorders) akibat ergonomi buruk dalam pekerjaan berulang.',
        points: [
          'UU No. 1/1970 Keselamatan Kerja: kewajiban pengusaha menyediakan APD, lingkungan kerja aman, pelatihan K3',
          'PP No. 50/2012 tentang SMK3: perusahaan >100 karyawan atau high risk wajib sertifikasi SMK3',
          'Permenaker 9/2016: regulasi khusus K3 Pekerjaan Pada Ketinggian — prosedur, peralatan, kompetensi teknisi',
          'BPJS Ketenagakerjaan: iuran 0.24-1.74% gaji (tergantung risiko), jamin biaya medis dan santunan kecelakaan',
          'Bird\'s Triangle: 600 near-miss → 30 kecelakaan minor → 10 kecelakaan serius → 1 fatal',
          'Safety culture maturity levels: reactive → dependent → independent → interdependent (saling jaga)',
          'Zero Harm philosophy: setiap kecelakaan dapat dicegah — bukan fatalism "kecelakaan itu risiko pekerjaan"',
          'True cost of accident: biaya langsung (medis, ganti rugi) × 5-10 = biaya total (kehilangan produktivitas, investigasi, reputasi)'
        ],
        example: {
          title: '💡 Konsekuensi Hukum Nyata Mengabaikan K3',
          description: 'Kasus nyata 2022: direktur perusahaan tower company di Kalimantan dijerat Pasal 15 UU No. 1/1970 setelah kematian teknisi yang jatuh dari tower 48 meter tanpa harness. Sanksi: denda Rp 100 juta + kurungan 3 bulan (dipidanakan atas nama penanggung jawab). Selain sanksi pidana: perusahaan dihentikan izin operasionalnya selama 6 bulan, kehilangan kontrak Rp 5 miliar, dan harus membayar santunan keluarga korban Rp 800 juta sesuai PP BPJS Ketenagakerjaan. Total kerugian: >Rp 6 miliar dari satu insiden yang dapat dicegah dengan harness Rp 1,5 juta yang tidak dipakai.'
        }
      },
      {
        title: 'APD: Memilih, Menggunakan, dan Merawat dengan Benar',
        image: '🦺',
        content: 'APD adalah "lini pertahanan terakhir" dalam hierarki kontrol bahaya, bukan "lini pertahanan satu-satunya". Urutan prioritas kontrol bahaya yang benar (dari paling efektif ke paling kurang efektif): Eliminasi bahaya (hilangkan sepenuhnya, misal: gunakan drone untuk inspeksi antena sehingga tidak perlu naik tower) → Substitusi (ganti dengan aktivitas/material yang lebih aman, misal: kabel fiber optik dengan pre-connectorized patch cord sehingga tidak perlu splicing di lapangan) → Rekayasa (modifikasi lingkungan kerja, misal: pasang permanent ladder dengan safety cage di tower untuk memudahkan pendakian aman) → Kontrol administratif (SOP, training, rotasi kerja, tanda peringatan) → APD.\n\nKesalahan fatal yang sering terjadi: perusahaan melewati keempat level di atas dan langsung ke APD sebagai solusi utama. APD hanya efektif jika bahaya sudah diminimalkan di level sebelumnya. Contoh: memberikan masker N95 kepada pekerja yang selalu terpapar debu konstruksi setiap hari adalah kontrol yang tidak memadai — solusi yang lebih efektif adalah engineering control (sistem ventilasi lokal, dust collector) yang menghilangkan debu dari udara sebelum terhirup.\n\nAPD yang tidak tepat ukuran, kondisi buruk, atau digunakan dengan salah lebih berbahaya dari tidak menggunakan APD sama sekali karena memberikan false sense of security. Harness yang digunakan tanpa anchor point yang benar tidak melindungi sama sekali dari jatuh. Helm yang chinstrap-nya longgar bisa terlepas saat benturan justru pada saat paling dibutuhkan.',
        points: [
          'Safety helmet Class E (Electrical): tahan hingga 20.000V — wajib di area dekat kabel tegangan tinggi',
          'Safety shoes: toe cap baja (pelindung jari dari benda jatuh), mid-sole anti-paku, anti-slip, EH-rated',
          'Full body harness EN 361: 5-point attachment (chest + shoulder × 2 + leg × 2) — distribusi gaya jatuh optimal',
          'Shock absorbing lanyard: memperpanjang stopping distance, kurangi peak force dari 12kN ke <6kN',
          'Kacamata safety ANSI Z87.1: impact resistant polycarbonate, side shields untuk fiber optik dan grinding',
          'Sarung tangan: karet isolasi kelas 00 (500V) atau kelas 0 (1000V) untuk kelistrikan; nitrile untuk fiber optik',
          'Masker respirator: N95 untuk partikel 0.3μm (debu bangunan, serat fiber buangan); P100 untuk zat lebih berbahaya',
          'Rompi high-visibility ANSI 107 Class 2: 360° reflective tape — wajib di area dengan kendaraan bermotor'
        ],
        example: {
          title: '💡 Harness Inspection: Kapan Harus Dibuang?',
          description: 'Harness adalah peralatan yang harus diinspeksi setiap kali akan digunakan (pre-use inspection) dan dibuang jika ditemukan: tali webbing yang sobek, abrasi, atau terbakar (meski hanya sebagian kecil); karabiner yang karet sealnya retak, karat pada moving parts, atau gate yang tidak terkunci smooth; buckle yang plastiknya retak atau bending mechanism yang tidak rigid; shock absorber yang deployment indicator-nya sudah aktif (berarti sudah pernah menahan jatuh dan harus diganti). SATU kegagalan visual = buang seluruh harness, tidak ada reparasi. Harness yang rusak adalah peralatan yang tidak berguna saat paling dibutuhkan.'
        }
      },
      {
        title: 'K3 Elektronik dan ESD: Musuh Tak Terlihat',
        image: '🔌',
        content: 'ESD (Electrostatic Discharge) adalah pelepasan muatan listrik statis yang terakumulasi di tubuh manusia atau peralatan kepada komponen elektronik sensitif. Tubuh manusia yang berjalan di atas karpet sintetis dapat mengakumulasi muatan hingga 35.000 volt dalam kondisi kering. Sementara komponen semikonduktor modern, terutama CMOS dan MOSFET yang digunakan dalam CPU, RAM, dan kartu jaringan, dapat rusak permanen oleh muatan serendah 20-100 volt yang sama sekali tidak terasa oleh manusia.\n\nBahaya ESD bersifat kumulatif: beberapa kejadian ESD kecil yang masing-masing tidak langsung merusak komponen dapat menyebabkan "latent damage" — kerusakan mikroskopik pada gate oxide transistor yang membuat komponen tetap berfungsi normal dalam kondisi standar, tetapi gagal lebih cepat (premature failure) atau berperilaku tidak normal dalam kondisi stres (suhu tinggi, tegangan tinggi, beban tinggi). Latent ESD damage adalah mimpi buruk bagi quality control karena tidak bisa dideteksi dengan pengujian biasa.\n\nUntuk teknisi TJKT yang bekerja dengan komponen elektronik, program ESD protection yang efektif membutuhkan tiga komponen yang bekerja bersama: Grounding (menghilangkan akumulasi muatan dengan memberikan jalur resistif ke ground), Personnel Grounding (wrist strap atau heel strap yang memastikan muatan di tubuh teknisi terlepas ke ground), dan Package Protection (penyimpanan dan transportasi komponen dalam kantong antistatis).',
        points: [
          'ESD wrist strap: resistance 1 MΩ serial untuk safety (tidak membuat teknisi tersengat arus jika terhubung ke ground langsung)',
          'ESD mat (conductive mat): grounding permukaan kerja, resistance ke ground 10^6-10^9 Ω (dissipative range)',
          'ESD bag: Faraday cage yang melindungi komponen dari medan elektrostatis eksternal saat penyimpanan dan transport',
          'Prosedur wajib sebelum buka unit: matikan power, cabut dari stopkontak, tunggu 30 detik (discharge internal caps)',
          'Cara pegang PCB: pegang di sudut atau edge bracket, hindari menyentuh komponen aktif dan trace tembaga',
          'PSU kapasitor hazard: PSU menyimpan 330V DC di filter capacitor bahkan setelah dimatikan — jangan buka casing',
          'UPS battery hazard: baterai lead-acid menyimpan energi besar bahkan saat offline — risiko arc flash dan asam tumpah',
          'Ergonomi workstation: monitor di eye level, keyboard dan mouse di elbow height, lumbar support, 20-20-20 rule untuk mata'
        ],
        example: {
          title: '💡 True Cost of ESD Damage: Analisis Kasus Nyata',
          description: 'IT Service Center X mengalami peningkatan aneh dalam complaint "komputer baru tapi sering error" dari pelanggan yang baru beli rakit PC. Investigasi: semua kasus terjadi setelah rakit oleh teknisi baru yang tidak menggunakan ESD wrist strap dan bekerja di atas meja plastik. Diagnosis final: latent ESD damage pada socket interface CPU — sistem boot normal, tapi crash saat CPU full load setelah 2-4 minggu. Solusi: ganti motherboard dan CPU (garansi dari service center karena kesalahan teknisi). Total kerugian: 23 unit × rata-rata Rp 4 juta/unit = Rp 92 juta. Investasi ESD wrist strap untuk semua teknisi: Rp 25.000/unit × 5 teknisi = Rp 125.000. Kerugian yang bisa dicegah dengan Rp 125.000.'
        }
      },
      {
        title: 'K3 Pekerjaan di Ketinggian',
        image: '🏗️',
        content: 'Pekerjaan di ketinggian dalam konteks TJKT mencakup tidak hanya pendakian tower BTS setinggi 20-80 meter, tetapi juga instalasi kabel di atas plafon gedung tinggi, pemasangan antena di rooftop, pekerjaan di tiang distribusi fiber optik, dan bahkan penggunaan tangga di atas 1.8 meter. Semua aktivitas ini masuk dalam regulasi Permenaker No. 9 Tahun 2016 yang menetapkan standar ketat untuk kompetensi, peralatan, dan prosedur.\n\nFall protection system yang lengkap bukan hanya tentang harness — ini adalah sistem yang terdiri dari tiga komponen yang harus diverifikasi sebelum setiap pekerjaan di ketinggian: Anchor Point (titik pengikat yang harus mampu menahan minimum 15 kN = 1,5 ton — tidak semua struktur di tower cocok sebagai anchor point, perlu assessment), Personal Fall Arrest System/PFAS (kombinasi harness + lanyard + shock absorber + karabiner yang semuanya memenuhi standar SNI/EN), dan Rescue Plan (prosedur tertulis yang dispesialisasi untuk lokasi, peralatan rescue yang tersedia, dan personel rescue yang terlatih yang selalu siaga di bawah).\n\nKalkulasi Fall Clearance adalah langkah kritis yang sering diabaikan: sebelum memilih anchor point dan panjang lanyard, teknisi harus menghitung total jarak jatuh yang akan terjadi. Rumus: Fall Clearance = panjang lanyard + elongasi shock absorber saat deployed (1-1.5m) + panjang sub-assembly D-ring ke kaki (biasanya 1.5m) + safety margin (1m) = minimum 5-6 meter clearance di bawah anchor point. Jika clearance tidak cukup, harus memilih self-retracting lifeline (SRL) yang memberikan clearance yang jauh lebih kecil.',
        points: [
          'Sertifikasi wajib: K3 Bekerja di Ketinggian Level 1 dan 2 dari BNSP — tanpa ini dilarang bekerja >1.8 meter',
          'Full body harness SNI EN 361: 5-point, minimum breaking strength 15 kN di setiap D-ring attachment',
          'Shock absorbing lanyard: batas max deployment force <6 kN, shrink pack indicator menunjukkan sudah pernah deployed',
          'Self-retracting lifeline (SRL): lebih aman untuk tower climbing — instantly arrests fall, fall clearance lebih kecil dari lanyard',
          'Anchor point verification: minimum SWL 15 kN, preferably engineered anchor atau certified anchor point di tower',
          'Three point of contact rule: dua tangan + satu kaki, atau satu tangan + dua kaki — selalu saat memanjat',
          'Tower inspection sebelum naik: cek kondisi rung (anak tangga) terutama yang berkarat atau longgar',
          'No lone worker policy: selalu ada minimum 1 orang di bawah sebagai observer, spotter, dan rescuer pertama'
        ],
        example: {
          title: '💡 Suspension Trauma: Ancaman Tersembunyi Setelah Jatuh Tertahan',
          description: 'Suspension trauma (juga disebut orthostatic intolerance atau harness hang syndrome) adalah kondisi medis serius yang dapat mengancam nyawa dalam 5-30 menit setelah seorang teknisi tergantung dalam harness setelah jatuh tertahan. Ketika tubuh dalam posisi vertikal tanpa gerakan, vena di kaki berkontraksi, darah terkumpul di ekstremitas bawah, cardiac output turun drastis, dan korban bisa kehilangan kesadaran dari "harness suspension" bahkan tanpa cedera fisik dari jatuh itu sendiri. Protokol penyelamatan: segera hubungi tim rescue, pertahankan korban tetap sadar dengan komunikasi, dan ketika diturunkan: jangan langsung berdirikan — posisikan setengah duduk (W-position) selama 30 menit sebelum dibawa ke RS. Setiap site harus memiliki rescue plan yang mempertimbangkan waktu respons vs golden window suspension trauma.'
        }
      },
      {
        title: 'K3 Fiber Optik: Bahaya yang Tidak Terlihat',
        image: '🔦',
        content: 'Fiber optik menyimpan tiga kategori bahaya yang sering diabaikan karena sifatnya yang tidak terlihat: Bahaya fisik dari serat kaca buangan (fragmen kaca berdiameter 125 μm dengan ujung setajam jarum), bahaya radiasi optik dari laser testing dan active fiber (invisible near-infrared laser yang dapat merusak retina secara permanen dalam milliseconds), dan bahaya kimia dari material handling seperti isopropyl alcohol (IPA) konsentrasi tinggi dan gel water-blocking compound dari buffer tube.\n\nFragmen serat kaca yang dihasilkan saat cleaving dan stripping adalah bahaya yang sering diremehkan. Satu serat yang terlepas dan melayang di udara tidak terlihat tetapi dapat: menancap di kulit dan menyebabkan infeksi yang sulit diatasi karena ukurannya sangat kecil; menancap di kornea mata dan memerlukan prosedur mikro-pembedahan untuk mengangkatnya; atau jika terhirup dapat menyebabkan iritasi saluran napas dan paru-paru. Serat kaca adalah benda asing biologis yang tubuh manusia tidak dapat mendegradasi atau mengeluarkan secara alami.\n\nBahaya laser dari fiber aktif sering diremehkan karena cahayanya tidak terlihat (panjang gelombang 1310nm dan 1550nm berada di near-infrared, di luar rentang visibilitas mata manusia). Kerusakan retina dari laser kelas 1 yang biasanya digunakan untuk pengujian bisa terjadi tanpa rasa sakit apapun pada saat kejadian — dan kerusakan retina bersifat permanen karena sel fotoreseptor tidak dapat beregenerasi.',
        points: [
          'APD wajib fiber optik: safety glasses (ANSI Z87.1 impact rated), sarung tangan nitrile atau latex examination grade',
          'Serat buangan disposal: kumpulkan dalam botol plastik berscrewcap khusus bertanda "FIBER WASTE — HAZARDOUS", buang per prosedur',
          'Area kerja hygiene: tidak makan/minum/merokok/menyentuh wajah, bersihkan dengan tape roll setelah selesai (serat menempel)',
          'Laser safety: JANGAN melihat ke ujung fiber atau konektor tanpa power meter atau infrared viewer — gunakan optical power meter untuk deteksi',
          'Active fiber identification: selalu gunakan Optical Power Meter untuk verifikasi "no power" sebelum handling fiber yang mungkin aktif',
          'Fusion splicer safety: suhu busur listrik 4.000°C — jangan dekatkan wajah, jauhkan bahan mudah terbakar (gel buffer tube, IPA)',
          'IPA (Isopropyl Alcohol) 99%: flammable class II, jauhkan dari panas dan sumber api, ventilasi cukup saat digunakan dalam ruang tertutup',
          'OTDR eyesafety: OTDR mengeluarkan laser kelas 1M — berbahaya dengan optical instrument, tidak berbahaya dengan mata telanjang'
        ],
        example: {
          title: '💡 Prosedur Lengkap Penanganan Serat Optik yang Aman',
          description: 'Sebelum mulai splicing: 1) Pastikan kacamata safety terpasang. 2) Gunakan sarung tangan nitrile tipis. 3) Siapkan botol disposal serat tertutup di dekat area kerja. 4) Periksa dengan OPM bahwa fiber tidak aktif. 5) Siapkan tissue untuk membersihkan permukaan. Saat splicing: 6) Strip buffer tube dengan stripper yang tepat, jangan dengan gigi atau kuku. 7) Bersihkan serat dengan IPA 99% + tissue, satu arah saja (jangan bolak-balik). 8) Cleave dengan Fiber Cleaver, periksa end-face dengan kaca pembesar built-in. 9) Masukkan ke splicer TANPA menyentuh ujung. 10) Serat yang terputus saat cleave → langsung masukkan ke botol disposal, jangan dibiarkan di meja. Setelah selesai: 11) Gulung area kerja dengan tape untuk tangkap serat tidak terlihat. 12) Lepas sarung tangan, cuci tangan sebelum menyentuh wajah.'
        }
      },
      {
        title: '5R: Sistem Manajemen Visual Tempat Kerja',
        image: '✨',
        content: '5R (Ringkas-Rapi-Resik-Rawat-Rajin) bukan kampanye kebersihan sekali setahun atau aktivitas yang dilakukan saat ada audit. 5R adalah sistem manajemen visual yang mengubah cara fundamental bagaimana pekerja berinteraksi dengan lingkungan kerja mereka setiap hari. Ketika diimplementasikan dengan benar, 5R menciptakan lingkungan di mana kondisi abnormal (alat yang hilang, peralatan yang rusak, kabel yang berantakan, area yang kotor) menjadi langsung terlihat oleh siapa saja yang masuk ke area tersebut — tanpa perlu laporan atau audit.\n\nFilosofi di balik 5R yang sering disalahpahami: ini bukan tentang menjaga lingkungan kerja supaya terlihat rapi untuk orang luar (tamu, auditor). Ini tentang menciptakan kondisi kerja yang optimal untuk pekerja sendiri. Ketika setiap alat punya tempat yang terdefinisi dan selalu dikembalikan ke tempatnya, teknisi tidak membuang waktu mencari alat. Ketika area kerja bersih dan terorganisir, komponen tidak tercecer dan hilang. Ketika kondisi peralatan diperiksa saat Resik (membersihkan), kerusakan atau keausan terdeteksi sebelum menjadi kegagalan.\n\nImplementasi 5R yang berhasil membutuhkan tiga kondisi: komitmen kepemimpinan yang visible (supervisor dan manajer menerapkan 5R dengan konsisten, bukan hanya "menyuruh" pekerja), sistem akuntabilitas yang jelas (siapa responsible untuk area mana, jadwal audit berkala dengan scoring yang transparan), dan budaya yang positif (5R sebagai "cara kami bekerja", bukan hukuman atau tambahan beban kerja).',
        points: [
          'RINGKAS: Red Tag campaign — tempel tag merah pada semua item status tidak jelas, putuskan dalam 30 hari: simpan/pindah/buang',
          'RAPI: "a place for everything" — shadow board, label lokasi, color coding, floor marking, visual management board',
          'RESIK: pembersihan = inspeksi — saat membersihkan, periksa kondisi peralatan, identifikasi sumber kotoran dan eliminasi',
          'RAWAT: standardisasi dengan foto "kondisi standar", checklist harian/mingguan, jadwal preventive maintenance visual',
          'RAJIN: 5R audit dengan scoring chart, recognition program, 5R sebagai KPI team, coaching bukan policing',
          'Visual management tools: andon light (hijau/kuning/merah), kamishibai board, obeya room (war room proyek)',
          'Shadow board: siluet alat di papan pegboard — langsung terlihat jika ada alat yang belum dikembalikan',
          'One-point lesson: instruksi visual satu halaman untuk prosedur kritis — dipasang di lokasi kerja sebagai referensi cepat'
        ],
        example: {
          title: '💡 Quantified Results: 5R di Ruang Server Data Center',
          description: 'Data center MSP di Surabaya mengimplementasikan 5R di ruang server selama 3 bulan (baseline survey → implementasi → stabilisasi). Baseline: waktu MTTF (Mean Time to Find equipment) = 8.5 menit per insiden troubleshooting, 3 downtime events per bulan akibat misconfiguration karena kabel tidak berlabel. Setelah 5R: seluruh kabel dilabeli dengan kode warna per fungsi (power/data/management), semua perangkat diberi label aset dengan QR code ke dokumentasi, lantai dan rack diberi label lokasi yang terstandardisasi. Hasil terukur setelah 3 bulan: MTTF turun ke 1.2 menit (-86%), downtime events akibat misconfiguration turun ke 0 per bulan, onboarding teknisi baru dari 2 minggu ke 3 hari.'
        }
      },
      {
        title: 'Manajemen Risiko K3: HIRA, JSA, dan Toolbox Meeting',
        image: '🚧',
        content: 'Manajemen risiko K3 yang efektif adalah siklus PDCA (Plan-Do-Check-Act) yang diaplikasikan pada identifikasi dan pengendalian bahaya: Plan (identifikasi bahaya dan nilai risiko), Do (implementasikan kontrol yang dipilih), Check (verifikasi efektivitas kontrol melalui monitoring dan audit), Act (perbaiki jika kontrol tidak efektif atau ada bahaya baru yang teridentifikasi). Siklus ini tidak pernah berhenti — selalu ada potensi untuk meningkatkan keamanan.\n\nHIRA (Hazard Identification and Risk Assessment) adalah alat terstruktur untuk mendokumentasikan semua bahaya yang ada atau berpotensi muncul dalam setiap aktivitas kerja, beserta risiko yang ditimbulkan dan kontrol yang akan diterapkan. HIRA yang baik: dibuat oleh orang yang benar-benar melakukan pekerjaan tersebut (bukan safety officer yang duduk di kantor), menggunakan risk matrix yang konsisten, spesifik terhadap kondisi lokasi dan peralatan aktual (bukan template generik), dan diperbarui setiap kali ada perubahan kondisi atau prosedur.\n\nToolbox Meeting (TBT - Tailgate Briefing atau Safety Briefing) adalah intervensi sederhana yang memiliki dampak terbesar pada budaya keselamatan: briefing K3 singkat 5-15 menit yang dilakukan langsung di area kerja sebelum memulai, membahas risiko spesifik pekerjaan hari itu, kondisi bahaya yang ada, APD yang wajib digunakan, prosedur darurat yang relevan, dan near-miss atau insiden terbaru sebagai lesson learned.',
        points: [
          'HIRA process: Identify hazard → Who is affected and how → Assess risk (likelihood × severity) → Determine control → Implement → Review',
          'Risk Matrix 5x5: likelihood (1-Rare to 5-Almost Certain) × severity (1-Negligible to 5-Catastrophic)',
          'Risk scores: 1-4 (Low, acceptable), 5-9 (Medium, ALARP), 10-16 (High, specific control), 17-25 (Extreme, stop work)',
          'JSA (Job Safety Analysis): step-by-step analysis — setiap langkah pekerjaan + hazards per langkah + control measures',
          'LOTO (Lockout/Tagout): isolasi energi berbahaya sebelum maintenance — lock + tag + verify zero energy',
          'PTW (Permit to Work): formal authorization system untuk pekerjaan berisiko tinggi (confined space, hot work, electrical)',
          'Near-Miss reporting culture: no blame, no punishment — fokus pada sistem dan kondisi, bukan individu',
          'Incident investigation: 5-Why analysis + Ishikawa diagram — cari root cause, bukan symptom'
        ],
        example: {
          title: '💡 JSA yang Mencegah Insiden Underground Cable Installation',
          description: 'Tim instalasi fiber underground melakukan JSA sebelum mulai penggalian di area perkotaan. JSA Step 3 "Excavation": Hazard yang teridentifikasi: "Kabel utilitas tersembunyi (PLN, PDAM, Telkom) tidak diketahui lokasinya". Likelihood 4 (Likely), Severity 5 (Catastrophic = potentially fatal) = Risk Score 20 (EXTREME). Control: Sebelum gali, wajib: (1) Cek One Call Indonesia / Digisafe untuk peta utilitas, (2) Ground-penetrating radar scan jika tersedia, (3) Konfirmasi langsung ke PLN dan PDAM setempat, (4) Gali trial hole manual (50cm × 50cm) sebagai blind spot verification sebelum excavator beroperasi. Dengan kontrol ini, risk score turun ke 8 (Medium, ALARP). Proses JSA 30 menit ini mencegah potensi insiden fatal.'
        }
      },
      {
        title: 'Ringkasan — K3LH dan Budaya Kerja',
        image: '🎓',
        content: 'K3LH bukan formalitas, bukan kewajiban di atas kertas, dan bukan beban tambahan. K3LH adalah investasi yang melindungi aset paling berharga yang kamu miliki — tubuh dan kesehatanmu yang hanya ada satu. Setiap kali kamu pulang ke rumah dalam kondisi sehat setelah seharian bekerja, itulah K3 yang berhasil. Setiap kali kamu mengidentifikasi bahaya sebelum terjadi, kamu sudah menyelamatkan dirimu dan rekan kerjamu.\n\nBudaya keselamatan tidak terbentuk dalam satu hari dan tidak bisa dipaksakan dari luar — ia tumbuh dari dalam, dari setiap individu yang memilih untuk peduli terhadap keselamatan dirinya dan orang-orang di sekitarnya. Seorang teknisi TJKT yang konsisten menerapkan K3 — selalu pakai APD, selalu ikuti SOP, selalu laporkan near-miss — adalah profesional sejati yang layak mendapat kepercayaan dan tanggung jawab yang lebih besar.\n\nMulai dari laboratorium sekolah: rapikan kabel setelah praktikum (5R), pakai ESD wrist strap saat merakit PC (K3 elektronik), kenakan kacamata safety saat latihan krimping kabel (APD). Kebiasaan K3 yang dibangun sejak sekolah akan menjadi second nature di tempat kerja — dan second nature yang membawa pulang selamat setiap hari adalah nilai yang tidak ternilai.',
        points: [
          '✅ Regulasi: UU 1/1970, PP 50/2012 (SMK3), Permenaker 9/2016 (ketinggian) — pahami dan patuhi',
          '✅ APD: pilih sesuai bahaya spesifik, inspeksi sebelum pakai, buang jika rusak — tidak ada kompromi',
          '✅ K3 elektronik: ESD wrist strap selalu, discharge kapasitor sebelum buka unit, ergonomi workstation',
          '✅ K3 ketinggian: sertifikasi BNSP wajib, harness + double lanyard, anchor point verify, rescue plan',
          '✅ K3 fiber optik: kacamata safety, sarung tangan nitrile, disposal serat aman, jangan lihat laser aktif',
          '✅ 5R: Ringkas-Rapi-Resik-Rawat-Rajin sebagai sistem manajemen visual harian',
          '✅ Manajemen risiko: HIRA, JSA, Toolbox Meeting, LOTO, near-miss reporting, incident investigation'
        ],
        example: {
          title: '🚀 K3 sebagai Diferensiator Kompetitif dalam Bisnis TJKT',
          description: 'Perusahaan TJKT yang berhasil mendapatkan kontrak tower maintenance Telkomsel senilai Rp 8 miliar selama 3 tahun harus memenuhi persyaratan K3 yang sangat ketat: zero accident record 3 tahun terakhir, semua teknisi bersertifikat K3 Ketinggian BNSP Level 2, sistem manajemen K3 terakreditasi OHSAS 18001 (sekarang ISO 45001), laporan near-miss dan insiden bulanan tersedia, insurance coverage untuk setiap teknisi, dan rescue plan per site yang diverifikasi. Perusahaan yang tidak memiliki sistem K3 yang matang tidak lolos pre-qualification, bahkan jika harga penawarannya paling rendah. K3 yang baik bukan hanya melindungi nyawa — K3 yang baik adalah tiket masuk ke kontrak premium.'
        }
      }
    ]
  },

  '5': {
    title: 'Prinsip Dasar TJKT',
    category: 'Dasar',
    difficulty: 'Pemula',
    duration: '70 menit',
    description: 'Pengenalan komprehensif hardware dan software komputer, perakitan PC step-by-step, instalasi OS Windows dan Linux, topologi jaringan, OSI Model 7 Layer, IP addressing, dan subnetting.',
    youtubeId: 'BASxTyu3jiw',
    slides: [
      {
        title: 'Hardware Komputer: Komponen, Fungsi, dan Spesifikasi',
        image: '🖥️',
        content: 'Komputer modern adalah sistem yang terdiri dari puluhan komponen yang bekerja dalam harmoni untuk melaksanakan miliaran instruksi per detik. Sebagai teknisi TJKT, pemahaman mendalam tentang setiap komponen — tidak hanya cara memasangnya, tetapi cara kerjanya, spesifikasinya, dan bagaimana memilihnya untuk kebutuhan spesifik — adalah fondasi yang tidak dapat dibangun di atasnya tanpa risiko keruntuhan di kemudian hari.\n\nHierarchy of Bottleneck: performa komputer secara keseluruhan ditentukan oleh komponen terlemahnya (bottleneck). Komputer dengan CPU terkencang pun akan terasa lambat jika menggunakan HDD (HDD random read: ~0.1ms) daripada SSD NVMe (SSD random read: ~0.02ms). Mengidentifikasi dan memahami bottleneck adalah skill troubleshooting penting bagi teknisi.\n\nTrend yang perlu dipahami: CPU modern (Intel generasi 12+ dan AMD Ryzen 5000+) memiliki arsitektur hybrid dengan Performance core (P-core) untuk beban berat dan Efficient core (E-core) untuk task background — mirip dengan arsitektur ARM di smartphone. Memori DDR5 menggantikan DDR4 dengan bandwidth 2x lebih tinggi. Storage Gen 4 NVMe mencapai 7.000 MB/s read, dibanding HDD SATA yang hanya 150 MB/s. Gap performa antar generasi komponen IT jauh lebih besar dari yang kebanyakan orang sadari.',
        points: [
          'CPU: cores (jumlah pemrosesan paralel), threads, base/boost clock (GHz), cache L1/L2/L3, TDP (thermal design power)',
          'RAM DDR4/DDR5: capacity (GB), speed (MHz/MT/s), CAS latency, dual/quad channel untuk bandwidth lebih tinggi',
          'Motherboard: socket CPU (AM5/LGA1700), chipset, DIMM slots, PCIe gen, M.2 slots, VRM quality untuk stability',
          'NVMe SSD (PCIe Gen 4): Sequential Read 7000 MB/s, Random Read ~1M IOPS — 50x lebih cepat dari HDD',
          'SATA SSD: Sequential Read 550 MB/s, lebih lambat dari NVMe tapi jauh lebih cepat dari HDD untuk boot dan OS',
          'HDD: murah per TB, untuk bulk storage dan backup — tidak untuk OS (bottleneck signifikan)',
          'PSU: wattage (pilih 20-30% headroom), efficiency rating (80 Plus Bronze/Gold/Platinum), modular vs non-modular',
          'GPU: CUDA cores / Stream Processors, VRAM (GB), Memory bandwidth — penting untuk AI workload dan rendering'
        ],
        example: {
          title: '💡 Bottleneck Analysis: Mengidentifikasi Komponen Pembatas Performa',
          description: 'PC workstation desainer grafis dengan CPU AMD Ryzen 9 5950X (16-core terkencang) tetapi hanya 16GB RAM DDR4 single-channel (half bandwidth dari dual-channel). Saat render Blender 3D dengan resolusi tinggi: CPU usage 98% (bekerja keras) tapi render time tetap lambat karena memory bandwidth menjadi bottleneck — data tidak bisa dikirim ke CPU cukup cepat. Solusi: upgrade ke 32GB DDR4 dual-channel = bandwidth 2x lipat = render time turun 35% tanpa ganti CPU. Diagnosis bottleneck seperti ini adalah skill yang membedakan teknisi kompeten dari yang asal ganti komponen paling mahal.'
        }
      },
      {
        title: 'Software Komputer: Ekosistem dan Arsitektur',
        image: '💻',
        content: 'Software bukan hanya "program yang dijalankan di komputer" — software adalah ekosistem berlapis yang memungkinkan hardware yang sama melayani ribuan use case berbeda, dari permainan video hingga simulasi cuaca, dari pengolah teks hingga pengendalian reaktor nuklir. Memahami arsitektur berlapis software adalah kunci untuk troubleshooting yang efektif dan pengelolaan sistem yang kompeten.\n\nLayer architecture software: Firmware/BIOS adalah software yang tersimpan di ROM chip pada hardware dan berjalan sebelum OS dimuat — menginisialisasi hardware, melakukan POST (Power-On Self Test), dan menyerahkan kontrol ke bootloader. Kernel OS adalah inti sistem operasi yang berjalan di "ring 0" (hak akses tertinggi) dan mengelola semua resource hardware melalui abstraksi — hardware abstraction layer (HAL) adalah alasan mengapa aplikasi yang sama bisa berjalan di hardware yang berbeda. User space adalah di mana semua aplikasi pengguna berjalan di "ring 3" (hak terbatas) dengan akses ke hardware hanya melalui system calls ke kernel.\n\nLicense model yang perlu dipahami: Proprietary (sumber kode tertutup, hak penggunaan dibatasi lisensi — Windows, Cisco IOS, Adobe Suite), Open Source dengan berbagai lisensi (GPL: derivative work harus open source juga; MIT/Apache/BSD: bisa digunakan di proprietary software), Freeware (gratis digunakan tapi kode tertutup), dan Shareware (gratis dicoba, berbayar untuk full version).',
        points: [
          'Firmware/BIOS/UEFI: inisialisasi hardware, POST, boot sequence, password BIOS, Secure Boot, TPM',
          'OS Kernel: resource management (CPU scheduling), memory management (virtual memory, paging), I/O management',
          'Device Driver: abstraksi hardware-specific — vendor-provided (NVIDIA, Realtek) atau generic (Windows class driver)',
          'System software: antivirus, backup software, disk management, performance monitor, remote management tools',
          'Application software: productivity (Office, LibreOffice), browser, communication, creative, engineering',
          'License models: proprietary, GPL, MIT, Apache, BSD, Creative Commons — penting untuk compliance dan bisnis',
          'Package manager: apt/apt-get (Debian/Ubuntu), yum/dnf (RHEL/Fedora), winget (Windows) — sistem instalasi modern',
          'Virtualization: VMware/VirtualBox/Hyper-V — jalankan multiple OS dalam satu hardware fisik secara bersamaan'
        ],
        example: {
          title: '💡 Mengapa Kernel Linux Berbeda dari Windows NT Kernel',
          description: 'Windows NT Kernel (hybrid kernel): sebagian device driver berjalan di kernel space untuk performa — risiko: driver yang crash bisa membuat seluruh OS crash (BSOD Blue Screen of Death). Linux Kernel (monolithic modular): core di kernel space, driver sebagai loadable kernel modules yang bisa di-load/unload tanpa restart — lebih stabil, dan jika driver crash, bisa di-unload tanpa mempengaruhi OS. Ini salah satu alasan fundamental mengapa Linux server bisa berjalan bertahun-tahun tanpa restart sementara Windows server perlu reboot setiap update. Untuk teknisi TJKT yang mengelola server, ini adalah perbedaan yang sangat relevan dalam pemilihan OS server.'
        }
      },
      {
        title: 'Perakitan Komputer: Prosedur dan Best Practices',
        image: '🔧',
        content: 'Merakit PC dari komponen individual adalah skill hands-on yang mendemokan pemahaman integrated system — bagaimana setiap komponen berinteraksi dalam satu sistem yang kohesif. Kompetensi ini diuji dalam UKK (Ujian Kompetensi Keahlian) TJKT dan secara reguler dalam seleksi kerja untuk posisi teknisi dan engineer.\n\nMetodologi perakitan yang profesional mengikuti prinsip "Test as You Go": jangan merakit semua komponen sekaligus kemudian nyalakan dan berharap semuanya berjalan. Rakit secara bertahap, test di setiap milestone, dan isolasi masalah sebelum lanjut. Milestone test yang direkomendasikan: (1) CPU+RAM+Cooler di motherboard → POST test di luar casing; (2) Tambah GPU (jika ada) → boot ke UEFI; (3) Tambah storage → install OS; (4) Pasang ke casing → verify airflow dan temperature.\n\nNilai penting yang sering diabaikan: cable management. Kabel yang tertata rapi bukan hanya estetika — ini adalah kebutuhan fungsional. Kabel yang berantakan menghambat aliran udara di dalam casing (meningkatkan suhu komponen secara signifikan), mempersulit troubleshooting dan upgrade di masa depan, dan menambah risiko kabel tertarik atau terjepit yang menyebabkan koneksi intermittent.',
        points: [
          'Komponen urutan assembly: CPU → Thermal Paste + Cooler → RAM → M.2 SSD → Motherboard ke casing → PSU → GPU → SATA storage',
          'CPU installation: align arrow notch (Intel) atau triangle marker (AMD), gently drop (LGA) atau slide (AM5), zero insertion force',
          'Thermal paste application: rice grain-sized dot di center CPU IHS, pressure dari cooler menyebarkan secara merata',
          'RAM dual channel: slot A2 dan B2 (atau slot 2 dan 4 pada beberapa motherboard) — cek manual, beda motherboard beda layout',
          'Front panel connectors: paling tricky — lihat motherboard manual untuk pinout (Power SW, Reset SW, HDD LED, Power LED, USB 3.0)',
          'PSU cables: 24-pin ATX (main power), 8-pin/4+4-pin EPS (CPU VRM power wajib), PCIe 6+2-pin (GPU), SATA power',
          'Cable routing: gunakan kabel tie atau velcro strip, routing kabel melalui grommet holes, manfaatkan back panel casing',
          'First boot checklist: UEFI accessible → set XMP/EXPO untuk RAM speed → verifikasi storage terdeteksi → install OS'
        ],
        example: {
          title: '💡 Troubleshooting PC Baru Yang Tidak Mau POST',
          description: 'PC baru tidak POST (tidak tampil apapun di monitor setelah dinyalakan) adalah insiden yang akan dialami hampir setiap teknisi. Pendekatan sistematis: 1) Cek speaker/buzzer untuk POST beep code → decode error dari manual motherboard. 2) Tidak ada beep: cek koneksi power 24-pin dan 8-pin CPU (connector ini sering terlupa). 3) Masih tidak: bare minimum test — lepas GPU (gunakan onboard video), lepas semua RAM kecuali 1 stick di slot A2, cabut semua storage. 4) Masih tidak: coba RAM di slot berbeda. 5) Masih tidak: seat ulang CPU dengan memeriksa socket untuk bent pin (Intel) atau bent pin di CPU (AMD). 6) Terakhir: coba PSU berbeda. Metodologi ini menghemat waktu dari "ganti semua komponen satu per satu".'
        }
      },
      {
        title: 'Instalasi Sistem Operasi: Windows dan Linux',
        image: '🪟',
        content: 'Instalasi sistem operasi adalah layanan yang paling sering diminta pelanggan kepada teknisi IT — dari individu yang laptopnya terasa lambat, UMKM yang butuh PC baru, hingga perusahaan yang melakukan rollout PC massal. Menguasai proses instalasi OS secara mendalam, termasuk partisi yang optimal, urutan driver, dan konfigurasi pasca instalasi, adalah keterampilan yang langsung menghasilkan pendapatan.\n\nModern Windows installation workflow: Download ISO resmi dari microsoft.com (Media Creation Tool atau direct ISO link), verifikasi checksum SHA-256, buat bootable USB menggunakan Rufus dengan skema partisi GPT dan target system UEFI (untuk hardware modern). Boot dari USB, pilih Custom Installation untuk kontrol penuh atas partisi — hapus semua partisi existing jika clean install, buat partisi EFI (300MB), MSR (16MB, otomatis), dan Windows (sisanya). Setelah instalasi selesai: langsung install Windows Update sebelum driver apapun (update mungkin include driver dasar), kemudian install driver dalam urutan: Chipset (Intel/AMD) → GPU → Audio → LAN/WiFi → perangkat lain.\n\nLinux installation (Ubuntu Server LTS sebagai contoh): download ISO dari ubuntu.com, buat bootable USB dengan Balena Etcher atau Rufus, boot dan ikuti guided installation wizard. Perbedaan penting dari Windows: Linux menggunakan ext4 sebagai filesystem default (bukan NTFS), partisi swap (virtual memory overflow), dan tidak membutuhkan product key. Setelah install: sudo apt update && sudo apt upgrade untuk update seluruh sistem.',
        points: [
          'Bootable USB: Rufus (Windows only), Balena Etcher (cross-platform), dd command (Linux/macOS) — selalu verifikasi SHA256',
          'UEFI/GPT vs Legacy BIOS/MBR: selalu gunakan UEFI/GPT untuk hardware modern (2012+) — lebih cepat boot, >2TB disk support',
          'Windows partisi optimal: C: sistem+program (150-200GB SSD), D: data+dokumen (HDD atau SSD terpisah)',
          'Driver installation order: Chipset → GPU → Audio → NIC/WiFi → perangkat lain — urutan mempengaruhi stabilitas',
          'Windows post-install: Update → HEVC codec (gratis dari Microsoft Store) → PowerShell policies → Defender exclusion untuk dev tools',
          'Ubuntu Server essential commands: sudo apt update && upgrade, systemctl, journalctl, netplan, ufw, ssh-keygen',
          'Linux partisi: / (root, 50GB minimum untuk server), /home (data user), /var (logs, databases), swap (sama dengan RAM atau 8GB)',
          'Dual boot consideration: install Windows dulu, Linux kemudian — Linux bootloader (GRUB) lebih mudah manage dualboot'
        ],
        example: {
          title: '💡 Mass Deployment: Install 30 PC Sekaligus Dalam 2 Jam',
          description: 'Proyek instalasi 30 PC lab komputer sekolah dengan timeline ketat: tanpa automation = 30 PC × 60 menit/PC = 30 jam. Dengan Windows Deployment Services (WDS) atau MDT (Microsoft Deployment Toolkit): 1) Buat master image Windows di 1 PC dengan konfigurasi dan driver lengkap menggunakan Sysprep, 2) Capture image ke WDS server, 3) Boot semua PC via PXE (network boot) ke WDS server, 4) Deploy image via network secara paralel. 30 PC selesai dalam 90 menit. Post-deployment automation via Group Policy untuk domain join, software installation (Office, browser, tools), dan settings standarisasi. Kemampuan mass deployment ini membedakan teknisi yang bisa menangani proyek enterprise dari yang hanya bisa install satu-satu.'
        }
      },
      {
        title: 'Topologi Jaringan: Desain untuk Performa dan Keandalan',
        image: '🌐',
        content: 'Topologi jaringan mendefinisikan dua hal yang berbeda: topologi fisik (bagaimana kabel dan perangkat secara literal dihubungkan dan diletakkan dalam ruang) dan topologi logis (bagaimana data mengalir di antara perangkat, yang bisa berbeda dari topologi fisik). Pemahaman keduanya penting karena topologi fisik menentukan biaya dan kemudahan instalasi, sementara topologi logis menentukan performa dan keandalan.\n\nEvolusi topologi di industri: era 1980-an didominasi Bus topology (Ethernet 10Base2/10Base5 dengan kabel coaxial sebagai shared medium) dan Ring topology (Token Ring IBM). Keduanya memiliki masalah yang sama: satu kegagalan di media bisa melumpuhkan seluruh jaringan. Era 1990-an menandai transisi ke Star topology dengan UTP dan hub, kemudian switch. Era 2000-an menghadirkan Hierarchical Tree sebagai standar enterprise. Era sekarang: Software-Defined Networking (SDN) yang memisahkan control plane dari data plane, memungkinkan "topologi logis" dapat diubah secara software tanpa mengubah kabel fisik.\n\nUntuk perancangan jaringan baru di era modern, model yang direkomendasikan adalah Cisco Three-Tier Hierarchical Design: Core Layer (kecepatan dan konektivitas tinggi, no policy, minimal change), Distribution Layer (routing, policy, security, aggregasi dari access), dan Access Layer (konektivitas end device, edge security, PoE). Model ini menjamin scalability (tambah access switch baru tanpa perubahan di core), manageability (isolasi masalah per tier), dan redundancy (koneksi ganda dari distribution ke core).',
        points: [
          'Bus topology: semua node di satu medium bersama, collision domain besar, satu break = semua down — obsolete',
          'Star topology: semua node ke central switch, isolasi kegagalan per node, single point of failure di switch — most common',
          'Ring topology: SONET/SDH masih digunakan di backbone WAN untuk self-healing (protection switching dalam 50ms)',
          'Full Mesh: n(n-1)/2 koneksi untuk n node — 10 node = 45 koneksi. Digunakan di core network untuk redundancy maksimal',
          'Partial Mesh: hanya node kritis yang punya multiple connections — keseimbangan antara redundancy dan biaya',
          'Hierarchical Tree: standar enterprise — Core (2 switch terhubung redundant) → Distribution → Access (star)',
          'Leaf-Spine: topologi modern untuk data center — setiap Leaf switch terhubung ke semua Spine switch, latensi konsisten',
          'SDN (Software-Defined Networking): control plane (policy) dipisahkan dari data plane (forwarding) — topologi logis via software'
        ],
        example: {
          title: '💡 Mengapa Flat Topology Menjadi Masalah di Jaringan Besar',
          description: 'Perusahaan startup yang tumbuh cepat membangun jaringan dengan satu switch besar 48-port, semua perangkat (100 PC + 20 server + 50 IP camera + 30 IP phone) di satu broadcast domain flat (VLAN tunggal). Masalah yang muncul seiring pertumbuhan: ARP broadcast storm dari 200+ perangkat membebani semua CPU (broadcast ke semua port), IP camera RTSP stream memakan 60% bandwidth total jaringan dan mempengaruhi VoIP quality, satu PC yang terinfeksi malware dapat scan seluruh jaringan (lateral movement mudah). Solusi: redesign ke hierarchical topology dengan VLAN segmentation (VLAN PC, VLAN Server, VLAN Camera, VLAN Voice, VLAN Management) dan inter-VLAN routing yang menerapkan ACL. Migrasi membutuhkan 3 hari downtime terencana — jauh lebih mahal daripada jika dari awal didesain dengan benar.'
        }
      },
      {
        title: 'OSI Model 7 Layer: Framework Troubleshooting Universal',
        image: '📚',
        content: 'OSI Model adalah pencapaian konseptual terbesar dalam sejarah networking — sebuah abstraksi yang memungkinkan perangkat dari ribuan vendor berbeda untuk berkomunikasi satu sama lain hanya dengan mematuhi standar di setiap lapisan. Tanpa OSI Model (dan implementasi praktisnya TCP/IP), internet seperti yang kita kenal tidak akan mungkin ada.\n\nSetiap layer OSI memiliki dua interface: service interface ke layer di atasnya (apa yang ditawarkan), dan peer protocol ke layer yang sama di perangkat lain (bagaimana berkomunikasi dengan layer yang sama di sisi lain koneksi). Konsep encapsulation (enkapsulasi) adalah mekanisme di mana setiap layer menambahkan header-nya sendiri ke data sebelum menyerahkan ke layer di bawahnya, dan decapsulation (dekapsulasi) adalah proses sebaliknya di penerima. Inilah mengapa data yang dikirim dari aplikasi Chrome di laptopmu sampai ke server web dalam format yang benar.\n\nNilai praktis OSI Model dalam troubleshooting: Bottom-Up approach dimulai dari Physical Layer (apakah kabel terhubung? LED nyala?) naik ke Data Link (apakah MAC address ditemukan di ARP table?) naik ke Network (apakah IP routing benar? ping berhasil?) naik ke Transport (apakah port terbuka? TCP handshake berhasil?) hingga Application Layer (apakah aplikasi merespons dengan benar?). Pendekatan sistematis ini menghilangkan guessing dan mengarahkan troubleshooting ke layer yang bermasalah dalam menit, bukan jam.',
        points: [
          'Layer 1 Physical: bit transmission, media specs (UTP/fiber/WiFi), signal encoding, physical topology, hub/repeater',
          'Layer 2 Data Link: framing, MAC addressing, error detection (CRC/FCS), flow control, switch operation, ARP',
          'Layer 3 Network: logical addressing (IPv4/IPv6), routing, fragmentation, TTL, ICMP — router operation',
          'Layer 4 Transport: port multiplexing, TCP (connection-oriented, reliable, ordered) vs UDP (connectionless, fast)',
          'Layer 5 Session: session management, checkpoint/recovery, RPC, NetBIOS, SQL sessions',
          'Layer 6 Presentation: data format translation, encryption/decryption (TLS), compression, serialization (JSON/XML)',
          'Layer 7 Application: user-facing protocols — HTTP/S, DNS, DHCP, FTP, SMTP, IMAP, SSH, SNMP, NTP',
          'PDU per layer: bit (L1), frame (L2), packet (L3), segment/datagram (L4), data (L5-L7)'
        ],
        example: {
          title: '💡 Decoding a Network Problem Using OSI Layers',
          description: 'Laporan: "Tidak bisa akses website internal perusahaan dari laptop saya, padahal teman satu meja bisa." Troubleshooting OSI: L1 — LED NIC menyala, cable connected (Physical OK). L2 — ping ke switch gateway (default GW) berhasil → ARP table ada entry (Data Link OK). L3 — ping ke 10.1.10.1 (web server IP) berhasil → routing OK (Network OK). L4 — telnet 10.1.10.1 80 berhasil → TCP port 80 open (Transport OK). L7 — buka browser → "403 Forbidden" (Application Layer: server bisa diakses tapi menolak request ini). Root cause: IP laptop user masuk ke blacklist firewall web application karena login failed berkali-kali. Fix: remove IP dari blacklist, reset password. Total troubleshooting: 8 menit. Tanpa OSI framework: bisa menghabiskan 2 jam memeriksa hal yang tidak relevan.'
        }
      },
      {
        title: 'IP Addressing dan Subnetting',
        image: '📡',
        content: 'IP addressing adalah sistem pengalamatan logis yang memungkinkan perangkat di jaringan saling mengirimkan data secara teralamat — seperti sistem alamat pos yang memungkinkan surat dikirimkan ke rumah yang tepat di antara jutaan rumah. Pemahaman mendalam tentang IP addressing dan subnetting adalah skill fundamental yang diuji dalam hampir setiap sertifikasi networking dan wawancara kerja di bidang TJKT.\n\nIPv4 (32-bit binary, ditulis sebagai 4 desimal bertitik) menghadapi kelelahan alamat (address exhaustion) yang diprediksi sejak 1980-an. IANA mengalokasikan blok IPv4 terakhirnya pada Februari 2011. Solusi jangka pendek: NAT (Network Address Translation) yang memungkinkan ribuan perangkat berbagi satu public IP; CIDR (Classless Inter-Domain Routing) yang menggantikan kelas A/B/C yang boros dengan alokasi prefix yang tepat ukuran. Solusi jangka panjang: IPv6 (128-bit, theoretically 340 undecillion addresses) yang adopsinya di Indonesia sudah mencapai >30% menurut Google IPv6 stats.\n\nSubnetting adalah skill yang membedakan network engineer dari sekadar pengguna jaringan. Kemampuan untuk cepat menghitung: given 192.168.5.0/26, berapa host yang tersedia? (62). Berapa network address? (192.168.5.0). Berapa broadcast address? (192.168.5.63). Berapa range host yang valid? (.1 sampai .62). Untuk exam preparation: latihan dengan subnet calculator terlebih dahulu untuk memahami konsep, kemudian latihan kalkulasi manual sampai bisa menghitung dalam <30 detik per subnet.',
        points: [
          'IPv4: 32-bit, 4 oktet desimal (0-255), ~4.3 miliar alamat — praktis habis, NAT sebagai workaround',
          'Private ranges (RFC 1918): 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 — tidak routable di internet publik',
          'Special addresses: 127.0.0.1 (loopback), 169.254.x.x (APIPA/link-local), 0.0.0.0 (default route/any)',
          'CIDR prefix: /24 = 255.255.255.0 = 256 total IP = 254 usable host (minus network dan broadcast address)',
          'Subnetting formula: usable hosts = 2^host_bits - 2; number of subnets = 2^subnet_bits',
          'VLSM (Variable Length Subnet Mask): gunakan subnet yang tepat ukuran per kebutuhan — efisiensi alokasi IP',
          'IPv6: 128-bit, hexadecimal notation (2001:db8:1::1), prefix menggunakan CIDR (/64 untuk end-user network)',
          'DHCP vs static: DHCP untuk workstation dan user devices; static untuk server, router, switch, printer'
        ],
        example: {
          title: '💡 Subnetting Challenge: Desain IP Plan untuk Kantor 3 Lantai',
          description: 'Tantangan: kantor 3 lantai dengan total 200 workstation, 15 server, 40 IP phone, 30 IP camera, 20 AP. Allocate dari 10.10.0.0/16. Solusi VLSM: Floor 3 Workstation: 10.10.3.0/24 (254 hosts). Floor 2 Workstation: 10.10.2.0/24. Floor 1 Workstation: 10.10.1.0/24. Server VLAN: 10.10.10.0/27 (30 hosts — server hanya 15, /27 cukup dengan ruang tumbuh). IP Phone VLAN: 10.10.20.0/26 (62 hosts). CCTV VLAN: 10.10.30.0/26 (62 hosts). AP Management VLAN: 10.10.40.0/27 (30 hosts). IT Management: 10.10.99.0/28 (14 hosts) untuk switch dan router. Sisa: 10.10.100.0/24 sampai 10.10.255.0/24 untuk ekspansi. Total: 7 subnet terdefinisi jelas dengan fungsi yang terisolasi dan efisiensi penggunaan IP yang optimal.'
        }
      },
      {
        title: 'Ringkasan — Prinsip Dasar TJKT',
        image: '🎓',
        content: 'Prinsip-prinsip dasar yang telah kamu pelajari dalam modul ini — hardware, software, perakitan, instalasi OS, topologi, OSI Model, dan IP addressing — adalah fondasi yang akan kamu gunakan setiap hari sepanjang karir di bidang TJKT. Ini bukan pengetahuan yang akan obsolete seiring perubahan teknologi, karena prinsip-prinsip ini adalah lapisan abstraksi yang lebih dalam dari tren teknologi yang datang dan pergi.\n\nSatu insight kritis: pengetahuan teori tanpa praktik menghasilkan "diploma holder" bukan "competency holder". Di industri TJKT, hiring manager tidak peduli berapa nilai rapor kamu — mereka peduli apakah kamu bisa mengkonfigurasi OSPF di 3 router yang saling terhubung, apakah kamu bisa troubleshoot masalah VLAN yang intermittent, apakah kamu bisa install Ubuntu Server dan setup web server dalam 30 menit. Kompetensi ini hanya bisa dibangun melalui jam-jam praktik yang konsisten, bukan membaca buku.\n\nRekomendasi praktik mandiri terstruktur: Minggu 1-2: VirtualBox + Ubuntu Server, kuasai 20 perintah Linux esensial. Minggu 3-4: Cisco Packet Tracer, topologi basic + VLAN. Minggu 5-8: Packet Tracer advanced — routing OSPF/EIGRP, ACL, NAT. Bulan 3-4: GNS3 atau Eve-NG dengan IOS images nyata untuk simulasi yang lebih realistis. Bulan 5-6: persiapan sertifikasi CCNA atau MTCNA.',
        points: [
          '✅ Hardware: komponen, fungsi, spesifikasi, interkoneksi, bottleneck analysis',
          '✅ Software: ekosistem berlapis (firmware → kernel → driver → app), license models',
          '✅ Perakitan PC: metodologi "test as you go", cable management, troubleshooting POST',
          '✅ OS Installation: Windows (UEFI/GPT, driver order), Linux (apt, systemctl, partisi)',
          '✅ Topologi: Bus/Star/Ring/Mesh/Tree/Leaf-Spine, hierarchical design, SDN',
          '✅ OSI Model: 7 layer, PDU per layer, encapsulation, bottom-up troubleshooting',
          '✅ IP Addressing: IPv4, CIDR, private ranges, subnetting, VLSM, IPv6 basics'
        ],
        example: {
          title: '🚀 Lab Setup Mandiri: Dari Nol ke Praktik dalam 1 Minggu',
          description: 'Hari 1: Download dan install VirtualBox (gratis), buat VM Ubuntu Server 22.04 LTS (RAM 2GB, disk 20GB). Hari 2: Boot Ubuntu Server, pelajari basic commands: ls, cd, pwd, mkdir, touch, cat, nano, sudo, apt. Hari 3: Install Cisco Packet Tracer (gratis via NetAcad), buat topologi 3 PC + 1 switch, assign IP manual, test ping. Hari 4: Tambah router di Packet Tracer, konfigurasi 2 subnet berbeda, routing static. Hari 5: Konfigurasi VLAN di switch, VLAN 10 dan VLAN 20 dengan isolasi. Hari 6-7: Dokumentasi semua konfigurasi dalam format profesional, buat network diagram. Upload ke GitHub sebagai portofolio pertama. Dalam 7 hari, kamu sudah memiliki bukti nyata kompetensi yang bisa ditunjukkan ke calon employer.'
        }
      }
    ]
  },

  '6': {
    title: 'Media dan Jaringan Telekomunikasi',
    category: 'Infrastruktur',
    difficulty: 'Pemula',
    duration: '60 menit',
    description: 'Pengenalan komprehensif media transmisi: karakteristik teknis UTP, Coaxial, dan Fiber Optik; standar instalasi profesional; dan teknologi wireless IEEE 802.11 dari generasi ke generasi.',
    youtubeId: 'laOP60yWeu8',
    slides: [
      {
        title: 'Media Transmisi: Dasar Fisik Komunikasi Data',
        image: '🔗',
        content: 'Sebelum data dapat bergerak dari satu perangkat ke perangkat lain, ia harus melewati medium fisik — entah itu elektron yang mengalir dalam konduktor tembaga, foton yang merambat dalam serat kaca, atau gelombang elektromagnetik yang berpropagasi melalui udara. Pemilihan medium yang tepat adalah salah satu keputusan desain paling fundamental dalam instalasi jaringan.\n\nSetiap medium transmisi memiliki karakteristik teknis yang unik yang harus dipahami untuk membuat keputusan desain yang tepat: Bandwidth (kapasitas data maksimum dalam bps — bukan kecepatan sinyal, yang konstan mendekati kecepatan cahaya); Attenuation (pelemahan sinyal seiring jarak, dinyatakan dalam dB/km atau dB/100m — semakin rendah, semakin jauh jangkauannya); Noise immunity (seberapa tahan terhadap interferensi elektromagnetik dari sumber eksternal); Latency (waktu propagasi sinyal dari pengirim ke penerima — umumnya dapat diabaikan untuk jarak jaringan LAN, tapi kritis untuk jarak WAN).\n\nEnvironmental factors yang harus dipertimbangkan: di lingkungan industri dengan motor listrik dan inverter frekuensi tinggi yang menghasilkan EMI kuat, UTP mungkin tidak cukup dan perlu diganti dengan STP (Shielded Twisted Pair) atau fiber optik. Di lingkungan outdoor yang terpapar UV dan kelembaban, kabel harus outdoor-rated. Di area berbahaya (pertambangan, pabrik kimia), mungkin diperlukan kabel explosion-proof atau intrinsically safe.',
        points: [
          'Bandwidth: kapasitas data (bps) yang bisa dibawa — UTP Cat6 (1 Gbps), Fiber SMF dengan DWDM (Tbps per fiber)',
          'Attenuation: pelemahan sinyal per jarak — UTP Cat6 (20dB/100m), Fiber SMF OS2 (0.2dB/km)',
          'Delay/Latency: propagation delay ≈ 5ns/m untuk copper, 5ns/m untuk fiber (±2/3 kecepatan cahaya)',
          'Noise immunity: UTP (rentan crosstalk dan EMI), STP (shielding tambahan), Fiber (imun total EMI)',
          'Physical security: tembaga bisa disadap secara pasif (signal injection); fiber harus dibengkokkan fisik untuk disadap (detectable)',
          'Installation complexity: UTP (mudah, krimping), Coaxial (moderate), Fiber (memerlukan splicer/pre-conn, skill khusus)',
          'Cost: UTP paling murah, Coaxial menengah, Fiber mahal tapi total cost of ownership rendah karena umur panjang',
          'Standards body: IEEE (wireless), TIA/EIA (structured cabling), IEC/ISO (global), ITU-T (telecoms)'
        ],
        example: {
          title: '💡 Decision Matrix: Memilih Media yang Tepat untuk Setiap Skenario',
          description: 'Skenario 1 — Koneksi PC ke switch dalam kantor (jarak 5-80m): UTP Cat6, cepat, murah, cukup untuk 1 Gbps. Skenario 2 — Koneksi antar switch antar lantai (jarak 80-300m): Fiber MMF OM3/OM4 karena UTP maximal 100m. Skenario 3 — Koneksi antar gedung dalam kampus (jarak 300m-2km): Fiber MMF atau SMF tergantung jarak exact dan future upgrade plan. Skenario 4 — Koneksi antar gedung dengan banyak motor listrik di sekitarnya (any distance): Fiber SMF, imun EMI dari motor. Skenario 5 — Kantor baru di gedung yang tidak ada izin untuk pasang kabel: WiFi enterprise dengan AP dedicated per area, backup koneksi via LTE router.'
        }
      },
      {
        title: 'Kabel UTP: Standar De-Facto Jaringan LAN',
        image: '🔌',
        content: 'Kabel UTP (Unshielded Twisted Pair) adalah tulang punggung jaringan lokal yang telah melayani industri selama lebih dari 30 tahun dan terus relevan. Dari Cat3 yang hanya mendukung 10 Mbps Ethernet pada 1990-an, hingga Cat8 yang mendukung 40 Gbps dalam data center modern — teknologi UTP terus berevolusi mengikuti kebutuhan bandwidth yang terus meningkat.\n\nFisika di balik twisted pair: ketika dua kawat berpilin membawa sinyal diferensial (sinyal pada satu kawat adalah inverse dari kawat lainnya), setiap gangguan eksternal (EMI) yang masuk akan menginduksi tegangan yang sama (common mode) pada kedua kawat. Penerima yang menggunakan differential signaling hanya membaca perbedaan antara dua kawat (differential mode) dan secara efektif menolak common mode noise. Semakin rapat pintalan, semakin kecil loop area untuk setiap pasang, semakin efektif penolakan EMI — ini adalah prinsip yang membedakan Cat5e, Cat6, dan Cat6A secara fisik.\n\nInstalasi UTP yang profesional mengikuti standar TIA-568-C.2 yang mendefinisikan bukan hanya urutan wiring (T568A atau T568B) tetapi juga: maximum run length (100m untuk 1 Gbps), minimum bending radius (4x diameter kabel), maximum untwist per pair saat terminasi (13mm untuk Cat6), plenum vs non-plenum jacket untuk area HVAC, dan persyaratan pengujian (TIA Level III tester untuk Cat6A certification).',
        points: [
          'Cat5e: 100 MHz bandwidth, 1 Gbps/100m, 4 pair STP, masih banyak di instalasi existing — jangan digunakan untuk instalasi baru',
          'Cat6: 250 MHz, 1 Gbps/100m atau 10 Gbps/55m, separator plastik di tengah untuk reduce crosstalk — standar saat ini',
          'Cat6A (Augmented): 500 MHz, 10 Gbps/100m penuh, diameter lebih besar, untuk access switch ke server uplink',
          'Cat7 (Class F): 600 MHz, individually shielded pairs + overall shield (S/FTP), konektor GG45/TERA — tidak umum',
          'Cat8: 2000 MHz, 25/40 Gbps hingga 30m, untuk server-to-switch dalam data center cabinet hanya',
          'T568B wiring: W-Or, Or, W-Gr, Bl, W-Bl, Gr, W-Br, Br — pins 1-8 dari kiri (klip menghadap bawah)',
          'T568A wiring: W-Gr, Gr, W-Or, Bl, W-Bl, Or, W-Br, Br — digunakan di beberapa negara dan jaringan pemerintah US',
          'Cable testing dengan Fluke DSX: test parameters — attenuation, NEXT, PSNEXT, ELFEXT, PSELFEXT, return loss, propagation delay'
        ],
        example: {
          title: '💡 Mengapa Maximum Untwist 13mm adalah Angka Kritis',
          description: 'Saat terminasi kabel UTP ke patch panel atau keystone jack, kawat perlu dipisah dan diluruskan sedikit untuk dimasukkan ke posisi yang benar. Maksimum untwist yang diizinkan standar TIA-568-C.2 untuk Cat6 adalah 13mm (0.5 inch). Mengapa? Setiap mm kawat yang tidak berpilin adalah "antenna" yang dapat menerima dan memancarkan interferensi. Di titik terminasi patch panel multiplied 24 port, setiap port dengan untwist berlebih menciptakan crosstalk yang dapat menyebabkan jaringan 10 Gbps gagal performance test. Teknisi yang tidak mengetahui aturan ini sering membuat kabel yang "tampak benar" secara visual tetapi gagal di level II/III testing dengan NEXT yang buruk. Detail kecil ini adalah perbedaan instalasi profesional dari amatir.'
        }
      },
      {
        title: 'Kabel Coaxial: Dari Ethernet Pertama ke TV Kabel',
        image: '📺',
        content: 'Kabel coaxial memiliki nama dari struktur geometrinya: dua konduktor yang berbagi axis (sumbu) yang sama — konduktor dalam (inner conductor) dari tembaga padat di pusat, dikelilingi oleh isolator dielektrik, dilapisi oleh konduktor luar yang berupa mesh (anyaman tembaga) atau foil yang berfungsi sekaligus sebagai perisai (shield), dan semua ini dibungkus jaket plastik luar.\n\nStruktur coaxial memberikan dua keunggulan teknis: pertama, inner conductor sepenuhnya dikelilingi oleh shield yang menjaga sinyal di dalam (mengurangi emisi EMI ke luar) sekaligus menjaga gangguan dari luar tidak masuk (imunis terhadap EMI). Kedua, impedansi karakteristik kabel dapat dikontrol dengan presisi oleh rasio diameter inner conductor dan outer conductor — 50 Ohm untuk aplikasi data/RF, 75 Ohm untuk video/broadcast.\n\nMeski sudah digantikan oleh UTP twisted pair untuk jaringan LAN (Ethernet 10Base-T yang menggunakan UTP menggantikan 10Base2 dan 10Base5 yang menggunakan coaxial pada awal 1990-an), coaxial masih menjadi standar untuk beberapa aplikasi yang tidak memiliki pengganti yang lebih baik: distribusi sinyal TV/video (impedansi 75Ω matched ke impedansi antena dan perangkat video), sistem CCTV analog (RG-59 tetap dominan untuk instalasi DVR/analog camera), dan RF applications (antena, pemancar/penerima radio, radar).',
        points: [
          'RG-6 (75Ω): diameter 6.9mm, untuk distribusi TV kabel, internet ISP coax (First Media/MyRepublic), impedansi match antena',
          'RG-59 (75Ω): diameter lebih kecil, fleksibel, untuk CCTV analog jarak pendek (<200m) ke DVR, video distribusi',
          'RG-11 (75Ω): diameter besar, low loss, untuk distribusi TV kabel jarak jauh, trunk cable, CATV tap point',
          'RG-58 (50Ω): untuk legacy 10Base2 Ethernet (obsolete), radio amateur, test equipment connections',
          'LMR-400/600: high performance 50Ω untuk antena base station, WiFi outdoor AP, radio komunikasi jarak jauh',
          'Konektor F-type: sekrup untuk TV kabel, mudah install; BNC: bayonet lock untuk CCTV dan test equipment',
          'N-type: thread-on untuk RF frekuensi tinggi, weatherproof, untuk outdoor antena base station',
          'Sweep test: untuk verifikasi bandwidth respons distribusi TV kabel setelah instalasi (menggunakan signal analyzer)'
        ],
        example: {
          title: '💡 Mengapa Kabel CCTV Harus Menggunakan RG-59 Bukan Kabel Listrik Biasa',
          description: 'Teknisi pemula sering bertanya: "Kenapa tidak pakai kabel listrik 2-wire biasa untuk CCTV analog? Kan sama-sama listrik?" Perbedaan fundamental: kabel CCTV analog (composite video, sinyal 1V peak-to-peak) sangat sensitif terhadap impedansi mismatch dan interference. Kabel listrik biasa tidak memiliki shielding, sehingga sinyal video akan "pick up" EMI dari sumber di sekitarnya (motor AC, fluorescent light, kabel listrik paralel) — gambar CCTV akan bergelombang, bergaris, atau kabur. RG-59 dengan shielding 95% coverage memastikan sinyal video sampai bersih. Instalasi CCTV dengan kabel listrik biasa selalu berakhir dengan komplain gambar jelek yang tidak bisa diperbaiki tanpa ganti kabel.'
        }
      },
      {
        title: 'Kabel Fiber Optik: Fisika, Jenis, dan Aplikasi',
        image: '💡',
        content: 'Fiber optik adalah medium transmisi yang mengeksploitasi prinsip fisika Total Internal Reflection untuk memandu cahaya melalui inti kaca dengan hampir tanpa kehilangan energi per satuan jarak. Ketika cahaya merambat dari medium yang lebih rapat (inti kaca, index refraksi ~1.5) ke medium yang kurang rapat (cladding kaca dengan dopan yang sedikit berbeda, index ~1.46), jika sudut datang cahaya melebihi "critical angle", cahaya tidak menembus ke medium kedua melainkan terpantul kembali 100% ke medium pertama — inilah Total Internal Reflection.\n\nPerbedaan fundamental SMF (Single Mode Fiber) dan MMF (Multimode Fiber): inti SMF berdiameter 8-9 μm (hanya sedikit lebih besar dari panjang gelombang cahaya laser 1310nm/1550nm yang digunakan), yang membatasi propagasi hanya pada satu "mode" atau jalur cahaya. Hasilnya: nol atau sangat rendah modal dispersion — pulsa cahaya tidak menyebar seiring jarak, memungkinkan bandwidth × jarak yang jauh lebih tinggi. Inti MMF berdiameter 50-62.5 μm memungkinkan banyak mode cahaya yang berpropagasi secara bersamaan di jalur yang sedikit berbeda (beberapa pantulan yang berbeda), menyebabkan modal dispersion yang membatasi bandwidth × jarak, tapi memungkinkan penggunaan sumber cahaya yang lebih murah (LED atau VCSEL).\n\nPemahaman tentang jenis konektor, polish, dan aksesori fiber adalah essential bagi teknisi instalasi: konektor yang salah atau kotor adalah penyebab paling umum insertion loss yang tinggi, yang pada gilirannya menyebabkan link failure atau intermittent disconnection.',
        points: [
          'SMF OS2 (ITU-T G.657.B3): inti 9μm, atenuasi 0.2dB/km @1550nm, bend-insensitive untuk indoor routing yang fleksibel',
          'MMF OM3 (ITU-T G.651.1 amend): inti 50μm, laser-optimized, 10 GbE hingga 300m, 40/100 GbE hingga 100m',
          'MMF OM4: inti 50μm high-bandwidth, 10 GbE/550m, 40/100 GbE/150m — standar data center modern',
          'MMF OM5 (wideband): mendukung SWDM (Shortwave WDM) untuk 100 GbE dengan 4 wavelength di 1 fiber',
          'LC/UPC (Lucent Connector, Ultra Physical Contact): paling umum di perangkat aktif modern, low insertion loss (<0.1dB)',
          'LC/APC (Angled Physical Contact): 8° angled end-face, return loss <-65dB — untuk PON (GPON/XGS-PON)',
          'SC/UPC: square bayonet connector, umum di patch cord dan ODF (Optical Distribution Frame)',
          'MPO/MTP: multi-fiber connector (12 atau 24 fiber per connector) — untuk parallel optics 40/100/400 GbE'
        ],
        example: {
          title: '💡 Mengapa APC vs UPC Penting untuk GPON FTTH',
          description: 'GPON (Gigabit Passive Optical Network) yang digunakan Telkom IndiHome menggunakan arsitektur PON di mana satu fiber dari OLT di central office dibagi menggunakan optical splitter 1:64 atau 1:32 untuk melayani 64 atau 32 pelanggan rumah. Di link PON ini, return loss sangat kritis: setiap sinyal yang terpantul balik ke OLT dapat menyebabkan noise pada laser transmitter OLT dan mendegradasi sinyal untuk SEMUA pelanggan di splitter yang sama. APC connector dengan end-face bersudut 8° memantulkan cahaya yang kembali ke arah berbeda (bukan kembali ke sumber), memberikan return loss >65dB. UPC connector hanya memberikan return loss ~55dB. Untuk sistem PON, menggunakan UPC di mana seharusnya APC dapat menyebabkan seluruh grup pelanggan mengalami intermittent disconnection yang tidak bisa terdiagnosis tanpa OTDR.'
        }
      },
      {
        title: 'WiFi: Standar, Generasi, dan Teknologi',
        image: '📶',
        content: 'WiFi adalah merek dagang untuk produk yang menggunakan standar IEEE 802.11 untuk komunikasi jaringan nirkabel. Sejak standar 802.11 pertama di tahun 1997 yang hanya mendukung 2 Mbps, setiap generasi WiFi telah membawa peningkatan performa yang dramatis, tidak hanya dalam throughput tetapi juga efisiensi spektrum, kemampuan melayani banyak perangkat bersamaan, dan konsumsi daya.\n\nEvolusi teknis yang mendorong peningkatan throughput: DSSS/FHSS (generasi pertama) → OFDM (802.11a/g, menggunakan multiple sub-carrier untuk efisiensi spektral) → MIMO (802.11n, multiple antena untuk spatial multiplexing) → MU-MIMO dan channel bonding (802.11ac, multiple user MIMO) → OFDMA (802.11ax/WiFi 6, bagi kanal ke Resource Units kecil seperti LTE, efisiensi untuk banyak perangkat) → MLO (802.11be/WiFi 7, gabungkan beberapa band secara bersamaan untuk throughput dan reliability maksimal).\n\nPemahaman channel planning adalah krusial untuk deployment WiFi enterprise yang efektif. Di frekuensi 2.4 GHz hanya ada 3 channel non-overlapping (1, 6, 11) dengan bandwidth 20 MHz — menyebabkan co-channel interference yang signifikan di area padat. Di frekuensi 5 GHz tersedia 25 channel non-overlapping dengan bandwidth 20 MHz, atau 8 channel dengan bandwidth 80 MHz (WiFi 5/6) — jauh lebih baik untuk kapasitas. 6 GHz band (WiFi 6E dan 7) menambahkan 59 channel baru yang belum padat penggunanya.',
        points: [
          'WiFi 4 (802.11n, 2009): MIMO 2x2-4x4, channel 20/40MHz, 2.4+5GHz, max 600 Mbps — masih umum di perangkat lama',
          'WiFi 5 (802.11ac, 2013): MU-MIMO DL, channel 80/160MHz, 5GHz only, max 3.5 Gbps — standar saat ini',
          'WiFi 6 (802.11ax, 2019): OFDMA, MU-MIMO UL+DL, BSS Coloring, Target Wake Time (TWT), max 9.6 Gbps',
          'WiFi 6E: WiFi 6 + 6 GHz band (5.925-7.125 GHz) — 59 channel baru, kurang interference, latency rendah',
          'WiFi 7 (802.11be, 2024): MLO (Multi-Link Operation), 320 MHz channel, 4K QAM, max 46 Gbps',
          'Frekuensi 2.4 GHz: 3 channel non-overlapping (1/6/11), penetrasi gedung baik, jarak lebih jauh, padat perangkat',
          'Frekuensi 5 GHz: 25 channel non-overlapping (20MHz), lebih bersih, throughput lebih tinggi, jarak lebih pendek',
          'Frekuensi 6 GHz (WiFi 6E+): hanya untuk WiFi 6E/7, sangat bersih, AR/VR/gaming low-latency use case'
        ],
        example: {
          title: '💡 Mengapa WiFi 6 Bukan Tentang Kecepatan, Tapi Efisiensi',
          description: 'Di rumah dengan 5 perangkat, WiFi 5 sudah lebih dari cukup. Keunggulan WiFi 6 barulah terasa di lingkungan padat: ruang konferensi dengan 50 laptop, stadion dengan 50.000 smartphone, atau pabrik dengan 500 sensor IoT. Teknologi kunci: OFDMA membagi kanal menjadi Resource Units (RU) kecil dan melayani hingga 9 pengguna bersamaan (bukan bergantian seperti WiFi 5). BSS Coloring mengurangi co-channel interference antar AP yang berdekatan. TWT (Target Wake Time) memungkinkan perangkat IoT "tidur" hingga giliran mereka untuk hemat baterai 7x lipat. Hasil nyata: uji di stadion NFL USA menunjukkan WiFi 6 meningkatkan throughput per pengguna 4x dibanding WiFi 5 dalam kondisi padat yang sama.'
        }
      },
      {
        title: 'Keamanan Wireless: Ancaman dan Proteksi',
        image: '🔒',
        content: 'Wireless networking secara inheren lebih rentan terhadap serangan dibandingkan jaringan kabel, karena medium transmisinya (udara) tidak bisa dibatasi secara fisik — siapapun yang berada dalam jangkauan sinyal dapat mencoba terhubung atau menyadap. Memahami ancaman dan mekanisme proteksi yang tersedia adalah kewajiban bagi setiap yang merancang atau mengelola jaringan nirkabel.\n\nEvolusi protokol keamanan WiFi mencerminkan kompetisi antara kriptografer dan penyerang: WEP (1997) menggunakan RC4 cipher dengan key yang tidak berubah dan memiliki kelemahan fundamental dalam implementasi IV (Initialization Vector) — dapat di-crack dalam hitungan menit menggunakan alat seperti Aircrack-ng yang tersedia bebas. WPA (2003) memperbaiki kelemahan WEP dengan TKIP yang menggunakan dynamic key rotation tapi masih menggunakan RC4. WPA2 (2004) menggunakan AES-CCMP yang jauh lebih kuat, masih aman jika menggunakan passphrase yang panjang dan kompleks. WPA3 (2018) memperkenalkan SAE (Simultaneous Authentication of Equals) yang menggantikan PSK pre-shared key, memberikan perfect forward secrecy dan resistansi terhadap offline dictionary attacks.\n\nAncaman spesifik terhadap jaringan wireless yang perlu dipahami: Evil Twin Attack (penyerang membuat AP palsu dengan SSID yang sama dengan AP legitimate untuk intercept traffic), Deauthentication/Disassociation flood (penyerang mengirim frame management yang memaksa klien disconnect berulang-ulang — DoS attack yang efektif dan sulit dicegah di WPA2), dan KRACK (Key Reinstallation Attack, kerentanan di WPA2 4-way handshake yang sudah di-patch).',
        points: [
          'WEP: RC4 dengan IV tetap, dapat di-crack dalam menit menggunakan Aircrack-ng — DILARANG digunakan, sudah sangat tidak aman',
          'WPA-TKIP: masih RC4, key rotation dinamis — tidak cukup aman, hindari penggunaan',
          'WPA2-CCMP (AES): standar keamanan minimum yang masih dapat diterima — gunakan passphrase >20 karakter random',
          'WPA3-SAE: perfect forward secrecy, brute-force resistant, wajib untuk jaringan baru (support perangkat modern)',
          'WPA2/3-Enterprise (802.1X): autentikasi per-user via RADIUS server + certificate — untuk enterprise dan kampus',
          'Hidden SSID: tidak meningkatkan keamanan (SSID terlihat di probe request), hanya menyembunyikan dari pemula',
          'MAC filtering: tidak efektif (MAC address mudah di-spoof), menambah overhead manajemen tanpa benefit keamanan nyata',
          'Management Frame Protection (802.11w): cegah deauth/disassoc flood attack — wajib aktif di WPA3, opsional di WPA2'
        ],
        example: {
          title: '💡 WiFi Audit Sederhana dengan Alat Gratis',
          description: 'Sebelum menyerahkan instalasi WiFi ke pelanggan, lakukan audit keamanan dasar: 1) Scan dengan WiFi Analyzer app (Android gratis) — cek channel utilization, pastikan AP tidak menggunakan channel yang sama di coverage area yang tumpang tindih (co-channel interference). 2) Gunakan Kismet atau inSSIDer untuk deteksi rogue AP (AP tidak dikenal di area yang sama). 3) Coba connect dari jarak maksimum dengan perangkat yang berbeda — verifikasi sinyal kuat di semua area yang diperlukan. 4) Gunakan iperf3 untuk test throughput aktual (bukan hanya signal strength). 5) Cek konfigurasi: WPA3 atau WPA2-AES aktif, WPS dinonaktifkan, manajemen password tidak default. Audit 30 menit ini membuktikan kualitas instalasi secara objektif.'
        }
      },
      {
        title: 'Structured Cabling: Standar Instalasi Profesional',
        image: '🏗️',
        content: 'Structured Cabling (pengkabelan terstruktur) adalah sistem pengkabelan yang dirancang mengikuti standar internasional untuk infrastruktur komunikasi gedung. Berbeda dari "asal cabut, asal sambung", structured cabling menciptakan infrastruktur yang dapat digunakan untuk berbagai sistem (LAN, telepon, CCTV, access control, BAS) selama 15-25 tahun tanpa perlu diulang karena telah memperhitungkan kebutuhan saat ini dan masa depan.\n\nKomponen sistem structured cabling yang terdefinisi dalam standar TIA-568: Telecommunications Room (TR atau MDF/IDF) sebagai titik terminasi dan distribusi; Horizontal Cabling (dari TR ke setiap workarea outlet — maksimal 90 meter untuk kabel permanen, 10 meter untuk patch cord dan equipment cord = total 100 meter channel); Backbone Cabling (menghubungkan antar TR dan ke Main Distribution Frame — biasanya fiber optik atau high-category UTP); Work Area (area pengguna akhir dengan outlet RJ-45 atau fiber); dan Equipment Room (ruang server dan peralatan aktif).\n\nSalah satu kesalahan terbesar yang dilakukan dalam instalasi adalah tidak meninggalkan headroom untuk skalabilitas: tidak menyediakan conduit kosong untuk kabel masa depan, mengisi patch panel sampai penuh tanpa port cadangan, dan tidak mendokumentasikan jalur kabel sehingga upgrade di masa depan memerlukan survei ulang lengkap. Structured cabling profesional selalu menyisakan 20% kapasitas conduit untuk masa depan.',
        points: [
          'TIA-568-C standar komprehensif: definisi komponen, spesifikasi performa, prosedur pengujian, grading sistem',
          'Channel vs link: channel = total path dari NIC ke NIC termasuk patch cord (max 100m); permanent link = kabel pasang saja (max 90m)',
          'Patch panel: terminasi kabel horizontal ke port RJ-45 di sisi depan (ke switch), IDC konektor di belakang',
          'Cable management: horizontal cable manager dan vertical cable manager untuk routing yang rapi dan tidak membebani konektor',
          'Labeling standard: TIA-606 mendefinisikan sistem labeling — format, lokasi, dan konten minimum yang harus ada',
          'Testing standard: TIA-568-C.2 mendefinisikan test parameters dan acceptable limits per Category',
          'Separation requirements: power cables dan data cables tidak boleh dijalankan paralel dalam jarak <15cm tanpa shielding',
          'Grounding: semua rack dan patch panel harus di-ground ke TGB (Telecommunications Grounding Busbar) — keselamatan dan EMI'
        ],
        example: {
          title: '💡 Berapa Biaya Instalasi Kabel yang Tidak Terdokumentasi?',
          description: 'Perusahaan manufaktur di Bekasi membutuhkan upgrade jaringan dari 100 Mbps ke 1 Gbps di pabrik yang dibangun 2005. Tidak ada as-built drawing, tidak ada labeling kabel. Hasil: perlu 3 hari untuk "mapping" — menelusuri setiap kabel dari patch panel ke outlet untuk membuat dokumentasi dari nol menggunakan cable toner/tracer. Biaya pemetaan: Rp 45 juta (3 teknisi × 3 hari). Bandingkan dengan biaya dokumentasi saat instalasi awal: Rp 5 juta. Selisih Rp 40 juta yang tidak perlu dikeluarkan jika dokumentasi dibuat dengan benar sejak awal. Dokumen as-built drawing dan labeling adalah investasi yang selalu memberikan return positif.'
        }
      },
      {
        title: 'Ringkasan — Media dan Jaringan Telekomunikasi',
        image: '🎓',
        content: 'Pemahaman komprehensif tentang media transmisi — dari karakteristik fisik kabel hingga standar instalasi profesional dan protokol keamanan wireless — adalah fondasi yang memungkinkan teknisi TJKT membuat keputusan desain yang tepat, melakukan instalasi yang berkualitas, dan memecahkan masalah dengan efisien.\n\nSatu perkembangan yang perlu diperhatikan: batas antara "kabel" dan "wireless" semakin kabur di infrastruktur modern. WiFi 6E di indoor memungkinkan multi-gigabit throughput yang sebelumnya hanya bisa dicapai dengan kabel. Sementara fiber optik ke setiap rumah (FTTH) menjadi standar baru untuk konektivitas residensial. Dan di data center, 400 Gbps direct attach copper (DAC) cable menghubungkan server ke top-of-rack switch untuk jarak <5 meter yang lebih efisien dari fiber.\n\nInvestasi keahlian yang paling berharga untuk teknisi media jaringan: sertifikasi FOA (Fiber Optic Association) untuk kompetensi fiber optik yang diakui internasional, dan pelatihan hands-on dengan Fluke DSX tester dan OTDR untuk kemampuan pengujian dan komisioning jaringan secara profesional.',
        points: [
          '✅ Media selection: UTP Cat6/6A untuk LAN, Fiber SMF/MMF untuk jarak >100m dan lingkungan EMI',
          '✅ UTP standards: T568B wiring, 100m channel limit, max 13mm untwist, Level III testing untuk Cat6A',
          '✅ Coaxial applications: RG-6 untuk TV kabel/ISP, RG-59 untuk CCTV analog, impedansi 75Ω',
          '✅ Fiber optic: SMF OS2 vs MMF OM3/OM4, LC/UPC vs LC/APC, OTDR untuk testing dan fault location',
          '✅ WiFi standards: n (WiFi 4) → ac (WiFi 5) → ax (WiFi 6/6E) → be (WiFi 7), OFDMA, MU-MIMO',
          '✅ Wireless security: WEP (banned) → WPA2-AES (minimum) → WPA3-SAE (recommended) → 802.1X (enterprise)',
          '✅ Structured cabling: TIA-568 standards, channel vs link, documentation, labeling TIA-606'
        ],
        example: {
          title: '🚀 Sertifikasi untuk Spesialisasi Media Jaringan',
          description: 'Fiber Optic Installer: FOA CFOT (Certified Fiber Optic Technician) — diakui internasional, biaya ~USD 150 ujian. Structured Cabling: BICSI INST1 dan INST2, atau Panduit/CommScope vendor certification. Wireless: CWNA (Certified Wireless Network Administrator) dari CWNP — vendor-neutral, diakui global. Testing specialist: Fluke Networks CFT (Certified Fluke Tester) untuk operator Fluke DSX dan OptiFiber Pro. Kombinasi CFOT + CWNA + BICSI INST2 membuka pintu ke proyek infrastruktur kelas enterprise dengan potensi penghasilan Rp 15-25 juta per bulan sebagai subkontraktor spesialis, di luar pekerjaan tetap.'
        }
      }
    ]
  },

  '7': {
    title: 'Penggunaan Alat Ukur',
    category: 'Praktik',
    difficulty: 'Pemula',
    duration: '60 menit',
    description: 'Panduan lengkap penggunaan alat ukur TJKT: Multitester/Avometer, LAN Tester, Crimping Tool, OTDR, Optical Power Meter, Light Source, dan Fusion Splicer di lapangan.',
    youtubeId: 'cI_Y_cRziEw',
    slides: [
      {
        title: 'Alat Ukur: Mata dan Telinga Teknisi Jaringan',
        image: '🔬',
        content: 'Teknisi yang handal tidak menebak — mereka mengukur. Alat ukur adalah ekstensi sensoris yang memungkinkan teknisi untuk "melihat" fenomena yang tidak bisa ditangkap oleh indera manusia: tegangan 5 volt DC di pin PSU, kontinuitas kabel yang terputus di dalam dinding, posisi sambungan yang buruk 2.3 km di dalam kabel fiber optik bawah tanah, atau interferensi WiFi channel 6 yang menurunkan throughput 40%. Tanpa alat ukur, troubleshooting adalah educated guessing; dengan alat ukur yang tepat dan pengetahuan cara menggunakannya, troubleshooting menjadi proses diagnosis yang sistematis dan presisi.\n\nInvestasi dalam alat ukur adalah keputusan bisnis: seorang teknisi yang melakukan 3 troubleshooting site visit per hari, masing-masing membutuhkan 2 jam tanpa LAN tester advance vs 20 menit dengan LAN tester advance yang mengidentifikasi lokasi fault, akan menghemat 5.4 jam kerja per hari. Dalam satu tahun (250 hari kerja), itu adalah penghematan 1.350 jam — atau sekitar 28% dari total kapasitas kerja. LAN tester advance seharga Rp 800.000 akan "membayar dirinya sendiri" dalam beberapa minggu pertama.\n\nKlasifikasi alat ukur untuk teknisi TJKT berdasarkan frekuensi penggunaan: Essential tools yang harus dimiliki sendiri (LAN tester basic, crimping tool, multimeter digital, cable stripper, tone generator/probe); Professional tools yang dibeli saat bisnis berkembang (LAN tester advance dengan certificate output, optical power meter dan light source, OTDR dalam bentuk sewa); dan Specialized tools yang umumnya dimiliki perusahaan atau disewa per proyek (Fusion splicer, Fluke DSX cable analyzer, WiFi analyzer professional).',
        points: [
          'Nilai alat ukur: eliminasi guessing, diagnosis sistematis, dokumentasi terukur, customer confidence',
          'Essential tools starter kit: LAN tester basic (Rp 35rb), crimping tool RJ-45 (Rp 50rb), multimeter digital (Rp 150rb)',
          'Professional upgrade: LAN tester advance/certifier (Rp 800rb-2jt), optical power meter+LS (Rp 3-8jt)',
          'Rental economy: OTDR Rp 500rb-1jt/hari dari penyewa alat — lebih ekonomis daripada beli untuk penggunaan occasional',
          'Dokumentasi pengukuran: setiap hasil pengukuran dicatat (nilai, satuan, kondisi pengukuran, tanggal) sebagai evidence',
          'Kalibrasi: alat ukur memerlukan kalibrasi periodik — multimeter (tahunan), OTDR (2 tahunan), fusion splicer (per pabrikan)',
          'Safety saat mengukur: multimeter di voltase AC — jangan sentuh probe, gunakan satu tangan di belakang',
          'Toolbox organization: apply 5R pada toolbox — setiap alat punya tempat, semua bersih dan berfungsi'
        ],
        example: {
          title: '💡 ROI Perhitungan Investasi Alat Ukur',
          description: 'Teknisi freelance melakukan 2 site visit troubleshooting jaringan per hari. Tanpa LAN tester advance: rata-rata 1.5 jam per site untuk trace kabel yang bermasalah secara manual = 3 jam/hari. Dengan LAN tester Fluke MicroScanner (Rp 1,8 juta): temukan fault location dalam 5 menit = 0.17 jam per site = 0.34 jam/hari. Waktu yang dihemat: 2.66 jam/hari. Jika waktu = Rp 150.000/jam (reasonable rate untuk teknisi jaringan): penghematan Rp 399.000/hari = Rp 8.378.000/bulan. Payback period investasi Rp 1,8 juta: kurang dari 5 hari kerja. Ini adalah definisi investasi yang sangat baik.'
        }
      },
      {
        title: 'Multitester / Avometer: Alat Ukur Serbaguna',
        image: '⚡',
        content: 'Multimeter (Multitester atau Avometer) adalah instrument elektronik yang mengintegrasikan fungsi voltmeter (pengukur tegangan), ammeter (pengukur arus), dan ohmmeter (pengukur resistansi) dalam satu perangkat dengan selektor untuk memilih parameter yang diukur dan range yang sesuai. Dalam konteks TJKT, multimeter digital (DMM - Digital Multimeter) menggantikan multimeter analog karena presisi yang lebih tinggi, kemudahan pembacaan, dan fitur tambahan.\n\nMode pengukuran yang relevan untuk teknisi TJKT: DC Voltage (VDC) untuk mengukur output power supply komputer (rail 12V, 5V, 3.3V), tegangan baterai UPS, tegangan PoE (Power over Ethernet) di kabel jaringan (48V nominal); AC Voltage (VAC) untuk verifikasi tegangan dari stopkontak PLN (220V ±10%), output UPS, dan tegangan genset; Resistance (Ω) untuk uji kontinuitas kabel, mengukur grounding resistance (harus <1Ω untuk grounding yang baik), dan cek komponen elektronik; Continuity test (biasanya dengan buzzer beep) untuk verifikasi cepat kabel tidak putus tanpa harus membaca angka; dan Diode test untuk cek kondisi dioda di power supply dan perangkat elektronik.\n\nKeamanan saat menggunakan multimeter adalah prioritas mutlak, terutama saat pengukuran tegangan AC yang berpotensi fatal: gunakan probe dengan insulasi yang utuh (tidak ada kabel terbuka), masukkan probe merah ke port VΩ dan hitam ke COM (jangan salah port), selalu satu tangan memegang satu probe dan tangan lain di belakang atau di saku saat menyentuh rangkaian bertegangan tinggi, pastikan selector berada di posisi yang tepat sebelum menyentuhkan probe.',
        points: [
          'DC Voltage mode: ukur VDC output PSU — pin kuning (12V±0.5V), merah (5V±0.25V), oranye (3.3V±0.165V), ungu (5V standby)',
          'AC Voltage mode: verifikasi PLN 220V ±10% (198-242V), cek grounding dengan voltmeter (phase-neutral, neutral-ground, phase-ground)',
          'Resistance mode: cek grounding (<1Ω untuk lightning rod, <4Ω untuk panel power), cek komponen resistor',
          'Continuity mode (buzzer): uji kabel putus-tidaknya tanpa baca angka — beep = terhubung, sunyi = putus/resistansi tinggi',
          'Current measurement (Ampere): seri dalam rangkaian, TIDAK paralel — kesalahan fatal yang bisa merusakkan fuse multimeter',
          'PoE measurement: DC voltage di pin 1-2 (positive) dan 3-6 (negative) untuk Mode A = 48V; atau pin 4-5/7-8 untuk Mode B',
          'True RMS vs average-responding: True RMS multimeter lebih akurat untuk waveform non-sinusoidal (UPS, inverter)',
          'Clamp meter: untuk mengukur arus besar (>10A) tanpa memutus rangkaian — sangat berguna untuk instalasi panel'
        ],
        example: {
          title: '💡 Prosedur Lengkap Diagnosa PSU yang Suspect',
          description: 'Komputer mati sendiri secara acak — suspect PSU. Prosedur diagnosa dengan multimeter: 1) Cabut PSU dari motherboard, buat jumper pin PS-ON (pin 16, wire hijau) ke COM (ground, wire hitam) di konektor 24-pin menggunakan paperclip atau kawat kecil — ini mensimulasikan signal dari motherboard yang memerintahkan PSU menyala. 2) Nyalakan saklar PSU. 3) Ukur pin kuning (12V) ke ground: hasilnya harus 12V ±5% (11.4V-12.6V). Jika <11.4V atau >12.6V, PSU bermasalah di rail 12V. 4) Ukur pin merah (5V) ke ground: 4.75V-5.25V. 5) Ukur pin oranye (3.3V) ke ground: 3.135V-3.465V. Jika semua rail dalam batas = PSU OK, masalah mungkin di tempat lain. Jika ada rail di luar batas = konfirmasi PSU rusak. Prosedur ini 10 menit, jauh lebih akurat dari "coba ganti PSU dan lihat".'
        }
      },
      {
        title: 'LAN Tester: Verifikasi Instalasi Kabel UTP',
        image: '🔌',
        content: 'LAN tester adalah alat yang wajib ada dalam toolbox setiap teknisi jaringan yang melakukan instalasi kabel. Fungsi dasarnya adalah verifikasi bahwa kabel UTP yang sudah dikrimping dan diterminasi memiliki koneksi yang benar di semua 8 pin dalam urutan yang sesuai standar T568A atau T568B, dan tidak ada pin yang putus, short circuit (hubung singkat antar pin), atau transposed (tertukar urutannya).\n\nJenis LAN tester: Basic continuity tester (Rp 30.000-100.000) memiliki 2 unit (master dan remote) yang dipasang di kedua ujung kabel, mengirim sinyal bergantian di setiap pin dan menampilkan hasilnya dengan 8 LED per unit. Cara membaca: LED 1-8 di master dan remote harus menyala secara berurutan (1 di master dan 1 di remote bersamaan, kemudian 2-2, dst.). Jika LED 4 di remote tidak menyala ketika LED 4 di master menyala, berarti pin 4 putus. Jika LED 3 dan 6 menyala bersamaan, berarti ada short. Jika urutan berubah (misal LED 1 di master, tapi LED 3 yang menyala di remote), berarti ada transposition.\n\nAdvance LAN tester atau Cable Certifier (Rp 800.000-100.000.000) melakukan pengujian yang jauh lebih komprehensif: mengukur attenuation (redaman sinyal sepanjang kabel), NEXT (Near-End CrossTalk), PSNEXT (Power Sum NEXT), propagation delay, dan delay skew — parameter yang diperlukan untuk sertifikasi kabel sebagai Cat6, Cat6A, atau lebih tinggi. Output: laporan digital yang bisa diprint sebagai bukti kepada pelanggan bahwa instalasi memenuhi standar TIA-568.',
        points: [
          'Basic LAN tester (Rp 30-100rb): uji continuity, wiring map, open/short/transposed — cukup untuk instalasi residensial',
          'Advance LAN tester (Rp 800rb-2jt): tambah length, attenuation, NEXT — untuk instalasi commercial/enterprise',
          'Cable certifier (Rp 5jt-100jt): full TIA-568 certification, laporan digital, timestamp — untuk proyek tier enterprise',
          'Membaca LED hasil: LED 1-8 menyala berurutan = T568B benar; urutan berbeda = misswired; tidak menyala = open; 2 LED bersamaan = short',
          'Crossover cable detection: LED menyala dalam urutan 1-3, 2-6, 3-1, 4-4, 5-5, 6-2, 7-7, 8-8 = crossover cable (auto-MDIX sudah jarang butuh)',
          'Remote unit hidden test: pasang remote di ujung kabel tersembunyi dalam conduit, test dari luar = verifikasi tanpa perlu temanmu di ujung lain',
          'Inline adapter: test kabel yang sudah terhubung ke patch panel dan face plate tanpa harus cabut (jika tersedia fitur ini)',
          'Document results: foto atau screenshot hasil test per kabel, masukkan ke spreadsheet labeling kabel sebagai test evidence'
        ],
        example: {
          title: '💡 Troubleshooting: Kabel Baru Tapi Koneksi Intermittent',
          description: 'Pelanggan melaporkan koneksi sering putus-nyambung di satu workstation, padahal kabel baru saja dipasang. Langkah 1: LAN tester basic — semua 8 LED menyala normal, tidak ada open/short. Pelanggan bertanya "berarti kabel OK?" Belum tentu! Langkah 2: LAN tester advance dengan test "bend and wiggle" — saat kabel ditekuk di berbagai titik, attenuation naik drastis dari 5dB ke 22dB (limit Cat6 adalah 18.4dB) ketika ditekuk di area dekat konektor. Diagnosis: pin dalam konektor RJ-45 tidak tertekan sempurna sehingga saat kabel digerakkan, koneksi melemah. Ini adalah "intermittent open" yang tidak terdeteksi LAN tester basic (hanya uji pada kondisi diam). Solusi: krimping ulang konektor. Tanpa advance LAN tester, teknisi mungkin ganti kabel seluruhnya atau bahkan salahkan switch port, membuang waktu dan uang.'
        }
      },
      {
        title: 'Crimping Tool: Membuat Konektor RJ-45 yang Sempurna',
        image: '🔨',
        content: 'Crimping tool adalah tang bermekanisme ratchet yang didesain untuk memberikan tekanan yang tepat dan konsisten untuk memaksa pin tembaga dalam konektor RJ-45 menembus isolasi kawat (Insulation Displacement Contact/IDC) sekaligus mengunci konektor ke jaket kabel secara bersamaan dalam satu gerakan. Kualitas hasil krimping sangat bergantung pada tiga faktor: kualitas tool (pilih yang bermekanisme ratchet yang konsisten, bukan yang murah tanpa ratchet), kualitas konektor (gunakan konektor 50 mikron gold-plated dari merek terpercaya), dan teknik krimping yang benar.\n\nTeknique yang benar untuk krimping RJ-45 Cat6 memiliki beberapa detail kritis yang sering diabaikan: panjang pengupasan jaket harus tepat (2.5-3 cm untuk memberi cukup panjang untuk merapikan urutan kawat) namun tidak terlalu panjang (kawat yang tidak terlindungi jaket lebih rentan EMI dan NEXT); untwist masing-masing pasang maksimum 13mm untuk Cat6; kawat harus mencapai ujung konektor (terlihat dari samping) sebelum dikrimping — kawat yang tidak penuh tidak akan tercontact dengan pin IDC; dan jaket harus masuk ke dalam konektor melewati strain relief untuk memberikan mechanical protection saat kabel ditarik.\n\nKesalahan krimping yang paling umum: kawat tidak mencapai ujung konektor (paling umum — menyebabkan open atau intermittent contact), urutan warna salah (menyebabkan crosswired atau open), terlalu banyak untwist (degradasi performa NEXT, tidak akan lolos certification test di Cat6), dan jaket tidak masuk ke strain relief (kabel mudah putus saat ditarik).',
        points: [
          'Ratchet crimper: mekanisme ratchet memastikan tekanan minimum terpenuhi sebelum tool bisa dibuka — konsistensi lebih baik',
          'Pass-through RJ-45 connectors: kawat menonjol ke luar ujung konektor, dipotong setelah dikrimping — lebih mudah verifikasi semua kawat penuh',
          'Urutan T568B yang HARUS dihafal: W-Or, Or, W-Gr, Bl, W-Bl, Gr, W-Br, Br (pin 1-8 dengan klip menghadap bawah)',
          'Urutan T568A: W-Gr, Gr, W-Or, Bl, W-Bl, Or, W-Br, Br — digunakan jika pelanggan meminta atau untuk crossover cable',
          'Bending minimum radius: usahakan tidak membengkokkan kabel tajam di dekat konektor — stress mekanis menyebabkan intermittent',
          'Cable stripper vs pisau: gunakan cable stripper yang diset untuk diameter kabel yang tepat — pisau bisa memotong insulasi kawat',
          'Inspection before crimping: lihat dari samping konektor transparan untuk verifikasi semua 8 kawat ujungnya rata dan terlihat',
          'Crimp once, test twice: setelah krimping, langsung test dengan LAN tester — lebih mudah perbaiki sebelum kabel dipasang permanen'
        ],
        example: {
          title: '💡 Mengapa Konektor Murah vs Konektor Kualitas Membuat Perbedaan',
          description: 'Uji perbandingan: 24 kabel Cat6 dikrimping dengan konektor Rp 500/konektor vs konektor Rp 1.200/konektor, kemudian ditest dengan Fluke DSX-8000 cable certifier. Hasil: konektor murah — 6 dari 24 gagal NEXT test (25% failure rate), 4 di antaranya dengan nilai sangat buruk yang akan menyebabkan error di koneksi 10 Gbps. Konektor kualitas — 0 dari 24 gagal, semua NEXT nilai di atas margin. Biaya penghematan konektor murah untuk 24 port: Rp 17.000. Biaya untuk remediation (uji + krimping ulang 6 kabel + laporan ke pelanggan): Rp 450.000. Lesson: penghematan Rp 17.000 menyebabkan biaya Rp 450.000. Gunakan komponen kualitas yang tepat.'
        }
      },
      {
        title: 'OTDR: Peta Lengkap Jaringan Fiber Optik',
        image: '📡',
        content: 'OTDR (Optical Time Domain Reflectometer) adalah alat ukur yang menggunakan prinsip LIDAR (Light Detection and Ranging) untuk membuat "peta" lengkap karakteristik sebuah link fiber optik dari satu ujung tanpa perlu akses ke ujung lainnya. OTDR mengirimkan pulsa cahaya ke dalam serat, kemudian dengan sangat presisi mengukur waktu dan kekuatan cahaya yang dipantulkan balik — karena Rayleigh scattering (pantulan natural dari molekul kaca) dan pantulan dari discontinuity (splice, konektor, fault, ujung fiber) memberikan "tanda tangan" yang dapat dianalisis.\n\nBagaimana membaca trace OTDR yang fundamental: sumbu X adalah jarak (meter atau km), sumbu Y adalah level sinyal (dB, berkurang dari kiri ke kanan). Tampilan normal: garis menurun perlahan dan merata (ini adalah backscatter normal dari kabel sehat). Loncatan ke bawah tajam (step event) adalah konektor atau splice yang menyebabkan insertion loss. Peak yang menonjol ke atas adalah reflective event dari konektor atau ujung fiber (Fresnel reflection). Garis yang turun tajam kemudian mendatar (noise floor) adalah ujung fiber atau kerusakan total.\n\nParameter kunci yang diukur OTDR: length (panjang serat optik dari awal hingga akhir atau hingga fault), splice loss (insertion loss setiap splice — target <0.1dB untuk fusion splice, <0.3dB untuk mechanical splice), connector loss (insertion loss setiap pasangan konektor — target <0.3dB untuk LC/UPC yang clean), return loss atau reflectance (level pantulan dari setiap event — penting untuk PON), dan link loss (total insertion loss seluruh link termasuk semua splice dan konektor).',
        points: [
          'Prinsip kerja: Rayleigh backscatter dan Fresnel reflection dari discontinuity, time-of-flight untuk kalkulasi jarak',
          'Launch cable: dummy fiber 50-200m sebelum link yang ditest — memungkinkan OTDR "settle" sebelum awal link real',
          'Dead zone: jarak setelah OTDR tidak bisa membedakan event (dari saturasi detector) — covered oleh launch cable',
          'Trace analysis: garis menurun merata (normal), step event (splice/konektor), peak (reflective event), noise floor (ujung)',
          'Fusion splice target: <0.1 dB loss, <-60 dBm reflectance — splicer otomatis display hasil dan predict loss',
          'Connector loss target: <0.3 dB untuk LC/UPC yang bersih (kalau kotor bisa >1 dB!)',
          'Bidirectional measurement: OTDR dari kedua arah dan average hasilnya — lebih akurat karena mengeliminasi gain event semu',
          'OTDR wavelength selection: 1310nm untuk instalasi dan splice testing (lebih sensitif terhadap bend), 1550nm untuk loss measurement'
        ],
        example: {
          title: '💡 Membaca OTDR Trace untuk Menemukan Break Location',
          description: 'Link fiber SMF 8km antara dua gedung tiba-tiba putus. OTDR test dari Gedung A: trace menunjukkan garis normal menurun merata dari 0 hingga 5.8km, kemudian drop tajam ke noise floor. Kesimpulan: ada fault (total break) di 5.8km dari Gedung A. Dari Gedung B: fault di 2.2km dari Gedung B. 5.8 + 2.2 = 8km = total link length — konsisten! Lokasi fisik fault: 5.8km dari Gedung A (atau 2.2km dari Gedung B). Teknisi pergi ke lokasi koordinat GPS 5.8km dari Gedung A (kabel di underground conduit, gunakan manhole plan untuk menentukan titik akses terdekat). Fault ditemukan: kabel terpotong oleh ekskavator proyek jalan di titik yang tepat sesuai OTDR prediction. Tanpa OTDR, pencarian fault di kabel 8km bisa memakan berhari-hari.'
        }
      },
      {
        title: 'Optical Power Meter dan Light Source',
        image: '🔦',
        content: 'Optical Power Meter (OPM) dan Fiber Optic Light Source (LS) adalah pasangan alat dasar yang saling melengkapi untuk pengujian insertion loss pada link fiber optik — mirip seperti voltmeter dan sumber tegangan dalam pengujian listrik. Light Source menghasilkan cahaya dengan panjang gelombang yang terdefinisi (biasanya 1310nm dan/atau 1550nm untuk singlemode, 850nm dan 1300nm untuk multimode), sementara OPM mengukur kekuatan daya cahaya yang diterima di ujung lain link dalam satuan dBm atau mW.\n\nPengukuran Insertion Loss (IL) adalah dasar verifikasi link fiber: IL (dB) = Power In (dBm) - Power Out (dBm). Langkah pengukuran: pertama, kalibrasi referensi — hubungkan LS ke OPM menggunakan 1-2 patch cord referensi yang sudah diketahui kualitasnya, catat power ini sebagai baseline (misalnya -3.5 dBm). Kemudian sisipkan link yang diuji di antara LS dan OPM, catat power yang diterima (misalnya -5.8 dBm). Insertion Loss link = (-3.5) - (-5.8) = 2.3 dB. Bandingkan dengan budget loss yang dihitung dari jumlah splice, konektor, dan panjang kabel — jika IL aktual lebih rendah dari budget, link lulus; jika lebih tinggi, ada masalah (konektor kotor, splice buruk, bending).\n\nVariable Optical Attenuator (VOA) adalah alat pendamping yang berguna: digunakan untuk menurunkan daya cahaya ke level tertentu saat menguji perangkat aktif yang memerlukan input power dalam range tertentu. Terlalu kuat atau terlalu lemah bisa menyebabkan perangkat aktif tidak berfungsi dengan benar — VOA memberikan kontrol presisi.',
        points: [
          'Wavelengths: SM links menggunakan 1310nm (O-band) untuk instalasi local dan 1550nm (C-band) untuk long haul',
          'MM links: 850nm (VCSEL sources, untuk OM1-OM5) dan 1300nm (LED sources untuk legacy OM1/OM2)',
          'Power range OPM: biasanya -70 dBm hingga +10 dBm dengan akurasi ±0.5 dB — cukup untuk semua aplikasi jaringan',
          'Reference method: 1-cord (single patch cord reference), 2-cord (lebih akurat, mengukur termasuk satu konektor), 3-cord',
          'Typical link loss budget: SMF per km 0.35 dB (1310nm) atau 0.2 dB (1550nm), plus 0.3 dB per konektor, plus 0.1 dB per splice',
          'OPM display: dBm (logarithmic, lebih intuitif untuk loss calculation), mW (linear, berguna untuk GPON power level display)',
          'Temperature compensation: kalibrasi OPM tiap 2 jam jika suhu lingkungan berubah signifikan (>10°C)',
          'Fiber identification: OPM juga dapat digunakan sebagai visual fault locator test (VFL tool terpisah untuk localize)'
        ],
        example: {
          title: '💡 Kalkukasi Link Loss Budget untuk Komisioning FTTH',
          description: 'Link FTTH GPON dari OLT ke ONT pelanggan, 3km, menggunakan: 2 konektor SC/APC di ODF (0.3dB × 2 = 0.6dB), 1 fusion splice (0.1dB × 1 = 0.1dB), 1:32 splitter dengan loss 15.5dB, 2 konektor SC/APC di ONT (0.3dB × 2 = 0.6dB), 3km fiber SMF (0.35dB × 3 = 1.05dB). Total link loss budget: 0.6 + 0.1 + 15.5 + 0.6 + 1.05 = 17.85dB. Optical power dari OLT +5dBm. Power sampai di ONT: +5 - 17.85 = -12.85 dBm. ONT GPON receiver sensitivity biasanya -27 dBm. Margin: -12.85 - (-27) = 14.15 dB — sangat baik, jauh di atas minimum. Link ini akan berfungsi dengan sangat baik dengan margin yang cukup untuk degradasi di masa depan (kotor konektor, aging).'
        }
      },
      {
        title: 'Fusion Splicer: Menyambung Fiber Optik dengan Sempurna',
        image: '⚡',
        content: 'Fusion splicer adalah instrumen presisi yang menggunakan electric arc (busur listrik) untuk melelehkan dan menyatukan dua ujung serat optik secara permanen dengan cara yang menghasilkan sambungan yang hampir tak terlihat. Ketika dilakukan dengan benar, fusion splice menghasilkan insertion loss <0.05 dB dan return loss >60 dB — sambungan yang praktis transparan bagi cahaya yang melewatinya.\n\nProses fusion splicing terdiri dari serangkaian langkah yang harus dilakukan dengan presisi dan urutan yang tepat: Stripping (pengupasan coating dan buffer menggunakan thermal stripper atau mechanical stripper — jangan menggunakan yang untuk UTP!), Cleaning (usap serat dengan IPA 99% murni dan clean room tissue satu kali searah, kemudian dengan dry tissue — teknik ini menghilangkan residu dan debu), Cleaving (memotong serat dengan sudut presisi <0.5° menggunakan Fiber Cleaver — ini adalah langkah paling kritis, end-face yang tidak sempurna tidak bisa diperbaiki dengan splicer), Loading (masukkan serat yang sudah di-cleave ke splicer tanpa menyentuh ujungnya), Splicing (splicer otomatis: align core, pre-fusion cleaning arc, main fusion arc, estimasi loss), dan Protecting (lindungi splice dengan Fiber Splice Protector/heat shrink sleeve).\n\nModern automatic fusion splicers melakukan seluruh proses alignment dan fusion secara otomatis dan mengestimasi insertion loss menggunakan algoritma Local Injection and Detection (LID) yang mengukur scattering light saat fusion. Estimasi ini biasanya akurat ±0.02 dB dari pengukuran actual dengan OTDR, memberikan QC real-time selama proses splicing.',
        points: [
          'Core alignment vs cladding alignment splicer: core alignment lebih akurat (±0.1μm) karena align langsung ke core fiber',
          'Cleave angle requirement: <0.5° untuk standard fusion, <0.2° untuk premium quality (splicer display cleave angle)',
          'Pre-fusion arc: low power arc setelah alignment untuk membersihkan sisa IPA dan debu dari end-face sebelum main fusion',
          'Splice loss estimate display: good <0.05dB (hijau), acceptable 0.05-0.1dB (kuning), poor >0.1dB (merah = splice ulang)',
          'Protection sleeve: 60mm sleeve dengan dual hot melt adhesive — pasang di serat sebelum mulai preping, geser ke splice setelah selesai',
          'Heat oven: panaskan di oven splicer (60-90 detik) hingga sleeve menyusut sempurna dan rigid — pegang tegak lurus',
          'Splice tray: simpan semua splice dalam tray terorganisir dengan coiling serat yang longgar (R >30mm) — label setiap splice',
          'Mass fusion splicer: splice 12 fiber sekaligus dengan MPO ribbon — digunakan di data center untuk instalasi cepat'
        ],
        example: {
          title: '💡 Diagnosa Fusion Splice yang Menghasilkan Loss Tinggi',
          description: 'Teknisi baru mendapatkan splice loss estimate 0.45 dB secara konsisten (sangat buruk, target <0.05 dB) meski sudah mencoba beberapa kali. Root cause analysis: Cek 1 — cleave angle display menunjukkan 1.8° (seharusnya <0.5°). Ini berarti end-face tidak flat. Root cause: fiber cleaver blade sudah tumpul (setiap blade punya lifecycle ~1.000-5.000 cleaves tergantung model). Fix: rotate blade ke posisi baru (blade memiliki 16 posisi berbeda) atau ganti blade. Cek 2 — setelah ganti blade, cleave angle turun ke 0.2°, splice loss turun ke 0.02 dB. Lesson: alat yang tidak terawat menghasilkan hasil yang buruk meski teknik sempurna. Maintenance schedule alat: cleaver blade (check setiap 500 cleave), arc electrode fusion splicer (stabilize setiap 50 splices), bersihkan V-groove splicer setiap hari dengan lint-free swab dan IPA.'
        }
      },
      {
        title: 'Ringkasan — Penggunaan Alat Ukur',
        image: '🎓',
        content: 'Alat ukur adalah yang mengubah teknisi dari "orang yang memasang kabel" menjadi "profesional yang memverifikasi, mendokumentasikan, dan menjamin kualitas instalasi". Perbedaan ini fundamental dari perspektif nilai yang ditawarkan kepada pelanggan dan dari perspektif kemampuan troubleshooting yang efisien.\n\nJalur pengembangan kompetensi alat ukur yang realistis: Pemula (0-6 bulan) — kuasai LAN tester basic dan crimping tool, mampu membuat dan test kabel UTP dengan benar. Intermediate (6-18 bulan) — tambah multimeter digital dengan pemahaman tentang semua mode pengukuran, LAN tester advance untuk test dengan length dan attenuation, dan optical power meter + light source untuk fiber optik sederhana. Advanced (18-36 bulan) — kuasai OTDR interpretation, fusion splicer operation dan troubleshooting, Fluke DSX atau setara untuk cable certification. Expert (3+ tahun) — semua tool di atas ditambah RF analyzer untuk WiFi survey, network packet analyzer (Wireshark), dan protocol analyzer untuk troubleshooting mendalam.\n\nDokumentasi hasil pengukuran adalah sama pentingnya dengan pengukuran itu sendiri: setiap angka yang diukur harus dicatat (nilai, satuan, kondisi, tanggal, identitas alat ukur). Spreadsheet tracking kabel dengan kolom untuk hasil LAN test, OTDR trace files yang disimpan, dan certificate dari cable certifier adalah differentiator yang membuktikan kualitas instalasi kepada pelanggan yang tidak bisa melihat langsung ke dalam kabel.',
        points: [
          '✅ Multimeter: DC/AC voltage, resistance, continuity — wajib untuk diagnosa kelistrikan dan PSU',
          '✅ LAN tester basic: continuity, wiring map, open/short — minimum untuk setiap kabel UTP yang dikrimping',
          '✅ Crimping tool: ratchet mechanism, konektor kualitas, T568B urutan, test setiap konektor',
          '✅ LAN tester advance: length, attenuation, NEXT — untuk commercial dan enterprise installation',
          '✅ OTDR: length, splice loss, connector loss, fault location — untuk setiap link fiber optik yang dipasang',
          '✅ OPM + LS: insertion loss measurement, commissioning test untuk semua fiber link',
          '✅ Fusion splicer: cleave (< 0.5°), align, fuse, protect — target splice loss < 0.05 dB'
        ],
        example: {
          title: '🚀 Mulai Koleksi Alat Ukur Secara Bertahap',
          description: 'Budget Rp 300.000 (starter): Crimping tool RJ-45 ratchet (Rp 75rb) + LAN tester basic dengan remote (Rp 50rb) + Cable stripper + cutter (Rp 40rb) + Multimeter digital DT-830B (Rp 65rb) + Kantong tools (Rp 30rb) = cukup untuk mulai bisnis pemasangan kabel LAN. Budget Rp 1.500.000 (professional): tambah LAN tester advance Noyafa NF-8601 (Rp 1.2jt) — ada length, attenuation, PoE test, tone generator. Budget Rp 8.000.000 (fiber specialist): tambah Optical Power Meter + Light Source (Rp 4-6jt) untuk bisa test fiber optik dan menerima proyek FTTH/CCTV fiber. Setiap level membuka kategori proyek yang lebih bernilai dan menghasilkan pendapatan yang lebih tinggi.'
        }
      }
    ]
  }
}

export default function MateriDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const materi = materiDetails[id] || materiDetails['1']
  const [showVideo, setShowVideo] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  const difficultyColor: Record<string, string> = {
    'Pemula': 'bg-green-100 text-green-700',
    'Menengah': 'bg-yellow-100 text-yellow-700',
    'Lanjutan': 'bg-red-100 text-red-700'
  }

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target as HTMLElement)
            if (idx !== -1) setActiveSection(idx)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    sectionRefs.current.forEach((ref) => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Header ── */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/materi" className="inline-flex items-center gap-2 mb-4 text-blue-200 hover:text-white transition text-base font-medium">
            ← Kembali ke Materi
          </Link>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`text-base px-2.5 py-1 rounded-full font-semibold ${difficultyColor[materi.difficulty]}`}>{materi.difficulty}</span>
            <span className="text-base bg-white bg-opacity-20 px-2.5 py-1 rounded-full">📁 {materi.category}</span>
            <span className="text-base bg-white bg-opacity-20 px-2.5 py-1 rounded-full">⏱️ {materi.duration}</span>
            <span className="text-base bg-white bg-opacity-20 px-2.5 py-1 rounded-full">📄 {materi.slides.length} Bagian</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{materi.title}</h1>
          <p className="text-blue-100 text-base leading-relaxed max-w-2xl">{materi.description}</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8 flex gap-8">

        {/* ── Sidebar TOC (sticky) ── */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-6 space-y-4">
            {/* Table of Contents */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <h3 className="font-bold text-gray-700 text-base uppercase tracking-wide">📋 Daftar Isi</h3>
              </div>
              <nav className="p-2">
                {materi.slides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(idx)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-base transition-all duration-200 flex items-start gap-2 ${
                      activeSection === idx
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className={`text-base mt-0.5 flex-shrink-0 font-bold ${activeSection === idx ? 'text-blue-200' : 'text-gray-400'}`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="leading-snug">{slide.title}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Materi Terkait */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <h3 className="font-bold text-gray-700 text-base uppercase tracking-wide">📚 Materi Lain</h3>
              </div>
              <div className="p-2">
                {Object.entries(materiDetails)
                  .filter(([key]) => key !== id)
                  .slice(0, 4)
                  .map(([key, m]) => (
                    <Link key={key} href={`/materi/${key}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 transition group">
                      <span className="text-lg">{m.slides[0].image}</span>
                      <div>
                        <p className="text-base font-semibold text-gray-700 group-hover:text-blue-600 leading-snug">{m.title}</p>
                        <span className={`text-base px-1.5 py-0.5 rounded-full ${difficultyColor[m.difficulty]}`}>{m.difficulty}</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </aside>

        {/* ── Main Article ── */}
        <main className="flex-1 min-w-0 text-justify">

          {/* Video Section */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-800">🎬 Video Pembelajaran</h3>
                <p className="text-base text-gray-500 mt-0.5">Tonton video untuk memperkuat pemahaman materi</p>
              </div>
              {!showVideo && (
                <button onClick={() => setShowVideo(true)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg text-base font-semibold hover:bg-red-700 transition flex items-center gap-1.5">
                  ▶ Tonton
                </button>
              )}
            </div>
            {showVideo ? (
              <div className="aspect-video">
                <iframe width="100%" height="100%"
                  src={`https://www.youtube.com/embed/${materi.youtubeId}?autoplay=1`}
                  title="Video Pembelajaran" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
              </div>
            ) : (
              <div className="relative aspect-video bg-gray-900 flex flex-col items-center justify-center cursor-pointer group"
                onClick={() => setShowVideo(true)}>
                <Image src={`https://img.youtube.com/vi/${materi.youtubeId}/maxresdefault.jpg`}
                  alt="Video thumbnail" fill className="absolute inset-0 object-cover opacity-50" />
                <div className="relative z-10 bg-red-600 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition shadow-lg">
                  <span className="text-white text-2xl ml-1">▶</span>
                </div>
                <p className="relative z-10 text-white font-semibold mt-3 text-base drop-shadow">Klik untuk memutar video</p>
              </div>
            )}
          </div>

          {/* Article Sections */}
          <div className="space-y-0">
            {materi.slides.map((slide, idx) => (
              <section
                key={idx}
                ref={(el) => { sectionRefs.current[idx] = el }}
                className="scroll-mt-6"
              >
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-4 mt-2">
                  {idx > 0 && <div className="h-px bg-gray-200 flex-1" />}
                  <div className={`flex items-center gap-2 ${idx === 0 ? '' : 'mt-8'}`}>
                    <span className="text-3xl">{slide.image}</span>
                    <div>
                      <span className="text-base text-gray-400 font-medium block">Bagian {idx + 1}</span>
                      <h2 className="text-xl font-bold text-gray-800 leading-tight">{slide.title}</h2>
                    </div>
                  </div>
                  {idx > 0 && <div className="h-px bg-gray-200 flex-1" />}
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-2">
                  {/* Intro text */}
                  <div className="p-6 pb-0">
                    <p className="text-gray-700 leading-relaxed text-[15px]">{slide.content}</p>
                  </div>

                  {/* Key Points */}
                  <div className="p-6">
                    <h3 className="text-base font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="inline-block w-4 h-0.5 bg-blue-500"></span>
                      Poin Penting
                      <span className="inline-block w-4 h-0.5 bg-blue-500"></span>
                    </h3>
                    <ul className="space-y-2">
                      {slide.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 group">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-base font-bold flex items-center justify-center mt-0.5">
                            {pIdx + 1}
                          </span>
                          <span className="text-gray-700 text-base leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Example Box */}
                  <div className="mx-6 mb-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <h4 className="font-bold text-amber-800 text-base mb-1.5">{slide.example.title}</h4>
                    <p className="text-amber-700 text-base leading-relaxed">{slide.example.description}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* CTA Bottom */}
          <div className="mt-8 bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
            <p className="text-lg font-bold mb-1">🎉 Kamu sudah selesai membaca materi ini!</p>
            <p className="text-green-100 text-base mb-4">Uji pemahamanmu dengan mengerjakan quiz sekarang</p>
            <div className="flex gap-3 justify-center">
              <Link href="/game"
                className="bg-white text-green-600 px-6 py-2.5 rounded-lg font-bold hover:bg-green-50 transition text-base">
                🎯 Mulai Quiz
              </Link>
              <Link href="/materi"
                className="border-2 border-white text-white px-6 py-2.5 rounded-lg font-bold hover:bg-green-600 transition text-base">
                📚 Materi Lain
              </Link>
            </div>
          </div>

          {/* Mobile: TOC */}
          <div className="lg:hidden mt-6 bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-700 text-base">📋 Daftar Isi</h3>
            </div>
            <div className="p-2">
              {materi.slides.map((slide, idx) => (
                <button key={idx} onClick={() => scrollToSection(idx)}
                  className="w-full text-left px-3 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-100 flex items-center gap-2">
                  <span className="text-gray-400 text-base font-bold">{String(idx + 1).padStart(2, '0')}</span>
                  <span>{slide.title}</span>
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
