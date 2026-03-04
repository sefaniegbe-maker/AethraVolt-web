import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateImage() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: {
        parts: [
          {
            text: 'AI能源中枢调度全景图。画面结构：中央是抽象的AI核心（能源大脑），外围环绕着工厂、园区、农场、风电、光伏等元素。它们之间通过发光的能量流线连接。整体风格科技感强，未来感，高质量，高分辨率',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: "1K"
        }
      },
    });
    
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        fs.writeFileSync('./public/ai-energy-hub.png', Buffer.from(base64EncodeString, 'base64'));
        console.log('Image generated successfully: /ai-energy-hub.png');
      }
    }
  } catch (err) {
    console.error(err);
  }
}

generateImage();
