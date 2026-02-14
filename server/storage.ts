import { users, type User, type InsertUser, chatMessages, type ChatMessage, type InsertMessage } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveMessage(message: InsertMessage): Promise<ChatMessage>;
  getMessagesByUser(userId: number): Promise<ChatMessage[]>;
  getMessagesByCategory(category: string): Promise<ChatMessage[]>;
  getMessagesByTopic(topic: string): Promise<ChatMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private messages: Map<number, ChatMessage>;
  private userIdCounter: number;
  private messageIdCounter: number;

  constructor() {
    this.users = new Map();
    this.messages = new Map();
    this.userIdCounter = 1;
    this.messageIdCounter = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveMessage(message: InsertMessage): Promise<ChatMessage> {
    const id = this.messageIdCounter++;
    const now = new Date();
    const chatMessage = {
      ...message,
      id,
      createdAt: now
    } as ChatMessage;
    this.messages.set(id, chatMessage);
    return chatMessage;
  }

  async getMessagesByUser(userId: number): Promise<ChatMessage[]> {
    return Array.from(this.messages.values()).filter(
      (message) => message.userId === userId,
    );
  }

  async getMessagesByCategory(category: string): Promise<ChatMessage[]> {
    return Array.from(this.messages.values()).filter(
      (message) => message.category === category,
    );
  }

  async getMessagesByTopic(topic: string): Promise<ChatMessage[]> {
    return Array.from(this.messages.values()).filter(
      (message) => message.topic === topic,
    );
  }
}

export const storage = new MemStorage();
