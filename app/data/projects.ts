
export type Project = {
    title : string;
    description : string;
    techStack : string[];
    github : string;
    live? : string;
    imageUrl? : string;
};

export const projects: Project[] = [
  {
    title: "CineConnect",
    description: "A movie review platform with user roles and ratings.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/yourname/cineconnect",
    live : "https://projectmanagementtool.com",
    imageUrl : "/projects/image.png"
  },
  {
    title: "Password Manager",
    description: "Secure password manager with encryption.",
    techStack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourname/password-manager",
    live : "https://passwordmanager.com",
    imageUrl : "/projects/image.png"
  },
];
