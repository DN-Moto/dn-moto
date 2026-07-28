"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
  const handleScroll = () => {
    // Navbar background
    setScrolled(window.scrollY > 40);

    // Active section
    const sections = ["home", "about", "services", "projects"];
    let current = "home";

    for (const id of sections) {
      const section = document.getElementById(id);

      if (!section) continue;

      const rect = section.getBoundingClientRect();

      if (rect.top <= 150 && rect.bottom >= 150) {
        current = id;
        break;
      }
    }

    setActiveSection(current);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 z-50 flex w-full justify-center pt-6"
>
      <div
        className={`flex w-[92%] max-w-7xl items-center justify-between rounded-full border px-8 transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-black/70 py-3 shadow-2xl backdrop-blur-2xl"
            : "border-white/20 bg-black/20 py-5 backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
  className="text-2xl font-black tracking-[0.25em] text-white transition hover:text-blue-400"
>
  DN MOTO
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                className={`text-sm uppercase tracking-[0.18em] transition ${
                  activeSection === item.id
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-blue-400"
                }`}
              >
                {item.label}
              </a>

              {activeSection === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 h-[2px] w-full bg-blue-400 rounded-full"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}