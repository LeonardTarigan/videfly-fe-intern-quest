import { cn } from "@/lib/utils";
import type { HTMLProps } from "react";

export default function LoadingSpinner({
  className,
  ...restProps
}: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn("loader", "border-primary size-5 border-2", className)}
      {...restProps}
    />
  );
}
