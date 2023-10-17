import { ProjectPallet } from '@/components/Projects/ProjectPallet'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects that i have done over the course of years.',
  metadataBase: new URL('https://vinaykulka.vercel.app/projects'),
  keywords:
    'Next.js, React, Tailwind CSS, Server Components, Radix UI, Projects, Next js Projects',
  creator: 'Vinay',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vinaykulka.vercel.app/projects',
    title: 'Vinay | Projects',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    siteName: 'Vinay | Projects',
  },
  twitter: {
    site: 'https://vinaykulka.vercel.app/projects',
    card: 'summary_large_image',
    title: 'Vinay | Projects',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    creator: '@kuylycljhyvvy',
  },
}

export default function Home() {
  const projects: string[][] = [
    [
      'https://github.com/vinaykulk621/spam-bot',
      'vinaykulk621/spam-bot',
      'Spam Bot',
      'A Python Bot to spam messages across any social media.',
      'spamBot.png',
      'Spammer Project at https://github.com/vinaykulk621/spam-bot',
    ],
    [
      'https://words-livid.vercel.app/',
      'vinaykulk621/words',
      'Infinte-scroll Words',
      'A simple implementation of Infinite scroll using in Next js 13 and server actions.',
      'words.png',
      'Infinite scroll Words Project at https://github.com/vinaykulk621/words',
    ],
    [
      'https://flukx.me/',
      'vinaykulk621/flukx',
      'Flukx',
      'A link shortner which uses unique words to short links.',
      'flukx.png',
      'flukx Project at https://github.com/vinaykulk621/flukx',
    ],
    [
      'https://noote.vercel.app',
      'vinaykulk621/noote',
      'noote',
      'An online note sharing application. No need of login. Create a secret url and share to anyone.',
      'noote.png',
      'noote Project at https://github.com/vinaykulk621/noote',
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
      'https://clocko.vercel.app',
      'vinaykulk621/clock',
      'Digital Clock',
      'A Simple digital clock that shows current time based on your current location.',
      'clock.png',
      'clock Project at https://github.com/vinaykulk621/clock',
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
  ]
  return (
    <main className="h-fit bg-zinc-950 font-spotify">
      <div className="grid grid-cols-1 justify-items-center gap-5 p-5 text-white md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {projects.map((e) => {
          return (
            <>
              <ProjectPallet
                key={e[2]}
                key_id={e[2]}
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
    </main>
  )
}
