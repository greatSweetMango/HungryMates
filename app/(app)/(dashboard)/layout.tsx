"use client"

import { sidebarLinks } from "@/constant/navigation"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/extra/sidebar"
import { ReactNode, useState } from "react"
import { motion } from "framer-motion"

import Image from "next/image"
import Link from "next/link"

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	const [open, setOpen] = useState(false)

	return (
		<section className={`p-4 w-screen h-screen`}>
			<div
				className={`rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 flex-1 w-full h-full mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden`}
			>
				<Sidebar open={open} setOpen={setOpen} logo={<Logo />}>
					<SidebarBody className="justify-between gap-10">
						<div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
							{open ? <Logo /> : <LogoIcon />}
							<div className="mt-8 flex flex-col gap-2">
								{sidebarLinks.map((link, idx) => (
									<SidebarLink key={idx} link={link} />
								))}
							</div>
						</div>
						<div>
							<SidebarLink
								link={{
									label: "Manu",
									href: "/profile",
									icon: (
										<Image
											src="https://assets.aceternity.com/manu.png"
											className="h-7 w-7 flex-shrink-0 rounded-full"
											width={50}
											height={50}
											alt="Avatar"
										/>
									),
								}}
							/>
						</div>
					</SidebarBody>
				</Sidebar>
				
				{children}
			</div>
		</section>
	)
}


export const Logo = () => {
	return (
		<Link
			href="/home"
			className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
		>
			<div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="font-medium text-black dark:text-white whitespace-pre"
			>
				HungryMates
			</motion.span>
		</Link>
	)
}

export const LogoIcon = () => {
	return (
		<Link
			href="/home"
			className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
		>
			<div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
		</Link>
	)
}