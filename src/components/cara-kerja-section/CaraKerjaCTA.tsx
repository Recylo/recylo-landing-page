import Link from "next/link";

const CTA_BUTTON_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary sm:text-base";

export const CaraKerjaCTA = () => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Link
        href="https://app.recylo.id"
        className={`${CTA_BUTTON_CLASSES} bg-brand-primary text-white shadow-brand-soft`}
      >
        Mulai Tukar Sampahmu Sekarang
      </Link>
    </div>
  );
};
