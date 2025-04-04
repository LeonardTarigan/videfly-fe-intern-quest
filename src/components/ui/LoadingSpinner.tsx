import { cn } from "@/lib/utils";
import type { SVGAttributes } from "react";

export default function LoadingSpinner({
  className,
  ...resProps
}: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("animate-spin", className)}
      {...resProps}
    >
      <path
        d="M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM2.5 10.5C2.5 14.9183 6.08172 18.5 10.5 18.5C14.9183 18.5 18.5 14.9183 18.5 10.5C18.5 6.08172 14.9183 2.5 10.5 2.5C6.08172 2.5 2.5 6.08172 2.5 10.5Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <path
        d="M19.501 10.5001C20.0533 10.5001 20.5062 10.9489 20.451 11.4984C20.3536 12.4691 20.1145 13.4222 19.7398 14.3269C19.2372 15.5402 18.5006 16.6425 17.572 17.5711C16.6435 18.4997 15.5411 19.2363 14.3278 19.7389C13.4231 20.1136 12.4701 20.3527 11.4993 20.4501C10.9498 20.5052 10.501 20.0523 10.501 19.5001C10.501 18.9478 10.9504 18.5065 11.4984 18.4376C12.2062 18.3487 12.9005 18.1653 13.5624 17.8911C14.533 17.4891 15.415 16.8998 16.1578 16.1569C16.9007 15.414 17.49 14.5321 17.892 13.5615C18.1662 12.8996 18.3496 12.2053 18.4386 11.4975C18.5074 10.9495 18.9487 10.5001 19.501 10.5001Z"
        fill="currentColor"
      />
    </svg>
  );
}
