import { FaGithub, FaEnvelope, FaLinkedin, FaClock } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { useState } from "react";

const SidebarProfileCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div
      className="w-full md:w-[320px] space-y-8 text-center p-8 relative
                   bg-white/5 backdrop-blur-md shadow-2xl border border-white/10
                   rounded-4xl"
    >
      {/* Top Bar with Logo */}
      <div className="flex justify-center items-center px-1">
        <h1 className="text-white font-semibold text-[20px] flex items-center gap-1">
          FrontEnd Web Developer
        </h1>
      </div>
      {/* Profile Image */}
      <img
        src="/Portfolio.jpg"
        alt="Umer Profile"
        className="w-48 h-48 rounded-3xl ring-1 ring-[#ce7bff]/50 p-0.5 mx-auto object-cover transition duration-300 hover:scale-[1.05]"
      />
      {/* Info */}
      <div className="pt-2">
        {" "}
        <h2 className="text-white text-3xl font-bold"> Umer Saleem</h2>
        <p className="text-secondary text-sm font-medium">
          Available for Projects
        </p>{" "}
      </div>
      <p className="text-gray-400 text-xs">© 2025 Umer. All Rights Reserved</p>{" "}
      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-8">
        {" "}
        {/* Increased gap */}
        {[
          {
            link: "mailto:muhammadumersaleem408@gmail.com?subject=Let’s Work Together&body=Hi Umer,",
            icon: <FaEnvelope />,
            label: "Email",
          },
          {
            link: "https://www.linkedin.com/in/muhammad-umer-saleem-077429322/",
            icon: <FaLinkedin />,
            label: "Linkedin",
          },
          {
            link: "https://github.com/Muhammad506",
            icon: <FaGithub />,
            label: "GitHub",
          },
        ].map(({ link, icon, label }, idx) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            title={label}
            className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-white/80 bg-white/5 backdrop-blur-sm hover:text-secondary hover:border-secondary hover:scale-110 transition duration-300"
          >
            {icon}
          </a>
        ))}
      </div>
      {/* CTA Button Group */}
      <div className="w-full flex items-center justify-between mt-6 gap-3 relative overflow-hidden">
        <motion.button
          onClick={handleClick}
          animate={{ width: isHovered ? "48px" : "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="h-12 bg-secondary text-white font-bold text-sm rounded-full overflow-hidden flex items-center justify-center shadow-lg hover:shadow-xl"
        >
          <div className="w-full h-full flex items-center justify-center gap-2">
            <motion.div
              initial={false}
              animate={{ opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`whitespace-nowrap flex items-center gap-2 ${
                !isHovered ? "block" : "hidden"
              }`}
            >
              <FaEnvelope size={20} /> Let's Talk!
            </motion.div>
            <motion.div
              initial={false}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`${isHovered ? "block" : "hidden"} absolute`}
            >
              <FaEnvelope size={20} />
            </motion.div>
          </div>
        </motion.button>
        {/* CV Button */}
        <motion.a
          href="/UmerResume.pdf"
          download="/UmerResume.pdf"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{ width: isHovered ? "100%" : "48px" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="h-12 min-w-12 bg-white/10 text-white font-bold text-sm rounded-full overflow-hidden relative flex items-center justify-center border border-white/30 hover:bg-white/20 shadow-lg hover:shadow-xl"
        >
          <div className="w-full h-full flex items-center justify-center gap-2">
            <motion.div
              initial={false}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`whitespace-nowrap flex items-center gap-2 ${
                isHovered ? "block" : "hidden"
              }`}
            >
              <PiReadCvLogoFill size={20} /> See my resume
            </motion.div>
            <motion.div
              initial={false}
              animate={{ opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`${!isHovered ? "block" : "hidden"} absolute`}
            >
              <PiReadCvLogoFill size={20} />
            </motion.div>
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default SidebarProfileCard;
