# Panduan untuk Team Lead

Dokumen ini menyediakan panduan khusus untuk team lead dalam mengelola proyek "Survey ZI UIN New".

## Tanggung Jawab Team Lead

1. **Koordinasi Tim**
   - Memimpin meetings dan standup harian
   - Mendistribusikan tugas sesuai keahlian
   - Memantau progres dan mengatasi hambatan
   - Memfasilitasi komunikasi antar anggota tim

2. **Manajemen Teknis**
   - Menetapkan dan menegakkan standar kode
   - Melakukan review kode untuk pull request
   - Mengelola branch dan merging
   - Menjaga kualitas kode dan performa aplikasi

3. **Pengambilan Keputusan**
   - Membuat keputusan teknis untuk arsitektur dan tools
   - Menyelesaikan konflik teknis dalam tim
   - Memprioritas fitur dan perbaikan bug
   - Memilih library dan framework yang digunakan

4. **Mentoring**
   - Membimbing anggota tim junior
   - Memberikan feedback konstruktif
   - Membantu menyelesaikan masalah teknis
   - Mendorong pengembangan kemampuan anggota tim

## Pedoman Manajemen GitHub

### 1. Branch Strategy

Gunakan strategi Git Flow yang disederhanakan:

- `main` - branch produksi, selalu dalam keadaan siap deploy
- `develop` - branch pengembangan utama
- `feature/*` - branch untuk fitur baru
- `fix/*` - branch untuk perbaikan bug
- `release/*` - branch untuk persiapan rilis

### 2. Mengelola Pull Requests

1. **Aturan Review**:
   - Minimal 1 review dari team lead atau developer senior
   - Semua CI checks harus passed
   - Tidak ada konflik dengan branch target

2. **Proses Review**:
   - Periksa kualitas kode dan kepatuhan terhadap standar
   - Verifikasi bahwa perubahan menyelesaikan issue
   - Pastikan test telah dibuat atau diupdate
   - Berikan feedback yang spesifik dan konstruktif

3. **Merging Strategy**:
   - Gunakan "Squash and merge" untuk feature branches
   - Gunakan "Merge commit" untuk release branches

### 3. Mengelola Releases

1. Buat branch `release/vX.Y.Z` dari `develop`
2. Lakukan testing dan bug fixing pada branch release
3. Setelah siap, merge ke `main` dan beri tag versi
4. Merge kembali ke `develop` untuk menyinkronkan perubahan

### 4. Mengelola Issues

1. **Label**:
   - `bug` - untuk masalah yang perlu diperbaiki
   - `enhancement` - untuk fitur atau peningkatan baru
   - `documentation` - untuk perubahan dokumentasi
   - `high-priority` - untuk masalah yang butuh penanganan segera
   - `good-first-issue` - untuk issue yang cocok untuk kontributor baru

2. **Milestones**:
   - Buat milestone untuk setiap versi rilis
   - Tetapkan tanggal target untuk milestone
   - Kaitkan issues dengan milestone yang relevan

### 5. Proteksi Branch

Aktifkan proteksi branch untuk `main` dan `develop`:
- Wajibkan pull request sebelum merging
- Wajibkan 1+ review approval
- Wajibkan status checks passed
- Tidak boleh ada merge konflik

## Panduan Pertemuan Tim

### 1. Daily Standup (15 menit)

- Apa yang dikerjakan kemarin?
- Apa yang akan dikerjakan hari ini?
- Apakah ada hambatan?

### 2. Sprint Planning (2-3 jam)

- Review product backlog
- Tentukan item yang akan dikerjakan dalam sprint
- Pecah item menjadi task-task kecil
- Estimasi effort untuk setiap task
- Tetapkan tujuan sprint

### 3. Sprint Review (1-2 jam)

- Demo fitur yang telah selesai
- Review apakah tujuan sprint tercapai
- Diskusikan apa yang berjalan baik
- Identifikasi area perbaikan

### 4. Retrospective (1 jam)

- Apa yang berjalan dengan baik?
- Apa yang bisa ditingkatkan?
- Apa action items untuk sprint berikutnya?

## Pedoman Komunikasi

### 1. Channels Komunikasi

- **Slack/Discord**: Komunikasi harian dan non-formal
- **GitHub Issues**: Tracking bugs dan fitur
- **Email**: Komunikasi formal dan eksternal
- **Video Call**: Meetings dan pertemuan tim

### 2. Aturan Komunikasi

- Tanggapi pesan dalam 24 jam kerja
- Gunakan thread untuk diskusi panjang
- Dokumentasikan keputusan penting
- Hormati zona waktu anggota tim

### 3. Status Update

- Update status tugas di GitHub Project Board
- Laporkan hambatan segera jika ditemui
- Komunikasikan jika ada perubahan timeline
- Berikan update mingguan untuk stakeholders

## Mengukur Performa Tim

### 1. Metrik Teknis

- **Velocity**: Berapa story points selesai per sprint
- **Code Quality**: Hasil dari code reviews dan static analysis
- **Test Coverage**: Persentase kode yang dicover oleh test
- **Bug Rate**: Jumlah bug per fitur atau sprint

### 2. Metrik Proses

- **Sprint Completion Rate**: Persentase tugas yang selesai
- **Review Turnaround Time**: Kecepatan review code
- **Build Stability**: Seberapa sering build gagal
- **Documentation Completeness**: Kualitas dokumentasi

## Onboarding Anggota Tim Baru

1. **Persiapan**:
   - Siapkan akses ke repository dan tools
   - Siapkan dokumentasi onboarding
   - Tetapkan mentor dari tim yang ada

2. **Minggu 1**:
   - Orientasi project dan tim
   - Setup lingkungan pengembangan
   - Kenalkan pada codebase dan arsitektur
   - Assign "good first issue"

3. **Bulan 1**:
   - Review progres mingguan
   - Berikan feedback konstruktif
   - Tingkatkan kompleksitas tugas
   - Kenalkan pada proses dan standar tim

4. **Bulan 2+**:
   - Dorong untuk ambil ownership area tertentu
   - Libatkan dalam pengambilan keputusan teknis
   - Dorong untuk menjadi reviewer kode

## Resources

- [Effective Code Reviews](https://www.atlassian.com/agile/software-development/code-reviews)
- [Git Flow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Leading High-Performing Teams](https://www.mckinsey.com/business-functions/people-and-organizational-performance/our-insights/high-performing-teams-a-timeless-leadership-topic)
- [Agile Retrospectives](https://www.atlassian.com/team-playbook/plays/retrospective)