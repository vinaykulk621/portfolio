import { BackButton } from "../../components/svgs/BackButton"

export const metadata = {
  title: "Projects",
  description: "Portoflio website",
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
