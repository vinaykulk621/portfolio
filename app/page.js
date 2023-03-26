import { Sample } from "../components/Projects/sample"
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
        <div className="bg-simple-blue">
          <Sample
            DemoUrl={"www.vinay621.live"}
            github_repo_name="vinaykulk621/Cuboido"
            projectDescription={
              "Built Using Three.js in next js And tailwindscss"
            }
            projectName="CuBoido"
          />
        </div>
        <p className="relative bottom-[20%] h-screen text-center text-lg text-gray-400">
          Check out this{" "}
          <span className="text-gray-500 hover:text-gray-400">COOL BALL</span>{" "}
          down here that i made
        </p>
      </div>
    </>
  )
}
