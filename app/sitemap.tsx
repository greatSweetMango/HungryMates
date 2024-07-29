import { MetadataRoute } from "next"

const siteUrl = process.env.SITE_URL

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${siteUrl}`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
			alternates: {
				languages: {
					// en: `${siteUrl}/en`
				}
			}
		}
	]
}