import { Redirect } from "../svgs/Redirect"
import { GithubSVG } from "../svgs/githubSVG"
import Image from "next/image"
export function Sample({
  projectName,
  projectDescription,
  github_repo_name,
  DemoUrl,
  Preview,
}) {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center ">
        <div className="grid grid-cols-1 justify-items-center space-y-5 space-x-5 xs:grid-cols-4 xs:gap-5 lg:m-10 lg:gap-8">
          {/* <div className="w-auto rounded-lg bg-simple-black-2 text-left">
          <div className="aspect-auto self-center"> */}
          <div className="max-w-sm overflow-hidden rounded-lg bg-gray-600">
            <Image
              src={`/projects/${Preview}`}
              height={300}
              width={300}
              alt="Somebullshit"
              className="w-full"
            />
          </div>
          <div className="max-w-sm overflow-hidden rounded-lg bg-gray-600">
            <Image
              src={`/projects/earth-night.jpg`}
              height={300}
              width={300}
              alt="Somebullshit"
              className="w-full"
            />
            <div className="text-bold text-2xl">Hello</div>
          </div>
          <div className="max-w-sm overflow-hidden rounded-lg bg-gray-600">
            <Image
              src={`/projects/hike-1.jpg`}
              height={300}
              width={300}
              alt="Somebullshit"
              className="w-full"
            />
          </div>
          <div className="max-w-sm overflow-hidden rounded-lg bg-gray-600">
            <Image
              src={`/projects/hike-1.jpg`}
              height={300}
              width={300}
              alt="Somebullshit"
              className="w-full"
            />
          </div>
          {/* </div> */}
          {/* <div className="flex flex-col flex-wrap space-y-2 p-2 text-start text-white">
              <div className="text-3xl">{projectName}</div>
              <div className="break-words text-2xl">{projectDescription}</div>
              <div className="flex space-x-2">
                <GithubSVG url={github_repo_name} />
                <Redirect DemoUrl={DemoUrl} />
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  )
}
