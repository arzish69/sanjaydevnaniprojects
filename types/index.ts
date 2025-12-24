export interface Project {
  id: string;
  slug: string;
  name: string;
  status: "ongoing" | "upcoming" | "completed";
  location: string;
  area: string; // e.g., "Chembur", "Bandra"
  tagline: string;
  description: string;
  bhkTypes: string[]; // e.g., ["1 BHK", "2 BHK", "3 BHK"]
  amenities: string[];
  highlights: string[];
  images: string[];
  featuredImage: string;
  reraNumber?: string;
  possession?: string;
  price?: string;
  metaTitle: string;
  metaDescription: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  metaTitle: string;
  metaDescription: string;
}

export interface SEOPage {
  title: string;
  description: string;
  h1: string;
  keywords: string[];
  canonicalUrl: string;
}
