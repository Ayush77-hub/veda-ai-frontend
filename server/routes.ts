import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateChatResponse } from "./openai";
import { z } from "zod";

const chatRequestSchema = z.object({
  message: z.string().min(1, "Message is required"),
  category: z.string().min(1, "Category is required"),
  topic: z.string().min(1, "Topic is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      // Validate request
      const result = chatRequestSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid request",
          errors: result.error.format() 
        });
      }
      
      const { message, category, topic } = result.data;
      
      // Generate response from OpenAI
      const aiResponse = await generateChatResponse(message, category, topic);
      
      // Save message to storage (no user authentication for now)
      await storage.saveMessage({
        userId: 0, // Guest user
        message,
        response: aiResponse.response,
        category,
        topic
      });
      
      return res.status(200).json(aiResponse);
    } catch (error) {
      console.error("Error in chat endpoint:", error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
