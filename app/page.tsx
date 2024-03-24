import {
  EmailSVG,
  GithubSVG,
  LinkedinSVG,
  Pointer,
  ShortLink,
  VoltFM,
} from '@/components/SVG'
import ModeToggle from '@/components/mode-toggle'
import { getRootBreadCrumb } from '@/components/ui/breadcrumb'
import { Libre_Barcode_128_Text, Roboto } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const libre_barcode = Libre_Barcode_128_Text({
  subsets: ['latin'],
  weight: '400',
})

const Robo = Roboto({
  weight: '400',
  subsets: ['greek', 'vietnamese'],
})

export default function Home() {
  const breadCrumb = getRootBreadCrumb()
  return (
    <div className="flex h-fit min-h-screen flex-col items-center bg-zinc-200	 dark:bg-zinc-950">
      {breadCrumb}
      <div className="flex flex-col justify-around space-y-16">
        <div className="fixed bottom-5 left-6">
          <ModeToggle />
        </div>
        <div className="pt-18 flex flex-col items-center justify-center space-y-3 md:items-start md:justify-start">
          <p
            className={`tex-white px-14 text-4xl duration-200 dark:text-gray-300  dark:hover:text-gray-400 ${libre_barcode.className}`}
          >
            Vinay&apos;s web
          </p>
          <div className="flex flex-col items-center gap-10 px-10 md:flex-row">
            <Link href={'https://vinaykulka.vercel.app/'}>
              <Image
                className="overflow-hidden rounded-full bg-zinc-950 duration-75 md:grayscale md:hover:grayscale-0"
                src="/me.svg"
                alt="Picture of the Creator"
                width={150}
                height={150}
                priority
              />
            </Link>
            <div className="flex flex-col items-center space-y-5 text-xl dark:text-white md:items-stretch">
              <div className="flex flex-row items-center space-x-3">
                <Link
                  href={'/projects'}
                  className="flex flex-row items-center justify-center text-sm dark:text-zinc-400/80 dark:hover:text-zinc-400 sm:text-base md:text-lg"
                >
                  <Pointer />
                  Projects
                </Link>
                <Link
                  href={'/blog'}
                  className="flex flex-row items-center justify-center text-sm dark:text-zinc-400/80 dark:hover:text-zinc-400 sm:text-base md:text-lg"
                >
                  <Pointer />
                  Blog
                </Link>
                <Link
                  href={'/clicks'}
                  className="flex flex-row items-center justify-center text-sm dark:text-zinc-400/80 dark:hover:text-zinc-400 sm:text-base md:text-lg"
                >
                  <Pointer />
                  Clicks
                </Link>
              </div>
              <div className="mt-2 flex items-center space-x-6">
                <EmailSVG />
                <LinkedinSVG />
                <GithubSVG url={'vinaykulk621'} />
                <VoltFM />
              </div>
            </div>
          </div>
          <div
            className={`mx-10 flex items-center text-justify ${Robo.className}`}
          >
            <p className="max-w-xl px-16 text-sm dark:text-[#a0a0a0] md:px-6">
              Hi, i&apos;m Vinay, I own a laptop and I&apos;m enthusiastic about{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold text-transparent dark:bg-gradient-to-r dark:from-purple-400 dark:to-pink-600 dark:bg-clip-text">
                technology
              </span>
              . I like to unwind during my free time by watching{' '}
              <span className="font-bold text-green-400">ads</span> and{' '}
              <span className="font-bold text-purple-400">anime</span>.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-5 px-28 pb-12 md:px-16">
          <span className="dark:text-white">Projects</span>
          <ShortLink
            key={'Noote'}
            href="https://noote.vercel.app"
            name="Noote"
            desc="An online note sharing application."
          />
          <ShortLink
            href="https://flukx.me"
            key={'Flukx'}
            name="Flukx"
            desc="A link shortner which uses unique words to short links."
          />
          <ShortLink
            href="https://words-livid.vercel.app"
            key={'Infinite Scroll'}
            name="Infinite Scroll"
            desc="A simple implementation of Infinite scroll."
          />
          <ShortLink
            href="https://vinaykulk621.github.io/typewriter/"
            key={'Typewriter'}
            name="Typewriter"
            desc="A JS application designed for typing practice on a pool of 3000 words."
          />
        </div>
      </div>
    </div>
  )
}
