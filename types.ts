
export interface AITool {
  id: string;
  name: string;
  logo: string;
  description: string;
  features: string[];
  bestFor: string;
  pricing: string;
  url: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum ModelName {
  FLASH = 'gemini-3-flash-preview',
  PRO = 'gemini-3-pro-preview'
}
