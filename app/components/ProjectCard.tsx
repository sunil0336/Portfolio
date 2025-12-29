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
<div className="rounded-xl border p-5 shadow-sm hover:shadow-lg hover:-translate-y-[2px] transition">
      
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded mb-3"
        />
      )}

      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
        {description}
      </p>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2 mt-3">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-4">
        <a
          href={github}
          target="_blank"
          className="px-3 py-1 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          GitHub
        </a>

        {live && (
          <a
            href={live}
            target="_blank"
            className="px-3 py-1 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
