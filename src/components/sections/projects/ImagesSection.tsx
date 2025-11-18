"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ImagesProps {
  images: {
    top: StaticImageData;
    bottomLeft: StaticImageData;
    bottomRight: StaticImageData;
  };
}

export default function ImagesSection({ images }: ImagesProps) {
  const { top, bottomLeft, bottomRight } = images;

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="px-4 md:px-10 lg:px-16 py-12 md:py-16">
      <div className="space-y-6 md:space-y-8">
        {/* Top Section - Full Width */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          className="w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
        >
          <Image
            src={top}
            alt="Top Image"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Bottom Section - 2 Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {/* Bottom Left */}
          <motion.div
            variants={imageVariants}
            whileHover={{
              scale: 1.03,
              y: -8,
              transition: { duration: 0.3 },
            }}
            className="w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
          >
            <Image
              src={bottomLeft}
              alt="Bottom Left Image"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            variants={imageVariants}
            whileHover={{
              scale: 1.03,
              y: -8,
              transition: { duration: 0.3 },
            }}
            className="w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
          >
            <Image
              src={bottomRight}
              alt="Bottom Right Image"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
