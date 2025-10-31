import { TentangKamiFeatures } from "./tentang-kami-section/TentangKamiFeatures";
import { TentangKamiHeader } from "./tentang-kami-section/TentangKamiHeader";

export const TentangKamiSection = () => {
  return (
    <section
      id="tentang"
      aria-labelledby="tentang-kami-heading"
      className="section-padding-x scroll-mt-28 py-16 sm:scroll-mt-32 sm:py-20 lg:scroll-mt-40"
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
