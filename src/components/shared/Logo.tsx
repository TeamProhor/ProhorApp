import type { SVGProps } from "react";

export interface LogoProps extends SVGProps<SVGSVGElement> {}

export default function Logo(props: Readonly<LogoProps>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <title>Ai2</title>
      <defs>
        <style>
          {`
            .logo-path {
              stroke: #F0529C;
              animation: logo-animation-loop 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }
            @keyframes logo-animation-loop {
              0% {
                stroke-dashoffset: 120;
                stroke-dasharray: 120;
                stroke-width: 0.5px;
                fill-opacity: 0;
                opacity: 0;
              }
              5% {
                opacity: 1;
              }
              35% {
                stroke-dashoffset: 0;
                stroke-dasharray: 120;
                stroke-width: 0.5px;
                fill-opacity: 0;
              }
              50%, 90% {
                stroke-dashoffset: 0;
                stroke-dasharray: 120;
                stroke-width: 0px;
                fill-opacity: 1;
                opacity: 1;
              }
              95%, 100% {
                stroke-dashoffset: 120;
                stroke-dasharray: 120;
                stroke-width: 0.5px;
                fill-opacity: 0;
                opacity: 0;
              }
            }
          `}
        </style>
      </defs>
      <path
        className="logo-path"
        d="M9.553 9.378H4.777V4.835H8.62c.513 0 .932-.42.932-.932V.058h4.544v4.777a4.542 4.542 0 01-4.544 4.543zm-4.776.467H0v4.543h3.845c.512 0 .932.42.932.932v3.845H9.32v-4.777a4.542 4.542 0 00-4.543-4.543zM20.05 9.61a.935.935 0 01-.932-.932V4.835h-4.543V9.61a4.542 4.542 0 004.543 4.544h4.777V9.612H20.05zM9.787 19.166v4.777h4.544v-3.845c0-.513.42-.932.932-.932h3.845V14.62H14.33a4.542 4.542 0 00-4.544 4.544z"
        fill="#F0529C"
      />
    </svg>
  );
}
