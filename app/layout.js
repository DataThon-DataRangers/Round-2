import { GeistSans } from "geist/font/sans";
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
				className={cn(
					"min-h-screen bg-background antialiased ",
					GeistSans.className
				)}
			>
				{children}
			</body>
		</html>
	);
}
