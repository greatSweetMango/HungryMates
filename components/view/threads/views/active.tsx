"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { ExpandableCardStandard } from "../../orders/listing"
import { useEffect, useState } from "react"
import { formatOrderData } from "@/lib/utils"

export const ThreadsActive = () => {
	const [orders, setOrders] = useState([])
	
	useEffect(() => {
		const checkBalance = async () => {
			try {
				const res = await fetch(`/api/order`, {
					next: {
						revalidate: 15
					},
				})
				const result = await res.json()
				setOrders(result.data)
			} catch (error) {
				console.log(error)
			}
		}
	
		const dataInterval = setInterval(checkBalance, 3000)
	
		return () => {
			clearInterval(dataInterval)
		}
	}, [])

	return (
		<ScrollArea className={`h-full w-full mx-auto items-start justify-start`}>
			<ExpandableCardStandard />
		</ScrollArea>
	)
}