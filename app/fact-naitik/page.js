"use client";
import { Input } from "@/components/ui/input";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useRef, useState } from "react";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/firebase";
// Access your API key (see "Set up your API key" above)
const Page = () => {
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
      const userRef = doc(db, "users", getAuth().currentUser.uid);

      await updateDoc(
        userRef,
        {
          chat: arrayUnion(...chatHistory),
        },
        { merge: true }
      );

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
  }
  return (
    <>
      <Input type="text" ref={inputRef} />
      <button onClick={sendMessage}>CLCICKCKCK</button>
    </>
  );
};
export default Page;
