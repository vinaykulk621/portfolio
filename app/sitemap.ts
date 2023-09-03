import { allBlogs } from 'contentlayer/generated'

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://vinaykulka.vercel.app/blog${post.slug}`,
    lastModified: post.publishedAt,
  }))

  const routes = ['/', '/blog', '/clicks', '/projects'].map((route) => ({
    url: `https://vinaykulka.vercel.app${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
