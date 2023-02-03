import { Inter } from '@next/font/google'
import ThreeD from './threeD'

const inter = Inter({ subsets: ['latin'], weight: ['400', '300'], variable: '--font-Inter' })

export default function Home() {
  return (
    <>
      <div className='absolute top-0 h-screen'>
        <p className={`font-sans ${inter.variable} absolute top-8 text-9xl text-white`}>Hello There</p>
        <ThreeD />
      </div>
    </>
  )
}
