import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatOrderData(array: any[]) {
	let data: any[] = []
	for (let i = 0; i < array?.length; i++) {
		let users: any[] = []
        for (let j = 0; j < array[i].participants?.length; j++) {
            const tmp = {
                id: array[i].participants[j].id,
                name: `Name ${j}`,
                designation: "Software Engineer",
                image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
            }
            users = [...users, tmp]
        }
        const temp = {
            id: array[i].id,
            description: array[i].diningDescription,
            title: array[i].orderGroupName,
            src: "https://images.unsplash.com/photo-1651399436026-3ca4088b3d6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbmVzZSUyMGZvb2R8ZW58MHwwfDB8fHww",
            ctaText: array[i].status === "pending" ? "Join" : "Ended",
            ctaLink: "#",
            time: array[i].diningTime,
            people: users,
            location: array[i].diningLocation,
            information: array[i].diningDescription,
            status: array[i].status,
            creatorId: array[i].orderGroupCreaterId,
			chats: array[i].chats,
            content: ""    
        }
        data = [...data, temp]
    }
	return data
}