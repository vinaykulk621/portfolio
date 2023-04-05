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
      <div className="group h-full max-w-sm overflow-hidden rounded-b-lg rounded-t-2xl bg-neutral-900 transition-all hover:bg-neutral-800">
        <Image
          src={`/projects/${Preview}`}
          height={300}
          width={300}
          alt={alt}
          className="w-full rounded-2xl rounded-b-lg p-2"
        />
        <div className="flex h-fit flex-col justify-evenly space-y-3 px-1 py-2">
          <div className="px-2 text-4xl underline-offset-4 group-hover:underline">
            {projectName}
          </div>
          <div className="text-ellipsis break-words px-2 text-xl">
            {projectDescription}
          </div>
          <div className="flex space-x-2 px-2">
            <GithubSVG url={github_repo_name} />
            {DemoUrl !== undefined ? <Redirect DemoUrl={DemoUrl} /> : ''}
          </div>
        </div>
      </div>
    </>
  )
}
