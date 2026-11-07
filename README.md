Dokumentasi Workshop Day 1: From AI to GitHub

Repository ini berisi dokumentasi saya dari Day 1 Proyek Workshop-26 yang diadakan HIMATIK PNJ (TikMengajar).

Identitas
Nama lengkap: Ardhyanto Nugraha
Kelompok: Dreadout
Status: Mahasiswa semester 1 Teknik Informatika dan Komputer, prodi Teknik Multimedia dan Jaringan
Deskripsi Repository

Saya membuat repository ini untuk menyimpan catatan dan dokumentasi workshop Day 1. Isinya rangkuman materi, pengetahuan baru, pendapat saya tentang workshop, dan hasil praktik membuat website kelas TMJ 1B dengan bantuan AI.

Ini pertama kalinya saya memakai Git dan GitHub, jadi repository ini juga menjadi bahan latihan saya.

Tujuan Repository
Menyimpan dan mempublikasikan dokumentasi workshop secara online
Latihan membuat repository GitHub berstatus Public
Membuat catatan belajar yang rapi
Belajar menulis README.md sebagai dokumentasi utama
Latihan commit dan push
Informasi Kegiatan Workshop
Kegiatan: Proyek Workshop-26 Day 1
Penyelenggara: HIMATIK PNJ
Tema: From AI to GitHub (Building with AI, Managing Change with GitHub)
Pemateri: Nugi Farhan (Senior Product Designer)
Tanggal: 7 November 2026
Rangkuman Materi

Workshop ini punya dua bagian. Bagian pertama membahas cara membuat dan mengembangkan sesuatu dengan AI. Bagian kedua membahas manajemen perubahan dan kolaborasi dengan Git dan GitHub.

1. Prompt Engineering

Prompt adalah instruksi yang kita berikan ke AI untuk mendapatkan hasil tertentu. Bentuknya bisa berupa pertanyaan, kata kunci, instruksi panjang, atau potongan kode. Prompt engineering adalah cara menyusun instruksi supaya jawaban AI tepat, relevan, dan layak dipakai.

Pemateri menekankan bahwa konteks menentukan hasil. Prompt "Create student task planner" membuat AI menebak maksud kita. Prompt yang memuat tujuan, kebutuhan, dan batasan menghasilkan output yang lebih sesuai.

Struktur prompt yang baik:

Role: peran yang kita minta dari AI
Task: tujuan yang mau dicapai
Context: kebutuhan dan batasan
Format: bentuk output yang diminta

Tips prompt dari slide:

Pakai kata kerja yang jelas
Tentukan panjang dan format output
Sebutkan target pembaca
Sertakan fakta atau data yang relevan
Sebutkan sumber atau dokumen yang dipakai
Jelaskan istilah penting

Keuntungan prompt engineering:

Performa model AI meningkat
Bias dan jawaban yang offensive berkurang
Hasil lebih terkontrol dan bisa diprediksi
Pengalaman pengguna lebih baik
2. Git dan GitHub

Git adalah version control system yang mencatat siapa mengubah apa dan kapan. Linus Torvalds membuat Git pada tahun 2005, dan kita menjalankannya di komputer sendiri (lokal).

GitHub adalah platform web untuk menyimpan repository Git secara online dan berkolaborasi dengan orang lain.

3. Alur Kerja Git

Git punya tiga bagian:

Working directory: file proyek yang sedang kita kerjakan di komputer
Staging area: tempat menampung perubahan yang akan masuk ke commit berikutnya
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

Pemateri mengajarkan pembuatan SSH key supaya kita bisa push ke GitHub tanpa login berulang.

ssh-keygen -t ed25519 -C "email@domain.com"
ssh -T git@github.com

Langkahnya: buat key, tekan Enter untuk lokasi default, isi passphrase (boleh dikosongkan), lalu salin public key (file .pub). Setelah itu tambahkan key di GitHub lewat Settings, bagian SSH and GPG keys, tombol New SSH key. Perintah ssh -T git@github.com mengecek koneksinya.

6. Praktik

Pemateri memberi contoh aplikasi Student Task Planner. Langkahnya:

Pakai platform AI (Claude, Antigravity, atau ChatGPT)
Tulis prompt untuk membuat web atau aplikasi
Masukkan ke Git dengan git init
Commit dan push ke GitHub
Buat perubahan, lalu commit dan push lagi

Saya membuat website kelas TMJ 1B.
