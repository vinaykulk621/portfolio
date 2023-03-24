import { Intro } from "../components/Intro"
import ThreeD from "../components/ThreeD"

export default function Home() {
  return (
    <>
      <ThreeD />
      <div className="h-screen w-screen bg-gradient-to-b from-simple-black-2 to-simple-black">
        <Intro />
      </div>
      <p className="absolute top-[96%] w-screen text-center font-spotify text-lg text-gray-400">
        Check out this Cool Ball down here
      </p>
    </>
  )
}
