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
			<div className="hidden md:flex flex-col justify-between border-e  bg-card w-[30vh]">
				<div className="px-4 py-6">
					<span className="grid h-10 w-32 place-content-center rounded-lg  text-xs text-gray-600">
						Logo
					</span>

					<ul className="mt-6 space-y-1">
						<li>
							<a
								href=""
								className="block rounded-lg  px-4 py-2 text-sm font-medium "
							>
								General
							</a>
						</li>

						<li>
							<details className="group [&_summary::-webkit-details-marker]:hidden">
								<summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2  hover: hover:">
									<span className="text-sm font-medium">
										{" "}
										Teams{" "}
									</span>

									<span className="shrink-0 transition duration-300 group-open:-rotate-180">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</span>
								</summary>

								<ul className="mt-2 space-y-1 px-4">
									<li>
										<a
											href=""
											className="block rounded-lg px-4 py-2 text-sm font-medium  hover: hover:"
										>
											Banned Users
										</a>
									</li>

									<li>
										<a
											href=""
											className="block rounded-lg px-4 py-2 text-sm font-medium  hover: hover:"
										>
											Calendar
										</a>
									</li>
								</ul>
							</details>
						</li>

						<li>
							<a
								href=""
								className="block rounded-lg px-4 py-2 text-sm font-medium  hover: hover:"
							>
								Billing
							</a>
						</li>

						<li>
							<a
								href=""
								className="block rounded-lg px-4 py-2 text-sm font-medium  hover: hover:"
							>
								Invoices
							</a>
						</li>

						<li>
							<details className="group [&_summary::-webkit-details-marker]:hidden">
								<summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2  hover: hover:">
									<span className="text-sm font-medium">
										{" "}
										Account{" "}
									</span>

									<span className="shrink-0 transition duration-300 group-open:-rotate-180">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</span>
								</summary>

								<ul className="mt-2 space-y-1 px-4">
									<li>
										<a
											href=""
											className="block rounded-lg px-4 py-2 text-sm font-medium  hover: hover:"
										>
											Details
										</a>
									</li>

									<li>
										<a
											href=""
											className="block rounded-lg px-4 py-2 text-sm font-medium  hover: hover:"
										>
											Security
										</a>
									</li>

									<li>
										<form action="/logout">
											<button
												type="submit"
												className="w-full rounded-lg px-4 py-2 text-sm font-medium  [text-align:_inherit] hover: hover:"
											>
												Logout
											</button>
										</form>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</div>

				<div className="sticky inset-x-0 bottom-5 0">
					<a href="#" className="flex items-center gap-2 p-4 ">
						<img
							alt="Man"
							src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
							className="h-10 w-10 rounded-full object-cover"
						/>

						<div>
							<p className="text-xs">
								<strong className="block font-medium">
									Eric Frusciante
								</strong>

								<span> eric@frusciante.com </span>
							</p>
						</div>
					</a>
				</div>
			</div>
			<div className=" flex flex-col items-start md:items-center justify-center w-full max-w-xl mx-auto pb-[20vh]md:pb-10 py-10 px-5">
				<Input type="email" placeholder="Enter The Misinformation!" />{" "}
			</div>
		</div>
	);
}
