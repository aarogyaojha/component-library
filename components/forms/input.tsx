"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  description?: string;
}

/**
 * A styled text input for forms with support for labels, descriptions, and error states.
 * Adheres to the soft, rounded UI system.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, description, error, ...props }, ref) => {
    const id = React.useId();

    return (
      <div className="grid w-full items-center gap-1.5 focus-within:animate-pulse-subtle">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground mb-1 select-none"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          className={cn(
            "flex h-11 w-full rounded-xl border bg-card px-4 py-2 text-sm text-foreground ring-offset-background transition-all",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-0 focus-visible:border-primary",
            "disabled:cursor-not-allowed disabled:bg-secondary/20 disabled:border-transparent disabled:opacity-50",
            error ? "border-destructive focus-visible:ring-destructive/20" : "border-ui-border",
            className
          )}
          ref={ref}
          {...props}
        />
        {description && !error && (
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        )}
        {error && <p className="text-xs font-medium text-destructive mt-0.5">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
