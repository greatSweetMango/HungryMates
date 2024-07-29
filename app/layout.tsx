// import { headers } from "next/headers"
import type { Metadata } from "next"
import { ReactNode } from "react"
import { Toaster as Sonner } from "../components/ui/sonner"
import { Toaster } from "../components/ui/toaster"

// const headersList = headers()
// const referer = headersList.get("referer")

import "./globals.css"

export const revalidate = 60

export const metadata: Metadata = {
	metadataBase: new URL("https://supremenextjstemplate.nizarsyahmi37.com"),
	title: {
		template: "%s | Supreme NextJS Template by NizarSyahmi37",
		default: "Supreme NextJS Template by NizarSyahmi37",
		absolute: "Supreme NextJS Template by NizarSyahmi37"
	},
	description: "Supreme NextJS Template for quick development by NizarSyahmi37",
	applicationName: "Supreme NextJS Template by NizarSyahmi37",
	authors: [
		{
			url: new URL("https://nizarsyahmi37.com"),
			name: "Nizar Syahmi bin Nazlan"
		}
	],
	keywords: [
		"NizarSyahmi37",
		"Template",
		"Next.js Template",
		"Supreme Template",
		"Supreme Next.js Template"
	],
	// referrer?: null | ReferrerEnum;
	// themeColor: [
	// 	{
	// 		media: "(prefers-color-scheme: dark)",
	// 		color: "#000000"
	// 	},
	// 	{
	// 		media: "(prefers-color-scheme: light)",
	// 		color: "#ffffff"
	// 	}
	// ],
	// colorScheme?: null | ColorSchemeEnum;
	// viewport?: null | string | ViewportLayout;
	creator: "NizarSyahmi37",
	publisher: "NizarSyahmi37",
	// robots?: null | string | Robots;
	alternates: {
		canonical: "/",
		languages: {
			"en": "/",
			// "en-US": "/en-US",
			// "de-DE": "/de-DE",
		},
	},
    // icons?: null | IconURL | Array<Icon> | Icons;
    manifest: new URL("https://supremenextjstemplate.nizarsyahmi37.com/manifest.json"),
	openGraph: {
		title: "Supreme NextJS Template by NizarSyahmi37",
		description: "Supreme NextJS Template for quick development by NizarSyahmi37",
		emails: [
			"admin@nizarsyahmi37.com",
			"support@nizarsyahmi37.com"
		],
		siteName: "Supreme NextJS Template by NizarSyahmi37",
		locale: "en",
		alternateLocale: [

		],
		url: new URL("https://supremenextjstemplate.nizarsyahmi37.com"),
		type: "website",
	},
    twitter: {
		site: "@nizarsyahmi37",
		siteId: "870860500707430400",
		creator: "@nizarsyahmi37",
		creatorId: "870860500707430400",
		title: {
			template: "%s | Supreme NextJS Template by NizarSyahmi37",
			default: "Supreme NextJS Template by NizarSyahmi37",
			absolute: "Supreme NextJS Template by NizarSyahmi37"
		}
	},
    // verification?: Verification;
    // appleWebApp?: null | boolean | AppleWebApp;
    // formatDetection?: null | FormatDetection;
    // itunes?: null | ItunesApp;
    // abstract?: null | string;
    // appLinks?: null | AppLinks;
    // archives?: null | string | Array<string>;
    // assets?: null | string | Array<string>;
    // bookmarks?: null | string | Array<string>;
    // category?: null | string;
    // classification?: null | string;
    // other?: {
    //     [name: string]: string | number | Array<string | number>;
    // } & DeprecatedMetadataFields;
    // apple-touch-fullscreen?: never;
    // apple-touch-icon-precomposed?: never;
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<main>
					{children}
				</main>
				<Sonner />
				<Toaster />
			</body>
		</html>
	)
}