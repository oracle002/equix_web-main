"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { caseStudies } from "@/content/caseStudies"; // adjust import path if needed

interface Functionality {
  title?: string;
  description?: string;
  heading?: string;
  points?: string[];
}

export default function SolutionOverview() {
  const { id } = useParams();
  const study = caseStudies.find((c) => c.id === id);

  if (!study || !study.solutionOverview) return null;

  const { title, description, functionalities = [] }: { title?: string; description?: string; functionalities?: Functionality[] } = study.solutionOverview;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[#0A0219] text-white px-4 md:px-8 py-12 md:py-12 rounded-3xl mx-4 md:mx-8 my-0">
      {/* Title */}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
        >
          {title}
        </motion.h2>
      )}

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base leading-relaxed mb-10"
        >
          {description}
        </motion.p>
      )}

      {/* Functionalities */}
      {functionalities.length > 0 && (
        <>
          <h3 className="text-lg md:text-xl font-semibold mb-6">
            Key Functionalities
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="border border-white rounded-2xl overflow-hidden"
          >
            {functionalities.map((f, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col md:flex-row md:items-start gap-4 p-5 md:p-6 hover:bg-purple-900/20 transition-colors duration-300 ${
                  index !== functionalities.length - 1
                    ? "border-b border-white/30"
                    : ""
                }`}
              >
                {/* Left Column - Title */}
                {f.title && (
                  <div className="md:w-2/5 flex-shrink-0">
                    <h4 className="font-semibold text-sm md:text-base">
                      {f.title}
                    </h4>
                  </div>
                )}

                {/* Right Column - Description or List */}
                <div className={`${f.title ? "md:w-3/5" : "w-full"}`}>
                  {f.heading && (
                    <h5 className="font-semibold text-sm md:text-base mb-2">
                      {f.heading}
                    </h5>
                  )}

                  {f.points ? (
                    <ul className="list-disc list-inside space-y-1 text-xs md:text-sm leading-relaxed">
                      {f.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : f.description ? (
                    <p className="text-xs md:text-sm leading-relaxed">
                      {f.description}
                    </p>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </section>
  );
}
