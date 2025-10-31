import { Coins, ScanLine, ShoppingBag, type IconNode } from "lucide";

import type { HeroHighlight } from "../../data/heroData";
import { LucideIcon } from "../common/LucideIcon";

type HighlightIconName = HeroHighlight["icon"];

/**
 * Mapping icon untuk hero highlights
 * Menghubungkan nama icon dengan komponen Lucide
 */
const HIGHLIGHT_ICON_MAP: Record<HighlightIconName, IconNode> = {
  coins: Coins,
  scan: ScanLine,
  "shopping-bag": ShoppingBag,
};

type HighlightIconProps = {
  icon: HighlightIconName;
};

/**
 * HighlightIcon Component
 * Render icon untuk setiap highlight item (3 langkah)
 */
export const HighlightIcon = ({ icon }: HighlightIconProps) => {
  const iconNode = HIGHLIGHT_ICON_MAP[icon];

  return (
    <LucideIcon
      className="h-6 w-6 text-brand-primary"
      icon={iconNode}
      size={24}
      strokeWidth={1.8}
    />
  );
};
