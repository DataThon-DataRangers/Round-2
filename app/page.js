import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<main className="bg-background  overflow-hidden text-foreground flex flex-col justify-center items-center h-screen relative ">
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
			<img
				src="https://uxtools.co/img/gradients/pink-orange-blob.svg"
				className="absolute"
				style={{ top: 0, right: "60%", zIndex: 99 }}
			/>
		</main>
	);
}
