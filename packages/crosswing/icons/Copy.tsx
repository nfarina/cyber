import type { SVGProps } from "react";
const CopyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 4.6H10C9.77909 4.6 9.6 4.77909 9.6 5V8H8V5C8 3.89543 8.89543 3 10 3H18C19.1046 3 20 3.89543 20 5V13C20 14.1046 19.1046 15 18 15H16V13.4H18C18.2209 13.4 18.4 13.2209 18.4 13V5C18.4 4.77909 18.2209 4.6 18 4.6Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 9.6H6C5.77909 9.6 5.6 9.77909 5.6 10V18C5.6 18.2209 5.77909 18.4 6 18.4H14C14.2209 18.4 14.4 18.2209 14.4 18V10C14.4 9.77909 14.2209 9.6 14 9.6ZM6 8C4.89543 8 4 8.89543 4 10V18C4 19.1046 4.89543 20 6 20H14C15.1046 20 16 19.1046 16 18V10C16 8.89543 15.1046 8 14 8H6Z"
      fill="currentColor"
    />
  </svg>
);
export { CopyIcon };
