import Link from "next/link";

const CTA_BUTTON_CLASSES =
  "inline-flex w-full items-center justify-center rounded-2xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-brand-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary sm:text-base";

export const TentangKamiHeader = () => {
  return (
    <div className="flex flex-col gap-6">
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">
        Berbasis di Makassar &amp; Gowa
      </span>
      <div className="space-y-4">
        <h2
          id="tentang-kami-heading"
          className="text-3xl font-extrabold text-brand-secondary sm:text-4xl"
        >
          Tentang Recylo
        </h2>
        <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
          Recylo hadir dari semangat anak muda untuk mengatasi masalah sampah
          sekaligus menciptakan peluang baru bagi masyarakat. Kami membantu kamu
          mengubah sampah menjadi nilai dengan cara yang mudah dan transparan,
          mulai dari penjemputan hingga ide reuse yang bermanfaat. Bersama
          Recylo, daur ulang bukan sekadar kewajiban, tapi langkah cerdas untuk
          menjaga lingkungan dan menambah penghasilan.
        </p>
      </div>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center w-full">
        <Link
          href="https://wa.me/62895330280864"
          target="_blank"
          rel="noopener noreferrer"
          className={CTA_BUTTON_CLASSES}
        >
          Bergabung Sebagai Mitra
        </Link>
        {/* 1. Ikut Jadi Bagian Recylo */}
      </div>
    </div>
  );
};
