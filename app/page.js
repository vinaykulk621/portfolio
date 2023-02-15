import ThreeD from './ThreeD'
import Text from './Text';

export default function Home() {
  return (
    <>
      <div className="snap snap-y h-screen w-screen overflow-x-hidden snap-mandatory overflow-scroll">
        <div className="snap-center h-screen">
          <ThreeD />
        </div>
        <div className="snap-center h-screen bg-slate-600">
          <Text />
        </div>
        <div className="snap-center h-screen bg-yellow-300">
          <Text />
          sdjvkbhslvhbkvbkvjb
        </div>
      </div>
    </>
  )
}
