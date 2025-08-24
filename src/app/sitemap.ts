import type { MetadataRoute } from "next"
import { i18n } from "@/config/i18n-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://green-nextjs-boilerplate.vercel.app"

  // Generate URLs for all locales
  const localeUrls = i18n.locales.flatMap(locale => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ])

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...localeUrls,
  ]
}
