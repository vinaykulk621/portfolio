import { Intro } from '@/components/Intro'
import { Projects } from '@/components/Projects/Projects'

export default function Home() {
  return (
    <>
      <div className="flex h-fit min-h-screen flex-col items-center bg-zinc-950">
        <div className="flex flex-col justify-around space-y-16">
          <Intro />
          <Projects />
        </div>
      </div>
    </>
  )
}
