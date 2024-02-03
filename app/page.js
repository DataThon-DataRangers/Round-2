import Image from "next/image";

export default function Home() {
	return (
		<main className="bg-background text-foreground flex flex-col justify-center items-center h-screen">
			<div className=" border w-96 h-96 flex flex-col justify-center items-center">
				<div className=" border w-[60%] h-[20%] flex flex-col justify-center items-center">
					<h1>Fact Checker</h1>
				</div>
			</div>
		</main>
	);
}
