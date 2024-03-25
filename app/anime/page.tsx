import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Anime',
  description: 'Anime i have watched over the years.',
  metadataBase: new URL('https://vinaykulka.vercel.app/anime'),
  keywords:
    'Next.js, React, Tailwind CSS, Server Components, Radix UI, Projects, Next js Projects',
  creator: 'Vinay',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vinaykulka.vercel.app/anime',
    images: ['https://vinaykulka.vercel.app/og/anime-og.jpg'],
    title: 'Vinay // Anime',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    siteName: 'Vinay // Anime',
  },
  twitter: {
    images: ['https://vinaykulka.vercel.app/og/anime-og.jpg'],
    site: 'https://vinaykulka.vercel.app/anime',
    card: 'summary_large_image',
    title: 'Vinay // Anime',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    creator: '@kuylycljhyvvy',
  },
}

const Robo = Roboto({
  weight: '400',
  subsets: ['greek', 'vietnamese'],
})

export default function home() {
  return (
    <div
      className={`${Robo.className} min-w-screen xs:text-sm flex min-h-screen flex-col items-center justify-center px-10 text-base dark:bg-zinc-950 dark:text-white md:px-40 lg:px-80 xl:px-96`}
    >
      <p>
        I have been been watching various anime from the past few years. I
        don&apos;t remember how i got into anime but, my first anime was{' '}
        <Link
          href={'https://myanimelist.net/anime/20507/Noragami'}
          className="tracking-tight text-zinc-400 underline"
        >
          Noragami.
        </Link>{' '}
        Seinen and Shounen are my type. Here are my top animes.
      </p>
      <div className="relative grid h-[280px] w-[460px] grid-cols-2">
        <Image
          alt="Jujustsu Kaisen"
          src={'/anime/jujutsu_kaisen.webp'}
          // width={600}
          // height={150}
          fill
          // className="h-full w-full rounded-md"
        />
      </div>
    </div>
  )
}
