import { ShortLink } from '../SVG'

export function Projects({}) {
  return (
    <div className="flex flex-col items-start space-y-5 px-16 pb-12">
      <span className="text-white">Projects</span>
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
  )
}
