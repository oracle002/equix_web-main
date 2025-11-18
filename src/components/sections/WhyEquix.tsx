"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { cards, storyContent } from "@/content/whyEquixContent"
import Meta from "../layout/Meta"
import { MetaData, pageMeta  } from "@/lib/metadata"




export default function WhyEquix() {
  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 py-16 space-y-16">
      <Meta {...pageMeta.whyEquix as MetaData} />
      {/* Why Equix Solutions */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-urbanist mb-12">
          Why Equix Solutions?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
             
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(123, 47, 247, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="rounded-2xl border-2 border-transparent hover:border-[var(--color-primary)] bg-[var(--color-tertiary)] p-4 text-center space-y-4 cursor-pointer transition-all duration-300"
            >
              <div className="flex justify-center">
                <Image src={item.icon} alt={item.title} width={40} height={40} />
              </div>
              <h3 className="font-bold text-xl font-urbanist">{item.title}</h3>
              <p className="text-black text-sm font-urbanist">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* The Equix Story */}
      <motion.div
        className="bg-[var(--color-story)] rounded-2xl p-10 relative overflow-hidden max-w-6xl mx-auto"
        style={{
          backgroundImage: `url(${storyContent.background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Content */}
        <div className="relative z-10 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-urbanist">
            {storyContent.heading}
          </h2>
          <p className="font-bold mb-8 font-urbanist text-lg">
            {storyContent.subheading}
          </p>

          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {storyContent.columns.map((col, i) => (
              <p key={i} className="text-black leading-relaxed font-urbanist">
                {col}
              </p>
            ))}
          </div>

          {/* Bottom full-width row */}
          <p className="text-black leading-relaxed font-urbanist">
            {storyContent.bottomText}
          </p>
        </div>
      </motion.div>
    </section>
  )
}
