import { GoogleGenerativeAI } from "@google/generative-ai";

export const useGeminiAi = () => {
    const genAI = new GoogleGenerativeAI("AIzaSyDTsmtJdD1JyXlr6w6jUcp41KXVIBn8gz8");
    const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

    const generateContent = async (prompt: string) => {
        try {
            const result = await model.generateContent(prompt);
            return result.response.text();
        } catch (error) {
            console.error("Error generating content:", error);
            throw error;
        }
    }

    return { generateContent };
}
