"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Détecter la section active
      const sections = ["home", "about", "skills", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Utilisation de requestAnimationFrame pour optimiser les performances
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Accueil", icon: "🏠" },
    { id: "about", label: "À propos", icon: "👤" },
    { id: "skills", label: "Compétences", icon: "💻" },
    { id: "projects", label: "Projets", icon: "🚀" },
    { id: "contact", label: "Contact", icon: "📧" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[var(--COLOR1)]/90 backdrop-blur-md shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="text-2xl font-bold gradient-text cursor-pointer hover:scale-105 transition-transform"
              onClick={() => scrollToSection("home")}
            >
              Se-Digitals
            </div>

            {/* Navigation Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300
                    ${
                      activeSection === item.id
                        ? "text-[var(--ACCENT)] scale-110"
                        : "text-gray-300 hover:text-white"
                    }`}
                >
                  <span className="absolute -left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </span>
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--ACCENT)] transform scale-x-100 transition-transform" />
                  )}
                </button>
              ))}
            </div>

            {/* Menu Mobile Button */}
            <button
              className="md:hidden w-10 h-10 relative focus:outline-none group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative flex overflow-hidden items-center justify-center w-full h-full transform transition-all duration-200">
                <div
                  className={`flex flex-col justify-between w-5 h-3 transform transition-all duration-300 origin-center overflow-hidden ${
                    isMenuOpen ? "translate-y-1.5" : ""
                  }`}
                >
                  <div
                    className={`bg-white h-0.5 w-5 transform transition-all duration-300 origin-left ${
                      isMenuOpen ? "rotate-45 translate-x-px" : ""
                    }`}
                  />
                  <div
                    className={`bg-white h-0.5 w-5 rounded transform transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <div
                    className={`bg-white h-0.5 w-5 transform transition-all duration-300 origin-left ${
                      isMenuOpen ? "-rotate-45 -translate-x-px" : ""
                    }`}
                  />
                </div>
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 min-h-screen bg-gradient-to-b from-[var(--COLOR1)] to-[var(--COLOR2)] backdrop-blur-lg md:hidden"
          >
            <div className="container mx-auto px-4 py-20">
              <nav className="flex flex-col items-center justify-center space-y-8">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    custom={i}
                    variants={itemVariants}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`group relative px-6 py-3 text-2xl font-light transition-all duration-300 hover:scale-110
                      ${
                        activeSection === item.id
                          ? "text-[var(--PRIMARY)]"
                          : "text-gray-300"
                      }`}
                  >
                    <span className="relative z-10 flex items-center gap-4">
                      <span className="text-2xl">{item.icon}</span>
                      {item.label}
                    </span>
                    {activeSection === item.id && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute inset-0 rounded-xl bg-[var(--PRIMARY)]/10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
