import { AboutMe } from '../components/AboutMe'
import { Projects } from '../components/Projects/Projects'
import { Intro } from '../components/Intro'
import { TechStack } from '../components/TechStack'
import ThreeD from '../components/ThreeD'

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* <ThreeD /> */}
        <div className="bg-gradient-to-b from-simple-black-2 to-simple-black font-spotify">
          <div className="h-screen">
            <Intro />
          </div>
          <div class="flex animate-bounce flex-col items-center">
            <p class="text-sm text-white">Scroll down</p>
            {/* <p class="pt-1 text-2xl">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="7 13 12 18 17 13"></polyline>
                <polyline points="7 6 12 11 17 6"></polyline>
              </svg>
            </p> */}
          </div>
          <div className="flex h-screen flex-col items-center justify-center space-y-10 p-4 lg:flex-row lg:space-x-10">
            <TechStack />
            <AboutMe />
          </div>
          <Projects />
          <p className="relative bottom-[20%] text-center text-lg text-gray-400">
            Check out this{' '}
            <span className="text-gray-500 hover:text-gray-400">COOL BALL</span>{' '}
            down here that i made
          </p>
        </div>
      </div>
    </>
  )
}
