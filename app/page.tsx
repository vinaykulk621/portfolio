import { Intro } from '@/components/Intro'
import { Projects } from '@/components/Projects/Projects'
import ModeToggle from '@/components/mode-toggle'
import React from 'react'

export default function Home() {
  return (
    <>
      <div className="flex h-fit min-h-screen flex-col items-center bg-zinc-200	 dark:bg-zinc-950">
        <div className="flex flex-col justify-around space-y-16">
          <div className="fixed bottom-5 left-6">
            <ModeToggle />
          </div>
          <Intro />
          <Projects />
        </div>
      </div>
    </>
  )
}
