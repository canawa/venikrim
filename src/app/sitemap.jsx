// app/sitemap.js
export default function sitemap() {
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
  ]
}