import React from 'react'
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
  TypeScriptSVG,
} from './SVG'

export function TechStack() {
  return (
    <div className="flex flex-shrink-0 flex-col items-center space-y-6 lg:items-start">
      <div className="xs:text-5xl text-center text-4xl text-white ">
        My Tech Stack
      </div>
      <div className="xs:space-x-5 flex max-w-lg flex-row flex-wrap items-center space-x-4">
        <CSVG />
        <PythonSVG />
        <Bash />
        <HTMLSVG />
        <CSSSVG />
        <JavascriptSVG />
        <TypeScriptSVG />
        <NodeSVG />
        <MongoSVG />
        <MySQL />
        <NextJsSVG />
        <TailwindSVG />
        <Threejs />
      </div>
    </div>
  )
}
