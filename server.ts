import express from "express";
import { createServer as createViteServer } from "vite";
import db from "./server/db";
import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/admin/update-image", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "GEMINI_API_KEY or API_KEY not set" });
      }
      
      const ai = new GoogleGenAI({ apiKey });
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
      if (response.candidates && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            base64Image = part.inlineData.data;
            break;
          }
        }
      }

      if (!base64Image) {
        return res.status(500).json({ error: "No image generated" });
      }

      const imagePath = path.join(process.cwd(), 'public', 'images', 'case-storage.png');
      const dir = path.dirname(imagePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(imagePath, Buffer.from(base64Image, 'base64'));
      
      const stmt = db.prepare("UPDATE cases SET image_url = ? WHERE title LIKE '%光储一体化%'");
      const info = stmt.run('/images/case-storage.png');
      
      res.json({ success: true, changes: info.changes, path: '/images/case-storage.png' });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/products", (req, res) => {
    try {
      const { category } = req.query;
      let query = 'SELECT * FROM products';
      const params = [];
      
      if (category) {
        query += ' WHERE category = ?';
        params.push(category);
      }
      
      const products = db.prepare(query).all(...params);
      const parsedProducts = products.map((p: any) => ({
        ...p,
        features: JSON.parse(p.features || '[]'),
        specs: JSON.parse(p.specs || '{}')
      }));
      res.json(parsedProducts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get("/api/products/:id", (req, res) => {
    try {
      const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id) as any;
      if (product) {
        product.features = JSON.parse(product.features || '[]');
        product.specs = JSON.parse(product.specs || '{}');
        res.json(product);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get("/api/cases", (req, res) => {
    try {
      const { industry, year } = req.query;
      let query = 'SELECT * FROM cases WHERE 1=1';
      const params = [];

      if (industry) {
        query += ' AND industry = ?';
        params.push(industry);
      }
      if (year) {
        query += ' AND year = ?';
        params.push(year);
      }

      const cases = db.prepare(query).all(...params);
      const parsedCases = cases.map((c: any) => ({
        ...c,
        results: JSON.parse(c.results || '[]')
      }));
      res.json(parsedCases);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get("/api/cases/:id", (req, res) => {
    try {
      const caseItem = db.prepare('SELECT * FROM cases WHERE id = ?').get(req.params.id) as any;
      if (caseItem) {
        caseItem.results = JSON.parse(caseItem.results || '[]');
        res.json(caseItem);
      } else {
        res.status(404).json({ error: "Case not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.post("/api/contact", (req, res) => {
    try {
      const { name, phone, company, message } = req.body;
      if (!name || !phone || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      
      const insert = db.prepare('INSERT INTO messages (name, phone, company, message) VALUES (?, ?, ?, ?)');
      insert.run(name, phone, company || '', message);
      
      // In a real app, send email here
      console.log(`Email notification sent for message from ${name}`);
      
      res.json({ success: true, message: "Message received" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
