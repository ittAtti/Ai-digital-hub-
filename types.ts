export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'eBook' | 'Prompt Pack' | 'Marketing Kit' | 'Template' | 'Audio';
  imageUrl: string;
  features: string[];
  aiGenerated: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML string
  date: string;
  author: string;
  imageUrl: string;
}

export enum AgentType {
  EBOOK = 'EBook Generator',
  PROMPT = 'Prompt Pack Maker',
  MARKETING = 'Marketing Kit Generator',
  TEMPLATE = 'Template Creator',
  SEO = 'SEO Content Engine'
}

export interface GeneratedProductDraft {
  title: string;
  description: string;
  price: number;
  features: string[];
  category: string;
  marketingCopy: string;
}