"use client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64,fileToGenerativePart } from "../helpers/imageHelper";
import { useState } from "react";
import Markdown from "react-markdown";


export default function Scan() {
  const [image, setImage] = useState("");
  const [imageInlineData,setImageInlineData]=useState("");
  const [result,setResult]=useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // getting base64 from file to render in DOM
    getBase64(file)
      .then((result) => {
        setImage(result);
      })
      .catch((e) => console.log(e));

    // generating content model for Gemini Google AI
    fileToGenerativePart(file).then((image) => {
      setImageInlineData(image);
    });
  };

  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  async function aiImageRun() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const result = await model.generateContent([
      "What's in this photo?",
      imageInlineData,
    ]);
    const response = await result.response;
    const text = response.text();
    setResult(text)
    
    console.log(text)
  }

  const handleClick = () => {
    aiImageRun();
  };
  return (
    <div>
      <div>
        <div style={{ display: "flex" }}>
          <input type="file" onChange={(e) => handleImageChange(e)} />
          <button style={{ marginLeft: "20px" }} onClick={() => handleClick()}>
            Search
          </button>
        </div>
        <img src={image} style={{ width: "30%", marginTop: 30 }} />
        <Markdown>{result}</Markdown>
      </div>
    </div>
  );
}
