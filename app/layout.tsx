import { NavBar } from '@/components/NavBar'
import ModeToggle from '@/components/mode-toggle'
import ThemeProvider from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import React from 'react'

export const metadata: Metadata = {
  metadataBase: new URL('https://vinaykulka.vercel.app'),
  title: {
    default: 'Vinay // Portfolio',
    template: 'Vinay // %s',
  },
  description:
    'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
  keywords:
    'Next.js, React, Tailwind CSS, Server Components, Portfolio website',
  creator: 'Vinay',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vinaykulka.vercel.app/',
    title: 'Vinay // Portfolio',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    siteName: 'Vinay // Portfolio',
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinay // Portfolio',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
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
        <NextTopLoader showSpinner={false} color="grey" height={2} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <NavBar />
        <Toaster />
        <Analytics />
        <div className="absolute right-10 top-4">
          <ModeToggle />
        </div>
      </body>
    </html>
  )
}
