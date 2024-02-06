import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className=" md:pl-5 space-y-10 -mt-32 text-white w-full">
				<h1 className="text-5xl md:text-8xl font-extrabold tracking-tight  mt-32">
					Welcome To <br></br> MediBudddy
				</h1>
				<p className=" text-lg md:text-3xl ">
					Your One Stop Solution To Health
				</p>
				<div className="grid grid-cols-2 [&>*]:text-left gap-5 md:gap-10 w-fit">
					<Link href="/Fact">
						<button className=" w-full  h-full transition-colors hover:bg-slate-300 bg-slate-200 text-black px-7 md:px-14 py-8 text-xl font-bold rounded-2xl">
							📖 Fact Checker
						</button>
					</Link>
					<Link href="/Doubt">
						<button className=" w-full h-full bg-slate-200 transition-colors hover:bg-slate-300 text-black px-7 md:px-14 py-8 text-xl font-bold rounded-2xl">
							🤔 Doubt Resolver
						</button>
					</Link>
					<Link href="/Health">
						<button className="bg-slate-200 h-full transition-colors hover:bg-slate-300 w-full text-black px-7 md:px-14 py-8 text-xl font-bold rounded-2xl">
							🩺 Health Checkup
						</button>
					</Link>
					<Link href="/treatment">
						<button className="bg-slate-200 h-full transition-colors hover:bg-slate-300 w-full text-black px-7 md:px-14 py-8 text-xl font-bold rounded-2xl">
							🩺 Treatment
						</button>
					</Link>
					<Link href="/news" className=" col-span-2">
						<button className="bg-slate-200 h-full transition-colors hover:bg-slate-300 w-full text-black px-7 md:px-14 py-8 text-xl font-bold rounded-2xl ">
							📰 Check Latest News
						</button>
					</Link>
				</div>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="absolute top-[5%] md:top-auto md:bottom-[40%] md:right-[10%] h-20 w-20 md:h-40 md:w-40 rotate-12 hidden md:block"
				fill="#ccff00"
				viewBox="0 0 256 256"
			>
				<path d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z"></path>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="absolute top-[8%] right-[40%] md:top-auto  md:bottom-[16%] md:right-[20%] h-20 w-20 md:h-40 md:w-40  -rotate-12 hidden md:block  "
				fill="#fff"
				viewBox="0 0 256 256"
			>
				<path d="M212,152a12,12,0,1,1-12-12A12,12,0,0,1,212,152Zm-4.55,39.29A48.08,48.08,0,0,1,160,232H136a48.05,48.05,0,0,1-48-48V143.49A64,64,0,0,1,32,80V40A16,16,0,0,1,48,24H64a8,8,0,0,1,0,16H48V80a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V40H128a8,8,0,0,1,0-16h16a16,16,0,0,1,16,16V79.17c0,32.84-24.53,60.29-56,64.31V184a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM224,152a24,24,0,1,0-24,24A24,24,0,0,0,224,152Z"></path>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="absolute top-[5%] right-[10%] xl:bottom-[66%] xl:right-[20%] h-20 w-20 md:h-40 md:w-40  -rotate-12 hidden md:block "
				fill="#ccff00"
				viewBox="0 0 256 256"
			>
				<path d="M216,88H168V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V88H40a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H88v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V168h48a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88Zm0,64H160a8,8,0,0,0-8,8v56H104V160a8,8,0,0,0-8-8H40V104H96a8,8,0,0,0,8-8V40h48V96a8,8,0,0,0,8,8h56Z"></path>
			</svg>
		</>
	);
}
