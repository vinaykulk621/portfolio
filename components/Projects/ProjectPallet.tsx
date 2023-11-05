import Link from 'next/link'
import Image from 'next/image'
import { GithubSVG } from '../SVG'

export function ProjectPallet({
  projectName,
  projectDescription,
  github_repo_name,
  DemoUrl,
  Preview,
  alt,
  key_id,
}: {
  projectName: string
  projectDescription: string
  github_repo_name: string
  DemoUrl: string
  Preview: string
  alt: string
  key_id: string
}) {
  return (
    <div
      className="group mx-4 my-2 h-full max-w-sm overflow-hidden rounded-b-lg rounded-t-2xl dark:bg-zinc-900 md:mx-0 md:my-0"
      key={key_id}
    >
      <Link href={DemoUrl} target="_blank">
        <Image
          src={`/projects/${Preview}`}
          height={300}
          width={300}
          alt={alt}
          className="w-full rounded-2xl rounded-b-lg p-2"
        />
      </Link>
      <div className="flex h-fit flex-col justify-evenly space-y-3 px-1 py-2">
        <div className="px-2 text-4xl underline-offset-4 group-hover:underline">
          {projectName}
        </div>
        <div className="text-ellipsis break-words px-2 text-xl">
          {projectDescription}
        </div>
        <div className="flex space-x-2 px-4">
          <GithubSVG url={github_repo_name} />
        </div>
      </div>
    </div>
  )
}
