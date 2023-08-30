import { allBlogs } from 'contentlayer/generated'
import PostPreview from '@/components/blog/PostPreview'
import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Vinay | Blog',
  description: 'Blog Bro',
  metadataBase: new URL('https://vinaykulka.vercel.app'),
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
    'Blogs',
    'Tech Blogs',
    'Tech Talks',
  ],
  creator: 'Vinay',
  openGraph: {
    images: ['https://vinaykulka.vercel.app/og.jpg'],
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
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
