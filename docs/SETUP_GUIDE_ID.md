# Panduan Setup Pengembangan

Dokumen ini menjelaskan cara menyiapkan lingkungan pengembangan lokal untuk proyek "Survey ZI UIN New".

## Persyaratan Sistem

- Node.js (versi 16 atau lebih baru)
- npm (biasanya diinstal bersama Node.js)
- Git
- Text editor atau IDE (disarankan: VS Code, Cursor)

## Langkah-langkah Setup

### 1. Clone Repository

```bash
# Clone repository
git clone https://github.com/c1nnmnz/Survey-ZI-UIN-New.git

# Masuk ke direktori proyek
cd Survey-ZI-UIN-New
```

### 2. Instalasi Dependensi

```bash
# Install semua dependensi
npm install
```

### 3. Konfigurasi Lingkungan

Buat file `.env` di root proyek dan isi dengan konfigurasi yang diperlukan:

```bash
# Buat file .env
cp .env.example .env

# Edit file .env sesuai kebutuhan
```

Berikut adalah contoh isi file `.env`:

```
# Environment
NODE_ENV=development

# Server
PORT=3000

# Database (jika menggunakan database)
DATABASE_URL=postgresql://username:password@localhost:5432/survey_db

# Autentikasi (jika diperlukan)
SECRET_KEY=your_secret_key_here
```

### 4. Menjalankan Aplikasi dalam Mode Development

```bash
# Jalankan server pengembangan
npm run dev
```

Server pengembangan akan berjalan di `http://localhost:3000` (atau port yang Anda konfigurasikan dalam file `.env`).

### 5. Build untuk Produksi

```bash
# Build aplikasi untuk produksi
npm run build

# Menjalankan versi produksi
npm start
```

## Struktur Database (jika menggunakan database)

Aplikasi ini menggunakan Drizzle ORM untuk interaksi dengan database. 

Untuk menyiapkan skema database:

```bash
# Push skema ke database
npm run db:push
```

## Menjalankan Test

Proyek ini menggunakan Vitest untuk testing:

```bash
# Menjalankan test sekali
npm run test

# Menjalankan test dalam mode watch
npm run test:watch

# Menjalankan test dengan coverage
npm run test:coverage
```

## Linting dan Formatting

Proyek ini menggunakan ESLint dan Prettier untuk menjaga kualitas kode:

```bash
# Menjalankan linting
npm run lint

# Memperbaiki masalah linting
npm run lint:fix

# Format kode dengan Prettier
npm run format
```

## Server MCP untuk AI Integration

Aplikasi ini dilengkapi dengan Model Context Protocol (MCP) servers untuk integrasi AI:

1. Buka direktori `mcp-servers`
2. Jalankan file batch yang sesuai:
   ```bash
   # Memulai semua server MCP
   ./start_all_mcp_servers.bat
   
   # Atau jalankan server tertentu saja
   ./start_mcp_filesystem.bat
   ./start_mcp_memory.bat
   ```

## Troubleshooting

### Masalah Umum

1. **Error "Module not found"**
   - Coba jalankan `npm install` lagi
   - Periksa apakah Anda menggunakan versi Node.js yang kompatibel

2. **Error koneksi database**
   - Periksa pengaturan koneksi di file `.env`
   - Pastikan database server berjalan

3. **Server tidak berjalan**
   - Periksa log error
   - Pastikan port yang digunakan tidak digunakan oleh aplikasi lain

### Mendapatkan Bantuan

Jika Anda mengalami masalah yang tidak tercantum di sini:

1. Periksa issue yang ada di GitHub
2. Buat issue baru dengan detail masalah
3. Hubungi team lead untuk bantuan lebih lanjut

## Kontak

Jika Anda memiliki pertanyaan atau masalah, silakan hubungi:

- Tim pengembangan: [Email Tim]
- Project Manager: [Email PM]