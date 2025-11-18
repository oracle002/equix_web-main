"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { caseStudies } from "@/content/caseStudies";


export default function RoadmapImpact() {
  const { id } = useParams();
  const study = caseStudies.find((c) => c.id === id);

  if (!study || (!study.roadmapItems && !study.impactCategories)) return null;

  const roadmapItems = study.roadmapItems || [];
  const impactCategories = study.impactCategories || [];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const groupedImpact = [];
  for (let i = 0; i < impactCategories.length; i += 3) {
    groupedImpact.push(impactCategories.slice(i, i + 3));
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-16">

  {/* ===== Impact Section ===== */}
<div>
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-xl md:text-2xl font-bold text-gray-900 mb-6"
  >
    Impact
  </motion.h2>

  {/* ===== Desktop (3 Columns per Row, Equal Widths) ===== */}
  <div className="hidden md:block space-y-10">
    {Array.from({ length: Math.ceil(impactCategories.length / 3) }).map(
      (_, groupIndex) => {
        const rowCategories = impactCategories.slice(
          groupIndex * 3,
          groupIndex * 3 + 3
        );

        return (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            {/* Headers */}
            <div className="grid grid-cols-3 gap-3">
              {rowCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="bg-[#0D0524] py-2 px-4 rounded-xl flex justify-center items-center text-center min-h-[50px]"
                >
                  <span className="font-bold text-white break-words">
                    {category.title}
                  </span>
                </div>
              ))}
              {/* Fill empty cells if fewer than 3 */}
              {Array.from({ length: 3 - rowCategories.length }).map((_, i) => (
                <div key={i} className="bg-transparent"></div>
              ))}
            </div>

            {/* Rows */}
            {Array.from({
              length: Math.max(...rowCategories.map((c) => c.points.length)),
            }).map((_, rowIndex) => (
              <motion.div
                key={rowIndex}
                className="grid grid-cols-3 gap-3 hover:scale-[1.01] transition-transform duration-300"
              >
                {rowCategories.map((category, colIndex) => (
                  <div
                    key={colIndex}
                    className="bg-[#F4F4FF] py-2 px-4 rounded-xl min-h-[60px] flex items-center justify-start"
                  >
                    <span className="text-gray-700">
                      {category.points[rowIndex] || ""}
                    </span>
                  </div>
                ))}
                {/* Fill empty cells if fewer than 3 */}
                {Array.from({ length: 3 - rowCategories.length }).map((_, i) => (
                  <div key={i} className="bg-transparent"></div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        );
      }
    )}
  </div>

  {/* ===== Mobile (Stacked Cards) ===== */}
  <div className="md:hidden space-y-4">
    {impactCategories.map((category, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 20px 40px rgba(147, 117, 206, 0.3)",
          transition: { duration: 0.3 },
        }}
        className="relative rounded-2xl p-6 backdrop-blur-md border border-white/10 
                   bg-gradient-to-br from-[#2A0B4E] via-[#3A1C77] to-[#5B2EBF]
                   cursor-pointer flex flex-col shadow-lg hover:shadow-purple-500/30 space-y-2"
      >
        <div className="relative z-10 space-y-2">
          <h3 className="font-bold text-white text-base">{category.title}</h3>
          {category.points.map((point, i) => (
            <p key={i} className="text-white text-sm">• {point}</p>
          ))}
        </div>

        {/* Background Glow */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
      </motion.div>
    ))}
  </div>
</div>


    </section>
  );
}
