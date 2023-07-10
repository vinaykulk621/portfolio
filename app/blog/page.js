import GetPostMetadata from '../../components/blog/GetPostMetadata'
import PostPreview from '../../components/blog/PostPreview'

export default function HomePage() {
  const postMetadata = GetPostMetadata()
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#111010]">
      <div className="flex flex-col items-start space-y-2">{postPreviews}</div>
    </div>
  )
}
