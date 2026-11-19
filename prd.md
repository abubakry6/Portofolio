# PRODUCT REQUIREMENT DOCUMENT (PRD)
# Projek: Modern Portfolio Web App - AI-Augmented Web Developer & Prompt Architect
================================================================================
DOKUMEN SPESIFIKASI SISTEM RESMI (STANDAR ZETTBOT BY ZETTBOS)
================================================================================

================================================================================
ZONA ATAS: SPESIFIKASI KEBUTUHAN PRODUK (BLUEPRINT AWAL)
================================================================================

1. NAMA PROJEK & PROBLEM STATEMENT
--------------------------------------------------------------------------------
- Nama Aplikasi   : Modern Portfolio WebApp (CodeCraft / Custom Developer Brand)
- Kategori        : Personal Branding, Developer Showcase & Client Lead Magnet
- Target Audiens  : Calon Klien, Rekruter, Bisnis/UMKM, dan Tech Collaborator
- Problem Statement:
  Banyak web developer modern memanfaatkan AI coding assistant untuk mempercepat kerja, namun bingung bagaimana mengemas portofolio diri tanpa terlihat seperti sekadar "pengguna ChatGPT biasa". Portofolio ini dibangun untuk memposisikan pemiliknya sebagai "Modern Web Developer & Prompt Architect" berkelas tinggi: developer tangguh yang mampu menghasilkan web app berkualitas industri dengan kecepatan eksekusi 5x lipat berkat integrasi arsitektur AI dan standar clean code.

2. PERAN PENGGUNA (USER ROLES)
--------------------------------------------------------------------------------
- Pengunjung / Calon Klien (Guest):
  * Menjelajahi ringkasan keahlian, statistik pencapaian, dan showcase proyek.
  * Membuka detail proyek dan melihat teknologi yang digunakan.
  * Mengakses modal kontak interaktif untuk terhubung langsung via WhatsApp, Email, LinkedIn, atau GitHub.
- Pemilik Portofolio (Developer / Admin):
  * Memiliki kendali penuh untuk memperbarui data portofolio (bio, foto, proyek, skill, kontak) secara mudah melalui objek konfigurasi terstruktur di frontend HTML.

3. ARSITEKTUR & LINGKUNGAN KERJA
--------------------------------------------------------------------------------
- Platform Host   : Google Apps Script (GAS) Web App (Serverless, Gratis, Tanpa Sewa Server)
- Tipe Arsitektur : Single-File Monolith Teroptimasi
  * `code.gs`     : Backend Controller ringan Google Apps Script yang menyajikan `index.html` via `HtmlService.createHtmlOutputFromFile()` dengan meta tags responsif.
  * `index.html`  : Antarmuka lengkap berstandar Anti-AI Dark Mode (menggabungkan Tailwind CSS via CDN, ikon vektor SVG, dan interaktivitas JavaScript murni tanpa dependency berat).
- Mode Pengelolaan: Frontend In-Memory Configuration (Statis Murni Cepat). Data portofolio dikemas dalam objek JavaScript terstruktur (`PORTFOLIO_CONFIG`), memungkinkan perenderan instan 0 milidetik tanpa kuota database eksternal.

4. ALUR KERJA APLIKASI (USER FLOW)
--------------------------------------------------------------------------------
1. Pengunjung membuka URL Web App portofolio.
2. Navbar melayang (sticky glassmorphism) menyambut pengunjung dengan brand logo `</> CodeCraft`, link navigasi halus (smooth scroll), dan tombol CTA "Hire Me ↗".
3. Hero Section menampilkan:
   - Badge "AI-AUGMENTED WEB DEVELOPER & PROMPT ARCHITECT"
   - Headline menyapa pengunjung dengan tipografi kuat dan aksen gradasi ungu violet / cyan.
   - Dual Button CTA: "View My Work ↗" (scroll langsung ke Featured Projects) dan "Download CV / Contact".
   - Floating Glassmorphism Code Box di samping foto profil yang menampilkan objek kode JavaScript hidup (`const developer = {...}`).
   - Tech Stack Ribbon berisi ikon teknologi web modern (HTML5, CSS3, JS, TS, React, Node.js, Next.js, Git, Gemini/Claude AI).
