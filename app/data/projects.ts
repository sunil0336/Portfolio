
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
    title: "Personal Developer Portfolio",
    description:
      "A modern, responsive portfolio built with Next.js, TypeScript, Tailwind CSS, dark/light theme, animations, and SEO optimization.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Nodemailer",
      "Framer Motion"
    ],
    github: "https://github.com/sunil0336/Portfolio",
    live: "https://sunilrathod.vercel.app",
    imageUrl: "/projects/portfolio.png" // or your saved image
  },
  {
    title: "Criticstaan",
    description: "A movie review platform with user roles, ratings, and secure authentication.",
    techStack: ["React", "TailwindCSS", "Express", "MongoDB"],
    github: "https://github.com/sunil0336/MovieBuffs",
    live: "https://criticstaan.vercel.app/",
    imageUrl: "/projects/HomeScreen.png"
  },
  {
    title: "Password Manager",
    description: "A React and Tailwind CSS password manager that stores credentials in browser LocalStorage, featuring add/edit/delete functionality and a clean, responsive UI.",
    techStack: ["React", "TailwindCSS", "MongoDB"],
    github: "https://github.com/yourname/password-manager",
    live: undefined,
    imageUrl: "/projects/pwdmanager.png"
  },
  
];
