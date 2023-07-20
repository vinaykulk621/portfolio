import GetPostMetadata from '@/components/blog/GetPostMetadata'

export default async function sitemap() {
  const postMetadata = GetPostMetadata()
  const blogs = postMetadata.map((post) => ({
    url: `https://vinaykulka.vercel.app/blog/${post.slug}`,
    lastModified: post.date,
  }))

  const routes = ['', '/blog', '/clicks', '/projects'].map((route) => ({
    url: `https://vinaykulka.vercel.app${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
