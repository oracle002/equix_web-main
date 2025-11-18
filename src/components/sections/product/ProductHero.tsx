"use client";

import Image from "next/image";
import bgHero from "@/assets/images/bg.png";
import { motion } from "framer-motion";




export default function ProductHero({ product }: { product: { title: string; tagline: string } }) {
  return (
    <section className="relative mx-4 md:mx-8 lg:mx-8 my-8 md:my-12 rounded-3xl overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgHero}
          alt="Hero Background"
          className="w-full h-full object-cover object-[center_30%]"
          fill
        />
      </div>

      <div className="container mx-auto px-6 lg:px-1 py-20 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug"
        >
          {product.title}
        </motion.h1>

       <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className=" flex flex-col items-center"
        >
          <span className="text-sm md:text-xl font-semibold mb-2">{product.tagline}</span>
        
        </motion.div>
      </div>
    </section>
  );
}
