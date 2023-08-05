import GetPostMetadata from '@/components/blog/GetPostMetadata'
import PostPreview from '@/components/blog/PostPreview'

export const metadata = {
  title: 'Vinay | Blog',
  description: 'Blog Bro',
}

export default function HomePage() {
  const postMetadata = GetPostMetadata()
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-start space-y-4 pr-80">
        {postPreviews}
      </div>
    </div>
  )
}
