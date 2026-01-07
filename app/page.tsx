"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiTypescript } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[75vh] max-w-4xl mx-auto px-4 flex flex-col justify-center space-y-6">

      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Hi, I’m <span className="text-blue-600 dark:text-blue-400">Sunil Rathod</span>
        <br />
        <span className="opacity-90">Full Stack / MERN Developer</span>
      </h1>

      {/* 🔹 Strong light color + proper dark mode + smooth transition */}
      <p className="text-lg transition-colors">
        <Typewriter
          words={[
            "I build scalable and user-focused web applications.",
            "I work with React, Next.js, Express.js and MongoDB.",
            "I focus on clean code, performance, and usability."
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={35}
          delaySpeed={1400}
        />
      </p>

      <div className="flex flex-wrap gap-2 pt-1">
        {[
          { name: "React", icon: <FaReact size={16} /> },
          { name: "Next.js", icon: <SiNextdotjs size={15} /> },
          { name: "Express.js", icon: <SiExpress size={15} /> },
          { name: "Node.js", icon: <FaNodeJs size={16} /> },
          { name: "MongoDB", icon: <SiMongodb size={15} /> },
          { name: "TypeScript", icon: <SiTypescript size={15} /> },
        ].map((tech) => (
          <span
            key={tech.name}
            className="
              flex items-center gap-2
              px-3 py-1 text-sm rounded-full
              border border-gray-300 dark:border-gray-700
              bg-gray-100 text-gray-800
              dark:bg-gray-800 dark:text-gray-200
              transition-all duration-200
              hover:scale-[1.02] hover:shadow-sm
              dark:hover:shadow-[0_0_8px_rgba(255,255,255,0.08)]
            "
          >
            {tech.icon}
            {tech.name}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <Link
          href="/projects"
          className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          View Projects
        </Link>

        <Link
          href="/contact"
          className="px-5 py-2 rounded-full border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Contact Me
        </Link>

        <a
          href="https://drive.google.com/file/d/1YVfj7Rjf13dtsSzsl3OG42bLTKllHEPn/view?usp=drive_link"
          target="_blank"
          className="
            px-5 py-2 rounded-full
            border border-gray-300 dark:border-gray-700
            hover:bg-gray-100 dark:hover:bg-gray-800
            transition
          "
        >
          Resume
        </a>
      </div>
    </main>
  );
}
