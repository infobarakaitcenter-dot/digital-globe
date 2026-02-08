
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the "Digital Globe Print Expert," an AI assistant for a high-end printing company.
Digital Globe offers:
1. Digital Printing: Fast, good for small quantities (1-500), business cards, flyers.
2. Offset Printing: Best for large quantities (1000+), books, catalogs, highest color accuracy.
3. Sublimation: For fabrics, mugs, phone cases, polyester t-shirts. 
4. Large Format: Banners, signage, exhibition stands.

Help users decide which printing method they need based on their quantity, material, and speed requirements.
Keep answers concise, professional, and helpful. If you don't know something, suggest they contact our human team.
`;

export async function getPrintAdvice(userMessage: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request right now. Please try again or contact us directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI consultant is currently offline. Please reach out to our team at sales@digitalglobe.com.";
  }
}
