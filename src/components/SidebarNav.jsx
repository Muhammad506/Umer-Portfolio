import { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaLayerGroup,
  FaPencilRuler,
  FaTh,
  FaCommentDots,  
  FaEnvelope,
} from "react-icons/fa";

const navItems = [
  { id: 1, icon: <FaHome />, label: "Home" },
  { id: 2, icon: <FaUser />, label: "About" },
  { id: 3, icon: <FaBriefcase />, label: "Resume" },
  { id: 4, icon: <FaLayerGroup />, label: "Services" },
  { id: 5, icon: <FaPencilRuler />, label: "Skills" },
  { id: 6, icon: <FaTh />, label: "Projects" },
  { id: 7, icon: <FaCommentDots />, label: "Testimonials" },
  { id: 8, icon: <FaEnvelope />, label: "Contact" },
];

const SidebarNav = () => {
  const [active, setActive] = useState(1);

  const handleClick = (item) => {
    setActive(item.id);
    document
      .getElementById(item.label.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const container = document.getElementById("scroll-container");

    const handleScroll = () => {
      let current = 0;

      for (const item of navItems) {
        const section = document.getElementById(item.label.toLowerCase());
        if (section && container) {
          const rect = section.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const offsetTop = rect.top - containerRect.top;

          if (offsetTop < 200 && offsetTop > -section.offsetHeight / 2) {
            current = item.id;
          }
        }
      }

      setActive(current);
    };

    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="flex flex-col items-center justify-start p-4 space-y-6">
      <div className="border border-gray-600 rounded-full p-3 flex flex-col items-center space-y-6 mt-4  shadow-[0_0_20px_#c264fa] ">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item)}
            className={`text-xl transition ${
              active === item.id
                ? "text-secondary scale-110"
                : "text-gray-400 hover:text-white"
            }`}
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default SidebarNav;
