import { GoogleGenAI } from "@google/genai";
import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

const db = new Database('aethravolt.db');

async function generateImages() {
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY or API_KEY not set");
    return;
  }
  
  const ai = new GoogleGenAI({ apiKey });
  
  const cases = db.prepare('SELECT id, title FROM cases').all() as any[];
  
  for (const c of cases) {
    console.log(`Generating image for: ${c.title}`);
    let prompt = '';
    if (c.title.includes('光储一体化')) {
      prompt = 'A high-tech industrial facility with modern solar panels on the roof and large commercial energy storage battery containers next to it. Clean, futuristic, photorealistic, daytime, clear sky.';
    } else if (c.title.includes('水蓄冷')) {
      prompt = 'A modern industrial cooling plant with large cylindrical water thermal storage tanks. High-tech environment, clean pipes, blue and silver metallic tones, photorealistic.';
    } else if (c.title.includes('污水处理')) {
      prompt = 'A modern eco-friendly wastewater treatment plant with solar panels installed over the water treatment pools. Clean, sustainable, high-tech, sunny day, photorealistic.';
    } else if (c.title.includes('光储充')) {
      prompt = 'A futuristic electric vehicle charging station with solar panel canopies and sleek energy storage battery units. Modern design, clean energy concept, photorealistic.';
    } else {
      prompt = 'A modern high-tech industrial facility with clean energy infrastructure. Photorealistic.';
    }

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: prompt,
        config: {
          imageConfig: {
            aspectRatio: "16:9"
          }
        },
      });

      let base64Image = '';
      if (response.candidates && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            base64Image = part.inlineData.data;
            break;
          }
        }
      }

      if (base64Image) {
        const filename = `case-${c.id}.png`;
        const imagePath = path.join(process.cwd(), 'public', 'images', filename);
        const dir = path.dirname(imagePath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(imagePath, Buffer.from(base64Image, 'base64'));
        
        const stmt = db.prepare("UPDATE cases SET image_url = ? WHERE id = ?");
        stmt.run(`/images/${filename}`, c.id);
        console.log(`Successfully updated image for case ${c.id}`);
      }
    } catch (e) {
      console.error(`Failed to generate image for case ${c.id}:`, e);
    }
  }

  console.log(`Generating image for About page`);
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: 'A modern high-tech factory interior with many commercial energy storage battery cabinets and an automated control room dashboard overlooking the facility. Clean, futuristic, photorealistic, blue and dark metallic tones.',
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      },
    });

    let base64Image = '';
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          base64Image = part.inlineData.data;
          break;
        }
      }
    }

    if (base64Image) {
      const imagePath = path.join(process.cwd(), 'public', 'images', 'about-factory.png');
      fs.writeFileSync(imagePath, Buffer.from(base64Image, 'base64'));
      console.log(`Successfully generated About image`);
    }
  } catch (e) {
    console.error(`Failed to generate About image:`, e);
  }
}

generateImages();
