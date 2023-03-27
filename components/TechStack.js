import { MongoSVG } from "./svgs/MongoSVG"
import { PythonSVG } from "./svgs/PythonSVG"
import { CSVG } from "./svgs/CSVG"
import { CSSSVG } from "./svgs/CSSSVG"
import { HTMLSVG } from "./svgs/HTMLSVG"
import { TailwindSVG } from "./svgs/TailwindSVG"
import { JavascriptSVG } from "./svgs/JavascriptSVG"
import { NodeSVG } from "./svgs/NodeSVG"
import { NextJsSVG } from "./svgs/Next-jsSVG"
import { Threejs } from "./svgs/Threejs"

export function TechStack({}) {
  return (
    <div className="flex flex-shrink-0 flex-col items-center space-y-6 lg:items-start">
      <div className="text-center text-3xl text-white xs:text-5xl">
        My Tech Stack
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 lg:items-start">
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
          <Threejs />
        </div>
        <div className="svg_container">
          <CSVG />
          <PythonSVG />
        </div>
      </div>
    </div>
  )
}
