import { ShortLink } from '../SVG'

export function Projects({}) {
  return (
    <div className="left-[50%] flex flex-col items-start space-y-5">
      <ShortLink
        href="https://noote.vercel.app"
        name="Noote"
        desc="An online note sharing application."
      />
      <ShortLink
        href="https://flukx.me"
        name="Flukx"
        desc="A link shortner which uses unique words to short links."
      />
    </div>
  )
}
