// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      id="hero"
      className=" pt-24 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center px-6 relative"
    >
      {/* Particles */}
      <Particles
        className="absolute inset-0 -z-10"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 150, links: { opacity: 1 } },
              push: { quantity: 4 },
            },
          },
          particles: {
            color: { value: ["#00fff7", "#ff00f7", "#3b82f6"] },
            links: {
              color: "#00fff7",
              distance: 200,
              enable: true,
              opacity: 0.6,
              width: 2,
            },
            move: {
              enable: true,
              speed: 2,
              outModes: { default: "bounce" },
              attract: { enable: true, rotateX: 600, rotateY: 1200 },
            },
            number: { value: 100, density: { enable: true, area: 900 } },
            opacity: {
              value: 0.8,
              anim: { enable: true, speed: 1, minimumValue: 0.4, sync: false },
            },
            shape: {
              type: ["circle", "star", "triangle"],
              options: { star: { sides: 5 } },
            },
            size: {
              value: { min: 4, max: 7 },
              animation: { enable: true, speed: 4, minimumValue: 3, sync: false },
            },
            shadow: {
              enable: true,
              color: "#00fff7",
              blur: 15,
              offset: { x: 0, y: 0 },
            },
          },
          detectRetina: true,
          background: { color: "#0a0a23" },
        }}
      />

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10 z-10">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6 md:w-1/2"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Hi, I'm Poornima<br />
            <span className="block text-white text-xl sm:text-2xl md:text-3xl mt-2">
  <Typewriter
    words={[
      "Backend Developer",
      "Backend with Django",
      "Frontend Designer",
    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</span>

          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto md:mx-0">
            I build modern web apps using Django, React, and REST APIs. Check out my projects and let's connect!
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="inline-block px-6 py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              View My Projects
            </ScrollLink>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/undraw_programmer_raqr.svg"
            alt="Hero"
            className="w-72 sm:w-96 md:w-full max-w-md rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
