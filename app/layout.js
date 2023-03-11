import "./globals.css"

export const metadata = {
  title: "Portoflio",
  description: "Portoflio website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
