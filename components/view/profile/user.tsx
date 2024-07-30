import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"

export default function ProfileUser() {
	return (
		<div className="mx-auto">
			<Avatar className="min-w-20 min-h-20">
				<AvatarImage src="https://assets.aceternity.com/manu.png" alt="Manu" />
				<AvatarFallback className="w-full h-full items-center justify-center m-auto flex text-2xl font-bold">
					M
				</AvatarFallback>
			</Avatar>
		</div>
	)
}