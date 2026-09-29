# DOKUMEN STORYBOARD VISUAL (ONE PAGE PER FRAME)
## MULTIMEDIA PEMBELAJARAN INTERAKTIF: SISTEM OPERASI
**Mata Kuliah:** Multimedia Pembelajaran (UTS Semester 5)  
**Format Media:** Web-Based Interactive Multimedia (Next.js 16 + Tailwind CSS + SVG Animation)  
**Sasaran Pengguna:** Mahasiswa Teknik Informatika / Sistem Informasi / Siswa SMK  

> **Petunjuk Cetak / Ekspor PDF:**  
> Setiap frame dirancang mandiri sebagai **satu halaman utuh** (*single page/slide*). Anda juga dapat membuka versi web interaktif siap cetak di peramban Anda melalui:  
> 🌐 `http://localhost:3000/storyboard-visual.html` (Tekan `Ctrl + P` untuk simpan ke PDF).

---

<!-- ========================================================================= -->
<!-- FRAME 01 : BERANDA & SAMBUTAN SUARA                                       -->
<!-- ========================================================================= -->

## FRAME 01: HALAMAN UTAMA / BERANDA & SAMBUTAN SUARA
* **ID Frame:** `FR-001`
* **Scene:** Beranda Pembuka (Hero Welcome Screen)
* **Target Durasi:** ~10 Detik / Awal Sesi Pembelajaran

### 1. Sketsa Layar (Wireframe)
```
+-----------------------------------------------------------------------------------+
| [🖥️ MPI SISTEM OPERASI]          [Modul 1] [Modul 2] [Modul 3] [Modul 4] [Modul 5] [🎯 Kuis] |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|        +-----------------------------------------------------------------+        |
|        |                          🚀 HERO BANNER                         |        |
|        |                                                                 |        |
|        |          "SELAMAT DATANG PARA PENAKLUK TEKNOLOGI!"              |        |
|        |                                                                 |        |
|        |    Media Pembelajaran Interaktif untuk Menjelajahi Cara Kerja    |        |
|        |    Sistem Operasi Komputer Secara Visual, Praktis, & Modern     |        |
|        |                                                                 |        |
|        |    [ ▶ MULAI PETUALANGAN BELAJAR ]   [ 🎧 PUTAR SAMBUTAN ]      |        |
|        +-----------------------------------------------------------------+        |
|                                                                                   |
|  +-------------------------+ +-------------------------+ +---------------------+  |
|  | 📚 5 Modul Teori Dasar  | | 🎬 4 Video Simulasi SVG | | 🏆 Kuis + Sertifikat|  |
|  | Disertai analogi nyata  | | Real-time & bersuara    | | QR Code pengayaan   |  |
|  +-------------------------+ +-------------------------+ +---------------------+  |
|                                                                                   |
|                                                               [🤖 Byte-Bot Bantuan]
+-----------------------------------------------------------------------------------+
```

### 2. Deskripsi Visual
* **Tata Letak & Hierarki:** Latar belakang gelap futuristik (*Slate 900*) dengan kartu *glassmorphism* melayang. Logo di pojok kiri atas dan bilah menu navigasi di kanan atas.
* **Banner Utama:** Judul utama berukuran besar dengan gradien biru langit (*Brand Sky 500*). Di bawahnya terdapat dua tombol aksi (*CTA Button*) berkontur tebal.
* **Tiga Kartu Fitur:** Disusun horizontal dengan ikon 3D representatif dan teks ringkas pengantar fitur unggulan.
* **Maskot Cerdas (Byte-Bot):** Muncul di pojok kanan bawah memberi sapaan visual interaktif.

### 3. Audio / Narasi & SFX
* **Voiceover Pembuka (Web Speech Synthesis AI):**  
  > *"Selamat datang para penakluk teknologi!"*
* **Sound Effects (SFX):** Efek denting klik lembut (*click.mp3*) saat tombol navigasi disentuh kursor.
* **BGM:** Musik latar instrumental teknologi bertempo tenang (*ambient tech track*), volume diatur 20% agar tidak menutupi suara narasi.

### 4. Interaktivitas
* **Tombol "Mulai Petualangan Belajar":** Memicu *smooth scrolling* otomatis langsung menuju Modul 1.
* **Tombol "Putar Sambutan":** Memutar ulang audio sambutan suara selamat datang secara mandiri.
* **Bilah Menu Modul 1-5 & Kuis:** Melompat langsung ke materi atau kuis pilihan pengguna.

### 5. Transisi Layar
* **Transisi Masuk (In):** Efek *Fade In* (durasi 400ms) saat halaman web pertama kali dimuat.
* **Transisi Keluar (Out):** Geser halus ke bawah (*Slide Down*) menuju frame Modul 1.

---

<!-- ========================================================================= -->
<!-- FRAME 02 : MODUL 1 - KONSEP DASAR OS                                      -->
<!-- ========================================================================= -->

## FRAME 02: MODUL 1 - KONSEP & HAKIKAT SISTEM OPERASI
* **ID Frame:** `FR-002`
* **Scene:** Modul 1 (Definisi, Analogi Orkestra, & Diagram Lapisan)
* **Target Durasi:** 3 – 5 Menit Pembacaan

### 1. Sketsa Layar (Wireframe)
```
+-----------------------------------------------------------------------------------+
| 📖 MODUL 1: HAKIKAT SISTEM OPERASI                                   [Modul 1 / 5]|
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  +------------------------------------+  +-------------------------------------+  |
|  | 🎼 ANALOGI KONDUKTOR MUSIK         |  | 🏛️ DIAGRAM ARSITEKTUR LAPISAN       |  |
|  |                                    |  |                                     |  |
|  | OS ibarat pemimpin orkestra yang   |  |   +-------------------------------+ |  |
|  | mengatur pemain biola (CPU), drum  |  |   | 👤 PENGGUNA (USER)            | |  |
|  | (RAM), & terompet (Storage) agar   |  |   +-------------------------------+ |  |
|  | tercipta irama tanpa benturan!     |  |   | 📱 APLIKASI (Word, Game, Web) | |  |
|  |                                    |  |   +-------------------------------+ |  |
|  | 3 Tugas Pokok OS:                  |  |   | ⚡ SISTEM OPERASI (OS KERNEL) | |  |
|  | 1. Resource Allocator (Hardware)   |  |   +-------------------------------+ |  |
|  | 2. Extended Machine (System Call)  |  |   | 🖥️ PERANGKAT KERAS (HARDWARE)  | |  |
|  | 3. Security Barrier (Proteksi)     |  |   +-------------------------------+ |  |
|  +------------------------------------+  +-------------------------------------+  |
|                                                                                   |
|  [ ⏮ KEMBALI KE BERANDA ]                    [ LANJUT KE MODUL 2: KARAKTERISTIK ⏭ ]|
+-----------------------------------------------------------------------------------+
```

