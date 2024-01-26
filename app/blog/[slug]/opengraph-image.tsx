import { ImageResponse } from 'next/server'
import { notFound } from 'next/navigation'
import { getBlogPosts } from '@/components/blog/blog'

export const contentType = 'image/jpg'

export const size = {
  width: 1200,
  height: 630,
}

async function getPost(slug: string) {
  const allBlogs = getBlogPosts()
  const post = allBlogs.find((blog) => blog.slug === slug)
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
        src="https://vinaykulka.vercel.app/blog-og.jpg"
        alt={params.slug.replaceAll('-', ' ')}
      >
        <div tw="w-full h-full pt-28 px-24 mx-10 text-4xl text-white flex items-center justify-center ">
          {post.metadata.title}
        </div>
      </img>
    ),
    size
  )
}
