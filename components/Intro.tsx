import { EmailSVG, GithubSVG, LinkedinSVG, VoltFM } from './SVG'
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
            width={230}
            height={230}
            priority
          />
        </Link>
        <div className="flex flex-col items-center space-y-1 text-2xl text-white md:items-stretch">
          <div>
            Hey, This is <span className="text-link-col">Vinay Kulkarni</span>
          </div>
          <div className="space-x-6">
            <Link
              href={'/projects'}
              className="text-link-col hover:text-orange-400/80 hover:underline"
            >
              Projects
            </Link>
            <Link
              href={'/blog'}
              className="text-link-col hover:text-orange-400/80 hover:underline"
            >
              Blog
            </Link>
            <Link
              href={'/clicks'}
              className="text-link-col hover:text-orange-400/80 hover:underline"
            >
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
    </div>
  )
}
