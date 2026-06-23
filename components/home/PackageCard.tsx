"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgePercent,
  ChevronRight,
  ChevronDown,
  Clock3,
  Crown,
  MessageCircle,
  Rocket,
  ShoppingCart,
  Sparkles,
  Star,
  TrendingUp,
  type LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import type { WebsitePackage } from "@/data/packages";
import { createWhatsAppLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const accentStyles: Record<
  WebsitePackage["accent"],
  {
    accentLine: string;
    hoverBorder: string;
    hoverShadow: string;
    delivery: string;
    sectionBorder: string;
    sectionSurface: string;
    benefitSurface: string;
    label: string;
    iconWrap: string;
    iconColor: string;
    checkWrap: string;
    checkIcon: string;
    highlightBorder: string;
    highlightShadow: string;
  }
> = {
  orange: {
    accentLine: "bg-gradient-to-r from-orange-500 to-amber-400",
    hoverBorder: "hover:border-orange-300/90",
    hoverShadow: "hover:shadow-[0_30px_72px_rgba(249,115,22,0.14)]",
    delivery: "border-orange-200 bg-orange-50 text-orange-700",
    sectionBorder: "border-orange-100/90",
    sectionSurface: "bg-orange-50/40",
    benefitSurface: "bg-orange-50/62",
    label: "text-orange-700",
    iconWrap:
      "border-orange-200/80 bg-[linear-gradient(180deg,rgba(255,247,237,1)_0%,rgba(255,237,213,0.96)_100%)]",
    iconColor: "text-orange-500",
    checkWrap: "border-transparent bg-orange-500 shadow-[0_6px_14px_rgba(249,115,22,0.24)]",
    checkIcon: "text-white",
    highlightBorder: "border-orange-200/90",
    highlightShadow: ""
  },
  blue: {
    accentLine: "bg-gradient-to-r from-blue-500 via-sky-500 to-emerald-400",
    hoverBorder: "hover:border-blue-300/90",
    hoverShadow: "hover:shadow-[0_30px_72px_rgba(37,99,235,0.16)]",
    delivery: "border-blue-200 bg-blue-50 text-blue-700",
    sectionBorder: "border-blue-100/90",
    sectionSurface: "bg-blue-50/40",
    benefitSurface: "bg-emerald-50/38",
    label: "text-blue-700",
    iconWrap:
      "border-blue-200/80 bg-[linear-gradient(180deg,rgba(239,246,255,1)_0%,rgba(219,234,254,0.96)_100%)]",
    iconColor: "text-blue-500",
    checkWrap: "border-transparent bg-blue-500 shadow-[0_6px_14px_rgba(37,99,235,0.24)]",
    checkIcon: "text-white",
    highlightBorder: "border-blue-300/95 ring-1 ring-emerald-100/90",
    highlightShadow: "shadow-[0_26px_64px_rgba(37,99,235,0.14)]"
  },
  violet: {
    accentLine: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
    hoverBorder: "hover:border-violet-300/90",
    hoverShadow: "hover:shadow-[0_30px_76px_rgba(124,58,237,0.18)]",
    delivery: "border-violet-200 bg-violet-50 text-violet-700",
    sectionBorder: "border-violet-100/90",
    sectionSurface: "bg-violet-50/42",
    benefitSurface: "bg-violet-50/66",
    label: "text-violet-700",
    iconWrap:
      "border-violet-200/80 bg-[linear-gradient(180deg,rgba(245,243,255,1)_0%,rgba(237,233,254,0.96)_100%)]",
    iconColor: "text-violet-500",
    checkWrap: "border-transparent bg-violet-500 shadow-[0_6px_14px_rgba(124,58,237,0.24)]",
    checkIcon: "text-white",
    highlightBorder: "border-violet-300/95 ring-1 ring-violet-100/90",
    highlightShadow: "shadow-[0_28px_70px_rgba(124,58,237,0.16)]"
  },
  cyan: {
    accentLine: "bg-gradient-to-r from-blue-500 to-cyan-400",
    hoverBorder: "hover:border-blue-300/90",
    hoverShadow: "hover:shadow-[0_30px_72px_rgba(37,99,235,0.14)]",
    delivery: "border-blue-200 bg-blue-50 text-blue-700",
    sectionBorder: "border-blue-100/90",
    sectionSurface: "bg-blue-50/40",
    benefitSurface: "bg-blue-50/60",
    label: "text-blue-700",
    iconWrap:
      "border-blue-200/80 bg-[linear-gradient(180deg,rgba(239,246,255,1)_0%,rgba(219,234,254,0.96)_100%)]",
    iconColor: "text-blue-500",
    checkWrap: "border-transparent bg-blue-500 shadow-[0_6px_14px_rgba(37,99,235,0.24)]",
    checkIcon: "text-white",
    highlightBorder: "border-blue-200/90",
    highlightShadow: ""
  }
};

interface PackageCardProps {
  item: WebsitePackage;
}

const packageIcons: Record<WebsitePackage["id"], LucideIcon> = {
  "business-portfolio": Rocket,
  "starter-ecommerce": ShoppingCart,
  "business-ecommerce": TrendingUp,
  "premium-ecommerce": Crown
};

function CheckList({
  items,
  checkWrapClassName,
  ItemIcon,
  iconClassName,
  textClassName
}: {
  items: string[];
  checkWrapClassName: string;
  ItemIcon: LucideIcon;
  iconClassName: string;
  textClassName: string;
}) {
  return (
    <ul className={cn("grid gap-3 text-sm leading-6", textClassName)}>
      {items.map((feature) => (
        <li key={feature} className="flex items-start gap-3">
          <span
            className={cn(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
              checkWrapClassName
            )}
          >
            <ItemIcon className={cn("h-3 w-3", iconClassName)} />
          </span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export function PackageCard({ item }: PackageCardProps) {
  const [open, setOpen] = useState(false);
  const styles = accentStyles[item.accent];
  const Icon = packageIcons[item.id];
  const inquiryLink = createWhatsAppLink(
    `Hi Mugnee IT Solutions, I want to choose the "${item.name}" package.`
  );
  const mobileFeatures = open ? item.features : item.features.slice(0, 6);
  const badge =
    item.badge === "Most Popular" || item.badge === "Best Value" ? item.badge : undefined;
  const BadgeIcon = badge === "Most Popular" ? Sparkles : Crown;
  const badgeStyles =
    badge === "Most Popular"
      ? {
          surface: "bg-[linear-gradient(135deg,#15803D_0%,#16A34A_100%)]",
          shadow: "shadow-[0_16px_34px_rgba(22,163,74,0.24)]",
          glow: "bg-emerald-300/35"
        }
      : badge === "Best Value"
        ? {
            surface: "bg-[linear-gradient(135deg,#7C3AED_0%,#8B5CF6_50%,#A855F7_100%)]",
            shadow: "shadow-[0_18px_40px_rgba(124,58,237,0.24)]",
            glow: "bg-violet-300/35"
          }
        : null;
  const hoverLiftClass = "hover:-translate-y-2";
  const iconMotionClass = "group-hover:scale-105 group-hover:-rotate-3";
  const buttonLiftClass = "hover:-translate-y-0.5";

  return (
    <motion.article
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-slate-200/85 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 sm:p-6",
        hoverLiftClass,
        styles.hoverBorder,
        styles.hoverShadow,
        item.highlighted && styles.highlightBorder,
        item.highlighted && styles.highlightShadow
      )}
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
      }}
    >
      {badge && badgeStyles ? (
        <motion.div
          className={cn(
            "absolute right-5 top-5 overflow-hidden rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white",
            badgeStyles.surface,
            badgeStyles.shadow
          )}
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{
            opacity: 1,
            y: [0, -2, 0],
            scale: [1, 1.03, 1]
          }}
          transition={{
            opacity: { duration: 0.25 },
            scale: { duration: 2.6, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <span className={cn("absolute inset-0 opacity-80 blur-md", badgeStyles.glow)} />
          <motion.span
            className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.28)_38%,transparent_65%)]"
            initial={{ x: "-120%" }}
            animate={{ x: "120%" }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="relative z-10 inline-flex items-center gap-2">
            <BadgeIcon className="h-3.5 w-3.5" />
            {badge}
          </span>
        </motion.div>
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl border shadow-[0_12px_24px_rgba(15,23,42,0.08)] transition-transform duration-300",
            styles.iconWrap,
            iconMotionClass
          )}
        >
          <Icon className={cn("h-5 w-5", styles.iconColor)} />
        </div>
      </div>

      <div className={cn("mb-5 mt-4 h-1.5 w-14 rounded-full", styles.accentLine)} />

      <h3
        className={cn(
          "text-[1.35rem] font-bold uppercase leading-[1.15] tracking-[-0.03em] text-slate-950",
          badge ? "pr-28" : "pr-0"
        )}
      >
        {item.name}
      </h3>

      <div className="mt-4">
        <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
          Perfect For
        </div>
        <p className="mt-2 min-h-[64px] text-[13px] leading-6 text-slate-500 sm:text-[13.5px]">
          {item.bestFor}
        </p>
      </div>

      <div
        className={cn(
          "mt-5 rounded-2xl border p-4 transition-colors duration-300",
          styles.sectionBorder,
          styles.sectionSurface
        )}
      >
        <h4
          className={cn(
            "mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em]",
            styles.label
          )}
        >
          <span
            className={cn(
              "flex h-5 w-5 items-center justify-center rounded-full border",
              styles.checkWrap
            )}
          >
            <Sparkles className={cn("h-3 w-3", styles.checkIcon)} />
          </span>
          Features
        </h4>
        <div className="hidden md:block">
          <CheckList
            items={item.features}
            checkWrapClassName={styles.checkWrap}
            ItemIcon={ChevronRight}
            iconClassName={styles.checkIcon}
            textClassName="text-slate-700"
          />
        </div>
        <Collapsible open={open} onOpenChange={setOpen} className="md:hidden">
          <CheckList
            items={mobileFeatures}
            checkWrapClassName={styles.checkWrap}
            ItemIcon={ChevronRight}
            iconClassName={styles.checkIcon}
            textClassName="text-slate-700"
          />
          {item.features.length > 6 ? (
            <CollapsibleTrigger asChild>
              <button
                type="button"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                {open ? "Show Less" : "View All Features"}
                <ChevronDown className={cn("h-4 w-4 transition", open && "rotate-180")} />
              </button>
            </CollapsibleTrigger>
          ) : null}
          <CollapsibleContent />
        </Collapsible>
      </div>

      <div
        className={cn(
          "mt-5 rounded-2xl border p-4 transition-colors duration-300",
          styles.sectionBorder,
          styles.benefitSurface
        )}
      >
        <h4
          className={cn(
            "mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em]",
            styles.label
          )}
        >
          <span
            className={cn(
              "flex h-5 w-5 items-center justify-center rounded-full border",
              styles.checkWrap
            )}
          >
            <BadgePercent className={cn("h-3 w-3", styles.iconColor)} />
          </span>
          Exclusive Free Benefits
        </h4>
        <CheckList
          items={item.benefits}
          checkWrapClassName={styles.checkWrap}
          ItemIcon={Star}
          iconClassName={styles.checkIcon}
          textClassName="text-slate-700"
        />
      </div>

      <div className="mt-auto pt-6">
        <div className="mb-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Delivery Time
          </div>
          <div
            className={cn(
              "mt-2 inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em]",
              styles.delivery
            )}
          >
            <Clock3 className="h-3.5 w-3.5" />
            {item.delivery}
          </div>
        </div>

        <div className="grid gap-3">
          <Button
            asChild
            variant="whatsapp"
            className={cn(
              "h-12 w-full rounded-[16px] bg-gradient-to-r from-green-500 to-emerald-600 font-bold shadow-[0_14px_28px_rgba(22,163,74,0.18)] transition-all duration-200 hover:from-green-500 hover:to-emerald-500 hover:shadow-[0_18px_36px_rgba(22,163,74,0.24)]",
              buttonLiftClass
            )}
          >
            <a href={inquiryLink} target="_blank" rel="noreferrer">
              Talk on WhatsApp
              <MessageCircle className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
