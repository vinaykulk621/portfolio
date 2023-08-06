import '@/styles/mdx.css'
import { Mdx } from '@/components/mdx-components'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

async function getPost(slug: string) {
  const post = allBlogs.find((blog) => blog.slugAsParams === slug)
  if (!post) {
    return notFound()
  }
  return post
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  return {
    title: `Blog | ${params.slug.replace('-', ' ')}`,
    description: `Blog: ${params.slug.replace(' ', '-')}`,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug)

  return (
    <div className="min-w-screen xs:text-sm flex min-h-screen flex-col items-center bg-zinc-950 p-4 text-base text-white">
      <div className="my-8 ml-0">
        <h1 className="xs:text-5xl mb-3 max-w-[650px] font-spotify text-5xl">
          {post?.title}
        </h1>
        <div className="flex flex-row items-center justify-center">
          <div className="rounded-md bg-zinc-800 px-2 py-1 text-sm tracking-tighter">
            {post?.publishedAt}
          </div>
          <div className="mx-2 h-[0.2em] flex-1 bg-zinc-800" />
        </div>
      </div>
      <div className="w-screen px-10 text-justify font-spotify md:px-40 lg:px-80 xl:px-96">
        <Mdx code={post.body.code} />
      </div>
    </div>
  )
}
