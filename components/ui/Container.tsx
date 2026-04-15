import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

// Max-width wrapper with horizontal padding.
export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 md:px-8", className)}
      {...props}
    />
  );
}
