import { GoogleGenAI, Type } from "@google/genai";
import { EstimateResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSmartEstimate = async (problemDescription: string): Promise<EstimateResult> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert estimator for 'Khan Services', a handyman business in Pakistan. 
      The user has this problem: "${problemDescription}".
      
      Provide a rough estimate for this job.
      1. Price Range in PKR (Pakistani Rupees). Be realistic for the Pakistani market (e.g., small fix 500-1500 PKR, larger jobs more).
      2. Time Estimate.
      3. A brief technical suggestion or diagnosis.
      4. A polite WhatsApp message the user can copy/send to book the service.

      If the query is not related to home repair/handyman work, strictly return "N/A" for fields and a polite error message in suggestion.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            priceRange: { type: Type.STRING },
            timeEstimate: { type: Type.STRING },
            suggestion: { type: Type.STRING },
            whatsappMessage: { type: Type.STRING },
          },
          required: ["priceRange", "timeEstimate", "suggestion", "whatsappMessage"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as EstimateResult;
    }
    throw new Error("No response from AI");
  } catch (error) {
    console.error("Gemini Estimation Error:", error);
    return {
      priceRange: "Contact for Quote",
      timeEstimate: "Depends on inspection",
      suggestion: "We couldn't generate an automatic estimate. Please contact us directly.",
      whatsappMessage: `Hi Khan Services, I have an issue: ${problemDescription}. Can you give me a quote?`
    };
  }
};
