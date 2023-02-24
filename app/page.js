import ThreeD from './ThreeD'
import Text from './Text';

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="bg-gradient-to-b from-black to-gray-900">
          <ThreeD />
          <div className="top-2/3 absolute">
            <Text />
          </div>
          <div className="h-screen"></div>
        </div>
      </div>
    </>
  )
}