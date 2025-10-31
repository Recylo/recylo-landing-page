/**
 * Hero Section - Konfigurasi Data
 * Centralized data untuk semua komponen di hero section
 * Memudahkan update konten tanpa perlu ubah component code
 */

/**
 * HERO_HIGHLIGHTS
 * 3 Fitur utama Recylo
 *
 * Digunakan di: HeroCopy component (section Highlights)
 * Format: id, icon, title, description
 */
export const HERO_HIGHLIGHTS = [
  {
    id: "points",
    icon: "coins",
    title: "Tukar Sampah Jadi Poin",
    description:
      "Sampahmu bernilai! Dapatkan poin setiap kali tukar sampah, lalu cairkan jadi uang.",
  },
  {
    id: "ai",
    icon: "scan",
    title: "Recylo AI Scanner",
    description:
      "Scan sampahmu dengan AI, langsung tau jenis dan nilainya. Canggih & akurat!",
  },
  {
    id: "marketplace",
    icon: "shopping-bag",
    title: "Marketplace Kerajinan",
    description:
      "Belanja produk unik dari sampah daur ulang. Stylish, ramah lingkungan, dan bermakna!",
  },
] as const;

export type HeroHighlight = (typeof HERO_HIGHLIGHTS)[number];

/**
 * HERO_TIMELINE
 * Contoh tracking status penjemputan untuk ilustrasi UI
 *
 * Digunakan di: HeroIllustration component (card Status Penjemputan)
 * Format: title, description, time
 */
export const HERO_TIMELINE = [
  {
    title: "Pickup Diproses",
    description: "Kurir Recylo #A247 menuju titik jemputmu.",
    time: "08.30 WITA",
  },
  {
    title: "Sortir & Verifikasi",
    description: "Kardus dan kertas lolos penilaian berat bersih.",
    time: "09.10 WITA",
  },
  {
    title: "Saldo Bertambah",
    description: "+Rp48.000 langsung ke Dompet Recylo.",
    time: "09.42 WITA",
  },
] as const;

/**
 * HERO_MATERIALS
 * Daftar jenis sampah yang diterima Recylo
 *
 * Digunakan di: HeroIllustration component (card Material Diterima)
 * Format: name, icon
 */
export const HERO_MATERIALS = [
  { name: "Kardus", icon: "package" },
  { name: "Kertas", icon: "file-text" },
  { name: "Kaleng Sprite", icon: "can" },
  { name: "Kaleng Susu", icon: "milk" },
] as const;

/**
 * HERO_IMPACT
 * Statistik pencapaian komunitas Recylo
 *
 * Digunakan di: HeroIllustration component (card Pencapaian Komunitas)
 * Format: label, metric, detail, stats[]
 */
export const HERO_IMPACT = {
  label: "Target Kami",
  metric: "1.000+ kg",
  detail: "Target sampah daur ulang di tahun pertama",
  stats: [
    { value: "1000+", label: "Early Adopters" },
    { value: "50+", label: "Mitra Komunitas" },
  ],
} as const;

// Versi sebelumnya (untuk production/setelah launch):
// export const HERO_IMPACT = {
//   label: "Pencapaian Komunitas",
//   metric: "50.000+ kg",
//   detail: "Sampah berhasil didaur ulang bersama",
//   stats: [
//     { value: "10.000+", label: "Pengguna Aktif" },
//     { value: "5.000+", label: "Transaksi Berhasil" },
//   ],
// } as const;
