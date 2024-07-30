import { AnimatedTooltip } from "@/components/extra/animated-tooltip"

export function OrderInfo({ 
	time,
	people,
	location,
	description
}: {
	time: any
	people: any
	location: any
	description: any
}) {
	return (
		<div className={`grid gap-4`}>
			<div className="">
				<h3 className="font-bold text-neutral-700 dark:text-neutral-200">
					Dining Time
				</h3>
				<p className="font-normal text-neutral-600 dark:text-neutral-400">
					{time}
				</p>
			</div>
			<div className="">
				<h3 className="font-bold text-neutral-700 dark:text-neutral-200">
					Location
				</h3>
				<p className="font-normal text-neutral-600 dark:text-neutral-400">
					{location}
				</p>
			</div>
			<div className="">
				<h3 className="font-bold text-neutral-700 dark:text-neutral-200">
					Participants
				</h3>
				<div className="flex flex-row justify-center my-10 w-full">
					<AnimatedTooltip items={people} />
				</div>
			</div>
			<div className="">
				<h3 className="font-bold text-neutral-700 dark:text-neutral-200">
					Description
				</h3>
				<p>
					{description}
				</p>
			</div>
		</div>
	)
}
