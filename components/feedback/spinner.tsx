import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const spinnerVariants = cva("animate-spin text-primary", {
  variants: {
    size: {
      default: "h-6 w-6",
      sm: "h-4 w-4",
      lg: "h-10 w-10",
      xl: "h-16 w-16",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
  label?: string;
}

/**
 * A simple, consistent loading spinner.
 */
export function Spinner({ size, className, label }: SpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 animate-fade-in">
      <Loader2 className={cn(spinnerVariants({ size, className }))} />
      {label && <span className="text-sm font-medium text-muted-foreground">{label}</span>}
    </div>
  );
}
