import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  inverted = false,
  className
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-4 inline-flex rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em]",
            inverted
              ? "border-blue-300/30 bg-blue-400/10 text-blue-100"
              : "border-blue-200 bg-blue-50 text-blue-700"
          )}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={cn(
          "text-balance text-[2rem] font-bold leading-[1.08] tracking-[-0.04em] sm:text-[2.45rem] lg:text-[2.85rem]",
          inverted ? "text-white" : "text-slate-950"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-[15px] leading-7 sm:text-lg sm:leading-8",
            inverted ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
