import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  Zap,
  Code,
  Rocket,
  Github,
  Mail,
} from "lucide-react";
import ScrollReveal from "./shared/ScrollReveal";

const Hero = ({ handleResumeClick, handleNavClick, cv, profileImage }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-28 sm:pt-32 md:pt-36 relative"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Photo */}
          <ScrollReveal>
            <div className="flex justify-center md:justify-start">
              <div className="w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden bg-transparent transform hover:scale-105 transition-transform duration-500 shadow-2xl shadow-blue-500/50">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-contain object-center rounded-3xl bg-gray-950/30 p-3"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Main Title */}
            <ScrollReveal delay={100}>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                Khandokar Kamrul Hasan
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal delay={200}>
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-blue-500 to-teal-400">
                Software Engineer & AI/ML Enthusiast
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal delay={300}>
              <p className="text-lg text-gray-300 leading-relaxed">
                CSE Student at PCIU with
                <span className="text-blue-500 font-bold"> 3.98 CGPA</span> |
                <span className="text-yellow-500 font-bold"> 2★ CodeChef</span> |
                <span className="text-purple-500 font-bold"> 1000+ Codeforces</span>
                <br />
                Building scalable web applications with modern technologies
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal delay={400}>
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleResumeClick}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-500/50 px-6 py-3 font-semibold hover:bg-blue-500/10 transition-all"
                >
                  <ExternalLink size={20} />
                  <span>View Resume</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-purple-500/50 px-6 py-3 font-semibold hover:bg-purple-500/10 transition-all"
                >
                  <Mail size={20} />
                  <span>Get In Touch</span>
                </motion.a>
              </div>
            </ScrollReveal>

            {/* Resume Info */}
            <ScrollReveal delay={500}>
              <div className="text-sm text-gray-400 pt-2">
                <span className="font-medium text-gray-300">PDF</span>
                <span className="px-2">•</span>
                <span>~196 KB</span>
                <span className="px-2">•</span>
                <span>Last updated: May 2026</span>
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal delay={600}>
              <div className="flex gap-6 pt-6">
                <a
                  href="https://github.com/Kamrul785"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-blue-500 transition-all transform hover:scale-110 hover:rotate-12"
                >
                  <Github size={24} />
                </a>
                <a
                  href="mailto:kamrulkhan526785@gmail.com"
                  className="p-3 rounded-full bg-gray-800 hover:bg-blue-500 transition-all transform hover:scale-110 hover:rotate-12"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://codeforces.com/profile/Kamrul526785"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-blue-500 transition-all transform hover:scale-110 hover:rotate-12"
                >
                  <Code size={24} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.05))",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
        }}
      />
    </section>
  );
};

export default Hero;