4. About Me & Metric Stats:
   - Ringkasan filosofi kerja: membangun solusi digital cepat, aman, dan scalable.
   - 4 Kartu Metrik Kompak (Grid 2x2): Pengalaman (Tahun), Total Proyek Selesai, Klien Puas, dan Tingkat Kepuasan.
5. My Skills & Competencies:
   - Bar progress visual multi-kolom yang menunjukkan persentase penguasaan frontend, backend, tools, dan AI Prompt Engineering.
6. Featured Projects Showcase:
   - Kartu proyek elegan dengan penomoran unik (01, 02, 03), tangkapan layar proyek, ringkasan fitur, badge teknologi, serta tombol aksi "View Project / Demo ↗".
   - Indikator pagination slider / dots interaktif.
7. Social Proof & Testimoni:
   - Kartu kutipan testimoni otentik klien lengkap dengan nama, jabatan, dan avatar.
8. Call to Action (CTA) & Hub Kontak:
   - Kartu ajakan "Have a project in mind? Let's build together!"
   - Tombol "Get in Touch ↗" yang memicu Modal Popup Kontak Interaktif.
9. Modal Popup Kontak Interaktif:
   - Pilihan aksi instan: Chat WhatsApp Otomatis (dengan template pesan prefilled ramah bisnis), Direct Email, LinkedIn, dan GitHub. Fitur 1-klik salin email/nomor dengan notifikasi toast.
10. Footer:
    - Informasi hak cipta dan tanda tangan developer.

5. DESAIN STRUKTUR DATA (FRONTEND CONFIG OBJECT)
--------------------------------------------------------------------------------
Seluruh data portofolio didefinisikan pada blok `PORTFOLIO_CONFIG` di `index.html`:
```javascript
const PORTFOLIO_CONFIG = {
  profile: {
    name: "Alex",
    roleBadge: "MODERN WEB DEVELOPER & PROMPT ARCHITECT",
    headline: "Building high-performance web solutions, accelerated by AI.",
    bio: "Passionate web developer specializing in bridging human business vision with precision AI engineering. Delivering production-ready web apps 5x faster.",
    location: "Indonesia",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    cvUrl: "#"
  },
  stats: [
    { label: "Years Experience", value: "3+", icon: "calendar" },
    { label: "Projects Completed", value: "40+", icon: "code" },
    { label: "Happy Clients", value: "25+", icon: "smile" },
    { label: "Client Satisfaction", value: "100%", icon: "trophy" }
  ],
  skills: [
    { name: "HTML5 / Semantic Web", percent: 95 },
    { name: "Tailwind CSS / UI UX", percent: 90 },
    { name: "Modern JavaScript (ES6+)", percent: 90 },
    { name: "React / Next.js", percent: 85 },
    { name: "Node.js / Express Backend", percent: 80 },
    { name: "TypeScript", percent: 80 },
    { name: "Google Apps Script & Automation", percent: 95 },
    { name: "AI Coding & Prompt Architecture", percent: 95 },
    { name: "Git & Cloud Deployment", percent: 85 }
  ],
  projects: [
    {
      id: "01",
      title: "E-Commerce Platform",
      desc: "Full-stack e-commerce solution with modern UI/UX, product catalog, cart system, and payment gateway integration.",
      tags: ["React", "Tailwind", "Node.js", "AI-Assisted"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#"
    },
    {
      id: "02",
      title: "Task Management App",
      desc: "Collaborative workspace management tool with real-time kanban boards, deadlines, and automated reminders.",
      tags: ["JavaScript", "Cloud API", "Modern CSS"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#"
    },
    {
      id: "03",
      title: "Crypto & Financial Dashboard",
      desc: "Real-time cryptocurrency analytics tracking system with interactive charts and currency conversion.",
      tags: ["Next.js", "Chart.js", "API Integration"],
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#"
    }
  ],
  testimonial: {
    quote: "Alex is an exceptional developer who delivers high-quality work on time. His ability to turn complex concepts into functional webapps in days is outstanding.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  contact: {
    whatsapp: "+6281234567890",
    email: "hello@alexdev.com",
    linkedin: "https://linkedin.com/in/alexdev",
    github: "https://github.com/alexdev"
  }
};
```

