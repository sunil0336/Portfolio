"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section className="min-h-screen max-w-4xl mx-auto flex flex-col justify-center text-center space-y-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sunil Rathod
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Full Stack Developer
        </motion.h2>
        <motion.p
          className="text-md md:text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build scalable web applications using React, Next.js, Express.js, and MySQL.
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="px-6 py-2 border rounded">View Project</button>
          <button className="px-6 py-2 border rounded">Contact Me</button>
        </motion.div>
      </section>
    </>
  );
}
