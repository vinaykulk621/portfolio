import { ImageResponse } from 'next/server'
import Image from 'next/image'

export const contentType = 'image/png'
export const size = {
  width: 900,
  height: 450,
}

export default function og({ params }: { params: { slug: string } }) {
  console.log(params.slug.replaceAll('-', ' '))
  return new ImageResponse(
    (
      <img src="https://vinaykulka.vercel.app/og.jpg">
        <div
          tw="w-full h-full text-2xl text-white flex items-center justify-center "
          // style={{
          //   fontSize: 48,
          //   width: '100%',
          //   height: '100%',
          //   color: 'white',
          //   display: 'flex',
          //   alignItems: 'center',
          //   justifyContent: 'center',
          // }}
        >
          {params.slug.replaceAll('-', ' ')}
        </div>
      </img>
    )
  )
}
