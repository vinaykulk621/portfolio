import { GithubSVG } from '@/components/SVG'
import ModeToggle from '@/components/mode-toggle'
import { getBreadCrumb } from '@/components/ui/breadcrumb'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

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
    images: ['https://vinaykulka.vercel.app/og/project-og.jpg'],
    title: 'Vinay | Projects',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    siteName: 'Vinay | Projects',
  },
  twitter: {
    images: ['https://vinaykulka.vercel.app/og/project-og.jpg'],
    site: 'https://vinaykulka.vercel.app/projects',
    card: 'summary_large_image',
    title: 'Vinay | Projects',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    creator: '@kuylycljhyvvy',
  },
}

function ProjectPallet({
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
  key_id: number
}) {
  return (
    <div
      className="group mx-4 my-2 h-full max-w-sm overflow-hidden rounded-b-lg rounded-t-2xl bg-zinc-800 text-white dark:bg-zinc-900 md:mx-0 md:my-0"
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
  const breadCrumb = getBreadCrumb('projects')
  return (
    <main className="h-fit font-spotify dark:bg-zinc-950">
      {breadCrumb}
      <div className="fixed bottom-5 left-6">
        <ModeToggle />
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5 px-5 py-16 dark:text-white md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {projects.map((e, idx) => {
          return (
            <ProjectPallet
              key={e[2]}
              key_id={idx}
              DemoUrl={e[0]}
              github_repo_name={e[1]}
              projectName={e[2]}
              projectDescription={e[3]}
              Preview={e[4]}
              alt={e[5]}
            />
          )
        })}
      </div>
    </main>
  )
}
