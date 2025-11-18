"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { products } from "@/content/product";
import bgImage from "@/assets/images/casestudies/background.png";
import logo from "@/assets/logo/LogoWatermark.svg";

export default function WhyProduct() {
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
    <section className="relative w-full py-12 md:py-20 px-4 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image src={bgImage} alt="Background" fill className="object-cover object-center" priority />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-gray-900"
        >
          {product.benefitsHeading}
        </motion.h2>

        {/* Table */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-2 md:space-y-3 mb-12 md:mb-16"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <div className="flex-1 bg-[#DEDEFF] py-2 sm:py-4 px-3 sm:px-6 rounded-2xl">
              <span className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Benefit</span>
            </div>
            <div className="flex-1 sm:flex-[2] bg-[#DEDEFF] py-2 sm:py-4 px-3 sm:px-6 rounded-2xl">
              <span className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Why It Matters</span>
            </div>
          </div>

          {/* Rows */}
          {product.benefits.map((item, idx) => (
            <motion.div key={idx} variants={rowVariants} className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <div className="flex-1 bg-[#F4F4FF] py-2 sm:py-4 px-3 sm:px-6 rounded-2xl">
                <span className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">{item.benefit}</span>
              </div>
              <div className="flex-1 sm:flex-[2] bg-[#F4F4FF] py-2 sm:py-4 px-3 sm:px-6 rounded-2xl">
                <span className="text-gray-700 text-xs sm:text-sm md:text-base">{item.reason}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Edge Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-black">{product.edgeHeading}</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 md:mb-4">{product.edgetitle}</h3>
            {product.edgedes.map((p, i) => (
              <p key={i} className="text-sm sm:text-base md:text-base text-black leading-relaxed mb-3 md:mb-4">
                {p}
              </p>
            ))}
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 relative h-54 md:h-80 lg:h-80"
          >
            <Image src={logo} alt="Product Logo" fill className="object-contain " />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
