import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import SidebarProfileCard from "./components/SidebarProfileCard";
import SidebarNav from "./components/SidebarNav";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      startEvent: "DOMContentLoaded",
      offset: 120,
      easing: "ease-in-out",
      delay: 0,
      debounceDelay: 50,
      throttleDelay: 99,
    });

    const container = document.getElementById("scroll-container");
    if (container) {
      container.addEventListener("scroll", AOS.refresh);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", AOS.refresh);
      }
    };
  }, []);

  return (
    <div className=" bg-primary text-white font-serif w-full md:h-screen overflow-hidden relative">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-20"
      >
        <source src="/new-bg.mp4" type="video/mp4" />
      </video>

      {/* Left Sidebar */}
      <aside
        data-aos="zoom-out"
        className="w-full md:fixed flex items-center md:top-1/2 md:-translate-y-1/2 md:left-0 md:w-[350px] p-4 z-20"
      >
        <SidebarProfileCard />
      </aside>

      {/* Right Sidebar */}
      <aside
        data-aos="zoom-out"
        className="hidden md:flex fixed top-1/2 right-4 -translate-y-1/2 z-20"
      >
        <SidebarNav />
      </aside>

      {/* Main Scrollable Content */}
      <main
        id="scroll-container"
        className="z-20 relative md:w-[50%] md:ml-[30%] md:h-screen overflow-y-scroll hide-scrollbar scroll-smooth px-4 py-12"
      >
        <section data-aos="fade-up" id="home">
          <IntroSection />
        </section>
        <section data-aos="zoom-in" id="about">
          <AboutSection />
        </section>
        <section data-aos="fade-up" id="resume">
          <ExperienceSection />
        </section>
        <section data-aos="fade-up" id="services">
          <ServicesSection />
        </section>
        <section data-aos="fade-left" id="skills">
          <SkillsSection />
        </section>
        <section data-aos="zoom-in" id="projects">
          <ProjectsSection />
        </section>
        <section data-aos="fade-up" id="testimonials">
          <TestimonialsSection />
        </section>

        <section data-aos="fade-up" id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
