import type { Metadata } from 'next'
import PainImage from './painImage'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vinay | Clicks',
  description: 'Clicks',
  metadataBase: new URL('https://vinaykulka.vercel.app'),
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
    'Photography',
    'nature',
    'pictures',
  ],
  creator: 'Vinay',
  openGraph: {
    images: ['https://vinaykulka.vercel.app/og.jpg'],
    type: 'website',
    locale: 'en_US',
    url: 'https://vinaykulka.vercel.app',
    title: 'Vinay | Portfolio',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    siteName: 'Vinay | Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinay | Portfolio',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    images: ['https://vinaykulka.vercel.app/og.jpg'],
    creator: '@kuylycljhyvvy',
  },
}

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-simple-black to-simple-black-2">
      <div className="xs:grid-cols-2 xs:gap-x-6 xs:py-8 grid grid-cols-1 gap-x-4 gap-y-6 px-14 py-5 md:grid-cols-3 lg:grid-cols-4">
        <Link
          href="/clicks"
          className="col-span-2 shrink items-center place-self-center text-center font-spotify text-7xl font-bold text-zinc-200 md:text-9xl lg:col-span-2"
        >
          CLICKS
        </Link>
        <div className="col-span-1 row-span-1 grid gap-y-6 ">
          <PainImage
            src={'table-bottle.jpg'}
            desc="Glass bottle, still and pure, Reflecting the world around."
          />
          <PainImage
            src={'stadium-center-darker-sky.jpg'}
            desc="Roar of the crowd, crack of the bat, Cricket's magic casts its spell."
          />
        </div>
        <div className="col-span-1 row-span-1 grid gap-y-6 ">
          <PainImage
            src={'hike-clear-sky-1.jpg'}
            desc="Mountain majesty, kissing the clouds."
          />
          <PainImage
            src={'sea.jpg'}
            desc="Waves crashing ashore, symphony of the sea."
          />
        </div>
        <PainImage
          src={'fog.jpg'}
          desc="Silent forest, bathed in mist, Where secrets lie, and mysteries persist."
        />
        <PainImage
          src={'trees.jpg'}
          desc="Palm fronds swaying high, a tropical ballet."
        />
        <PainImage
          src={'nandi.jpg'}
          desc="Stairway to the forest's heart, Where ancient secrets softly start."
        />
        <PainImage
          src={'road_2.jpg'}
          desc="Black mirror, smooth and sleek, Reflecting the world's mystique."
        />
        <PainImage
          src={'jublie-bulding.jpg'}
          desc="City skyline soars, reaching for the stars."
        />
        <PainImage
          src={'plane-glider.jpg'}
          desc="Silver blades in azure dance, Propelling dreams to distant lands."
        />
        <PainImage
          src={'sea-beach-closeup.jpg'}
          desc="Ocean's vast expanse, a mirror to the sky."
        />
        <PainImage
          src={'forest.jpg'}
          desc="Serpentine path, entwined with roots, A journey through the forest's secret routes."
        />
        <PainImage
          src={'road.jpg'}
          desc="Close-up of a street, a city's heartbeat."
        />
        <PainImage
          src={'stadium-left-side.jpg'}
          desc="Coliseum of dreams, where passions soar, A symphony of cheers, forevermore."
        />
        <PainImage
          src={'hike-1.jpg'}
          desc="Autumn leaves ablaze, a fiery symphony."
        />
      </div>
    </div>
  )
}
