import PostPreview from '@/components/blog/PostPreview'
import type { Metadata } from 'next'
import ModeToggle from '@/components/mode-toggle'
import { getBlogPosts } from '@/components/blog/blog'

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
    images: ['https://vinaykulka.vercel.app/blog-og.jpg'],
    title: 'Vinay | blog',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    siteName: 'Vinay | blog',
  },
  twitter: {
    site: 'https://vinaykulka.vercel.app/blog',
    images: ['https://vinaykulka.vercel.app/blog-og.jpg'],
    card: 'summary_large_image',
    title: 'Vinay | blog',
    description:
      'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
    creator: '@kuylycljhyvvy',
  },
}

export default function HomePage() {
  const allBlogs = getBlogPosts()
  const postPreviews = allBlogs
    .sort(
      (a, b) => Number(b.metadata.blog_count) - Number(a.metadata.blog_count)
    )
    .map((post) => {
      return (
        <PostPreview
          key={post.metadata.title}
          publishedAt={post.metadata.publishedAt}
          slug={`/${post.slug}`}
          title={post.metadata.title}
        />
      )
    })

  return (
    <div className="max-w-screen flex h-fit min-h-screen items-center justify-center dark:bg-zinc-950">
      <div className="fixed bottom-5 left-6">
        <ModeToggle />
      </div>
      <div className="flex flex-col items-start space-y-4 md:pr-80">
        {postPreviews}
      </div>
    </div>
  )
}
