import type { SVGProps } from "react";
const BrowserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.182 8.81797C15.327 8.96297 15.369 9.18097 15.287 9.36897L13.588 13.326C13.538 13.444 13.445 13.538 13.327 13.588L9.36999 15.287C9.30599 15.314 9.23899 15.328 9.17199 15.328C9.04199 15.328 8.91399 15.277 8.81899 15.181C8.67399 15.037 8.63199 14.818 8.71299 14.63L10.412 10.673C10.462 10.555 10.556 10.462 10.674 10.412L14.631 8.71297C14.819 8.63097 15.037 8.67297 15.182 8.81797Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 12C3 16.9625 7.03754 21 12 21C16.9625 21 21 16.9625 21 12C21 7.03754 16.9625 3 12 3C7.03754 3 3 7.03754 3 12ZM5.5 12C5.5 15.584 8.416 18.5 12 18.5C15.584 18.5 18.5 15.584 18.5 12C18.5 8.416 15.584 5.5 12 5.5C8.416 5.5 5.5 8.416 5.5 12Z"
      fill="currentColor"
    />
  </svg>
);
export { BrowserIcon };
