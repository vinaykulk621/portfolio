import { Mdx } from '@/components/mdx-components'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

async function getPost(slug: string) {
  const post = allBlogs.find((blog) => blog.slugAsParams === slug)
  if (!post) {
    return notFound()
  }
  console.log(post)

  return post
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  return {
    title: `${params.slug.replace('-', ' ')}`,
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
    <div className="min-w-screen xs:text-sm flex min-h-screen flex-col items-center bg-[#111010] p-4 text-base text-white">
      <div className="my-8 ml-0">
        <h1 className="xs:text-5xl mb-3 max-w-[650px] font-spotify text-5xl">
          {post?.title}
        </h1>
        <div className="flex flex-row items-center justify-center">
          <div className="rounded-md bg-neutral-800 px-2 py-1 text-sm tracking-tighter">
            {post?.date}
          </div>
          <div className="mx-2 h-[0.2em] flex-1 bg-neutral-800" />
        </div>
      </div>
      <article className="xs:prose-sm prose w-screen p-5 text-zinc-100 md:prose-lg lg:prose-xl prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-h4:text-white prose-p:text-justify prose-p:font-spotify prose-blockquote:text-gray-400 prose-strong:text-white prose-code:text-cyan-400">
        <Mdx code={post.body.code}></Mdx>
      </article>
    </div>
  )
}
