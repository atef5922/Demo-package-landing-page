"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import { createWhatsAppLink, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link
      href="#demos"
      className="flex items-center rounded-xl transition-transform duration-200 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
      aria-label="Mugnee IT Solutions home"
    >
      <Image
        src="/brand%20logo/Mugnee%20IT%20Solutions.png"
        alt="Mugnee IT Solutions"
        width={1615}
        height={574}
        priority
        className="h-9 w-auto drop-shadow-[0_12px_24px_rgba(15,23,42,0.22)] sm:h-10"
      />
    </Link>
  );
}

export function Navbar() {
  const whatsappLink = createWhatsAppLink(
    "Hi Mugnee IT Solutions, I want to discuss a website package."
  );
  const floatingIconRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!floatingIconRef.current) return;
    const tween = gsap.to(floatingIconRef.current, {
      y: -6,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-[76px] transition-colors duration-300 sm:h-20",
          "border-b border-slate-200/70 bg-white/78 shadow-[0_16px_40px_rgba(15,23,42,0.06)] backdrop-blur-2xl"
        )}
      >
        <Container wide className="flex h-full items-center justify-between gap-4">
          <Logo />

          <div className="flex items-center gap-2.5 sm:gap-3">
            <Button asChild variant="whatsapp" size="sm">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={siteConfig.phoneHref}>
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
              </a>
            </Button>
          </div>
        </Container>
      </header>

      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-4 right-4 z-40 flex items-center gap-3 sm:bottom-6 sm:right-6"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <span className="hidden translate-x-2 rounded-full border border-green-100/90 bg-white/95 px-4 py-2 text-sm font-medium text-slate-700 opacity-0 shadow-[0_16px_34px_rgba(15,23,42,0.12)] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:inline-flex">
          WhatsApp Us
        </span>

        <motion.span
          ref={floatingIconRef}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-[0_18px_40px_rgba(22,163,74,0.28)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105"
          whileHover={{ rotate: -2 }}
        >
          <span className="absolute inset-0 rounded-full bg-green-400/30 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          <motion.span
            className="absolute inset-[-7px] rounded-full border border-green-300/40 opacity-70"
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
          <motion.span
            className="absolute inset-[-14px] rounded-full border border-green-200/25 opacity-60"
            animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.15, 0.35] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <MessageCircle className="relative z-10 h-6 w-6" />
        </motion.span>
      </motion.a>
    </>
  );
}
