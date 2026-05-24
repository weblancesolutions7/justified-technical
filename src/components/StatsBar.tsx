import type { ReactNode } from "react";
import { type } from "@/lib/typography";

export type StatItem = {
  value: string;
  label: string;
  icon: ReactNode;
};

type StatsBarProps = {
  stats: StatItem[];
  /** 4-up (default) or 5-up for about page */
  variant?: "4" | "5";
  className?: string;
};

export function StatsBar({ stats, variant = "4", className = "" }: StatsBarProps) {
  const gridClass =
    variant === "5"
      ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6 sm:gap-x-8"
      : "grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 sm:gap-x-8";

  return (
    <div className={`${gridClass} ${className}`.trim()}>
      {stats.map((item, idx) => (
        <div
          key={item.label}
          className={`flex items-center gap-3 sm:gap-4 text-left text-white ${
            idx < stats.length - 1 ? "lg:border-r lg:border-white/15 lg:pr-8" : ""
          }`}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center opacity-90 [&_svg]:size-7">
            {item.icon}
          </div>
          <div className="min-w-0 flex flex-col justify-center">
            <p className={`${type.stat} text-white leading-none`}>{item.value}</p>
            <p className={`text-white/70 ${type.caption} mt-1.5 leading-snug`}>{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
