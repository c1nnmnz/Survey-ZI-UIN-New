# Aplikasi Survey ZI UIN

Aplikasi web modern full-stack untuk survey Zona Integritas UIN dengan integrasi AI menggunakan Model Context Protocol (MCP).

## Fitur Utama

- React 18 dengan TypeScript
- Backend Express dengan REST API
- Styling menggunakan Tailwind CSS
- Proses build cepat dengan Vite
- Integrasi database dengan Drizzle ORM
- Server MCP untuk integrasi AI
- Manajemen autentikasi dan sesi
- Komponen UI modern dengan Radix UI
- Support untuk pengembangan tim

## Cara Memulai

1. Clone repository ini:
   ```bash
   git clone https://github.com/c1nnmnz/Survey-ZI-UIN-New.git
   cd Survey-ZI-UIN-New
   ```

2. Install dependensi:
   ```bash
   npm install
   ```

3. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```

4. Build untuk produksi:
   ```bash
   npm run build
   ```

5. Jalankan server produksi:
   ```bash
   npm start
   ```

## Struktur Proyek

Proyek ini diorganisir dalam beberapa direktori utama:

- `apps/client`: Aplikasi frontend React
- `apps/server`: Server backend Express
- `mcp-servers`: File server MCP untuk integrasi AI
- `src`: Kode sumber aplikasi
- `config`: File konfigurasi
- `shared`: Kode yang digunakan bersama antara client dan server

Untuk detail lengkap struktur proyek, lihat [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md).

## Server MCP

Proyek ini dilengkapi dengan server Model Context Protocol (MCP) yang memungkinkan integrasi AI:

- Filesystem Server: Memungkinkan AI mengakses file pada sistem Anda
- Memory Server: Menyediakan memori persisten untuk percakapan AI

Untuk menggunakan server MCP:

1. Buka direktori `mcp-servers`
2. Jalankan batch file yang sesuai untuk memulai server:
   - `start_all_mcp_servers.bat`: Memulai semua server MCP
   - `start_mcp_filesystem.bat`: Memulai hanya server filesystem
   - `start_mcp_memory.bat`: Memulai hanya server memory

Untuk informasi lebih lanjut tentang server MCP, lihat [mcp-servers/README_MCP.md](mcp-servers/README_MCP.md).

## Script yang Tersedia

- `npm run dev`: Menjalankan server pengembangan
- `npm run build`: Build proyek untuk produksi
- `npm start`: Menjalankan server produksi
- `npm run check`: Menjalankan pengecekan tipe TypeScript
- `npm run db:push`: Mendorong perubahan skema database
- `npm run lint`: Menjalankan linting pada codebase
- `npm run lint:fix`: Memperbaiki masalah linting
- `npm run format`: Format kode dengan Prettier
- `npm run test`: Menjalankan test
- `npm run test:watch`: Menjalankan test dalam mode watch
- `npm run test:coverage`: Menjalankan test dengan coverage

## Panduan Kolaborasi untuk Tim

### 1. Setup Awal untuk Anggota Tim Baru

1. Clone repository:
   ```bash
   git clone https://github.com/c1nnmnz/Survey-ZI-UIN-New.git
   cd Survey-ZI-UIN-New
   ```

2. Install semua dependensi:
   ```bash
   npm install
   ```

3. Buat branch baru untuk fitur yang akan dikerjakan:
   ```bash
   git checkout -b fitur-baru
   ```

### 2. Workflow Pengembangan

1. Selalu pull perubahan terbaru dari main sebelum mulai bekerja:
   ```bash
   git checkout main
   git pull
   git checkout fitur-baru
   git merge main
   ```

2. Setelah menyelesaikan fitur, commit perubahan:
   ```bash
   git add .
   git commit -m "Menambahkan fitur X"
   ```

3. Push branch ke repository:
   ```bash
   git push origin fitur-baru
   ```

4. Buat Pull Request di GitHub untuk di-review oleh tim.

### 3. Konvensi Kode

- Gunakan Prettier untuk formatting kode (`npm run format`)
- Ikuti aturan linting yang ada (`npm run lint`)
- Tulis komentar dalam bahasa Indonesia untuk dokumentasi kode
- Gunakan penamaan variabel dan fungsi yang deskriptif
- Gunakan TypeScript untuk type safety

### 4. Struktur Kode

- Pisahkan komponen React dalam file terpisah
- Gunakan pendekatan modular untuk fungsi dan layanan
- Letakkan logika bisnis di server/services
- Gunakan hooks React untuk state management

### 5. Database

- Setiap perubahan skema database harus didokumentasikan
- Gunakan migrasi database untuk perubahan skema
- Pastikan perubahan database kompatibel dengan data yang ada

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.