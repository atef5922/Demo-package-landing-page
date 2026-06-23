"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Code2, LayoutDashboard, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { createWhatsAppLink, siteConfig } from "@/lib/site";

export function CustomWebsiteCTA() {
  const customLink = createWhatsAppLink(
    "Hi Mugnee IT Solutions, I need a fully custom website based on my requirements."
  );

  return (
    <section
      id="custom"
      className="section-shell relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_56%,#EEF6FF_100%)] py-14 sm:py-18 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-90 [background:radial-gradient(circle_at_10%_16%,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_88%_12%,rgba(124,58,237,0.07),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.08),transparent_28%)]" />
      <Container wide>
        <div className="mx-auto max-w-[1320px]">
          <div className="relative min-h-[300px] overflow-hidden rounded-[32px] border border-slate-200/90 bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.98)_52%,rgba(239,246,255,0.98)_100%)] p-6 text-slate-950 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10 xl:p-12">
            <div className="pointer-events-none absolute left-[-8%] top-[-24%] h-72 w-72 rounded-full bg-[rgba(37,99,235,0.12)] blur-3xl" />
            <div className="pointer-events-none absolute right-[-8%] top-[-20%] h-80 w-80 rounded-full bg-[rgba(124,58,237,0.10)] blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-24%] left-1/2 h-52 w-[68%] -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50" />

            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[0.48fr_0.52fr] lg:gap-12">
              <div>
                <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Custom Solution
                </span>
                <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-[2.5rem]">
                  Need a Custom Website?
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base">
                  If none of the demos or packages match your business, Mugnee IT Solutions can
                  build a fully custom website based on your requirements.
                </p>

                <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
                  <Button asChild className="rounded-2xl">
                    <a href={customLink} target="_blank" rel="noreferrer">
                      Request Custom Website
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="whatsapp"
                    className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-500 hover:to-emerald-500"
                  >
                    <a href={customLink} target="_blank" rel="noreferrer">
                      Talk on WhatsApp
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="secondary"
                    className="rounded-2xl border border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                  >
                    <a href={siteConfig.phoneHref}>
                      Call Now
                      <Phone className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative flex min-h-[280px] items-center justify-center lg:min-h-[320px]">
                <div className="absolute left-2 top-4 grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white/90 text-blue-600 shadow-[0_16px_34px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:left-8">
                  <Code2 className="h-6 w-6" />
                </div>
                <div className="absolute right-3 top-2 grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white/90 text-violet-600 shadow-[0_16px_34px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:right-10">
                  <LayoutDashboard className="h-6 w-6" />
                </div>

                <div className="relative mx-auto w-full max-w-[560px]">
                  <div className="absolute inset-x-10 top-1/2 h-28 -translate-y-1/2 rounded-full bg-blue-500/12 blur-3xl" />
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative mx-auto w-[88%] max-w-[480px] rounded-[24px] border border-slate-200/90 bg-white/95 p-3 shadow-[0_28px_60px_rgba(37,99,235,0.12)]"
                  >
                    <div className="overflow-hidden rounded-[18px] bg-white">
                      <div className="browser-dots flex gap-1.5 border-b border-slate-200 px-3 py-2">
                        <span className="bg-red-400" />
                        <span className="bg-yellow-400" />
                        <span className="bg-green-400" />
                      </div>
                      <Image
                        src="/demo-thumbnails/crm-landing.webp"
                        alt="Custom CRM website mockup"
                        width={820}
                        height={470}
                        className="h-auto w-full"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
