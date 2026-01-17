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
  <div
    className="
      group p-3
      relative overflow-hidden
      rounded-xl border
      bg-white dark:bg-gray-900
      border-gray-300 dark:border-gray-700

      shadow-sm
      hover:shadow-lg
      hover:border-blue-400 dark:hover:border-blue-500
      hover:scale-[1.01]
      hover:-translate-y-[3px]
      transition-all duration-300

      flex flex-col h-full   /* 🔹 Equal height */
    "
  >

    {imageUrl && (
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={350}
        className="w-full rounded-lg object-cover"
        loading="lazy"
      />
    )}

    <h3 className="font-semibold text-lg mt-2">{title}</h3>

    {/* 🔹 Clamp long descriptions so cards stay same height */}
    <p 
    title={description}
    className="text-sm text-gray-700 dark:text-gray-300 mt-1 line-clamp-3">
      {description}
    </p>

    <div className="flex flex-wrap gap-2 mt-3">
      {techStack.map((tech) => (
        <span
          key={tech}
          className="
            px-2.5 py-1 text-xs rounded-full
            border border-gray-300 dark:border-gray-700
            bg-gray-100 text-gray-800
            dark:bg-gray-800 dark:text-gray-200
          "
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex gap-3 pt-2 mt-auto">
      <a
        href={github}
        target="_blank"
        className="
          px-3 py-1.5 text-sm rounded-md
          border border-gray-300 dark:border-gray-700
          hover:bg-gray-100 dark:hover:bg-gray-800
          transition
        "
      >
        GitHub
      </a>

      {live && (
        <a
          href={live}
          target="_blank"
          className="
            px-3 py-1.5 text-sm rounded-md
            bg-blue-600 text-white
            hover:bg-blue-700
            dark:bg-blue-500 dark:hover:bg-blue-600
            transition
          "
        >
          Live Demo
        </a>
      )}
    </div>

    {/* Shine effect */}
    <span
      className="
        pointer-events-none
        absolute inset-0
        opacity-0
        group-hover:opacity-100
        transition-all duration-600 ease-out

        bg-gradient-to-r
        from-transparent via-white/25 to-transparent
        dark:via-white/10

        -translate-x-[140%]
        group-hover:translate-x-[140%]
      "
    ></span>

  </div>
);

}
