import React from "react"
export function HTMLSVG({}) {
  return (
    <div className="bg-pallet">
      <div className="items-center justify-center rounded-lg bg-[#dd4b2526] p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#dd4b25"
          className="h-5 w-5"
        >
          <path d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"></path>
        </svg>
      </div>
      <span className="text-smaller md:text-small text-white">HTML</span>
    </div>
  )
}