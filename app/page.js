import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400', '300'], variable: '--font-Inter' })

export default function Home() {
  return (
    <>
      <main className={`font-sans ${inter.variable} text-9xl justify-center items-center flex h-screen bg-slate-400`}>
        Portoflio
      </main>
    </>
  )
}
