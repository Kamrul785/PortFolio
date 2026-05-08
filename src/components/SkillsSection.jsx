import React from "react";
import ScrollReveal from "./shared/ScrollReveal";
import { Code } from "lucide-react";

const SkillsSection = ({ darkMode, skills }) => {
  return (
    <section id="skills" className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"} backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <ScrollReveal key={category} delay={idx * 100}>
              <div className={`p-8 rounded-2xl ${darkMode ? "bg-gray-900/50" : "bg-gray-50"} backdrop-blur-sm border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:border-blue-500/50 transition-all transform hover:scale-105 group`}>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <span key={i} className={`px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100 shadow"} transition-all hover:scale-110 cursor-default border ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
