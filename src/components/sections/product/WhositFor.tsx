"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { products } from "@/content/product";

export default function WhositFor() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return null; // product not found

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-white px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-3"
        >
          {product.whositForHeading}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 text-sm md:text-base mb-8 md:mb-12 max-w-2xl mx-auto"
        >
          Designed for businesses that want to supercharge their customer engagement.
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20"
        >
          {product.whositFor.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
              className="w-full rounded-2xl md:rounded-3xl overflow-hidden mx-auto shadow-md hover:shadow-xl transition-shadow cursor-pointer flex flex-col"
            >
              {/* Top Section */}
              <motion.div
                whileHover={{ backgroundColor: "#2D1B55" }}
                transition={{ duration: 0.3 }}
                className="bg-[#211642] py-2 md:py-3 flex items-center justify-center text-white font-semibold text-xs sm:text-sm md:text-base px-3 md:px-4"
              >
                {item.title}
              </motion.div>

              {/* Bottom Section */}
              <div className="bg-[#F4F4FF] py-6 sm:py-8 md:py-10 flex items-center justify-center text-center px-3 md:px-6 text-xs sm:text-sm md:text-base text-[#1B1036] min-h-[90px] sm:min-h-[100px] md:min-h-[120px]">
                {item.text}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
