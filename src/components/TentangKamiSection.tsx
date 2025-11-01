import { TentangKamiFeatures } from "./tentang-kami-section/TentangKamiFeatures";
import { TentangKamiHeader } from "./tentang-kami-section/TentangKamiHeader";

export const TentangKamiSection = () => {
  return (
    <section
      id="tentang"
      aria-labelledby="tentang-kami-heading"
      className="scroll-mt-10 py-0 sm:scroll-mt-10 sm:py-28 lg:scroll-mt-20 lg:py-10"
    >
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-2">
          <TentangKamiHeader />
          <div className="rounded-4xl border border-brand-accent-dark/60 bg-white p-6 shadow-brand-soft sm:p-8">
            <TentangKamiFeatures />
          </div>
        </div>
        {/* <div className="mt-10 sm:mt-12">
          <TentangKamiTeamSpotlight />
        </div> */}
      </div>
    </section>
  );
};
