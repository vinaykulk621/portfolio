import {
  CSSSVG,
  HTMLSVG,
  CSVG,
  JavascriptSVG,
  MongoSVG,
  NextJsSVG,
  NodeSVG,
  PythonSVG,
  TailwindSVG,
  Threejs,
  Bash,
} from './SVG'
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
          <Bash />
        </div>
      </div>
    </div>
  )
}
