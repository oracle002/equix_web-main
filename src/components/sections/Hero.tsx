"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { heroContent } from "@/content/hero"
import star from "@/assets/images/Hero/Star.png"
import bgHero from "@/assets/images/bg.png"
export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative rounded-3xl mx-4 md:mx-8 lg:mx-8 my-8 md:my-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgHero}
          alt="Hero Background"
          className="w-full h-full object-cover"
          fill
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-28 text-center relative z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-snug text-white"
        >
          {heroContent.headline.part1}{" "}
          <span className="text-outline font-extrabold">
            {heroContent.headline.highlight1}
          </span>,<br />
          {heroContent.headline.part2}{" "}
          <span className="bg-[var(--badge)] text-[var(--color-text)] px-3 py-1 rounded-md font-extrabold">
            {heroContent.headline.highlight2}
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed"
        >
          {heroContent.subtext}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-col md:flex-row justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection(heroContent.buttons.outline.href)}
            className="btn-outline transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            {heroContent.buttons.outline.text}
          </button>
          <button
            onClick={() => scrollToSection(heroContent.buttons.solid.href)}
            className="btn-solid transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            {heroContent.buttons.solid.text}
          </button>
        </motion.div>

        {/* Bottom Tags */}
        {/* Bottom Tags */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.9 }}
  className="mt-16 flex justify-center gap-2 text-white items-center font-[var(--font-sans)]"
>
  {heroContent.tags.map((tag, index) => (
    <div key={tag} className="flex items-center gap-2">
      <span className="font-light text-[22px]">{tag}</span>
      {index < heroContent.tags.length - 1 && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 4, // speed of rotation (in seconds)
            ease: "linear",
          }}
        >
          <Image src={star} alt="star separator" width={22} height={22} />
        </motion.div>
      )}
    </div>
  ))}
</motion.div>

      </div>
    </section>
  )
}
