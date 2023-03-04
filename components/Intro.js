import Image from "next/image"
import Link from "next/link"

export function Intro({}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-3">
        <p className="font-spotify text-6xl text-white">
          Vinay's <span className="text-gray-400 hover:text-gray-300">web</span>
        </p>
        <div className="h-14 w-1/2 border-t border-gray-400"></div>
        <div className="flex flex-row items-center gap-10">
          <Image
            className="overflow-hidden rounded-full"
            src="/me.svg"
            alt="Picture of the Creator"
            width={250}
            height={250}
          />
          <div className="flex flex-col space-y-1 font-spotify text-2xl text-white">
            <h1>
              Hey, This is <span className="text-link">Vinay Kulkarni</span>
            </h1>
            <h1>Studying CSE at BMSCE.</h1>
            <h1>
              Reach me out at{" "}
              <a href="mailto:kulkarnivinay621@gmail.com" className="text-link">
                kulkarnivinay621@gmail.com
              </a>
            </h1>
            <h1 className="text-link">stalk_me()</h1>
            <div className="flex flex-row space-x-5">
              <p>
                Check out my{" "}
                <Link href={"/projects"}>
                  <span className="text-link">Projects</span>
                </Link>{" "}
                and{" "}
                <Link href={"/blog"}>
                  <span className="text-link">Blog</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
