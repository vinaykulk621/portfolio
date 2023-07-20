import { ProjectPallet } from "@/components/Projects/ProjectPallet"

export const metadata = {
  title: 'Vinay | Projects',
  description: 'Projects',
}

export default function Home() {
  const projects = [
    [
      undefined,
      'vinaykulk621/spam-bot',
      'Spam Bot',
      'A Python Bot to spam messages across any social media.',
      'spamBot.png',
      'Spammer Project at https://github.com/vinaykulk621/spam-bot',
    ],
    [
      'https://cuboido.vercel.app/',
      'vinaykulk621/Cuboido',
      'Cuboido',
      '3D interactive CUBE Built Using Three.js, Next.js and Tailwind CSS.',
      'cuboido.png',
      'Cuboido Project at https://github.com/vinaykulk621/cuboido',
    ],
    [
      'https://globes.vercel.app/',
      'vinaykulk621/globes',
      'Globes',
      '3D Globes Made Using Three.js, Next.js and Tailwind CSS.',
      'globes.png',
      'Globes Project at https://github.com/vinaykulk621/globes',
    ],
    [
      'https://vinaykulk621.github.io/typewriter/',
      'vinaykulk621/typewriter',
      'Typewriter',
      'A JS application designed for typing practice on a pool of 3000 words.',
      'typewriter.png',
      'Typewriter Project at https://github.com/vinaykulk621/typewriter',
    ],
    [
      'https://github.com/vinaykulk621/Spotify-landingPage',
      'vinaykulk621/Spotify-landingPage',
      'Spotify',
      'Desktop Spotify Landing Page Clone With Neat and Responsive UI.',
      'spotify.png',
      'Spotify Project at https://github.com/vinaykulk621/Spotify-landingPage',
    ],
    [
      'https://vinaykulk621.github.io/netflix-profiles/',
      'vinaykulk621/netflix-profiles',
      'Netflix Profiles',
      'Netflix profile picker Landing Page Clone with neat UI.',
      'netflix.png',
      'Netflix Project at https://github.com/vinaykulk621/netflix-profiles',
    ],
    [
      'https://vinaykulk621.github.io/Crypto_Cell/',
      'vinaykulk621/Crypto_Cell',
      'Crypto Store',
      'A Crypto Market Landing Page With Neat UI.',
      'crypto.png',
      'Crypto Project at https://github.com/vinaykulk621/Crypto_Cell',
    ],
    [
      'https://vinaykulk621.github.io/DEVIL_FRUITS/',
      'vinaykulk621/DEVIL_FRUITS',
      'Devil Fruits',
      'A Webpage containing details of some Devil Fruits and its users From One Piece Universe.',
      'devil.png',
      'Devil Fruits Project at https://github.com/vinaykulk621/DEVIL_FRUITS',
    ],
    [
      'https://clocko.vercel.app',
      'vinaykulk621/clock',
      'Digital Clock',
      'A Simple digital clock that shows current time based on your current location.',
      'clock.png',
      'clock Project at https://github.com/vinaykulk621/clock',
    ],
    [
      'https://sierpinskitriangle.vercel.app',
      'vinaykulk621/sierpinski-triangle',
      'Sierpinski Triangle',
      '3D version of sierpinski triangle.',
      'sierpinski.png',
      'sierpinski triangle Project at https://github.com/vinaykulk621/sierpinski-triangle',
    ],
    [
      'https://soch.vercel.app',
      'vinaykulk621/soch',
      'Soch',
      'A Twitter like webApp. Built using Next.js and supabase. No need of authentication or an account to SOCH.',
      'soch.png',
      'soch Project at https://github.com/vinaykulk621/soch',
    ],
    [
      'https://noote.vercel.app',
      'vinaykulk621/noote',
      'noote',
      'An online note sharing application. No need of login. Create a secret url and share to anyone.',
      'noote.png',
      'noote Project at https://github.com/vinaykulk621/noote',
    ],
  ]
  return (
    <>
      <main className="bg-black font-spotify">
        <div className="flex flex-col space-y-9 md:h-fit">
          <div className="grid grid-cols-1 justify-items-center space-y-5 text-white xs:space-y-5 md:grid-cols-2 md:gap-5 md:space-y-0 lg:m-10 lg:grid-cols-4 lg:gap-8">
            {projects.map((e) => {
              return (
                <>
                  <ProjectPallet
                    key={Date.now() * Math.random()}
                    DemoUrl={e[0]}
                    github_repo_name={e[1]}
                    projectName={e[2]}
                    projectDescription={e[3]}
                    Preview={e[4]}
                    alt={e[5]}
                  />
                </>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}
