"use client"

import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"
import { useState, createContext, useContext, ReactNode, Dispatch, SetStateAction, ComponentProps } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

interface Links {
	label: string
	href: string
	icon: JSX.Element | ReactNode
}

interface SidebarContextProps {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
	animate: boolean
	logo?: any
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  	undefined
)

export const useSidebar = () => {
	const context = useContext(SidebarContext)
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider")
	}
	return context
}

export const SidebarProvider = ({
	children,
	open: openProp,
	setOpen: setOpenProp,
	animate = true,
	logo
}: {
	children: ReactNode
	open?: boolean
	setOpen?: Dispatch<SetStateAction<boolean>>
	animate?: boolean
	logo?: any
}) => {
	const [openState, setOpenState] = useState(false)

	const open = openProp !== undefined ? openProp : openState
	const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState

	return (
		<SidebarContext.Provider value={{ open, setOpen, animate: animate, logo }}>
			{children}
		</SidebarContext.Provider>
	)
}

export const Sidebar = ({
	children,
	open,
	setOpen,
	animate,
	logo
}: {
	children: ReactNode
	open?: boolean
	setOpen?: Dispatch<SetStateAction<boolean>>
	animate?: boolean
	logo: any
}) => {
	return (
		<SidebarProvider open={open} setOpen={setOpen} animate={animate} logo={logo}>
			{children}
		</SidebarProvider>
	)
}

export const SidebarBody = (props: ComponentProps<typeof motion.div>) => {
	return (
		<>
			<DesktopSidebar {...props} />
			<MobileSidebar {...(props as ComponentProps<"div">)} />
		</>
	)
}

export const DesktopSidebar = ({
	className,
	children,
	...props
}: ComponentProps<typeof motion.div>) => {
	const { open, setOpen, animate } = useSidebar()
	return (
		<div className=" border border-r-foreground">
			<motion.div
				className={cn(
					"h-full m-2 px-2 py-4 hidden  md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[180px] flex-shrink-0",
					className
				)}
				animate={{
					width: animate ? (open ? "180px" : "45px") : "180px",
				}}
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
				{...props}
			>
				{children}
			</motion.div>
		</div>
	)
}

export const MobileSidebar = ({
	className,
	children,
	...props
}: ComponentProps<"div">) => {
	const { open, setOpen, logo } = useSidebar()
	return (
		<>
			<div
				className={cn(
					"h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
				)}
				{...props}
			>
				<div className="grid grid-cols-2 items-center justify-end z-20 w-full">
					<div>
						{logo}
					</div>
					<div className={`flex justify-end`}>
						<Menu
							className="text-neutral-800 dark:text-neutral-200"
							onClick={() => setOpen(!open)}
						/>
					</div>
				</div>
				<AnimatePresence>
					{open && (
						<motion.div
							initial={{ x: "-100%", opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: "-100%", opacity: 0 }}
							transition={{
								duration: 0.3,
								ease: "easeInOut",
							}}
							className={cn(
								"fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
								className
							)}
						>
							<div
								className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
								onClick={() => setOpen(!open)}
							>
								<X />
							</div>
							{children}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	)
}

export const SidebarLink = ({
	link,
	className,
	...props
}: {
	link: Links
	className?: string
	props?: LinkProps
}) => {
  	const { open, animate } = useSidebar()
	return (
		<Link
			href={link.href}
			className={cn(
				"flex items-center justify-start gap-2  group/sidebar py-2",
				className
			)}
			{...props}
		>
			{link.icon}

			<motion.span
				animate={{
					display: animate ? (open ? "inline-block" : "none") : "inline-block",
					opacity: animate ? (open ? 1 : 0) : 1,
				}}
				className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
			>
				{link.label}
			</motion.span>
		</Link>
	)
}
