"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--COLOR1)]/90 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
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
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Menu Mobile */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--COLOR1)]/95 backdrop-blur-lg transition-all duration-300 md:hidden
          ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-2 text-xl font-medium transition-all duration-300 hover:scale-110
                ${
                  activeSection === item.id
                    ? "text-[var(--ACCENT)]"
                    : "text-gray-300 hover:text-white"
                }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
