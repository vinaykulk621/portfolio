import ModeToggle from '@/components/mode-toggle'
import { getBreadCrumb } from '@/components/ui/breadcrumb'
import { getDateOnly } from '@/lib/formatDate'
import { allBlogs } from 'contentlayer/generated'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blogs that i have written over the years.',
  metadataBase: new URL('https://vinaykulka.vercel.app/blog'),
  keywords: 'Portfolio, Website, Blog, Computer Science',
  creator: 'Vinay',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vinaykulka.vercel.app/blog',
    images: ['https://vinaykulka.vercel.app/og/blog-og.jpg'],
    title: 'Vinay | blog',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    siteName: 'Vinay | blog',
  },
  twitter: {
    site: 'https://vinaykulka.vercel.app/blog',
    images: ['https://vinaykulka.vercel.app/og/blog-og.jpg'],
    card: 'summary_large_image',
    title: 'Vinay | blog',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    creator: '@kuylycljhyvvy',
  },
}

type props = {
  title: string
  publishedAt: string
  slug: string
}

function PostPreview(props: props) {
  return (
    <Link href={`/blog${props.slug}`} className="group">
      <h2 className="text-lg group-hover:underline dark:text-gray-300 md:text-xl">
        {props.title}
      </h2>
      <p className="text-xs dark:text-slate-400">
        {getDateOnly(props.publishedAt)}
      </p>
    </Link>
  )
}

export default function HomePage() {
  const postPreviews = allBlogs
    .sort((a, b) => Number(b.blog_count) - Number(a.blog_count))
    .map((post) => {
      return <PostPreview key={post?._id} {...post} />
    })

  const breadCrumb = getBreadCrumb('blog')
  return (
    <div className="max-w-screen flex h-fit min-h-screen items-center justify-center dark:bg-zinc-950">
      {breadCrumb}
      <div className="fixed bottom-5 left-6">
        <ModeToggle />
      </div>
      <div className="flex flex-col items-start space-y-4 md:pr-80">
        {postPreviews}
      </div>
    </div>
  )
}
