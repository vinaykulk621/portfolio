import { MongoSVG } from "./svgs/MongoSVG"
import { PythonSVG } from "./svgs/PythonSVG"
import { CSVG } from "./svgs/CSVG"
import { CSSSVG } from "./svgs/CSSSVG"
import { HTMLSVG } from "./svgs/HTMLSVG"
import { TailwindSVG } from "./svgs/TailwindSVG"
import { JavascriptSVG } from "./svgs/JavascriptSVG"
import { NodeSVG } from "./svgs/NodeSVG"
import { NextJsSVG } from "./svgs/Next-jsSVG"
export function TechStack({}) {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-6">
      <div className="p-4 text-center text-6xl text-white">My Tech Stack</div>
      <div className="flex flex-col items-center justify-center space-y-2 md:items-center">
        <div className="svg_container">
          <HTMLSVG />
          <CSSSVG />
          <JavascriptSVG />
          <NodeSVG />
        </div>
        <div className="svg_container">
          <MongoSVG />
          <NextJsSVG />
          <TailwindSVG />
        </div>
        <div className="svg_container">
          <CSVG />
          <PythonSVG />
        </div>
      </div>
      <div className="text-sm text-white">
        Hardly working on <code>PROJECTS</code> to write about them here
      </div>
    </div>
  )
}
