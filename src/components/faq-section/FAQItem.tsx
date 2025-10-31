"use client";

import { Minus, Plus } from "lucide";
import { useState } from "react";

import { LucideIcon } from "../common/LucideIcon";

type FAQItemProps = {
  id: number;
  question: string;
  answer: string;
};

export const FAQItem = ({ id, question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `faq-panel-${id}`;
  const headingId = `faq-heading-${id}`;

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li className="rounded-3xl border border-brand-accent-dark/60 bg-white shadow-sm shadow-brand-soft">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left sm:px-6 sm:py-5"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={headingId}
      >
        <span className="text-base font-semibold text-brand-secondary sm:text-lg">
          {question}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent text-brand-primary">
          <LucideIcon
            icon={isOpen ? Minus : Plus}
            size={20}
            strokeWidth={1.8}
          />
        </span>
      </button>
      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={headingId}
          className="border-t border-brand-accent-dark/50 px-5 py-4 sm:px-6 sm:py-5"
        >
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            {answer}
          </p>
        </div>
      )}
    </li>
  );
};
