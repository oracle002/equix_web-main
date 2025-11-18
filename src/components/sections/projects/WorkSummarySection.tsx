"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bulletIcon from "@/assets/images/bullet.png";

interface ServicesAndSummaryProps {
  services: string[];
  objectives: string[];
  summary: string[];
}

export default function ServicesAndSummary({
  services,
  objectives,
  summary,
}: ServicesAndSummaryProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const objectiveVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  // Split summary into first 2 paragraphs and rest
  const firstSummary = summary.slice(0, 2);
  const restSummary = summary.slice(2);

  return (
    <section className="px-6 md:px-16 lg:px-24 py-8 space-y-16">
      <div className="max-w-6xl mx-auto">
        {/* ===== Services Provided ===== */}
        <div className="text-center mb-15">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-6"
          >
            Services Provided
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          >
            {services.map((service, idx) => (
              <motion.span
                key={idx}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#f3f4f6",
                  transition: { duration: 0.2 },
                }}
              className="px-5 py-2.5 bg-white border-2 border-gray-300 rounded-full text-gray-800 text-xs md:text-sm font-medium hover:border-purple-400 hover:shadow-md transition-all duration-300 cursor-default"
              >
                {service}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* ===== Summary of Work (first 2 paragraphs) ===== */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold mb-6"
          >
            Summary of Work & Client Objectives
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black-700 leading-relaxed"
          >
            {firstSummary.map((para, idx) => (
              <motion.p key={idx} variants={paragraphVariants}>
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* ===== We set out to ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-purple-50 p-8 rounded-2xl"
        >
          <h3 className="font-bold text-black-900 text-xl mb-6">We set out to :</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4"
          >
            {objectives.map((item, idx) => (
              <motion.div
                key={idx}
                variants={objectiveVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-start gap-3"
              >
                <Image src={bulletIcon} alt="Bullet point" width={20} height={20} className="mt-1" />
                <p className="text-sm md:text-base text-black-800">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ===== Remaining summary paragraphs after "We set out to" ===== */}
        {restSummary.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-black-600 text-sm md:text-base leading-relaxed"
          >
            {restSummary.map((para, idx) => (
              <motion.p key={idx} variants={paragraphVariants}>
                {para}
              </motion.p>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
