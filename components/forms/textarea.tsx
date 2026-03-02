"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string;
  error?: string;
}

/**
 * A multi-line text input for forms.
 * Styled to be soft, elegant, and consistent with the design system.
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, description, error, ...props }, ref) => {
    const id = React.useId();

    return (
      <div className="grid w-full items-center gap-1.5 animate-fade-in">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground mb-1 select-none"
          >
            {label}
          </label>
        )}
        <textarea
          id={id}
          className={cn(
            "flex min-h-[120px] w-full rounded-2xl border bg-card px-4 py-3 text-sm text-foreground ring-offset-background transition-all resize-none",
            "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
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
Textarea.displayName = "Textarea";

export { Textarea };
