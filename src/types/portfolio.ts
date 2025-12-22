/**
 * Portfolio TypeScript Types
 * Centralizes all portfolio-related interfaces for reuse across components.
 */

/** Represents a social media or contact link. */
export interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "email" | "website";
  url: string;
  label?: string;
}

/** Represents a link associated with a project. */
export interface ProjectLink {
  label: string;
  url: string;
}

/** Represents a portfolio project. */
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  links?: ProjectLink[];
  featured?: boolean;
}

/** Represents a work experience entry. */
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  highlights: string[];
  logoUrl?: string;
}

/** Represents the complete portfolio data structure. */
export interface PortfolioData {
  name: string;
  tagline: string;
  bio: string;
  bannerText?: string;
  socials: SocialLink[];
  projects: Project[];
  experience: Experience[];
}

