import { TENTANG_KAMI_FEATURES } from "../../data/tentangKamiData";
import { LucideIcon } from "../common/LucideIcon";

export const TentangKamiFeatures = () => {
  return (
    <ul className="grid gap-4 sm:grid-cols-1">
      {TENTANG_KAMI_FEATURES.map((feature) => (
        <li
          key={feature.id}
          className="flex items-start gap-4 rounded-3xl border border-brand-accent-dark/60 bg-white p-5 shadow-brand-soft"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent text-brand-primary">
            <LucideIcon icon={feature.icon} size={24} strokeWidth={1.8} />
          </span>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-brand-secondary">
              {feature.title}
            </h3>
            <p className="text-sm text-neutral-600 sm:text-base">
              {feature.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
