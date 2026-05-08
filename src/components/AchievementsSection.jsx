import React from "react";
import ScrollReveal from "./shared/ScrollReveal";

const AchievementsSection = ({ darkMode, achievements }) => {
  return (
    <section id="achievements" className={`py-20 px-4 ${darkMode ? "bg-gray-900" : "bg-gray-50"} backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Achievements
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div
                className={`group p-8 rounded-2xl transition-all hover:scale-105 ${
                  darkMode ? "bg-gray-800/30" : "bg-white/30 shadow-lg"
                } backdrop-blur-sm border border-purple-500/30 relative overflow-hidden`}
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 p-3 mb-4 group-hover:scale-110 transition-transform`}>
                    <achievement.icon className="text-white w-full h-full" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 text-white">{achievement.title}</h3>

                  {/* Highlight badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-purple-500 text-white`}>
                    {achievement.highlight}
                  </div>

                  {/* Description */}
                  <p className={`${darkMode ? "text-gray-300" : "text-gray-200"} leading-relaxed`}>{achievement.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
