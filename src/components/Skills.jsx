import React, { useEffect, useState } from "react";
import {
  FaPython,
  FaJava,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiDjango,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiJinja,
  SiPostgresql,
} from "react-icons/si";

const skillGroups = [
  {
    groupName: "Programming Languages",
    skills: [
      { id: 1, name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { id: 2, name: "Java", icon: <FaJava className="text-red-600" /> },
      { id: 3, name: "C", icon: <span className="text-2xl font-mono text-blue-500">C</span> },
      { id: 4, name: "JavaScript", icon: <FaJsSquare className="text-yellow-300" /> },
      { id: 5, name: "SQL", icon: <span className="text-2xl font-bold text-white">SQL</span> }, // ✅ moved here
    ],
  },
  {
    groupName: "Markup & Styling",
    skills: [
      { id: 5, name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { id: 6, name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { id: 7, name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { id: 8, name: "Jinja", icon: <SiJinja className="text-orange-400" /> },
    ],
  },
  {
    groupName: "Frameworks & Libraries",
    skills: [
      { id: 9, name: "Django", icon: <SiDjango className="text-green-600" /> },
      { id: 10, name: "React", icon: <FaReact className="text-cyan-400" /> },
    ],
  },
  {
    groupName: "Databases",
    skills: [
      { id: 11, name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { id: 12, name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { id: 14, name: "PostgreSQL", icon: <SiPostgresql className="text-indigo-400" /> },
    ],
  },
];

function useFadeInOnScroll() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 100) setVisible(true);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible;
}

const Skills = () => {
  const visible = useFadeInOnScroll();

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white px-4 py-12 max-w-5xl mx-auto"
    >
      {/* ------- Professional, Centered Heading ------- */}
      {/* ---------- Replacing Skills Heading ---------- */}
<div className="flex items-center justify-center mb-12">
  {/* Left Gradient Bar */}
  <span className="h-1 w-12 bg-gradient-to-r from-blue-400 to-indigo-600 mr-3"></span>

  {/* Gradient Text Heading */}
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 uppercase tracking-wider">
    Skills
  </h2>

  {/* Right Gradient Bar */}
  <span className="h-1 w-12 bg-gradient-to-r from-blue-400 to-indigo-600 ml-3"></span>
</div>


      {/* ------- 2×2 Grid of Skill Groups ------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillGroups.map(({ groupName, skills }) => (
          <div key={groupName} className="mb-8">
            {/* Group Subheading */}
            <h3
              className="
                text-2xl 
                font-semibold 
                mb-4 
                border-l-4 
                border-blue-500 
                pl-4
                tracking-wide
                relative
                before:absolute 
                before:left-0 
                before:bottom-0 
                before:h-0.5 
                before:w-10 
                before:bg-gradient-to-r 
                before:from-blue-400 
                before:to-indigo-600
              "
            >
              {groupName}
            </h3>

            {/* Skill Icons Grid */}
            <div
              className={`grid grid-cols-3 sm:grid-cols-4 gap-4 transition-transform duration-600 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {skills.map(({ id, name, icon }) => (
                <div
                  key={id}
                  className="
                    flex flex-col items-center gap-1 
                    bg-gray-800 
                    rounded-md 
                    p-2 
                    shadow-md 
                    hover:shadow-blue-500 
                    hover:scale-105 
                    transition-transform 
                    duration-300 
                    cursor-default
                  "
                >
                  <div className="text-2xl">{icon}</div>
                  <span className="text-sm font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
