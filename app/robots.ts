import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `https://ryanmeetup.com/sitemap.xml`,
    host: 'https://ryanmeetup.com',
  }
}