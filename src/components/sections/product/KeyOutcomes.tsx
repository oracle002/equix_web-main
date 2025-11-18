"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { products } from "@/content/product";

export default function KeyOutcomes() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative w-full py-8 md:px-6 md:py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900"
        >
          {product.keyOutcomesHeading || "Key Outcomes for Your Stakeholders"}
        </motion.h2>

        {/* Table */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-2 md:space-y-3 mb-12 md:mb-16"
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <div className="flex-1 bg-[#DEDEFF] py-2 sm:py-4 px-3 sm:px-6 rounded-2xl">
              <span className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">
                Value Delivered
              </span>
            </div>
            <div className="flex-1 sm:flex-[2] bg-[#DEDEFF] py-2 sm:py-4 px-3 sm:px-6 rounded-2xl">
              <span className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">
                What it Means
              </span>
            </div>
          </div>

          {/* Value Rows */}
          {product.keyOutcomes?.map((item, idx) => (
            <motion.div
              key={idx}
              variants={rowVariants}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3"
            >
              <div className="flex-1 bg-[#F4F4FF] py-2 sm:py-4 px-3 sm:px-6 rounded-2xl">
                <span className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">
                  {item.value}
                </span>
              </div>
              <div className="flex-1 sm:flex-[2] bg-[#F4F4FF] py-2 sm:py-4 px-3 sm:px-6 rounded-2xl">
                <span className="text-gray-700 text-xs sm:text-sm md:text-base">
                  {item.reason}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
