import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
});

console.log("Starting...");

const response = await model.invoke("Say hi");

console.log(response.content);