### 2. Deskripsi Visual
* **Tata Letak:** 2 Kolom berdampingan (*Two-Column Responsive Split*).
* **Kolom Kiri:** Kartu teks teori dengan ilustrasi konduktor musik dan poin 3 peran krusial OS.
* **Kolom Kanan:** Diagram tumpukan vertikal (*Stack Diagram*) dengan warna kontras: Pengguna (Biru Muda), Aplikasi (Biru Tua), OS (Kuning Emas berpendar), dan Hardware (Abu-abu Gelap).
* **Navigasi Bawah:** Sepasang tombol navigasi di kiri (mundur) dan kanan (maju).

### 3. Audio / Narasi & SFX
* **SFX:** Efek gesekan kartu halus saat kursor menunjuk diagram lapisan (*hover swoosh sound*).
* **BGM:** Musik instrumental santai terus mengiringi.

### 4. Interaktivitas
* **Hover Diagram:** Menyorot diagram lapisan memunculkan panah animasi alur perintah (*System Call Flow*) dari Aplikasi menuju Kernel OS.
* **Tombol Lanjut:** Membawa siswa ke Modul 2.

### 5. Transisi Layar
* **Transisi Masuk (In):** *Slide In* dari bawah dengan efek *staggered entrance* per kartu.
* **Transisi Keluar (Out):** Geser ke kiri (*Slide Left*, durasi 300ms) saat menuju Modul 2.

---

<!-- ========================================================================= -->
<!-- FRAME 03 : MODUL 2 - MENU 4 PILAR KARAKTERISTIK OS                       -->
<!-- ========================================================================= -->

## FRAME 03: MODUL 2 - HUB 4 PILAR KARAKTERISTIK SISTEM OPERASI
* **ID Frame:** `FR-003`
* **Scene:** Modul 2 (Dashboard Pemilihan Simulator Karakteristik)
* **Target Durasi:** 2 Menit Pemilihan

### 1. Sketsa Layar (Wireframe)
```
+-----------------------------------------------------------------------------------+
| ⚙️ MODUL 2: EMPAT PILAR KARAKTERISTIK SISTEM OPERASI                              |
| Pilih salah satu pilar untuk menyaksikan video simulasi interaktif & narasi suara |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  +----------------+  +----------------+  +----------------+  +-----------------+  |
|  | 🔀 PILAR 1     |  | 🤝 PILAR 2     |  | 🔮 PILAR 3     |  | ⚡ PILAR 4      |  |
|  | CONCURRENCY    |  | RESOURCE SHARE |  | VIRTUALIZATION |  | ASYNCHRONY      |  |
|  | (Multitasking) |  | (Bagi Printer) |  | (Memori Maya)  |  | (Interupsi)     |  |
|  |                |  |                |  |                |  |                 |  |
|  | Eksekusi tugas |  | 10 laptop bagi |  | RAM terbatas   |  | Video 60 FPS    |  |
|  | dlm irisan CPU |  | 1 printer lab  |  | dibantu swap   |  | tak macet saat  |  |
|  | time-slicing.  |  | antrean tertib.|  | disk SSD luas. |  | mouse diklik.   |  |
|  |                |  |                |  |                |  |                 |  |
|  | [🎬 SIMULASI 1]|  | [🎬 SIMULASI 2]|  | [🎬 SIMULASI 3]|  | [🎬 SIMULASI 4 ] |  |
|  +----------------+  +----------------+  +----------------+  +-----------------+  |
|                                                                                   |
|  [ ⏮ MODUL 1 ]                                                [ MODUL 3: KERNEL ⏭ ]|
+-----------------------------------------------------------------------------------+
```

### 2. Deskripsi Visual
* **Grid 4 Kartu Interaktif:** Disusun sejajar 4 kolom dengan tema warna khas:
  * Pilar 1 (Biru Sky): Ikon laptop koding 3D.
  * Pilar 2 (Amber Oranye): Ikon corong pembagian sumber daya 3D.
  * Pilar 3 (Ungu Indigo): Ikon rak server virtualisasi 3D.
  * Pilar 4 (Hijau Zamrud): Ikon mouse dan sambaran petir 3D.
* **Tombol Aksi:** Tombol gradien cerah di bagian bawah setiap kartu (*"Tonton Video Simulasi ... 🎬"*).

### 3. Audio / Narasi & SFX
* **SFX Tombol:** Bunyi ketukan cerah (*button tap*) saat salah satu kartu simulator ditekan.

### 4. Interaktivitas
* **Hover State:** Kartu membesar 3% (*scale-103*) dan bayangannya menebal saat disorot kursor.
* **Click Event:** Membuka jendela pop-up modal layar penuh yang menyematkan simulator SVG terkait.

### 5. Transisi Layar
* **Transisi Masuk (In):** *Fade In & Blur Background* saat jendela modal simulator terbuka.

---

<!-- ========================================================================= -->
<!-- FRAME 04 : SIMULASI 1 - CONCURRENCY (MULTITASKING)                        -->
<!-- ========================================================================= -->

## FRAME 04: MODAL SIMULASI 1 - CONCURRENCY (MULTITASKING BAYU)
* **ID Frame:** `FR-004`
* **Scene:** Simulator Interaktif SVG Pilar 1 (`public/simulasi-multitasking.html`)
* **Target Durasi:** 32.2 Detik (Sinkron Audio)

