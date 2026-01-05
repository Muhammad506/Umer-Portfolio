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
      icon: <FaLaptopCode className="text-secondary text-2xl" />,
      title: "Frontend Development",
      desc: "I build responsive, modern, and user-friendly web applications that perform smoothly across devices.",
      count: "Delivered 10+ frontend projects",
    },
    {
      icon: <FaPencilRuler className="text-secondary text-2xl" />,
      title: "UI/UX Implementation",
      desc: "Turning design ideas into clean, functional interfaces with attention to detail and usability.",
      count: "Worked with startups & businesses",
    },
    {
      icon: <FaMobileAlt className="text-secondary text-2xl" />,
      title: "Responsive Design",
      desc: "Ensuring websites look and work perfectly on desktops, tablets, and mobile screens.",
      count: "Optimized multiple live platforms",
    },
    {
      icon: <FaRocket className="text-secondary text-2xl" />,
      title: "Performance Optimization",
      desc: "Improving load speed, accessibility, and SEO readiness for scalable, high-performance apps.",
      count: "Boosted performance scores for projects",
    },
  ];

  return (
    <section className="py-20">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 shadow-[0_0_20px_#c264fa] w-fit px-4 py-1 rounded-full">
        <FaLayerGroup /> Services
      </h2>

      <h2 className="md:text-5xl text-7xl mb-6 font-semibold">
        My <span className="text-secondary">Specializations</span>
      </h2>

      <p className="text-gray-400 max-w-2xl text-lg mt-4 mb-8">
        I specialize in crafting fast, scalable, and user-focused web solutions
        for startups and growing businesses. Here’s what I can help you with:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((srv, i) => (
          <div key={i} className="relative group">
            {/* 🧊 CARD */}
            <div
              className="
                relative p-6 rounded-xl h-full shadow-lg transition-all duration-300
                bg-white/5 backdrop-blur-sm border border-white/10
                hover:border-secondary/50 hover:shadow-xl hover:scale-[1.03]
                overflow-hidden
              "
            >
              {/* subtle glow */}
              <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-[0.04] blur-xl transition-opacity duration-500 z-0" />

              {/* content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-xl">{srv.title}</h3>
                  <div className="text-secondary p-3 rounded-full bg-white/10 backdrop-blur-sm">
                    {React.cloneElement(srv.icon, {
                      className: "text-secondary text-2xl",
                    })}
                  </div>
                </div>

                <p className="text-gray-300 mb-3 text-base">{srv.desc}</p>

                <div className="flex items-center gap-2 text-sm text-gray-400 pt-2 border-t border-white/10">
                  <span className="text-secondary font-semibold">
                    {srv.count}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-400 max-w-2xl mt-12 text-lg mx-0 text-left">
        If you’re looking for a frontend developer who delivers clean,
        responsive, and optimized solutions, <strong>let’s connect.</strong>
      </p>
    </section>
  );
};

export default ServicesSection;
