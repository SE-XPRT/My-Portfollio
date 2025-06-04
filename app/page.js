"use client";
import React, { useState, useEffect, memo } from "react";
import Image from "next/image";
import Header from "@/components/header";
import me from "./assets/me.png";
import jsImage from "./assets/js.png";
import mymoviz from "./assets/mymoviz.jpg";
import weatherapp from "./assets/weatherapp.jpg";
import solblaze from "./assets/solblaze.png";
import nextImage from "./assets/nextJS.png";
import reactImage from "./assets/React.png";
import tailwindImage from "./assets/tailwinds.png";
import mongoImage from "./assets/mongodb.png";
import nodeImage from "./assets/node.png";
import expressImage from "./assets/express.png";
import {
  SquareArrowOutUpRight,
  Mail,
  Github,
  Linkedin,
  Download,
  Code2,
  Sparkles,
  Rocket,
  Heart,
} from "lucide-react";

// Composants mémoïsés pour de meilleures performances
const SkillCard = memo(({ skill }) => (
  <div className="skill group">
    <div className="flex items-center justify-between">
      <div className="flex-1 mr-4">
        <span className="font-medium text-lg block mb-1">{skill.name}</span>
      </div>
      <Image
        src={skill.icon}
        width={32}
        height={32}
        alt={skill.name}
        className="transition-transform group-hover:scale-110 flex-shrink-0"
        loading="lazy"
      />
    </div>
  </div>
));

const ProjectCard = memo(({ project }) => (
  <div className="project-card hover-lift bg-[var(--SURFACE-LIGHT)] flex flex-col h-full">
    <div className="project-image relative h-48 md:h-56">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover rounded-t-lg"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={project.priority}
      />
      <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-t-lg" />
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-white/90 text-sm md:text-base">
          {project.description}
        </p>
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-between p-4 md:p-6 space-y-4">
      <p className="text-[var(--TEXT-SECONDARY)] text-sm md:text-base">
        {project.details}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn hover-lift w-full sm:w-auto justify-center bg-[var(--PRIMARY)] hover:bg-[var(--PRIMARY)]/90"
          data-tooltip="Voir le projet en ligne"
        >
          <SquareArrowOutUpRight size={20} /> Demo
        </a>
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline hover-lift w-full sm:w-auto justify-center"
            data-tooltip="Voir le code source"
          >
            <Code2 size={20} /> Code
          </a>
        )}
      </div>
    </div>
  </div>
));

