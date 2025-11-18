"use client";

import { motion } from "framer-motion";
import { features } from "process";

// ---------- Interfaces ----------
interface Feature {
  title: string;
  text: string;
}

interface UseCase {
  category: string;
  desc: string;
}

interface CoreFeaturesAndUseCasesProps {
  coreFeatures?: Feature[];
  industriesAndUseCases?: UseCase[];
}

// ---------- Component ----------
export default function CoreFeaturesSection({
  coreFeatures = [],
  industriesAndUseCases = [],
}: CoreFeaturesAndUseCasesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16">
      {/* ===== Core Features Section ===== */}
      {coreFeatures && coreFeatures.length > 0 && (
        <div className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold text-center text-black mb-8">
            Core Features
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-xl p-5 text-white text-md leading-relaxed hover:scale-[1.02] transition-all duration-300 ${
                  index % 2 === 0
                    ? "bg-gradient-to-br from-[#9375CE] to-[#785FC9]"
                    : "bg-gradient-to-br from-[#9375CE] to-[#785FC9]"
                }`}
              >
                <h3 className="text-base font-semibold mb-2.5">{feature.title }</h3>
                <div className="space-y-1 text-xs text-white">
                <p className="text-sm font-semibold">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* ===== Industries & Use Cases Section ===== */}
      {industriesAndUseCases && industriesAndUseCases.length > 0 && (
        <div>
          <h2 className="text-xl md:text-2xl font-sbold text-left text-gray-900 mb-8">
            Industries & Use Cases
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {industriesAndUseCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#1F0D40] text-white rounded-xl p-5 hover:scale-[1.02] transition-all duration-300"
              >
                <h3 className="text-base font-semibold mb-2.5">
                  {useCase.category}
                </h3>
                <div className="space-y-1 text-xs text-white">
              
                       <p className="text-sm font-semibold">{useCase.desc}</p>
               
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
