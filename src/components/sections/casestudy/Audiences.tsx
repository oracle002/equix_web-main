"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { caseStudies } from "@/content/caseStudies";

export default function TargetAudience() {
  const { id } = useParams();
  const study = caseStudies.find((c) => c.id === id);

  // If no study or no target audience, skip rendering
  if (!study || !study.audiences) return null;

  const audiences = study.audiences;

  const tagVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 pt-12 md:pt-12">
      {/* Target Audience */}
      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8"
        >
          Target Audience
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={tagVariants}
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2.5 bg-white border-2 border-gray-300 rounded-full text-gray-800 text-xs md:text-sm font-medium hover:border-purple-400 hover:shadow-md transition-all duration-300 cursor-default"
            >
              {audience.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
