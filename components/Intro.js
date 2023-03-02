import Image from "next/image"

export function Intro({}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="font-spotify text-6xl text-white">
          Vinay's <span className="text-gray-400 hover:text-gray-300">web</span>
        </p>
        <div className="h-10 w-1/2 border-t border-x-cyan-50"></div>
        <div className="flex flex-row items-center gap-10">
          <Image
            className="overflow-hidden rounded-full"
            src="/me.svg"
            alt="Picture of the author"
            width={250}
            height={250}
          />
          <div className="flex flex-col font-spotify">
            <h1 className="text-2xl text-white">Hey, This is Vinay Kulkarni</h1>
            <h1 className="">I'm currently studying CSE at BMSCE</h1>
            <h1 className="text-2xl text-white">
              get in touch
              <a href="mailto:kulkarnivinay621@gmail.com">
                kulkarnivinay621@gmail.com
              </a>
            </h1>
            <h1 className="text-2xl text-white">stalk me</h1>
            <div className="flex flex-row space-x-5">
              <h1 className="text-2xl text-white">Projects</h1>
              <h1 className="text-2xl text-white">Blog</h1>
            </div>
          </div>
        </div>
        <Image
          className="overflow-hidden rounded-full"
          src="/walking-man/walking_man.svg"
          alt="Picture of the author"
          width={250}
          height={250}
        />
      </div>
    </>
  )
}
