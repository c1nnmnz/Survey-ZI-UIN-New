# Panduan Upload Manual Project ke GitHub

Dokumen ini berisi instruksi langkah demi langkah untuk mengupload project "Survey ZI UIN New" ke repositori GitHub yang telah dibuat.

## Persiapan

### 1. Install Git

Jika Git belum terinstal di komputer Anda, download dan install dari [git-scm.com](https://git-scm.com/).

### 2. Konfigurasi Git

Setelah instalasi, buka terminal atau command prompt dan konfigurasikan identitas Git Anda:

```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"
```

### 3. Clone Repositori

1. Buka [https://github.com/c1nnmnz/Survey-ZI-UIN-New](https://github.com/c1nnmnz/Survey-ZI-UIN-New)
2. Klik tombol "Code" dan salin URL HTTPS
3. Buka terminal atau command prompt
4. Clone repositori dengan perintah:
   ```bash
   git clone https://github.com/c1nnmnz/Survey-ZI-UIN-New.git
   ```
5. Masuk ke direktori repositori:
   ```bash
   cd Survey-ZI-UIN-New
   ```

## Upload Project

### Metode 1: Menggunakan Git Command Line

1. Salin semua file project ke direktori repositori yang baru di-clone
2. Tambahkan files ke staging area:
   ```bash
   git add .
   ```
3. Commit perubahan:
   ```bash
   git commit -m "Upload project files"
   ```
4. Push ke GitHub:
   ```bash
   git push origin main
   ```

### Metode 2: Upload Melalui Browser GitHub

Jika Git command line tidak tersedia, Anda dapat mengupload file langsung melalui browser:

1. Buka repositori di [https://github.com/c1nnmnz/Survey-ZI-UIN-New](https://github.com/c1nnmnz/Survey-ZI-UIN-New)
2. Untuk file kecil:
   - Buka folder di GitHub tempat Anda ingin mengupload file
   - Klik tombol "Add file" → "Upload files"
   - Drag and drop file dari komputer Anda atau klik "choose your files"
   - Masukkan pesan commit
   - Klik "Commit changes"

3. Untuk folder besar atau banyak file:
   - Buat file ZIP dari folder project Anda
   - Upload ZIP ke GitHub menggunakan langkah di atas
   - Catatan: GitHub tidak dapat meng-extract file ZIP secara otomatis, jadi sebaiknya upload file per file atau folder per folder

### Metode 3: Menggunakan GitHub Desktop

1. Download dan install [GitHub Desktop](https://desktop.github.com/)
2. Login dengan akun GitHub Anda
3. Clone repositori Survey-ZI-UIN-New
4. Salin file project ke folder repositori lokal
5. Commit perubahan di GitHub Desktop
6. Klik Push untuk mengirim perubahan ke GitHub

## Struktur Repositori

Pastikan struktur repo sesuai dengan format berikut:

```
Survey-ZI-UIN-New/
├── apps/                    # Application code
│   ├── client/              # Frontend application
│   └── server/              # Backend application
├── config/                  # Configuration files
├── docs/                    # Documentation files
├── mcp-servers/             # MCP server files
├── public/                  # Public assets
├── scripts/                 # Utility scripts
├── shared/                  # Shared code
├── src/                     # Source code
├── .gitignore               # Git ignore configuration
├── CODE_OF_CONDUCT.md       # Code of conduct
├── CONTRIBUTING.md          # Contribution guide
├── LICENSE                  # License file
├── package.json             # Package configuration
├── README.md                # Project README
└── ... (file lainnya)
```

## Troubleshooting

### Masalah: File Terlalu Besar

GitHub memiliki batasan ukuran file 100MB. Jika Anda memiliki file besar:
1. Tambahkan ke `.gitignore`
2. Atau gunakan [Git LFS](https://git-lfs.github.com/) untuk file besar

### Masalah: Error Saat Push

Jika terjadi error saat push:
1. Pull terlebih dahulu untuk mendapatkan perubahan dari remote:
   ```bash
   git pull --rebase origin main
   ```
2. Selesaikan konflik jika ada
3. Push kembali:
   ```bash
   git push origin main
   ```

### Masalah: "Authentication Failed"

Jika autentikasi gagal:
1. Pastikan Anda menggunakan token personal access atau SSH key
2. Untuk token, buat di Settings → Developer settings → Personal access tokens
3. Gunakan token sebagai password saat diminta

## Setelah Upload

1. Verifikasi semua file telah terupload dengan benar
2. Periksa README dan dokumentasi lainnya di GitHub
3. Ajak anggota tim untuk clone repositori dan mulai berkontribusi

## Bantuan Lebih Lanjut

Jika Anda mengalami kesulitan, hubungi administrator repositori atau buat issue di GitHub.