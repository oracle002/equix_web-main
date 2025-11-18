"use client";

import Image from "next/image";
import bgHero from "@/assets/images/bg.png";
import { motion } from "framer-motion";

export default function CaseHero({
  study,
}: {
  study: { title: string; tagline: string; subtitle?: string };
}) {
  return (
    <section className="relative mx-4 md:mx-8 my-8 md:my-12 rounded-3xl overflow-hidden text-white shadow-[0_0_40px_rgba(88,0,255,0.25)]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgHero}
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
          fill
          priority
        />

      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug"
        >
          {study.title}
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="italic text-base md:text-xl font-medium mt-4 text-purple-200"
        >
          “{study.tagline}”
        </motion.h2>

        {/* Optional Subtitle */}
        {study.subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-3 text-sm md:text-lg text-gray-300"
          >
            {study.subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
