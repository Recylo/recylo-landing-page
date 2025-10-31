import { CaraKerjaSection } from "./CaraKerjaSection";
import { FAQSection } from "./FAQSection";
import { HeroSection } from "./HeroSection";
import { TentangKamiSection } from "./TentangKamiSection";

export const LandingPageSection = () => {
  return (
    <main className="section-padding-x flex flex-col gap-10 bg-hero-gradient pb-6 md:gap-20">
      <HeroSection />
      <CaraKerjaSection />
      <TentangKamiSection />
      <FAQSection />
    </main>
  );
};
