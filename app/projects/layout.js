import { BackButton } from "../../components/svgs/BackButton"

export const metadata = {
  title: "Projects",
  description: "Portoflio website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="flex h-screen w-screen flex-col items-center justify-center bg-black font-spotify">
        <BackButton />
        {children}
      </body>
    </html>
  )
}
