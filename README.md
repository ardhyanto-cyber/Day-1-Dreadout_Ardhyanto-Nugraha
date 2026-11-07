Dokumentasi Workshop Day 1 - From AI to GitHub

Repository ini berisi dokumentasi saya selama mengikuti Day 1 Proyek Workshop-26 yang diadakan oleh HIMATIK PNJ (TikMengajar).

Identitas
Nama lengkap: Ardhyanto Nugraha
Kelompok: Dreadout
Status: Mahasiswa semester 1 Teknik Informatika dan Komputer, prodi Teknik Multimedia dan Jaringan
Deskripsi Repository

Repository ini saya buat untuk menyimpan catatan dan dokumentasi kegiatan workshop Day 1. Isinya rangkuman materi, hal-hal baru yang saya pelajari, pendapat saya tentang workshop, dan hasil praktik membuat aplikasi Student Task Planner dengan bantuan AI.

Tujuan Repository
Menyimpan dan mempublikasikan dokumentasi workshop secara online
Latihan membuat repository GitHub dengan status Public
Membiasakan diri membuat catatan belajar yang rapi
Belajar membuat README.md sebagai dokumentasi utama
Latihan commit dan push
Informasi Kegiatan Workshop
Kegiatan: Proyek Workshop-26 Day 1
Penyelenggara: HIMATIK PNJ
Tema: From AI to GitHub (Building with AI, Managing Change with GitHub)
Pemateri: Nugi Farhan (Senior Product Designer)
Tanggal: 07/11/2026
Rangkuman Materi

1. Prompt Engineering

Prompt adalah instruksi yang kita berikan ke AI supaya menghasilkan sesuatu. Bentuknya bisa pertanyaan biasa, kata kunci, instruksi yang panjang, atau potongan kode. Prompt engineering adalah cara menyusun instruksi supaya jawaban AI tepat, relevan, dan layak dipakai.

Yang ditekankan pemateri adalah konteks itu penting. Contohnya kalau cuma menulis "Create student task planner", AI harus menebak-nebak maunya apa. Kalau prompt-nya ada konteks (tujuan, kebutuhan, batasan), hasilnya jauh lebih sesuai.

Struktur prompt yang baik:

Role: peran yang kita minta ke AI
Task: tugas atau tujuan yang mau dicapai
Context: kebutuhan dan batasan
Format: bentuk output yang diminta

Beberapa tips prompt dari slide:

Pakai kata kerja yang jelas
Tentukan panjang dan format output
Sebutkan target pembacanya
Sertakan fakta atau data yang relevan
Sebutkan sumber atau dokumen yang dipakai
Jelaskan istilah penting

Keuntungan prompt engineering:

Performa AI jadi lebih baik
Mengurangi bias dan jawaban yang offensive
Hasilnya lebih terkontrol dan bisa diprediksi
Pengalaman pengguna jadi lebih baik
2. Git dan GitHub

Git adalah version control system yang mencatat siapa, kapan, dan apa saja yang berubah di sebuah file. Git dibuat oleh Linus Torvalds tahun 2005 dan dipakai di komputer kita sendiri (lokal).

GitHub adalah platform berbasis web untuk menyimpan repository Git secara online dan bisa dipakai untuk kolaborasi.

Jadi Git itu alatnya, GitHub itu tempat menyimpannya di internet.

3. Alur Kerja Git

Ada tiga bagian penting:

Working directory: tempat file proyek yang sedang kita kerjakan di komputer
Staging area: tempat menampung perubahan yang akan dimasukkan ke commit berikutnya
Git directory (repository): tempat Git menyimpan data dan riwayat proyek

Alurnya: working directory -> git add -> staging area -> git commit -> repository.

4. Perintah Git yang Dipelajari
git --version                          # cek Git sudah terinstall
git config --global user.name "Nama"   # atur nama
git config --global user.email "email" # atur email
git config --global --list             # cek konfigurasi

git init                               # mulai repo baru
git clone "url"                        # ambil repo dari GitHub

git add .                              # pindahkan semua perubahan ke staging area
git add -A                             # sama seperti git add --all
git commit -m "pesan"                  # simpan ke repository

git remote add origin <url>            # hubungkan ke repo GitHub
git push origin main                   # kirim ke GitHub
git pull origin main                   # ambil perubahan dari GitHub
5. SSH Key

Pemateri juga mengajarkan cara membuat SSH key supaya bisa push ke GitHub dengan lebih praktis:

ssh-keygen -t ed25519 -C "email@domain.com"
ssh -T git@github.com

Day 1 workshop ini seru dan bermanfaat buat saya yang masih semester 1 dan baru belajar. Materinya berurutan: cara membuat prompt, lalu Git dan GitHub, lalu praktik membuat aplikasi. Kami langsung praktik setelah teori.

Hasil AI bergantung pada cara saya menulis prompt, dan itu bagian yang paling saya ingat. Alur Git (working directory, staging area, repository) yang semula membingungkan sekarang saya pahami. Setup awal seperti identitas Git dan SSH key terasa susah karena banyak perintah yang tidak boleh salah ketik.
