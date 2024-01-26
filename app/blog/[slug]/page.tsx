import '@/styles/mdx.css'
import { Mdx } from '@/components/mdx-components'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ModeToggle from '@/components/mode-toggle'

type Props = {
  params: { slug: string }
}

async function getPost(slug: string) {
  const post = allBlogs.find((blog) => blog.slugAsParams === slug)
  if (!post) {
    return notFound()
  }
  return post
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)

  return {
    title: `Blog | ${post.title}`,
    metadataBase: new URL(`https://vinaykulka.vercel.app/blog/${params.slug}`),
    keywords: post.keyWords,
    description: post.description,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      type: 'article',
      title: `Blog | ${params.slug.replaceAll('-', ' ')}`,
      authors: 'Vinay Kulkarni',
      description: post.description,
      publishedTime: post.publishedAt,
      url: `https://vinaykulka.vercel.app/blog/${params.slug}`,
      images: [
        `https://vinaykulka.vercel.app/blog/${params.slug}/opengraph-image`,
      ],
    },
    twitter: {
      site: `https://vinaykulka.vercel.app/blog/${params.slug}`,
      card: 'summary_large_image',
      title: `blog | ${params.slug} | Vinay`,
      description: `${post.description}`,
      creator: '@kuylycljhyvvy',
      images: [
        `https://vinaykulka.vercel.app/blog/${params.slug}/opengraph-image`,
      ],
    },
  }
}

function formatDate(date: string) {
  const targetDate = new Date(date)

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  return fullDate
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug)

  return (
    <div className="min-w-screen xs:text-sm md flex min-h-screen flex-col items-center overflow-x-hidden p-4 text-base dark:bg-zinc-950 dark:text-white">
      <div className="fixed bottom-5 left-6">
        <ModeToggle />
      </div>
      <div className="my-8 ml-0">
        <h1 className="xs:text-5xl mb-3 max-w-[650px] font-spotify text-5xl">
          {post?.title}
        </h1>
        <div className="flex flex-row items-center justify-center">
          <div className="rounded-md bg-zinc-300 px-2 py-1 text-sm tracking-tighter dark:bg-zinc-800">
            {formatDate(post?.publishedAt)}
          </div>
          <div className="mx-2 h-[0.2em] flex-1 bg-zinc-800 dark:bg-zinc-800" />
        </div>
      </div>
      <div className="w-screen px-10 text-justify font-spotify md:px-40 lg:px-80 xl:px-96">
        <Mdx code={post.body.code} />
      </div>
    </div>
  )
}
