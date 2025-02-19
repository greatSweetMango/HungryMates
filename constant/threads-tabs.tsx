import { ThreadsAll } from "@/components/view/threads/views/message/all"
import { ThreadsActive } from "@/components/view/threads/views/message/active"
import { ThreadsNew } from "@/components/view/threads/views/message/new"
import { ThreadsUpcoming } from "@/components/view/threads/views/message/upcoming"
import { ThreadsEnded } from "@/components/view/threads/views/message/ended"

const tabStyle = `w-full overflow-hidden relative h-full rounded-2xl text-xl font-bold bg-neutral-100 border border-neutral-800`

export const tabs = [
    {
        title: "All",
        value: "all",
        content: (
            <div className={`${tabStyle}`}>
                <ThreadsAll />
            </div>
        ),
    },
    {
        title: "Active",
        value: "active",
        content: (
            <div className={`${tabStyle}`}>
                <ThreadsActive />
            </div>
        ),
    },
    {
        title: "New",
        value: "new",
        content: (
            <div className={`${tabStyle}`}>
                <ThreadsNew />
            </div>
        ),
    },
    {
        title: "Upcoming",
        value: "upcoming",
        content: (
            <div className={`${tabStyle}`}>
                <ThreadsUpcoming />
            </div>
        ),
    },
    {
        title: "Ended",
        value: "ended",
        content: (
            <div className={`${tabStyle}`}>
                <ThreadsEnded />
            </div>
        ),
    }
]