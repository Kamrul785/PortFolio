import React from "react";
import ScrollReveal from "./shared/ScrollReveal";
import { Code, Zap, Database, Wrench, CreditCard, Brain } from "lucide-react";

const skillIcons = {
  "Languages": Code,
  "Frontend": Zap,
  "Backend": Code,
  "Databases": Database,
  "AI/ML": Brain,
  "DevOps & Tools": Wrench,
  "Payment Integration": CreditCard,
  "Core": Code,
};

const SkillsSection = ({ darkMode, skills }) => {
  return (
    <section id="skills" className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"} backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], idx) => {
            const IconComponent = skillIcons[category] || Code;
            return (
              <ScrollReveal key={category} delay={idx * 100}>
                <div className={`p-8 rounded-2xl ${darkMode ? "bg-gray-900/50" : "bg-gray-50"} backdrop-blur-sm border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:border-blue-500/50 transition-all transform hover:scale-105 group`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span key={i} className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold ${darkMode ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-500/30" : "bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 border border-blue-200"} transition-all hover:scale-110 cursor-default`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
