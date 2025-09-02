import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import {
  FaLaptopCode,
  FaPencilRuler,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-secondary text-xl" />,
      title: "Frontend Development",
      desc: "I build responsive, modern, and user-friendly web applications that perform smoothly across devices.",
      count: "Delivered 10+ frontend projects",
    },
    {
      icon: <FaPencilRuler className="text-secondary text-xl" />,
      title: "UI/UX Implementation",
      desc: "Turning design ideas into clean, functional interfaces with attention to detail and usability.",
      count: "Worked with startups & businesses",
    },
    {
      icon: <FaMobileAlt className="text-secondary text-xl" />,
      title: "Responsive Design",
      desc: "Ensuring websites look and work perfectly on desktops, tablets, and mobile screens.",
      count: "Optimized multiple live platforms",
    },
    {
      icon: <FaRocket className="text-secondary text-xl" />,
      title: "Performance Optimization",
      desc: "Improving load speed, accessibility, and SEO readiness for scalable, high-performance apps.",
      count: "Boosted performance scores for projects",
    },
  ];

  return (
    <section className="py-20">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full">
        <FaLayerGroup /> Services
      </h2>

      <h2 className="text-5xl mb-6">
        My <span className="text-secondary">Specializations</span>
      </h2>
      <p className="text-gray-400 flex flex-col gap-2 max-w-2xl my-2">
        I specialize in crafting fast, scalable, and user-focused web solutions
        for startups and growing businesses.
      </p>
      <p className="text-gray-400 flex flex-col gap-2 max-w-2xl mb-4">
        Here’s what I can help you with:
      </p>
      <div className="space-y-4">
        {services.map((srv, i) => (
          <div
            key={i}
            className="group relative border border-zinc-700 hover:border-[#CE7BFF] rounded-lg p-4"
          >
            <div className="absolute top-5 right-5 group-hover:scale-200 group-hover:top-1/2 group-hover:right-10 group-hover:-translate-y-1/2 transition-all">
              {srv.icon}
            </div>
            <h3 className="font-semibold text-lg">{srv.title}</h3>
            <p className="text-gray-400">{srv.desc}</p>
            <span className="text-xs text-gray-500 group-hover:font-semibold">
              {srv.count}
            </span>
          </div>
        ))}
      </div>
      <p className="text-gray-400 flex flex-col gap-2 max-w-2xl mt-4">
        If you’re looking for a frontend developer who delivers clean,
        responsive, and optimized solutions, let’s connect.
      </p>
    </section>
  );
};

export default ServicesSection;
