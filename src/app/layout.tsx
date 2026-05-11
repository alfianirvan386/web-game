import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import komponen Anda
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduGame - Platform Edukasi Interaktif TKJ",
  description: "Platform edukasi #1 untuk Teknik Komputer dan Jaringan. Belajar sambil bermain dengan materi lengkap, quiz interaktif, dan game seru.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Header dipanggil di sini agar muncul di atas */}
        <Header />
        
        {/* {children} adalah isi halaman (Home, Profil, Game, dll) */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer dipanggil di sini agar muncul di bawah */}
        <Footer />
        
      </body>
    </html>
  );
}