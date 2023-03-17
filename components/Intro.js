import { TwitterSVG } from "./svgs/twitterSVG"
import { LinkedinSVG } from "./svgs/linkedinSVG"
import { GithubSVG } from "./svgs/githubSVG"
import { EmailSVG } from "./svgs/emailSVG"
import Image from "next/image"
import Link from "next/link"

export function Intro({}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-3">
        <Link href={"/"}>
          <p className="font-spotify text-6xl text-white hover:underline">
            Vinay&apos;s{" "}
            <span className="text-gray-400 hover:text-white">web</span>
          </p>
        </Link>
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
            <p>
              Check out my{" "}
              <Link
                href={"/projects"}
                className="text-link hover:text-orange-400/80"
              >
                Projects
              </Link>{" "}
              <Link
                href={"/blog"}
                className="text-link hover:text-orange-400/80"
              >
                Blogs
              </Link>{" "}
              and{" "}
              <Link
                href={"/clicks"}
                className="text-link hover:text-orange-400/80"
              >
                Clicks
              </Link>
            </p>
            <div className="flex items-center space-x-4">
              <p>Reach me at </p>
              <div className="flex space-x-6">
                <EmailSVG />
                <GithubSVG />
                <LinkedinSVG />
                <TwitterSVG />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
