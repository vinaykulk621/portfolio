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
  MySQL,
} from './SVG'


export function TechStack({}) {
  return (
    <div className="flex flex-shrink-0 flex-col items-center space-y-6 lg:items-start">
      <div className="xs:text-5xl text-center text-3xl text-white">
        My Tech Stack
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 lg:items-start">
        <div className="xs:space-x-5 mb-0 flex flex-row flex-wrap items-center justify-center space-x-2">
          <CSVG />
          <PythonSVG />
          <Bash />
        </div>
        <div className="xs:space-x-5 mb-0 flex flex-row flex-wrap items-center justify-center space-x-2">
          <HTMLSVG />
          <CSSSVG />
          <JavascriptSVG />
        </div>
        <div className="xs:space-x-5 mb-0 flex flex-row flex-wrap items-center justify-center space-x-2">
          <NodeSVG />
          <MongoSVG />
          <MySQL />
        </div>
        <div className="xs:space-x-5 mb-0 flex flex-row flex-wrap items-center justify-center space-x-2">
          <NextJsSVG />
          <TailwindSVG />
          <Threejs />
        </div>
      </div>
    </div>
  )
}
