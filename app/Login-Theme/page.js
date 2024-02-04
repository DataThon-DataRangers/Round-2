"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";

import { useEffect, useState } from "react";
import { auth, provider } from "../firebase/firebase.js";
import { signInWithPopup, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
	const [user, setUser] = useState({});
	const router = useRouter();
	const handleClick = async () => {
		try {
			const res = await signInWithPopup(auth, provider);
			console.log(res.user);
			setUser(res.user);
			localStorage.setItem("email", JSON.stringify(res.user));
			router.push("/");
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<section class="bg-white">
			<div class="lg:grid lg:min-h-screen lg:grid-cols-12">
				<section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
					<img
						alt="Night"
						src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						class="absolute inset-0 h-full w-full object-cover opacity-60"
					/>

					<div class="hidden lg:relative lg:block lg:p-12">
						<h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
							Welcome to Health App
						</h2>

						<p class="mt-4 leading-relaxed text-white/90">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Eligendi nam dolorum aliquam, quibusdam
							aperiam voluptatum.
						</p>
					</div>
				</section>

				<main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
					<div class="max-w-xl lg:max-w-3xl">
						<div class="relative -mt-16 block lg:hidden">
							<a
								class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
								href="/"
							>
								<span class="sr-only">Home</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									fill="#000000"
									viewBox="0 0 256 256"
								>
									<path d="M72,136H32a8,8,0,0,1,0-16H67.72L81.34,99.56a8,8,0,0,1,13.32,0l25.34,38,9.34-14A8,8,0,0,1,136,120h24a8,8,0,0,1,0,16H140.28l-13.62,20.44a8,8,0,0,1-13.32,0L88,118.42l-9.34,14A8,8,0,0,1,72,136ZM178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,.75,0,1.5,0,2.25a8,8,0,1,0,16-.5c0-.58,0-1.17,0-1.75A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46c0,53.61-77.76,102.15-96,112.8-10.83-6.31-42.63-26-66.68-52.21a8,8,0,1,0-11.8,10.82c31.17,34,72.93,56.68,74.69,57.63a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32Z"></path>
								</svg>
							</a>
						</div>

						<form
							action="#"
							class="mt-8 flex flex-col justify-center items-start gap-8"
						>
							<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
								Sign In To Continue
							</h1>
							<p className="leading-7 max-w-[40ch] ">
								Dont worry, we wont sell your data, we are using
								it to store your chat history for convinience
							</p>
							<button
								onClick={handleClick}
								className="px-4 py-2 border flex gap-2 bg-white border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
							>
								<img
									className="w-6 h-6"
									src="https://www.svgrepo.com/show/475656/google-color.svg"
									loading="lazy"
									alt="google logo"
								/>
								<span>SignIn with Google</span>
							</button>
						</form>
					</div>
				</main>
			</div>
		</section>
	);
}
