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
            <div className="flex flex-row space-x-5">
              <p>
                Check out my{" "}
                <Link href={"/projects"}>
                  <span className="text-link">Projects</span>
                </Link>{" "}
                <Link href={"/blog"}>
                  <span className="text-link">Blogs</span>
                </Link>{" "}
                and{" "}
                <Link href={"/clicks"}>
                  <span className="text-link">Clicks</span>
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-row items-center pt-2">
              <h1>Reach me at </h1>
              <div className="m-3 flex space-x-6">
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
