import React from "react";
import ScrollReveal from "./shared/ScrollReveal";
import { MapPin, ChevronRight } from "lucide-react";

const ExperienceSection = ({ darkMode, experiences }) => {
  return (
    <section id="experience" className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"} backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Professional Experience  
          </h2>
        </ScrollReveal>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={idx} delay={idx * 200}>
              <div className={`group p-10 rounded-2xl ${darkMode ? "bg-gray-900/50" : "bg-gray-50"} backdrop-blur-sm border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:border-blue-500/50 transition-all hover:shadow-2xl`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-110 transition-transform">
                      <exp.icon size={32} className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{exp.title}</h3>
                      <p className="text-blue-500 text-xl font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-gray-400 mt-4 md:mt-0 md:text-right">
                    <p className="flex items-center gap-2 md:justify-end mb-2">
                      <MapPin size={18} />
                      {exp.location}
                    </p>
                    <p className="text-sm bg-blue-500/20 px-4 py-2 rounded-lg inline-block">{exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 leading-relaxed">
                      <ChevronRight size={20} className="text-blue-500 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
