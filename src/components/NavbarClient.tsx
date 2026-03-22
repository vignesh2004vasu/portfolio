"use client";

import { useState, useEffect } from "react";

export function NavbarClient() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const isActive = (sectionId: string) =>
    activeSection === sectionId
      ? "text-emerald-400 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-emerald-400"
      : "text-zinc-400";

  return (
    <div className="hidden md:flex items-center gap-12 font-heading uppercase tracking-[0.05em] text-xs font-medium">
      <a
        className={`${isActive("about")} hover:text-emerald-300 transition-colors duration-300 ease-out`}
        href="#about"
      >
        About
      </a>
      <a
        className={`${isActive("education")} hover:text-emerald-300 transition-colors duration-300 ease-out`}
        href="#education"
      >
        Education
      </a>
      <a
        className={`${isActive("experience")} hover:text-emerald-300 transition-colors duration-300 ease-out`}
        href="#experience"
      >
        Experience
      </a>
      <a
        className={`${isActive("projects")} hover:text-emerald-300 transition-colors duration-300 ease-out`}
        href="#projects"
      >
        Projects
      </a>
      <a
        className={`${isActive("skills")} hover:text-emerald-300 transition-colors duration-300 ease-out`}
        href="#skills"
      >
        Skills
      </a>
      <a
        className={`${isActive("certifications")} hover:text-emerald-300 transition-colors duration-300 ease-out`}
        href="#certifications"
      >
        Certifications
      </a>
    </div>
  );
}
