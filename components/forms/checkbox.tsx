"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A sophisticated checkbox component using Radix UI primitives.
 * Features smooth transitions and soft primary accent color.
 */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & { 
    label?: string;
    description?: string;
    error?: string;
  }
>(({ className, label, description, error, ...props }, ref) => {
  const innerId = React.useId();
  const id = props.id || innerId;
  
  return (
    <div className="flex items-start space-x-3 group">
      <CheckboxPrimitive.Root
        ref={ref}
        id={id}
        className={cn(
          "peer h-5 w-5 shrink-0 rounded-lg border border-primary/20 bg-white ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary hover:border-primary/50 group-hover:scale-105 active:scale-95 shadow-sm mt-0.5",
          error && "border-destructive/50 data-[state=checked]:bg-destructive data-[state=checked]:border-destructive",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center text-current")}
        >
          <Check className="h-3.5 w-3.5 stroke-[3]" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {(label || description || error) && (
        <div className="grid gap-1.5 leading-none">
          {label && (
            <label
              htmlFor={id}
              className="text-sm font-bold text-foreground cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none"
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-xs text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
          {error && (
            <p className="text-xs font-bold text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
              {error}
            </p>
          )}
        </div>
      )}
    </div>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
