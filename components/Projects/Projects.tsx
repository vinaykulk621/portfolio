import Link from 'next/link'
import { Button } from '../ui/button'
import { ProjectPallet } from './ProjectPallet'

export function Projects({}) {
  return (
    <div className="flex flex-col space-y-9">
      <div className="xs:space-y-5 grid grid-cols-1 justify-items-center space-y-5 text-white md:grid-cols-2 md:gap-5 md:space-y-0 lg:m-10 lg:gap-8">
        <ProjectPallet
          DemoUrl={'https://noote.vercel.app'}
          github_repo_name="vinaykulk621/noote"
          projectName="noote"
          projectDescription="An online note sharing application. No need of login. Create a secret url and share to anyone."
          Preview={'noote.png'}
          alt="noote Project at https://github.com/vinaykulk621/noote"
        />
        <ProjectPallet
          DemoUrl={'https://flukx.vercel.app/'}
          github_repo_name="vinaykulk621/flukx"
          projectName="Flukx"
          projectDescription="A link shortner which uses unique words to short links."
          Preview={'flukx.png'}
          alt="flukx Project at https://github.com/vinaykulk621/flukx"
        />
      </div>
      <Link href={'/projects'} className="m-auto mt-0">
        <Button className="xs:text-4xl w-fit rounded-lg bg-zinc-900 p-2 text-center text-2xl text-white">
          More Projects
        </Button>
      </Link>
    </div>
  )
}
