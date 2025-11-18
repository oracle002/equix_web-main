"use client"
import Image from "next/image"
import bgHero from "@/assets/images/bg.png"
import { motion } from "framer-motion"

interface ProjectHeroProps {
  title: string
  subtitle?: string
  industry?: string
}

export default function ProjectHero({ title, subtitle = "", industry = "" }: ProjectHeroProps) {
  return (
    <section className="relative mx-4 md:mx-8 lg:mx-8 my-8 md:my-12 rounded-3xl overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgHero}
          alt="Hero Background"
          className="w-full h-full object-cover object-[center_30%]" // moves image slightly down
          fill
        />
      </div>

      <div className="container mx-auto px-6 lg:px-1 py-24 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug"
        >
          {title.split("\n").map((line, idx) => (
            <span key={idx}>
              {line}
              <br className="hidden md:block" />
            </span>
          ))}
        </motion.h1>

        {/* Subtitle (optional) */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-lg md:text-xl opacity-80"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Industry Section */}
        {industry && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 flex flex-col items-center"
          >
            <span className="text-[22px] font-semibold mb-2">Industry</span>
            <p className="text-base md:text-lg font-[Satoshi] font-normal opacity-90">
              {industry.split("|").map((item, idx) => (
                <span key={idx} className="mx-1">
                  {item.trim()}
                  {idx < industry.split("|").length - 1 && "|"}
                </span>
              ))}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
