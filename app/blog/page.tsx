import { allBlogs } from 'contentlayer/generated'
import PostPreview from '@/components/blog/PostPreview'

export const metadata = {
  title: 'Vinay | Blog',
  description: 'Blog Bro',
}

export default function HomePage() {
  const postPreviews = allBlogs
    .sort((a, b) => Number(b.blog_count) - Number(a.blog_count))
    .map((post) => {
      return <PostPreview key={post?._id} {...post} />
    })

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-start space-y-4 pr-80">
        {postPreviews}
      </div>
    </div>
  )
}
