import ThreeD from './ThreeD'
import Text from './Text';

export default function Home() {
  return (
    <>
      <div className="snap-y">
        <div className="snap-center absolute h-screen top-0">
          <ThreeD />
        </div>
        <div className="snap-center h-screen">
          <Text />
        </div>
      </div>
    </>
  )
}
