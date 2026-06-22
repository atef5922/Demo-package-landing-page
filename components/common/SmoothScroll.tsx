"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.08,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    const stop = () => lenis.stop();
    const start = () => lenis.start();

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    window.addEventListener("lenis:stop", stop);
    window.addEventListener("lenis:start", start);
    frame = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("lenis:stop", stop);
      window.removeEventListener("lenis:start", start);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
