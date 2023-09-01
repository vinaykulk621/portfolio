import type { Metadata } from 'next'
import PainImage from './painImage'

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
        <p className="col-span-2 shrink items-center place-self-center text-center font-spotify text-7xl font-bold text-zinc-200 md:text-9xl lg:col-span-2">
          CLICKS
        </p>
        <div className="col-span-1 row-span-1 grid gap-y-6 ">
          <PainImage src={'table-bottle.jpg'} />
          <PainImage src={'stadium-center-darker-sky.jpg'} />
        </div>
        <div className="col-span-1 row-span-1 grid gap-y-6 ">
          <PainImage src={'hike-clear-sky-1.jpg'} />
          <PainImage src={'sea.jpg'} />
        </div>
        <PainImage src={'fog.jpg'} />
        <PainImage src={'trees.jpg'} />
        <PainImage src={'nandi.jpg'} />
        <PainImage src={'road_2.jpg'} />
        <PainImage src={'jublie-bulding.jpg'} />
        <PainImage src={'plane-glider.jpg'} />
        <PainImage src={'sea-beach-closeup.jpg'} />
        <PainImage src={'forest.jpg'} />
        <PainImage src={'road.jpg'} />
        <PainImage src={'stadium-left-side.jpg'} />
        <PainImage src={'hike-1.jpg'} />
        <PainImage src={'hike-filter-shoes.JPG'} />
      </div>
    </div>
  )
}
