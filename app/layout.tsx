import React from 'react'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  metadataBase: new URL('https://vinaykulka.vercel.app'),
  title: 'Vinay | Portofolio',
  description: 'Portofolio website',
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
