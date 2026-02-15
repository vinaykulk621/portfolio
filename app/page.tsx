import ModeToggle from '@/components/mode-toggle'
import {
  EmailSVG,
  GithubSVG,
  LinkedinSVG,
  Pointer,
  ShortLink,
  VoltFM,
} from '@/components/SVG'
import { Gochi_Hand, Roboto } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const source_code_pro = Gochi_Hand({
  subsets: ['latin'],
  weight: '400',
})

const Robo = Roboto({
  weight: '400',
  subsets: ['greek', 'vietnamese'],
})

export default function Home() {
  // redirect to new site
  redirect('https://vinaykulk621.github.io')

  return (
    <div className="flex h-fit min-h-screen flex-col items-center bg-zinc-200	 dark:bg-zinc-950">
      <div className="flex flex-col justify-around space-y-16">
        <div className="fixed bottom-5 left-6" />
        <div className="invisible absolute -top-4 right-10 md:visible">
          <ModeToggle />
        </div>
        <div className="pt-18 flex flex-col items-center justify-center space-y-3 md:items-start md:justify-start">
          <p
            className={`tex-white px-14 text-xl duration-200 dark:text-gray-300 ${source_code_pro.className}`}
          >
            Vinay Kulkarni
          </p>
          <div className="flex flex-col items-center gap-10 px-10 md:flex-row">
            <Link href={'https://vinaykulka.vercel.app/'}>
              <Image
                className="overflow-hidden rounded-full bg-zinc-950 grayscale-0 duration-75 dark:md:grayscale dark:md:hover:grayscale-0"
                src="/me.svg"
                alt="Picture of the Creator"
                width={150}
                height={150}
                priority
              />
            </Link>
            <div className="flex flex-col items-center space-y-5 text-xl dark:text-white md:items-stretch">
              <div className="flex flex-row items-center justify-around space-x-3">
                <Link
                  href={'/projects'}
                  className="flex flex-row items-center justify-center text-sm dark:text-zinc-400/80 dark:hover:text-zinc-400 sm:text-base md:text-lg"
                >
                  <Pointer />
                  projects
                </Link>
                <Link
                  href={'/blog'}
                  className="flex flex-row items-center justify-center text-sm dark:text-zinc-400/80 dark:hover:text-zinc-400 sm:text-base md:text-lg"
                >
                  <Pointer />
                  blog
                </Link>
                <Link
                  href={'/clicks'}
                  className="flex flex-row items-center justify-center text-sm dark:text-zinc-400/80 dark:hover:text-zinc-400 sm:text-base md:text-lg"
                >
                  <Pointer />
                  clicks
                </Link>
              </div>
              <div className="mt-2 flex items-center justify-around space-x-6">
                <EmailSVG />
                <LinkedinSVG />
                <GithubSVG url="vinaykulk621" />
                <VoltFM />
              </div>
            </div>
          </div>
          <div
            className={`mx-10 flex items-center text-justify ${Robo.className}`}
          >
            <p className="max-w-xl px-14 text-sm dark:text-[#a0a0a0] md:px-6">
              Hi, i&apos;m Vinay Kulkarni. currently working as Associate
              Engineer at{' '}
              <Link
                href={'https://qualcomm.com'}
                className="border-b-2 border-dotted border-b-zinc-600 text-zinc-500"
              >
                Qualcomm
              </Link>{' '}
              .
            </p>
          </div>
        </div>
        <div className="space-y-10">
          <div className="flex flex-col items-start space-y-5 px-10 md:px-16">
            <span className="font-bold dark:text-white">Projects</span>
            <ShortLink
              key={'Noote'}
              href="https://noote.vercel.app"
              name="Noote"
              desc="An online note sharing application"
            />
            <ShortLink
              key={'Flukx'}
              href="https://flukx.me"
              name="Flukx"
              desc="A link shortner which uses unique words to short links"
            />
            <ShortLink
              key={'Infinite Scroll'}
              href="https://words-livid.vercel.app"
              name="Infinite Scroll"
              desc="A simple implementation of Infinite scroll"
            />
            <ShortLink
              key={'Typewriter'}
              href="https://vinaykulk621.github.io/typewriter/"
              name="Typewriter"
              desc="A JS application designed for typing practice"
            />
          </div>
          <div className="flex flex-col items-start space-y-5 px-10 pb-20 md:px-16">
            <span className="font-bold dark:text-white">Blog</span>
            <ShortLink
              key={'2023'}
              href="/blog/2023"
              name="2023"
              desc="An overview of my 2023"
            />
            <ShortLink
              key={'computer-networks'}
              href="/blog/computers-and-their-networks"
              name="computers and their networks"
              desc="A bunch of stuff about computer networks"
            />
            <ShortLink
              key={'startup ideas'}
              href="/blog/startups"
              name="startup ideas"
              desc="Few business ideas of mine"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
