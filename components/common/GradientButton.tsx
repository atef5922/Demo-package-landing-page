"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonProps {
  showArrow?: boolean;
}

export function GradientButton({
  children,
  className,
  showArrow = true,
  asChild,
  ...props
}: GradientButtonProps) {
  const icon = showArrow ? (
    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
  ) : null;

  if (asChild) {
    const child = React.Children.only(children) as React.ReactElement<{
      children?: React.ReactNode;
    }>;

    return (
      <Button asChild className={cn("group", className)} {...props}>
        {React.cloneElement(child, {
          children: (
            <>
              <span>{child.props.children}</span>
              {icon}
            </>
          )
        })}
      </Button>
    );
  }

  return (
    <Button className={cn("group", className)} {...props}>
      <span>{children}</span>
      {icon}
    </Button>
  );
}
