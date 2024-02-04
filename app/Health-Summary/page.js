import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input-fact";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
export default function Health_Summary() {
	const genAI = new GoogleGenerativeAI(
		process.env.NEXT_PUBLIC_GEMINI_API_KEY
	);
	async function run() {
		const model = genAI.getGenerativeModel({ model: "gemini-pro" });
		const prompt = "Write a story about a magic backpack.";

		const result = await model.generateContent(prompt);
		const response = await result.response;
		const text = response;
		console.log(JSON.stringify(text));
	}

	return (
		<div className="bg-background text-foreground flex flex-col h-screen overflow-x-auto w-full">
			{/* Chat Messages */}
			<div className="flex flex-col items-start justify-start w-full max-w-3xl mx-auto px-5 gap-6 overflow-y-auto mt-10">
				<Card className="w-full border-primary">
					<CardHeader>
						<CardTitle>Model Reply</CardTitle>
					</CardHeader>
					<CardContent>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</CardContent>
				</Card>
				<Card className="w-full border-destructive">
					<CardHeader>
						<CardTitle>Model Reply</CardTitle>
					</CardHeader>
					<CardContent>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</CardContent>
				</Card>
				<Card className="w-full border-primary">
					<CardHeader>
						<CardTitle>Model Reply</CardTitle>
					</CardHeader>
					<CardContent>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</CardContent>
				</Card>{" "}
			</div>

			<div className="flex flex-col h-fit items-start justify-end w-full max-w-3xl mx-auto px-5 pb-10">
				<Input
					type="email"
					placeholder="Enter The Misinformation!"
					className="sticky bottom-32 md:bottom-10"
				/>{" "}
			</div>
		</div>
	);
}
