import React from 'react';

export type SlideData = {
  title: string;
  desc: string;
  tag: string;
  svg: React.ReactNode;
};

export const sliderData: Record<string, SlideData[]> = {
  karakteristik: [
    {
      title: "1. Concurrency (Konkurensi / Multitasking)",
      desc: "Kemampuan OS untuk menjalankan atau memproses beberapa tugas (proses) secara bersamaan atau dalam tenggat waktu yang tumpang tindih.",
      tag: "Efisiensi CPU",
      svg: <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
    },
    {
      title: "2. Sharing (Berbagi Sumber Daya)",
      desc: "OS memungkinkan beberapa pengguna atau aplikasi untuk menggunakan perangkat keras yang sama (RAM, CPU, Harddisk, Printer) secara aman tanpa konflik.",
      tag: "Resource Management",
      svg: <svg className="w-16 h-16 text-mint-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
    },
    {
      title: "3. Virtualization (Virtualisasi)",
      desc: "OS menyembunyikan kompleksitas fisik perangkat keras dan menyediakan tampilan 'virtual' yang lebih mudah dikelola oleh aplikasi.",
      tag: "Abstraksi Hardware",
      svg: <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
    },
    {
      title: "4. Asynchrony (Aktivitas Asinkron)",
      desc: "OS dapat menangani interupsi mendadak (seperti klik mouse atau tombol keyboard) kapan saja tanpa menghentikan pemrosesan utama.",
      tag: "Interrupt Handling",
      svg: <svg className="w-16 h-16 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    }
  ],
  fungsi: [
    {
      title: "1. Manajemen Proses (Processor Management)",
      desc: "Mengatur alokasi waktu CPU untuk setiap program yang berjalan melalui algoritma penjadwalan (scheduling).",
      tag: "CPU Scheduling",
      svg: <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
    },
    {
      title: "2. Manajemen Memori Utama (RAM)",
      desc: "Lacak bagian memori mana yang sedang digunakan, oleh siapa, dan mengalokasikan/deolokasikan memori sesuai kebutuhan aplikasi.",
      tag: "RAM Allocation",
      svg: <svg className="w-16 h-16 text-mint-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
    },
    {
      title: "3. Manajemen Sistem Berkas (File System)",
      desc: "Mengatur penyimpanan data dalam direktori/folder, mengontrol hak akses file, dan memastikan penyimpanan fisik terorganisir.",
      tag: "Storage Control",
      svg: <svg className="w-16 h-16 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
    },
    {
      title: "4. Manajemen Keamanan & Proteksi",
      desc: "Melindungi sumber daya sistem dari akses yang tidak sah melalui autentikasi pengguna dan pembatasan hak akses (privilege).",
      tag: "System Security",
      svg: <svg className="w-16 h-16 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
    }
  ],
  jenis: [
    {
      title: "Microsoft Windows",
      desc: "Sistem operasi paling populer untuk komputer desktop/laptop pribadi. Dikenal dengan antarmuka yang ramah pengguna (GUI) dan dukungan perangkat lunak yang sangat luas.",
      tag: "Desktop / Proprietary",
      svg: <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5l7-1v8H4V5zm0 14l7 1v-8H4v7zm16-15l-7 1v7h7V4zm0 15l-7-1v-7h7v8z"></path></svg>
    },
    {
      title: "macOS",
      desc: "Sistem operasi eksklusif ciptaan Apple untuk jajaran komputer Mac. Terkenal akan stabilitas tinggi, optimasi performa, dan desain grafis yang elegan.",
      tag: "Desktop / Apple Ecosystem",
      svg: <svg className="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    },
    {
      title: "Linux",
      desc: "Sistem operasi open-source berarsitektur UNIX. Sangat populer digunakan pada server dunia, superkomputer, serta pengembang perangkat lunak karena keamanannya.",
      tag: "Open Source / Server & PC",
      svg: <svg className="w-16 h-16 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
    },
    {
      title: "Android",
      desc: "Sistem operasi berbasis kernel Linux yang dirancang khusus untuk perangkat seluler berlayar sentuh. Dikembangkan oleh Google dan bersifat open-source.",
      tag: "Mobile OS / Open Source",
      svg: <svg className="w-16 h-16 text-mint-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
    },
    {
      title: "iOS",
      desc: "Sistem operasi seluler eksklusif besutan Apple yang mengotaki iPhone. Menawarkan integrasi sistem yang sangat ketat, privasi tinggi, dan performa mulus.",
      tag: "Mobile OS / Apple Ecosystem",
      svg: <svg className="w-16 h-16 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
    }
  ],
  tujuan: [
    {
      title: "1. Kenyamanan (Convenience)",
      desc: "Membuat penggunaan komputer menjadi lebih mudah, intuitif, dan nyaman bagi manusia tanpa harus berurusan dengan bahasa mesin yang rumit.",
      tag: "User Experience",
      svg: <svg className="w-16 h-16 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    },
    {
      title: "2. Efisiensi (Efficiency)",
      desc: "Memungkinkan sumber daya sistem komputer (CPU, RAM, Diska) dapat dimanfaatkan secara optimal dan maksimal oleh berbagai program.",
      tag: "Optimization",
      svg: <svg className="w-16 h-16 text-mint-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    },
    {
      title: "3. Kemampuan Berevolusi (Ability to Evolve)",
      desc: "Dirancang sedemikian rupa sehingga memungkinkan pengembangan dan pengujian fungsi baru tanpa mengganggu layanan yang sudah ada.",
      tag: "Adaptability",
      svg: <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
    }
  ]
};

export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    q: "Apa fungsi utama Sistem Operasi bagi pengguna dan komputer?",
    options: [
      "Sebagai jembatan antarmuka antara pengguna, aplikasi, dan perangkat keras.",
      "Sebagai aplikasi untuk mengedit foto dan video secara otomatis.",
      "Sebagai perangkat keras utama untuk menyimpan memori permanen.",
      "Sebagai kabel penghubung daya listrik ke CPU."
    ],
    answer: 0,
    explanation: "Sistem Operasi bertindak sebagai lapisan perantara (interface) antara aplikasi/pengguna dengan hardware fisik."
  },
  {
    q: "Karakteristik OS yang memungkinkan pemrosesan beberapa tugas secara bersamaan disebut...",
    options: [
      "Virtualization",
      "Concurrency (Multitasking)",
      "Asynchrony",
      "Paging"
    ],
    answer: 1,
    explanation: "Concurrency / Multitasking memungkinkan beberapa proses dieksekusi dalam jangka waktu yang seolah-olah bersamaan."
  },
  {
    q: "Komponen hardware manakah yang dikelola langsung oleh OS untuk alokasi memori sementara?",
    options: [
      "Harddisk Drive (HDD)",
      "Power Supply",
      "Random Access Memory (RAM)",
      "Monitor Display"
    ],
    answer: 2,
    explanation: "Fungsi Manajemen Memori OS berfokus pada alokasi dan deolokasi ruang memori utama (RAM)."
  },
  {
    q: "Manakah di bawah ini yang merupakan contoh Sistem Operasi khusus Mobile?",
    options: [
      "Windows 11 & macOS",
      "Android & iOS",
      "Ubuntu Linux & Debian",
      "MS-DOS & RedHat"
    ],
    answer: 1,
    explanation: "Android dan iOS dirancang khusus untuk perangkat seluler seperti smartphone dan tablet."
  },
  {
    q: "Salah satu tujuan utama pengembangan Sistem Operasi adalah 'Convenience', yang artinya...",
    options: [
      "Menjadikan penggunaan komputer terasa lebih mudah dan intuitif.",
      "Menghemat konsumsi arus listrik pada komponen RAM.",
      "Membuat harga perangkat keras komputer menjadi murah.",
      "Menghapus semua file bekas secara otomatis setiap menit."
    ],
    answer: 0,
    explanation: "Convenience bertujuan untuk memberikan kenyamanan dan kemudahan bagi manusia saat mengoperasikan sistem komputer."
  }
];
