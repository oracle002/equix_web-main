"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/content/caseStudies";
import { useParams } from "next/navigation";

export default function ProblemStatement() {
  const { id } = useParams();
  const study = caseStudies.find((c) => c.id === id);

  if (!study) return null;

  const {
    
    problemDescription,
    challenges = [],
    objectives = [],
  } = study;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16">
      {/* ===== Title ===== */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
       Problem Statement
      </motion.h2>

      {/* ===== Description ===== */}
      {problemDescription && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 text-sm md:text-xl leading-relaxed mb-12 text-justify"
        >
          {problemDescription}
        </motion.p>
      )}

      {/* ===== Key Challenges ===== */}
      {challenges.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Key Challenges
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#1A0B3F] text-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-sm md:text-base font-semibold leading-relaxed">
                  {challenge.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* ===== Objectives ===== */}
      {objectives.length > 0 && (
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Objectives
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#9B7FD4] text-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-sm md:text-base font-semibold leading-relaxed">
                  {objective.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
