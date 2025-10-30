import type { IconNode } from "lucide";
import { createElement, type SVGProps } from "react";

type LucideIconProps = {
  icon: IconNode;
  size?: number;
  strokeWidth?: number;
  className?: string;
  svgProps?: SVGProps<SVGSVGElement>;
};

export const LucideIcon = ({
  icon,
  size = 24,
  strokeWidth = 1.8,
  className,
  svgProps,
}: LucideIconProps) => {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      width={size}
      {...svgProps}
    >
      {icon.map(([tag, attrs], index) =>
        createElement(tag, { key: `${tag}-${index}`, ...attrs }),
      )}
    </svg>
  );
};
