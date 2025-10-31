import { CaraKerjaSection } from "./CaraKerjaSection";
import { HeroSection } from "./HeroSection";

export const LandingPageSection = () => {
  return (
    <main className="section-padding-x flex flex-col gap-10 md:gap-20 bg-hero-gradient pb-6">
      <HeroSection />
      <CaraKerjaSection />
    </main>
  );
};
