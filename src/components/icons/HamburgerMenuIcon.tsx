import { SVGAttributes } from "react";

export default function HamburgerMenuIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="3.66663"
        y1="4.25"
        x2="15.5"
        y2="4.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="3.66663"
        y1="9.25"
        x2="12.1666"
        y2="9.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="3.66663"
        y1="14.25"
        x2="15.5"
        y2="14.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
