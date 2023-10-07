import { Intro } from '@/components/Intro'
import { Projects } from '@/components/Projects/Projects'
import { DownArrow } from '@/components/SVG'
import { TechStack } from '@/components/TechStack'
import React from 'react'

export default function Home() {
  return (
    <>
      <div>
        <div className="bg-zinc-950 font-spotify">
          <div className="flex h-screen flex-col justify-between">
            <Intro />
            <DownArrow />
          </div>
          <div className="flex h-fit flex-col items-center justify-around space-y-10 p-4 lg:flex-row">
            <TechStack />
            <Projects />
          </div>
        </div>
      </div>
    </>
  )
}
