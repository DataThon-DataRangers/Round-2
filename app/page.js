import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<main className="bg-background text-foreground flex flex-col justify-center items-center h-screen">
			<div className="bg-card border-2 rounded drop-shadow-lg w-full h-full px-7 md:w-[50vw] md:h-[40vh] flex flex-col justify-center items-center text-center space-y-10 animate-fade-up animate-duration-[1500ms] ">
				<h1 className="text-4xl font-semibold caret-card-foreground">
					Welcome to Our Health App
				</h1>
				<Button asChild>
					<Link href="/Fact">Fact Checker</Link>
				</Button>{" "}
				<Button asChild variant="outline">
					<Link href="/Health">Health Survey</Link>
				</Button>{" "}
			</div>
		</main>
	);
}
