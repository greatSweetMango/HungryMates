import type { MetadataRoute } from "next"

const siteUrl = process.env.SITE_URL

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: [
					"*"
				],
				allow: [
					"/"
				],
				disallow: [
					"/private/"
				]
			}
		],
		sitemap: `${siteUrl}/sitemap.xml`
	}
}