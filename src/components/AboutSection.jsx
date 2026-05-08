import React from "react";
import ScrollReveal from "./shared/ScrollReveal";
import {
  GraduationCap,
  Award,
  ChevronRight,
  Trophy,
  Star,
  ExternalLink,
} from "lucide-react";

const AboutSection = ({ darkMode, cpProfiles }) => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div
            className={`p-8 rounded-2xl mb-12 ${darkMode ? "bg-gray-900/50" : "bg-white shadow-xl"} backdrop-blur-sm border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I am Khandokar Kamrul Hasan, a Software Engineer specializing in
              React/Next.js and Python/Django, with a strong interest in AI and
              Machine Learning. I build production-quality web applications that
              combine modern user experiences with scalable backend systems and
              intelligent features.
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              My journey started with competitive programming and Data Structures
             & Algorithms, which gradually led me into full-stack development and AI-powered
              solutions. Some of my notable projects include <b>Krishok Bhai</b> - an
              AI-powered farming advisor, <b>PhiMart</b> - a full-stack e-commerce
              platform, <b>Tuition Hub</b> - a tutor-student marketplace, and an Event
              Management System built with Django.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I enjoy working on end-to-end systems, designing APIs, building
              responsive frontend experiences, and integrating machine learning
              models into real-world applications. Beyond development, I mentor
              fellow programmers, teach C++ fundamentals, and continuously
              explore AI, software engineering, and scalable product
              development.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={200}>
            <div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <GraduationCap className="text-blue-500" size={32} />
                </div>
                Education
              </h3>
              <div
                className={`p-8 rounded-2xl ${darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"} backdrop-blur-sm border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:border-blue-500/50 transition-all transform hover:scale-105`}
              >
                <h4 className="text-2xl font-bold mb-3">
                  B.Sc. in Computer Science and Engineering
                </h4>
                <p className="text-gray-500 mb-2 flex items-center gap-2">
                  <ChevronRight size={16} /> Port City International University
                  (PCIU)
                </p>
                <p className="text-gray-500 mb-4">Expected: September 2026</p>
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-bold text-xl mb-6">
                  CGPA: 3.98/4.00
                </div>
                <div className="mt-6">
                  <p className="font-semibold mb-3 text-lg">
                    Relevant Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures",
                      "Algorithms",
                      "OOP",
                      "Database Systems",
                      "Software Engineering",
                      "Operating Systems",
                      "Artificial Intelligence",
                      "Machine Learning",
                      "Digital Image Processing",
                      "Simulation and Modeling",
                    ].map((course, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-blue-500/20 rounded-lg text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                  <Award className="text-yellow-500" size={32} />
                </div>
                Leadership & Activities
              </h3>

              <div className="space-y-6">
                <div
                  className={`p-8 rounded-2xl ${darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"} backdrop-blur-sm border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:border-purple-500/50 transition-all transform hover:scale-105`}
                >
                  <h4 className="text-2xl font-bold mb-3">
                    Joint General Secretary
                  </h4>
                  <p className="text-gray-500 mb-4">
                    PCIU Computer Club - CP Wing (2024 - Present)
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <ChevronRight
                        size={20}
                        className="text-blue-500 mt-1 flex-shrink-0"
                      />
                      <span>Organize coding contests and workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight
                        size={20}
                        className="text-blue-500 mt-1 flex-shrink-0"
                      />
                      <span>Mentor junior programmers in problem-solving</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight
                        size={20}
                        className="text-blue-500 mt-1 flex-shrink-0"
                      />
                      <span>
                        Represent university in inter-university contests
                      </span>
                    </li>
                  </ul>
                </div>

                <div
                  className={`p-8 rounded-2xl ${darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"} backdrop-blur-sm border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:border-green-500/50 transition-all transform hover:scale-105`}
                >
                  <h4 className="text-2xl font-bold mb-3">
                    C++ Bootcamp Instructor
                  </h4>
                  <p className="text-gray-500 mb-4">2024 - Present</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <ChevronRight
                        size={20}
                        className="text-green-500 mt-1 flex-shrink-0"
                      />
                      <span>Teach C++ fundamentals and algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight
                        size={20}
                        className="text-green-500 mt-1 flex-shrink-0"
                      />
                      <span>Guide hands-on coding exercises</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Competitive Programming */}
        <div className="mt-16">
          <ScrollReveal>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 justify-center">
              <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-red-500/20">
                <Trophy className="text-yellow-500" size={32} />
              </div>
              Competitive Programming
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {cpProfiles.map((profile, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div
                  className={`group p-8 rounded-2xl transition-all hover:scale-105 ${darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"} backdrop-blur-sm border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:border-blue-500/50 relative overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-2xl font-bold">{profile.name}</h4>
                      <ExternalLink
                        size={24}
                        className="text-blue-500 group-hover:rotate-45 transition-transform"
                      />
                    </div>
                    <p className="text-gray-500 mb-4 text-lg">
                      @{profile.username}
                    </p>
                    <div className="flex items-center gap-3">
                      <Star className="text-yellow-500" size={28} />
                      <span
                        className={`text-3xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}
                      >
                        {profile.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <p className="text-center mt-8 text-xl text-gray-400">
              <span className="text-blue-500 font-bold">500+</span> problems
              solved across multiple online judges
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
