'use client';

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // next/router 대신 next/navigation 사용
import { useEffect } from "react";

export default function Page() {
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "authenticated") {
				router.push("/home");
		}
	}, [status, router]);

	if (status === "loading") {
		return <p>Loading...</p>;
	}

	return (
		<div className="w-screen h-screen flex items-center justify-center">
			<div className="text-center border rounded-md w-full max-w-sm mx-1 bg-white p-6 dark:bg-gray-900" id="login-model">

				<p className="text-2xl font-bold dark:text-white">Login to Continue</p>
				<p className="dark:text-gray-200">It will take less than 2 minutes</p>

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
}
