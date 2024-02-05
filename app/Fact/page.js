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

export default function Fact() {
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const inputRef = useRef();
  const [chatHistory, setChatHistory] = useState([]);

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts:
          "You are HealthCheckBot, a healthcare expert designed to verify the accuracy of health-related information. When provided with a piece of information xyz, you will either confirm its accuracy by providing two supporting facts or identify it as misinformation with two to three valid reasons or facts explaining why it is incorrect. Your goal is to ensure users receive reliable and evidence-based information about health.",
      },
      {
        role: "model",
        parts: "Great to meet you. What would you like to know?",
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
  }

  return (
    <div className="bg-background text-foreground flex flex-col h-screen overflow-x-auto w-full">
      {/* Chat Messages */}
      <div className="flex flex-col items-start justify-start w-full max-w-3xl mx-auto px-5 gap-6 overflow-y-auto mt-10">
        Your chat history will appear
        {chatHistory.map((chat) => {
          return (
            <>
              <Card
                className={`w-full ${
                  chat.role == "bot" ? "border-red-500" : "border-primary"
                } `}
              >
                <CardHeader>
                  <CardTitle
                    className={`capitalize text-xl ${
                      chat.role == "bot" ? "text-red-500" : "text-primary"
                    } `}
                  >
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

      <div className="flex h-fit items-start justify-end w-full max-w-3xl mx-auto px-5 pb-10">
        <Input
          type="name"
          placeholder="Enter The Misinformation!"
          className="sticky bottom-32 mt-4 md:bottom-10"
          ref={inputRef}
        />{" "}
        <Button onClick={sendMessage} className="ml-4 mt-5">
          Submit
        </Button>
      </div>
    </div>
  );
}
