import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Vinay | Portofolio',
  description: 'Portofolio website',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
