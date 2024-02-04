import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Fact() {
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
		<div className="bg-background text-foreground flex flex-row justify-between min-h-screen w-full">
			<div className=" flex flex-col items-start md:items-center justify-center w-full max-w-xl mx-auto pb-[20vh]md:pb-10 py-10 px-5">
				<Input type="email" placeholder="Enter The Misinformation!" />{" "}
			</div>
		</div>
	);
}