6. ATURAN VALIDASI & LOGIKA KHUSUS INTERAKTIF
--------------------------------------------------------------------------------
- Filosofi Tampilan Anti-AI: Palet warna berkelas Slate/Deep Navy (`#090d16` background, `#121826` surface cards), aksen Neon Violet (`#8b5cf6`) dan Electric Cyan (`#06b6d4`), ikon SVG minimalis seragam (bukan emoji norak).
- Responsivitas Penuh: Tampilan fluid dari layar smartphone (360px) hingga monitor ultrawide (1920px+). Navigasi mobile dilengkapi hamburger drawer halus.
- Interaksi Modal Kontak:
  * Klik tombol "Hire Me" / "Get in Touch" membuka modal dengan animasi fade-in & scale lembut.
  * Fitur "Copy to Clipboard" untuk email dan nomor kontak dengan notifikasi toast visual "Tersalin!".
  * Direct Link WhatsApp membuka percakapan dengan format pesan pembuka profesional otomatis:
    `Halo [Nama], saya tertarik dengan layanan web development Anda setelah melihat portofolio Anda.`
- Glassmorphism Code Box:
  * Box kode di Hero section memiliki efek kilau kaca (backdrop blur), tombol titik macOS (merah, kuning, hijau), dan syntax highlighting yang tajam.

7. RENCANA ANTARMUKA PENGGUNA (UI BREAKDOWN)
--------------------------------------------------------------------------------
1. Header / Sticky Navbar:
   - Brand Logo: Tag SVG `</>` + Teks "CodeCraft"
   - Desktop Menu: Home, About, Skills, Projects, Contact
   - CTA Button: "Hire Me ↗"
   - Mobile Toggle: Tombol hamburger responsif
2. Hero Section:
   - Left Column: Role Badge, Giant Typography, Description, Dual CTA, Tech Stack Icons
   - Right Column: Profile Image dengan ambient glow ring + Floating Code Card
3. About & Quick Stats Section:
   - Bio paragraf bernarasi human-crafted
   - 4 Card Metrik (Tahun Pengalaman, Proyek Selesai, Klien Puas, Tingkat Kepuasan)
4. Skills Section:
   - 3 Kolom Grid Bar Kemahiran dengan animasi lebar progress bar saat scroll
5. Featured Projects Section:
   - 3 Kolom Project Cards dengan hover zoom effect, nomor proyek elegan (01, 02, 03), badge tech, dan link aksi
   - Carousel/slider dots indicator
6. Bottom Section & Testimonial:
   - Card Kolaborasi "Have a project in mind?"
   - Testimonial Quote Box dengan foto avatar klien
   - Follow Me & Social Icon links
7. Interactive Contact Modal:
   - Pop-up modal sentris dengan latar belakang gelap blur
   - Kartu opsi kontak: WhatsApp, Email, LinkedIn, GitHub
8. Footer:
   - Informasi hak cipta & personal branding watermark

8. KRITERIA PENGUJIAN (TESTING CHECKLIST)
--------------------------------------------------------------------------------
- [ ] Pengujian GAS doGet: URL Web App terbuka sempurna menampilkan antarmuka tanpa error.
- [ ] Pengujian Responsif: Dicoba pada mode inspeksi mobile HP (375px), tablet (768px), dan PC (1200px+).
- [ ] Pengujian Navigasi: Seluruh link navbar melakukan smooth scrolling ke section yang tepat.
- [ ] Pengujian Modal Kontak: Tombol "Hire Me" dan "Get in Touch" membuka modal secara mulus dan tombol close (x / klik di luar) menutupnya.
- [ ] Pengujian WhatsApp Action: Link WhatsApp membuka URL `https://wa.me/...` dengan teks prefilled yang benar.
- [ ] Pengujian Copy Action: Tombol salin email memunculkan feedback visual tersalin.

