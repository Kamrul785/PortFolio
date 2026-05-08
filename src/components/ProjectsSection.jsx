import React from "react";
import { Eye, Github, ExternalLink } from "lucide-react";
import ScrollReveal from "./shared/ScrollReveal";

const ProjectsSection = ({
  darkMode,
  projects,
  setSelectedProject,
  setModalOpen,
  projectFallbackImage,
}) => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </ScrollReveal>
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 120}>
              <div
                className={`group overflow-hidden rounded-3xl border shadow-2xl ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-white border-gray-200"
                } backdrop-blur-sm`}
              >
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="order-2 lg:order-1 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold tracking-[0.18em] uppercase ${
                            darkMode
                              ? "bg-gray-900/70 text-gray-300"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          Project {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`h-px flex-1 ${
                            darkMode ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        />
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-blue-500 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-6">
                        {project.description}
                      </p>

                      <div className="mb-6 flex items-center justify-between rounded-2xl border border-gray-700/40 bg-black/20 px-4 py-3 text-sm text-gray-400">
                        <span>Preview only</span>
                        <span className="rounded-full bg-blue-500/15 px-3 py-1 text-blue-300">
                          Full details inside modal
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} bg-opacity-20 border border-blue-500/30`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => {
                          setSelectedProject(project);
                          setModalOpen(true);
                        }}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-indigo-600 hover:bg-indigo-700 rounded-2xl transition-all transform hover:scale-[1.02] font-medium"
                      >
                        <Eye size={18} />
                        View Full Details
                      </button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-gray-700 rounded-2xl hover:bg-gray-600 transition-all transform hover:scale-[1.02] font-medium"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r ${project.color} rounded-2xl hover:shadow-lg transition-all transform hover:scale-[1.02] font-medium`}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  <div className="order-1 lg:order-2 relative min-h-[320px] lg:min-h-[420px] border-b lg:border-b-0 lg:border-l border-white/5 bg-gray-950/40 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                    />
                    <img
                      src={project.image || projectFallbackImage}
                      alt={`${project.title} screenshot preview`}
                      className="relative z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute left-5 top-5 z-30 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                      Screenshot Preview
                    </div>
                    <div className="absolute bottom-5 left-5 z-30 max-w-xs rounded-2xl bg-black/50 px-4 py-3 backdrop-blur-md">
                      <p className="text-sm text-white/90">
                        A visual snapshot of the project interface. Open the
                        modal for the full breakdown.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
