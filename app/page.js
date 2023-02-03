import { Inter } from '@next/font/google'
import ThreeD from './threeD'
import Text from './Text';

const inter = Inter({ subsets: ['latin'], weight: ['400', '300'], variable: '--font-Inter' })
export default function Home() {
  return (
    <>
      <div className="absolute top-0">
        <ThreeD />
        <p className={`font-sans ${inter.variable} text-8xl text-white `}>
          <Text />
        </p>
      </div>
    </>
  )
}
