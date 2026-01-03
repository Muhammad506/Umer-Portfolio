import React from "react";
import { FaUser } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-20">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full  shadow-[0_0_20px_#c264fa]">
        <FaUser /> About
      </h2>

      <h2 className="text-5xl mb-2 leading-16">
        I don’t just code websites—I craft{" "}
        <span className="text-secondary">seamless user experiences</span>
      </h2>

      <div className="text-gray-400 flex flex-col gap-2 max-w-2xl mt-4">
        <p>
          A frontend developer with over 1 year of experience creating
          responsive and modern web applications.
        </p>
        <p>
          I’ve contributed to <b>10+ projects</b>, focusing on building fast,
          scalable, and user-friendly interfaces that bring ideas to life.
        </p>
        <p>
          I enjoy turning designs into smooth, interactive experiences that feel
          simple yet powerful for users.
        </p>
        <p>
          Whether it’s a landing page, dashboard, or complete web platform, I
          focus on performance, usability, and clean design to deliver results
          that make an impact.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
