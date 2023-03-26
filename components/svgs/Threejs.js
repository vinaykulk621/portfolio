import React from "react"
export function Threejs({}) {
  return (
    <div className="bg-pallet">
      <div className="items-center justify-center rounded-lg bg-white/70 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          strokeLinecap="square"
          strokeMiterlimit="10"
          version="1.1"
          viewBox="0 0 210 240"
          className="h-5 w-5"
        >
          <g
            transform="translate(8.964 4.2527)"
            fillRule="evenodd"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth="4"
          >
            <path d="m63.02 200.61-43.213-174.94 173.23 49.874z" />
            <path d="m106.39 50.612 21.591 87.496-86.567-24.945z" />
            <path d="m84.91 125.03-10.724-43.465 43.008 12.346z" />
            <path d="m63.458 38.153 10.724 43.465-43.008-12.346z" />
            <path d="m149.47 62.93 10.724 43.465-43.008-12.346z" />
            <path d="m84.915 125.06 10.724 43.465-43.008-12.346z" />
          </g>
        </svg>
      </div>
      <span className="text-smaller md:text-small text-white">ThreeJs</span>
    </div>
  )
}
