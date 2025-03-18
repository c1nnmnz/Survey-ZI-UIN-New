# Panduan Kontribusi

Terima kasih telah ikut berkontribusi pada project "Survey ZI UIN New"! Panduan ini akan membantu Anda untuk memahami bagaimana berkontribusi pada proyek ini dengan efektif.

## Prasyarat

Sebelum mulai berkontribusi, pastikan Anda telah:

1. Menginstal [Node.js](https://nodejs.org/) (versi 16 atau lebih baru)
2. Menginstal [Git](https://git-scm.com/)
3. Memiliki akun GitHub

## Cara Berkontribusi

### 1. Menyiapkan Lingkungan Pengembangan

1. Fork repository ini ke akun GitHub Anda
2. Clone repository fork Anda ke komputer lokal:
   ```bash
   git clone https://github.com/USERNAME-ANDA/Survey-ZI-UIN-New.git
   cd Survey-ZI-UIN-New
   ```
3. Tambahkan repository utama sebagai remote upstream:
   ```bash
   git remote add upstream https://github.com/c1nnmnz/Survey-ZI-UIN-New.git
   ```
4. Install dependensi:
   ```bash
   npm install
   ```

### 2. Membuat Perubahan

1. Selalu buat branch baru untuk setiap fitur atau perbaikan yang akan dikerjakan:
   ```bash
   git checkout -b nama-fitur-baru
   ```
2. Lakukan perubahan pada kode
3. Pastikan kode mengikuti standar formatting:
   ```bash
   npm run format
   ```
4. Jalankan linter untuk memastikan kode memenuhi standar kualitas:
   ```bash
   npm run lint
   ```
5. Jalankan test untuk memastikan perubahan tidak merusak fitur yang ada:
   ```bash
   npm run test
   ```

### 3. Commit dan Push Perubahan

1. Commit perubahan Anda dengan pesan yang jelas dan deskriptif:
   ```bash
   git add .
   git commit -m "Menambahkan fitur: detail fitur"
   ```
2. Push ke branch Anda:
   ```bash
   git push origin nama-fitur-baru
   ```

### 4. Membuat Pull Request

1. Buka repository fork Anda di GitHub
2. Klik tombol "Compare & pull request"
3. Berikan deskripsi yang jelas mengenai perubahan yang dibuat
4. Submit pull request

### 5. Proses Review

1. Tim inti akan mereview pull request Anda
2. Mungkin akan ada diskusi dan permintaan perubahan
3. Setelah disetujui, perubahan akan di-merge ke repository utama

## Konvensi Kode

### Style Guide

- Gunakan TypeScript untuk semua kode JavaScript
- Ikuti konfigurasi ESLint yang sudah disediakan
- Gunakan Prettier untuk formatting kode
- Nama file komponen React: PascalCase (contoh: `UserProfile.tsx`)
- Nama file utility: camelCase (contoh: `formatDate.ts`)

### Struktur Komponen React

- Satu komponen per file
- Gunakan functional components dengan hooks
- Gunakan TypeScript interface untuk props
- Pisahkan logika bisnis dari komponen UI
- Contoh:

```tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';

interface UserProfileProps {
  userId: string;
}

export function UserProfile({ userId }: UserProfileProps) {
  // Logika Komponen
  return (
    <div>
      {/* Markup Komponen */}
    </div>
  );
}
```

### Commit Messages

Gunakan format berikut untuk pesan commit:

- `Feat: Menambahkan fitur baru` (untuk fitur baru)
- `Fix: Memperbaiki bug` (untuk perbaikan bug)
- `Docs: Memperbarui dokumentasi` (untuk perubahan dokumentasi)
- `Style: Memperbaiki formatting` (untuk perubahan style)
- `Refactor: Menyusun ulang kode` (untuk refactoring)
- `Test: Menambahkan test` (untuk perubahan test)
- `Chore: Memperbarui dependensi` (untuk tugas rutin)

## Alur Kerja Git

Kami menggunakan model Git Flow yang disederhanakan:

- `main`: Branch utama untuk rilis produksi
- `develop`: Branch pengembangan utama
- Branch fitur: Untuk pengembangan fitur baru (`feature/nama-fitur`)
- Branch perbaikan: Untuk perbaikan bug (`fix/nama-perbaikan`)

## FAQ dan Troubleshooting

### Saya mendapatkan error saat menjalankan aplikasi

1. Pastikan semua dependensi telah terinstal dengan benar:
   ```bash
   npm install
   ```
2. Periksa file `.env` Anda (jika diperlukan)
3. Periksa apakah versi Node.js Anda kompatibel

### Bagaimana cara memperbarui fork saya dengan perubahan terbaru?

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

### Apa yang harus saya lakukan jika pull request saya mendapatkan konflik?

1. Perbarui branch main Anda dengan upstream
2. Rebase branch fitur Anda:
   ```bash
   git checkout nama-fitur-baru
   git rebase main
   ```
3. Selesaikan konflik yang muncul
4. Push perubahan:
   ```bash
   git push origin nama-fitur-baru --force
   ```

## Kontak

Jika Anda memiliki pertanyaan atau masalah, silakan buat issue baru di GitHub atau hubungi maintainer proyek.