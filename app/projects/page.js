import { MongoSVG } from "../../components/svgs/MongoSVG"
import { PythonSVG } from "../../components/svgs/PythonSVG"
import { CSVG } from "../../components/svgs/CSVG"
import { CSSSVG } from "../../components/svgs/CSSSVG"
import { HTMLSVG } from "../../components/svgs/HTMLSVG"
import { TailwindSVG } from "../../components/svgs/TailwindSVG"
import { JavascriptSVG } from "../../components/svgs/JavascriptSVG"
import { NodeSVG } from "../../components/svgs/NodeSVG"
import { NextJsSVG } from "../../components/svgs/Next-jsSVG"

export default function Home(params) {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center space-y-6 bg-black font-spotify">
        <div className="text-6xl text-white">My Tech Stack</div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="m-5 flex flex-row flex-wrap items-center justify-center space-x-5">
            <HTMLSVG />
            <CSSSVG />
            <JavascriptSVG />
            <NodeSVG />
          </div>
          <div className="m-5 flex flex-row flex-wrap items-center justify-center space-x-5">
            <MongoSVG />
            <NextJsSVG />
            <TailwindSVG />
          </div>
          <div className="m-5 flex flex-row flex-wrap items-center justify-center space-x-5">
            <CSVG />
            <PythonSVG />
          </div>
        </div>
        <div className="text-sm text-white">
          Hardly working on <code>PROJECTS</code>
        </div>
      </div>
    </>
  )
}
