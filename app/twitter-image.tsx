import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Supreme NextJS Template by NizarSyahmi37"
export const size = { width: 1200, height: 675 }
export const contentType = "image/png"

// Facebook	1200 x 630 pixels
// Twitter	1200 x 675 pixels (minimum), 4096 x 4096 pixels (maximum)
// LinkedIn	1200 x 627 pixels
// Pinterest	1000 x 1500 pixels (2:3 aspect ratio)

// app/[slug]/opengraph-image.tsx
// export default async function Image({ params }: { params: { slug: string } }) {
export default async function Image() {
	// const interSemiBold = fetch(
	// 	new URL("./Inter-SemiBold.ttf", import.meta.url)
  	// ).then((res) => res.arrayBuffer())
 
	// const post = await fetch(`https://.../posts/${params.slug}`).then((res) =>
	// 	res.json()
	// )
	
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 128,
					background: "white",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{alt}
			</div>
		),
		{
			...size,
			// fonts: [
			// 	// {
			// 	// 	name: "Inter",
			// 	// 	data: await interSemiBold,
			// 	// 	style: "normal",
			// 	// 	weight: 400,
			// 	// },
			// ],
		}
	)
}