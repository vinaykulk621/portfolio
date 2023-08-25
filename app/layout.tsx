import React from 'react'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://vinaykulka.vercel.app'),
  title: siteConfig.name,
  description: siteConfig.description,
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
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: ['https://vinaykulka.vercel.app/og.jpg'],
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
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
