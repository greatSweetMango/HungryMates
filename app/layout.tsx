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
	metadataBase: new URL("https://hungry-mates.vercel.app"),
	title: {
		template: "%s | HungryMates",
		default: "HungryMates",
		absolute: "HungryMates"
	},
	description: "HungryMates",
	applicationName: "HungryMates",
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
		"Supreme Next.js Template",
		"HungryMates"
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
    manifest: new URL("https://hungry-mates.vercel.app/manifest.json"),
	openGraph: {
		title: "HungryMates",
		description: "HungryMates",
		emails: [
			"admin@nizarsyahmi37.com",
			"support@nizarsyahmi37.com"
		],
		siteName: "HungryMates",
		locale: "en",
		alternateLocale: [

		],
		url: new URL("https://hungry-mates.vercel.app"),
		type: "website",
	},
    twitter: {
		site: "@nizarsyahmi37",
		siteId: "870860500707430400",
		creator: "@nizarsyahmi37",
		creatorId: "870860500707430400",
		title: {
			template: "%s | HungryMates",
			default: "HungryMates",
			absolute: "HungryMates"
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