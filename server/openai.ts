import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || "sk-placeholder-key" 
});

interface ChatResponse {
  response: string;
}

export async function generateChatResponse(
  message: string,
  category: string,
  topic: string
): Promise<ChatResponse> {
  const systemPrompt = `You are Veda AI, an expert on Hindu scriptures, mythology, and knowledge. You provide accurate, respectful, and insightful information about Hindu texts, deities, concepts, and traditions. 
    
Current user has selected the category "${category}" and the topic "${topic}". Tailor your response to this specific topic, providing relevant details, stories, and wisdom from Hindu traditions.

Keep your responses informative, reverential, and accessible. Include relevant Sanskrit terms where appropriate (with translations). If asked about controversial topics, provide balanced, scholarly perspectives while respecting Hindu traditions.

If you don't know the answer, acknowledge that and suggest related topics you can discuss instead of fabricating information.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 800
    });

    return {
      response: response.choices[0].message.content || "I apologize, but I'm unable to provide a response at this moment."
    };
  } catch (error) {
    console.error("OpenAI API error:", error);
    return {
      response: "I apologize, but I'm experiencing technical difficulties at the moment. Please try again later."
    };
  }
}
