"use client";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

export default function AboutContent() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-12">

      {/* Page Title */}
      <Reveal>
        <h1 className="text-3xl font-bold">About Me</h1>
      </Reveal>

      {/* Intro */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Who I Am</h2>
        <Reveal>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I’m Sunil Rathod — a Full Stack Developer and M.Sc. Computer Science
          student at Fergusson College, Pune. I focus on building scalable and
          user-focused web applications using React, Next.js, Express.js and
          modern JavaScript technologies. I enjoy solving real-world problems,
          working with APIs, and writing clean, maintainable code.
        </p>
        </Reveal>
      </div>

      {/* Skills */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Skills & Tools</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Frontend</h3>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
              <li>React.js, Next.js, Tailwind CSS</li>
              <li>JavaScript, HTML, CSS</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">Backend & APIs</h3>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
              <li>Express.js, REST APIs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">Databases</h3>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
              <li>MySQL, MongoDB</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">Tools</h3>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
              <li>Git & GitHub, Postman</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Education</h2>

        <div className="relative border-l pl-6 space-y-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Dot */}
            <motion.span
              whileHover={{ scale: 1.2 }}
              className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-blue-500 border"
            />

            <h3 className="font-medium">
              M.Sc. Computer Science — Fergusson College, Pune
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {" "}
                (2024 — 2026)
              </span>
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Postgraduate specialization in advanced computing, software design,
              and modern web application development.
            </p>
          </motion.div>

          {/* Timeline Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative"
          >
            <motion.span
              whileHover={{ scale: 1.2 }}
              className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-blue-500 border"
            />

            <h3 className="font-medium">
              B.Sc. Computer Science — Fergusson College, Pune
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {" "}
                (2021 — 2024)
              </span>
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Completed foundation in computer science, problem-solving,
              programming fundamentals, and software engineering concepts.
            </p>
          </motion.div>

        </div>
      </div>

      <a
        href="https://drive.google.com/file/d/1YVfj7Rjf13dtsSzsl3OG42bLTKllHEPn/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 border rounded font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        Download Resume
      </a>


      {/* Currently Learning */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Currently Learning</h2>
        <p className="text-gray-700 dark:text-gray-300">
          TypeScript best practices, backend architecture, API security and
          scalable MERN + Next.js application design.
        </p>
      </div>
    </section>
  );
}