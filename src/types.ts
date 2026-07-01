export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string; // Lucide icon identifier
  benefits: string[];
  techStack: string[];
  colorClass: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  techTags: string[];
  client: string;
  timeline: string;
  results: string[];
  liveUrl?: string;
  githubUrl?: string; // Showcase link or static repository pattern
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  image: string;
  bio: string;
  skills: string[];
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // "Full-time" | "Remote" | "Contract" etc.
  experience: string;
  salaryRange: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}
