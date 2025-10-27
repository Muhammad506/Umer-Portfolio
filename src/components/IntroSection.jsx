import React from "react";
import { FaHome } from "react-icons/fa";
import CountUp from "./animations/CountUp";

const IntroSection = () => {
  return (
    <section className="py-12">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full">
        <FaHome /> Intro
      </h2>

      <h1 className="text-3xl md:text-5xl mb-4 leading-14">
        <span className="text-5xl md:text-7xl">
          Hi, I'm <span className="text-secondary">Umer</span> Saleem <br />
        </span>
        FrontEnd Web Developer
      </h1>

      <div className="text-gray-400 flex flex-col gap-2 mb-32">
        <p>
          I’m a frontend developer with 1+ year of experience, focused on
          creating modern, responsive, and user-friendly web applications.
        </p>
        <p>
          I help businesses and teams bring their ideas to life through clean
          design, smooth interactions, and optimized performance.
        </p>
        <p>
          From landing pages to full web platforms, I make sure every project
          delivers a seamless and engaging user experience.
        </p>
      </div>

      <div className="flex gap-8">
        <div>
          <span className="text-secondary text-6xl flex items-center">
            <CountUp
              from={0}
              to={1}
              separator=","
              direction="up"
              duration={1}
              className="text-secondary text-6xl count-up-text"
            />
            +
          </span>
          <p className="text-3xl text-gray-400">Year of Experience</p>
        </div>
        <div>
          <span className="text-secondary text-6xl flex items-center">
            <CountUp
              from={0}
              to={20}
              separator=","
              direction="up"
              duration={1}
              className="text-secondary text-6xl count-up-text"
            />
            +
          </span>
          <p className="text-3xl text-gray-400">Projects Completed</p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
