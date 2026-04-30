import 'dotenv/config';
import { ChatOpenAI } from "@langchain/openai";

const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
});

const res = await llm.invoke("Explain LLM vs Chat model");
console.log(res.content);