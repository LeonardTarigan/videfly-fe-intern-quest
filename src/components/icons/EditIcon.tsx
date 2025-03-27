import { SVGAttributes } from "react";

export default function EditIcon(props: SVGAttributes<SVGElement>) {
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
        d="M5.83325 5.83337H4.99992C4.55789 5.83337 4.13397 6.00897 3.82141 6.32153C3.50885 6.63409 3.33325 7.05801 3.33325 7.50004V15C3.33325 15.4421 3.50885 15.866 3.82141 16.1786C4.13397 16.4911 4.55789 16.6667 4.99992 16.6667H12.4999C12.9419 16.6667 13.3659 16.4911 13.6784 16.1786C13.991 15.866 14.1666 15.4421 14.1666 15V14.1667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 4.16669L15.8333 6.66669M16.9875 5.48753C17.3157 5.15932 17.5001 4.71418 17.5001 4.25003C17.5001 3.78588 17.3157 3.34073 16.9875 3.01253C16.6593 2.68432 16.2142 2.49994 15.75 2.49994C15.2858 2.49994 14.8407 2.68432 14.5125 3.01253L7.5 10V12.5H10L16.9875 5.48753Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
