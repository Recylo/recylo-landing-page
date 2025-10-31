import { CaraKerjaCTA } from "./cara-kerja-section/CaraKerjaCTA";
import { CaraKerjaHeader } from "./cara-kerja-section/CaraKerjaHeader";
import { CaraKerjaSteps } from "./cara-kerja-section/CaraKerjaSteps";

export const CaraKerjaSection = () => {
  return (
    <section
      id="cara-kerja"
      aria-labelledby="cara-kerja-heading"
      className="scroll-mt-10 py-0 sm:scroll-mt-10 sm:py-28 lg:scroll-mt-20 lg:py-10"
    >
      <div className="section-container">
        <div className="flex flex-col items-center gap-12 rounded-[40px] border border-brand-accent-dark/60 bg-white px-4 py-14 shadow-brand-soft sm:px-8 lg:px-20">
          <CaraKerjaHeader />
          <CaraKerjaSteps />
          <CaraKerjaCTA />
        </div>
      </div>
    </section>
  );
};
