import fs from 'fs'
import matter from 'gray-matter'

export default function GetPostMetadata() {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))

  const posts = markdownPosts
    .map((fileName) => {
      const matterResult = matter(fs.readFileSync(`posts/${fileName}`, 'utf8'))

      return {
        title: matterResult.data.title,
        blog_count: matterResult.data.blog_count,
        date: matterResult.data.date,
        publishedAt: matterResult.data.publishedAt,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace('.md', ''),
      }
    })
    .sort((a, b) => {
      return b.blog_count - a.blog_count
    })

  return posts
}
