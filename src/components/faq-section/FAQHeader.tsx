export const FAQHeader = () => {
  return (
    <div className="text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">
        Pertanyaan Umum
      </span>
      <h2
        id="faq-heading"
        className="mt-4 text-3xl font-extrabold text-brand-secondary sm:text-4xl"
      >
        Masih Penasaran?
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:mx-auto sm:text-base">
        Masih bingung soal cara pilah atau tukar sampah di Recylo? Tenang, di
        sini kamu bisa temukan jawaban dari pertanyaan yang paling sering
        ditanyain.
      </p>
    </div>
  );
};
