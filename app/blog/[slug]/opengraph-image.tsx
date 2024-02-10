import { allBlogs } from '@/.contentlayer/generated'
import { ImageResponse } from 'next/server'
import { notFound } from 'next/navigation'

export const contentType = 'image/jpg'

export const size = {
  width: 1200,
  height: 630,
}

async function getPost(slug: string) {
  const post = allBlogs.find((blog) => blog.slugAsParams === slug)
  if (!post) {
    return notFound()
  }
  return post
}

export default async function og({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://vinaykulka.vercel.app/og/blog-og.jpg"
        alt={params.slug.replaceAll('-', ' ')}
      >
        <div tw="w-full h-full pt-28 px-24 mx-10 text-4xl text-white flex items-center justify-center ">
          {post.title}
        </div>
      </img>
    ),
    size
  )
}
