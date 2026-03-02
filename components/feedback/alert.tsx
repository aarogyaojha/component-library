import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Info, AlertCircle, CheckCircle2, AlertTriangle, AlertOctagon } from "lucide-react";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-2xl border p-4 transition-all animate-fade-in flex items-start gap-4",
  {
    variants: {
      variant: {
        default: "bg-surface text-foreground border-ui-border/50 shadow-soft",
        destructive:
          "border-destructive/50 bg-destructive/5 text-destructive dark:border-destructive [&_svg]:text-destructive",
        success: "border-emerald-500/50 bg-emerald-500/5 text-emerald-600 [&_svg]:text-emerald-600",
        warning: "border-amber-500/50 bg-amber-500/5 text-amber-600 [&_svg]:text-amber-600",
        premium: "border-primary/50 bg-primary/5 text-primary shadow-premium [&_svg]:text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
}

/**
 * An alert component for critical feedback messages.
 * Features variant icons and themed styling.
 */
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, icon, children, ...props }, ref) => {
    let statusIcon = icon;
    if (!icon) {
      if (variant === "destructive") statusIcon = <AlertOctagon className="h-5 w-5 shrink-0" />;
      else if (variant === "success") statusIcon = <CheckCircle2 className="h-5 w-5 shrink-0" />;
      else if (variant === "warning") statusIcon = <AlertTriangle className="h-5 w-5 shrink-0" />;
      else if (variant === "premium") statusIcon = <AlertCircle className="h-5 w-5 shrink-0" />;
      else statusIcon = <Info className="h-5 w-5 shrink-0" />;
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <div className="mt-0.5">{statusIcon}</div>
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("mb-1 font-bold leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm opacity-80 [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
