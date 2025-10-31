import { FileText, Milk, Package, Sparkles } from "lucide";

import {
  HERO_IMPACT,
  HERO_MATERIALS,
  HERO_TIMELINE,
} from "../../data/heroData";
import { LucideIcon } from "../common/LucideIcon";

const MATERIAL_ICONS = {
  package: Package,
  "file-text": FileText,
  can: Milk,
  milk: Milk,
} as const;

export const HeroIllustration = () => {
  return (
    <div
      className="relative flex w-full flex-col gap-4 md:gap-6 max-w-2xl"
      aria-hidden
    >
      {/* Material Diterima - Mobile Version */}
      <div className="w-full rounded-3xl bg-white/85 p-4 shadow-brand-soft backdrop-blur sm:hidden">
        <div className="mb-3 flex items-center gap-2">
          <p className="text-xs font-semibold text-brand-secondary">
            Material Diterima
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-xs text-neutral-600">
          {HERO_MATERIALS.map((material) => {
            const iconNode =
              MATERIAL_ICONS[material.icon as keyof typeof MATERIAL_ICONS];
            return (
              <li
                key={material.name}
                className="flex items-center gap-2 rounded-2xl border border-border-soft bg-brand-accent/70 px-2.5 py-2"
              >
                <LucideIcon
                  icon={iconNode}
                  size={14}
                  className="shrink-0 text-brand-primary"
                />
                <span className="text-[11px] font-medium leading-tight">
                  {material.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="relative isolate w-full">
        <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/80 p-4 shadow-brand-soft backdrop-blur-sm sm:p-6">
          <div className="rounded-3xl bg-linear-to-br from-[#e7f5ec] via-white to-white p-4 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-primary sm:text-xs">
                  Dompet Recylo
                </p>
                <p className="mt-2 text-2xl font-extrabold text-brand-secondary sm:text-3xl">
                  Rp245.300
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-medium text-brand-primary sm:px-3 sm:text-xs">
                  +12.000 Poin
                </div>
                <div className="rounded-full bg-brand-primary px-2.5 py-1 text-[10px] font-semibold text-brand-accent sm:px-3 sm:text-xs">
                  Cairkan
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-white/90 p-3 sm:mt-6 sm:p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-600 sm:text-xs">
                Status Penjemputan
              </p>
              <ul className="mt-3 flex flex-col gap-2 sm:mt-4 sm:gap-3">
                {HERO_TIMELINE.map((item, index) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-2 rounded-xl border border-border-soft bg-brand-accent/80 p-2.5 sm:gap-3 sm:p-3"
                  >
                    <div className="relative mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-primary sm:h-2.5 sm:w-2.5">
                      {index < HERO_TIMELINE.length - 1 && (
                        <span className="absolute left-1/2 top-2 h-6 w-px -translate-x-1/2 bg-brand-primary/30 sm:top-2.5 sm:h-8" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-brand-secondary sm:text-sm">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-neutral-600 sm:text-xs">
                        {item.description}
                      </p>
                    </div>
                    <span className="ml-auto whitespace-nowrap text-[10px] font-semibold text-brand-primary sm:text-xs">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Material Diterima - Desktop Version (Floating) */}
        <div className="absolute -top-20 right-0 hidden w-48 rounded-3xl bg-white/85 p-4 shadow-brand-soft backdrop-blur sm:block sm:-top-28 sm:w-56 lg:w-72 lg:p-5">
          <div className="mb-2.5 flex items-center gap-2 sm:mb-3">
            <p className="text-[10px] font-semibold text-brand-secondary sm:text-xs">
              Material Diterima
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-1.5 text-xs text-neutral-600 sm:gap-2">
            {HERO_MATERIALS.map((material) => {
              const iconNode =
                MATERIAL_ICONS[material.icon as keyof typeof MATERIAL_ICONS];
              return (
                <li
                  key={material.name}
                  className="flex items-center gap-1.5 rounded-2xl border border-border-soft bg-brand-accent/70 px-2 py-1.5 sm:gap-2 sm:px-2.5 sm:py-2"
                >
                  <LucideIcon
                    icon={iconNode}
                    size={12}
                    className="shrink-0 text-brand-primary sm:size-3.5"
                  />
                  <span className="text-[10px] font-medium leading-tight sm:text-[11px]">
                    {material.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Pencapaian Komunitas - Desktop Version (Floating) */}
        <div className="absolute left-0 hidden w-64 rounded-[20px] bg-brand-primary px-4 py-3 text-brand-accent shadow-xl sm:flex sm:w-72 sm:flex-col sm:gap-2 sm:px-5 sm:py-4 md:-bottom-32 lg:-bottom-32">
          <div className="flex items-center gap-2">
            <LucideIcon icon={Sparkles} size={14} className="sm:size-4" />
            <p className="text-[10px] uppercase tracking-[0.16em] text-brand-accent/80 sm:text-base">
              {HERO_IMPACT.label}
            </p>
          </div>
          <p className="text-xl font-bold sm:text-2xl">{HERO_IMPACT.metric}</p>
          <p className="text-[10px] leading-relaxed text-brand-accent/90 sm:text-xs">
            {HERO_IMPACT.detail}
          </p>
          <div className="mt-1 flex gap-3 border-t border-brand-accent/20 pt-2.5 sm:gap-4 sm:pt-3">
            <div>
              <p className="text-xs font-semibold sm:text-sm">
                {HERO_IMPACT.stats[0].value}
              </p>
              <p className="text-[10px] text-brand-accent/70 sm:text-xs">
                {HERO_IMPACT.stats[0].label}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold sm:text-sm">
                {HERO_IMPACT.stats[1].value}
              </p>
              <p className="text-[10px] text-brand-accent/70 sm:text-xs">
                {HERO_IMPACT.stats[1].label}
              </p>
            </div>
          </div>
        </div>

        <span className="absolute -left-6 top-10 hidden h-16 w-16 rounded-full bg-brand-accent-dark/60 blur-2xl sm:block" />
        <span className="absolute -right-8 bottom-0 hidden h-20 w-20 rounded-full bg-brand-primary/40 blur-2xl lg:block" />
      </div>

      {/* Pencapaian Komunitas - Mobile Version */}
      <div className="w-full rounded-[20px] bg-brand-primary px-4 py-4 text-brand-accent shadow-xl sm:hidden">
        <div className="flex items-center gap-2">
          <LucideIcon icon={Sparkles} size={16} />
          <p className="text-xs uppercase tracking-[0.16em] text-brand-accent/80">
            {HERO_IMPACT.label}
          </p>
        </div>
        <p className="mt-2 text-2xl font-bold">{HERO_IMPACT.metric}</p>
        <p className="mt-1 text-xs leading-relaxed text-brand-accent/90">
          {HERO_IMPACT.detail}
        </p>
        <div className="mt-3 flex gap-6 border-t border-brand-accent/20 pt-3">
          <div>
            <p className="text-sm font-semibold">
              {HERO_IMPACT.stats[0].value}
            </p>
            <p className="text-xs text-brand-accent/70">
              {HERO_IMPACT.stats[0].label}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">
              {HERO_IMPACT.stats[1].value}
            </p>
            <p className="text-xs text-brand-accent/70">
              {HERO_IMPACT.stats[1].label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
