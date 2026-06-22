"use client";

import Image from "next/image";
import { ArrowUpRight, Eye, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { WebsiteDemo } from "@/data/demos";
import { createWhatsAppLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const categoryColors: Record<WebsiteDemo["category"], string> = {
  Ecommerce: "bg-blue-50 text-blue-700 border-blue-100",
  Business: "bg-violet-50 text-violet-700 border-violet-100",
  Portfolio: "bg-purple-50 text-purple-700 border-purple-100",
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

  return (
    <article className="surface-card group flex h-full min-h-[540px] flex-col overflow-hidden rounded-[30px] p-4 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200/80 hover:shadow-[0_28px_60px_rgba(37,99,235,0.12)] sm:p-5">
      <button
        type="button"
        onClick={() => onPreview(demo)}
        className="relative aspect-square overflow-hidden rounded-[24px] border border-slate-200/80 bg-slate-50 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label={`Quick preview ${demo.title}`}
      >
        <div className="browser-dots absolute inset-x-0 top-0 z-10 flex gap-1.5 border-b border-white/60 bg-white/92 px-3.5 py-2.5 backdrop-blur-sm">
          <span className="bg-red-400" />
          <span className="bg-yellow-400" />
          <span className="bg-green-400" />
        </div>
        <div className="relative h-full w-full overflow-hidden bg-slate-50">
          <Image
            src={demo.thumbnail}
            alt={`${demo.title} preview`}
            width={720}
            height={460}
            className="h-full w-full object-cover object-top transition duration-500 ease-out group-hover:scale-[1.04]"
          />
        </div>
        <span className="absolute inset-0 grid place-items-center bg-slate-950/5 opacity-0 transition duration-300 group-hover:bg-slate-950/30 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_16px_32px_rgba(15,23,42,0.18)]">
            <Eye className="h-4 w-4" />
            Quick Preview
          </span>
        </span>
      </button>

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
          <h3 className="mt-3 min-h-[56px] text-[1.24rem] font-semibold leading-snug tracking-[-0.03em] text-slate-950">
            {demo.title}
          </h3>
          <p className="mt-2.5 min-h-[72px] text-sm leading-6 text-slate-600">
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
              <Button variant="outline" size="sm" className="justify-center" disabled>
                Preview Only
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
          <Button asChild className="h-11 rounded-2xl">
            <a href={requestLink} target="_blank" rel="noreferrer">
              Request This Website
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
