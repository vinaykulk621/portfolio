import { VoltFM, TwitterSVG, LinkedinSVG, GithubSVG, EmailSVG } from './SVG'
import Image from 'next/image'
import Link from 'next/link'

export function Intro({}) {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 pt-20 text-5xl">
      <Link href={'/'}>
        <p className="group text-4xl text-white xs:text-5xl md:text-6xl">
          Vinay&apos;s{' '}
          <span className="text-gray-400 group-hover:text-white">web</span>
        </p>
      </Link>
      <div className="h-14 w-[55%] max-w-6xl border-t border-gray-400"></div>
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <Image
          className="overflow-hidden rounded-full"
          src="/me.svg"
          alt="Picture of the Creator"
          width={230}
          height={230}
          priority
        />
        <div className="flex flex-col items-center space-y-1 text-2xl text-white md:items-stretch">
          <div>
            Hey, This is <span className="text-link-col">Vinay Kulkarni</span>
          </div>
          <div className="space-x-6">
            <Link href={'/projects'} className="link-color hover:underline">
              Projects
            </Link>
            <Link href={'/blog'} className="link-color hover:underline">
              Blog
            </Link>
            <Link href={'/clicks'} className="link-color hover:underline">
              Clicks
            </Link>
          </div>
          <div className="mt-2 flex items-center space-x-6">
            <EmailSVG />
            <LinkedinSVG />
            <GithubSVG url={'vinaykulk621'} />
            <TwitterSVG />
            <VoltFM />
          </div>
        </div>
      </div>
    </div>
  )
}
