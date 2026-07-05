"use client";

import Image from "next/image";
import { ArrowUpRight, Eye, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { WebsiteDemo } from "@/data/demos";
import { createWhatsAppLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const categoryColors: Record<WebsiteDemo["category"], string> = {
  "E-Commerce": "bg-blue-50 text-blue-700 border-blue-100",
  Business: "bg-violet-50 text-violet-700 border-violet-100",
  Education: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Healthcare: "bg-sky-50 text-sky-700 border-sky-100",
  Restaurant: "bg-orange-50 text-orange-700 border-orange-100",
  "Real Estate": "bg-cyan-50 text-cyan-700 border-cyan-100",
  Custom: "bg-rose-50 text-rose-700 border-rose-100"
};

interface DemoCardProps {
  demo: WebsiteDemo;
  onPreview: (demo: WebsiteDemo) => void;
}

export function DemoCard({ demo, onPreview }: DemoCardProps) {
  const requestLink = createWhatsAppLink(
    `Hi Mugnee IT Solutions, I am interested in the "${demo.title}" demo website. Please share details.`
  );
  const hasLiveDemo = demo.isLiveDemoAvailable !== false;
  const hasQuickPreview = demo.category !== "Custom";

  return (
    <article className="surface-card group flex h-full min-h-[540px] flex-col overflow-hidden rounded-[16px] border border-slate-200/50 bg-white p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(37,99,235,0.12)] sm:p-5">
      <div
        className={cn(
          "group/preview relative flex w-full flex-col overflow-hidden rounded-[16px] border border-slate-200/80 bg-[#f9fbff] text-left transition-colors duration-300",
          hasQuickPreview && "focus-within:ring-2 focus-within:ring-blue-400"
        )}
      >
        <div className="flex h-6 items-center gap-2 bg-[#f8fafc] px-3">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
        </div>
        <button
          type="button"
          onClick={() => {
            if (hasQuickPreview) onPreview(demo);
          }}
          className={cn(
            "relative w-full overflow-hidden rounded-b-[16px] bg-[#f9fbff] aspect-[3/2] text-left",
            hasQuickPreview ? "cursor-pointer focus:outline-none" : "cursor-default"
          )}
          aria-label={hasQuickPreview ? `Quick preview ${demo.title}` : undefined}
          disabled={!hasQuickPreview}
        >
          <Image
            src={demo.thumbnail}
            alt={`${demo.title} preview`}
            fill
            className="block object-contain object-center transition-transform duration-500 ease-out group-hover/preview:scale-[1.015] group-focus-visible/preview:scale-[1.015]"
          />
          {hasQuickPreview ? (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[linear-gradient(180deg,rgba(15,23,42,0.04)_0%,rgba(15,23,42,0.46)_100%)] opacity-0 transition-opacity duration-300 group-hover/preview:opacity-100 group-focus-visible/preview:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/95 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.22)] backdrop-blur">
                <Eye className="h-4 w-4 text-blue-600" />
                Quick Preview
              </span>
            </div>
          ) : null}
        </button>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <div>
          <span
            className={cn(
              "inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]",
              categoryColors[demo.category]
            )}
          >
            {demo.category}
          </span>
          <h3 className="mt-3 text-[1.24rem] font-semibold leading-snug tracking-[-0.03em] text-slate-950">
            {demo.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {demo.description}
          </p>
        </div>

        <div className="mt-auto grid gap-2.5 pt-6">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-2.5">
            {hasLiveDemo ? (
              <Button asChild variant="outline" size="sm" className="justify-center">
                <a href={demo.demoUrl} target="_blank" rel="noreferrer">
                  Live Preview
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            ) : (
              <Button asChild size="sm" className="justify-center">
                <a href={requestLink} target="_blank" rel="noreferrer">
                  Request This Website
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            )}
            <Button
              asChild
              variant="secondary"
              size="icon"
              className="shrink-0"
              aria-label={`WhatsApp ${demo.title}`}
            >
              <a href={requestLink} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4 text-whatsapp" />
              </a>
            </Button>
          </div>
          {hasLiveDemo ? (
            <Button asChild className="h-11 rounded-2xl">
              <a href={requestLink} target="_blank" rel="noreferrer">
                Request This Website
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
