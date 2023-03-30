import { Redirect, GithubSVG } from '../SVG'
import Image from 'next/image'

export function ProjectPallet({
  projectName,
  projectDescription,
  github_repo_name,
  DemoUrl,
  Preview,
  alt,
}) {
  return (
    <>
      <div className="group h-full max-w-sm overflow-hidden rounded-lg bg-simple-black-2 transition-all hover:bg-simple-blue/20">
        <Image
          src={`/projects/${Preview}`}
          height={300}
          width={300}
          alt={alt}
          className="w-full"
        />
        <div className="flex flex-col justify-center space-y-3">
          <div className="px-2 text-4xl underline-offset-4 group-hover:underline">
            {projectName}
          </div>
          <div className="break-words px-2 text-xl">{projectDescription}</div>
          <div className="flex space-x-2 p-2">
            <GithubSVG url={github_repo_name} />
            <Redirect DemoUrl={DemoUrl} />
          </div>
        </div>
      </div>
    </>
  )
}
