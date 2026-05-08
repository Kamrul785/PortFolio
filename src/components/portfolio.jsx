import React, { useState, useEffect } from "react";
import prfileimg from "../assets/Profile pic.jpeg";
import projectFallbackImage from "../assets/react.svg";
import cv from "../assets/Kamrul_Hasan_resume_.pdf";

import Particles from "./shared/Particles";
import StatCard from "./shared/StatCard";
import ProjectModal from "./shared/ProjectModal";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import AchievementsSection from "./AchievementsSection";
import ResearchSection from "./ResearchSection";
import ExperienceSection from "./ExperienceSection";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

import { projects, experiences, stats, skills, cpProfiles, navigation, socialLinks } from "../data/constants";
import { achievements } from "../data/achievements";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isManualClick, setIsManualClick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Skip auto-detection if user just clicked a nav item
      if (isManualClick) return;
      
      const sections = ["home", "about", "achievements", "skills", "projects", "research", "experience", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManualClick]);

  const handleNavClick = (e, sectionId) => {
    e?.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      setActiveSection(sectionId);
      setMenuOpen(false);
      setIsManualClick(true);

      // Use offset-based scroll so fixed navbar doesn't block target sections on mobile.
      const NAV_OFFSET = 96;
      const scrollToSection = () => {
        const top = section.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      };

      // Give the mobile menu a frame to close before scrolling.
      requestAnimationFrame(() => {
        setTimeout(scrollToSection, 80);
      });

      // Re-enable auto-detection after scroll completes
      setTimeout(() => setIsManualClick(false), 1000);
    }
  };

  const handleResumeClick = (e) => {
    e?.preventDefault();
    const url = cv;
    try {
      window.open(url, "_blank", "noopener,noreferrer");
      const a = document.createElement("a");
      a.href = url;
      a.download = "Khandokar_Kamrul_Hasan_CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch {
      window.location.href = url;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} relative overflow-hidden`}>
      <Particles />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        navigation={navigation}
        socialLinks={socialLinks}
        handleNavClick={handleNavClick}
      />

      <Hero handleResumeClick={handleResumeClick} handleNavClick={handleNavClick} cv={cv} profileImage={prfileimg} />

      <section className={`py-20 ${darkMode ? "bg-gray-800/50" : "bg-white"} backdrop-blur-sm relative`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <StatCard key={idx} stat={stat} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <AboutSection darkMode={darkMode} cpProfiles={cpProfiles} />

      <AchievementsSection darkMode={darkMode} achievements={achievements} />

      <SkillsSection darkMode={darkMode} skills={skills} />

      <ProjectsSection
        darkMode={darkMode}
        projects={projects}
        setSelectedProject={setSelectedProject}
        setModalOpen={setModalOpen}
        projectFallbackImage={projectFallbackImage}
      />

      <ResearchSection darkMode={darkMode} />

      <ExperienceSection darkMode={darkMode} experiences={experiences} />

      <ContactForm darkMode={darkMode} />

      <Footer darkMode={darkMode} />

      <ProjectModal
        selectedProject={selectedProject}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        darkMode={darkMode}
        projectFallbackImage={projectFallbackImage}
      />
    </div>
  );
};

export default Portfolio;
