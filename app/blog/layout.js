import { BackButton } from "../../components/SVG"

export const metadata = {
  title: "Blog",
  description: "Portofolio website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <BackButton />
        {children}
      </body>
    </html>
  )
}
