/** Represents a social media or contact link. */
export interface SocialLink {
  platform:
    | "github"
    | "linkedin"
    | "twitter"
    | "email"
    | "website"
    | "leetcode";
  url: string;
  label?: string;
}

/** Represents a link associated with a project. */
export interface ProjectLink {
  label: string;
  url: string;
}

/** Represents project metadata like timeline, role, team, and status. */
export interface ProjectMetadata {
  timeline?: string;
  role?: string;
  team?: string;
  status?: string;
}

/** Represents detailed project information sections. */
export interface ProjectDetails {
  overview?: string;
  whyBuilt?: string[];
  features?: string[];
  techStack?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    tools?: string[];
    other?: string[];
  };
  impact?: {
    users?: string;
    views?: string;
    metrics?: string;
    achievements?: string[];
  };
  futurePlans?: string[];
  challenges?: string[];
  solutions?: string[];
}

/** Represents a portfolio project. */
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  techStack: string[];
  links?: ProjectLink[];
  featured?: boolean;
  metadata?: ProjectMetadata;
  details?:
    | ProjectDetails
    | {
        features: string[];
      }[];
}

/** Represents a work experience entry. */
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  highlights: string[];
  logoUrl?: string;
  techStack?: string[];
  place?: string;
}

/** Represents a testimonial from a client or collaborator. */
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role?: string;
  avatarUrl?: string;
}

/** Represents a single writing entry. */
export interface Writing {
  id: string;
  title: string;
  date: string;
  coverImageUrl?: string;
  contentPath: string;
}

/** Represents the complete portfolio data structure. */
export interface PortfolioData {
  name: string;
  tagline: string;
  bio: string;
  bannerText?: string;
  socials: SocialLink[];
  projects?: Project[];
  experience?: Experience[];
  testimonials?: Testimonial[];
  writings?: Writing[];
}