### 1. Sketsa Layar (Wireframe)
```
+-----------------------------------------------------------------------------------+
| 🎬 SIMULASI 1: CONCURRENCY (MULTITASKING: SEHARI BERSAMA BAYU)               [ ✕ ]|
| OS-KERNEL v5.15 MONITOR | ● 60 FPS SIMULATED | Time-Slice: 10ms                   |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|   +---------------------------------------------------------------------------+   |
|   | 🧠 CPU MONITOR (1-CORE): Irisan #42 -> Word [ 🟦 🟩 🟧 🟦 🟩 🟧 🟦 🟩 ]   |   |
|   +---------------------------------------------------------------------------+   |
|   |                                                                           |   |
|   |    🧑‍💻 BAYU BELAJAR           💻 LAYAR LAPTOP BAYU                         |   |
|   |    - Tangan mengetik Word   +-------------------+ +---------------------+ |   |
|   |    - Headphone Spotify      | 📝 Word           | | 🎵 Spotify          | |   |
|   |    - Mengunduh jurnal web   | Ketik makalah...  | | [||||||||] Equalizer| |   |
|   |                             +-------------------+ +---------------------+ |   |
|   |                                                   | 🌐 Browser          | |   |
|   |                                                   | [===========>] 85%  | |   |
|   |                                                   +---------------------+ |   |
|   +---------------------------------------------------------------------------+   |
|                                                                                   |
|   💬 TAKARIR: "Di balik layar: CPU hanya punya 1 core! OS membagi waktu CPU      |
|                (time slicing) secara bergiliran dalam milidetik."                 |
|                                                                                   |
|   [ ⏸ Jeda ] [ ↺ Reset ] [ 🔊 Suara ]  [━━━━━━━●━━━━━━━━━━━━━━━━] 18 / 32 dtk      |
|                                                      [ ↗ Buka di Tab Baru ]       |
+-----------------------------------------------------------------------------------+
```

