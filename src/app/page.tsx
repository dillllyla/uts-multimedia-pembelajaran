'use client';

import React, { useState, useEffect, useRef } from 'react';
import { playSound, toggleSoundStatus, getSoundStatus } from '@/utils/audio';

type ViewType = 
  | 'mulai' 
  | 'tp' 
  | 'dashboard' 
  | 'modul1' 
  | 'modul2' 
  | 'modul3' 
  | 'modul4' 
  | 'modul5' 
  | 'kuis' 
  | 'selesai';

type QuizItem = {
  modul: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

const quizData: QuizItem[] = [
  // Modul 1: Pengertian & Peran OS (3 Soal)
  {
    modul: "Modul 1: Konsep Dasar",
    question: "Dalam arsitektur sistem komputer, posisi dan peran utama Sistem Operasi (OS) berada di antara...",
    options: [
      "A. Kabel penghubung daya listrik ke motherboard",
      "B. Pengguna/aplikasi dan hardware fisik sebagai perantara serta pengelola sumber daya",
      "C. Monitor dan kabel display sebagai pengubah resolusi gambar",
      "D. Harddisk dan flashdisk sebagai penyaring virus otomatis"
    ],
    correct: 1,
    explanation: "Sistem Operasi bertindak sebagai jembatan perantara (antarmuka) dan manajer sumber daya antara pengguna/aplikasi software dengan perangkat keras fisik (CPU, RAM, Storage)."
  },
  {
    modul: "Modul 1: Konsep Dasar",
    question: "Pada materi modul, OS dianalogikan sebagai seorang 'dirigen orkestra' (konduktor musik). Alasan mendasar analogi tersebut adalah...",
    options: [
      "A. OS menghasilkan file rekaman suara berkualitas tinggi untuk setiap program komputer",
      "B. OS memerlukan speaker dan audio eksternal agar seluruh fitur sistem dapat aktif",
      "C. OS menyelaraskan kerja komponen CPU, RAM, dan Storage agar harmonis tanpa benturan",
      "D. OS berfungsi menggantikan peran pengguna dalam menentukan seluruh isi file"
    ],
    correct: 2,
    explanation: "Analogi dirigen musik menggambarkan peran OS dalam mengoordinasikan berbagai instrumen hardware komputer (CPU ibarat biola, RAM ibarat drum, storage ibarat trompet) agar bekerja harmonis tanpa konflik."
  },
  {
    modul: "Modul 1: Konsep Dasar",
    question: "Salah satu dari 3 tujuan utama perancangan Sistem Operasi adalah 'Ability to Evolve' (Kemampuan Berkembang), yang bermakna bahwa...",
    options: [
      "A. Komputer dapat menggandakan kapasitas RAM fisik sendiri tanpa membeli komponen baru",
      "B. Sistem Operasi mampu mengubah bentuk fisik laptop menjadi smartphone secara otomatis",
      "C. Seluruh file pengguna akan otomatis terhapus setiap kali komputer dimatikan",
      "D. OS dapat diperbarui dan ditambah fungsionalitas baru secara modular tanpa merusak layanan yang ada"
    ],
    correct: 3,
    explanation: "Tujuan 'Ability to Evolve' berarti OS dibangun secara modular sehingga pembaruan sistem, patch keamanan, dan driver baru dapat dipasang tanpa mengganggu stabilitas layanan yang sedang berjalan."
  },

  // Modul 2: Karakteristik Utama OS (3 Soal)
  {
    modul: "Modul 2: Karakteristik",
    question: "Fitur yang memungkinkan pengguna mendengarkan musik di Spotify sambil mengetik tugas di Word dan mengunduh berkas secara bersamaan dinamakan...",
    options: [
      "A. Concurrency (Multitasking)",
      "B. Monolithic Single-task",
      "C. Manual Hardware Interrupt",
      "D. Batch Processing Murni"
    ],
    correct: 0,
    explanation: "Concurrency (Multitasking) adalah kemampuan OS mengeksekusi banyak proses secara bersamaan melalui pembagian irisan waktu CPU (time slicing) yang sangat cepat."
  },
  {
    modul: "Modul 2: Karakteristik",
    question: "Di laboratorium komputer, puluhan laptop mahasiswa dapat mengirim antrean dokumen ke satu unit printer fisik secara teratur tanpa benturan data. Hal ini merupakan wujud karakteristik...",
    options: [
      "A. Dedicated Hardware Monopoly",
      "B. Resource Sharing (Berbagi Sumber Daya)",
      "C. Single-User Isolation",
      "D. Asynchrony Interruption"
    ],
    correct: 1,
    explanation: "Resource Sharing memungkinkan berbagai pengguna atau proses memanfaatkan perangkat keras yang sama (RAM, printer, GPU) secara aman dan tertib tanpa memicu konflik."
  },
  {
    modul: "Modul 2: Karakteristik",
    question: "Ketika memori RAM fisik hampir penuh saat membuka aplikasi berat, OS meminjam sebagian ruang Harddisk/SSD sebagai memori semu. Konsep ini merupakan contoh penerapan pilar...",
    options: [
      "A. Manual Overclocking",
      "B. Direct Hardware Flashing",
      "C. Virtualization (Memori Virtual)",
      "D. Static System Freeze"
    ],
    correct: 2,
    explanation: "Virtualization menyembunyikan keterbatasan fisik perangkat keras. Dalam Memori Virtual, ruang disk disulap menjadi perpanjangan RAM agar sistem tetap stabil meski RAM fisik penuh."
  },

  // Modul 3: 4 Fungsi Utama OS (3 Soal)
  {
    modul: "Modul 3: Fungsi Utama",
    question: "Fungsi OS yang bertugas mengatur alokasi giliran waktu pemrosesan CPU untuk tiap aplikasi yang berjalan adalah...",
    options: [
      "A. Manajemen Sistem Berkas (File System)",
      "B. Manajemen Resolusi Layar Sentuh",
      "C. Manajemen Catu Daya Baterai Laptop",
      "D. Manajemen Proses (CPU Scheduling)"
    ],
    correct: 3,
    explanation: "Manajemen proses bertugas mengatur penjadwalan CPU (CPU scheduling) agar seluruh aplikasi mendapat giliran komputasi secara adil dan terhindar dari kondisi deadlock."
  },
  {
    modul: "Modul 3: Fungsi Utama",
    question: "Pada manajemen memori utama (RAM), mengapa Sistem Operasi harus melakukan dealokasi (deallocation) saat suatu aplikasi ditutup pengguna?",
    options: [
      "A. Mencegah kebocoran memori (memory leak) dan membebaskan RAM untuk program lain",
      "B. Menambah kapasitas penyimpanan harddisk secara permanen",
      "C. Menghapus akun admin komputer secara otomatis demi keamanan",
      "D. Mengubah memori RAM menjadi chip prosesor baru"
    ],
    correct: 0,
    explanation: "Dealokasi memori bertugas membersihkan dan mengembalikan blok RAM yang sebelumnya dipakai program yang telah selesai, mencegah terjadinya memory leak yang memperlambat PC."
  },
  {
    modul: "Modul 3: Fungsi Utama",
    question: "Ketika memasang perangkat keras baru seperti webcam atau printer, komponen apakah yang berfungsi sebagai penerjemah komunikasi antara OS dan hardware tersebut?",
    options: [
      "A. Bootloader Firmware",
      "B. Device Driver",
      "C. File Allocation Table (FAT)",
      "D. CMOS Battery Register"
    ],
    correct: 1,
    explanation: "Device Driver adalah modul perangkat lunak khusus yang menjembatani perintah dari sistem operasi agar dimengerti oleh periferal perangkat keras eksternal."
  },

  // Modul 4: Jenis-Jenis OS (3 Soal)
  {
    modul: "Modul 4: Jenis-Jenis OS",
    question: "Sistem operasi generasi awal di mana tugas-tugas serupa dikumpulkan dalam satu berkas kelompok lalu dieksekusi berurutan tanpa interaksi pengguna adalah...",
    options: [
      "A. Time-Sharing Multitasking OS",
      "B. Mobile Touchscreen OS",
      "C. Batch Processing OS",
      "D. Real-Time OS (RTOS)"
    ],
    correct: 2,
    explanation: "Batch Processing OS mengumpulkan sejumlah pekerjaan sejenis ke dalam satu kelompok (batch) untuk diproses secara berurutan tanpa interaksi tatap muka langsung dari pengguna."
  },
  {
    modul: "Modul 4: Jenis-Jenis OS",
    question: "Sistem Operasi yang memiliki batas tenggat waktu amat ketat (zero-latency) dan diaplikasikan pada navigasi pesawat tempur, satelit, atau peralatan medis adalah...",
    options: [
      "A. Komputer kasir toko buku dan aplikasi pengolah kata",
      "B. Website blog pribadi dan sistem pemutar film rumahan",
      "C. Aplikasi pengunduh musik di smartphone",
      "D. Autopilot pesawat tempur, navigasi roket, dan kendali medis kritis (RTOS)"
    ],
    correct: 3,
    explanation: "Real-Time OS (RTOS) menjamin pemrosesan selesai dalam batas waktu yang kaku (milidetik). Keterlambatan respon dapat berakibat fatal pada keselamatan fisik sistem."
  },
  {
    modul: "Modul 4: Jenis-Jenis OS",
    question: "Sistem Operasi yang mengoordinasikan sekumpulan komputer fisik yang terhubung jaringan agar bekerja sama seolah-olah menjadi satu komputer raksasa adalah...",
    options: [
      "A. Distributed OS (Sistem Operasi Terdistribusi)",
      "B. Standalone DOS 16-bit",
      "C. Embedded Firmware",
      "D. Single-User Legacy System"
    ],
    correct: 0,
    explanation: "Distributed OS mengintegrasikan sumber daya komputasi dari banyak node komputer dalam jaringan sehingga tampak transparan sebagai satu kesatuan sistem bagi pengguna."
  },

  // Modul 5: Desktop OS vs Mobile OS (3 Soal)
  {
    modul: "Modul 5: Desktop vs Mobile",
    question: "Berdasarkan perbandingan di Modul 5, perbedaan mendasar antara karakteristik Desktop OS (Windows/macOS) dan Mobile OS (Android/iOS) adalah...",
    options: [
      "A. Desktop OS tidak mendukung tampilan warna grafis, sedangkan Mobile OS sudah berwarna",
      "B. Desktop OS dirancang untuk mouse presisi & multi-window, sedangkan Mobile OS dioptimasi untuk layar sentuh & gestur usapan",
      "C. Mobile OS tidak menggunakan komponen prosesor maupun memori RAM",
      "D. Desktop OS tidak dapat digunakan untuk mengakses internet sama sekali"
    ],
    correct: 1,
    explanation: "Desktop OS ditujukan untuk produktivitas dengan kendali mouse presisi, keyboard fisik, dan jendela leluasa, sedangkan Mobile OS dirancang fleksibel untuk sentuhan jari dan gestur layar sentuh."
  },
  {
    modul: "Modul 5: Desktop vs Mobile",
    question: "Mengapa sistem operasi Mobile (Android/iOS) menerapkan manajemen daya yang sangat agresif dengan membekukan (freeze) aplikasi di latar belakang?",
    options: [
      "A. Karena smartphone tidak memiliki ruang penyimpanan internal",
      "B. Mencegah layar ponsel dari bahaya radiasi cahaya biru",
      "C. Menghemat daya baterai yang terbatas agar perangkat dapat bertahan digunakan seharian",
      "D. Menghapus kode program aplikasi setiap kali pengguna berpindah menu"
    ],
    correct: 2,
    explanation: "Perangkat mobile bertumpu pada daya baterai yang terbatas. Oleh karena itu, OS secara agresif menonaktifkan atau membekukan proses latar belakang demi efisiensi konsumsi daya."
  },
  {
    modul: "Modul 5: Desktop vs Mobile",
    question: "Pada infrastruktur pusat data (Data Center) dan komputasi awan skala besar, jenis sistem operasi yang diandalkan untuk menopang ribuan rak server secara 24/7 adalah...",
    options: [
      "A. Mobile OS khusus jam tangan anak-anak",
      "B. OS berbasis kaset pita magnetik retro",
      "C. Single-Tasking DOS tanpa koneksi jaringan",
      "D. Server OS berstandar Enterprise (seperti Linux Server & Windows Server)"
    ],
    correct: 3,
    explanation: "Infrastruktur Cloud dan Data Center bertumpu pada Server OS (seperti Linux Enterprise dan Windows Server) yang dibekali ketahanan 24/7 (fault tolerance), virtualisasi tingkat lanjut, dan stabilitas tinggi."
  }
];

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewType>('mulai');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Gamification tracking
  const [completedModules, setCompletedModules] = useState<Record<string, boolean>>({
    modul1: false,
    modul2: false,
    modul3: false,
    modul4: false,
    modul5: false,
  });

  // Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [answeredIndex, setAnsweredIndex] = useState<number | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  // Certificate state
  const [studentName, setStudentName] = useState("Bintang Pelajar");
  const [certDate, setCertDate] = useState("26 September 2026");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Simulation Studio State
  const [activeSim, setActiveSim] = useState<'concurrency' | 'sharing' | 'virtualization' | 'asynchrony' | null>(null);
  const [simPlaying, setSimPlaying] = useState<boolean>(true);
  const [simTick, setSimTick] = useState<number>(0);
  const [simExtraTabs, setSimExtraTabs] = useState<number>(0);
  const [simInterruptCount, setSimInterruptCount] = useState<number>(0);
  const [simInterruptFlash, setSimInterruptFlash] = useState<boolean>(false);

  useEffect(() => {
    if (!activeSim || !simPlaying) return;
    const interval = setInterval(() => {
      setSimTick((prev) => (prev + 1) % 100);
    }, 120);
    return () => clearInterval(interval);
  }, [activeSim, simPlaying]);

  const openSimulation = (type: 'concurrency' | 'sharing' | 'virtualization' | 'asynchrony') => {
    playSound('click');
    setActiveSim(type);
    setSimPlaying(true);
    setSimTick(0);
    setSimExtraTabs(0);
    setSimInterruptCount(0);
  };

  const triggerInterrupt = () => {
    playSound('beep');
    setSimInterruptCount((prev) => prev + 1);
    setSimInterruptFlash(true);
    setTimeout(() => setSimInterruptFlash(false), 250);
  };



  // Welcome Voice Greeting State
  const [isSpeakingWelcome, setIsSpeakingWelcome] = useState<boolean>(false);
  const [hasSpokenWelcome, setHasSpokenWelcome] = useState<boolean>(false);

  const speakWelcomeGreeting = () => {
    if (typeof window === 'undefined') return;
    try {
      playSound('fanfare');
      setIsSpeakingWelcome(true);
      setHasSpokenWelcome(true);

      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const text = "Welcome! Selamat datang para penakluk teknologi di OS-Explorer! Ayo jelajahi jantung komputer bersama Byte-Bot!";
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'id-ID';
        utterance.rate = 0.95;
        utterance.pitch = 1.15;

        const voices = window.speechSynthesis.getVoices();
        const idVoice = voices.find((v) => 
          v.lang.toLowerCase().startsWith('id') || 
          v.lang.includes('ID') || 
          v.name.toLowerCase().includes('indonesia')
        );
        if (idVoice) {
          utterance.voice = idVoice;
        }

        utterance.onend = () => setIsSpeakingWelcome(false);
        utterance.onerror = () => setIsSpeakingWelcome(false);

        window.speechSynthesis.speak(utterance);
      } else {
        setTimeout(() => setIsSpeakingWelcome(false), 4500);
      }
    } catch (e) {
      console.warn("Speech error:", e);
      setIsSpeakingWelcome(false);
    }
  };

  // Auto-trigger welcome speech on Layar Mulai
  useEffect(() => {
    if (currentView === 'mulai' && !hasSpokenWelcome) {
      const timer = setTimeout(() => {
        speakWelcomeGreeting();
      }, 700);

      const handleFirstInteraction = () => {
        if (!hasSpokenWelcome) {
          speakWelcomeGreeting();
        }
        window.removeEventListener('click', handleFirstInteraction);
      };
      window.addEventListener('click', handleFirstInteraction, { once: true });

      return () => {
        clearTimeout(timer);
        window.removeEventListener('click', handleFirstInteraction);
      };
    }
  }, [currentView, hasSpokenWelcome]);

  // Cancel speech when leaving Layar Mulai
  useEffect(() => {
    if (currentView !== 'mulai' && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeakingWelcome(false);
    }
  }, [currentView]);

  // Set date once
  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    setCertDate(today.toLocaleDateString('id-ID', options));
    setSoundEnabled(getSoundStatus());
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  // Confetti trigger when reaching selesai
  useEffect(() => {
    if (currentView === 'selesai' && canvasRef.current) {
      playSound('fanfare');
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: Array<{
        x: number;
        y: number;
        size: number;
        color: string;
        speedY: number;
        speedX: number;
        rotation: number;
        rotationSpeed: number;
      }> = [];

      const colors = ['#0EA5E9', '#38BDF8', '#FF7A00', '#F59E0B', '#10B981', '#6366F1'];

      for (let i = 0; i < 90; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedY: Math.random() * 3 + 2,
          speedX: Math.random() * 2 - 1,
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 6 - 3,
        });
      }

      let animId: number;
      let ticks = 0;

      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          ctx.restore();

          p.y += p.speedY;
          p.x += p.speedX;
          p.rotation += p.rotationSpeed;

          if (p.y > canvas.height) {
            p.y = -10;
            p.x = Math.random() * canvas.width;
          }
        });

        ticks++;
        if (ticks < 250) {
          animId = requestAnimationFrame(render);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      };

      render();
      return () => cancelAnimationFrame(animId);
    }
  }, [currentView]);

  const handleToggleSound = () => {
    const newStatus = toggleSoundStatus();
    setSoundEnabled(newStatus);
    if (newStatus) playSound('click');
  };

  const navigate = (view: ViewType) => {
    playSound('click');
    setCurrentView(view);

    // Gamification track
    if (['modul1', 'modul2', 'modul3', 'modul4', 'modul5'].includes(view)) {
      setCompletedModules((prev) => ({ ...prev, [view]: true }));
    }

    if (view === 'kuis') {
      resetQuiz();
    }
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setCorrectAnswersCount(0);
    setAnsweredIndex(null);
    setQuizFinished(false);
  };

  const handleAnswer = (idx: number) => {
    if (answeredIndex !== null) return;
    setAnsweredIndex(idx);

    const isCorrect = idx === quizData[quizIndex].correct;
    if (isCorrect) {
      playSound('success');
      setCorrectAnswersCount((prev) => {
        const nextCount = prev + 1;
        setQuizScore(Math.round((nextCount / quizData.length) * 100));
        return nextCount;
      });
    } else {
      playSound('fail');
    }
  };

  const handleNextQuiz = () => {
    playSound('click');
    if (quizIndex + 1 < quizData.length) {
      setQuizIndex((prev) => prev + 1);
      setAnsweredIndex(null);
    } else {
      setQuizFinished(true);
      const finalScore = Math.round((correctAnswersCount / quizData.length) * 100);
      const isPassed = finalScore >= 70;
      if (isPassed) {
        playSound('fanfare');
      } else {
        playSound('fail');
      }
    }
  };

  const completedCount = Object.values(completedModules).filter(Boolean).length;

  return (
    <>
      {/* ANIMATED NATURE + TECH BACKGROUND (Komputer Terbang, Bio-Chip, Drone, Daun, Gelembung) */}
      <NatureTechBackground />

      {/* TOP HEADER / APP BAR */}
      {currentView !== 'mulai' && (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-sm transition-all duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('dashboard')}>
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-sky-400 text-white flex items-center justify-center font-display font-bold text-2xl shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
                OS
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-extrabold text-base sm:text-lg text-slate-900 leading-none">OS-Explorer</h1>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-accent-orange border border-amber-200">MPI</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">Menjelajah Jantung Komputer</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2.5">
              <button 
                onClick={handleToggleSound} 
                className="p-2 sm:p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-slate-700 hover:text-brand-600 transition flex items-center gap-1.5 text-xs font-semibold shadow-xs"
                title="Aktifkan / Matikan Efek Suara"
              >
                {soundEnabled ? (
                  <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                ) : (
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>
                )}
                <span className="hidden lg:inline">Suara: {soundEnabled ? 'ON' : 'OFF'}</span>
              </button>

              <button 
                onClick={() => { playSound('click'); setShowHelpModal(true); }}
                className="p-2 sm:p-2.5 rounded-xl border border-sky-200 bg-sky-50 hover:bg-sky-100 text-brand-700 transition flex items-center gap-1.5 text-xs font-bold shadow-xs"
                title="Bantuan & Petunjuk Penggunaan"
              >
                <span className="text-base">🤖</span>
                <span className="hidden sm:inline">Bantuan</span>
              </button>

              <button 
                onClick={() => navigate('dashboard')} 
                className="hidden md:flex px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 transition items-center gap-1.5 shadow-2xs"
                title="Buka Peta Materi (Dashboard)"
              >
                <svg className="w-3.5 h-3.5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                <span>Peta Materi</span>
              </button>
            </div>
          </div>
        </header>
      )}

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex-grow w-full flex flex-col z-10">

        {/* 1. LAYAR MULAI */}
        {currentView === 'mulai' && (
          <section className="scene-fade flex-grow flex flex-col items-center justify-center min-h-[78vh] text-center relative py-6">
            <div className="absolute -top-10 w-96 h-96 bg-brand-300/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6 relative z-10 w-full max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-200 shadow-sm">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
                </span>
                <span className="text-xs font-bold text-brand-700 tracking-wide uppercase">Multimedia Pembelajaran Interaktif (MPI)</span>
              </div>

              {/* Trio Karakter & Visual 3D */}
              <div className="flex items-center justify-center gap-4 sm:gap-8 mx-auto relative">
                {/* 3D Student Penakluk Avatar (Left) */}
                <div className="hidden sm:flex flex-col items-center animate-float-chip group" title="Peserta Didik">
                  <div className="relative">
                    <img 
                      src="/images/3d_student_avatar.png" 
                      alt="Siswa Penakluk Teknologi" 
                      className="w-16 sm:w-20 h-auto object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="absolute -top-2 -left-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm">
                      Siswa 🎓
                    </span>
                  </div>
                </div>

                {/* Byte-Bot Cartoon Mascot (Center) */}
                <div 
                  className="w-36 h-36 sm:w-44 sm:h-44 relative cursor-pointer group shrink-0"
                  onClick={speakWelcomeGreeting}
                  title="Klik Byte-Bot untuk mendengar sambutan suara!"
                >
                  <div className={`w-full h-full transition-transform group-hover:scale-110 ${isSpeakingWelcome ? 'animate-bounce-subtle scale-105' : 'animate-float'}`}>
                    <svg viewBox="0 0 200 200" className={`w-full h-full drop-shadow-xl transition-all ${isSpeakingWelcome ? 'filter drop-shadow-[0_0_15px_rgba(255,122,0,0.6)]' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="96" y="16" width="8" height="22" rx="4" fill="#0EA5E9"/>
                      <circle cx="100" cy="14" r="10" fill={isSpeakingWelcome ? "#FF7A00" : "#FF7A00"} stroke="#FFFFFF" strokeWidth="3" className={isSpeakingWelcome ? "animate-ping opacity-75 origin-center" : ""}/>
                      <circle cx="100" cy="14" r="10" fill="#FF7A00" stroke="#FFFFFF" strokeWidth="3"/>
                      <rect x="36" y="36" width="128" height="104" rx="28" fill="#FFFFFF" stroke={isSpeakingWelcome ? "#FF7A00" : "#0EA5E9"} strokeWidth="7" className="transition-colors duration-300"/>
                      <rect x="48" y="48" width="104" height="80" rx="18" fill={isSpeakingWelcome ? "#FFFBEB" : "#F0F9FF"} className="transition-colors duration-300"/>
                      <circle cx="78" cy="80" r="10" fill="#0284C7"/>
                      <circle cx="122" cy="80" r="10" fill="#0284C7"/>
                      <circle cx="81" cy="77" r="3.5" fill="#FFFFFF"/>
                      <circle cx="125" cy="77" r="3.5" fill="#FFFFFF"/>
                      {isSpeakingWelcome ? (
                        <ellipse cx="100" cy="102" rx="12" ry="7" fill="#FF7A00" className="animate-pulse" />
                      ) : (
                        <path d="M86 98 Q100 114 114 98" stroke="#FF7A00" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
                      )}
                      <ellipse cx="64" cy="94" rx="6" ry="3.5" fill="#FCA5A5" opacity="0.7"/>
                      <ellipse cx="136" cy="94" rx="6" ry="3.5" fill="#FCA5A5" opacity="0.7"/>
                      <rect x="22" y="66" width="14" height="44" rx="7" fill="#FF7A00"/>
                      <rect x="164" y="66" width="14" height="44" rx="7" fill="#FF7A00"/>
                      <path d="M78 140 L122 140 L130 162 L70 162 Z" fill="#0284C7"/>
                      <rect x="55" y="160" width="90" height="14" rx="7" fill="#38BDF8"/>
                      <circle cx="100" cy="167" r="3" fill="#FFFFFF"/>
                    </svg>
                  </div>

                  {/* Speech Bubble */}
                  <div 
                    onClick={(e) => { e.stopPropagation(); speakWelcomeGreeting(); }}
                    className={`absolute -top-3 -right-6 sm:-right-8 font-bold px-3 py-1.5 rounded-2xl shadow-md border-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSpeakingWelcome
                        ? 'bg-gradient-to-r from-accent-orange to-amber-500 text-white border-white scale-105 animate-pulse text-xs'
                        : 'bg-white border-accent-orange text-slate-800 text-[11px] hover:bg-orange-50 animate-bounce-subtle'
                    }`}
                  >
                    <span>{isSpeakingWelcome ? '🎙️' : '👋'}</span>
                    <span>{isSpeakingWelcome ? 'Sedang Menyapa...' : 'Halo! Aku Byte-Bot! 🔊'}</span>
                  </div>
                </div>

                {/* 3D Cloud Server Monitor Visual (Right) */}
                <div className="hidden sm:flex flex-col items-center animate-float-chip-delayed group" title="Arsitektur OS">
                  <div className="relative">
                    <img 
                      src="/images/3d_monitor_cloud.png" 
                      alt="Cloud OS Network Monitor" 
                      className="w-20 sm:w-24 h-auto object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm">
                      Kernel ☁️
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
                  OS-Explorer: <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-sky-500 to-accent-orange">Menjelajah Jantung Komputer</span>
                </h1>
                <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                  Pelajari bagaimana Sistem Operasi mengelola prosesor, memori, dan aplikasi melalui simulasi visual yang interaktif.
                </p>
              </div>

              {/* Spoken Welcome Voice Button */}
              <div className="pt-2 flex flex-col items-center justify-center">
                <button
                  onClick={speakWelcomeGreeting}
                  className={`btn-bounce px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 border-2 ${
                    isSpeakingWelcome
                      ? 'bg-gradient-to-r from-amber-500 to-accent-orange text-white border-white ring-4 ring-amber-400/40 shadow-orange-500/30 animate-pulse'
                      : 'bg-white hover:bg-amber-50/80 text-slate-800 border-amber-300 hover:border-accent-orange shadow-amber-500/10'
                  }`}
                  title="Putar Sambutan Suara Byte-Bot"
                >
                  <span className="text-base">{isSpeakingWelcome ? '🎙️' : '🔊'}</span>
                  <span>{isSpeakingWelcome ? 'Byte-Bot Sedang Menyapa...' : 'Putar Sambutan Suara'}</span>
                  {isSpeakingWelcome && (
                    <span className="flex items-center gap-1 ml-1">
                      <span className="w-1.5 h-3 bg-white rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-5 bg-white rounded-full animate-bounce [animation-delay:0.15s]"></span>
                      <span className="w-1.5 h-2.5 bg-white rounded-full animate-bounce [animation-delay:0.3s]"></span>
                    </span>
                  )}
                </button>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <button 
                  onClick={() => navigate('tp')}
                  className="btn-bounce w-full sm:w-auto px-6 py-4 bg-white text-slate-800 border-2 border-slate-200 hover:border-brand-400 font-bold text-base rounded-2xl shadow-sm hover:bg-sky-50/50 transition-all flex items-center justify-center gap-2.5"
                >
                  <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                  Tujuan Pembelajaran
                </button>

                <button 
                  onClick={() => navigate('dashboard')}
                  className="btn-bounce w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-accent-orange to-amber-500 hover:from-accent-orangeHover hover:to-amber-600 text-white font-extrabold text-lg rounded-2xl shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-3 group"
                >
                  <span className="px-2.5 py-0.5 bg-white/25 rounded-lg text-xs font-mono font-black tracking-wider uppercase border border-white/30 shadow-inner">
                    START 🏁
                  </span>
                  <span>Mulai Belajar!</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </button>
              </div>

              {/* 3D Element Showcase Grid */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-2xl mx-auto w-full">
                <div className="card-tech rounded-2xl p-3.5 flex flex-col items-center text-center group hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 flex items-center justify-center mb-1.5">
                    <img 
                      src="/images/3d_retro_pc.png" 
                      alt="Komputer Desktop" 
                      className="w-12 h-12 object-contain group-hover:scale-110 transition-transform drop-shadow-sm" 
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Komputer Desktop</span>
                </div>

                <div className="card-tech rounded-2xl p-3.5 flex flex-col items-center text-center group hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 flex items-center justify-center mb-1.5">
                    <img 
                      src="/images/3d_laptop_code.png" 
                      alt="Laptop Development" 
                      className="w-12 h-12 object-contain group-hover:scale-110 transition-transform drop-shadow-sm" 
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Laptop Komputer</span>
                </div>

                <div className="card-tech rounded-2xl p-3.5 flex flex-col items-center text-center group hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 flex items-center justify-center mb-1.5">
                    <img 
                      src="/images/3d_smartphone.png" 
                      alt="Mobile OS Smartphone" 
                      className="w-10 h-12 object-contain group-hover:scale-110 transition-transform drop-shadow-sm" 
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Mobile Smartphone</span>
                </div>

                <div className="card-tech rounded-2xl p-3.5 flex flex-col items-center text-center group hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 flex items-center justify-center mb-1.5">
                    <img 
                      src="/images/3d_data_funnel.png" 
                      alt="Manajemen Sumber Daya" 
                      className="w-11 h-12 object-contain group-hover:scale-110 transition-transform drop-shadow-sm" 
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Manajemen Sumber Daya</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-center gap-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5"><span className="text-amber-500">★</span> 5 Modul Tematik</span>
                <span className="flex items-center gap-1.5"><span className="text-brand-500">●</span> Kuis & Simulasi</span>
                <span className="flex items-center gap-1.5"><span className="text-emerald-500">✔</span> Sertifikat Kelulusan</span>
              </div>
            </div>
          </section>
        )}

        {/* 2. LAYAR TUJUAN PEMBELAJARAN (TP) */}
        {currentView === 'tp' && (
          <section className="scene-fade flex-grow w-full max-w-4xl mx-auto py-4 space-y-6">
            <div className="text-center space-y-3">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest bg-sky-100 text-brand-700 border border-sky-200 uppercase">
                Capaian Pembelajaran
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900">
                Tujuan <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-sky-500">Pembelajaran</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Kompetensi yang akan dicapai setelah mempelajari materi OS-Explorer:
              </p>
            </div>

            {/* Hero Roadmap Banner */}
            <div className="card-tech rounded-3xl p-5 sm:p-6 bg-gradient-to-r from-sky-50 via-white to-amber-50/60 border-2 border-sky-200/80 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
              <div className="w-36 sm:w-44 shrink-0 flex items-center justify-center">
                <img 
                  src="/images/isometric_analytics.png" 
                  alt="Analisis Kurikulum & Target Kompetensi" 
                  className="w-full h-auto object-contain drop-shadow-md hover:scale-105 transition-transform"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-brand-100 text-brand-800 border border-brand-200">
                  <span>🎯</span> Target Kompetensi
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  Kuasai Konsep Sistem Komputer dari Teori hingga Praktik Nyata
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Memadukan simulator interaktif dan animasi visual untuk memahami cara kerja sistem operasi secara mendalam.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="card-tech rounded-3xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center shrink-0 text-xl font-bold shadow-xs">
                  <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Modul 1</span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-1">Memahami Konsep & Tujuan OS</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Memahami peran OS sebagai penghubung antara perangkat keras, aplikasi, dan pengguna.
                  </p>
                </div>
              </div>

              <div className="card-tech rounded-3xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-500 flex items-center justify-center shrink-0 text-xl font-bold shadow-xs">
                  <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Modul 2</span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-1">Mengidentifikasi Karakteristik OS</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Mengidentifikasi 4 karakteristik utama: <em>Concurrency</em>, <em>Resource Sharing</em>, <em>Virtualization</em>, dan <em>Asynchrony</em>.
                  </p>
                </div>
              </div>

              <div className="card-tech rounded-3xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 text-xl font-bold shadow-xs">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Modul 3</span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-1">Menganalisis 4 Fungsi Utama OS</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Menganalisis pengelolaan prosesor (CPU), memori (RAM), sistem berkas, dan perangkat I/O.
                  </p>
                </div>
              </div>

              <div className="card-tech rounded-3xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0 text-xl font-bold shadow-xs">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Modul 4</span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-1">Mengklasifikasikan Jenis Sistem Operasi</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Mengklasifikasikan jenis OS: Batch, Time-sharing, Distributed, Network, dan RTOS.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 card-tech rounded-3xl p-5 flex items-start sm:items-center gap-4 bg-gradient-to-r from-white via-sky-50/40 to-white">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center shrink-0 text-xl font-bold shadow-xs">
                  <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Modul 5 & Evaluasi</span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-1">Komparasi Desktop vs Mobile & Evaluasi Mandiri</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Membandingkan Desktop vs Mobile OS serta menguji pemahaman melalui evaluasi kuis (KKM <strong className="text-accent-orange font-bold">70</strong>) untuk meraih Sertifikat OS-Explorer.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 pt-6 mt-8">
              <button 
                onClick={() => navigate('mulai')} 
                className="btn-bounce px-5 py-3 rounded-2xl bg-white border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition flex items-center gap-2 shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                Kembali
              </button>
              <button 
                onClick={() => navigate('dashboard')} 
                className="btn-bounce px-7 py-3 rounded-2xl bg-gradient-to-r from-accent-orange to-amber-500 hover:from-accent-orangeHover hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition flex items-center gap-2"
              >
                Lanjut ke Peta Materi
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </section>
        )}

        {/* 3. LAYAR PETA MATERI (Dashboard) */}
        {currentView === 'dashboard' && (
          <section className="scene-fade flex-grow w-full max-w-5xl mx-auto py-4 space-y-6">
            <div className="banner-vivid-blue rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white/15 backdrop-blur-md p-1.5 flex items-center justify-center shrink-0 border border-white/20 shadow-inner">
                    <img 
                      src="/images/dila/dila_student_work.png" 
                      alt="Siswa Menjelajah Sistem Operasi" 
                      className="w-full h-full object-contain drop-shadow-md" 
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-black bg-sky-950/40 text-amber-300 border border-amber-300/40 uppercase tracking-wider shadow-sm">
                      Peta Misi OS-Explorer
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white drop-shadow-md">Pilih Wilayah Penjelajahan Komputer</h2>
                    <p className="text-sky-50 text-xs sm:text-sm max-w-xl font-medium leading-relaxed drop-shadow-xs">
                      Pilih modul materi di bawah ini atau pelajari secara berurutan.
                    </p>
                  </div>
                </div>

                <div className="bg-sky-950/40 backdrop-blur-md border border-sky-300/50 rounded-2xl p-4 text-center shrink-0 flex items-center gap-4 shadow-md">
                  <div>
                    <div className="text-2xl font-black text-white">{completedCount} / 5</div>
                    <div className="text-[11px] text-sky-100 font-bold">Modul Selesai</div>
                  </div>
                  <div className="h-10 w-[1px] bg-sky-300/30"></div>
                  <div>
                    <div className="text-2xl font-black text-amber-300 drop-shadow-sm">Kuis: Siap</div>
                    <div className="text-[11px] text-sky-100 font-bold">KKM Nilai 70</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Modul 1 */}
              <div onClick={() => navigate('modul1')} className="card-tech rounded-3xl p-6 cursor-pointer group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-10 h-10 rounded-2xl bg-sky-100 text-brand-600 font-bold flex items-center justify-center text-sm shadow-xs group-hover:bg-brand-500 group-hover:text-white transition">
                        01
                      </span>
                      <img src="/images/3d_retro_pc.png" alt="Modul 1 PC" className="w-9 h-9 object-contain drop-shadow-xs group-hover:scale-110 transition-transform" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${completedModules.modul1 ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                      {completedModules.modul1 ? 'Selesai ✓' : 'Belum Dibuka'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition">Pengertian & Peran OS</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Konsep dasar, analogi konduktor orkestra, dan arsitektur perantara OS.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs font-bold text-brand-600">
                  <span>Buka Modul 1</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Modul 2 */}
              <div onClick={() => navigate('modul2')} className="card-tech rounded-3xl p-6 cursor-pointer group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 font-bold flex items-center justify-center text-sm shadow-xs group-hover:bg-amber-500 group-hover:text-white transition">
                        02
                      </span>
                      <img src="/images/3d_data_funnel.png" alt="Modul 2 Sharing" className="w-9 h-9 object-contain drop-shadow-xs group-hover:scale-110 transition-transform" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${completedModules.modul2 ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                      {completedModules.modul2 ? 'Selesai ✓' : 'Belum Dibuka'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition">Karakteristik OS</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    4 pilar utama: Concurrency, Sharing, Virtualization, dan Asynchrony.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs font-bold text-amber-600">
                  <span>Buka Modul 2</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Modul 3 */}
              <div onClick={() => navigate('modul3')} className="card-tech rounded-3xl p-6 cursor-pointer group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 font-bold flex items-center justify-center text-sm shadow-xs group-hover:bg-emerald-500 group-hover:text-white transition">
                        03
                      </span>
                      <img src="/images/isometric_system_board.png" alt="Modul 3 Board" className="w-10 h-9 object-contain drop-shadow-xs group-hover:scale-110 transition-transform" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${completedModules.modul3 ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                      {completedModules.modul3 ? 'Selesai ✓' : 'Belum Dibuka'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">Fungsi Utama OS</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Pengendalian prosesor, alokasi memori RAM, sistem berkas (file), dan keamanan.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs font-bold text-emerald-600">
                  <span>Buka Modul 3</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Modul 4 */}
              <div onClick={() => navigate('modul4')} className="card-tech rounded-3xl p-6 cursor-pointer group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-sm shadow-xs group-hover:bg-indigo-500 group-hover:text-white transition">
                        04
                      </span>
                      <img src="/images/cloud_architecture.png" alt="Modul 4 Network" className="w-9 h-9 object-contain drop-shadow-xs group-hover:scale-110 transition-transform" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${completedModules.modul4 ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                      {completedModules.modul4 ? 'Selesai ✓' : 'Belum Dibuka'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition">Jenis-Jenis OS</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Dari Batch System, Time-sharing, Distributed, Network, hingga Real-Time OS.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs font-bold text-indigo-600">
                  <span>Buka Modul 4</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Modul 5 */}
              <div onClick={() => navigate('modul5')} className="card-tech rounded-3xl p-6 cursor-pointer group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 font-bold flex items-center justify-center text-sm shadow-xs group-hover:bg-rose-500 group-hover:text-white transition">
                        05
                      </span>
                      <img src="/images/3d_smartphone.png" alt="Modul 5 Mobile" className="w-7 h-9 object-contain drop-shadow-xs group-hover:scale-110 transition-transform" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${completedModules.modul5 ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                      {completedModules.modul5 ? 'Selesai ✓' : 'Belum Dibuka'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition">Desktop vs Mobile</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Perbandingan arsitektur mouse vs touchscreen, efisiensi daya, dan manajemen aplikasi.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs font-bold text-rose-600">
                  <span>Buka Modul 5</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Kuis Highlighted */}
              <div onClick={() => navigate('kuis')} className="card-tech rounded-3xl p-6 cursor-pointer group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between border-2 border-amber-400 bg-gradient-to-br from-amber-50/70 to-orange-50/60 shadow-lg shadow-amber-500/10">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-10 h-10 rounded-2xl bg-accent-orange text-white font-bold flex items-center justify-center text-base shadow-md group-hover:scale-110 transition">
                        🏆
                      </span>
                      <img src="/images/3d_monitor_cloud.png" alt="Evaluasi Kuis" className="w-9 h-9 object-contain drop-shadow-xs group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-accent-orange text-white">Evaluasi</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-accent-orangeHover transition">Kuis Evaluasi & Simulasi</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Uji pemahamanmu! Raih nilai &ge; 70 untuk mencetak Sertifikat Kelulusan resmi OS-Explorer.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs font-extrabold text-accent-orange">
                  <span>Mulai Kuis Sekarang</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 pt-6 mt-8">
              <button 
                onClick={() => navigate('tp')} 
                className="btn-bounce px-5 py-3 rounded-2xl bg-white border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition flex items-center gap-2 shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                Tujuan Pembelajaran
              </button>
              <button 
                onClick={() => navigate('modul1')} 
                className="btn-bounce px-7 py-3 rounded-2xl bg-gradient-to-r from-accent-orange to-amber-500 hover:from-accent-orangeHover hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition flex items-center gap-2"
              >
                Mulai Modul 1
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </section>
        )}

        {/* 4. MODUL 1: PENGERTIAN & PERAN OS */}
        {currentView === 'modul1' && (
          <section className="scene-fade flex-grow w-full max-w-4xl mx-auto py-4 space-y-6">
            <div className="flex items-center justify-between border-b border-sky-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-brand-500 text-white flex items-center justify-center font-display font-bold text-lg shadow-md shadow-brand-500/20">1</span>
                <div>
                  <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Modul Dasar</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Pengertian & Peran Sistem Operasi</h2>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-brand-700 border border-sky-200">Layar 1 dari 5</span>
            </div>

            <div className="card-tech rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="w-full bg-gradient-to-b from-sky-50/60 to-white rounded-2xl p-6 border border-sky-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <h4 className="text-xs font-bold text-brand-700 uppercase tracking-widest mb-4">Diagram Arsitektur Perantara OS</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center w-full max-w-2xl">
                  {/* Layer 1: User & Aplikasi */}
                  <div className="bg-white border-2 border-indigo-200 rounded-2xl p-4 shadow-sm flex flex-col items-center group hover:border-indigo-400 transition-all">
                    <div className="w-20 h-20 flex items-center justify-center mb-2">
                      <img 
                        src="/images/3d_user_desktop.png" 
                        alt="User & Aplikasi" 
                        className="w-18 h-18 object-contain drop-shadow-md group-hover:scale-105 transition-transform" 
                      />
                    </div>
                    <h5 className="text-xs font-bold text-slate-800">User & Aplikasi</h5>
                    <p className="text-[11px] text-slate-500 mt-1">Browser, Game, Office, Pemutar Musik</p>
                  </div>

                  {/* Layer 2: Sistem Operasi (Tengah) */}
                  <div className="bg-gradient-to-tr from-brand-600 to-sky-400 text-white rounded-2xl p-5 shadow-lg shadow-sky-500/30 flex flex-col items-center relative animate-bounce-subtle">
                    <div className="w-20 h-20 flex items-center justify-center mb-2">
                      <img 
                        src="/images/3d_monitor_cloud.png" 
                        alt="Sistem Operasi" 
                        className="w-18 h-18 object-contain drop-shadow-lg" 
                      />
                    </div>
                    <h5 className="text-sm font-extrabold">SISTEM OPERASI</h5>
                    <span className="text-[10px] text-sky-100 font-semibold mt-1">Jembatan & Manajer Inti</span>
                    <div className="mt-2 flex gap-1 text-[9px] bg-white/20 px-2 py-0.5 rounded-full font-mono">
                      <span>KERNEL</span> • <span>DRIVER</span>
                    </div>
                  </div>

                  {/* Layer 3: Perangkat Keras */}
                  <div className="bg-white border-2 border-amber-200 rounded-2xl p-4 shadow-sm flex flex-col items-center group hover:border-amber-400 transition-all">
                    <div className="w-20 h-20 flex items-center justify-center gap-1 mb-2">
                      <img 
                        src="/images/dila/dila_cpu_chip.png" 
                        alt="Perangkat Keras CPU Processor" 
                        className="w-14 h-14 object-cover rounded-lg drop-shadow-md group-hover:scale-105 transition-transform" 
                      />
                      <img 
                        src="/images/3d_mouse.png" 
                        alt="Hardware Mouse" 
                        className="w-8 h-8 object-contain drop-shadow-xs" 
                      />
                    </div>
                    <h5 className="text-xs font-bold text-slate-800">Perangkat Keras</h5>
                    <p className="text-[11px] text-slate-500 mt-1">CPU, RAM, Harddisk/SSD, Monitor, Mouse</p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mt-4 max-w-lg">
                  💡 OS bertindak sebagai <strong>manajer sumber daya</strong> yang mengatur permintaan aplikasi ke perangkat keras secara adil dan aman.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-sky-50/50 border border-sky-100 space-y-2">
                  <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span>📖</span> Hakikat Sistem Operasi
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <strong>Sistem Operasi (Operating System / OS)</strong> adalah perangkat lunak utama yang mengelola perangkat keras dan menyediakan layanan bagi seluruh aplikasi. Tanpa OS, komputer tidak dapat menjalankan program aplikasi apa pun.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-1.5">
                    <div className="text-xl">🎼 <strong className="text-sm text-slate-900">Analogi Konduktor Musik</strong></div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      OS ibarat dirigen orkestra yang mengatur pemain biola (CPU), drum (RAM), dan trompet (Storage) agar menghasilkan alunan lagu harmonis tanpa benturan nada.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-1.5">
                    <div className="text-xl">🏛️ <strong className="text-sm text-slate-900">Peran Pokok OS</strong></div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mengalokasikan sumber daya fisik (CPU & RAM), menyediakan antarmuka sistem yang aman, serta mencegah benturan antar-aplikasi.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <h4 className="font-bold text-slate-900 text-sm mb-3">Tiga Tujuan Utama Sistem Operasi:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-lg">🛋️</span>
                      <div className="text-xs font-bold text-slate-800 mt-1">Convenience</div>
                      <div className="text-[11px] text-slate-500">Kemudahan & kenyamanan bagi pengguna.</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-lg">⚡</span>
                      <div className="text-xs font-bold text-slate-800 mt-1">Efficiency</div>
                      <div className="text-[11px] text-slate-500">Pemanfaatan daya CPU dan RAM secara optimal.</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-lg">🌱</span>
                      <div className="text-xs font-bold text-slate-800 mt-1">Ability to Evolve</div>
                      <div className="text-[11px] text-slate-500">Dapat diperbarui tanpa mengganggu fungsi yang ada.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 pt-6 mt-8">
              <button 
                onClick={() => navigate('dashboard')} 
                className="btn-bounce px-5 py-3 rounded-2xl bg-white border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition flex items-center gap-2 shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                Peta Materi
              </button>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-brand-500"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              </div>
              <button 
                onClick={() => navigate('modul2')} 
                className="btn-bounce px-7 py-3 rounded-2xl bg-gradient-to-r from-accent-orange to-amber-500 hover:from-accent-orangeHover hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition flex items-center gap-2"
              >
                Lanjut: Modul 2
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </section>
        )}

        {/* 5. MODUL 2: KARAKTERISTIK OS */}
        {currentView === 'modul2' && (
          <section className="scene-fade flex-grow w-full max-w-4xl mx-auto py-4 space-y-6">
            <div className="flex items-center justify-between border-b border-sky-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-display font-bold text-lg shadow-md shadow-amber-500/20">2</span>
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Modul Inti</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Karakteristik Utama Sistem Operasi</h2>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">Layar 2 dari 5</span>
            </div>

            <div className="card-tech rounded-3xl p-6 sm:p-8 space-y-6">
              <p className="text-sm text-slate-600">
                4 karakteristik utama sistem operasi modern:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pilar 1 */}
                <div className="p-5 rounded-2xl border-2 border-brand-200 bg-sky-50/50 hover:bg-sky-50 transition space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center text-xl shadow-xs">
                          🔀
                        </span>
                        <img src="/images/3d_laptop_code.png" alt="Multitasking Code" className="w-9 h-9 object-contain drop-shadow-xs" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 uppercase">Pilar 1</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">Concurrency (Multitasking)</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Kemampuan OS mengeksekusi banyak proses secara bersamaan melalui pembagian irisan waktu yang cepat (time slicing).
                    </p>
                    <div className="text-[11px] font-semibold text-brand-700 bg-white/80 p-2.5 rounded-xl border border-sky-100">
                      💡 Contoh: Mengetik tugas di Word sambil mendengarkan musik di Spotify dan mengunduh berkas.
                    </div>
                  </div>
                  <button 
                    onClick={() => openSimulation('concurrency')}
                    className="btn-bounce w-full mt-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-brand-600 to-sky-500 hover:from-brand-700 hover:to-sky-600 text-white font-bold text-xs shadow-md shadow-sky-500/20 flex items-center justify-center gap-2"
                  >
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">▶</span>
                    <span>Tonton Simulasi Multitasking 🎬</span>
                  </button>
                </div>

                {/* Pilar 2 */}
                <div className="p-5 rounded-2xl border-2 border-amber-200 bg-amber-50/50 hover:bg-amber-50 transition space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-xl shadow-xs">
                          🤝
                        </span>
                        <img src="/images/3d_data_funnel.png" alt="Resource Funnel" className="w-9 h-9 object-contain drop-shadow-xs" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 uppercase">Pilar 2</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">Resource Sharing (Berbagi Sumber Daya)</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Aplikasi dan pengguna dapat memakai perangkat keras yang sama (RAM, printer, GPU) secara aman tanpa konflik.
                    </p>
                    <div className="text-[11px] font-semibold text-amber-800 bg-white/80 p-2.5 rounded-xl border border-amber-100">
                      💡 Contoh: Satu printer di lab komputer dapat menerima antrean cetak dari banyak laptop sekaligus.
                    </div>
                  </div>
                  <button 
                    onClick={() => openSimulation('sharing')}
                    className="btn-bounce w-full mt-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs shadow-md shadow-orange-500/20 flex items-center justify-center gap-2"
                  >
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">▶</span>
                    <span>Tonton Simulasi Berbagi Printer 🎬</span>
                  </button>
                </div>

                {/* Pilar 3 */}
                <div className="p-5 rounded-2xl border-2 border-purple-200 bg-purple-50/50 hover:bg-purple-50 transition space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-10 h-10 rounded-xl bg-purple-500 text-white flex items-center justify-center text-xl shadow-xs">
                          🔮
                        </span>
                        <img src="/images/server_rack_stack.png" alt="Virtualization Server Racks" className="w-10 h-9 object-contain drop-shadow-xs" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 uppercase">Pilar 3</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">Virtualization (Virtualisasi)</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      OS menyembunyikan kompleksitas fisik perangkat keras dan menyajikan abstraksi virtual yang seragam bagi aplikasi.
                    </p>
                    <div className="text-[11px] font-semibold text-purple-800 bg-white/80 p-2.5 rounded-xl border border-purple-100">
                      💡 Contoh: Memori Virtual (Virtual Memory), memanfaatkan ruang disk sebagai perluasan kapasitas RAM.
                    </div>
                  </div>
                  <button 
                    onClick={() => openSimulation('virtualization')}
                    className="btn-bounce w-full mt-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-purple-500/20 flex items-center justify-center gap-2"
                  >
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">▶</span>
                    <span>Tonton Simulasi Memori Virtual 🎬</span>
                  </button>
                </div>

                {/* Pilar 4 */}
                <div className="p-5 rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 transition space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-xl shadow-xs">
                          ⚡
                        </span>
                        <img src="/images/3d_mouse.png" alt="Interrupt Hardware Input" className="w-8 h-9 object-contain drop-shadow-xs" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 uppercase">Pilar 4</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">Asynchrony (Aktivitas Asinkron)</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      OS mampu menangani interupsi mendadak (seperti klik mouse) secara instan tanpa menghentikan pemrosesan utama.
                    </p>
                    <div className="text-[11px] font-semibold text-emerald-800 bg-white/80 p-2.5 rounded-xl border border-emerald-100">
                      💡 Contoh: Menggerakkan kursor mouse atau mengklik tombol saat pemutaran video berjalan lancar.
                    </div>
                  </div>
                  <button 
                    onClick={() => openSimulation('asynchrony')}
                    className="btn-bounce w-full mt-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2"
                  >
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">▶</span>
                    <span>Tonton Simulasi Interupsi Video 🎬</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 pt-6 mt-8">
              <button 
                onClick={() => navigate('modul1')} 
                className="btn-bounce px-5 py-3 rounded-2xl bg-white border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition flex items-center gap-2 shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                Modul 1
              </button>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              </div>
              <button 
                onClick={() => navigate('modul3')} 
                className="btn-bounce px-7 py-3 rounded-2xl bg-gradient-to-r from-accent-orange to-amber-500 hover:from-accent-orangeHover hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition flex items-center gap-2"
              >
                Lanjut: Modul 3
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </section>
        )}

        {/* 6. MODUL 3: FUNGSI UTAMA OS */}
        {currentView === 'modul3' && (
          <section className="scene-fade flex-grow w-full max-w-4xl mx-auto py-4 space-y-6">
            <div className="flex items-center justify-between border-b border-sky-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-display font-bold text-lg shadow-md shadow-emerald-500/20">3</span>
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Modul Fungsional</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">4 Fungsi Utama Sistem Operasi</h2>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Layar 3 dari 5</span>
            </div>

            <div className="card-tech rounded-3xl p-6 sm:p-8 space-y-6">
              {/* Architecture Motherboard Banner */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50/70 via-sky-50/60 to-white border-2 border-emerald-200/80 flex flex-col sm:flex-row items-center gap-6 shadow-xs">
                <div className="w-36 sm:w-44 shrink-0 flex items-center justify-center">
                  <img 
                    src="/images/isometric_system_board.png" 
                    alt="Arsitektur Komponen Fisik & Sistem Operasi" 
                    className="w-full h-auto object-contain drop-shadow-md hover:scale-105 transition-transform" 
                  />
                </div>
                <div className="space-y-1.5 text-center sm:text-left">
                  <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300 uppercase tracking-wider">
                    Arsitektur Kernel & Hardware
                  </span>
                  <h4 className="text-base sm:text-lg font-extrabold text-slate-900">
                    Pusat Sinkronisasi CPU, Memori, dan Penyimpanan
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sistem Operasi mengoordinasikan interaksi antara hardware dan software melalui 4 fungsi utama:
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* 1. CPU Scheduling */}
                <div className="p-5 rounded-2xl border border-slate-200 hover:border-purple-300 bg-white shadow-xs space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-2 flex-grow">
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-lg shrink-0">
                          🧠
                        </span>
                        <div>
                          <h3 className="font-bold text-slate-900 text-base">1. Manajemen Proses (CPU Scheduling)</h3>
                          <span className="text-[11px] font-semibold text-purple-600">Alokasi Waktu Komputasi</span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 pl-0 sm:pl-12 leading-relaxed">
                        Mengatur siapa yang berhak menggunakan CPU, berapa milidetik setiap program boleh berjalan, dan menjamin tidak ada program yang membuat sistem membeku (deadlock).
                      </p>
                    </div>
                    <div className="w-full sm:w-44 h-24 rounded-xl overflow-hidden border border-purple-200 bg-purple-50 shrink-0 shadow-xs group">
                      <img 
                        src="/images/dila/dila_cpu_chip.png" 
                        alt="Prosesor CPU Microprocessor" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                      />
                    </div>
                  </div>
                </div>

                {/* 2. RAM Allocation */}
                <div className="p-5 rounded-2xl border border-slate-200 hover:border-sky-300 bg-white shadow-xs space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-2 flex-grow">
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded-xl bg-sky-100 text-brand-600 flex items-center justify-center text-lg shrink-0">
                          💾
                        </span>
                        <div>
                          <h3 className="font-bold text-slate-900 text-base">2. Manajemen Memori Utama (RAM Allocation)</h3>
                          <span className="text-[11px] font-semibold text-brand-600">Ruang Kerja Sementara</span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 pl-0 sm:pl-12 leading-relaxed">
                        Melacak byte memori mana yang sedang dipakai, mencadangkan ruang saat aplikasi dibuka, serta segera membersihkannya (deallocation) saat aplikasi ditutup agar RAM tidak bocor (memory leak).
                      </p>
                    </div>
                    <div className="w-full sm:w-44 h-24 rounded-xl overflow-hidden border border-sky-200 bg-sky-50 shrink-0 shadow-xs flex items-center justify-center p-2 group">
                      <img 
                        src="/images/dila/dila_ram_module.png" 
                        alt="Modul Memori RAM" 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                      />
                    </div>
                  </div>
                </div>

                {/* 3. File System */}
                <div className="p-5 rounded-2xl border border-slate-200 hover:border-amber-300 bg-white shadow-xs space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-lg">
                      📁
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">3. Manajemen Sistem Berkas (File System) & Instalasi</h3>
                      <span className="text-[11px] font-semibold text-amber-600">Organisasi Data di Harddisk/SSD</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-12 leading-relaxed">
                    Menata jutaan file dalam folder/direktori terstruktur (NTFS, FAT32, ext4, APFS), mengontrol izin hak akses (baca/tulis), dan menjamin data tersimpan aman.
                  </p>

                  {/* Software Install Wizard Real Example */}
                  <div className="ml-0 sm:ml-12 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-4">
                    <img 
                      src="/images/install_wizard.png" 
                      alt="Software Install Wizard" 
                      className="w-32 sm:w-36 h-auto object-contain border border-slate-300 rounded shadow-xs shrink-0" 
                    />
                    <div className="text-xs text-slate-600 space-y-1 text-center sm:text-left">
                      <strong className="text-slate-900">Contoh: Software Install Wizard</strong>
                      <p className="leading-relaxed">Saat instalasi aplikasi baru, OS memeriksa ruang penyimpanan bebas, menyalin file program, dan mengonfigurasi izin akses keamanan.</p>
                    </div>
                  </div>
                </div>

                {/* 4. Security & Device Drivers */}
                <div className="p-5 rounded-2xl border border-slate-200 hover:border-rose-300 bg-white shadow-xs space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-2 flex-grow">
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-lg shrink-0">
                          🛡️
                        </span>
                        <div>
                          <h3 className="font-bold text-slate-900 text-base">4. Manajemen Perangkat I/O & Keamanan Sistem</h3>
                          <span className="text-[11px] font-semibold text-rose-600">Device Drivers & User Access</span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 pl-0 sm:pl-12 leading-relaxed">
                        Menghubungkan komputer dengan printer, webcam, atau flashdisk melalui <em>Device Driver</em>, serta menjaga privasi akun melalui proteksi password dan hak akses admin (root).
                      </p>
                    </div>
                    <div className="w-full sm:w-44 h-24 rounded-xl overflow-hidden border border-rose-200 bg-rose-50 shrink-0 shadow-xs flex items-center justify-center p-2 group">
                      <img 
                        src="/images/dila/dila_security_auth.png" 
                        alt="Keamanan Sistem & Otentikasi Pengguna" 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 pt-6 mt-8">
              <button 
                onClick={() => navigate('modul2')} 
                className="btn-bounce px-5 py-3 rounded-2xl bg-white border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition flex items-center gap-2 shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                Modul 2
              </button>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              </div>
              <button 
                onClick={() => navigate('modul4')} 
                className="btn-bounce px-7 py-3 rounded-2xl bg-gradient-to-r from-accent-orange to-amber-500 hover:from-accent-orangeHover hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition flex items-center gap-2"
              >
                Lanjut: Modul 4
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </section>
        )}

        {/* 7. MODUL 4: JENIS-JENIS OS */}
        {currentView === 'modul4' && (
          <section className="scene-fade flex-grow w-full max-w-4xl mx-auto py-4 space-y-6">
            <div className="flex items-center justify-between border-b border-sky-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-indigo-500 text-white flex items-center justify-center font-display font-bold text-lg shadow-md shadow-indigo-500/20">4</span>
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Modul Klasifikasi</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Jenis-Jenis Sistem Operasi</h2>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">Layar 4 dari 5</span>
            </div>

            <div className="card-tech rounded-3xl p-6 sm:p-8 space-y-6">
              <p className="text-sm text-slate-600">
                Berdasarkan arsitektur dan kebutuhan komputasinya, Sistem Operasi dikelompokkan ke dalam beberapa jenis utama:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Batch Processing OS */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3 flex flex-col justify-between group hover:border-slate-400 transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center text-sm font-bold shrink-0">1</div>
                      <h3 className="font-bold text-base text-slate-900">Batch Processing OS</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Tugas serupa dikumpulkan dalam satu kelompok (batch) lalu diproses berurutan tanpa interaksi langsung pengguna saat program berjalan.
                    </p>
                  </div>
                  <div className="w-full h-36 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center p-1.5 shadow-xs">
                    <img 
                      src="/images/dila/dila_batch_os.png" 
                      alt="Diagram Alur Batch Processing OS" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                    />
                  </div>
                </div>

                {/* 2. Time-Sharing / Multitasking */}
                <div className="p-5 rounded-2xl border border-brand-200 bg-sky-50/50 shadow-xs space-y-3 flex flex-col justify-between group hover:border-brand-400 transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-500 text-white flex items-center justify-center text-sm font-bold shrink-0">2</div>
                      <h3 className="font-bold text-base text-slate-900">Time-Sharing / Multitasking</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Membagi waktu CPU ke banyak pengguna dan aplikasi secara simultan sehingga setiap proses terasa berjalan bersamaan tanpa jeda.
                    </p>
                  </div>
                  <div className="w-full h-36 rounded-xl overflow-hidden border border-brand-200 bg-sky-100/40 flex items-center justify-center p-1 shadow-xs">
                    <img 
                      src="/images/dila/dila_multitasking.png" 
                      alt="Ilustrasi Eksekusi Multitasking Simultan" 
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform" 
                    />
                  </div>
                </div>

                {/* 3. Distributed OS */}
                <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50/50 shadow-xs space-y-3 flex flex-col justify-between group hover:border-amber-400 transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm font-bold shrink-0">3</div>
                      <h3 className="font-bold text-base text-slate-900">Distributed OS</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mengatur banyak komputer fisik yang terhubung jaringan agar bekerja sama seolah-olah menjadi satu komputer raksasa.
                    </p>
                  </div>
                  <div className="w-full h-36 rounded-xl overflow-hidden border border-amber-200 bg-white flex items-center justify-center p-1.5 shadow-xs">
                    <img 
                      src="/images/dila/dila_distributed_os.png" 
                      alt="Diagram Arsitektur Distributed Operating System" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                    />
                  </div>
                </div>

                {/* 4. Network OS (NOS) */}
                <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/50 shadow-xs space-y-3 flex flex-col justify-between group hover:border-emerald-400 transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-sm font-bold shrink-0">4</div>
                      <h3 className="font-bold text-base text-slate-900">Network OS (NOS)</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Dirancang khusus berjalan di server untuk mengelola data, printer bersama, keamanan jaringan, dan manajemen grup user.
                    </p>
                  </div>
                  <div className="w-full h-36 rounded-xl overflow-hidden border border-emerald-200 bg-white flex items-center justify-center p-1.5 shadow-xs">
                    <img 
                      src="/images/dila/dila_network_os.png" 
                      alt="Diagram Network Operating System Architecture" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                    />
                  </div>
                </div>

                {/* 5. Real-Time OS (RTOS) */}
                <div className="p-5 sm:p-6 rounded-2xl border-2 border-rose-300 bg-rose-50/50 shadow-xs space-y-3 md:col-span-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center text-base font-bold shrink-0">5</div>
                      <div>
                        <h3 className="font-extrabold text-base text-slate-900">Real-Time OS (RTOS)</h3>
                        <span className="text-[11px] font-semibold text-rose-600">Strict Timing & Zero-Latency</span>
                      </div>
                    </div>
                    <div className="w-full sm:w-48 h-20 rounded-xl overflow-hidden shadow-xs border border-rose-200 shrink-0">
                      <img src="/images/real_operations_center.jpg" alt="RTOS Control Center" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sistem dengan batasan waktu amat ketat (*hard real-time*). Keterlambatan respon komputasi dalam hitungan milidetik dapat berakibat fatal pada keselamatan fisik sistem.
                  </p>
                  <div className="text-[11px] font-semibold text-rose-700 bg-white/90 p-2.5 rounded-xl border border-rose-200 flex items-center gap-2">
                    <span>🚀</span>
                    <span>Diterapkan pada: Pusat kendali satelit, autopilot pesawat tempur, navigasi roket, rem ABS otomotif, dan smart grid energi.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 pt-6 mt-8">
              <button 
                onClick={() => navigate('modul3')} 
                className="btn-bounce px-5 py-3 rounded-2xl bg-white border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition flex items-center gap-2 shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                Modul 3
              </button>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              </div>
              <button 
                onClick={() => navigate('modul5')} 
                className="btn-bounce px-7 py-3 rounded-2xl bg-gradient-to-r from-accent-orange to-amber-500 hover:from-accent-orangeHover hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition flex items-center gap-2"
              >
                Lanjut: Modul 5
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </section>
        )}

        {/* 8. MODUL 5: DESKTOP VS MOBILE OS */}
        {currentView === 'modul5' && (
          <section className="scene-fade flex-grow w-full max-w-4xl mx-auto py-4 space-y-6">
            <div className="flex items-center justify-between border-b border-sky-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center font-display font-bold text-lg shadow-md shadow-rose-500/20">5</span>
                <div>
                  <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Modul Komparasi</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Desktop OS vs Mobile OS</h2>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">Layar 5 dari 5</span>
            </div>

            <div className="card-tech rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Desktop OS Card */}
                <div className="p-5 sm:p-6 rounded-2xl border-2 border-brand-200 bg-sky-50/40 space-y-3 flex flex-col justify-between group hover:border-brand-400 transition-all">
                  <div>
                    <div className="flex items-center justify-between gap-3 border-b border-sky-100 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-12 h-12 rounded-xl bg-brand-500 text-white flex items-center justify-center text-2xl shadow-xs">
                          💻
                        </span>
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-base">Desktop OS</h3>
                          <span className="text-xs text-brand-600 font-semibold">Windows, macOS, Linux</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src="/images/3d_laptop_code.png" alt="Desktop Coding" className="w-12 h-10 object-contain drop-shadow-sm group-hover:scale-105 transition-transform" />
                        <img src="/images/3d_user_desktop.png" alt="Desktop User" className="w-12 h-12 object-contain drop-shadow-sm hidden sm:inline group-hover:scale-105 transition-transform" />
                      </div>
                    </div>

                    {/* Realistic Desktop Workstation Preview */}
                    <div className="mt-3 w-full h-36 rounded-xl overflow-hidden border border-brand-200 shadow-xs bg-slate-900">
                      <img 
                        src="/images/dila/dila_desktop_pc.png" 
                        alt="Workstation Komputer Desktop & Coding Monitor" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>

                    <ul className="text-xs sm:text-sm text-slate-600 space-y-2 pt-3">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 font-bold">✓</span>
                        <span><strong>Antarmuka:</strong> Didesain untuk mouse yang presisi, jendela multi-window, dan keyboard fisik.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 font-bold">✓</span>
                        <span><strong>Daya & Kinerja:</strong> Terhubung ke sumber listrik tetap / baterai besar, CPU dapat berjalan pada batas performa maksimal.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 font-bold">✓</span>
                        <span><strong>Arsitektur:</strong> Mayoritas prosesor x86/x64 dengan keleluasaan instalasi software dari berbagai sumber.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Mobile OS Card */}
                <div className="p-5 sm:p-6 rounded-2xl border-2 border-amber-200 bg-amber-50/40 space-y-3 flex flex-col justify-between group hover:border-amber-400 transition-all">
                  <div>
                    <div className="flex items-center justify-between gap-3 border-b border-amber-100 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-12 h-12 rounded-xl bg-accent-orange text-white flex items-center justify-center text-2xl shadow-xs">
                          📱
                        </span>
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-base">Mobile OS</h3>
                          <span className="text-xs text-amber-700 font-semibold">Android, iOS</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src="/images/3d_smartphone.png" alt="Smartphone Apps" className="w-10 h-12 object-contain drop-shadow-sm group-hover:scale-105 transition-transform" />
                        <img src="/images/3d_user_laptop.png" alt="Mobile User" className="w-12 h-12 object-contain drop-shadow-sm hidden sm:inline group-hover:scale-105 transition-transform" />
                      </div>
                    </div>

                    {/* Realistic Android vs iOS Smartphone Preview */}
                    <div className="mt-3 w-full h-36 rounded-xl overflow-hidden border border-amber-200 shadow-xs bg-slate-900">
                      <img 
                        src="/images/android_vs_ios.png" 
                        alt="Smartphone Android vs iOS Apple" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>

                    <ul className="text-xs sm:text-sm text-slate-600 space-y-2 pt-3">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">✓</span>
                        <span><strong>Antarmuka:</strong> Optimal untuk layar sentuh (touchscreen), ketukan jari, serta navigasi gestur usapan (swipe).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">✓</span>
                        <span><strong>Manajemen Daya Agresif:</strong> Menghentikan atau membekukan (freeze) aplikasi di latar belakang demi menghemat baterai.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">✓</span>
                        <span><strong>Arsitektur & Keamanan:</strong> Berbasis prosesor ARM hemat daya, aplikasi terisolasi dalam Sandbox demi privasi sensor.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>


              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Aspek Komparasi</th>
                      <th className="p-3">Desktop OS</th>
                      <th className="p-3">Mobile OS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3 font-semibold text-slate-800">Perangkat Input Utama</td>
                      <td className="p-3">Mouse & Keyboard Fisik</td>
                      <td className="p-3">Layar Sentuh (Touchscreen) & Gestur</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-800">Manajemen Aplikasi</td>
                      <td className="p-3">Multitasking bebas berdampingan</td>
                      <td className="p-3">Fokus satu aplikasi di layar depan</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-800">Sensor Terintegrasi</td>
                      <td className="p-3">Minimal (Webcam, Mic)</td>
                      <td className="p-3">Lengkap (GPS, Giroskop, NFC, Akselerometer)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* GALERI PENERAPAN NYATA & INDUSTRI SISTEM OPERASI */}
              <div className="space-y-5 pt-4 border-t border-slate-200">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-rose-100 text-rose-800 border border-rose-200 uppercase tracking-wider">
                    <span>🏢</span> Penerapan Industri
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Sistem Operasi pada Infrastruktur Kritis
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sistem Operasi mengendalikan infrastruktur skala besar seperti pusat data, otomasi industri, dan komputasi awan:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Kasus 1: Network & Security Operations Center (NOC / SOC) */}
                  <div className="card-tech rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col justify-between group hover:border-brand-300 transition-all">
                    <div>
                      <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                        <img 
                          src="/images/real_operations_center.jpg" 
                          alt="Pusat Kendali Jaringan dan CCTV Skala Kota" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute top-3 left-3 bg-rose-600/90 backdrop-blur-xs text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                          <span>NOC / SOC CENTER</span>
                        </div>
                      </div>
                      <div className="p-5 space-y-2">
                        <h4 className="font-extrabold text-slate-900 text-base group-hover:text-brand-600 transition">
                          Pusat Monitoring Real-Time
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          OS mengelola multi-layar video wall secara tersinkronisasi, memproses aliran CCTV resolusi tinggi, dan menyaring lalu lintas jaringan secara real-time.
                        </p>
                      </div>
                    </div>
                    <div className="px-5 pb-5 pt-1 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-600">
                      <span className="bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-md font-semibold">Multi-Screen Kernel</span>
                      <span className="bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-md font-semibold">High Concurrency</span>
                    </div>
                  </div>

                  {/* Kasus 2: Pusat Data & Rak Server Cloud (DILA) */}
                  <div className="card-tech rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col justify-between group hover:border-indigo-300 transition-all">
                    <div>
                      <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                        <img 
                          src="/images/dila/dila_datacenter.png" 
                          alt="Ruang Server & Pusat Data Modern" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute top-3 left-3 bg-indigo-600/90 backdrop-blur-xs text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                          <span>DATA CENTER CLOUD</span>
                        </div>
                      </div>
                      <div className="p-5 space-y-2">
                        <h4 className="font-extrabold text-slate-900 text-base group-hover:text-indigo-600 transition">
                          Infrastruktur Pusat Data & Server
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Server OS (Linux Enterprise, Windows Server) mengendalikan ribuan rak komputasi, virtualisasi mesin (VM), dan penyimpanan awan global 24/7.
                        </p>
                      </div>
                    </div>
                    <div className="px-5 pb-5 pt-1 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-600">
                      <span className="bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md font-semibold">Server OS Kernel</span>
                      <span className="bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md font-semibold">24/7 Fault Tolerance</span>
                    </div>
                  </div>

                  {/* Kasus 3: Otomasi Pabrik Pintar & Embedded Systems */}
                  <div className="card-tech rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col justify-between group hover:border-amber-300 transition-all">
                    <div>
                      <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                        <img 
                          src="/images/real_engineer_factory.jpg" 
                          alt="Insinyur Otomasi Mengoperasikan Workstation Pabrik" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute top-3 left-3 bg-amber-500/90 backdrop-blur-xs text-slate-950 text-[10px] font-black px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
                          <span>SMART FACTORY</span>
                        </div>
                      </div>
                      <div className="p-5 space-y-2">
                        <h4 className="font-extrabold text-slate-900 text-base group-hover:text-amber-600 transition">
                          Embedded OS & Robotika
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Embedded RTOS mengendalikan mikrokontroler dan lengan robot industri pada lini produksi pabrik dengan ketepatan waktu tinggi.
                        </p>
                      </div>
                    </div>
                    <div className="px-5 pb-5 pt-1 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-600">
                      <span className="bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md font-semibold">Embedded RTOS</span>
                      <span className="bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md font-semibold">Deterministic Timing</span>
                    </div>
                  </div>

                  {/* Kasus 4: Diagram Arsitektur Cloud Terdistribusi */}
                  <div className="card-tech rounded-3xl p-5 sm:p-6 bg-gradient-to-r from-sky-50/70 via-indigo-50/50 to-white border border-sky-200 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
                    <div className="w-28 sm:w-36 shrink-0 flex items-center justify-center">
                      <img 
                        src="/images/cloud_architecture.png" 
                        alt="Diagram Arsitektur Komputasi Awan" 
                        className="w-full h-auto object-contain drop-shadow-sm hover:scale-105 transition-transform" 
                      />
                    </div>
                    <div className="space-y-1.5 text-center sm:text-left">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-800 text-[10px] font-bold uppercase tracking-wider">
                        <span>☁️</span> Ekosistem Cloud
                      </div>
                      <h4 className="text-base font-extrabold text-slate-900">
                        Sinkronisasi Cloud & Multi-Perangkat
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Sistem Operasi modern terhubung dengan server awan untuk menyinkronkan data, file, dan preferensi pengguna lintas desktop dan smartphone secara mulus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-between gap-4 shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎉</span>
                  <div>
                    <div className="font-extrabold text-sm">Hebat! Kamu telah menamatkan 5 Modul!</div>
                    <div className="text-xs text-emerald-100">Sekarang saatnya membuktikan pemahamanmu di Kuis Evaluasi.</div>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('kuis')} 
                  className="btn-bounce px-4 py-2 bg-white text-emerald-700 font-bold text-xs rounded-xl shadow-xs shrink-0"
                >
                  Ke Kuis 🚀
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 pt-6 mt-8">
              <button 
                onClick={() => navigate('modul4')} 
                className="btn-bounce px-5 py-3 rounded-2xl bg-white border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition flex items-center gap-2 shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                Modul 4
              </button>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              </div>
              <button 
                onClick={() => navigate('kuis')} 
                className="btn-bounce px-7 py-3 rounded-2xl bg-gradient-to-r from-accent-orange to-amber-500 hover:from-accent-orangeHover hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition flex items-center gap-2"
              >
                Lanjut: Kuis Evaluasi
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </section>
        )}

        {/* 9. LAYAR KUIS EVALUASI & CEK NILAI */}
        {currentView === 'kuis' && (
          <section className="scene-fade flex-grow w-full max-w-3xl mx-auto py-4 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-center sm:text-left bg-gradient-to-r from-amber-50/70 via-sky-50/60 to-white p-5 sm:p-6 rounded-3xl border border-amber-200/80 shadow-xs">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-amber-200 p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                <img 
                  src="/images/dila/dila_student_review.png" 
                  alt="Evaluasi Hasil Belajar" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="space-y-1.5">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-widest bg-amber-100 text-accent-orange border border-amber-200 uppercase">
                  Area Evaluasi Interaktif
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
                  Kuis Penjelajah OS-Explorer
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Uji pemahaman dari Modul 1 sampai 5. Syarat kelulusan sertifikat: <strong>Skor minimal 70</strong>.
                </p>
              </div>
            </div>

            {!quizFinished ? (
              <div className="card-tech rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                    <span>Soal {quizIndex + 1} dari {quizData.length}</span>
                    <span className="text-brand-600 font-extrabold">Skor Saat Ini: {quizScore}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-brand-500 to-accent-orange h-full rounded-full transition-all duration-300"
                      style={{ width: `${((quizIndex + 1) / quizData.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 uppercase">
                    {quizData[quizIndex].modul}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {quizData[quizIndex].question}
                  </h3>
                </div>

                <div className="space-y-3">
                  {quizData[quizIndex].options.map((opt, idx) => {
                    const isSelected = answeredIndex === idx;
                    const isCorrect = idx === quizData[quizIndex].correct;
                    let btnStyle = "border-slate-200 bg-white hover:border-brand-400 hover:bg-sky-50/50 text-slate-800";

                    if (answeredIndex !== null) {
                      if (isCorrect) {
                        btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900";
                      } else if (isSelected) {
                        btnStyle = "border-rose-400 bg-rose-50 text-rose-900";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={answeredIndex !== null}
                        onClick={() => handleAnswer(idx)}
                        className={`btn-bounce w-full text-left p-4 rounded-2xl border-2 ${btnStyle} text-xs sm:text-sm font-semibold transition flex items-center justify-between shadow-xs`}
                      >
                        <span>{opt}</span>
                        <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs ${
                          answeredIndex !== null && isCorrect
                            ? 'bg-emerald-500 text-white border-emerald-500'
                            : answeredIndex !== null && isSelected
                            ? 'bg-rose-500 text-white border-rose-500'
                            : 'border-slate-300 text-slate-400'
                        }`}>
                          {answeredIndex !== null && isCorrect ? '✓' : answeredIndex !== null && isSelected ? '✕' : '●'}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {answeredIndex !== null && (
                  <div className={`p-4 rounded-2xl text-xs sm:text-sm transition-all space-y-2 ${
                    answeredIndex === quizData[quizIndex].correct
                      ? 'bg-emerald-50 border border-emerald-200'
                      : 'bg-rose-50 border border-rose-200'
                  }`}>
                    <div className={`font-bold flex items-center gap-1.5 ${
                      answeredIndex === quizData[quizIndex].correct ? 'text-emerald-800' : 'text-rose-800'
                    }`}>
                      {answeredIndex === quizData[quizIndex].correct ? (
                        <><span>🎉</span> Jawaban Tepat Sekali!</>
                      ) : (
                        <><span>💡</span> Belum Tepat!</>
                      )}
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {quizData[quizIndex].explanation}
                    </p>
                    <div className="pt-2">
                      <button 
                        onClick={handleNextQuiz}
                        className="btn-bounce px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5 ml-auto"
                      >
                        {quizIndex + 1 < quizData.length ? 'Soal Berikutnya →' : 'Selesai & Cek Hasil 🏁'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="card-tech rounded-3xl p-6 sm:p-8 text-center space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-lg shrink-0 ${
                    quizScore >= 70 ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-accent-orange'
                  }`}>
                    {quizScore >= 70 ? '🎖️' : '📚'}
                  </div>
                  <div className="w-20 h-20 rounded-3xl bg-white border border-slate-200 p-2 flex items-center justify-center shadow-md shrink-0">
                    <img 
                      src="/images/dila/dila_student_review.png" 
                      alt="Review Hasil Nilai Siswa" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className={`text-2xl font-extrabold font-display ${quizScore >= 70 ? 'text-emerald-600' : 'text-accent-orange'}`}>
                    {quizScore >= 70 ? 'Luar Biasa, Kamu Lulus!' : 'Jangan Menyerah, Coba Lagi!'}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {quizScore >= 70 
                      ? 'Pemahamanmu tentang Sistem Operasi sangat memuaskan. Sertifikat mini resmi telah siap untuk kamu klaim!'
                      : 'Skor kamu belum mencapai KKM 70. Buka kembali Peta Materi atau tonton video pengayaan di bawah ini untuk memperdalam konsep, lalu ulangi kuis!'}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-xl mx-auto">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-600">{correctAnswersCount}</div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase mt-0.5">Jawaban Benar</div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <div className="text-2xl sm:text-3xl font-black text-rose-500">{quizData.length - correctAnswersCount}</div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase mt-0.5">Jawaban Salah</div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <div className="text-2xl sm:text-3xl font-black text-slate-900">{quizScore}</div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase mt-0.5">Nilai Akhir</div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <div className={`text-xl sm:text-2xl font-black ${quizScore >= 70 ? 'text-emerald-600' : 'text-rose-500'}`}>
                      {quizScore >= 70 ? 'LULUS' : 'BELUM LULUS'}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase mt-0.5">Status (KKM 70)</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  {quizScore >= 70 ? (
                    <>
                      <button 
                        onClick={resetQuiz}
                        className="btn-bounce px-6 py-3.5 bg-white border border-slate-300 text-slate-700 font-bold text-sm rounded-2xl shadow-xs"
                      >
                        Ulangi Kuis 🔄
                      </button>
                      <button 
                        onClick={() => navigate('selesai')}
                        className="btn-bounce px-8 py-3.5 bg-gradient-to-r from-accent-orange to-amber-500 hover:from-accent-orangeHover hover:to-amber-600 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-orange-500/30 flex items-center gap-2.5"
                      >
                        <span className="px-2.5 py-0.5 bg-white/25 rounded-md text-xs font-mono font-black border border-white/30 shadow-inner">END 🏁</span>
                        <span>Klaim Sertifikat Kelulusan</span>
                        <span>🏆</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        onClick={() => navigate('dashboard')}
                        className="btn-bounce px-6 py-3.5 bg-white border border-slate-300 text-slate-700 font-bold text-sm rounded-2xl shadow-xs"
                      >
                        🗺️ Buka Peta Materi
                      </button>
                      <button 
                        onClick={resetQuiz}
                        className="btn-bounce px-8 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-2xl shadow-md shadow-brand-500/20"
                      >
                        Ulangi Kuis Evaluasi 🔄
                      </button>
                    </>
                  )}
                </div>

                {/* Remedial QR Code Video Section (Shown when Belum Lulus) */}
                {quizScore < 70 && (
                  <div className="text-left pt-6 border-t border-slate-200 space-y-4">
                    <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-50/70 via-white to-sky-50/70 border-2 border-amber-200 shadow-md space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-amber-100 pb-3">
                        <div className="flex items-center gap-3">
                          <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-accent-orange to-amber-500 text-white flex items-center justify-center text-xl shadow-xs shrink-0">
                            💡
                          </span>
                          <div>
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-accent-orange text-white">
                              BANTUAN REMEDIAL
                            </span>
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                              Tonton Video Pengayaan Ini Sebelum Mengulang Kuis!
                            </h4>
                          </div>
                        </div>
                        <a 
                          href="https://youtu.be/fkGCLIQx1MI?si=wBr6xKtUl1yKP8WG" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn-bounce px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-500/20 flex items-center gap-1.5 self-start sm:self-center transition"
                        >
                          <span>▶ Buka di YouTube</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </a>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                        {/* QR Code Container */}
                        <div className="sm:col-span-4 flex flex-col items-center justify-center text-center space-y-2">
                          <div className="relative group p-3 bg-white rounded-2xl border-2 border-dashed border-amber-300 shadow-md">
                            <div className="w-36 h-36 bg-white flex items-center justify-center rounded-xl overflow-hidden relative">
                              <img 
                                src="/qr_youtube.svg" 
                                alt="QR Code Remedial Belajar" 
                                className="w-full h-full object-contain p-1" 
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fyoutu.be%2FfkGCLIQx1MI%3Fsi%3DwBr6xKtUl1yKP8WG';
                                }}
                              />
                            </div>
                            <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-xs">
                              SCAN HP 📱
                            </div>
                          </div>
                          <span className="text-[11px] font-semibold text-slate-500">
                            Arahkan kamera HP ke QR
                          </span>
                        </div>

                        {/* Guidance notes */}
                        <div className="sm:col-span-8 space-y-3 text-xs text-slate-700">
                          <p className="leading-relaxed">
                            Tonton video pengayaan <strong>&quot;Understanding Operating Systems&quot;</strong> untuk memperdalam konsep fungsi OS, alokasi memori, dan komparasi sistem sebelum mencoba kembali.
                          </p>
                          <div className="pt-1">
                            <button 
                              onClick={resetQuiz} 
                              className="btn-bounce px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-xs inline-flex items-center gap-1.5"
                            >
                              <span>🔄</span>
                              <span>Ulangi Kuis Sekarang</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center justify-between border-t border-slate-200 pt-6 mt-8">
              <button 
                onClick={() => navigate('mulai')} 
                className="btn-bounce px-6 py-3 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-sm shadow-md shadow-rose-500/25 transition flex items-center gap-2"
                title="Selesai dan Kembali ke Beranda Utama"
              >
                <span className="text-base">🛑</span>
                <span className="tracking-wide">END</span>
              </button>
              <button 
                onClick={() => navigate('dashboard')} 
                className="btn-bounce px-5 py-3 rounded-2xl bg-white border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition flex items-center gap-2 shadow-xs"
              >
                Peta Materi
              </button>
            </div>
          </section>
        )}

        {/* 10. LAYAR SELESAI & SERTIFIKAT MINI */}
        {currentView === 'selesai' && (
          <section className="scene-fade flex-grow w-full max-w-3xl mx-auto py-4 space-y-8">
            <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-30" />

            <div className="text-center space-y-3 relative">
              <div className="flex items-center justify-center gap-4">
                <img 
                  src="/images/3d_student_avatar.png" 
                  alt="Siswa Berprestasi" 
                  className="w-16 sm:w-20 h-auto object-contain drop-shadow-lg animate-bounce-subtle shrink-0" 
                />
                <div className="space-y-1 text-left sm:text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-extrabold uppercase tracking-wider">
                    <span>🏆</span> Misi Penjelajahan Berhasil!
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900">
                    Selamat, Kamu Telah Lulus!
                  </h2>
                </div>
              </div>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                Ketik namamu di bawah ini untuk menerbitkan dan mengunduh Sertifikat Mini resmi OS-Explorer.
              </p>
            </div>

            <div className="card-tech rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-3">
              <label htmlFor="studentNameInput" className="text-xs font-bold text-slate-700 shrink-0">Nama Peserta Didik:</label>
              <input 
                type="text" 
                id="studentNameInput" 
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Ketik nama lengkapmu di sini..." 
                className="w-full px-4 py-2.5 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-semibold text-slate-900"
              />
            </div>

            {/* MINI CERTIFICATE */}
            <div id="printableCertificate" className="bg-white border-8 border-sky-100 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-center space-y-6">
              <div className="absolute inset-2 border-2 border-dashed border-amber-300 rounded-2xl pointer-events-none"></div>
              <div className="absolute -top-10 -left-10 w-28 h-28 bg-brand-50 rounded-full blur-xl pointer-events-none"></div>
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-amber-50 rounded-full blur-xl pointer-events-none"></div>

              <div className="space-y-1 relative z-10">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-accent-orange to-amber-400 text-white flex items-center justify-center text-3xl shadow-md mb-2">
                  🎖️
                </div>
                <div className="text-[11px] font-extrabold tracking-widest text-brand-600 uppercase">Sertifikat Kelulusan Resmi</div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">OS-EXPLORER ACADEMY</h3>
                <p className="text-[11px] text-slate-500 font-medium">No. Verifikasi: OS-EXP/2026-9921/MPI</p>
              </div>

              <div className="space-y-2 relative z-10 py-2">
                <p className="text-xs text-slate-500 uppercase tracking-wider">Diberikan Kepada:</p>
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-sky-500 font-display">
                  {studentName.trim() !== '' ? studentName : 'Bintang Pelajar'}
                </div>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed pt-1">
                  Atas keberhasilannya menuntaskan seluruh modul materi dasar Sistem Operasi dan menyelesaikan evaluasi dengan predikat:
                </p>
                <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-accent-orange border border-amber-200 text-xs font-bold">
                  Master Penjelajah Sistem Operasi (Nilai: {quizScore || 100})
                </div>
              </div>

              {/* Signatures, Verification QR & Date Footer */}
              <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 pt-6 border-t border-slate-100 relative z-10 text-xs text-slate-500">
                <div className="text-center sm:text-left">
                  <div className="font-bold text-slate-800">{certDate}</div>
                  <div className="text-[11px]">Tanggal Kelulusan</div>
                </div>

                {/* Center Mini QR Verification */}
                <div className="flex flex-col items-center justify-center">
                  <div className="p-1 bg-white border border-sky-200 rounded-xl shadow-xs">
                    <img 
                      src="/qr_youtube.svg" 
                      alt="QR Verifikasi & Video" 
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fyoutu.be%2FfkGCLIQx1MI%3Fsi%3DwBr6xKtUl1yKP8WG';
                      }}
                    />
                  </div>
                  <span className="text-[9px] text-slate-400 font-mono mt-1">Scan Video Materi</span>
                </div>

                <div className="text-center sm:text-right">
                  <div className="font-bold text-brand-600 font-display text-sm">Byte-Bot AI System</div>
                  <div className="text-[11px]">Instruktur Digital OS-Explorer</div>
                </div>
              </div>
            </div>

            {/* VIDEO PENGAYAAN (YOUTUBE REFERENCE) */}
            <div className="card-tech rounded-3xl p-5 sm:p-6 bg-gradient-to-r from-sky-50/60 via-white to-amber-50/40 border-2 border-sky-200 shadow-md">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white rounded-2xl border border-sky-200 shadow-xs shrink-0">
                    <img 
                      src="/qr_youtube.svg" 
                      alt="QR Code Video Pembelajaran" 
                      className="w-20 h-20 object-contain" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fyoutu.be%2FfkGCLIQx1MI%3Fsi%3DwBr6xKtUl1yKP8WG';
                      }}
                    />
                  </div>
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-rose-500 text-white">
                      Materi Pengayaan
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900">
                      Understanding Operating Systems
                    </h3>
                    <p className="text-xs text-slate-600 max-w-md leading-relaxed">
                      Video referensi YouTube untuk memperluas wawasan arsitektur dan cara kerja OS.
                    </p>
                  </div>
                </div>

                <a 
                  href="https://youtu.be/fkGCLIQx1MI?si=wBr6xKtUl1yKP8WG" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-bounce px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-500/20 flex items-center gap-2 shrink-0 transition"
                >
                  <span>▶ Tonton di YouTube</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 no-print">
              <button 
                onClick={() => window.print()}
                className="btn-bounce w-full sm:w-auto px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-2xl shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2.5"
              >
                <span className="px-2.5 py-0.5 bg-white/20 rounded-md text-xs font-mono font-black border border-white/30">END 🏆</span>
                <span>Cetak / Simpan PDF</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
              </button>
              <button 
                onClick={() => navigate('mulai')}
                className="btn-bounce w-full sm:w-auto px-7 py-3.5 bg-white border-2 border-slate-300 hover:border-brand-400 hover:bg-sky-50/50 text-slate-700 font-bold text-sm rounded-2xl shadow-xs flex items-center justify-center gap-2.5"
              >
                <span className="px-2.5 py-0.5 bg-slate-100 border border-slate-200 rounded-md text-xs font-mono font-extrabold text-slate-700">END / REPEAT 🔄</span>
                <span>Selesai Sesi (Mulai Baru)</span>
              </button>
            </div>
          </section>
        )}

      </main>

      {/* FOOTER */}
      <footer className="border-t border-sky-100 py-6 text-center text-xs text-slate-500 bg-white/60 relative z-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 <strong>OS-Explorer: Menjelajah Jantung Komputer</strong>. Media Pembelajaran Interaktif (MPI).</p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Tema: Bright & Energetic Tech</span>
            <span>•</span>
            <span>Standar MPI Single-Page</span>
          </div>
        </div>
      </footer>

      {/* MODAL BANTUAN & PROFIL BOT-OS */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-5 border border-sky-100 relative">
            <button 
              onClick={() => { playSound('click'); setShowHelpModal(false); }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 text-lg font-bold p-1"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-brand-600 flex items-center justify-center text-3xl shadow-xs">
                🤖
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 font-display">Profil Byte-Bot & Petunjuk</h3>
                <p className="text-xs text-slate-500">Panduan Menggunakan Media Pembelajaran</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>Byte-Bot</strong> adalah pemandu interaktif yang mendampingimu mempelajari 5 modul materi, 4 video simulator interaktif, dan kuis evaluasi.
              </p>
              <div className="p-3.5 bg-sky-50 rounded-2xl border border-sky-100 space-y-2">
                <strong className="text-brand-800 text-xs font-bold">Panduan Fitur:</strong>
                <ul className="space-y-1.5 text-slate-700 text-xs">
                  <li className="flex items-center gap-2"><span>🗺️</span> <strong>Peta Materi:</strong> Akses ringkasan 5 modul dan status belajar.</li>
                  <li className="flex items-center gap-2"><span>🎬</span> <strong>Simulasi Interaktif:</strong> Tonton animasi cara kerja OS pada Modul 2.</li>
                  <li className="flex items-center gap-2"><span>🔊</span> <strong>Audio & Narasi:</strong> Atur suara melalui tombol audio di sudut kanan atas.</li>
                  <li className="flex items-center gap-2"><span>🏆</span> <strong>Sertifikat:</strong> Raih nilai minimal 70 pada kuis untuk mencetak sertifikat.</li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => { playSound('click'); setShowHelpModal(false); }}
              className="btn-bounce w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl shadow-xs"
            >
              Saya Mengerti, Ayo Lanjut!
            </button>
          </div>
        </div>
      )}

      {/* MODAL SIMULASI VIDEO INTERAKTIF (MODUL 2 REAL-WORLD SCENARIOS) */}
      {activeSim && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto animate-fadeIn">
          <div className="card-tech w-full max-w-4xl bg-white rounded-3xl shadow-2xl border-2 border-sky-300 overflow-hidden flex flex-col my-auto max-h-[94vh]">
            
            {/* Header Modal */}
            <div className="px-4 sm:px-6 py-3.5 bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-sky-400/30">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-accent-orange to-amber-400 text-white flex items-center justify-center text-xl shadow-md shrink-0">
                  🎬
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-rose-500 text-white animate-pulse">
                      ● VIDEO SIMULASI INTERAKTIF
                    </span>
                    <span className="text-xs text-sky-300 font-mono hidden sm:inline">Modul 2: Karakteristik OS</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    {activeSim === 'concurrency' && "Simulasi 1: Concurrency (Multitasking: Sehari Bersama Bayu)"}
                    {activeSim === 'sharing' && "Simulasi 2: Resource Sharing (Berbagi Printer di Lab Komputer)"}
                    {activeSim === 'virtualization' && "Simulasi 3: Virtualization (Memori Virtual: RAM Penuh, Harddisk Membantu)"}
                    {activeSim === 'asynchrony' && "Simulasi 4: Asynchrony (Interupsi: Klik Mouse Saat Video Berputar)"}
                  </h3>
                </div>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => { playSound('click'); setActiveSim(null); }}
                className="self-end sm:self-center w-9 h-9 rounded-xl bg-white/10 hover:bg-rose-600/80 text-slate-200 hover:text-white flex items-center justify-center transition font-bold"
                title="Tutup Simulasi"
              >
                ✕
              </button>
            </div>

            {/* Quick Switch Tabs */}
            <div className="bg-slate-100 p-2 border-b border-slate-200 flex flex-wrap gap-1.5 sm:gap-2 text-xs">
              <button
                onClick={() => { playSound('click'); setActiveSim('concurrency'); setSimTick(0); }}
                className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
                  activeSim === 'concurrency' 
                    ? 'bg-brand-600 text-white shadow-xs' 
                    : 'bg-white text-slate-700 hover:bg-sky-50'
                }`}
              >
                <span>🔀</span> Multitasking
              </button>
              <button
                onClick={() => { playSound('click'); setActiveSim('sharing'); setSimTick(0); }}
                className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
                  activeSim === 'sharing' 
                    ? 'bg-amber-600 text-white shadow-xs' 
                    : 'bg-white text-slate-700 hover:bg-amber-50'
                }`}
              >
                <span>🤝</span> Berbagi Printer
              </button>
              <button
                onClick={() => { playSound('click'); setActiveSim('virtualization'); setSimTick(0); }}
                className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
                  activeSim === 'virtualization' 
                    ? 'bg-purple-600 text-white shadow-xs' 
                    : 'bg-white text-slate-700 hover:bg-purple-50'
                }`}
              >
                <span>🔮</span> Memori Virtual
              </button>
              <button
                onClick={() => { playSound('click'); setActiveSim('asynchrony'); setSimTick(0); }}
                className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
                  activeSim === 'asynchrony' 
                    ? 'bg-emerald-600 text-white shadow-xs' 
                    : 'bg-white text-slate-700 hover:bg-emerald-50'
                }`}
              >
                <span>⚡</span> Interupsi Asinkron
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6 bg-slate-50 flex-grow">
              
              {/* VIDEO SIMULATOR SCREEN CONTAINER */}
              <div className="bg-slate-900 rounded-3xl p-4 sm:p-5 text-white border-4 border-slate-800 shadow-2xl relative overflow-hidden space-y-4">
                
                {/* Top Video Player Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="ml-2 font-mono text-slate-400 font-bold">OS-KERNEL v5.15 MONITOR</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-emerald-400 font-bold">● 60 FPS SIMULATED</span>
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-sky-400">Time-Slice: 10ms</span>
                  </div>
                </div>

                {/* 1. KONTEN SIMULASI CONCURRENCY (DARI FILE: Video Simulasi Multitasking.html) */}
                {activeSim === 'concurrency' && (
                  <div className="space-y-4">
                    {/* Embedded User Video Simulator */}
                    <div className="w-full bg-[#dfefff] rounded-2xl overflow-hidden border-2 border-sky-400 shadow-2xl relative">
                      <iframe
                        src="/simulasi-multitasking.html"
                        title="Video Simulasi Multitasking: Sehari Bersama Bayu"
                        className="w-full h-[540px] sm:h-[620px] border-0"
                        allow="autoplay; fullscreen"
                      />
                    </div>

                    {/* Simulator Info & Controls Footer */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-950 border border-slate-700 text-xs">
                      <div className="flex items-center gap-2 text-slate-300">
                        <span className="text-base">🎬</span>
                        <span className="font-bold text-sky-300">Simulasi Multitasking: Sehari Bersama Bayu</span>
                        <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-[10px] font-mono font-bold">🎙️ Narasi Suara</span>
                        <span className="text-slate-400 hidden sm:inline">• Animasi interaktif pengetikan Word, headphone Spotify, unduhan, dan visualisasi CPU Time-Slicing</span>
                      </div>
                      <a 
                        href="/simulasi-multitasking.html" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-bounce px-3.5 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs flex items-center gap-1.5 shrink-0 shadow-sm transition"
                      >
                        <span>Buka di Tab Baru ↗</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* 2. KONTEN SIMULASI RESOURCE SHARING (DARI FILE: Video Simulasi Berbagi Printer.html) */}
                {activeSim === 'sharing' && (
                  <div className="space-y-4">
                    {/* Embedded User Video Simulator */}
                    <div className="w-full bg-[#fdf3dc] rounded-2xl overflow-hidden border-2 border-amber-400 shadow-2xl relative">
                      <iframe
                        src="/simulasi-berbagi-printer.html"
                        title="Video Simulasi Berbagi Printer di Lab Komputer"
                        className="w-full h-[540px] sm:h-[620px] border-0"
                        allow="autoplay; fullscreen"
                      />
                    </div>

                    {/* Simulator Info & Controls Footer */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-950 border border-slate-700 text-xs">
                      <div className="flex items-center gap-2 text-slate-300">
                        <span className="text-base">🎬</span>
                        <span className="font-bold text-amber-300">Simulasi Berbagi Printer di Lab Komputer</span>
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold">🎙️ Narasi Suara</span>
                        <span className="text-slate-400 hidden sm:inline">• Pengelolaan antrean cetak printer spooler</span>
                      </div>
                      <a 
                        href="/simulasi-berbagi-printer.html" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-bounce px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center gap-1.5 shrink-0 shadow-sm transition"
                      >
                        <span>Buka di Tab Baru ↗</span>
                      </a>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 leading-relaxed">
                      💡 <strong>Peran OS Spooler:</strong> OS menampung tugas cetak ke antrean memori (spooler) dan memprosesnya satu per satu secara teratur agar dokumen tidak tumpang tindih.
                    </div>
                  </div>
                )}

                {/* 3. KONTEN SIMULASI VIRTUALIZATION (DARI FILE: Video Simulasi Memori Virtual.html) */}
                {activeSim === 'virtualization' && (
                  <div className="space-y-4">
                    {/* Embedded User Video Simulator */}
                    <div className="w-full bg-[#f1e7ff] rounded-2xl overflow-hidden border-2 border-purple-400 shadow-2xl relative">
                      <iframe
                        src="/simulasi-memori-virtual.html"
                        title="Video Simulasi Memori Virtual: RAM Penuh, Harddisk Membantu"
                        className="w-full h-[540px] sm:h-[620px] border-0"
                        allow="autoplay; fullscreen"
                      />
                    </div>

                    {/* Simulator Info & Controls Footer */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-950 border border-slate-700 text-xs">
                      <div className="flex items-center gap-2 text-slate-300">
                        <span className="text-base">🎬</span>
                        <span className="font-bold text-purple-300">Simulasi Memori Virtual: RAM Penuh, Harddisk Membantu</span>
                        <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-mono font-bold">🎙️ Narasi Suara</span>
                        <span className="text-slate-400 hidden sm:inline">• Mekanisme pertukaran halaman memori (Page Swap-In & Swap-Out)</span>
                      </div>
                      <a 
                        href="/simulasi-memori-virtual.html" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-bounce px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shrink-0 shadow-sm transition"
                      >
                        <span>Buka di Tab Baru ↗</span>
                      </a>
                    </div>

                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs text-purple-200 leading-relaxed">
                      💡 <strong>Mekanisme Virtual Memory:</strong> Saat RAM fisik penuh, OS memindahkan halaman pasif ke ruang swap disk (<em>swap out</em>) dan memuatnya kembali saat dibutuhkan (<em>swap in</em>).
                    </div>
                  </div>
                )}

                {/* 4. KONTEN SIMULASI ASYNCHRONY (DARI FILE: Video Simulasi Interupsi Video.html) */}
                {activeSim === 'asynchrony' && (
                  <div className="space-y-4">
                    {/* Embedded User Video Simulator */}
                    <div className="w-full bg-[#e2fbef] rounded-2xl overflow-hidden border-2 border-emerald-400 shadow-2xl relative">
                      <iframe
                        src="/simulasi-interupsi-video.html"
                        title="Video Simulasi Interupsi: Klik Mouse Saat Video Berputar"
                        className="w-full h-[540px] sm:h-[620px] border-0"
                        allow="autoplay; fullscreen"
                      />
                    </div>

                    {/* Simulator Info & Controls Footer */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-950 border border-slate-700 text-xs">
                      <div className="flex items-center gap-2 text-slate-300">
                        <span className="text-base">🎬</span>
                        <span className="font-bold text-emerald-300">Simulasi Interupsi: Klik Mouse Saat Video Berputar</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">🎙️ Narasi Suara</span>
                        <span className="text-slate-400 hidden sm:inline">• Penanganan sinyal interupsi (ISR) seketika tanpa jeda</span>
                      </div>
                      <a 
                        href="/simulasi-interupsi-video.html" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-bounce px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shrink-0 shadow-sm transition"
                      >
                        <span>Buka di Tab Baru ↗</span>
                      </a>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200 leading-relaxed">
                      💡 <strong>Mekanisme Interupsi Asinkron:</strong> Input mendadak (seperti klik mouse) memicu sinyal interupsi (IRQ). CPU merespons cepat lewat <em>Interrupt Service Routine</em> (ISR) tanpa menghentikan pemutaran video.
                    </div>
                  </div>
                )}

                {/* BOTTOM VIDEO / SIMULATION CONTROLS */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-slate-800 gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => { playSound('click'); setSimPlaying(!simPlaying); }}
                      className="px-3.5 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold transition flex items-center gap-1.5 shadow-xs"
                    >
                      <span>{simPlaying ? '⏸ Jeda' : '▶ Putar'}</span>
                    </button>
                    <button
                      onClick={() => { playSound('click'); setSimTick(0); }}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center gap-1"
                    >
                      <span>🔄 Ulangi</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px] w-full sm:w-auto">
                    <span>Timeline:</span>
                    <div className="w-full sm:w-48 bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-brand-400 h-full rounded-full transition-all duration-100"
                        style={{ width: `${simTick}%` }}
                      />
                    </div>
                    <span>{simTick}%</span>
                  </div>
                </div>

              </div>

              {/* THREE PEDAGOGICAL BREAKDOWN CARDS BELOW PLAYER */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-brand-600 font-bold text-xs">
                    <span>🏢</span> Analogi Kehidupan Nyata
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeSim === 'concurrency' && "Koki yang memotong bahan, mengaduk masakan, dan memanggang secara bergantian cepat sehingga hidangan tersaji tepat waktu."}
                    {activeSim === 'sharing' && "Loket antrean teratur di mana setiap orang dilayani bergantian tanpa saling serobot."}
                    {activeSim === 'virtualization' && "Meja kerja kecil dengan laci cepat untuk menyimpan buku yang belum dibaca agar meja tetap lapang."}
                    {activeSim === 'asynchrony' && "Membaca buku santai, meletakkan pembatas saat ada tamu mengetuk pintu, lalu melanjutkan membaca."}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-xs">
                    <span>⚙️</span> Cara Kerja di Dalam OS
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeSim === 'concurrency' && "OS menggunakan Timer Hardware dan Context Switching untuk membagi waktu CPU (time slice) ke setiap proses dalam hitungan milidetik."}
                    {activeSim === 'sharing' && "OS menerapkan Spooling dan Semaphore untuk mengatur antrean perangkat I/O tanpa konflik data."}
                    {activeSim === 'virtualization' && "Unit MMU memetakan memori virtual ke fisik dan memindahkan blok data tidak aktif ke ruang swap disk."}
                    {activeSim === 'asynchrony' && "Hardware memicu sinyal IRQ, CPU mengeksekusi Interrupt Service Routine (ISR), lalu kembali ke proses utama."}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
                    <span>🧠</span> Mengapa Sangat Penting?
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeSim === 'concurrency' && "Membuat komputer tetap responsif menjalankan banyak aplikasi sekaligus tanpa lag atau macet."}
                    {activeSim === 'sharing' && "Banyak pengguna dapat memakai perangkat keras yang sama secara efisien tanpa konflik data."}
                    {activeSim === 'virtualization' && "Aplikasi besar tetap dapat berjalan lancar meski kapasitas RAM fisik terbatas."}
                    {activeSim === 'asynchrony' && "Komputer dapat merespons input seketika tanpa menghentikan tugas komputasi lainnya."}
                  </p>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 bg-white border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Pilih tab di atas untuk melihat contoh karakteristik lainnya!
              </span>
              <button 
                onClick={() => { playSound('click'); setActiveSim(null); }}
                className="btn-bounce px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs"
              >
                Tutup Simulasi
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

/* =========================================================================
   KOMPONEN LATAR BELAKANG ALAM + TEKNOLOGI (FLYING PC, BIO-CHIP, DRONE, LEAVES)
   ========================================================================= */
function NatureTechBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none" aria-hidden="true">
      {/* 1. AWAN CYBER LEMBUT 1 */}
      <div className="absolute top-10 -left-36 opacity-45 animate-cloud-slow">
        <svg width="220" height="90" viewBox="0 0 220 90" fill="none">
          <path d="M40 70h140a30 30 0 000-60 45 45 0 00-80-15 35 35 0 00-60 35 25 25 0 000 40z" fill="#E0F2FE" />
          <circle cx="105" cy="40" r="4" fill="#38BDF8" opacity="0.6" />
          <circle cx="120" cy="40" r="3" fill="#4ADE80" opacity="0.6" />
        </svg>
      </div>

      {/* 2. AWAN CYBER LEMBUT 2 */}
      <div className="absolute top-1/2 -left-48 opacity-35 animate-cloud-slow-delayed">
        <svg width="260" height="110" viewBox="0 0 260 110" fill="none">
          <path d="M50 85h160a35 35 0 000-70 50 50 0 00-90-20 40 40 0 00-70 40 30 30 0 000 50z" fill="#F0FDF4" />
          <path d="M125 50 L135 60 L145 45" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>

      {/* 3. KOMPUTER KARTUN TERBANG BERSAYAP (FLYING CARTOON PC) */}
      <div className="absolute top-20 left-0 animate-fly-pc-right opacity-90 z-0">
        <div className="relative w-28 h-24">
          <svg viewBox="0 0 160 120" className="w-28 h-20 drop-shadow-md" fill="none">
            {/* Sayap Kiri Berkelip */}
            <g className="animate-wing-left">
              <path d="M38 52 C15 30 0 45 10 70 C20 85 36 68 38 62 Z" fill="#FEF08A" stroke="#F59E0B" strokeWidth="2.5" />
              <path d="M14 55 C24 60 30 65 36 66" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            {/* Monitor Komputer Kartun */}
            <rect x="38" y="22" width="76" height="62" rx="16" fill="#FFFFFF" stroke="#0284C7" strokeWidth="4" />
            {/* Layar Biru Langit */}
            <rect x="46" y="30" width="60" height="46" rx="10" fill="#E0F2FE" />
            {/* Mata Ceria & Senyum */}
            <circle cx="63" cy="50" r="4.5" fill="#0369A1" />
            <circle cx="89" cy="50" r="4.5" fill="#0369A1" />
            <circle cx="65" cy="48" r="1.5" fill="#FFFFFF" />
            <circle cx="91" cy="48" r="1.5" fill="#FFFFFF" />
            <path d="M70 59 Q76 67 82 59" stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Pipi Merona */}
            <ellipse cx="55" cy="57" rx="3.5" ry="2" fill="#FCA5A5" />
            <ellipse cx="97" cy="57" rx="3.5" ry="2" fill="#FCA5A5" />
            {/* Tunas Daun Hijau di Atas Monitor */}
            <path d="M76 22 Q76 10 82 8 Q86 16 78 22" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
            <path d="M76 22 Q72 12 66 12 Q64 20 74 22" fill="#4ADE80" stroke="#15803D" strokeWidth="1.5" />
            {/* Sayap Kanan Berkelip */}
            <g className="animate-wing-right">
              <path d="M114 52 C137 30 152 45 142 70 C132 85 116 68 114 62 Z" fill="#FEF08A" stroke="#F59E0B" strokeWidth="2.5" />
              <path d="M138 55 C128 60 122 65 116 66" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            {/* Dudukan Kaki */}
            <rect x="68" y="84" width="16" height="8" rx="4" fill="#0284C7" />
          </svg>
        </div>
      </div>

      {/* 4. ECO-DRONE / CAPUNG TEKNOLOGI TERBANG */}
      <div className="absolute top-1/3 right-0 animate-fly-drone-left opacity-85 z-0">
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 140 100" className="w-24 h-20 drop-shadow-md" fill="none">
            {/* Baling-baling berputar */}
            <ellipse cx="40" cy="28" rx="24" ry="4" fill="#38BDF8" opacity="0.75" className="animate-spin-slow-forward" />
            <ellipse cx="100" cy="28" rx="24" ry="4" fill="#38BDF8" opacity="0.75" className="animate-spin-slow-reverse" />
            <line x1="40" y1="28" x2="40" y2="40" stroke="#0284C7" strokeWidth="3" />
            <line x1="100" y1="28" x2="100" y2="40" stroke="#0284C7" strokeWidth="3" />
            <line x1="40" y1="40" x2="100" y2="40" stroke="#0369A1" strokeWidth="3" />
            {/* Badan Drone Bulat */}
            <circle cx="70" cy="52" r="22" fill="#FFFFFF" stroke="#0EA5E9" strokeWidth="3.5" />
            <circle cx="70" cy="52" r="14" fill="#F0FDF4" />
            {/* Mata Sensor Hijau */}
            <circle cx="70" cy="52" r="7" fill="#22C55E" />
            <circle cx="72" cy="50" r="2.5" fill="#FFFFFF" />
            {/* Daun Ekor Drone */}
            <path d="M70 74 Q64 88 56 90 Q68 94 72 74" fill="#4ADE80" stroke="#16A34A" strokeWidth="1.5" />
            <path d="M70 74 Q76 88 84 90 Q72 94 68 74" fill="#22C55E" stroke="#16A34A" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* 5. BIO-PROCESSOR CHIP SPROUT */}
      <div className="absolute top-28 right-16 opacity-80 animate-float-chip hidden sm:block">
        <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow-sm" fill="none">
          <rect x="20" y="30" width="60" height="50" rx="8" fill="#F8FAFC" stroke="#0284C7" strokeWidth="3" />
          <rect x="30" y="40" width="40" height="30" rx="5" fill="#0EA5E9" />
          <path d="M35 55 h30 M50 40 v30" stroke="#BAE6FD" strokeWidth="2" strokeDasharray="3 2" />
          <rect x="14" y="38" width="6" height="5" rx="1" fill="#F59E0B" />
          <rect x="14" y="48" width="6" height="5" rx="1" fill="#F59E0B" />
          <rect x="14" y="58" width="6" height="5" rx="1" fill="#F59E0B" />
          <rect x="80" y="38" width="6" height="5" rx="1" fill="#F59E0B" />
          <rect x="80" y="48" width="6" height="5" rx="1" fill="#F59E0B" />
          <rect x="80" y="58" width="6" height="5" rx="1" fill="#F59E0B" />
          {/* Tunas Daun Tumbuh */}
          <path d="M50 30 Q50 14 62 10 Q66 22 52 30" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
          <path d="M50 30 Q46 16 38 14 Q36 24 48 30" fill="#4ADE80" stroke="#15803D" strokeWidth="1.5" />
          <circle cx="50" cy="18" r="2" fill="#FBBF24" />
        </svg>
      </div>

      {/* 6. BIO-RAM STICK SPROUT */}
      <div className="absolute bottom-28 left-8 opacity-75 animate-float-chip-delayed hidden sm:block">
        <svg viewBox="0 0 110 70" className="w-24 h-16 drop-shadow-sm" fill="none">
          <rect x="10" y="24" width="85" height="34" rx="4" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2.5" />
          <rect x="18" y="28" width="12" height="16" rx="2" fill="#1E293B" />
          <rect x="36" y="28" width="12" height="16" rx="2" fill="#1E293B" />
          <rect x="54" y="28" width="12" height="16" rx="2" fill="#1E293B" />
          <rect x="72" y="28" width="12" height="16" rx="2" fill="#1E293B" />
          <line x1="16" y1="58" x2="88" y2="58" stroke="#EAB308" strokeWidth="3" strokeDasharray="3 2" />
          <path d="M24 24 Q20 12 14 12 Q14 20 22 24" fill="#22C55E" stroke="#16A34A" strokeWidth="1" />
          <path d="M78 24 Q82 12 88 12 Q88 20 80 24" fill="#4ADE80" stroke="#16A34A" strokeWidth="1" />
        </svg>
      </div>

      {/* 7. DAUN-DAUN DIGITAL BERGUGURAN (LEAF DRIFTING) */}
      <div className="absolute top-0 left-[18%] animate-leaf-drift-1">
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <path d="M8 32 C12 18 22 10 34 8 C32 20 24 30 8 32 Z" fill="#4ADE80" stroke="#16A34A" strokeWidth="2" />
          <line x1="8" y1="32" x2="28" y2="14" stroke="#16A34A" strokeWidth="1.5" strokeDasharray="2 1" />
        </svg>
      </div>

      <div className="absolute top-0 left-[62%] animate-leaf-drift-2">
        <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
          <path d="M8 32 C12 18 22 10 34 8 C32 20 24 30 8 32 Z" fill="#7DD3FC" stroke="#0284C7" strokeWidth="2" />
          <line x1="8" y1="32" x2="28" y2="14" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="2 1" />
        </svg>
      </div>

      <div className="absolute top-0 left-[84%] animate-leaf-drift-3">
        <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
          <path d="M8 32 C12 18 22 10 34 8 C32 20 24 30 8 32 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
          <line x1="8" y1="32" x2="28" y2="14" stroke="#CA8A04" strokeWidth="1.5" strokeDasharray="2 1" />
        </svg>
      </div>

      {/* 8. GELEMBUNG DATA ALAM (ECO DATA BUBBLE) MELAYANG NAIK */}
      <div className="absolute bottom-0 left-[12%] animate-bubble-1">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-400/20 to-emerald-400/30 border border-sky-300/50 backdrop-blur-xs flex flex-col items-center justify-center text-[10px] font-mono text-brand-700 shadow-sm">
          <span>01</span>
          <span className="text-[10px]">🌱</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-[46%] animate-bubble-2">
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-400/25 to-amber-300/25 border border-emerald-300/50 backdrop-blur-xs flex items-center justify-center text-xs shadow-sm">
          <span>⚙️</span>
        </div>
      </div>

      <div className="absolute bottom-0 right-[18%] animate-bubble-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-300/25 to-blue-400/25 border border-sky-300/50 backdrop-blur-xs flex items-center justify-center text-[9px] font-mono font-bold text-sky-800 shadow-sm">
          <span>101</span>
        </div>
      </div>

      {/* 9. ECO FLOWER GEARS DI SUDUT */}
      <div className="absolute -bottom-16 -right-16 w-52 h-52 text-emerald-200/40 animate-spin-slow-forward">
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      </div>

      <div className="absolute -top-16 -left-16 w-48 h-48 text-sky-200/40 animate-spin-slow-reverse">
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm-2 4a2 2 0 114 0 2 2 0 01-4 0zm10.7-1.3l-1.8-.4c-.1-.4-.2-.8-.4-1.2l1.1-1.5c.3-.4.2-1-.2-1.4l-1.4-1.4c-.4-.4-1-.4-1.4-.2l-1.5 1.1c-.4-.2-.8-.3-1.2-.4l-.4-1.8c-.1-.5-.5-.9-1.1-.9h-2c-.5 0-1 .4-1.1.9l-.4 1.8c-.4.1-.8.2-1.2.4L6.1 4.5c-.4-.3-1-.2-1.4.2L3.3 6.1c-.4.4-.4 1-.2 1.4l1.1 1.5c-.2.4-.3.8-.4 1.2l-1.8.4c-.5.1-.9.5-.9 1.1v2c0 .5.4 1 .9 1.1l1.8.4c.1.4.2.8.4 1.2l-1.1 1.5c-.3.4-.2 1 .2 1.4l1.4 1.4c.4.4 1 .4 1.4.2l1.5-1.1c.4.2.8.3 1.2.4l.4 1.8c.1.5.5.9 1.1.9h2c.5 0 1-.4 1.1-.9l.4-1.8c.4-.1.8-.2 1.2-.4l1.5 1.1c.4.3 1 .2 1.4-.2l1.4-1.4c.4-.4.4-1 .2-1.4l-1.1-1.5c.2-.4.3-.8.4-1.2l1.8-.4c.5-.1.9-.5.9-1.1v-2c0-.6-.4-1-.9-1.1z"/>
        </svg>
      </div>

      {/* 10. 3D FLOATING BACKGROUND TECH SATELLITES */}
      <div className="absolute top-16 right-1/4 opacity-40 animate-float-chip hidden lg:block">
        <img 
          src="/images/3d_monitor_cloud.png" 
          alt="Floating Cloud Monitor" 
          className="w-16 h-auto object-contain filter drop-shadow-sm blur-[0.5px]" 
        />
      </div>

      <div className="absolute bottom-40 right-10 opacity-35 animate-float-chip-delayed hidden lg:block">
        <img 
          src="/images/3d_data_funnel.png" 
          alt="Floating Data Funnel" 
          className="w-14 h-auto object-contain filter drop-shadow-sm blur-[0.5px]" 
        />
      </div>
    </div>
  );
}
