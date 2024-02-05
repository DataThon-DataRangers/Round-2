import "./globals.css";
import { cn } from "../lib/utils";

export const metadata = {
	title: "MediBudddy",
	description: "AI Based ChatBot",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={cn("min-h-screen bg-background antialiased grain ")}
			>
				<section className=" text-white flex flex-col mx-auto justify-center items-start px-4 md:pl-[10vw] border border-solid border-black rounded-4 min-h-[calc(100vh-24px)] m-3 rounded-2xl w-[calc(100vw-24px)] relative">
					{" "}
					{children}
				</section>
			</body>
		</html>
	);
}
