import { Intro } from "../components/Intro"
import { TechStack } from "../components/TechStack"
import ThreeD from "../components/ThreeD"

export default function Home() {
  return (
    <>
      {/* <ThreeD /> */}
      <div className="bg-gradient-to-b from-simple-black-2 to-simple-black font-spotify">
        <div className="h-screen">
          <Intro />
        </div>
        <div className="h-screen">
          <TechStack />
        </div>
        <p className="relative bottom-[20%] w-screen text-center text-lg text-gray-400">
          Check out this{" "}
          <span className="text-red-500 hover:text-red-400">COOL BALL</span>{" "}
          down here that i made
        </p>
      </div>
    </>
  )
}
