import React from "react";
import { FaBriefcase } from "react-icons/fa";

const ExperienceSection = () => {
  const education = [
    {
      period: "Expected Nov 2025",
      degree: "B.S. Computer Science",
      institution: "PMAS Arid Agricultural University",
      note: "Minors: Software Engineering, App Development, Artificial Intelligence",
    },
  ];

  const experiences = [
    {
      period: "Mar 2025 – Present",
      roles: [
        {
          title: "Frontend Web Developer & Team Lead",
          company: "EaseZen Solutions",
        },
      ],
    },
    {
      period: "May 2024 – Mar 2025",
      roles: [{ title: "Frontend Developer ", company: "Robx.ai" }],
    },
  ];

  return (
    <section className="py-20">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full">
        <FaBriefcase /> Resume
      </h2>

      <h2 className="text-5xl mb-6">
        Education & <span className="text-secondary">Experience</span>
      </h2>

      {/* Education */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Education</h3>
        <div className="border-l border-gray-700 pl-6 space-y-4">
          {education.map((edu, idx) => (
            <div key={idx}>
              <p className="text-secondary font-medium">{edu.period}</p>
              <h4 className="font-semibold">{edu.degree}</h4>
              <p className="text-gray-400 text-sm">{edu.institution}</p>
              {edu.note && (
                <p className="text-gray-500 text-sm mt-1">{edu.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Experience</h3>
        <div className="border-l border-gray-700 pl-6 space-y-8">
          {experiences.map((exp) => (
            <div key={exp.period}>
              <p className="text-secondary font-medium">{exp.period}</p>
              {exp.roles.map((role, i) => (
                <div key={i} className="mb-2">
                  <h3 className="font-semibold">{role.title}</h3>
                  <p className="text-gray-400 text-sm">{role.company}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
