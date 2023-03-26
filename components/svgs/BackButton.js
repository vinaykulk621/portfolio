import Link from "next/link"

export function BackButton({}) {
  return (
    <Link href={"/"}>
      <div className="absolute top-2 left-2 rounded-xl bg-gray-900 px-4 py-2 text-center font-spotify hover:bg-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="h-6 w-6"
        >
          <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </div>
    </Link>
  )
}
