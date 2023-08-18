import Link from 'next/link'
import { ProjectPallet } from './ProjectPallet'
import { Button } from '../ui/button'

export function Projects({}) {
  return (
    <div className="flex flex-col space-y-9 md:h-screen">
      <div className="xs:space-y-5 grid grid-cols-1 justify-items-center space-y-5 text-white md:grid-cols-2 md:gap-5 md:space-y-0 lg:m-10 lg:grid-cols-4 lg:gap-8">
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
        <ProjectPallet
          DemoUrl={'https://words-livid.vercel.app/'}
          github_repo_name="vinaykulk621/words"
          projectName="Infinte-scroll Words"
          projectDescription="A simple implementation of Infinite scroll using in nNext js 13 and server actions."
          Preview={'words.png'}
          alt="Infinite scroll Words Project at https://github.com/vinaykulk621/words"
        />
        <ProjectPallet
          DemoUrl={'https://sierpinskitriangle.vercel.app'}
          github_repo_name="vinaykulk621/sierpinski-triangle"
          projectName="Sierpinski Triangle"
          projectDescription="3D version of sierpinski triangle"
          Preview={'sierpinski.png'}
          alt="sierpinski triangle Project at https://github.com/vinaykulk621/sierpinski-triangle"
        />
      </div>
      <Link href={'/projects'} className="m-auto mt-0">
        <Button className="xs:text-4xl w-fit rounded-lg bg-zinc-900 p-3 text-center text-2xl text-white">
          More Projects
        </Button>
      </Link>
    </div>
  )
}
