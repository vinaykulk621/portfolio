export const metadata = {
  title: "Clicks",
  description: "Portoflio website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="grid min-h-screen place-items-center">{children}</body>
    </html>
  )
}
