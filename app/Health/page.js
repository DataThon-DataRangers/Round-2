"use client";
import { Button } from "@/components/ui/button-health";
import { useRef, useState } from "react";
import { getAuth } from "@firebase/auth";
import { Input } from "@/components/ui/input";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
	collection,
	getDoc,
	setDoc,
	doc,
	updateDoc,
} from "@firebase/firestore";
import rehypeRaw from "rehype-raw";
import { db } from "../firebase/firebase";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Fact() {
	const genAI = new GoogleGenerativeAI(
		process.env.NEXT_PUBLIC_GEMINI_API_KEY
	);
	const model = genAI.getGenerativeModel({ model: "gemini-pro" });

	const [text, setText] = useState();
	const [loading, setLoading] = useState(false);
	const ageRef = useRef(null);
	const heightRef = useRef(null);
	const weightRef = useRef(null);
	const dietPlanRef = useRef(null);
	const symptomsRef = useRef(null);
	const drasticChangeRef = useRef(null);
	const allergiesRef = useRef(null);
	const medicinePreferenceRef = useRef(null);
	const medicalHistoryRef = useRef(null);
	const treatmentHistoryRef = useRef(null);

	const handleSubmit = () => {
		setLoading(true);
		const age = ageRef.current.value;
		const height = heightRef.current.value;
		const weight = weightRef.current.value;
		const dietPlan = dietPlanRef.current.value;
		const symptoms = symptomsRef.current.value;
		const drasticChange = drasticChangeRef.current.value;
		const allergies = allergiesRef.current.value;
		const medicinePreference = medicinePreferenceRef.current.value;
		const medicalHistory = medicalHistoryRef.current.value;
		const treatmentHistory = treatmentHistoryRef.current.value;

		console.log("Form data:", {
			age,
			height,
			weight,
			dietPlan,
			symptoms,
			drasticChange,
			allergies,
			medicinePreference,
			medicalHistory,
			treatmentHistory,
		});
		async function hello() {
			const uid = getAuth().currentUser.uid;
			const usersRef = collection(db, "users");
			await updateDoc(doc(usersRef, uid), {
				name: getAuth().currentUser.displayName,
				age,
				height,
				weight,
				dietPlan,
				symptoms,
				drasticChange,
				allergies,
				medicinePreference,
				medicalHistory,
				treatmentHistory,
			});

			console.log("DOne ig");
		}
		hello();
		const userData = {
			age,
			height,
			weight,
			dietPlan,
			symptoms,
			drasticChange,
			allergies,
			medicinePreference,
			medicalHistory,
			treatmentHistory,
		};

		const chat = model.startChat({
			history: [
				{
					role: "user",
					parts:
						"You are a healthcare expert,the patient is Indian. The following are the patient's age, height(in cm), weight(in kg) and diet plans details,symptoms,drastic change. Provide the patient's current health summary based on their age, height(in cm), weight() and diet plans,symptoms,drastic change. Generate the summary based on the patient's medical history and allergies. Be concise and comprehensive. Summary should include the current health status of the patient. The summary should not be more than 6 lines." +
						userData,
				},
				{
					role: "model",
					parts: "Great to meet you. What would you like to know?",
				},
			],
		});
		askBot();

		async function askBot() {
			const msg = `You are a healthcare expert. Keeping generated health summary in mind, you are now to read the given symptoms of the patient. Identify the patient’s medical condition or disease based on the combination of symptoms. Display the identified medical condition and provide essential details like 1-2 lines about the condition and 3-4 lines on how can it be cured. Relate the condition with the generated healthcare summary and display how will it be best to treat the condition based on patient’s current health standards. I know seeking a healtchare professsional is better but I want resposne from ai first `;
			const result = await chat.sendMessage(msg);
			const response = await result.response;
			const textB = response.text();
			setText(textB);
		}
		setLoading(false);
	};
	console.log(text);
	return (
		<div className="flex gap-10 flex-col min-h-screen w-full max-w-2xl justify-center items-start mx-auto py-10 reletive">
			{!text ? (
				<>
					{loading && (
						<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
							<p className="text-white">Loading...</p>
						</div>
					)}
					<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-32">
						Input You Details To Proceed
					</h1>

					<div className="grid grid-cols-1 w-full max-w-sm place-content-start gap-10 pr-5">
						<div className=" space-y-3">
							<Label htmlFor="age">Age</Label>
							<Input type="text" id="age" ref={ageRef} />
						</div>

						<div className=" space-y-3">
							<Label htmlFor="height">Height in cm</Label>
							<Input type="text" id="height" ref={heightRef} />
						</div>

						<div className=" space-y-3">
							<Label htmlFor="weight">Weight in Kg</Label>
							<Input type="text" id="weight" ref={weightRef} />
						</div>

						<div className=" space-y-3">
							<Label htmlFor="dietPlan">
								Diet Plan, Vegetarian,Non Vegetarian
							</Label>
							<Input
								type="text"
								id="dietPlan"
								ref={dietPlanRef}
							/>
						</div>

						<div className=" space-y-3">
							<Label htmlFor="symptoms">Symptoms</Label>
							<Input
								type="text"
								id="symptoms"
								ref={symptomsRef}
							/>
						</div>

						<div className=" space-y-3">
							<Label htmlFor="drasticChange">
								Any drastic change in life
							</Label>
							<Input
								type="text"
								id="drasticChange"
								ref={drasticChangeRef}
							/>
						</div>

						<div className=" space-y-3">
							<Label htmlFor="allergies">Allergies</Label>
							<Input
								type="text"
								id="allergies"
								ref={allergiesRef}
							/>
						</div>

						<div className=" space-y-3">
							<Label htmlFor="medicinePreference">
								Medicine Preference
							</Label>
							<Input
								type="text"
								id="medicinePreference"
								ref={medicinePreferenceRef}
							/>
						</div>

						<div className=" space-y-3">
							<Label htmlFor="medicalHistory">
								Medical History
							</Label>
							<Input
								type="text"
								id="medicalHistory"
								ref={medicalHistoryRef}
							/>
						</div>

						<div className=" space-y-3">
							<Label htmlFor="treatmentHistory">
								Treatment History
							</Label>
							<Input
								type="text"
								id="treatmentHistory"
								ref={treatmentHistoryRef}
							/>
						</div>
						<Button size="lg" onClick={handleSubmit}>
							Submit
						</Button>
					</div>
				</>
			) : (
				<>
					<h1 className="text-4xl font-bold">Response:</h1>

					{/* <Markdown> {text}</Markdown> */}
					<div className=" my-auto prose-zinc prose-img:!max-h-[20rem] md:prose-img:!max-h-[15rem] prose-img:rounded-xl prose-img:shadow-2xl prose-img:object-cover  prose-invert ">
						<ReactMarkdown>{text}</ReactMarkdown>
						{console.log(text)}
					</div>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="absolute hidden xl:block md:bottom-[40%] md:right-[5%] h-20 w-20 md:h-40 md:w-40 rotate-12 "
						fill="#ccff00"
						viewBox="0 0 256 256"
					>
						<path d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z"></path>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="absolute hidden xl:block right-[80%]  md:bottom-[16%]  h-20 w-20 md:h-40 md:w-40  -rotate-12  "
						fill="#fff"
						viewBox="0 0 256 256"
					>
						<path d="M212,152a12,12,0,1,1-12-12A12,12,0,0,1,212,152Zm-4.55,39.29A48.08,48.08,0,0,1,160,232H136a48.05,48.05,0,0,1-48-48V143.49A64,64,0,0,1,32,80V40A16,16,0,0,1,48,24H64a8,8,0,0,1,0,16H48V80a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V40H128a8,8,0,0,1,0-16h16a16,16,0,0,1,16,16V79.17c0,32.84-24.53,60.29-56,64.31V184a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM224,152a24,24,0,1,0-24,24A24,24,0,0,0,224,152Z"></path>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="absolute md:bottom-[78%] md:right-[70%] h-20 w-20 md:h-40 md:w-40  -rotate-12 hidden xl:block  "
						fill="#ccff00"
						viewBox="0 0 256 256"
					>
						<path d="M216,88H168V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V88H40a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H88v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V168h48a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88Zm0,64H160a8,8,0,0,0-8,8v56H104V160a8,8,0,0,0-8-8H40V104H96a8,8,0,0,0,8-8V40h48V96a8,8,0,0,0,8,8h56Z"></path>
					</svg>
				</>
			)}
		</div>
	);
}
