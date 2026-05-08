import React from "react";
import ScrollReveal from "./shared/ScrollReveal";
import { Trophy, ExternalLink, Github } from "lucide-react";

const ResearchSection = ({ darkMode }) => {
  return (
    <section
      id="research"
      className={`py-20 px-4 ${darkMode ? "bg-gray-900" : "bg-gray-50"} backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Research & Publications
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div
            className={`p-8 rounded-2xl ${darkMode ? "bg-gray-800/50" : "bg-white"} backdrop-blur-sm border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500">
                <Trophy className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Interpretable Concept Bottleneck Models for Reliable Diabetic
                  Retinopathy Grading
                </h3>
                <p className="text-gray-400 mb-3 leading-relaxed">
                  Developed an interpretable two-stage Concept Bottleneck Model
                  (CBM) architecture for automated DR grading that prioritizes
                  clinical transparency and auditability. The model maps retinal
                  fundus images to four clinically-defined lesion
                  concepts Microaneurysms (MA), Hemorrhages (HE), Hard Exudates
                  (EX), and Soft Exudates (SE) before determining severity
                  grade. This structurally enforced approach enables
                  human-in-the-loop verification and allows clinicians to
                  inspect and override individual lesion predictions before
                  final diagnosis.
                </p>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  <strong>Key Innovation:</strong> Replaces black-box
                  classification with a transparent decision chain where every
                  prediction is causally linked to identifiable clinical
                  biomarkers. Stage 1 uses EfficientNet-B0 (fine-tuned on IDRiD)
                  for concept extraction; Stage 2 applies a linear classifier to
                  map concepts to grades (Normal/Mild, Moderate, Severe,
                  Proliferative). Cross-dataset evaluation on DDR (4,105 images)
                  achieves 64.21% accuracy and QWK of 0.6867, demonstrating
                  strong generalization across imaging domains.
                </p>

                <div className="flex flex-wrap gap-3 items-center mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-red-400 text-black font-semibold text-sm">
                    Concept Bottleneck Model
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/20 text-sm">
                    EfficientNet-B0
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/20 text-sm">
                    PyTorch
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/20 text-sm">
                    Interpretable AI
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    disabled
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-500 text-white text-sm font-semibold transition-colors cursor-not-allowed opacity-60"
                  >
                    Read Paper Coming Soon
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResearchSection;
