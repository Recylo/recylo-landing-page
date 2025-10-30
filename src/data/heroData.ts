/**
 * Hero Section - Konfigurasi Data
 * Centralized data untuk semua komponen di hero section
 * Memudahkan update konten tanpa perlu ubah component code
 */

/**
 * HERO_HIGHLIGHTS
 * Data 3 langkah utama menggunakan Recylo
 *
 * Digunakan di: HeroCopy component (section Highlights)
 * Format: id, icon, title, description
 */
export const HERO_HIGHLIGHTS = [
  {
    id: "schedule",
    icon: "recycle",
    title: "Kumpulkan sampahmu",
    description:
      "Pisahkan kardus, kertas, atau botol di rumah. Nggak perlu ribet!",
  },
  {
    id: "secure",
    icon: "truck",
    title: "Kami jemput gratis",
    description:
      "Pilih jadwal yang cocok, kurir kami datang langsung ke rumahmu.",
  },
  {
    id: "wallet",
    icon: "coins",
    title: "Langsung dapat poin",
    description:
      "Sampahmu ditimbang, kamu dapat poin yang bisa ditukar jadi uang!",
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
  label: "Pencapaian Komunitas",
  metric: "50.000+ kg",
  detail: "Sampah berhasil didaur ulang bersama",
  stats: [
    { value: "10.000+", label: "Pengguna Aktif" },
    { value: "250.000+", label: "Botol Diselamatkan" },
  ],
} as const;
