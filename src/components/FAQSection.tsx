import { FAQAccordion } from "./faq-section/FAQAccordion";
import { FAQHeader } from "./faq-section/FAQHeader";

export const FAQSection = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-10 py-0 sm:scroll-mt-10 sm:py-28 lg:scroll-mt-20 lg:py-10 mb-20"
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
