import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedProductDraft, AgentType } from "../types";

// The API key is injected automatically by vite config from process.env.API_KEY
const apiKey = process.env.API_KEY;

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

const getAgentPrompt = (agentType: AgentType, topic: string) => {
  switch (agentType) {
    case AgentType.EBOOK:
      return `
        You are an expert AI eBook Generator.
        Create a comprehensive eBook concept about: "${topic}".
        The product should be a high-value PDF guide.
        
        Focus on:
        - Deep industry insights
        - Actionable steps
        - Professional formatting implied in description
      `;
    case AgentType.PROMPT:
      return `
        You are an expert Prompt Engineer.
        Create a premium AI Prompt Pack about: "${topic}".
        This pack is for tools like MidJourney, ChatGPT, or Stable Diffusion.
        
        Focus on:
        - High-fidelity outputs
        - Copy-paste readyness
        - Variety of styles
      `;
    case AgentType.MARKETING:
      return `
        You are a Digital Marketing Specialist Agent.
        Create a complete Marketing Kit concept for: "${topic}".
        Includes social media templates, email sequences, and ad copy.
        
        Focus on:
        - Conversion rates
        - Viral potential
        - Time-saving for businesses
      `;
    case AgentType.TEMPLATE:
      return `
        You are a Productivity Systems Architect.
        Create a high-value digital template (Notion, Excel, or Planner) for: "${topic}".
        
        Focus on:
        - Organization and efficiency
        - Aesthetics
        - Ease of use
      `;
    case AgentType.SEO:
      return `
        You are an SEO Strategy Agent.
        Create an "SEO Content Bundle" product about: "${topic}".
        This digital product includes pre-written articles, keyword lists, and meta tag templates.
        
        Focus on:
        - Ranking potential
        - Niche authority
        - Traffic growth
      `;
    default:
      return `Create a digital product concept about: "${topic}"`;
  }
};

export const generateProductConcept = async (
  agentType: AgentType,
  topic: string
): Promise<GeneratedProductDraft | null> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing. Please add the API_KEY environment variable in your Netlify Site Settings.");
  }

  // Use Gemini 3 Flash Preview as the default for text tasks
  const modelId = "gemini-3-flash-preview"; 
  const specificInstruction = getAgentPrompt(agentType, topic);

  // Re-initialize AI client to ensure the most recent key is used
  const genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
    ${specificInstruction}
    
    Return a JSON object with:
    1. A catchy 'title'.
    2. A persuasive 'description' (2-3 sentences).
    3. A realistic 'price' (number between 9.99 and 99.99).
    4. A list of 3-5 key 'features'.
    5. A 'category' (Must be one of: 'eBook', 'Prompt Pack', 'Marketing Kit', 'Template', 'Audio').
    6. A short 'marketingCopy' for social media.
  `;

  try {
    const response = await genAI.models.generateContent({
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
    if (!text) {
      throw new Error("The AI model returned an empty response. Please try a different topic or refine your keywords.");
    }
    
    try {
      return JSON.parse(text) as GeneratedProductDraft;
    } catch (parseError) {
      console.error("JSON Parse Error:", text);
      throw new Error("Failed to process the AI response. The format was invalid. Please try again.");
    }

  } catch (error: any) {
    console.error("Gemini Generation Error:", error);
    throw new Error(error.message || "An unexpected error occurred while communicating with the AI service. Please check your connection and try again.");
  }
};