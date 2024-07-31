import { ScrollArea } from "@/components/ui/scroll-area"
import { ExpandableCardStandard } from "../../listing"

export const ThreadsNew = () => {
	return (
		<ScrollArea className={`h-full w-full mx-auto items-start justify-start`}>
			<ExpandableCardStandard />
		</ScrollArea>
	)
}