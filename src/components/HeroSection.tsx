import { HeroCopy } from "./hero-section/HeroCopy";
import { HeroIllustration } from "./hero-section/HeroIllustration";

/**
 * Hero Section Component
 * Container utama untuk hero section di landing page
 * Layout: Copy (kiri) + Illustration (kanan) pada desktop
 */
export const HeroSection = () => {
  return (
    <section aria-labelledby="hero-heading">
      <div className="flex min-h-screen flex-col items-center gap-12 sm:gap-32 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
        <HeroCopy />
        <HeroIllustration />
      </div>
    </section>
  );
};