================================================================================
ZONA BAWAH: MASTER CONTEXT & LOGIKA SISTEM TERKINI (LIVING CONTEXT)
================================================================================
- Status Arsitektur : Google Apps Script Standalone Web App (Monolith: code.gs + index.html).
- Mode Data         : In-Memory Frontend JavaScript Object (`PORTFOLIO_CONFIG`), zero latency, zero backend DB quota bottleneck.
- Palet Warna       : Dark Mode Cyber Navy (`#090d16` background, `#121826` card surfaces, `#8b5cf6` violet accents, `#06b6d4` cyan accents).
- Positioning Diri  : Modern Web Developer & Prompt Architect.
- Log Pembaruan     :
  * v1.0.0 (Initial Blueprint): Inisialisasi PRD Portofolio Web App berbasis referensi desain CodeCraft dan personal branding AI-Augmented Web Developer.
  * v1.1.0 (Pemasangan Foto Asli): Foto profil placeholder resmi diganti dengan foto asli pengguna via Base64 Data URI mandiri di Hero Section (terbingkai ambient glow ring dengan styling framing `object-position: center 25%`).
  * v1.2.0 (Pembaruan Identitas & Kontak Abu Bakri): Menetapkan nama resmi developer menjadi 'Abu Bakri', menyinkronkan WhatsApp (085215804913), Gmail (abubakri6942@gmail.com), LinkedIn resmi, serta menambahkan tombol interaktif Instagram SVG di kartu kontak & modal.
  * v1.3.0 (Tata Letak Hero Bebas Halangan, Lokalisasi Indonesia & 4 Proyek Nyata): Merestrukturisasi Hero Section agar wajah Abu Bakri bebas 100% dari halangan kode (stacked layout di HP & safe offset di PC), menerjemahkan 100% teks ke Bahasa Indonesia, dan mengintegrasikan 4 showcase proyek nyata (Seminar KREADIKA, Angkringan Lege, Kasir Pro, dan BK WebStudio).
  * v1.4.0 (Studio Framing 1:1 Foto Profil): Memperbarui foto profil ke rasio studio 1:1 (`profile-square.jpg`), memangkas area dinding kosong di atas, dan memastikan seluruh wajah (rambut, mata, hidung, mulut, dagu, hingga kerah baju putih) tampil 100% utuh, jernih, dan proporsional di dalam bingkai lingkaran showcase.
  * v1.5.0 (Eliminasi Testimoni Dummy & Penerapan Kartu Keunggulan Kerja): Menghapus seluruh testimoni dummy fiktif demi integritas personal branding Abu Bakri, memperbarui menu navbar menjadi 'Keunggulan', dan mengganti kartu tengah menjadi 'Standar Kerja & Jaminan Kualitas' (Eksekusi 5x Lebih Cepat via AI, Serverless Rp 0/Bulan via GAS & Vercel, dan Garansi Pendampingan).
  * v1.6.0 (Pembersihan Total Testimoni CEO Fiktif & Penyelarasan Menu Testimoni): Mempertahankan menu navigasi resmi 'Testimoni' (#testimoni) sesuai instruksi pengguna, serta membersihkan 100% jejak CEO fiktif (Sarah Johnson, CEO TechStart) dan menggantinya dengan kartu komitmen kepuasan klien 100% (Rating 5.0 ★★★★★) yang otentik dan berintegritas.
  * v1.7.0 (Pembersihan Overlap Laptop - Eliminasi lg:absolute): Menghapus aturan `lg:absolute` pada kartu kode di Hero Section, memastikan kartu kode tersusun konsisten dan rapi di bawah foto pada semua resolusi layar (laptop, desktop, dan HP) sehingga foto wajah Abu Bakri tampil 100% utuh tanpa tertutup.
  * v1.8.0 (Penyederhanaan Footer Ultra-Clean): Menghapus teks sekunder 'Dibuat dengan dedikasi & Sinergi Rekayasa AI', menyajikan footer minimalis satu baris rata tengah yang murni berfokus pada hak cipta resmi Abu Bakri.
  * v1.9.0 (Pembaruan Metrik Realistis & Kredibel): Merombak kartu metrik dummy menjadi 4 pilar data yang 100% riil dan jujur (1+ Tahun Dedikasi Praktik Web, 4 WebApp Nyata Siap Coba, 10+ Stack Teknologi Dikuasai, dan 100% Komitmen Garansi Kualitas), mengoptimalkan faktor kepercayaan calon klien.

   * v1.10.0 (Penyempurnaan Brand Logo Navbar): Menghapus akhiran '-AI' pada logo merek di navbar, menetapkan brand identitas resmi menjadi 'CodeCraft' (tampil elegan sebagai '</> CodeCraft.') agar lebih clean, profesional, dan berfokus pada keahlian rekayasa kode pengembang.
   * v1.11.0 (Optimalisasi Desain Mobile-First & Responsive Polish): Membenahi tata letak layar HP secara menyeluruh. Menampilkan foto profil di atas pada mode mobile (order-first), menyelaraskan perataan tengah estetik, menyajikan 4 kartu metrik ke dalam grid 2x2 kompak ala dashboard modern, merampingkan padding spasi berlebih, dan memastikan seluruh kartu serta modal kontak tampil proporsional tanpa terpotong.
  * v1.12.0 (Mobile Polish Generasi Baru & Anti Dead-Scroll): Menuntaskan kendala tampilan HP molor berdasarkan screenshot nyata pengguna. Merampingkan rasio avatar hero di HP (w-32 h-32) dan padding vertikal sehingga seluruh elemen hero dan tombol aksi muat utuh di layar pertama HP tanpa terpotong. Mengeliminasi kotak kode developer.js di HP (khusus tampil di desktop) untuk memangkas dead-scroll 250px, menata pita keahlian teknologi lebih seimbang, serta merefaktor seksi Tentang Saya menjadi 1 narasi padat dengan 3 kartu Quick Highlights siap baca.
  * v1.13.0 (Perbaikan Favicon Exception Google Apps Script): Menghapus method .setFaviconUrl() dari fungsi doGet(e) di file code.gs yang menyebabkan crash server 'Exception: Jenis gambar ikon favicon tidak didukung (baris 22, file Kode)' akibat validasi ketat format gambar GAS (.ico/.png). Favicon SVG modern (< / > violet) dipindahkan langsung ke tag <head> di index.html sehingga aman, andal, dan bebas error di semua browser.
  * v1.14.0 (Penyelarasan Standar Meta Tag Google Apps Script): Menghapus pemanggilan .addMetaTag('description', ...) dari doGet(e) di code.gs yang memicu error 'Exception: Tag meta yang Anda tentukan tidak diperbolehkan dalam konteks ini (baris 23, file Kode)' karena Google Apps Script hanya mengizinkan tag viewport. Menetapkan format baku resmi .addMetaTag('viewport', 'width=device-width, initial-scale=1') untuk menjamin kelancaran load di seluruh browser dan perangkat.
  * v1.15.0 (Optimalisasi Universal Mobile 320px - 430px+): Menuntaskan kendala pemotongan sisi kanan (horizontal overflow) pada HP layar ramping/compact (iPhone SE, iPhone mini, Android kecil 320px-360px). Mengisolasi elemen ambient glow ke dalam container fixed inset-0 overflow-hidden, mengunci batas viewport global html/body max-w-full overflow-x-hidden, menyematkan min-w-0 w-full pada seluruh grid columns, serta menerapkan tipografi fluid pada badge peran, headline, dan navbar header sehingga website tampil utuh, presisi, dan proporsional di seluruh varian Android dan iPhone (kecil maupun besar).
  * v1.16.0 (Aesthetic Polish & Mobile-First Overhaul 360x760 & Universal Mobile): Menuntaskan kendala estetika pada viewport mobile standar 360px x 760px dan varian layar HP lainnya. Menambahkan Live Work Availability Badge ('🟢 Tersedia untuk Proyek Baru' dengan emerald ping animation) di bawah foto hero; meningkatkan bobot tipografi headline menjadi 'text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight' ('Web Developer Modern'); mengganti tombol aksi bertumpuk memanjang dengan Grid 2 Kolom ringkas side-by-side ([Lihat Karya] & [Konsultasi]) yang menghemat 60px tinggi layar; mengonversi 10 badge teknologi tercecer menjadi pita geser horizontal halus (smooth horizontal swipe ribbon with no-scrollbar); menghilangkan pemotongan teks 'truncate' pada kartu metrik 2x2 dan menggantinya dengan 'line-clamp-2 leading-tight' serta angka metrik gagah (text-base sm:text-2xl font-extrabold); serta menyelaraskan seluruh hirarki judul seksi (#tentang, #keahlian, #proyek) menjadi proporsional (text-2xl sm:text-3xl lg:text-4xl) demi visual rhythm yang seimbang dan berkelas aplikasi native.
