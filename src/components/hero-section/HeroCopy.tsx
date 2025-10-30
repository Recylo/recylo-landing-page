import Link from "next/link";

import { HERO_HIGHLIGHTS } from "../../data/heroData";
import { Highlights } from "./Highlights";

/**
 * Styling dasar untuk semua button CTA
 * Centralized untuk consistency dan easy maintenance
 */
const BUTTON_BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary";

/**
 * HeroCopy Component
 * Konten sisi kiri hero section (text & CTA)
 * Berisi: badge, headline, description, highlights, dan tombol CTA
 */
export const HeroCopy = () => {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-8 lg:gap-2">
      {/* Badge Brand */}
      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-linear-to-r from-brand-primary to-emerald-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-brand-primary/30">
        <span className="flex h-2 w-2 rounded-full bg-white" />
        Recylo
      </span>

      {/* Konten Text Hero */}
      <div className="space-y-6 lg:space-y-4">
        <h1
          id="hero-heading"
          className="text-4xl font-extrabold leading-tight text-brand-secondary md:text-5xl lg:text-6xl"
        >
          Tukar Sampah Jadi Uang. Gampang Banget!
        </h1>
        {/* alternatif:
        1. Tukar Sampah Jadi Uang. Gampang Banget!
        2. Setiap Hari, Jutaan Rupiah Hilang Dari Sampah Rumahmu. Saatnya Klaim Punyamu!
        3. Berhenti Buang Uang ke Tong Sampah. Mulai Dapat Uang Dari Sampahmu!
        4. Siapa Bilang Sampah Nggak Bernilai? Buktikan Sekarang!
        5. Peduli Lingkungan, Dapet Passive Income. Double Win!
        */}
        <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
          Punya kardus bekas, kertas, atau botol menumpuk? Jangan dibuang!
          Dengan <strong>Recylo</strong>, kamu bisa tukar sampah-sampah itu jadi
          poin, terus tukar lagi jadi uang. Caranya mudah: kumpulkan, kami
          jemput gratis, dan kamu langsung dapat poin.
          <span className="font-semibold text-brand-primary">
            {" "}
            Nggak pakai ribet!
          </span>
        </p>
      </div>

      {/* 3 Langkah Highlights */}
      <Highlights highlights={HERO_HIGHLIGHTS} />

      {/* Tombol Call-to-Action */}
      <div className="flex flex-col items-stretch gap-3 pt-2 lg:flex-row lg:items-center">
        <Link
          href="https://app.recylo.id"
          target="_blank"
          rel="noopener noreferrer"
          className={`${BUTTON_BASE_CLASSES} bg-brand-primary text-brand-accent shadow-brand-soft hover:bg-brand-primary/90`}
        >
          Coba Gratis Sekarang
        </Link>
        <Link
          href="#cara-kerja"
          prefetch={false}
          className={`${BUTTON_BASE_CLASSES} border border-brand-primary text-brand-primary hover:bg-brand-primary/10`}
        >
          Gimana Caranya?
        </Link>
      </div>
    </div>
  );
};
