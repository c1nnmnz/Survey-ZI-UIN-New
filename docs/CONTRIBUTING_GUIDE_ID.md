# Panduan Detail Kontribusi untuk Survey ZI UIN New

Panduan ini memberikan informasi rinci tentang bagaimana berkontribusi ke proyek Survey ZI UIN New dengan efektif. Panduan ini khusus ditujukan untuk anggota tim pengembangan internal.

## Pembagian Peran

### Frontend Developer
- Mengembangkan dan memelihara antarmuka pengguna
- Implementasi komponen React
- Integrasi dengan API backend
- Memastikan responsifitas UI

### Backend Developer
- Membangun dan memelihara API
- Mengimplementasikan logika bisnis
- Mengelola koneksi database
- Menyusun dokumentasi API

### Fullstack Developer
- Bekerja di kedua sisi frontend dan backend
- Memastikan integrasi yang mulus antara frontend dan backend
- Mendukung pengembangan fitur end-to-end

### QA / Tester
- Melakukan pengujian manual dan otomatis
- Mengidentifikasi dan melacak bug
- Memastikan kualitas kode dan produk

## Alur Kerja Pengembangan

### 1. Perencanaan Sprint

1. Sprint berlangsung selama 2 minggu
2. Backlog diperbarui sebelum setiap sprint
3. Tugas-tugas dibagi berdasarkan kapasitas dan keahlian

### 2. Pengembangan Fitur

1. Pilih task dari sprint backlog
2. Buat branch untuk fitur/perbaikan tersebut:
   ```bash
   git checkout -b feature/nama-fitur
   ```
   atau
   ```bash
   git checkout -b fix/nama-perbaikan
   ```

3. Lakukan pengembangan dengan mengikuti standar kode
4. Commit perubahan secara berkala:
   ```bash
   git add .
   git commit -m "jenis: deskripsi perubahan"
   ```
   
   Jenis commit:
   - `feat` - fitur baru
   - `fix` - perbaikan bug
   - `docs` - perubahan dokumentasi
   - `style` - perubahan formatting
   - `refactor` - refactoring kode
   - `test` - menambah/mengubah test
   - `chore` - perubahan non-kode

5. Sinkronisasi dengan branch utama:
   ```bash
   git fetch origin
   git rebase origin/main
   ```

6. Push perubahan:
   ```bash
   git push origin feature/nama-fitur
   ```

### 3. Code Review

1. Buat Pull Request (PR) di GitHub
2. Minta minimal satu anggota tim untuk melakukan review
3. Respons terhadap komentar dan buat perubahan yang diperlukan
4. Setelah disetujui, PR akan di-merge oleh maintainer

### 4. QA dan Testing

1. QA akan melakukan pengujian pada fitur yang baru di-merge
2. Bug yang ditemukan akan dilacak sebagai issue
3. Bug-fix memiliki prioritas tinggi untuk sprint berikutnya

## Standar Kode

### Penamaan

- **Variabel dan Fungsi**: camelCase
  ```typescript
  const userName = 'John';
  function getUserData() { /* ... */ }
  ```

- **Komponen React**: PascalCase
  ```typescript
  function UserProfile() { /* ... */ }
  ```

- **File**: 
  - Komponen: PascalCase (UserProfile.tsx)
  - Utilitas: camelCase (formatDate.ts)
  - Test: sama dengan file yang diuji dengan .test atau .spec (UserProfile.test.tsx)

- **CSS Class**: kebab-case
  ```css
  .user-profile-container { /* ... */ }
  ```

### Dokumentasi Kode

- Berikan komentar pada fungsi dan bagian kompleks
- Gunakan JSDoc untuk fungsi-fungsi penting
- Komentar harus dalam bahasa Indonesia untuk memudahkan tim

```typescript
/**
 * Mengambil data pengguna dari API
 * @param {string} userId - ID pengguna
 * @returns {Promise<User>} - Object data pengguna
 */
async function getUserData(userId: string): Promise<User> {
  // Implementasi
}
```

### Struktur File Frontend

```
src/
├── components/        # Komponen React yang dapat digunakan kembali
│   ├── common/        # Komponen umum (Button, Input, dll)
│   └── feature/       # Komponen spesifik fitur
├── hooks/             # React hooks kustom
├── pages/             # Komponen halaman lengkap
├── services/          # Layanan API dan logika bisnis
├── utils/             # Fungsi utilitas
├── types/             # TypeScript type definitions
└── styles/            # File CSS/SCSS
```

### Struktur File Backend

```
server/
├── api/               # Endpoint API
│   └── routes/        # Definisi rute API
├── controllers/       # Controller untuk menangani request
├── models/            # Model data dan skema
├── services/          # Logika bisnis
├── middleware/        # Middleware Express
├── utils/             # Fungsi utilitas
└── config/            # Konfigurasi
```

## Best Practices

### Frontend

1. **Komponen**
   - Gunakan functional components dengan hooks
   - Pisahkan komponen besar menjadi komponen yang lebih kecil
   - Hindari prop drilling dengan Context API

2. **State Management**
   - Gunakan React Query untuk data dari server
   - Gunakan useState dan useContext untuk state lokal
   - Perhatikan performa dengan memoization (useMemo, useCallback)

3. **Styling**
   - Gunakan Tailwind CSS dengan konsisten
   - Ikuti desain sistem yang telah ditentukan
   - Pastikan responsif di berbagai ukuran layar

### Backend

1. **API Design**
   - Ikuti prinsip RESTful
   - Gunakan versioning untuk API
   - Berikan respons error yang konsisten

2. **Keamanan**
   - Validasi semua input dari user
   - Sanitasi data sebelum disimpan ke database
   - Gunakan middleware auth untuk endpoint yang memerlukan akses tertentu

3. **Database**
   - Gunakan migrasi untuk perubahan skema
   - Batasi kueri database untuk performa yang baik
   - Gunakan indeks untuk meningkatkan kecepatan kueri

## Komunikasi Tim

- Gunakan Slack/Discord untuk komunikasi harian
- Daily standup meeting setiap pagi (15 menit)
- Sprint review dan retrospective di akhir sprint
- Gunakan GitHub Issues untuk melacak tugas dan bug

## Deployment

1. **Staging**
   - Perubahan di-deploy ke staging setelah di-merge ke `develop`
   - Test dilakukan di lingkungan staging

2. **Production**
   - Deployment ke production dilakukan setelah testing lengkap
   - Hanya branch `main` yang di-deploy ke production
   - Deployment dilakukan oleh DevOps/maintainer

## Sumber Daya

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Express Documentation](https://expressjs.com/)