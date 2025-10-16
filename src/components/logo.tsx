import { SVGProps } from "react";

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="32" cy="32" r="31" stroke="#4A7C59" strokeWidth="2" fill="#FDF7F1" />
      <path
        d="M22 40c4.36-1.8 7.7-3.9 10-6.3 2.3-2.4 4.1-5.73 5.4-10 1.27-4.26 2.25-7.04 2.95-8.32.7-1.28 1.77-2.39 3.2-3.32"
        stroke="#4A7C59"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M42 24c-4.13 2.4-7.22 4.95-9.28 7.64C30.64 34.33 29 38.42 28 44"
        stroke="#D2B48C"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M20.5 43.5c2.33-1.58 4.66-2.92 7-4.03 2.34-1.11 4.7-1.99 7.07-2.63 2.37-.64 4.76-1.03 7.16-1.16"
        stroke="#FFDAB9"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
