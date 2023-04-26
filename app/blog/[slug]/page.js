import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import GetPostMetadata from '../../../components/blog/GetPostMetadata'

export const metadata = {
  title: 'Blog',
  description: 'Blog Post',
}

function getPostContent(slug) {
  const folder = 'posts/'
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = GetPostMetadata()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function PostPage(props) {
  const slug = props.params.slug
  const post = getPostContent(slug)
  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center bg-[#111010] p-4 text-base text-white xs:text-sm">
      <div className="my-8 ml-0">
        <h1 className="mb-3 max-w-[650px] font-spotify text-lg xs:text-5xl">
          {post.data.title}
        </h1>
        <div className="flex flex-row items-center justify-center">
          <div className="rounded-md bg-neutral-100 px-2 py-1 text-sm tracking-tighter dark:bg-neutral-800">
            {post.data.date}
          </div>
          <div className="mx-2 h-[0.2em] flex-1 bg-neutral-100 dark:bg-neutral-800" />
        </div>
      </div>
      <article className="prose w-screen p-5 text-zinc-100 xs:prose-sm md:prose-lg lg:prose-xl prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-h4:text-white prose-p:text-justify prose-p:font-spotify prose-blockquote:text-white prose-strong:text-white prose-code:text-link-col/80">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}
