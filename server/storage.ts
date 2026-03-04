import { type InsertContactMessage, type ContactMessage } from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemoryStorage implements IStorage {
  private messages: ContactMessage[] = [];
  private id = 1;

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const newMessage: ContactMessage = {
      id: this.id++,
      ...message,
    };

    this.messages.push(newMessage);
    return newMessage;
  }
}

export const storage = new MemoryStorage();