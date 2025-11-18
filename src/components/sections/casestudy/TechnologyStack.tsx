"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { caseStudies } from "@/content/caseStudies"; // ✅ Use caseStudies instead of products

export default function TechnologyStack() {
const { id } = useParams();
const study = caseStudies.find((c) => c.id === id);

  if (!study || !study.techStack) return null;// case study not found

const containerVariants = {
hidden: { opacity: 0 },
visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
hidden: { opacity: 0, y: 30 },
visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

return ( <section className="relative bg-white px-6 sm:px-10 md:px-16 lg:px-4 py-1 md:py-1"> <div className="max-w-7xl mx-auto">
{/* ===== Section Title ===== */}
<motion.h2
initial={{ opacity: 0, y: -10 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12"
>
Technology Stack
</motion.h2>


    {/* ===== Technology Cards Grid ===== */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {study.techStack?.map((item, idx) => (
        <motion.div
          key={idx}
          variants={cardVariants}
          whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
          className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
        >
          {/* Top Section (Dark Header) */}
          <motion.div
            whileHover={{ backgroundColor: "#2D1B55" }}
            transition={{ duration: 0.3 }}
            className="bg-[#211642] py-3 flex items-center justify-center text-white font-semibold text-sm sm:text-base md:text-lg px-4"
          >
            {item.title}
          </motion.div>

          {/* Bottom Section (Light Body) */}
          <div className="bg-[#F4F4FF] py-8 flex items-center justify-center text-center px-6 text-sm sm:text-base text-[#1B1036] min-h-[110px]">
            {item.text}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
);
}