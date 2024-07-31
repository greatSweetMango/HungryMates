"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { useSession } from "next-auth/react"
import axiosClient from "@/lib/axiosClient";
import { useEffect, useId, useRef, useState } from "react";

import ProfileUser from "../profile/user"

export default function Home() {
	const { data: session, status } = useSession()
	const [organized, setOrganized] = useState(0);
	const [joined, setJoined] = useState(0);

	useEffect(() => {
		async function fetchOrders() {
		  try {
			const orders = await axiosClient.get("/orders");
			const organize = orders.data.filter((item: any[]) => item?.status === "pending").length
			const join = orders.data.filter((item: any[]) => item?.status !== "pending").length
			setOrganized(organize)
			setJoined(join)
		  } catch (error) {
			console.error("Failed to fetch orders:", error);
		  }
		}
	
		fetchOrders();
	}, []);
	
	return (
		<ScrollArea className={`no-visible-scrollbar h-full w-full min-h-[50vh] items-start justify-start p-4`}>
			<div className={`max-w-5xl mx-auto`}>
				<div className="grid pt-10 gap-2 text-center justify-center">
					<ProfileUser />
					<h1 className="text-3xl font-bold underline">
						{session?.user?.name}
					</h1>
					<h3 className="">
						A programmer at heart
					</h3>
				</div>
				<div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 my-8`}>
					<div className={`border rounded-xl p-8`}>
						<h3 className="">
							Group Organized
						</h3>
						<h5 className="text-7xl font-bold">
							{organized}
						</h5>
					</div>
					<div className={`border rounded-xl p-8`}>
						<h3 className="">
							Group Joined
						</h3>
						<h5 className="text-7xl font-bold">
							{joined}
						</h5>
					</div>
				</div>
			</div>
		</ScrollArea>
	)
}