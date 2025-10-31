export const TentangKamiTeamSpotlight = () => {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-dashed border-brand-accent-dark/60 bg-white px-6 py-10 text-center shadow-brand-soft sm:px-10">
      <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-brand-accent/60 text-brand-primary sm:h-40 sm:w-40">
        Foto Tim
      </div>
      <div className="space-y-2">
        <p className="text-lg font-semibold text-brand-secondary">Tim Recylo</p>
        <p className="text-sm text-neutral-600 sm:text-base">
          Satu tim kecil dari Makassar &amp; Gowa yang siap jemput sampahmu dan
          bantu kamu mulai kebiasaan reuse. (Ganti dengan foto tim saat siap.)
        </p>
      </div>
    </div>
  );
};
