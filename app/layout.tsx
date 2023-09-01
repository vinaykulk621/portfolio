import React from 'react'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://vinaykulka.vercel.app'),
  title: 'Vinay | Portfolio',
  description:
    'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
    'Portfolio website',
  ],
  creator: 'Vinay',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vinaykulka.vercel.app',
    title: 'Vinay | Portfolio',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    siteName: 'Vinay | Portfolio',
    images: ['https://vinaykulka.vercel.app/og.jpg'],
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinay | Portfolio',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    images: ['https://vinaykulka.vercel.app/og.jpg'],
    creator: '@kuylycljhyvvy',
    creatorId: '@kuylycljhyvvy',
    site: 'https://vinaykulka.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
