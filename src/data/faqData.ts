export type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "Bagaimana cara Recylo menjemput sampahku?",
    answer:
      "Atur jadwal lewat aplikasi atau chat, kami datang sesuai slot yang kamu pilih. Penimbangan dilakukan di tempat dan hasilnya langsung tercatat supaya kamu bisa pantau progresnya.",
  },
  {
    id: 2,
    question: "Sampah apa saja yang bisa dikumpulkan?",
    answer:
      "Kami fokus pada plastik rumah tangga, kardus, kertas, logam ringan, dan botol kaca yang bersih. E-waste dan sampah organik belum kami terima—akan kami umumkan begitu siap.",
  },
  {
    id: 3,
    question: "Apa ada minimal berat untuk dijemput?",
    answer:
      "Minimal awal 3 kg supaya perjalanan kurir tetap efisien. Kalau belum terkumpul, kamu bisa gabung bareng tetangga atau jadwalkan ulang di waktu lain.",
  },
  {
    id: 4,
    question: "Poin Recylo bisa ditukar jadi apa?",
    answer:
      "Poin bisa dicairkan ke saldo e-wallet atau rekening bank mana pun. Kamu juga bisa belanja produk reuse pilihan di Marketplace Recylo.",
  },
  {
    id: 5,
    question: "Apakah Recylo melayani luar Makassar & Gowa?",
    answer:
      "Saat ini fokus kami di Makassar dan Gowa. Kalau kamu tinggal di luar area, daftar waitlist saja supaya kami tahu kota mana yang siap kami datangi berikutnya.",
  },
];
