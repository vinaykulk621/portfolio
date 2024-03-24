import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anime',
  description: 'My Anime',
  metadataBase: new URL('https://vinaykulka.vercel.app/anime'),
  keywords: 'Next.js, React, Tailwind CSS, Anime',
  creator: 'Vinay',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vinaykulka.vercel.app/Anime',
    images: ['https://vinaykulka.vercel.app/og/anime-og.jpg'],
    title: 'Vinay // Anime',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    siteName: 'Vinay // Anime',
  },
  twitter: {
    site: 'https://vinaykulka.vercel.app/anime',
    images: ['https://vinaykulka.vercel.app/og/anime-og.jpg'],
    card: 'summary_large_image',
    title: 'Vinay // Anime',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    creator: '@kuylycljhyvvy',
  },
}

export default function home() {
  return <div className="dark:bg-zinc-950">Anime</div>
}
