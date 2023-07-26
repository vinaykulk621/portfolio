import Link from 'next/link'
import { ProjectPallet } from './ProjectPallet'

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
          DemoUrl={'https://cuboido.vercel.app/'}
          github_repo_name="vinaykulk621/Cuboido"
          projectName="Cuboido"
          projectDescription="3D interactive CUBE Built Using Three.js, Next.js and Tailwind CSS."
          Preview={'cuboido.png'}
          alt="Cuboido Project at https://github.com/vinaykulk621/cuboido"
        />
        <ProjectPallet
          DemoUrl={'https://globes.vercel.app/'}
          github_repo_name="vinaykulk621/globes"
          projectName="Globes"
          projectDescription="Collection of Cool 3D Globes Made Using Three.js, Next.js and Tailwind CSS."
          Preview={'globes.png'}
          alt="Globes Project at https://github.com/vinaykulk621/globes"
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
        <p className="xs:text-4xl w-fit rounded-lg bg-gradient-to-br from-[#1e1e1e] to-[#121212] p-3 text-center text-2xl text-white transition-all">
          More Projects
        </p>
      </Link>
    </div>
  )
}
