import ThreeD from './ThreeD'
import Text from './Text';
import { Allerta_Stencil } from '@next/font/google'


const allerta = Allerta_Stencil({ subsets: ['latin'], weight: ['400'], variable: '--font-Alerta' })
export default function Home() {

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="bg-gradient-to-b from-black to-gray-900">
          <ThreeD />
          <div className="top-3/4 absolute">
            {/* <Text /> */}
            <p className={`font-alerta ${allerta.variable} text-7xl text-gray-200`}>Hello There</p>
          </div>
          <div className="h-screen"></div>
        </div>
      </div>
    </>
  )
}