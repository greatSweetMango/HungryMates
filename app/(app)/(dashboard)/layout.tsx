"use client"

import { sidebarLinks } from "@/constant/navigation"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/extra/sidebar"
import { ReactNode, useState } from "react"
import { motion } from "framer-motion"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Image from "next/image"

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	const [open, setOpen] = useState(false)
	const { data: session, status } = useSession()
	const router = useRouter()

	if (status === "loading") {
		return (
			<div className="w-screen h-screen flex items-center justify-center">
				<div className="text-center border rounded-md w-full max-w-sm mx-1 bg-white p-6 dark:bg-gray-900" id="login-model">
					Loading...
				</div>
			</div>
		)
	}

	if (status === "authenticated") {
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
										label: (session?.user?.name as string).substring(0, 10) + "...",
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
	} else {
		router.push("/");

		return (
			<div className="w-screen h-screen flex items-center justify-center">
				<div className="text-center border rounded-md w-full max-w-sm mx-1 bg-white p-6 dark:bg-gray-900" id="login-model">
					Loading...
				</div>
			</div>
		)
	}
}

export const Logo = () => {
	const router = useRouter()

	return (
		<div
			className="cursor-pointer font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
			onClick={() => router.push("/home")}
		>
			<div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="font-medium text-black dark:text-white whitespace-pre"
			>
				HungryMates
			</motion.span>
		</div>
	)
}

export const LogoIcon = () => {
	const router = useRouter()

	return (
		<div
			className="cursor-pointer font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
			onClick={() => router.push("/home")}
		>
			<div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
		</div>
	)
}