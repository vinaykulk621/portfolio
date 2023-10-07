import { EmailSVG, GithubSVG, LinkedinSVG, Pointer, VoltFM } from './SVG'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function Intro({}) {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 pt-20 text-5xl">
      <Link href={'https://vinaykulka.vercel.app/'}>
        <p className="xs:text-5xl group text-4xl font-bold text-transparent text-white md:text-6xl">
          Vinay&apos;s{' '}
          <span className="text-gray-400 group-hover:text-white">web</span>
        </p>
      </Link>
      <div className="h-14 w-[55%] max-w-6xl border-t border-gray-400"></div>
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <Link href={'https://vinaykulka.vercel.app/'}>
          <Image
            className="overflow-hidden rounded-full duration-100 md:grayscale md:hover:grayscale-0"
            src="/me.svg"
            alt="Picture of the Creator"
            width={210}
            height={210}
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
      <div className="xs:space-y-6 mx-10 flex flex-col items-center space-y-2 text-justify lg:items-start">
        <p className="max-w-xl px-10 text-base text-[#a0a0a0]">
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
