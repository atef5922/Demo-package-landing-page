"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, BadgeCheck, MessageCircle, Rocket, Users } from "lucide-react";
import { Container } from "@/components/common/Container";
import { GradientButton } from "@/components/common/GradientButton";
import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/site";

const floatingCards = [
  {
    label: "Ecommerce",
    image: "/demo-thumbnails/fashion-store.svg",
    className: "left-[4%] top-[22%] w-[46%] rotate-[-7deg] opacity-90"
  },
  {
    label: "Corporate",
    image: "/demo-thumbnails/corporate-business.svg",
    className: "left-[30%] top-[10%] z-20 w-[48%] rotate-[2deg]"
  },
  {
    label: "Healthcare",
    image: "/demo-thumbnails/healthcare.svg",
    className: "right-[1%] top-[28%] w-[42%] rotate-[7deg] opacity-90"
  }
];

const stats = [
  { value: "50+", label: "Websites Delivered", icon: BadgeCheck },
  { value: "100+", label: "Happy Clients", icon: Users },
  { value: "3+", label: "Years Experience", icon: Rocket }
];

export function HeroSection() {
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visualRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(".floating-browser", {
        y: -16,
        duration: 3.2,
        ease: "sine.inOut",
        stagger: 0.22,
        repeat: -1,
        yoyo: true
      });

      gsap.to(".hero-orbit", {
        rotate: 360,
        duration: 28,
        ease: "none",
        repeat: -1
      });
    }, visualRef);

    return () => ctx.revert();
  }, []);

  const whatsappLink = createWhatsAppLink(
    "Hi Mugnee IT Solutions, I want to explore ready-made website demos."
  );

  return (
    <section
      id="home"
      className="section-shell relative overflow-hidden bg-mesh-dark pt-24 text-white sm:pt-28 lg:min-h-[680px] lg:pt-28"
    >
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute left-[-12%] top-[22%] h-72 w-72 rounded-full border border-blue-500/15" />
      <div className="absolute right-[-10%] top-[8%] h-96 w-96 rounded-full border border-violet-500/15" />

      <Container wide className="relative z-10 grid items-center gap-10 pb-14 lg:grid-cols-[0.9fr_1.1fr] lg:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-blue-100 shadow-[0_16px_34px_rgba(2,6,23,0.16)] backdrop-blur-xl">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-500/20 text-yellow-300">
              <Rocket className="h-3.5 w-3.5" />
            </span>
            Premium Ready-Made Websites
          </div>

          <h1 className="mt-5 text-balance text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl xl:text-[68px] xl:leading-[0.98]">
            Launch Your Business Website{" "}
            <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-violet-400 bg-clip-text text-transparent">
              Faster
            </span>{" "}
            with Mugnee IT Solutions
          </h1>

          <p className="mt-5 max-w-xl text-[17px] leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Explore ready-made professional website demos, preview live designs, choose the
            right package, and launch your business website quickly with full support.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <GradientButton asChild size="lg">
              <a href="#demos">View Website Demos</a>
            </GradientButton>
            <Button asChild variant="dark" size="lg">
              <a href="#packages">
                See Packages
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="lg">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 overflow-hidden rounded-[26px] border border-white/12 bg-white/[0.07] shadow-[0_20px_50px_rgba(2,6,23,0.18)] backdrop-blur-xl">
            {stats.map((stat) => (
              <div key={stat.label} className="border-r border-white/10 p-4 last:border-r-0 sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/16 text-blue-200">
                    <stat.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xl font-bold text-white">{stat.value}</span>
                    <span className="block text-xs font-medium leading-4 text-slate-300">
                      {stat.label}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={visualRef}
          initial={{ opacity: 0, scale: 0.94, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto hidden h-[500px] w-full max-w-[760px] lg:block"
          aria-hidden="true"
        >
          <div className="hero-orbit absolute left-1/2 top-[55%] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/15" />
          <div className="absolute left-1/2 top-[66%] h-32 w-[560px] -translate-x-1/2 rounded-[50%] bg-blue-500/25 blur-3xl" />
          <div className="absolute left-1/2 top-[70%] h-20 w-[520px] -translate-x-1/2 rounded-[50%] border border-blue-300/40 bg-blue-500/10 shadow-[0_0_70px_rgba(59,130,246,0.6)]" />
          <div className="absolute left-1/2 top-[73%] h-10 w-[620px] -translate-x-1/2 rounded-[50%] border border-violet-400/60 shadow-[0_0_60px_rgba(124,58,237,0.65)]" />

          {floatingCards.map((card) => (
            <div
              key={card.label}
              className={`floating-browser absolute rounded-3xl border border-white/16 bg-white/12 p-2 shadow-[0_28px_60px_rgba(2,6,23,0.24)] backdrop-blur-xl ${card.className}`}
            >
              <div className="overflow-hidden rounded-2xl bg-white">
                <div className="browser-dots flex gap-1.5 border-b border-slate-200 px-3 py-2">
                  <span className="bg-red-400" />
                  <span className="bg-yellow-400" />
                  <span className="bg-green-400" />
                </div>
                <Image
                  src={card.image}
                  alt=""
                  width={640}
                  height={420}
                  className="h-auto w-full"
                  priority={card.label === "Corporate"}
                />
              </div>
            </div>
          ))}

          <span className="absolute left-[12%] top-[12%] rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold shadow-glow">
            Ecommerce
          </span>
          <span className="absolute left-[1%] top-[42%] rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold shadow-violet-glow">
            Corporate
          </span>
          <span className="absolute right-[3%] top-[18%] rounded-xl bg-whatsapp px-4 py-2 text-sm font-semibold shadow-[0_16px_45px_rgba(22,163,74,0.35)]">
            Healthcare
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
