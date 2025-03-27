import { SVGAttributes } from "react";

export default function DeleteIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.33325 5.83333H16.6666M8.33325 9.16667V14.1667M11.6666 9.16667V14.1667M4.16659 5.83333L4.99992 15.8333C4.99992 16.2754 5.17551 16.6993 5.48807 17.0118C5.80063 17.3244 6.22456 17.5 6.66659 17.5H13.3333C13.7753 17.5 14.1992 17.3244 14.5118 17.0118C14.8243 16.6993 14.9999 16.2754 14.9999 15.8333L15.8333 5.83333M7.49992 5.83333V3.33333C7.49992 3.11232 7.58772 2.90036 7.744 2.74408C7.90028 2.5878 8.11224 2.5 8.33325 2.5H11.6666C11.8876 2.5 12.0996 2.5878 12.2558 2.74408C12.4121 2.90036 12.4999 3.11232 12.4999 3.33333V5.83333"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
