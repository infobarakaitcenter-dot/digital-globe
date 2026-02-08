
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
