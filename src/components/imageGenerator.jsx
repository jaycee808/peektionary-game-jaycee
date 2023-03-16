import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import ImagePrompt from "./ImagePrompt";
import apiKey  from "./API"

function ImageGenerator() {
  // prop form imageprompt.jsx
  const defaultPrompt = "<ImagePrompt />";
  const [prompt] = useState(defaultPrompt);
  const configuration = new Configuration({
    apiKey: apiKey,
  });

  const openai = new OpenAIApi(configuration);
  const [result, setResult] = useState("");

const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });

    setResult(res.data.data[0].url);
  };

  
  return (
    <div>
    <div id="button-bar">
    <button id="generateBtn" onClick={generateImage} className="text-2xl border-2 border-solid border-zinc-900 p-px bg-gray-300">generate</button>
    <button id="timer" onClick={generateImage} className="text-2xl border-2 border-solid border-zinc-900 p-px bg-gray-300">timer: time left</button>
    <button id="showHint" onClick={generateImage} className="text-2xl border-2 border-solid border-zinc-900 p-px bg-gray-300">show hint</button>
    <div id="button-bar-box" className="bg-teal-700 border-2 border-solid border-zinc-900"></div>
    </div>

    <div id="image-container" className=" app-main text-2xl border-2 border-solid border-zinc-900 max-w-xl flex justify-around p-px bg-gray-300">
          <img className="object-fill aspect-auto" src={result} alt="result" />
    </div>
    <div id="back-box-two" className="bg-blue-700 border-2 border-solid border-zinc-900"></div>
    </div>
  );
}

export default ImageGenerator;
