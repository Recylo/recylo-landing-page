import {
  CalendarClock,
  Coins,
  Recycle,
  Scale,
  Scan,
  ShoppingBag,
  Star,
  Motorbike,
  type IconNode,
} from "lucide";

export type CaraKerjaStep = {
  id: number;
  title: string;
  description: string;
  icon: IconNode;
};

export type CaraKerjaHighlight = {
  id: number;
  label: string;
  description: string;
  icon: IconNode;
};

export const CARA_KERJA_STEPS: CaraKerjaStep[] = [
  {
    id: 1,
    title: "Scan Sampahmu",
    description:
      "Buka fitur Scan Sampah, arahkan kamera ke plastik, kardus, atau botolmu. Aplikasi langsung ngenalin jenisnya dan kasih estimasi harga per kilo. Gampang banget buat pemula.",
    icon: Scan,
  },
  {
    id: 2,
    title: "Buat Jadwal Penjemputan",
    description:
      "Pilih hari dan jam yang cocok buat kamu. Form-nya singkat, lokasi otomatis keisi, jadi nggak perlu ribet ketik ulang alamat.",
    icon: CalendarClock,
  },
  {
    id: 3,
    title: "Tunggu Kurir Datang",
    description:
      "Sambil santai di rumah, kamu bisa cek status penjemputan secara real-time. Ada notifikasi kalau kurir lagi jalan ke tempatmu.",
    icon: Motorbike,
  },
  {
    id: 4,
    title: "Serahkan & Timbang Bareng",
    description:
      "Pas kurir sampai, tinggal serahin sampah yang sudah dipisah. Penimbangan dilakukan di depan kamu biar semuanya transparan.",
    icon: Scale,
  },
  {
    id: 5,
    title: "Dapatkan Poin Otomatis",
    description:
      "Begitu data penimbangan masuk, poin langsung ditransfer ke akunmu. Berat dan jenis sampah bikin nilai poin makin besar.",
    icon: Coins,
  },
  {
    id: 6,
    title: "Tukar Poin Jadi Hadiah",
    description:
      "Poin yang kamu kumpulin bisa dicairin jadi saldo tunai atau dipakai buat belanja produk ramah lingkungan di Marketplace Recylo.",
    icon: ShoppingBag,
  },
];

export const CARA_KERJA_HIGHLIGHTS: CaraKerjaHighlight[] = [
  {
    id: 1,
    label: "98% pengguna puas",
    description:
      "Layanannya ramah, jadwal on-time, dan prosesnya jelas dari awal sampai akhir.",
    icon: Star,
  },
  {
    id: 2,
    label: "15+ mitra pengolahan aktif",
    description:
      "Recylo kerja bareng bank sampah & UMKM pengolahan di berbagai kota di Indonesia.",
    icon: Recycle,
  },
];
