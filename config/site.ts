type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'Vinay | Portfolio',
  description:
    'Portfolio website built using Next.js 13, TailwindCSS and MDX on vercel.',
  url: 'https://vinaykulka.vercel.app',
  ogImage: 'https://vinaykulka.vercel.app/og.jpg',
  links: {
    twitter: 'https://twitter.com/kuylycljhyvvy',
    github: 'https://github.com/vinaykulk621',
  },
}
