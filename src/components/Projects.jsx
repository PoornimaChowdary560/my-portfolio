// src/components/Projects.js
import React from "react";
import { motion } from "framer-motion";
import {
  SiDjango,
  SiMysql,
  SiReact,
  SiPython,
  SiJinja,
} from "react-icons/si";

const techIconMap = {
  Django: <SiDjango className="text-green-400 text-xl" />,
  MySQL: <SiMysql className="text-blue-300 text-xl" />,
  React: <SiReact className="text-cyan-300 text-xl" />,
  Python: <SiPython className="text-yellow-300 text-xl" />,
  Jinja: <SiJinja className="text-orange-400 text-xl" />,
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PetPal Adoption",
      description:
        "A full-stack pet adoption platform built with Django, React, and MySQL. Features include pet listings, adoption requests, and dynamic messages display.",
      tech: ["Django", "Jinja", "MySQL"],
      repo: [
        { label: "GitHub Repo", url: "https://github.com/PoornimaChowdary560/petpal" },
      ],
      demo: "https://web-production-1928.up.railway.app/",
    },
    {
      id: 2,
      title: "AI Bias Detector",
      description:
        "An AI-powered tool that detects bias in datasets using React frontend and Django REST API backend.",
      tech: ["React", "Django", "Python", "MySQL", "DRF"],
      repo: [
        { label: "Frontend Repo", url: "https://github.com/PoornimaChowdary560/frontend" },
        { label: "Backend Repo", url: "https://github.com/PoornimaChowdary560/backend" },
      ],
      demo: "https://ai-bias-detector-flax.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-16 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        My Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
        {projects.map(({ id, title, description, tech, repo, demo }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-blue-500/30 transition-all"
          >
            <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
            <p className="mb-4 text-gray-300 text-sm">{description}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {tech.map((techItem, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {techIconMap[techItem] || null}
                  <span>{techItem}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-3">
              {repo.map(({ label, url }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline underline-offset-2 transition-all"
                >
                  {label}
                </motion.a>
              ))}
              {demo && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline underline-offset-2 transition-all"
                >
                  Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
