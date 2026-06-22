"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { DemoCard } from "@/components/home/DemoCard";
import { PreviewModal } from "@/components/home/PreviewModal";
import { demoCategories, type DemoCategory, type WebsiteDemo, websiteDemos } from "@/data/demos";
import { cn } from "@/lib/utils";

export function DemoShowcase() {
  const [activeCategory, setActiveCategory] = useState<"All" | DemoCategory>("All");
  const [selectedDemo, setSelectedDemo] = useState<WebsiteDemo | null>(null);
  const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: true });

  const filteredDemos = useMemo(() => {
    if (activeCategory === "All") return websiteDemos;
    return websiteDemos.filter((demo) => demo.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="demos"
      className="section-shell overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#f8fafc_46%,#ffffff_100%)] pb-14 pt-24 sm:pb-16 sm:pt-28 lg:pt-32"
    >
      <div className="absolute inset-0 opacity-90 [background:radial-gradient(circle_at_12%_12%,rgba(59,130,246,0.08),transparent_24%),radial-gradient(circle_at_88%_10%,rgba(124,58,237,0.06),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.06),transparent_30%)]" />
      <Container wide className="relative z-10">
        <SectionHeader
          title="Explore Our Ready Websites"
          subtitle="Choose a demo, preview it live, and request customization for your business."
          className="max-w-[760px]"
        />

        <div
          className="surface-muted mx-auto mt-7 max-w-5xl overflow-hidden rounded-[28px] p-2.5"
          ref={emblaRef}
        >
          <div className="flex gap-2.5">
            {demoCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "min-w-max rounded-full px-5 py-2.5 text-sm font-semibold tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2",
                  activeCategory === category
                    ? "bg-blue-violet text-white shadow-[0_12px_28px_rgba(76,81,191,0.24)]"
                    : "border border-transparent text-slate-600 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-slate-950"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-8 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
        >
          {filteredDemos.map((demo) => (
            <motion.div
              key={demo.id}
              layout
              className="h-full"
            >
              <DemoCard demo={demo} onPreview={setSelectedDemo} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" className="rounded-full px-5">
            View All Demos
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>

      <PreviewModal
        demo={selectedDemo}
        open={Boolean(selectedDemo)}
        onOpenChange={(open) => {
          if (!open) setSelectedDemo(null);
        }}
      />
    </section>
  );
}
