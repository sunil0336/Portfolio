
export type Project = {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  live?: string;
  imageUrl: string; // REQUIRED, not optional
};

export const projects: Project[] = [
  {
    title: "Criticstaan",
    description: "A movie review platform with user roles and ratings.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/sunil0336/MovieBuffs",
    live : "https://criticstaan.vercel.app/",
    imageUrl: "/projects/HomeScreen.png"
  },
  {
    title: "Password Manager",
    description: "Secure password manager with encryption.",
    techStack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourname/password-manager",
    live : "https://passwordmanager.com",
    imageUrl: "/projects/HomeScreen.png"
  },
  {
    title: "Password Manager",
    description: "Secure password manager with encryption.",
    techStack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourname/password-manager",
    live : "https://passwordmanager.com",
    imageUrl: "/projects/HomeScreen.png"
  },
  {
    title: "Password Manager",
    description: "Secure password manager with encryption.",
    techStack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourname/password-manager",
    live : "https://passwordmanager.com",
    imageUrl: "/projects/HomeScreen.png"
  },
];
