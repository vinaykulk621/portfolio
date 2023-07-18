export default function robots() {
  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://vinaykulka.vercel.app/sitemap.xml',
  }
}
