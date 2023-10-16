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
      <Link
        href={'https://vinaykulka.vercel.app/'}
        className={`m-0 ${libre_barcode.className} flex justify-start px-14 md:justify-center`}
      >
        <p className="text-4xl text-gray-500 duration-200 hover:text-gray-400">
          Vinay&apos;s web
        </p>
      </Link>
      <div className="flex flex-col items-center gap-10 px-10 md:flex-row">
        <Link href={'https://vinaykulka.vercel.app/'}>
          <Image
            className="overflow-hidden rounded-full duration-100 md:grayscale md:hover:grayscale-0"
            src="/me.svg"
            alt="Picture of the Creator"
            width={150}
            height={150}
            priority
          />
        </Link>
        <div className="flex flex-col items-center space-y-5 text-xl text-white md:items-stretch">
          <div className="flex flex-row items-center space-x-2">
            <Link
              href={'/projects'}
              className="flex flex-row items-center justify-center text-zinc-400/80 hover:text-zinc-400"
            >
              <Pointer />
              Projects
            </Link>
            <Link
              href={'/blog'}
              className="flex flex-row items-center justify-center text-zinc-400/80 hover:text-zinc-400"
            >
              <Pointer />
              Blog
            </Link>
            <Link
              href={'/clicks'}
              className="flex flex-row items-center justify-center text-zinc-400/80 hover:text-zinc-400"
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
        className={`xs:space-y-6 mx-10 flex flex-col items-center space-y-2 text-justify lg:items-start ${Robo.className}`}
      >
        <p className="max-w-xl px-6 text-sm text-[#a0a0a0]">
          Hi, i&apos;m Vinay Kulkarni and I&apos;m enthusiastic about{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold text-transparent">
            technology
          </span>
          , especially open source projects. I enjoy tackling problems 🐼💡 and
          during my free time, I like to unwind by watching{' '}
          <span className="font-bold text-green-400">ads</span> and{' '}
          <span className="font-bold text-purple-400">anime</span>.
        </p>
      </div>
    </div>
  )
}
