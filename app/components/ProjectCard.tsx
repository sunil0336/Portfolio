"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  github: string;
  live?: string;
};

export default function ProjectCard({
  title,
  description,
  techStack,
  imageUrl,
  github,
  live,
}: ProjectCardProps) {
  return (
    <motion.div
      className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
        className="object-cover"
      />

      <div className="p-4 space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2 text-xs">
          {techStack.map((tech) => (
            <li key={tech} className="px-2 py-1 border rounded">
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline"
          >
            GitHub
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
