"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { caseStudies } from "@/content/caseStudies";
import bgImage from "@/assets/images/casestudies/background.png";
import logo from "@/assets/logo/LogoWatermark.svg";
import RoadmapImpact from "./RoadmapImpact";

export default function ChallengesAndEdge() {
const { id } = useParams();
const study = caseStudies.find((c) => c.id === id);
const data = study?.challengesSection;

if (!data) return null;

const containerVariants = {
hidden: { opacity: 0 },
visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
hidden: { opacity: 0, x: -20 },
visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

return ( <section className="relative w-full overflow-hidden">
{/* Background */} <div className="absolute inset-0 -z-10"> <Image
       src={bgImage}
       alt="Background"
       fill
       className="object-center"
       priority
     /> </div>


  <div className="max-w-6xl mx-auto px-6">
    {/* -------------------- CHALLENGES SECTION -------------------- */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
     
    >
   
      
    </motion.div>

    {/* -------------------- EQUIX EDGE SECTION -------------------- */}
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 space-y-6"
      >
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-1">
            {data.edgeHeading}
          </h2>
          <h4 className="text-md md:text-md lg:text-md font-semibold text-black mb-1">
            {data.edgeTitle}
          </h4>

          <div>
            {data.edgeDescriptions.map((desc, i) => (
              <p
                key={i}
                className="text-sm md:text-base text-black/80 leading-relaxed"
              >
                {desc}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-base md:text-lg font-semibold text-black mb-1">
            {data.joinTitle}
          </h4>
          <p className="text-sm md:text-base text-black/80 leading-relaxed">
            {data.joinDescription}
          </p>
        </div>
      </motion.div>

      {/* Right Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2 flex items-center justify-center relative"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <Image
            src={logo}
            alt="Equix Logo"
            fill
            className="object-contain opacity-90 drop-shadow-2xl"
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>


);
}
