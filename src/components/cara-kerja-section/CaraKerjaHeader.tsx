export const CaraKerjaHeader = () => {
  return (
    <header className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
        Langkah Gampangnya
      </span>
      <div className="space-y-3">
        <h2
          id="cara-kerja-heading"
          className="text-3xl font-extrabold text-brand-secondary sm:text-4xl"
        >
          Cara Kerja Recylo
        </h2>
        <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
          Daur ulang jadi lebih mudah; dari scan hingga jadi penghasilan, semua
          transparan dan cepat. Ikuti langkahnya satu per satu, cocok banget
          buat yang baru mulai.
        </p>
      </div>
    </header>
  );
};
