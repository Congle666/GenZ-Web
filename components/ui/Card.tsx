import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-500 hover:shadow-lg",
        className
      )}
      {...props}
    />
  );
}
