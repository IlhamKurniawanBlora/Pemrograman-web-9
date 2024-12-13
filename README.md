Praktikum 9: CRUD Data Mahasiswa
Repository ini berisi kode untuk Praktikum 9 yang mengimplementasikan fitur CRUD (Create, Read, Update, Delete) data mahasiswa. Proyek ini dibangun menggunakan teknologi berikut:

Backend:

Express.js: Framework untuk membangun REST API.
MySQL: Database untuk menyimpan data mahasiswa.
CORS: Middleware untuk menangani kebijakan lintas-origin.
Frontend:

Halaman antarmuka sederhana untuk mengelola data mahasiswa.
Fitur Utama
CRUD Data Mahasiswa:
Tambah, baca, perbarui, dan hapus data mahasiswa.
REST API:
API backend untuk operasi data yang dapat diakses dari frontend atau aplikasi lain.
Halaman Frontend:
Antarmuka pengguna untuk mengelola data mahasiswa secara langsung.
Cara Menjalankan Proyek
1. Clone Repository
bash
Copy code
git clone https://github.com/IlhamKurniawanBlora/Pemrograman-web-9.git
cd Pemrograman-web-9
2. Install Dependensi
bash
Copy code
npm install
3. Konfigurasi Database
Pastikan MySQL sudah berjalan.
Buat database baru, misalnya db_mahasiswa.
Import file SQL (jika ada) atau buat tabel secara manual.
Perbarui file konfigurasi database pada backend (misalnya config.js atau db.js) dengan kredensial MySQL Anda.
4. Jalankan Server Backend
bash
Copy code
node index.js
5. Jalankan Frontend
Buka file frontend (misalnya index.html) di browser atau gunakan server lokal seperti Live Server.

Lisensi
Proyek ini bebas digunakan untuk keperluan pembelajaran.
