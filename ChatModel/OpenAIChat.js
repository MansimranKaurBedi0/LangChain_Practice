import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import { ChatOpenAI } from "@langchain/openai";

const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperatue: 0.9,
  maxTokens: 1000,
});

const res = await llm.invoke("Explain LLM vs Chat model");
console.log(res.content);
