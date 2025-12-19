
import { GoogleGenAI } from "@google/genai";
import { ChatMessage, ModelName } from "../types";

const API_KEY = process.env.API_KEY || "";

export async function getAICounselorResponse(history: ChatMessage[], userMessage: string) {
  if (!API_KEY) {
    throw new Error("API Key is not configured.");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const model = ModelName.FLASH;

  const systemInstruction = `
    你是一个资深的 AI 编程软件专家和技术顾问。
    你的目标是帮助用户在众多 AI 编程工具中选择最适合他们的（例如 Cursor, GitHub Copilot, Windsurf, Trae, Baidu Comate, 通义灵码等）。
    
    你的知识包括：
    1. 各个工具的优缺点。
    2. 定价策略。
    3. 在不同编程语言和技术栈下的表现。
    4. 对不同人群（初学者、资深架构师、企业开发）的推荐理由。
    
    你的语气应该是客观、专业、热情且乐于助人的。尽量使用 Markdown 格式来增强可读性，例如使用加粗、列表。
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: [
        ...history.map(msg => ({ role: msg.role === 'assistant' ? 'model' : 'user', parts: [{ text: msg.content }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "抱歉，我无法生成回复。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "由于网络或配置问题，我暂时无法回答。请稍后再试。";
  }
}
