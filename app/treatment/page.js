"use client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64, fileToGenerativePart } from "../helpers/imageHelper";
import { useState } from "react";
import Markdown from "react-markdown";

export default function Scan() {
  const [image, setImage] = useState("");
  const [imageInlineData, setImageInlineData] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

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
  async function aiImageRun() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const result = await model.generateContent([
      "suggest me some generic medicines along with schedule based on the photo",
      imageInlineData,
    ]);
    const response = await result.response;
    const text = response.text();
    setResult(text);

    console.log(text);
  }

  const handleClick = () => {
    setLoading(true);
    aiImageRun();
    setLoading(false);
  };
  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <p className="text-white">Loading...</p>
        </div>
      )}
      <div className=" flex flex-col gap-10 ">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Scan Prescription
        </h1>
        <input
          type="file"
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          onChange={(e) => handleImageChange(e)}
        />
        <button
          className=" inline-flex items-center justify-center whitespace-nowrap rounded text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 max-w-xs bg-slate-200 text-black shadow hover:bg-slate-300 h-12 px-12 py-2"
          onClick={() => handleClick()}
        >
          Search
        </button>
      </div>
      <img src={image} style={{ width: "30%", marginTop: 30 }} />
      <Markdown className="m-4">{result}</Markdown>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[5%] md:top-auto md:bottom-[40%] md:right-[10%] h-20 w-20 md:h-40 md:w-40 rotate-12 block"
        fill="#ccff00"
        viewBox="0 0 256 256"
      >
        <path d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[8%] right-[40%] md:top-auto  md:bottom-[16%] md:right-[20%] h-20 w-20 md:h-40 md:w-40  -rotate-12  "
        fill="#fff"
        viewBox="0 0 256 256"
      >
        <path d="M212,152a12,12,0,1,1-12-12A12,12,0,0,1,212,152Zm-4.55,39.29A48.08,48.08,0,0,1,160,232H136a48.05,48.05,0,0,1-48-48V143.49A64,64,0,0,1,32,80V40A16,16,0,0,1,48,24H64a8,8,0,0,1,0,16H48V80a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V40H128a8,8,0,0,1,0-16h16a16,16,0,0,1,16,16V79.17c0,32.84-24.53,60.29-56,64.31V184a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM224,152a24,24,0,1,0-24,24A24,24,0,0,0,224,152Z"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[5%] right-[10%] md:bottom-[66%] md:right-[20%] h-20 w-20 md:h-40 md:w-40  -rotate-12  "
        fill="#ccff00"
        viewBox="0 0 256 256"
      >
        <path d="M216,88H168V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V88H40a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H88v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V168h48a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88Zm0,64H160a8,8,0,0,0-8,8v56H104V160a8,8,0,0,0-8-8H40V104H96a8,8,0,0,0,8-8V40h48V96a8,8,0,0,0,8,8h56Z"></path>
      </svg>
    </>
  );
}
