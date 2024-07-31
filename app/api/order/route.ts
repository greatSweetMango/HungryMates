import dummy from "../../../constant/dummy.json"

export async function GET() {
    // Create API for fetching all orders in database

    // const res = await fetch('', {
    //     next: { revalidate: 60 }
    // })
    // const data = await res.json()
   
    let data: any[] = []
    let users: any[] = []
    for (let i = 0; i < dummy["Order"].length; i++) {
        const tempusers = dummy["Participants"].filter((item) => item.orderId === dummy["Order"][i].id)
        for (let j = 0; j < tempusers.length; j++) {
            const tmp = {
                id: tempusers?.id!,
                name: `Name ${j}`,
                designation: "Software Engineer",
                image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
            }
            users = [...users, tmp]
        }
        const temp = {
            id: dummy["Order"][i].id,
            description: dummy["Order"][i].diningDescription,
            title: dummy["Order"][i].orderGroupName,
            src: "https://images.unsplash.com/photo-1651399436026-3ca4088b3d6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbmVzZSUyMGZvb2R8ZW58MHwwfDB8fHww",
            ctaText: dummy["Order"][i].status === "pending" ? "Join" : "Ended",
            ctaLink: "#",
            time: dummy["Order"][i].diningTime,
            people: users,
            location: dummy["Order"][i].diningLocation,
            information: dummy["Order"][i].diningDescription,
            status: dummy["Order"][i].status,
            creatorId: dummy["Order"][i].orderGroupCreaterId,
            content: ""    
        }
        data = [...data, temp]
    }
    return Response.json(data)
}