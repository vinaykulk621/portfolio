import { ProjectPallet } from './ProjectPallet'
import Link from 'next/link'

export function Projects({}) {
  return (
    <div className="flex flex-col space-y-9 md:h-screen">
      <div className="grid grid-cols-1 justify-items-center space-y-5 text-white xs:space-y-5 md:grid-cols-2 md:gap-5 md:space-y-0 lg:m-10 lg:grid-cols-4 lg:gap-8">
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
          DemoUrl={'https://vinaykulk621.github.io/typewriter/'}
          github_repo_name="vinaykulk621/typewriter"
          projectName="Typewriter"
          projectDescription="A JavaScript application designed to facilitate typing practice on a pool of more than 3000 words."
          Preview={'typewriter.png'}
          alt="Typewriter Project at https://github.com/vinaykulk621/typewriter"
        />
        <ProjectPallet
          DemoUrl={'https://github.com/vinaykulk621/Spotify-landingPage'}
          github_repo_name="vinaykulk621/Spotify-landingPag"
          projectName="Spotify"
          projectDescription="Spotify Landing Page Clone With Neat and Responsive UI."
          Preview={'spotify.png'}
          alt="Spotify Project at https://github.com/vinaykulk621/Spotify-landingPage"
        />
      </div>
      <Link href={'/projects'} className="m-auto mt-0">
        <p className="w-fit rounded-lg bg-neutral-900 p-3 text-center text-2xl text-white transition-all hover:bg-gray-600/50 xs:text-4xl">
          More Projects
        </p>
      </Link>
    </div>
  )
}
