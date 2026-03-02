import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * A horizontal or vertical divider.
 */
export function Divider({ className, orientation = "horizontal" }: { className?: string; orientation?: "horizontal" | "vertical" }) {
  return (
    <div 
      className={cn(
        "bg-border-ui-border/40 shrink-0",
        orientation === "horizontal" ? "h-[1px] w-full my-6" : "h-full w-[1px] mx-6",
        className
      )} 
    />
  );
}

/**
 * A responsive container for centering content.
 */
export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

/**
 * A flexible grid layout with preset gaps.
 */
export function Grid({ className, children, cols = 3 }: { className?: string; children: React.ReactNode; cols?: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const colMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-2 md:grid-cols-5",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };

  return (
    <div className={cn("grid gap-8", colMap[cols], className)}>
      {children}
    </div>
  );
}

export * from "./card";
