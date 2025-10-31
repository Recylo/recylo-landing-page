import { FAQ_ITEMS } from "../../data/faqData";
import { FAQItem } from "./FAQItem";

export const FAQAccordion = () => {
  return (
    <ul className="space-y-4">
      {FAQ_ITEMS.map((item) => (
        <FAQItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </ul>
  );
};
