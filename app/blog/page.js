import GetPostMetadata from '../../components/blog/GetPostMetadata'
import PostPreview from '../../components/blog/PostPreview'

export const metadata = {
  title: 'Blog',
  description: 'Portofolio website',
}

export default function HomePage() {
  const postMetadata = GetPostMetadata()
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  return (
    <>
      <div className="h-screen w-screen bg-[#111010] flex items-center justify-center flex-col">{postPreviews}</div>
    </>
  )
}
