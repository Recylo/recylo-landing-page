import { FAQAccordion } from "./faq-section/FAQAccordion";
import { FAQHeader } from "./faq-section/FAQHeader";

export const FAQSection = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding-x scroll-mt-28 py-16 sm:scroll-mt-32 sm:py-20 md:py-0 lg:scroll-mt-40"
    >
      <div className="section-container flex flex-col items-center gap-10 sm:gap-12">
        <FAQHeader />
        <div className="w-full">
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
};
