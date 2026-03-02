import { cn } from "@/lib/utils";

/**
 * A component for placeholders during loading states.
 * Uses a soft animated pulse with the brand's muted colors.
 */
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-full bg-secondary/40 border border-ui-border/20",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
