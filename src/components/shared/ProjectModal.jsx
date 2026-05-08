import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Star, CheckCircle, Target, ChevronRight, Rocket, ExternalLink, Github } from "lucide-react";

const ProjectModal = ({ selectedProject, modalOpen, setModalOpen, darkMode, projectFallbackImage }) => {
  if (!selectedProject) return null;

  return (
    <AnimatePresence>
      {modalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 bg-black/50 z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-4xl mx-auto px-4 max-h-[90vh] overflow-y-auto`}
          >
            <div className={`rounded-3xl ${darkMode ? "bg-gray-900" : "bg-white"} border ${darkMode ? "border-gray-700" : "border-gray-200"} p-8`}>
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-3">{selectedProject.title}</h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-4">{selectedProject.description}</p>
                </div>
                <button onClick={() => setModalOpen(false)} className={`p-2 rounded-lg ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}>
                  <X size={24} />
                </button>
              </div>

              <div className="mb-8 overflow-hidden rounded-2xl border border-gray-700/40 bg-gray-950/40">
                <div className="relative aspect-[16/9] w-full">
                  <img src={selectedProject.image || projectFallbackImage} alt={`${selectedProject.title} screenshot preview`} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute left-4 bottom-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">Screenshot Preview</div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${selectedProject.color} bg-opacity-20 border border-blue-500/30`}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Star size={24} className="text-blue-500" />Key Features</h3>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400"><CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" /><span>{feature}</span></li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Target size={24} className="text-orange-500" />Challenges Faced</h3>
                  <ul className="space-y-3">
                    {selectedProject.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400"><ChevronRight size={20} className="text-orange-500 mt-1 flex-shrink-0" /><span>{challenge}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Rocket size={24} className="text-purple-500" />Future Enhancements</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.futurePlans.map((plan, i) => (
                    <div key={i} className={`p-4 rounded-xl ${darkMode ? "bg-gray-800/50" : "bg-gray-50"} border ${darkMode ? "border-gray-700" : "border-gray-200"}`}><p className="text-gray-300">{plan}</p></div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t border-gray-700">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all transform hover:scale-105 font-semibold"><Github size={20} />View Code</a>
                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${selectedProject.color} rounded-xl hover:shadow-lg transition-all transform hover:scale-105 font-semibold`}><ExternalLink size={20} />Live Demo</a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
