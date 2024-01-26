import { getBlogPosts } from '@/components/blog/blog'

export default async function sitemap() {
  const allBlogs = getBlogPosts()
  const blogs = allBlogs.map((post) => ({
    url: `https://vinaykulka.vercel.app/blog${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ['/', '/blog', '/clicks', '/projects'].map((route) => ({
    url: `https://vinaykulka.vercel.app${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
