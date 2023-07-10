export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `${params.slug.slice(2).replace('-', ' ')}`,
    description: 'Blog Post',
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
