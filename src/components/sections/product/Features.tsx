"use client";

import { motion } from "framer-motion";
import { products, Product } from "@/content/product";
import { useParams } from "next/navigation";

export default function Features() {
  const { id } = useParams();
  const product: Product | undefined = products.find((p) => p.id === id);

  if (!product) return null; // product not found

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="px-4 md:px-16 lg:px-24 py-12 md:py-16 text-gray-900">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Intro Section */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center md:text-left">
          {product.introHeading}
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-gray-700 leading-relaxed text-sm sm:text-sm md:text-base"
        >
          <div className="space-y-4 md:space-y-6">
            {product.intro.slice(0, Math.ceil(product.intro.length / 2)).map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
          <div className="space-y-4 md:space-y-6">
            {product.intro.slice(Math.ceil(product.intro.length / 2)).map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
            {product.featuresHeading}
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-3"
          >
            {/* Header Row */}
            <motion.div
              variants={rowVariants}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3"
            >
              <div className="flex-1 bg-[#DEDEFF] py-2 sm:py-3 px-3 sm:px-6 rounded-2xl">
                <span className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">
                  Feature
                </span>
              </div>
              <div className="flex-1 sm:flex-[2] bg-[#DEDEFF] py-2 sm:py-3 px-3 sm:px-6 rounded-2xl">
                <span className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">
                  What It Means for You
                </span>
              </div>
            </motion.div>

            {/* Feature Rows */}
            {product.features.map((item, idx) => (
              <motion.div
                key={idx}
                variants={rowVariants}
                className="flex flex-col sm:flex-row gap-2 sm:gap-3 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex-1 bg-[#F4F4FF] py-2 sm:py-4 px-3 sm:px-6 rounded-2xl">
                  <span className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">
                    {item.feature}
                  </span>
                </div>
                <div className="flex-1 sm:flex-[2] bg-[#F4F4FF] py-2 sm:py-4 px-3 sm:px-6 rounded-2xl">
                  <span className="text-gray-700 text-xs sm:text-sm md:text-base">
                    {item.meaning}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
