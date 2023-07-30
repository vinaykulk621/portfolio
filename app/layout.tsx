import React from 'react'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  metadataBase: new URL('https://vinaykulka.vercel.app'),
  title: 'Vinay | Portfolio',
  description: 'Portfolio website',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vinaykulka.vercel.app',
    title: 'Vinay | Portfolio',
    description: 'Vinay | Portfolio',
    siteName: 'Portofolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinay | Portfolio',
    description: 'Vinay | Portfolio',
    images: ['https://vinaykulka.vercel.app/og.jpg'],
    creator: 'Vinay Kulkarni',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
