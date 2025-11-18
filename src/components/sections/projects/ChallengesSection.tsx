"use client";

import { motion } from "framer-motion";

interface Challenge {
  title: string;
  heading: string;
  desc: string;
  solution: string;
}

interface ChallengesSectionProps {
  challenges: Challenge[];
}

export default function ChallengesSection({ challenges }: ChallengesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#0A0219] text-white px-4 md:px-8 py-12 md:py-16 rounded-3xl mx-4 md:mx-8 my-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 md:mb-12"
      >
        The Roadblocks & Our Game Plan
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
      >
        {challenges.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
            className="group relative from-[#9375CE]/25 via-[#785FC9]/20 to-[#3A1C77]/25 
                       rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-md border 
                       border-white/10 hover:border-purple-400/40 transition-all duration-300 
                       cursor-pointer overflow-hidden flex flex-col 
                       shadow-lg hover:shadow-purple-500/20"
          >
            {/* Challenge Badge */}
            <div className="absolute top-5 left-0 bg-gradient-to-r from-[#9375CE]/30 to-[#785FC9]/30 text-white text-xs md:text-sm font-semibold px-4 py-1.5 w-max">
              {item.title}
            </div>

            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative mt-8 z-10 flex flex-col gap-2">
              <h3 className="font-semibold text-base md:text-lg text-white">
                {item.heading}
              </h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-2">
                <span className="font-semibold text-white text-sm md:text-base">
                  Solution
                </span>
                <p className="text-xs md:text-sm mt-1 text-gray-200 leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>

            {/* Corner glow */}

            {/* Decorative gradient circles */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
