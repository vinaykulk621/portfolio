import { ImageResponse } from 'next/server'

export const contentType = 'image/jpg'

export const size = {
  width: 1200,
  height: 630,
}

export default function og({ params }: { params: { slug: string } }) {
  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://vinaykulka.vercel.app/blog-og.jpg"
        alt={params.slug.replaceAll('-', ' ')}
      >
        <div tw="w-full h-full pt-28 px-24 mx-10 text-4xl text-white flex items-center justify-center ">
          {params.slug.replaceAll('-', ' ')}
        </div>
      </img>
    ),
    size
  )
}
