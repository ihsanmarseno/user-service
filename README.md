User & Authentication Service 🔑
Service ini adalah bagian dari arsitektur microservices untuk aplikasi Absensi WFH. Tanggung jawab utamanya adalah mengelola data master pengguna (karyawan dan admin) dan menangani proses otentikasi (login) untuk menghasilkan token JWT.

Teknologi yang Digunakan
Node.js - Lingkungan eksekusi JavaScript

Express.js - Framework web untuk membuat API

Prisma - ORM untuk interaksi dengan database

MySQL - Database relasional

JSON Web Token (JWT) - Untuk otentikasi berbasis token

Bcrypt.js - Untuk hashing password

Persiapan dan Instalasi
Untuk menjalankan service ini secara lokal, ikuti langkah-langkah berikut:

Clone Repository

Bash

git clone <URL_REPOSITORY_ANDA>
cd <NAMA_FOLDER_PROYEK>/user-service
Install Dependencies

Bash

npm install
Setup Database
Pastikan Anda memiliki server MySQL yang sedang berjalan. Buat sebuah database baru untuk aplikasi ini, misalnya wfh_db.

Setup Environment Variables
Salin file .env.example menjadi .env.

Bash

cp .env.example .env
Kemudian, sesuaikan isi file .env dengan konfigurasi database dan secret key Anda.

Jalankan Migrasi Database
Perintah ini akan membuat tabel users di database Anda berdasarkan skema Prisma.

Bash

npx prisma migrate dev
Menjalankan Service
Mode Pengembangan (Development)
Server akan otomatis restart jika ada perubahan pada file.

Bash

npm run dev
Mode Produksi (Production)

Bash

npm run start
Service akan berjalan di http://localhost:5001 (atau port lain yang Anda tentukan di .env).

Konfigurasi Environment Variable (.env)
File .env diperlukan untuk menjalankan aplikasi.

Cuplikan kode

# URL koneksi ke database MySQL Anda

# Format: mysql://USER:PASSWORD@HOST:PORT/DATABASE

DATABASE_URL="mysql://root:@localhost:3306/wfh_db"

# Kunci rahasia untuk menandatangani JWT. Ganti dengan string acak yang kuat.

JWT_SECRET="GANTI_DENGAN_KUNCI_RAHASIA_YANG_SANGAT_AMAN"

# Port untuk service ini (opsional, default 5001)

PORT=5001
API Endpoints
Berikut adalah daftar endpoint API yang tersedia di service ini.

Method Endpoint Deskripsi Akses
POST /api/auth/login Login untuk mendapatkan token JWT. Publik
POST /api/auth/users Membuat user baru (karyawan/admin). Admin
GET /api/auth/users Mendapatkan daftar semua user. Admin
PUT /api/auth/users/:id Memperbarui data user berdasarkan ID. Admin
DELETE /api/auth/users/:id Menghapus user berdasarkan ID. Admin

Ekspor ke Spreadsheet
Catatan: Untuk rute dengan akses Admin, Anda harus menyertakan token JWT pada header Authorization.

Authorization: Bearer <TOKEN_ANDA>
