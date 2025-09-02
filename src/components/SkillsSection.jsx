import React from "react";
import { FaPencilRuler } from "react-icons/fa";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skills = [
    {
      name: "JavaScript",
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      level: 88,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Tailwind CSS",
      level: 92,
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },

    {
      name: "Git / GitHub",
      level: 95,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  return (
    <section className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full"
      >
        <FaPencilRuler /> Skills
      </motion.h2>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-5xl mb-8 font-bold"
      >
        My <span className="text-secondary">Skills</span>
      </motion.h2>

      <p className="text-gray-400 mb-12 max-w-2xl">
        Frontend-focused skills used to build fast, responsive, and
        user-friendly web apps.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="bg-[#1f1f1f] border border-zinc-700 rounded-xl p-6 shadow-lg hover:shadow-[#CE7BFF]/20 transition-all"
          >
            <div className="flex justify-center mb-4">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-14 h-14 object-contain"
              />
            </div>
            <p className="text-center font-semibold text-gray-300 mb-2">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="text-gray-400 mt-12 max-w-2xl">
        Always learning and refining—so every new project ships cleaner, faster,
        and smoother.
      </p>
    </section>
  );
};

export default SkillsSection;
