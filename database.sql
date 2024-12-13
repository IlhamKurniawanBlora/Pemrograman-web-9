-- Buat database
CREATE DATABASE praktikum_9;

-- Gunakan database
USE praktikum_9;

-- Buat tabel mahasiswa
CREATE TABLE mahasiswa (
    nim VARCHAR(10) PRIMARY KEY,
    nama VARCHAR(100),
    prodi VARCHAR(50)
);

-- Insert 10 data mahasiswa
INSERT INTO mahasiswa (nim, nama, prodi) VALUES
('20230101', 'Andi Pratama', 'Informatika'),
('20230102', 'Budi Santoso', 'Sistem Informasi'),
('20230103', 'Citra Lestari', 'Teknik Komputer'),
('20230104', 'Dewi Anggraini', 'Manajemen Informatika'),
('20230105', 'Eka Wulandari', 'Teknik Informatika'),
('20230106', 'Fajar Nugraha', 'Sistem Komputer'),
('20230107', 'Gilang Ramadhan', 'Teknik Elektro'),
('20230108', 'Hesti Pramesti', 'Teknologi Informasi'),
('20230109', 'Ilham Saputra', 'Data Science'),
('20230110', 'Joko Widodo', 'Keamanan Siber');
