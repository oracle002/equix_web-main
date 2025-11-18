"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import bulletIcon from "@/assets/images/bullet.png";

interface TechItem {
  title: string;
  text: string;
}

interface TechnologyStackProps {
  tech: TechItem[];
  outcomes: string[];
}

export default function TechnologyStack({ tech, outcomes }: TechnologyStackProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const outcomeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-white py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Technology Stack */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12"
        >
          Technology Stack
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20"
        >
          {tech.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="w-full rounded-2xl md:rounded-3xl overflow-hidden mx-auto shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              {/* Top Section */}
              <motion.div
                whileHover={{ backgroundColor: "#2D1B55" }}
                transition={{ duration: 0.3 }}
                className="bg-[#211642] py-3 md:py-4 flex items-center justify-center text-white font-semibold text-sm md:text-base px-4"
              >
                {item.title}
              </motion.div>

              {/* Bottom Section */}
              <div className="bg-[#F4F4FF] py-8 md:py-10 flex items-center justify-center text-center px-4 md:px-6 text-xs md:text-sm text-[#1B1036] min-h-[100px] md:min-h-[120px]">
                {item.text}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Measurable Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F4F4FF] rounded-xl md:rounded-2xl p-6 md:p-10 shadow-sm"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
            Measurable Outcomes
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4 md:gap-6"
          >
            {outcomes.map((outcome, idx) => (
              <motion.div
                key={idx}
                variants={outcomeVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-start gap-3"
              >
                <Image
                  src={bulletIcon}
                  alt="Bullet point"
                  width={20}
                  height={20}
                  className="mt-1 flex-shrink-0"
                />
                <p className="text-sm md:text-base text-gray-700">{outcome}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
