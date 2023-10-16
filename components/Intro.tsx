import { EmailSVG, GithubSVG, LinkedinSVG, Pointer, VoltFM } from './SVG'
import { Libre_Barcode_128_Text, Roboto } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const libre_barcode = Libre_Barcode_128_Text({
  subsets: ['latin'],
  weight: '400',
})

const Robo = Roboto({
  weight: '400',
  subsets: ['greek', 'vietnamese'],
})

export function Intro({}) {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 pt-20 md:items-start md:justify-start">
      <p
        className={`px-14 text-4xl text-gray-300 duration-200  hover:text-gray-400 ${libre_barcode.className}`}
      >
        Vinay&apos;s web
      </p>
      <div className="flex flex-col items-center gap-10 px-10 md:flex-row">
        <Link href={'https://vinaykulka.vercel.app/'}>
          <Image
            className="overflow-hidden rounded-full duration-75 md:grayscale md:hover:grayscale-0"
            src="/me.svg"
            alt="Picture of the Creator"
            width={150}
            height={150}
            priority
          />
        </Link>
        <div className="flex flex-col items-center space-y-5 text-xl text-white md:items-stretch">
          <div className="flex flex-row items-center space-x-3">
            <Link
              href={'/projects'}
              className="flex flex-row items-center justify-center text-sm text-zinc-400/80 hover:text-zinc-400 sm:text-base md:text-lg"
            >
              <Pointer />
              Projects
            </Link>
            <Link
              href={'/blog'}
              className="flex flex-row items-center justify-center text-sm text-zinc-400/80 hover:text-zinc-400 sm:text-base md:text-lg"
            >
              <Pointer />
              Blog
            </Link>
            <Link
              href={'/clicks'}
              className="flex flex-row items-center justify-center text-sm text-zinc-400/80 hover:text-zinc-400 sm:text-base md:text-lg"
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
      <div className={`mx-10 flex items-center text-justify ${Robo.className}`}>
        <p className="max-w-xl px-16 text-sm text-[#a0a0a0] md:px-6">
          Hi, i&apos;m Vinay Kulkarni, I own a laptop and I&apos;m enthusiastic
          about{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold text-transparent">
            technology
          </span>{' '}
          and open source projects. I like to unwind during my free time by
          watching <span className="font-bold text-green-400">ads</span> and{' '}
          <span className="font-bold text-purple-400">anime</span>.
        </p>
      </div>
    </div>
  )
}
