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
    <div className="w-full md:w-[320px] space-y-8 text-center border border-zinc-700 rounded-4xl p-6 relative">
      {/* Top Bar with Logo */}
      <div className="flex justify-center items-center px-1">
        <h1 className="text-white font-semibold text-[22px] flex items-center gap-1">
          FrontEnd Web Developer
        </h1>
      </div>

      {/* Profile Image */}
      <img
        src="/Portfolio.jpg"
        alt="Umer Profile"
        className="w-56 h-56 rounded-xl border border-gray-600 mx-auto object-cover"
      />

      {/* Info */}
      <div>
        <h2 className="text-white text-3xl font-medium"> Umer Saleem</h2>
        <p className="text-white text-sm"></p>
      </div>
      <p className="text-gray-500">© 2025 Umer. All Rights Reserved</p>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 mt-8">
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
            className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full text-gray-300 hover:text-[#CE7BFF] hover:border-[#CE7BFF] transition"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="w-full flex items-center justify-between mt-6 gap-2 relative overflow-hidden">
        {/* Talk Button */}
        <motion.button
          onClick={handleClick}
          animate={{ width: isHovered ? "48px" : "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="h-10 bg-secondary text-white font-semibold rounded-full overflow-hidden flex items-center justify-center"
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
          className="h-10 min-w-10 bg-[#CE7BFF] text-white font-semibold px-2 rounded-full overflow-hidden relative flex items-center justify-center"
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
