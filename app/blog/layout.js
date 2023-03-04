export const metadata = {
  title: "Blog",
  description: "Portoflio website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
