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
  // Modul 1
  {
    q: "Dalam arsitektur sistem komputer, posisi dan peran utama Sistem Operasi (OS) berada di antara...",
    options: [
      "Kabel penghubung daya listrik ke motherboard",
      "Pengguna/aplikasi dan hardware fisik sebagai perantara serta pengelola sumber daya",
      "Monitor dan kabel display sebagai pengubah resolusi gambar",
      "Harddisk dan flashdisk sebagai penyaring virus otomatis"
    ],
    answer: 1,
    explanation: "Sistem Operasi bertindak sebagai jembatan perantara (antarmuka) dan manajer sumber daya antara pengguna/aplikasi software dengan perangkat keras fisik (CPU, RAM, Storage)."
  },
  {
    q: "Pada materi modul, OS dianalogikan sebagai seorang 'dirigen orkestra' (konduktor musik). Alasan mendasar analogi tersebut adalah...",
    options: [
      "OS menghasilkan file rekaman suara berkualitas tinggi untuk setiap program komputer",
      "OS memerlukan speaker dan audio eksternal agar seluruh fitur sistem dapat aktif",
      "OS menyelaraskan kerja komponen CPU, RAM, dan Storage agar harmonis tanpa benturan",
      "OS berfungsi menggantikan peran pengguna dalam menentukan seluruh isi file"
    ],
    answer: 2,
    explanation: "Analogi dirigen musik menggambarkan peran OS dalam mengoordinasikan berbagai instrumen hardware komputer agar bekerja harmonis tanpa konflik."
  },
  {
    q: "Salah satu dari 3 tujuan utama perancangan Sistem Operasi adalah 'Ability to Evolve' (Kemampuan Berkembang), yang bermakna bahwa...",
    options: [
      "Komputer dapat menggandakan kapasitas RAM fisik sendiri tanpa membeli komponen baru",
      "Sistem Operasi mampu mengubah bentuk fisik laptop menjadi smartphone secara otomatis",
      "Seluruh file pengguna akan otomatis terhapus setiap kali komputer dimatikan",
      "OS dapat diperbarui dan ditambah fungsionalitas baru secara modular tanpa merusak layanan yang ada"
    ],
    answer: 3,
    explanation: "Tujuan 'Ability to Evolve' berarti OS dibangun secara modular sehingga pembaruan sistem dapat dipasang tanpa mengganggu stabilitas layanan yang sedang berjalan."
  },

  // Modul 2
  {
    q: "Fitur yang memungkinkan pengguna mendengarkan musik di Spotify sambil mengetik tugas di Word dan mengunduh berkas secara bersamaan dinamakan...",
    options: [
      "Concurrency (Multitasking)",
      "Monolithic Single-task",
      "Manual Hardware Interrupt",
      "Batch Processing Murni"
    ],
    answer: 0,
    explanation: "Concurrency (Multitasking) adalah kemampuan OS mengeksekusi banyak proses secara bersamaan melalui pembagian irisan waktu CPU (time slicing) yang sangat cepat."
  },
  {
    q: "Di laboratorium komputer, puluhan laptop mahasiswa dapat mengirim antrean dokumen ke satu unit printer fisik secara teratur tanpa benturan data. Hal ini merupakan wujud karakteristik...",
    options: [
      "Dedicated Hardware Monopoly",
      "Resource Sharing (Berbagi Sumber Daya)",
      "Single-User Isolation",
      "Asynchrony Interruption"
    ],
    answer: 1,
    explanation: "Resource Sharing memungkinkan berbagai pengguna atau proses memanfaatkan perangkat keras yang sama secara aman dan tertib tanpa memicu konflik."
  },
  {
    q: "Ketika memori RAM fisik hampir penuh saat membuka aplikasi berat, OS meminjam sebagian ruang Harddisk/SSD sebagai memori semu. Konsep ini merupakan contoh penerapan pilar...",
    options: [
      "Manual Overclocking",
      "Direct Hardware Flashing",
      "Virtualization (Memori Virtual)",
      "Static System Freeze"
    ],
    answer: 2,
    explanation: "Virtualization menyembunyikan keterbatasan fisik perangkat keras. Ruang disk disulap menjadi perpanjangan RAM semu agar sistem tetap stabil."
  },

  // Modul 3
  {
    q: "Fungsi OS yang bertugas mengatur alokasi giliran waktu pemrosesan CPU untuk tiap aplikasi yang berjalan adalah...",
    options: [
      "Manajemen Sistem Berkas (File System)",
      "Manajemen Resolusi Layar Sentuh",
      "Manajemen Catu Daya Baterai Laptop",
      "Manajemen Proses (CPU Scheduling)"
    ],
    answer: 3,
    explanation: "Manajemen proses bertugas mengatur penjadwalan CPU (CPU scheduling) agar seluruh aplikasi mendapat giliran komputasi secara adil dan terhindar dari deadlock."
  },
  {
    q: "Pada manajemen memori utama (RAM), mengapa Sistem Operasi harus melakukan dealokasi (deallocation) saat suatu aplikasi ditutup pengguna?",
    options: [
      "Mencegah kebocoran memori (memory leak) dan membebaskan RAM untuk program lain",
      "Menambah kapasitas penyimpanan harddisk secara permanen",
      "Menghapus akun admin komputer secara otomatis demi keamanan",
      "Mengubah memori RAM menjadi chip prosesor baru"
    ],
    answer: 0,
    explanation: "Dealokasi memori bertugas membersihkan dan mengembalikan blok RAM yang sebelumnya dipakai program yang telah selesai, mencegah terjadinya memory leak."
  },
  {
    q: "Ketika memasang perangkat keras baru seperti webcam atau printer, komponen apakah yang berfungsi sebagai penerjemah komunikasi antara OS dan hardware tersebut?",
    options: [
      "Bootloader Firmware",
      "Device Driver",
      "File Allocation Table (FAT)",
      "CMOS Battery Register"
    ],
    answer: 1,
    explanation: "Device Driver adalah modul perangkat lunak khusus yang menjembatani perintah dari sistem operasi agar dimengerti oleh periferal perangkat keras eksternal."
  },

  // Modul 4
  {
    q: "Sistem operasi generasi awal di mana tugas-tugas serupa dikumpulkan dalam satu berkas kelompok lalu dieksekusi berurutan tanpa interaksi pengguna adalah...",
    options: [
      "Time-Sharing Multitasking OS",
      "Mobile Touchscreen OS",
      "Batch Processing OS",
      "Real-Time OS (RTOS)"
    ],
    answer: 2,
    explanation: "Batch Processing OS mengumpulkan sejumlah pekerjaan sejenis ke dalam satu kelompok (batch) untuk diproses secara berurutan tanpa interaksi tatap muka langsung pengguna."
  },
  {
    q: "Sistem Operasi yang memiliki batas tenggat waktu amat ketat (zero-latency) dan diaplikasikan pada navigasi pesawat tempur, satelit, atau peralatan medis adalah...",
    options: [
      "Komputer kasir toko buku dan aplikasi pengolah kata",
      "Website blog pribadi dan sistem pemutar film rumahan",
      "Aplikasi pengunduh musik di smartphone",
      "Autopilot pesawat tempur, navigasi roket, dan kendali medis kritis (RTOS)"
    ],
    answer: 3,
    explanation: "Real-Time OS (RTOS) menjamin pemrosesan selesai dalam batas waktu yang kaku (milidetik). Keterlambatan respon dapat berakibat fatal pada keselamatan fisik sistem."
  },
  {
    q: "Sistem Operasi yang mengoordinasikan sekumpulan komputer fisik yang terhubung jaringan agar bekerja sama seolah-olah menjadi satu komputer raksasa adalah...",
    options: [
      "Distributed OS (Sistem Operasi Terdistribusi)",
      "Standalone DOS 16-bit",
      "Embedded Firmware",
      "Single-User Legacy System"
    ],
    answer: 0,
    explanation: "Distributed OS mengintegrasikan sumber daya komputasi dari banyak node komputer dalam jaringan sehingga tampak transparan sebagai satu kesatuan sistem bagi pengguna."
  },

  // Modul 5
  {
    q: "Berdasarkan perbandingan di Modul 5, perbedaan mendasar antara karakteristik Desktop OS (Windows/macOS) dan Mobile OS (Android/iOS) adalah...",
    options: [
      "Desktop OS tidak mendukung tampilan warna grafis, sedangkan Mobile OS sudah berwarna",
      "Desktop OS dirancang untuk mouse presisi & multi-window, sedangkan Mobile OS dioptimasi untuk layar sentuh & gestur usapan",
      "Mobile OS tidak menggunakan komponen prosesor maupun memori RAM",
      "Desktop OS tidak dapat digunakan untuk mengakses internet sama sekali"
    ],
    answer: 1,
    explanation: "Desktop OS ditujukan untuk produktivitas dengan kendali mouse presisi, keyboard fisik, dan multi-window, sedangkan Mobile OS dioptimasi untuk layar sentuh dan gestur usapan."
  },
  {
    q: "Mengapa sistem operasi Mobile (Android/iOS) menerapkan manajemen daya yang sangat agresif dengan membekukan (freeze) aplikasi di latar belakang?",
    options: [
      "Karena smartphone tidak memiliki ruang penyimpanan internal",
      "Mencegah layar ponsel dari bahaya radiasi cahaya biru",
      "Menghemat daya baterai yang terbatas agar perangkat dapat bertahan digunakan seharian",
      "Menghapus kode program aplikasi setiap kali pengguna berpindah menu"
    ],
    answer: 2,
    explanation: "Perangkat mobile bertumpu pada daya baterai yang terbatas. Oleh karena itu, OS secara agresif menonaktifkan atau membekukan proses latar belakang demi efisiensi konsumsi daya."
  },
  {
    q: "Pada infrastruktur pusat data (Data Center) dan komputasi awan skala besar, jenis sistem operasi yang diandalkan untuk menopang ribuan rak server secara 24/7 adalah...",
    options: [
      "Mobile OS khusus jam tangan anak-anak",
      "OS berbasis kaset pita magnetik retro",
      "Single-Tasking DOS tanpa koneksi jaringan",
      "Server OS berstandar Enterprise (seperti Linux Server & Windows Server)"
    ],
    answer: 3,
    explanation: "Infrastruktur Cloud dan Data Center bertumpu pada Server OS yang dibekali ketahanan 24/7 (fault tolerance), virtualisasi tingkat lanjut, dan stabilitas tinggi."
  }
];
