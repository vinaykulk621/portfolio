import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Vinay | Portofolio",
  description: "Portofolio website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
