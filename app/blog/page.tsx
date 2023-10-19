import { allBlogs } from 'contentlayer/generated'
import PostPreview from '@/components/blog/PostPreview'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blogs that i have written over the years.',
  metadataBase: new URL('https://vinaykulka.vercel.app/blog'),
  keywords: 'Portfolio, Website, Blog, Computer Science',
  creator: 'Vinay',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vinaykulka.vercel.app/',
    title: 'Vinay | blog',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    siteName: 'Vinay | blog',
  },
  twitter: {
    site: 'https://vinaykulka.vercel.app/',

    card: 'summary_large_image',
    title: 'Vinay | blog',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    creator: '@kuylycljhyvvy',
  },
}

export default function HomePage() {
  const postPreviews = allBlogs
    .sort((a, b) => Number(b.blog_count) - Number(a.blog_count))
    .map((post) => {
      return <PostPreview key={post?._id} {...post} />
    })

  return (
    <div className="max-w-screen flex h-fit min-h-screen items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-start space-y-4 md:pr-80">
        {postPreviews}
      </div>
    </div>
  )
}