export default function Home() {
  const [name, setName] = useState("Se-Digitals");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setName((prev) => (prev === "Se-Digitals" ? "Dev Web" : "Se-Digitals"));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const preloadImages = async () => {
      const imageUrls = [
        me.src,
        jsImage.src,
        mymoviz.src,
        weatherapp.src,
        solblaze.src,
        nextImage.src,
        reactImage.src,
        tailwindImage.src,
        mongoImage.src,
        nodeImage.src,
        expressImage.src,
      ];

      await Promise.all(imageUrls.map((url) => fetch(url, { method: "HEAD" })));
    };

    preloadImages().catch(console.error);
  }, []);

  // Données des projets
  const projects = [
    {
      title: "SOL BLAZE",
      description: "Application burner & instant buy de crypto-monnaies",
      image: solblaze,
      details:
        "Application web3 burner & instant buy de crypto-monnaies. Utilise Next.js, Tailwind CSS, Solana.",
      demoUrl: "https://solblaze.space",
      priority: true,
    },
    {
      title: "My Moviz",
      description: "Application de gestion de films et séries",
      image: mymoviz,
      details:
        "Application complète avec authentification, base de données et gestion de favoris. Développée avec React, Node.js et MongoDB.",
      demoUrl: "https://fron-tmoviz.vercel.app/",
      codeUrl: "https://github.com/SE-XPRT/FRONTmoviz",
      priority: true,
    },
    {
      title: "Weather App",
      description: "Application météo en temps réel",
      image: weatherapp,
      details:
        "Application météo avec géolocalisation, prévisions détaillées et historique. Utilise l'API OpenWeather Express JS.",
      demoUrl: "https://frontweatherapp.vercel.app/login.html",
      codeUrl: "https://github.com/SE-XPRT/Frontweatherapp",
      priority: true,
    },
  ];

  // Données des compétences
  const skills = [
    { name: "React", icon: reactImage },
    { name: "Next.js", icon: nextImage },
    { name: "Tailwind CSS", icon: tailwindImage },
    { name: "Node.js", icon: nodeImage },
    { name: "Express.js", icon: expressImage },
    { name: "MongoDB", icon: mongoImage },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--BACKGROUND)] to-[var(--SURFACE)]">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section - Optimisé */}
        <section
          id="home"
          className="relative hero-content flex flex-col justify-center"
        >
          <div className="container mx-auto relative w-full max-w-7xl px-4">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Contenu optimisé */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
                <h1 className="hero-title font-extrabold text-4xl md:text-6xl leading-tight mb-2">
                  <span className="block text-[var(--TEXT-SECONDARY)] text-2xl md:text-3xl mb-3 font-light">
                    Bonjour, je suis
                  </span>
                  <span className="gradient-text drop-shadow-lg">{name}</span>
                </h1>

                <p className="hero-subtitle text-[var(--TEXT-SECONDARY)] max-w-xl md:max-w-2xl text-lg md:text-2xl leading-relaxed font-medium">
                  Je crée des applications web modernes et performantes, en
                  transformant vos idées en expériences numériques
                  exceptionnelles.
                </p>

                <div className="hero-buttons flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
                  <a
                    href="#projects"
                    className="hero-button inline-flex items-center justify-center bg-[var(--PRIMARY)] text-white rounded-lg hover:bg-[var(--PRIMARY)]/90 transition-colors group text-lg md:text-xl font-semibold px-6 py-3 shadow-md"
                  >
                    <Rocket
                      size={22}
                      className="mr-2 group-hover:rotate-12 transition-transform"
                    />
                    Voir mes projets
                  </a>
                  <a
                    href="#contact"
                    className="hero-button inline-flex items-center justify-center border border-[var(--PRIMARY)] text-[var(--PRIMARY)] rounded-lg hover:bg-[var(--PRIMARY)]/5 transition-colors group text-lg md:text-xl font-semibold px-6 py-3 shadow-md"
                  >
                    <Mail
                      size={22}
                      className="mr-2 group-hover:rotate-12 transition-transform"
                    />
                    Contactez-moi
                  </a>
                </div>

                <div className="hero-social flex items-center gap-8 mt-4">
                  <a
                    href="https://github.com/SE-XPRT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--TEXT-SECONDARY)] hover:text-[var(--PRIMARY)] transition-colors"
                  >
                    <Github size={28} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/imad-meknani-2848a922b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--TEXT-SECONDARY)] hover:text-[var(--PRIMARY)] transition-colors"
                  >
                    <Linkedin size={28} />
                  </a>
                  <a
                    href="mailto:se-digitals@outlook.fr"
                    className="text-[var(--TEXT-SECONDARY)] hover:text-[var(--PRIMARY)] transition-colors"
                  >
                    <Mail size={28} />
                  </a>
                </div>
              </div>
              {/* Right Column - Decorative Element */}
              <div className="hidden md:block relative w-full">
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--PRIMARY)]/20 to-[var(--SECONDARY)]/20 rounded-2xl transform rotate-3" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--PRIMARY)]/10 to-[var(--SECONDARY)]/10 rounded-2xl transform -rotate-3" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 size={140} className="text-[var(--PRIMARY)]/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bentoGrid">
          {/* À propos */}
          <section id="about" className="box one glass fade-in">
            <div className="box-content">
              <div className="box-header">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
                  <Image
                    src={me}
                    alt="Profile"
                    className="rounded-full object-cover border-4 border-[var(--PRIMARY)] shadow-lg"
                    fill
                    priority
                    loading="eager"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[var(--PRIMARY)] p-2 rounded-full">
                    <Code2 className="text-white" size={24} />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text text-center">
                  À propos de moi
                </h2>
              </div>
              <div className="box-body">
                <p className="text-center leading-relaxed text-[var(--TEXT-SECONDARY)] text-balance">
                  Développeur web Full Stack passionné, j’accompagne les
                  entreprises dans la conception et la réalisation
                  d’applications web innovantes, performantes et évolutives. Mon
                  expertise technique et mon sens du détail me permettent de
                  transformer chaque idée en une expérience utilisateur fluide,
                  moderne et impactante.
                </p>
              </div>
            </div>
          </section>
          {/* Compétences */}
          <section id="skills" className="box two glass fade-in">
            <div className="box-content">
              <div className="box-header">
                <h2 className="titlebox">Compétences</h2>
              </div>
              <div className="box-body">
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* Projets */}
          <section id="projects" className="box three glass fade-in">
            <div className="box-content overflow">
              <div className="box-header">
                <h2 className="titlebox flex items-center gap-2">
                  <Code2 size={24} className="text-[var(--PRIMARY)]" />
                  Projets
                </h2>
              </div>
              <div className="box-body ">
                {/* Ajout d'un conteneur scrollable horizontal */}
                <div
                  className="w-full overflow-x-auto  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-500 [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-lg"
                >
                  <div className="flex flex-row gap-6 min-w-[600px]">
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className="min-w-[320px] max-w-xs flex-shrink-0"
                      >
                        <ProjectCard project={project} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="box five glass fade-in">
            <div className="box-content">
              <div className="box-header">
                <h2 className="titlebox flex items-center gap-2">
                  <Mail size={24} className="text-[var(--PRIMARY)]" />
                  Contact
                </h2>
              </div>
              <div className="box-body">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="mailto:se-digitals@outlook.fr"
                    className="group flex items-center gap-3 p-4 bg-[var(--SURFACE-LIGHT)] rounded-lg hover:bg-[var(--PRIMARY)] transition-all hover-lift"
                    data-tooltip="Cliquez pour m'envoyer un email"
                  >
                    <div className="p-2 bg-[var(--PRIMARY)]/10 rounded-lg group-hover:bg-white/10">
                      <Mail
                        size={24}
                        className="text-[var(--PRIMARY)] group-hover:text-white"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[var(--TEXT-SECONDARY)] group-hover:text-white/80">
                        Email
                      </p>
                      <p className="truncate font-medium">
                        se-digitals@outlook.fr
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/SE-XPRT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 bg-[var(--SURFACE-LIGHT)] rounded-lg hover:bg-[var(--PRIMARY)] transition-all hover-lift"
                    data-tooltip="Visitez mon GitHub"
                  >
                    <div className="p-2 bg-[var(--PRIMARY)]/10 rounded-lg group-hover:bg-white/10">
                      <Github
                        size={24}
                        className="text-[var(--PRIMARY)] group-hover:text-white"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[var(--TEXT-SECONDARY)] group-hover:text-white/80">
                        GitHub
                      </p>
                      <p className="truncate font-medium">github.com/SE-XPRT</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/imad-meknani-2848a922b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 bg-[var(--SURFACE-LIGHT)] rounded-lg hover:bg-[var(--PRIMARY)] transition-all hover-lift sm:col-span-2"
                    data-tooltip="Connectons-nous sur LinkedIn"
                  >
                    <div className="p-2 bg-[var(--PRIMARY)]/10 rounded-lg group-hover:bg-white/10">
                      <Linkedin
                        size={24}
                        className="text-[var(--PRIMARY)] group-hover:text-white"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[var(--TEXT-SECONDARY)] group-hover:text-white/80">
                        LinkedIn
                      </p>
                      <p className="truncate font-medium">
                        linkedin.com/in/imad-meknani
                      </p>
                    </div>
                  </a>
                </div>

                <div className="flex justify-center">
                  <a
                    href="/IMADMEKNANI-CV.pdf"
                    download="IMADMEKNANI-CV.pdf"
                    className="btn w-full max-w-md justify-center hover-lift bg-[var(--PRIMARY)] hover:bg-[var(--PRIMARY)]/90 flex items-center gap-2"
                    data-tooltip="Télécharger mon CV"
                  >
                    <Download size={20} />
                    <span>Télécharger mon CV</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Formation */}
          <section className="box six glass fade-in">
            <div className="box-content">
              <div className="box-header">
                <h2 className="titlebox">Formation</h2>
              </div>
              <div className="box-body">
                <div className="p-4 bg-[var(--SURFACE-LIGHT)] rounded-lg hover:bg-[var(--SURFACE)] transition-colors hover-lift">
                  <h3 className="text-xl font-bold mb-2 gradient-text">
                    Développeur Web
                  </h3>
                  <p className="text-[var(--PRIMARY)] mb-1">
                    Bootcamp de Développement Web
                  </p>
                  <p className="text-sm text-[var(--TEXT-SECONDARY)]">2025</p>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--TEXT-SECONDARY)]">
                    <li>• React & Next.js</li>
                    <li>• Node.js & Express</li>
                    <li>• MongoDB</li>
                    <li>• UI/UX Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* Soft Skills */}
          <section className="box seven glass fade-in">
            <div className="box-content">
              <div className="box-header">
                <h2 className="titlebox flex items-center gap-2 mb-3">
                  <Heart size={24} className="text-[var(--SECONDARY)]" />
                  Soft Skills
                </h2>
              </div>
              <div className="box-body">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 ">
                  {[
                    {
                      skill: "Travail d'équipe",
                      emoji: "👥",
                      desc: "Collaboration efficace",
                    },
                    {
                      skill: "Communication",
                      emoji: "💬",
                      desc: "Échange clair",
                    },
                    { skill: "Adaptabilité", emoji: "🔄", desc: "Flexibilité" },
                    {
                      skill: "Résolution",
                      emoji: "🔧",
                      desc: "Problèmes complexes",
                    },
                    {
                      skill: "Créativité",
                      emoji: "💡",
                      desc: "Solutions innovantes",
                    },
                    {
                      skill: "Organisation",
                      emoji: "📋",
                      desc: "Gestion efficace",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group p-2 bg-[var(--SURFACE-LIGHT)] rounded-lg hover:bg-[var(--PRIMARY)] transition-all hover-lift cursor-pointer"
                      data-tooltip={`${item.skill}: ${item.desc}`}
                    >
                      <div className="flex flex-col items-center text-center w-full">
                        <span className="text-4xl mb-0.5 transform group-hover:scale-110 transition-transform">
                          {item.emoji}
                        </span>
                        <div>
                          <p className="font-medium text-xl">{item.skill}</p>
                          <p className=" text-lg text-[10px] text-[var(--TEXT-SECONDARY)] group-hover:text-white/80">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
