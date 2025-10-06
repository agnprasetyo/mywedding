## Features
- Modern design & smooth animations
- Fully responsive & mobile-first layout
- Background music & interactive wishes (WIP)
- Fun confetti effects and countdown timer
- Google Maps integration
- Digital envelope/gift feature with bank account details
- Multiple event agenda support

## Tech Stack
- [Vite (React)](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [React Confetti](https://www.npmjs.com/package/react-confetti)

## Installation
1. Clone the repository and install dependencies:
  ```bash
  git clone
  npm install
  ```
2. Update your wedding details in `src/config.js`.
3. Start the development server:
  ```bash
  npm run dev
  ```
  Open [http://localhost:5173/](http://localhost:5173/) in your browser.

## Customization

### Basic Setup
Edit `src/config.js` to customize your wedding invitation. Here's what you can configure:



# 🔧 Maintenance Mode

Sistem maintenance sederhana untuk website undangan pernikahan.

## Fitur

- ✅ Mode maintenance yang mudah diaktifkan/nonaktifkan
- 🎨 Halaman maintenance yang cantik dengan animasi
- 📱 Responsive design
- 🚀 Script command line untuk toggle maintenance
- 💝 Tema wedding yang konsisten

## Cara Menggunakan

### 1. Mengaktifkan Maintenance Mode
```bash
npm run maintenance:on
```

### 2. Menonaktifkan Maintenance Mode
```bash
npm run maintenance:off
```

### 3. Cek Status Maintenance
```bash
npm run maintenance:status
```

<!-- ## Konfigurasi

Edit file `src/config/config.js` untuk mengubah:

```javascript
maintenance: {
  enabled: false,  // true untuk aktif, false untuk nonaktif
  message: "Website sedang dalam perawatan. Kami akan kembali segera!",
  contact: "Hubungi kami di: +62-xxx-xxx-xxxx"
}
```

## File yang Ditambahkan

- `src/pages/MaintenancePage.jsx` - Komponen halaman maintenance
- `scripts/toggle-maintenance.js` - Script untuk toggle maintenance
- `README-MAINTENANCE.md` - Dokumentasi ini

## File yang Dimodifikasi

- `src/config/config.js` - Ditambahkan konfigurasi maintenance
- `src/App.jsx` - Ditambahkan logic untuk maintenance mode
- `package.json` - Ditambahkan script commands

## Cara Kerja

1. Ketika `config.maintenance.enabled = true`, website akan menampilkan halaman maintenance
2. Ketika `config.maintenance.enabled = false`, website akan berjalan normal
3. Script `toggle-maintenance.js` akan mengubah nilai `enabled` di config file
4. Halaman maintenance memiliki animasi dan desain yang sesuai dengan tema wedding

## Tips

- Selalu test maintenance mode di development sebelum production
- Update nomor kontak di config sebelum mengaktifkan maintenance
- Halaman maintenance sudah responsive untuk mobile dan desktop -->
