import { CaraKerjaCTA } from "./cara-kerja-section/CaraKerjaCTA";
import { CaraKerjaHeader } from "./cara-kerja-section/CaraKerjaHeader";
import { CaraKerjaSteps } from "./cara-kerja-section/CaraKerjaSteps";

export const CaraKerjaSection = () => {
  return (
    <section
      id="cara-kerja"
      aria-labelledby="cara-kerja-heading"
      className="section-padding-x py-16 sm:py-20"
    >
      <div className="section-container">
        <div className="flex flex-col items-center gap-12 rounded-[40px] border border-brand-accent-dark/60 bg-white px-4 py-14 shadow-brand-soft sm:px-8 lg:px-16">
          <CaraKerjaHeader />
          <CaraKerjaSteps />
          <CaraKerjaCTA />
        </div>
      </div>
    </section>
  );
};
