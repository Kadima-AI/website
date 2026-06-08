import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kadima-ai.com'
  const now = new Date()

  const services = [
    'landing-website',
    'ecommerce-website',
    'whatsapp-bot',
    'ai-receptionist',
    'social-media-ai',
    'google-reviews-bot',
    'appointments-clinics',
    'appointments-coaches',
    'appointments-beauty',
    'document-search',
  ]

  return [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...services.map((slug) => ({
      url: `${base}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
