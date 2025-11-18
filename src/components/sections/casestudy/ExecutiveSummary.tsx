"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/content/caseStudies";
import { useParams } from "next/navigation";

export default function ExecutiveSummary() {
  const { id } = useParams();
  const study = caseStudies.find((c) => c.id === id);

  if (!study) return null;

  return (
    <section className="relative bg-white px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-12 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* ===== Section Title ===== */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10"
        >
          Executive Summary
        </motion.h2>

        {/* ===== Two Column Layout ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 text-gray-700 leading-relaxed text-sm sm:text-base text-justify"
        >
          {/* Left Column */}
          <div className="space-y-5">
            {study.intro
              ?.slice(0, Math.ceil(study.intro.length / 2))
              .map((para: string, idx: number) => (
                <p key={idx} className="text-justify">
                  {para}
                </p>
              ))}
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {study.intro
              ?.slice(Math.ceil(study.intro.length / 2))
              .map((para: string, idx: number) => (
                <p key={idx} className="text-justify">
                  {para}
                </p>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
