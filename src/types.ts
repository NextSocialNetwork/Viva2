export type Language = 'en' | 'ru' | 'es' | 'lt';

export interface Product {
  id: string;
  name: string;
  category: 'esim' | 'iphone' | 'samsung';
  tagline: string;
  price: number;
  monthlyPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  specs: {
    storage?: string;
    color?: string;
    screen?: string;
    network?: string;
    data?: string;
  };
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  planOption?: 'monthly' | 'outright';
}

export interface CityCoverage {
  city: string;
  state: string;
  latencyMs: number;
  uptimePercent: string;
  speedMbps: number;
  status: 'optimal' | 'ultra' | 'high';
  coordinates: [number, number]; // [x, y] percentage on map
}

export interface StateCoverage {
  code: string;
  name: string;
  coveragePercent: number;
  avgSpeedMbps: number;
  nodesCount: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  phoneModel: string;
  rating: number;
  date: string;
  avatar: string;
  comment: Record<Language, string>;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
