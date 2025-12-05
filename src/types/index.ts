// Add this to your existing types file
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  impact: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'business-tools' | 'ecommerce' | 'management' | 'other';
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}