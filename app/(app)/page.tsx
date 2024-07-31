"use client"

import { Button } from "@/components/ui/button"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Page() {
	const { data: session, status } = useSession()
	const router = useRouter()
	
	if (status === "loading") {
		return (
			<div className="w-screen h-screen flex items-center justify-center">
				<div className="text-center border rounded-md w-full max-w-sm mx-1 bg-white p-6 dark:bg-gray-900" id="login-model">
					Loading...
				</div>
			</div>
		)
	}


	if (status !== "authenticated") {
		return (
			<div className="w-screen h-screen flex items-center justify-center">
				<div className="text-center border rounded-md w-full max-w-sm mx-1 bg-white p-6 dark:bg-gray-900" id="login-model">
		
					<p className="text-2xl font-bold dark:text-white">
						Login to Continue
					</p>
					<p className="dark:text-gray-200">
						It will take less than 2 minutes
					</p>
		
					<div className="mt-4">
						<Button
							className="w-full"
							onClick={() => signIn("42-school", { callbackUrl: "/" })}
						>
							Login with 42
						</Button>
					</div>
				</div>
			</div>
		)
	} else {
		router.push("/home");

		return (
			<div className="w-screen h-screen flex items-center justify-center">
				<div className="text-center border rounded-md w-full max-w-sm mx-1 bg-white p-6 dark:bg-gray-900" id="login-model">
					Loading...
				</div>
			</div>
		)
	}
}
