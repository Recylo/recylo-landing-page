import { CalendarClock, Scan, Store, type IconNode } from "lucide";

export type TentangKamiFeature = {
  id: number;
  title: string;
  description: string;
  icon: IconNode;
};

export const TENTANG_KAMI_FEATURES: TentangKamiFeature[] = [
  {
    id: 1,
    title: "Scan Cerdas",
    description:
      "Scan sampahmu dengan AI dan langsung tahu jenis serta nilainya. Cepat, canggih, dan akurat!",
    icon: Scan,
  },
  {
    id: 2,
    title: "Jemput & Tukar Mudah",
    description:
      "Atur jadwal penjemputan sesuai waktumu, biarkan tim Recylo menjemput sampah terpilahmu, lalu tukar hasilnya jadi uang dengan sistem yang transparan.",
    icon: CalendarClock,
  },
  {
    id: 3,
    title: "Marketplace Lokal",
    description:
      "Gunakan poin hasil daur ulangmu untuk belanja atau mendukung produk kreatif ramah lingkungan dari pelaku lokal Sulawesi Selatan.",
    icon: Store,
  },
];
