"use client"

import { ReactNode } from "react"
import { SessionProvider } from 'next-auth/react'

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<main>
			<SessionProvider>
				{children}
			</SessionProvider>
		</main>
	)
}