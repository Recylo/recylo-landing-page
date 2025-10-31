import { LucideIcon } from "../common/LucideIcon";
import type { CaraKerjaStep } from "./caraKerjaData";

type CaraKerjaStepCardProps = {
  step: CaraKerjaStep;
};

export const CaraKerjaStepCard = ({ step }: CaraKerjaStepCardProps) => {
  return (
    <li className="flex h-full flex-col gap-3 rounded-3xl border border-brand-accent-dark bg-white p-6 text-left shadow-brand-soft md:p-7">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center justify-center rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
          Langkah {step.id}
        </span>
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-accent-dark bg-brand-accent text-brand-primary">
          <LucideIcon icon={step.icon} size={26} strokeWidth={1.8} />
        </span>
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-brand-secondary md:text-xl">
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
          {step.description}
        </p>
      </div>
    </li>
  );
};
