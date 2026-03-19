// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://venikrim.ru',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://venikrim.ru/order',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // добавляй сюда новые страницы по мере создания
  ]
}