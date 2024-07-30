import { Button } from "@/components/ui/button";

export default function Page() {
	return (
		<div className="w-screen h-screen flex items-center justify-center">
			<div className="text-center border rounded-md w-full max-w-sm mx-1 bg-white p-6 dark:bg-gray-900" id="login-model">
	
				<p className="text-2xl font-bold dark:text-white">Login to Continue</p>
				<p className="dark:text-gray-200">It will take less than 2 minutes</p>

				<div className="mt-4">
					<Button
						className="w-full"
					>
						Login with 42
					</Button>
				</div>
				
			</div>
		</div>
	)
}