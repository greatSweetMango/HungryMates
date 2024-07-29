import { MetadataRoute } from "next"
 
export default function manifest(): MetadataRoute.Manifest {
	return {
		background_color: "#ffffff",
		// categories?: string[];
		description: "Supreme NextJS Template for quick development by NizarSyahmi37",
		// dir?: 'ltr' | 'rtl' | 'auto';
		display: "standalone",
		// display_override?: ('fullscreen' | 'standalone' | 'minimal-ui' | 'browser' | 'window-controls-overlay')[];
		// file_handlers?: {
		// 	action: string;
		// 	accept: {
		// 		[mimeType: string]: string[];
		// 	}[];
		// }[];
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			}
		],
		// icons?: {
		// 	src: string;
		// 	type?: string;
		// 	sizes?: string;
		// 	purpose?: 'any' | 'maskable' | 'monochrome' | 'badge';
		// }[];
		// id?: string;
		// lang?: string;
		// launch_handler?: {
		// 	platform?: 'windows' | 'macos' | 'linux';
		// 	url?: string;
		// };
		name: "Supreme NextJS Template by NizarSyahmi37",
		// orientation?: 'any' | 'natural' | 'landscape' | 'portrait' | 'portrait-primary' | 'portrait-secondary' | 'landscape-primary' | 'landscape-secondary';
		// prefer_related_applications?: boolean;
		// protocol_handlers?: {
		// 	protocol: string;
		// 	url: string;
		// 	title?: string;
		// }[];
		// related_applications?: {
		// 	platform: string;
		// 	url: string;
		// 	id?: string;
		// }[];
		// scope?: string;
		// screenshots?: {
		// 	src: string;
		// 	type?: string;
		// 	sizes?: string;
		// }[];
		// serviceworker?: {
		// 	src?: string;
		// 	scope?: string;
		// 	type?: string;
		// 	update_via_cache?: 'import' | 'none' | 'all';
		// };
		// share_target?: {
		// 	action?: string;
		// 	method?: 'get' | 'post';
		// 	enctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
		// 	params?: {
		// 		name: string;
		// 		value: string;
		// 		required?: boolean;
		// 	}[];
		// 	url?: string;
		// 	title?: string;
		// 	text?: string;
		// 	files?: {
		// 		accept?: string[];
		// 		name?: string;
		// 	}[];
		// };
		short_name: "Supreme NextJS Template",
		// shortcuts?: {
		// 	name: string;
		// 	short_name?: string;
		// 	description?: string;
		// 	url: string;
		// 	icons?: {
		// 		src: string;
		// 		type?: string;
		// 		sizes?: string;
		// 		purpose?: 'any' | 'maskable' | 'monochrome' | 'badge';
		// 	}[];
		// }[];
		start_url: "/",
		theme_color: "#ffffff"
	}
}