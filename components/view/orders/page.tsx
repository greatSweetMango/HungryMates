import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs } from "@/components/extra/animated-tabs"
import { tabs } from "@/constant/order-tabs"

export default function Orders() {

	return (
		<ScrollArea className={`no-visible-scrollbar h-full w-full min-h-[50vh] items-start justify-start p-4`}>
			<div className={`max-w-5xl mx-auto`}>
				<h1 className="text-3xl font-bold underline">
					Orders
				</h1>

				<div className="min-h-[25vh] max-h-[75vh] h-screen [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10">
					<Tabs tabs={tabs} />
				</div>
			</div>
	  	</ScrollArea>
	)
}