### 2. Deskripsi Visual
* **Panggung Animasi SVG (800x450):** Latar biru langit (*#dfefff*) dengan Bayu di sebelah kiri dan laptop di sebelah kanan.
* **Elemen Bergerak:**
  * Jari tangan Bayu naik-turun mengetik karakter teks Word.
  * Headphone hijau di kepala Bayu dengan not balok nada beterbangan.
  * Equalizer musik Spotify memantul naik-turun secara acak.
  * Bilah progres unduhan browser bergerak memanjang dari 0% ke 100%.
  * Balok CPU di atas berganti warna milidetik antara Biru (Word), Hijau (Spotify), dan Oranye (Browser).

### 3. Audio / Narasi & SFX
* **File Suara:** [**`/suara/video1.mp4`**](file:///d:/KULIAH/SEMESTER%205/MULTIMEDIA%20PEMBELAJARAN/UTS/public/suara/video1.mp4) (Durasi: 32.2 Detik).
* **Naskah Narasi Lengkap:**
  1. *[0.0s]* "Kenalkan Bayu, mahasiswa yang punya tiga urusan sekaligus..."
  2. *[4.0s]* "Pertama, Bayu mengetik tugas di Word."
  3. *[8.0s]* "Sambil itu, ia memasang headphone dan mendengarkan Spotify."
  4. *[12.0s]* "Lalu ia mengunduh file referensi di browser. Semua terlihat bersamaan!"
  5. *[18.0s]* "Di balik layar: CPU hanya punya 1 core! OS membagi waktu CPU (time slicing)..."
  6. *[26.0s]* "Karena perpindahannya super cepat, kita merasa semuanya berjalan bersamaan. Itulah Concurrency!"

### 4. Interaktivitas
* **Play / Pause (`▶ / ⏸`):** Menghentikan dan melanjutkan gerak SVG serta suara serentak.
* **Tombol Ulang (`↺`):** Mengembalikan animasi dan audio ke detik 0:00.
* **Tombol Mute (`🔊 / 🔇`):** Membisukan vokal narator.
* **Scrubber Slider:** Menggeser *scrubber* memajukan/memundurkan posisi animasi dan vokal audio dua arah (*two-way sync*).
* **Tombol Tab Baru:** Membuka file standalone di tab peramban baru.

### 5. Transisi Layar
* Takarir teks memudar (*fade-transition*) setiap kali narasi memasuki kalimat baru.
* Tombol silang `[✕]` menutup modal dan menghentikan audio.

---

<!-- ========================================================================= -->
<!-- FRAME 05 : SIMULASI 2 - RESOURCE SHARING (PRINTER LAB)                    -->
<!-- ========================================================================= -->

## FRAME 05: MODAL SIMULASI 2 - RESOURCE SHARING (BERBAGI PRINTER LAB)
* **ID Frame:** `FR-005`
* **Scene:** Simulator Interaktif SVG Pilar 2 (`public/simulasi-berbagi-printer.html`)
* **Target Durasi:** 51.5 Detik (Sinkron Audio)

### 1. Sketsa Layar (Wireframe)
```
+-----------------------------------------------------------------------------------+
| 🎬 SIMULASI 2: RESOURCE SHARING (BERBAGI PRINTER DI LAB KOMPUTER)            [ ✕ ]|
| JARINGAN LAN LAB | SPOOLER BUFFER RAM | ANTREAN TERTIB (FIFO)                     |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|   +---------------------------------------------------------------------------+   |
|   | 🏫 LAB KOMPUTER                                  📋 ANTREAN CETAK SPOOLER |   |
|   |                                                  +----------------------+ |   |
|   | 💻 Mhs 1  💻 Mhs 2  💻 Mhs 3                     | 🖨️ Mhs 1 (Sedang Cetak)| |   |
|   | [📤 Print] [📤 Print] [⏳ Antre]                  | 📄 Mhs 2 (Antrean #1)| |   |
|   |    \          |          /                       | 📄 Mhs 3 (Antrean #2)| |   |
|   |     ====[ 🌐 SWITCH LAN ]=====> (Paket Data) ===>| 📄 Mhs 4 (Antrean #3)| |   |
|   |    /          |          \                       +----------------------+ |   |
|   | 💻 Mhs 4  💻 Mhs 5  💻 Mhs 6                     🖨️ PRINTER LASER LAB     |   |
|   |                                                  [📄 Cetak Lembar Mhs 1]  |   |
|   +---------------------------------------------------------------------------+   |
|                                                                                   |
|   💬 TAKARIR: "Sistem operasi menaruh semua pekerjaan ke antrean cetak            |
|                (spooler), jadi tidak saling tabrakan."                            |
|                                                                                   |
|   [ ⏸ Jeda ] [ ↺ Reset ] [ 🔊 Suara ]  [━━━━━━━━━━●━━━━━━━━━━━━━] 24 / 51 dtk      |
|   Status: ✅ 4/10 Tercetak                           [ ↗ Buka di Tab Baru ]       |
+-----------------------------------------------------------------------------------+
```

### 2. Deskripsi Visual
* **Panggung Animasi SVG (800x450):** Latar ruang lab komputer krem hangat (*#fdf3dc*).
* **Elemen Bergerak:**
  * 10 Laptop mahasiswa berwarna-warni terhubung ke lingkaran Switch LAN sentral.
  * Paket-paket data bulat meluncur sepanjang kabel virtual menuju kotak antrean spooler.
  * Baris antrean spooler bergeser teratur ke atas setiap kali satu dokumen selesai.
  * Kertas dokumen dengan garis tinta warna muncul keluar dari mulut printer laser.

### 3. Audio / Narasi & SFX
* **File Suara:** [**`/suara/video2.mp4`**](file:///d:/KULIAH/SEMESTER%205/MULTIMEDIA%20PEMBELAJARAN/UTS/public/suara/video2.mp4) (Durasi: 51.5 Detik).
* **Naskah Narasi Lengkap:**
  1. *[0.0s]* "Di lab komputer ada 10 laptop, tetapi hanya 1 printer..."
  2. *[7.5s]* "Kesepuluh mahasiswa menekan tombol Cetak via jaringan..."
  3. *[16.0s]* "Sistem operasi menaruh semua pekerjaan ke antrean cetak (spooler)..."
  4. *[24.5s]* "Printer mengerjakan satu per satu sesuai urutan..."
  5. *[44.5s]* "Semua tercetak dengan tertib. Itulah Resource Sharing!"

### 4. Interaktivitas
* **Two-Way Scrubber Audio:** Menggeser slider ke detik 30 langsung mengarahkan visual dan suara ke proses pencetakan mahasiswa ke-4.
* **Counter Dinamis:** Teks *"✅ x/10 tercetak"* diperbarui real-time.

### 5. Transisi Layar
* Kertas tercetak jatuh ke tumpukan selesai dengan animasi *slide down and fade*.

---

<!-- ========================================================================= -->
<!-- FRAME 06 : SIMULASI 3 - VIRTUALIZATION (MEMORI VIRTUAL)                   -->
<!-- ========================================================================= -->

## FRAME 06: MODAL SIMULASI 3 - VIRTUALIZATION (MEMORI VIRTUAL)
* **ID Frame:** `FR-006`
* **Scene:** Simulator Interaktif SVG Pilar 3 (`public/simulasi-memori-virtual.html`)
* **Target Durasi:** 61.6 Detik (Sinkron Audio)

### 1. Sketsa Layar (Wireframe)
```
+-----------------------------------------------------------------------------------+
| 🎬 SIMULASI 3: VIRTUALIZATION (MEMORI VIRTUAL: RAM PENUH, HARDDISK MEMBANTU) [ ✕ ]|
| OS MEMORY MANAGER | HARDWARE TRANSPARENCY | SWAP-OUT & SWAP-IN                    |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|   +---------------------------------------------------------------------------+   |
|   | 🧑‍💻 APLIKASI BAYU       🧠 RAM FISIK (TERBATAS 6 SLOT)     🔮 TAMPILAN VIRTUAL|   |
|   |                        [ W1 ][ W2 ][ B1 ][ B2 ][ S1 ][ S2 ]   (Aplikasi)      |   |
|   | 📝 Word                                                    📝 Word: Lega ✓    |   |
|   | 🌐 Browser                      ⬇ SWAP OUT (Word -> Disk)  🌐 Chrome: Lega ✓  |   |
|   | 🎵 Spotify                                                 🎨 Photo: Lega ✓   |   |
|   | 🎨 Photoshop           💽 HARDDISK / SSD (SWAP SPACE LUAS)                    |   |
|   | (Baru dibuka)          [ W1 ][ W2 ][    ][    ][    ][    ]                    |   |
|   +---------------------------------------------------------------------------+   |
|                                                                                   |
|   💬 TAKARIR: "Bayu membuka Photoshop. OS memindahkan halaman Word yang lama      |
|                tak dipakai ke harddisk (swap out) demi ruang kosong."             |
|                                                                                   |
|   [ ⏸ Jeda ] [ ↺ Reset ] [ 🔊 Suara ]  [━━━━━━━━━━━━●━━━━━━━━━━━] 25 / 61 dtk      |
|   RAM Status: 6/6 Penuh                              [ ↗ Buka di Tab Baru ]       |
+-----------------------------------------------------------------------------------+
```

### 2. Deskripsi Visual
* **Panggung Animasi SVG (800x450):** Latar ungu pastel (*#f1e7ff*) dengan 3 zona: Aplikasi Bayu (Kiri), Manajemen RAM & Disk (Tengah), Tampilan Maya Aplikasi (Kanan).
* **Elemen Bergerak:**
  * Balok halaman memori (W1, W2, B1, B2, S1, S2, P1, P2).
  * Efek *Swap Out*: Balok Word meluncur turun ke baris harddisk disertai label oranye *"⬇ SWAP OUT ke harddisk"*.
  * Efek *Swap In*: Balok Word meluncur naik kembali ke RAM fisik disertai label hijau *"⬆ SWAP IN ke RAM"*.

### 3. Audio / Narasi & SFX
* **File Suara:** [**`/suara/video3.mp4`**](file:///d:/KULIAH/SEMESTER%205/MULTIMEDIA%20PEMBELAJARAN/UTS/public/suara/video3.mp4) (Durasi: 61.6 Detik).
* **Naskah Narasi Lengkap:**
  1. *[0.0s]* "RAM Bayu terbatas, hanya 6 slot..."
  2. *[7.0s]* "Bayu membuka Word. OS menaruh halaman memorinya di RAM."
  3. *[12.0s]* "Lalu Bayu membuka browser, dan Spotify. RAM mulai terisi."
  4. *[17.5s]* "RAM sekarang penuh (6/6)!"
  5. *[20.0s]* "Bayu membuka Photoshop. OS memindahkan halaman Word ke harddisk (swap out)..."
  6. *[27.0s]* "Aplikasi tetap merasa punya memori lega. Kerumitan disembunyikan OS."
  7. *[37.5s]* "Bayu kembali ke Word. OS menukar halaman kembali ke RAM (swap in)."
  8. *[51.5s]* "Itulah Virtualization!"

### 4. Interaktivitas
* Slider scrubber mengatur waktu hingga 61.6 detik secara presisi selaras narasi vokal.
* Indikator kapasitas RAM dinamis berubah dari `2/6` $\rightarrow$ `6/6` (penuh) $\rightarrow$ pertukaran swap.

### 5. Transisi Layar
* Pergerakan balok swap menggunakan animasi kurva akselerasi-deselerasi (*smooth easing*).

---

<!-- ========================================================================= -->
<!-- FRAME 07 : SIMULASI 4 - ASYNCHRONY (INTERUPSI VIDEO)                      -->
<!-- ========================================================================= -->

## FRAME 07: MODAL SIMULASI 4 - ASYNCHRONY (INTERUPSI MOUSE & VIDEO 60 FPS)
* **ID Frame:** `FR-007`
* **Scene:** Simulator Interaktif SVG Pilar 4 (`public/simulasi-interupsi-video.html`)
* **Target Durasi:** 31.7 Detik (Sinkron Audio)

### 1. Sketsa Layar (Wireframe)
```
+-----------------------------------------------------------------------------------+
| 🎬 SIMULASI 4: ASYNCHRONY (INTERUPSI: KLIK MOUSE SAAT VIDEO BERPUTAR)        [ ✕ ]|
| HARDWARE INTERRUPT (IRQ) | INTERRUPT SERVICE ROUTINE (ISR) | ZERO FREEZE          |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|   +---------------------------------------------------------------------------+   |
|   | 🧑‍💻 BAYU MENONTON FILM (60 FPS)                 🧠 CPU EXECUTION UNIT       |   |
|   | +------------------------------------+        +-------------------------+ |   |
|   | | ▶ Frame 420 (Roda Bergerak Mulus)  |        | ⚡ INTERUPSI DARI MOUSE! | |   |
|   | |                                    |  ⚡IRQ |                         | |   |
|   | | [ 🔊 Vol ] [ ❤️ Like ] [ CC ] [ 📷 ] | =====> | 1. Simpan posisi video  | |   |
|   | +------------------------------------+        | 2. Jalankan ISR klik    | |   |
|   |                                               | 3. Lanjutkan video      | |   |
|   | Timeline CPU:                                 +-------------------------+ |   |
|   | [🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟥🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩]    |   |
|   | (🟩 Video 60 FPS | 🟥 Interupsi ISR 4µs Kilat)                             |   |
|   +---------------------------------------------------------------------------+   |
|                                                                                   |
|   💬 TAKARIR: "Klik = interupsi! CPU menyimpan posisi video, lalu menjalankan     |
|                penanganan klik (ISR). Video tidak macet sama sekali."             |
|                                                                                   |
|   [ ⏸ Jeda ] [ ↺ Reset ] [ 🔊 Suara ]  [━━━━━━━●━━━━━━━━━━━━━━━━] 10 / 31 dtk      |
|   Status: ⚡ Interupsi: 4/4 | 🎞 Freeze: 0 kali ✓     [ ↗ Buka di Tab Baru ]       |
+-----------------------------------------------------------------------------------+
```

### 2. Deskripsi Visual
* **Panggung Animasi SVG (800x450):** Latar hijau mint (*#e2fbef*) dengan layar bioskop mini di kiri dan prosesor CPU di kanan.
* **Elemen Bergerak:**
  * Video memutar animasi bola dinamis tanpa tersendat (*stable 60 FPS*).
  * Kursor mouse bergerak otomatis mengklik tombol kontrol film.
  * Sambaran kilat kuning ⚡ memancar dari kursor melintasi layar menuju CPU saat klik terjadi.
  * Baris timeline CPU bawah menampilkan balok hijau video yang diselingi garis merah tipis tanda interupsi kilat.

### 3. Audio / Narasi & SFX
* **File Suara:** [**`/suara/video4.mp4`**](file:///d:/KULIAH/SEMESTER%205/MULTIMEDIA%20PEMBELAJARAN/UTS/public/suara/video4.mp4) (Durasi: 31.7 Detik).
* **Naskah Narasi Lengkap:**
  1. *[0.0s]* "Bayu menonton video. CPU sibuk memutar video frame demi frame."
  2. *[5.0s]* "Bayu menggerakkan mouse ke tombol volume, lalu mengeklik."
  3. *[8.0s]* "Klik = interupsi! CPU menyimpan posisi video, lalu menjalankan penanganan (ISR)."
  4. *[9.2s]* "Selesai ditangani, CPU langsung melanjutkan video tanpa macet sama sekali."
  5. *[12.5s]* "Bayu mengeklik tombol lain kapan saja... OS selalu siap merespons."
  6. *[26.0s]* "Itulah Asynchrony: OS merespons interupsi mendadak tanpa membuat komputer freeze!"

### 4. Interaktivitas
* Counter interupsi mencatat: *"⚡ Interupsi ditangani: 4/4 | 🎞 Video freeze: 0 kali ✓"*.
* Scrubber timeline menggeser audio dan animasi klik secara serempak.

### 5. Transisi Layar
* Kilat ⚡ memancar dan memudar dalam 350ms menandai selesainya eksekusi *Interrupt Service Routine*.

---

<!-- ========================================================================= -->
<!-- FRAME 08 : MODUL 3 - ARSITEKTUR & KOMPONEN INTI OS                        -->
<!-- ========================================================================= -->

## FRAME 08: MODUL 3 - ARSITEKTUR & KOMPONEN INTI SISTEM OPERASI
* **ID Frame:** `FR-008`
* **Scene:** Modul 3 (Struktur Kernel, Scheduler, Paging, File System, & Drivers)
* **Target Durasi:** 4 Menit Pembacaan

### 1. Sketsa Layar (Wireframe)
```
+-----------------------------------------------------------------------------------+
| 🏗️ MODUL 3: KOMPONEN INTERNAL & KERNEL SISTEM OPERASI                 [Modul 3 / 5]|
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [ 1. Kernel Mode ] [ 2. CPU Scheduler ] [ 3. Memory ] [ 4. File ] [ 5. Driver ]  |
|                                                                                   |
|  +------------------------------------+  +-------------------------------------+  |
|  | 🛡️ DUAL-MODE OPERATION             |  | ⚖️ MONOLITHIC VS MICROKERNEL        |  |
|  |                                    |  |                                     |  |
|  | Ring 3: User Space (Aplikasi)      |  | • Monolithic Kernel (Linux/WinNT):  |  |
|  | ---------------------------------- |  |   Semua driver, IPC, & fs di dalam  |  |
|  | === System Call Gate (Jembatan) == |  |   ruang kernel. Cepat & bertenaga!  |  |
|  | ---------------------------------- |  |                                     |  |
|  | Ring 0: Kernel Space (Hak Penuh)   |  | • Microkernel (Minix/QNX):          |  |
|  |   - CPU Core & Interrupts          |  |   Hanya servis minimum di kernel.   |  |
|  |   - Manajemen Memori Fisik         |  |   Jika driver crash, OS tak mati!   |  |
|  +------------------------------------+  +-------------------------------------+  |
|                                                                                   |
|  [ ⏮ MODUL 2: KARAKTERISTIK ]                       [ MODUL 4: EVOLUSI OS ⏭ ]     |
+-----------------------------------------------------------------------------------+
```

### 2. Deskripsi Visual
* **Bilah Tab Komponen:** 5 tab horizontal di bagian atas untuk navigasi cepat antar komponen arsitektur.
* **Diagram Cincin Hak Akses (*Ring 0 & Ring 3*):** Menjelaskan batas privilese eksekusi kode program.
* **Diagram Arsitektur Kernel:** Perbandingan skematis antara Monolithic, Microkernel, dan Hybrid.

### 3. Audio / Narasi & SFX
* **SFX:** Efek perpindahan tab (*tab switch tick*) saat memilih komponen.

### 4. Interaktivitas
* Mengklik tab langsung memuat materi komponen tanpa reload (*instant client-side switch*).

### 5. Transisi Layar
* Konten tab berganti dengan efek *Fade In* berdurasi 200ms.

---

<!-- ========================================================================= -->
<!-- FRAME 09 : MODUL 4 - EVOLUSI & KLASIFIKASI OS                            -->
<!-- ========================================================================= -->

## FRAME 09: MODUL 4 - EVOLUSI & SEJARAH SISTEM OPERASI
* **ID Frame:** `FR-009`
* **Scene:** Modul 4 (Garis Waktu Generasi OS & Perbandingan CLI vs GUI)
* **Target Durasi:** 3 Menit Pembacaan

### 1. Sketsa Layar (Wireframe)
```
+-----------------------------------------------------------------------------------+
| ⏳ MODUL 4: SEJARAH & GARIS WAKTU GENERASI OS                         [Modul 4 / 5]|
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  +------------+ +------------+ +------------+ +------------+ +-----------------+  |
|  | GEN 1 1940 | | GEN 2 1950 | | GEN 3 1960 | | GEN 4 1980 | | GEN 5 KINI      |  |
|  | Tabung     | | Batch      | | Time-      | | Era GUI PC | | Mobile, Cloud,  |  |
|  | Vakum      | | Processing | | Sharing    | | Windows 95 | | IoT, & RTOS AI  |  |
|  | (Belum OS) | | Punch Card | | UNIX Lahir | | Macintosh  | | Cerdas          |  |
|  +------------+ +------------+ +------------+ +------------+ +-----------------+  |
|                                                                                   |
|  +-------------------------------------+  +------------------------------------+  |
|  | ⬛ ERA COMMAND LINE INTERFACE (CLI)  |  | 🎨 ERA GRAPHICAL USER INTERFACE    |  |
|  | C:\Users\DOS> dir                   |  | Ikon visual, mouse kursor, drag &  |  |
|  | C:\Users\DOS> copy file.txt A:\     |  | drop, jendela mengambang bebas.    |  |
|  +-------------------------------------+  +------------------------------------+  |
|                                                                                   |
|  [ ⏮ MODUL 3: KERNEL ]                          [ MODUL 5: KOMPARASI OS ⏭ ]       |
+-----------------------------------------------------------------------------------+
```

### 2. Deskripsi Visual
* **Garis Waktu Horizontal (5 Kartu Generasi):** Penanda era tabung vakum hingga komputasi awan.
* **Perbandingan Terminal CLI vs Desktop GUI:** Konsol hitam berteks hijau berdampingan dengan tampilan jendela GUI warna-warni.

### 3. Audio / Narasi & SFX
* **SFX:** Bunyi ketikan keyboard retro (*typewriter click*) saat kursor menyentuh kotak CLI.

### 4. Interaktivitas
* Kartu generasi terangkat (*hover elevate*) saat disentuh kursor mouse.

### 5. Transisi Layar
* Transisi geser horizontal (*horizontal scroll motion*).

---

<!-- ========================================================================= -->
<!-- FRAME 10 : MODUL 5 - KOMPARASI DESKTOP VS MOBILE OS                      -->
<!-- ========================================================================= -->

## FRAME 10: MODUL 5 - KOMPARASI SISTEM OPERASI DESKTOP VS MOBILE
* **ID Frame:** `FR-010`
* **Scene:** Modul 5 (Tabel Komparasi Menyeluruh & Panduan Memilih OS)
* **Target Durasi:** 3 Menit Pembacaan

### 1. Sketsa Layar (Wireframe)
```
+-----------------------------------------------------------------------------------+
| ⚖️ MODUL 5: KOMPARASI DESKTOP OS VS MOBILE OS                         [Modul 5 / 5]|
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  +-----------------------------------------------------------------------------+  |
|  | Aspek Analisis      | 🖥️ Desktop OS (Windows, macOS)| 📱 Mobile OS (Android, iOS) | |
|  |---------------------+-------------------------------+-----------------------| |
|  | Perangkat Input     | Mouse 1px & Keyboard Fisik    | Sentuhan Jempol & Gestur| |
|  | Manajemen Daya      | Colokan Listrik AC Permanen   | Baterai Ketat (Bekukan) | |
|  | Multitasking        | Jendela Bebas Berdampingan    | Fokus 1 Layar Penuh   | |
|  | Akses File System   | Administrator Bebas           | Isolasi Sandbox Ketat | |
|  | Arsitektur Chipset  | x86-64 Daya Besar             | ARM Efisiensi Energi  | |
|  +-----------------------------------------------------------------------------+  |
|                                                                                   |
|  +-----------------------------------------------------------------------------+  |
|  | 🤖 TIPS BYTE-BOT: Desktop unggul untuk produktivitas berat (koding/akuntansi), |  |
|  | sedangkan Mobile unggul untuk akses instan di mana saja dengan aman!        |  |
|  +-----------------------------------------------------------------------------+  |
|                                                                                   |
|  [ ⏮ MODUL 4: SEJARAH ]                       [ 🎯 MENMENUJU KUIS EVALUASI ⏭ ]   |
+-----------------------------------------------------------------------------------+
```

### 2. Deskripsi Visual
* **Tabel Matriks Komparatif:** Desain tabel profesional bergaris halus dengan warna tajuk kontras.
* **Kotak Sintesis Byte-Bot:** Bingkai bergradien oranye-kuning merangkum pertimbangan memilih OS.
* **Tombol Menuju Kuis:** Tombol hijau zamrud berukuran menonjol di kanan bawah.

### 3. Audio / Narasi & SFX
* **SFX:** Efek *quiz ready chime* saat tombol menuju kuis disentuh kursor.

### 4. Interaktivitas
* Baris tabel tersorot (*row highlight*) saat kursor diarahkan ke salah satu aspek analisis.
* Tombol *Menuju Kuis Evaluasi* membuka ruang ujian interaktif.

### 5. Transisi Layar
* Geser ke kiri (*Slide Left*) mengalihkan layar menuju modul kuis evaluasi.

---

<!-- ========================================================================= -->
<!-- FRAME 11 : EVALUASI - KUIS INTERAKTIF                                     -->
<!-- ========================================================================= -->

## FRAME 11: EVALUASI - KUIS INTERAKTIF SISTEM OPERASI
* **ID Frame:** `FR-011`
* **Scene:** Lembar Soal Kuis Pilihan Ganda (10 Butir Soal)
* **Target Durasi:** 5 – 8 Menit Pengerjaan

### 1. Sketsa Layar (Wireframe)
```
+-----------------------------------------------------------------------------------+
| 🎯 KUIS EVALUASI PEMAHAMAN SISTEM OPERASI                            Soal 4 dari 10|
| Progress: [=====================>                               ] 40% Selesai     |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  +-----------------------------------------------------------------------------+  |
|  | SOAL NO. 4:                                                                 |  |
|  | Manakah mekanisme OS yang digunakan saat kapasitas RAM fisik telah penuh   |  |
|  | agar komputer tidak crash ketika membuka aplikasi baru?                     |  |
|  +-----------------------------------------------------------------------------+  |
|                                                                                   |
|  [ A ] Menghapus otomatis file sistem operasi dari harddisk                       |
|                                                                                   |
|  [ B ] (BENAR ✓) Memindahkan halaman pasif ke swap space harddisk (Virtual Memory)|
|                                                                                   |
|  [ C ] Mematikan pasokan daya listrik ke layar monitor                            |
|                                                                                   |
|  [ D ] Mengunci kursor mouse secara permanen hingga komputer restart              |
|                                                                                   |
|  +-----------------------------------------------------------------------------+  |
|  | 💡 PEMBAHASAN EDUKATIF:                                                     |  |
|  | Konsep Virtualisasi memori memanfaatkan sebagian ruang harddisk/SSD sebagai    |  |
|  | memori cadangan maya (Swap Space) saat RAM fisik (6 slot) terisi penuh.       |  |
|  +-----------------------------------------------------------------------------+  |
|                                                                                   |
|                                                      [ LANJUT KE SOAL BERIKUTNYA ➔]|
+-----------------------------------------------------------------------------------+
```

### 2. Deskripsi Visual
* **Bilah Kemajuan (*Progress Bar*):** Garis hijau di atas menunjukkan persentase pengerjaan (10% s.d. 100%).
* **Kartu Pilihan Jawaban:** 4 Pilihan tombol berukuran besar dengan penanda huruf A, B, C, D.
* **Umpan Balik Warna Langsung:** Pilihan benar menyala hijau terang (`#10b981`), sedangkan pilihan salah menyala merah (`#ef4444`).
* **Kotak Pembahasan:** Kotak hijau tua menampilkan penjelasan konsep secara ringkas dan padat.

### 3. Audio / Narasi & SFX
* **SFX Jawaban Benar:** Lonceng kemenangan manis (*bell chime victory*).
* **SFX Jawaban Salah:** Nada dengung lembut (*gentle error buzz*).

### 4. Interaktivitas
* Menekan salah satu pilihan mengunci jawaban, menghitung skor secara otomatis, memunculkan kotak pembahasan, dan mengaktifkan tombol lanjut.

### 5. Transisi Layar
* Efek geser kartu (*card slide transition*) berganti mulus ke butir soal berikutnya.

---

<!-- ========================================================================= -->
<!-- FRAME 12 : HASIL EVALUASI - KELULUSAN & PENGAYAAN                         -->
<!-- ========================================================================= -->

## FRAME 12: HASIL EVALUASI - KELULUSAN & VIDEO PENGAYAAN (SKOR ≥ 70)
* **ID Frame:** `FR-012`
* **Scene:** Layar Akhir Kelulusan Kompetensi
* **Target Kondisi:** Skor Siswa $\ge$ 70 (Lulus KKM)

### 1. Sketsa Layar (Wireframe)
```
+-----------------------------------------------------------------------------------+
| 🏆 HASIL EVALUASI: SELAMAT ANDA LULUS!                                             |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  +-----------------------------------+  +--------------------------------------+  |
|  | 🎉 SERTIFIKAT KELULUSAN DIGITAL   |  | 📱 VIDEO PENGAYAAN MATERI (YOUTUBE)  |  |
|  |                                   |  |                                      |  |
|  |         SKOR AKHIR ANDA:          |  |         +------------------+         |  |
|  |             90 / 100              |  |         |  [QR CODE VIDEO] |         |  |
|  |                                   |  |         |  Pindai dengan   |         |  |
|  | Status: KOMPETENSI TERPENUHI ✓    |  |         |  Kamera HP Anda  |         |  |
|  |                                   |  |         +------------------+         |  |
|  | Selamat! Anda telah menguasai     |  |                                      |  |
|  | konsep Concurrency, Sharing,      |  | Tonton video dokumenter pengayaan    |  |
|  | Virtualization, dan Asynchrony!   |  | arsitektur OS di YouTube:            |  |
|  |                                   |  |                                      |  |
|  | [ ↺ ULANGI KUIS ]                 |  | [ ▶ BUKA VIDEO DI YOUTUBE ↗ ]        |  |
|  +-----------------------------------+  +--------------------------------------+  |
|                                                                                   |
|                                                      [ 🏠 KEMBALI KE BERANDA ]     |
+-----------------------------------------------------------------------------------+
```

### 2. Deskripsi Visual
* **Sisi Kiri (Lencana Prestasi):** Angka skor emas berukuran besar (*90 Poin*), tanda centang hijau kemenangan, dan ucapan apresiasi.
* **Sisi Kanan (Kartu Pengayaan YouTube):** Kode QR berbingkai putih bersih yang dapat dipindai langsung, disertai tombol merah YouTube menuju video eksternal.
* **Tombol Navigasi:** Pilihan untuk mengulang kuis atau kembali ke halaman beranda awal.

### 3. Audio / Narasi & SFX
* **SFX Kemenangan:** Fanfar musik selebrasi (*triumphant victory fanfare*, durasi 3.5 detik).
* **Voiceover:** *"Selamat, Anda telah lulus dan menuntaskan pembelajaran dengan hasil memuaskan!"*

### 4. Interaktivitas
* **Pindai QR Code:** Mengarahkan kamera smartphone siswa ke URL video YouTube pengayaan.
* **Tombol YouTube:** Membuka tautan video di tab baru peramban.
* **Tombol Ulangi Kuis:** Mereset skor dan memulai kuis kembali dari nomor 1.

### 5. Transisi Layar
* Efek partikel konfeti visual (*confetti canvas animation*) bertaburan di layar merayakan keberhasilan siswa.

---

<!-- ========================================================================= -->
<!-- FRAME 13 : HASIL EVALUASI - BELUM LULUS / REMEDIAL                       -->
<!-- ========================================================================= -->

## FRAME 13: HASIL EVALUASI - BELUM LULUS & REKOMENDASI REMEDIAL (SKOR < 70)
* **ID Frame:** `FR-013`
* **Scene:** Layar Evaluasi Belum Tuntas / Remedial
* **Target Kondisi:** Skor Siswa < 70 (Belum Lulus KKM)

### 1. Sketsa Layar (Wireframe)
```
+-----------------------------------------------------------------------------------+
| ⚠️ HASIL EVALUASI: BELUM MENCAPAI STANDAR KELULUSAN                              |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|        +-----------------------------------------------------------------+        |
|        |               💪 TETAP SEMANGAT! JANGAN BERKECIL HATI!          |        |
|        |                                                                 |        |
|        |                        SKOR AKHIR ANDA:                         |        |
|        |                       50 / 100 (KKM: 70)                        |        |
|        |                                                                 |        |
|        |   Nilai Anda belum mencapai batas ketuntasan minimal (70).      |        |
|        |   Disarankan menonton kembali video simulasi pada Modul 2       |        |
|        |   sebelum mencoba mengerjakan kuis remedial.                    |        |
|        |                                                                 |        |
|        |   [ 🔄 COBA REMEDIAL KUIS ]   [ 📖 PELAJARI ULANG MODUL 2 ]     |        |
|        +-----------------------------------------------------------------+        |
|                                                                                   |
|                                                      [ 🏠 KEMBALI KE BERANDA ]     |
+-----------------------------------------------------------------------------------+
```

### 2. Deskripsi Visual
* **Palet Warna:** Warna hangat mawar (*Rose 500* dan *Amber 400*) yang ramah dan memotivasi tanpa memberi kesan intimidatif.
* **Kartu Evaluasi Terpusat:** Menampilkan nilai capaian siswa, batas KKM (70), dan dua tombol tindakan remedial yang jelas.
* **Ikon Motivasi:** Ikon kepalan tangan tangguh (*💪*) memperkuat pesan pantang menyerah.

### 3. Audio / Narasi & SFX
* **SFX:** Nada pendukung lembut (*gentle chime*) bernuansa suportif.
* **Voiceover:** Ucapan motivasi untuk tidak patah semangat dan mencoba kembali.

### 4. Interaktivitas
* **Tombol "Coba Remedial Kuis":** Mereset skor dan membuka kuis kembali dari soal nomor 1.
* **Tombol "Pelajari Ulang Modul 2":** Mengantar siswa langsung kembali ke pilar simulator video untuk memantapkan pemahaman.

### 5. Transisi Layar
* Efek *Fade In* (300ms) menampilkan lembar evaluasi remedial dengan transisi halus.

---

*Dokumen Storyboard Visual ini disusun lengkap per frame untuk memenuhi standar pelaporan Ujian Tengah Semester (UTS) mata kuliah Multimedia Pembelajaran.*
