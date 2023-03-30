export const metadata = {
  title: 'Clicks',
  description: 'Portofolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
