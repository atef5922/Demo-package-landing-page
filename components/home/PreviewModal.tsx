"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Laptop, MessageCircle, Smartphone, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { WebsiteDemo } from "@/data/demos";
import { createWhatsAppLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type Device = "desktop" | "tablet" | "mobile";

const devices: Array<{
  id: Device;
  label: string;
  icon: typeof Laptop;
  maxWidthClass: string;
}> = [
  { id: "desktop", label: "Desktop", icon: Laptop, maxWidthClass: "w-full max-w-none" },
  { id: "tablet", label: "Tablet", icon: Tablet, maxWidthClass: "w-full max-w-[820px]" },
  { id: "mobile", label: "Mobile", icon: Smartphone, maxWidthClass: "w-full max-w-[414px]" }
];

interface PreviewModalProps {
  demo: WebsiteDemo | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PreviewModal({ demo, open, onOpenChange }: PreviewModalProps) {
  const [device, setDevice] = useState<Device>("desktop");

  useEffect(() => {
    if (open) {
      setDevice("desktop");
    }
  }, [open, demo?.id]);

  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    window.dispatchEvent(new Event("lenis:stop"));

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      window.dispatchEvent(new Event("lenis:start"));
    };
  }, [open]);

  if (!demo) return null;

  const activeDevice = devices.find((item) => item.id === device) ?? devices[0];
  const hasLiveDemo = demo.isLiveDemoAvailable !== false;
  const isPlaceholderPreview =
    demo.previewMode === "image" || !hasLiveDemo || demo.demoUrl.includes("example.com");
  const requestLink = createWhatsAppLink(
    `Hi Mugnee IT Solutions, I want to request the "${demo.title}" demo website.`
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-lenis-prevent
        className="flex h-[90vh] max-h-[92vh] w-[94vw] max-w-[1280px] flex-col gap-0 overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 p-0 text-white"
      >
        <div className="flex min-h-0 flex-1 flex-col p-3 pt-4 sm:p-4">
          <div className="flex shrink-0 flex-col gap-3 pr-14 sm:pr-16 lg:flex-row lg:items-center lg:justify-between">
            <div className="no-scrollbar flex overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.06] p-1">
              {devices.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setDevice(item.id)}
                  className={cn(
                    "inline-flex min-w-max items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition-all duration-200",
                    device === item.id
                      ? "bg-white text-slate-950 shadow-[0_10px_24px_rgba(255,255,255,0.12)]"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              {hasLiveDemo ? (
                <Button asChild variant="dark" size="sm">
                  <a href={demo.demoUrl} target="_blank" rel="noreferrer">
                    Open Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              <Button asChild variant="whatsapp" size="sm">
                <a href={requestLink} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Request This Website
                </a>
              </Button>
            </div>
          </div>

          <div
            data-lenis-prevent
            className="mt-3 flex min-h-0 flex-1 overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.22),transparent_34%),#020617]"
          >
            <div className="flex min-h-0 flex-1 items-center justify-center p-2 sm:p-4">
              <div
                className={cn(
                  "mx-auto h-full transition-[max-width] duration-300 ease-out",
                  activeDevice.maxWidthClass
                )}
              >
                <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white shadow-[0_24px_60px_rgba(2,6,23,0.32)]">
                  <div className="browser-dots flex shrink-0 gap-1.5 border-b border-slate-200 bg-white px-3 py-2">
                    <span className="bg-red-400" />
                    <span className="bg-yellow-400" />
                    <span className="bg-green-400" />
                  </div>
                  {isPlaceholderPreview ? (
                    <div className="relative min-h-0 flex-1 bg-white">
                      <Image
                        src={demo.thumbnail}
                        alt={`${demo.title} preview`}
                        fill
                        priority
                        className="object-contain object-top"
                        sizes="(max-width: 768px) 94vw, (max-width: 1280px) 90vw, 1280px"
                      />
                    </div>
                  ) : (
                    <div className="min-h-0 flex-1 overflow-hidden bg-white">
                      <iframe
                        src={demo.demoUrl}
                        title={`${demo.title} live preview`}
                        className="block h-full w-full bg-white"
                        sandbox="allow-scripts allow-same-origin allow-forms"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
