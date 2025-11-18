"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { products } from "@/content/product";

export default function AutomationSection() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return null;

  const examples = product.howItWorks.map((text) => ({ text }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5,  } },
  };

  return (
    <section className="bg-[#0A0219] text-white px-4 md:px-8 py-12 md:py-16 rounded-3xl mx-4 md:mx-8 my-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
      >
        {product.howItWorksHeading}
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto"
      >
        {examples.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(147, 117, 206, 0.3)",
              transition: { duration: 0.3 },
            }}
            className="group relative from-[#9375CE]/25 via-[#785FC9]/20 to-[#3A1C77]/25 
                       rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-md border 
                       border-white/10 hover:border-purple-400/40 transition-all duration-300 
                       cursor-pointer overflow-hidden flex flex-col 
                       shadow-lg hover:shadow-purple-500/20"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-400/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-sm md:text-base leading-relaxed text-gray-100 font-medium">
                {item.text}
              </p>
            </div>

            {/* Bottom glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
