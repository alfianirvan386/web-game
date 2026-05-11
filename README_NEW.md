# 🎓 Nara Learning - Platform Edukasi Interaktif

Platform edukasi interaktif #1 di Indonesia untuk pembelajaran Teknik Komputer dan Jaringan dengan konsep **belajar sambil bermain**.

## 🌟 Fitur Utama

- **📚 Materi Lengkap** - Kurikulum komprehensif untuk TKJ dengan konten yang selalu diperbarui
- **🎮 Game Interaktif** - Quiz dan game seru untuk membuat pembelajaran lebih menyenangkan
- **👤 Profil User** - Tracking progress dan achievement dengan sistem poin
- **🔐 Sistem Autentikasi** - Login dan Sign Up untuk setiap pengguna
- **📊 Analytics** - Dashboard untuk melihat progress pembelajaran
- **🏆 Leaderboard** - Kompetisi sehat antar pengguna
- **📱 Responsive Design** - Dapat diakses dari berbagai perangkat

## 🚀 Teknologi yang Digunakan

- **Framework**: Next.js 15.5.15
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript & JavaScript
- **Font**: Geist Font Family

## 📋 Struktur Project

```
src/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home/Landing Page
│   ├── globals.css          # Global styles
│   ├── materi/
│   │   ├── page.tsx         # Materi list
│   │   └── [id]/
│   │       └── page.tsx     # Materi detail
│   ├── game/
│   │   └── page.tsx         # Game & Quiz
│   ├── profil/
│   │   └── page.tsx         # User Profile
│   ├── login/
│   │   └── page.tsx         # Login page
│   ├── signin/
│   │   └── page.tsx         # Sign Up page
│   └── about/
│       └── page.jsx         # About page
└── components/
    ├── Header.jsx           # Navigation Header
    └── Footer.jsx           # Footer
```

## 🎯 Menu Utama

1. **Beranda** - Halaman utama dengan hero section dan fitur overview
2. **Materi** - Koleksi materi pembelajaran dengan berbagai tingkat kesulitan
3. **Game** - Quiz interaktif dan game seru untuk testing pengetahuan
4. **Profil** - Halaman profil user dengan progress tracking
5. **Tentang** - Informasi tentang platform

## 🔑 Fitur Halaman

### Halaman Beranda
- Hero section dengan tagline menarik
- Feature highlights
- Call to action buttons

### Halaman Materi
- Grid materi dengan kategori dan tingkat kesulitan
- Filter berdasarkan kategori
- Detail materi dengan video, konten, dan quiz
- Progress tracking untuk setiap materi

### Halaman Game
- Quiz interaktif dengan scoring system
- Leaderboard dengan ranking pengguna
- Berbagai tipe game (Multiple Choice, Matching, Word Puzzle)
- Real-time progress indicator

### Halaman Profil
- Informasi user detail
- Achievement dan badges
- Learning statistics
- Progress tracking untuk setiap materi
- Edit profil functionality

### Halaman Login & Sign Up
- Form validasi lengkap
- Social login integration (Google, Facebook)
- Password confirmation
- School dan program selection

## 🛠️ Instalasi & Setup

### Prerequisites
- Node.js 18+ dan npm/yarn

### Installation

1. Clone repository:
```bash
git clone <repository-url>
cd web-game
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) di browser Anda

## 📦 Available Scripts

```bash
npm run dev      # Start development server with turbopack
npm run build    # Build untuk production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎨 Customization

### Tailwind CSS
Konfigurasi Tailwind CSS di `tailwind.config.ts`. Sesuaikan warna, spacing, dan utility sesuai kebutuhan.

### Fonts
Fonts sudah dikonfigurasi di `layout.tsx` menggunakan Google Fonts (Geist dan Geist Mono).

### Metadata
Update metadata di `layout.tsx` untuk SEO optimization.

## 🔄 Future Enhancements

- Backend API integration untuk data persistence
- Database setup (PostgreSQL/MongoDB)
- Advanced user analytics
- Video streaming untuk materi
- Live chat/discussion forum
- Mobile app version
- AI-powered recommendations
- Multi-language support

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License.

## 👥 Contributors

- **Ahmad Wijaya** - Founder & Project Lead
- **Development Team** - Nara Learning

## 📞 Support & Contact

- Email: info@naralearning.com
- Phone: +62 8123 4567 890
- Website: www.naralearning.com

---

**Made with ❤️ by Nara Learning Team**
