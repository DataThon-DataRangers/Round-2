"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input-fact";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { db } from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import Markdown from "react-markdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef, useState, useEffect } from "react";
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Fact() {
	const genAI = new GoogleGenerativeAI(
		process.env.NEXT_PUBLIC_GEMINI_API_KEY
	);
	const [loading, setLoading] = useState(false);
	const model = genAI.getGenerativeModel({ model: "gemini-pro" });
	const inputRef = useRef();
	const [chatHistory, setChatHistory] = useState([]);

	const chat = model.startChat({
		history: [
			{
				role: "user",
				parts: "You are HealthCheckBot, a healthcare expert designed to verify the accuracy of health-related information. You will be provided with a piece of information, which will be the received input of the user. You will understand the information with respect to the health industry and recognise its significance in the medical or health space. You will either confirm its accuracy by providing two supporting facts or identify it as misinformation with two to three valid reasons or facts explaining why it is incorrect. Your goal is to ensure users receive reliable and evidence-based information about health. You have to ensure you understand the user’s entered information and correctly, factually verify it",
			},
			{
				role: "model",
				parts: "Sure I would assist you and give whatever you ask for related to healthcare",
			},
		],
	});

	useEffect(() => {
		async function sendData() {
			try {
				const uid = getAuth().currentUser.uid;
				console.log(uid);
				const userRef = doc(db, "users", uid);

				await getDoc(userRef);

				await updateDoc(
					userRef,
					{
						chat: arrayUnion(...chatHistory),
					},
					{ merge: true }
				);
			} catch {
				console.error("nahi pata");
			}

			console.log(chatHistory);
		}

		sendData();
	}, [chatHistory]);

	async function sendMessage() {
		const msg = inputRef.current?.value;
		console.log(msg);
		setLoading(true);
		const userMessage = { role: "user", text: msg };

		const result = await chat.sendMessage(msg);
		const response = await result.response;
		console.log(response);
		const text = response.text();
		const botMessage = { role: "bot", text: text };
		setChatHistory((prevChatHistory) => [
			...prevChatHistory,
			userMessage,
			botMessage,
		]);
		console.log(chatHistory);

		setLoading(false);
		inputRef.current.value = "";
	}

	return (
		<div className="flex flex-col h-screen overflow-x-auto justify-end w-full">
			{loading && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
					<p className="text-white">Loading...</p>
				</div>
			)}
			{/* Chat Messages */}
			<div className="flex flex-col items-start justify-start w-full max-w-3xl mx-auto px-5 gap-6 overflow-y-auto mt-10 ">
				Your chat history will appear
				{chatHistory.map((chat) => {
					return (
						<>
							<Card
								className={`w-full text-black font-extralight border`}
							>
								<CardHeader>
									<CardTitle
										className={`capitalize text-xl align-baseline   ${
											chat.role == "bot"
												? "text-[#ccff00]"
												: "text-primary"
										} `}
									>
										<Avatar className="inline-block mr-5 align">
											<AvatarImage
												src={
													chat.role == "user"
														? "https://github.com/shadcn.png"
														: "https://i.pinimg.com/564x/02/c5/a8/02c5a82909a225411008d772ee6b7d62.jpg"
												}
												alt="@shadcn"
											/>
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
										{chat.role}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<Markdown>{chat.text}</Markdown>
								</CardContent>
							</Card>
						</>
					);
				})}
			</div>

			<div className="flex flex-col md:flex-row h-fit items-start justify-center w-full mx-auto max-w-3xl  px-5 pb-10">
				<Input
					type="name"
					placeholder="Enter The Misinformation!"
					className="sticky bottom-32 mt-4 md:bottom-10"
					ref={inputRef}
				/>{" "}
				<Button onClick={sendMessage} className=" mx-auto mt-5">
					Submit
				</Button>
			</div>
		</div>
	);
}
