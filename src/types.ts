export interface Review {
  id: string;
  name: string;
  role?: string;
  location?: string;
  rating: number;
  text: string;
  verified: boolean;
}

export interface Pillar {
  id: string;
  icon: 'brain' | 'heart' | 'eye' | 'leaf';
  title: string;
  description: string;
}

export interface Chapter {
  number: number;
  title: string;
  subtitle: string;
  excerpt: string;
  keyTakeaway: string;
}

export interface BookFeature {
  id: string;
  title: string;
  description: string;
}
