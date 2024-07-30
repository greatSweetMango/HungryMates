import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
	return (
		<ScrollArea className={`no-visible-scrollbar h-full w-full min-h-[50vh] items-start justify-start p-4`}>
			<div className={`max-w-5xl mx-auto`}>
				<div>
					<h1 className="text-3xl font-bold underline">
						Home
					</h1>
				</div>
			</div>
		</ScrollArea>
	)
}