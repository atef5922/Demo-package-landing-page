"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-2xl text-sm font-semibold tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "button-shimmer bg-blue-violet text-white shadow-[0_16px_34px_rgba(76,81,191,0.24)] hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(76,81,191,0.28)]",
        secondary:
          "border border-slate-200/80 bg-white/95 text-slate-900 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]",
        dark:
          "border border-white/12 bg-white/[0.08] text-white shadow-[0_12px_28px_rgba(2,6,23,0.16)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.14]",
        whatsapp:
          "button-shimmer bg-whatsapp text-white shadow-[0_16px_34px_rgba(22,163,74,0.24)] hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-[0_20px_42px_rgba(22,163,74,0.28)]",
        ghost:
          "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
        outline:
          "border border-blue-200/90 bg-white text-blue-700 shadow-[0_1px_2px_rgba(37,99,235,0.05)] hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/90 hover:text-blue-800 hover:shadow-[0_12px_30px_rgba(37,99,235,0.1)]"
      },
      size: {
        default: "h-11 px-5",
        sm: "h-10 rounded-xl px-4 text-sm",
        lg: "h-12 px-6 text-sm",
        icon: "h-10 w-10 rounded-xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
