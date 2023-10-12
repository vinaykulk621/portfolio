import { Intro } from '@/components/Intro'
import { Projects } from '@/components/Projects/Projects'
import React from 'react'

export default function Home() {
  return (
    <>
      <div className="flex h-fit min-h-screen flex-col items-center bg-zinc-950 font-spotify">
        <div className="flex flex-col justify-around space-y-10">
          <Intro />
          <Projects />
        </div>
      </div>
    </>
  )
}
