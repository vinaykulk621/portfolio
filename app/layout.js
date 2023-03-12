import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Portoflio",
  description: "Portoflio website",
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
