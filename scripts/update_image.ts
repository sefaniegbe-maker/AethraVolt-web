import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';
import Database from 'better-sqlite3';

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY is not set");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function main() {
  console.log("Generating image...");
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: {
        parts: [
          {
            text: 'A wide shot of an empty field with 15 to 20 units of commercial and industrial energy storage containers arranged neatly. The containers should be white or light grey, simple and elegant design, no logos. The setting is outdoors, daytime, clear sky. Photorealistic style.',
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

    let base64Image = '';
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        base64Image = part.inlineData.data;
        break;
      }
    }

    if (!base64Image) {
      console.error("No image generated");
      process.exit(1);
    }

    const imagePath = path.join(process.cwd(), 'public', 'images', 'case-storage.png');
    const dir = path.dirname(imagePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(imagePath, Buffer.from(base64Image, 'base64'));
    console.log(`Image saved to ${imagePath}`);

    // Update database
    const dbPath = path.join(process.cwd(), 'aethravolt.db');
    const db = new Database(dbPath);
    
    console.log("Updating database...");
    const stmt = db.prepare("UPDATE cases SET image_url = ? WHERE title LIKE '%光储一体化%'");
    const info = stmt.run('/images/case-storage.png');
    
    console.log(`Database updated: ${info.changes} rows changed.`);

  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

main();
