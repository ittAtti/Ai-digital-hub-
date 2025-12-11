import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedProductDraft, AgentType } from "../types";

// In a production environment, you should proxy these requests or use a build process (like Vite)
// to inject environment variables (e.g., import.meta.env.VITE_API_KEY).
// For this direct browser deployment, we use the key provided.
const apiKey = 'AIzaSyCJEXcnadtlMPDjZ3Ni_o-TxcQTOaaXciE'; 

const ai = new GoogleGenAI({ apiKey });

export const generateProductConcept = async (
  agentType: AgentType,
  topic: string
): Promise<GeneratedProductDraft | null> => {
  if (!apiKey) {
    console.error("API Key missing");
    throw new Error("API Key is missing.");
  }

  const modelId = "gemini-2.5-flash"; // Efficient for structured generation

  const prompt = `
    You are an expert digital product creator (Agent: ${agentType}).
    Create a highly profitable digital product concept about: "${topic}".
    
    Return a JSON object with:
    1. A catchy 'title'.
    2. A persuasive 'description' (2-3 sentences).
    3. A realistic 'price' (number).
    4. A list of 3-5 key 'features'.
    5. A 'category' (e.g., eBook, Template, etc.).
    6. A short 'marketingCopy' for social media.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            price: { type: Type.NUMBER },
            features: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            category: { type: Type.STRING },
            marketingCopy: { type: Type.STRING }
          },
          required: ["title", "description", "price", "features", "category", "marketingCopy"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as GeneratedProductDraft;

  } catch (error) {
    console.error("Gemini Generation Error:", error);
    return null;
  }
};