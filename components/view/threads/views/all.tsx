import { ScrollArea } from "@/components/ui/scroll-area"
import { ExpandableCardStandard } from "../../orders/listing"

export const ThreadsAll = () => {
	return (
		<ScrollArea className={`h-full w-full mx-auto items-start justify-start`}>
			<ExpandableCardStandard />
		</ScrollArea>
	)
}