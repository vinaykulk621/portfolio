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
        <div className="w-80 rounded-lg bg-simple-black-2 text-left">
          <div className="aspect-video self-center bg-white">
            <Image src={`/projects/${Preview}`} height={300} width={300} />
          </div>
          <div className="flex flex-col space-y-2 p-2 text-start text-white">
            <div className="text-3xl">{projectName}</div>
            <div className="text-2xl">{projectDescription}</div>
            <div className="flex space-x-2">
              <GithubSVG url={github_repo_name} />
              <Redirect DemoUrl={DemoUrl} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
