import { CARA_KERJA_STEPS } from "./caraKerjaData";
import { CaraKerjaStepCard } from "./CaraKerjaStepCard";

export const CaraKerjaSteps = () => {
  return (
    <ol
      className="mx-auto grid w-full list-none gap-6 sm:grid-cols-2 lg:grid-cols-3"
      aria-labelledby="cara-kerja-heading"
    >
      {CARA_KERJA_STEPS.map((step) => (
        <CaraKerjaStepCard key={step.id} step={step} />
      ))}
    </ol>
  );
};
