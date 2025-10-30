import type { HeroHighlight } from "../../data/heroData";
import { HighlightIcon } from "./HeroIcons";

type HighlightsProps = {
  highlights: readonly HeroHighlight[];
};

/**
 * Highlights Component
 * Menampilkan 3 langkah proses penggunaan Recylo
 * Format: Icon + Title + Description untuk setiap step
 */
export const Highlights = ({ highlights }: HighlightsProps) => {
  return (
    <ul className="flex flex-col gap-4">
      {highlights.map((highlight) => (
        <li
          key={highlight.id}
          className="flex gap-4 rounded-2xl bg-white/80 p-4 shadow-brand-soft backdrop-blur"
        >
          {/* Container Icon */}
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent">
            <HighlightIcon icon={highlight.icon} />
          </span>

          {/* Konten Text */}
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-brand-secondary sm:text-base">
              {highlight.title}
            </p>
            <p className="text-sm text-neutral-600 sm:text-base">
              {highlight.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
