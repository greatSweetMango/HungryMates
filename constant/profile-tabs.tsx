import { ThreadsGuest } from "@/components/view/threads/views/guest"
import { ThreadsHost } from "@/components/view/threads/views/host"

const tabStyle = `w-full overflow-hidden relative h-full rounded-2xl text-xl font-bold bg-neutral-100 border border-neutral-800`

export const tabs = [
    {
        title: "Host",
        value: "host",
        content: (
            <div className={`${tabStyle}`}>
                <ThreadsHost />
            </div>
        ),
    },
    {
        title: "Guest",
        value: "guest",
        content: (
            <div className={`${tabStyle}`}>
                <ThreadsGuest />
            </div>
        ),
    }
]