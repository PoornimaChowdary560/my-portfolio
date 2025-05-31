// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";


const About = () => {
  return (
    <section id="about" className="bg-[#0a0a23] text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello! I'm <span className="text-blue-300 font-semibold">Poornima Maddipati</span>, a passionate
            and detail-oriented full-stack developer who enjoys building interactive and modern web
            applications. I love turning ideas into real products that solve real problems.
          </p>
          <p className="text-lg text-gray-400 mt-6">
            I specialize in React, Django, and REST APIs, with strong UI/UX sensibilities. I'm
            always learning and love to collaborate on meaningful projects.
          </p>
        </motion.div>

        {/* Image or Animation */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/undraw_web-development_0wdh.svg"
            alt="Developer Illustration"
            className="w-[300px] md:w-[400px] rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
