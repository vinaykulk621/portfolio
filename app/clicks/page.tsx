import type { Metadata } from 'next'
import Link from 'next/link'
import PainImage from './painImage'
import ModeToggle from '@/components/mode-toggle'

export const metadata: Metadata = {
  title: 'Clicks',
  description: 'Clicks that i have taken over the years.',
  metadataBase: new URL('https://vinaykulka.vercel.app/clicks'),
  keywords: 'Next.js, React, Tailwind CSS, Photography, nature, pictures',
  creator: 'Vinay',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vinaykulka.vercel.app/clicks',
    images: ['https://vinaykulka.vercel.app/og/clicks-og.jpg'],
    title: 'Vinay | Clicks',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    siteName: 'Vinay | Clicks',
  },
  twitter: {
    site: 'https://vinaykulka.vercel.app/clicks',
    images: ['https://vinaykulka.vercel.app/og/clicks-og.jpg'],
    card: 'summary_large_image',
    title: 'Vinay | Clicks',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    creator: '@kuylycljhyvvy',
  },
}

export default function Home() {
  return (
    <div className="flex justify-center dark:bg-zinc-950">
      <div className="absolute right-10 top-4">
        <ModeToggle />
      </div>
      <div className="xs:grid-cols-2 xs:gap-x-6 xs:py-8 grid max-w-screen-2xl grid-cols-1 gap-x-4 gap-y-6 px-16 py-10 md:grid-cols-3 lg:grid-cols-4">
        <Link
          href="/clicks"
          className="col-span-2 shrink items-center place-self-center text-center font-spotify text-7xl font-bold dark:text-zinc-200 md:text-9xl lg:col-span-2"
        >
          CLICKS
        </Link>
        <div className="col-span-1 row-span-1 grid gap-y-6 ">
          <PainImage
            src={'table-bottle.jpg'}
            desc="Sippin' on a bottle of water"
          />
          <PainImage src={'stadium-center-darker-sky.jpg'} desc="Cheerleader" />
        </div>
        <div className="col-span-1 row-span-1 grid gap-y-6 ">
          <PainImage src={'hike-clear-sky-1.jpg'} desc="Mountain Goat" />
          <PainImage src={'sea.jpg'} desc="Sea is WET" />
        </div>
        <PainImage src={'fog.jpg'} desc="Mysterious path" />
        <PainImage src={'trees.jpg'} desc="uh... Palm trees" />
        <PainImage src={'nandi.jpg'} desc="Staircase to my heart" />
        <PainImage src={'road_2.jpg'} desc="Classic black road" />
        <PainImage src={'jublie-bulding.jpg'} desc="Summer college vibes" />
        <PainImage src={'plane-glider.jpg'} desc="Flying into your heart" />
        <PainImage src={'sea-beach-closeup.jpg'} desc="Sea is WET 2" />
        <PainImage src={'forest.jpg'} desc="Forest veins" />
        <PainImage src={'road.jpg'} desc="Golden hour flowers" />
        <PainImage
          src={'stadium-left-side.jpg'}
          desc="Can i be your cheerleader"
        />
        <PainImage src={'hike-1.jpg'} desc="uh... big rock" />
      </div>
    </div>
  )
}
