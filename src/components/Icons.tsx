import { Github, Linkedin, Twitter, Mail, Globe } from "lucide-react";

interface Props {
  name: string;
}

export function RenderIcon({ name }: Props) {
  switch (name.toLowerCase()) {
    case "github":
      return <Github />;
    case "linkedin":
      return <Linkedin />;
    case "twitter":
      return <Twitter />;
    case "email":
      return <Mail />;
    case "website":
      return <Globe />;
    case "react":
      return <ReactIcon />;
    default:
      return <div className="w-5 h-5">{name}</div>;
  }
}
