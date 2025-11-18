"use client";
import Meta from "../layout/Meta"
import { MetaData, pageMeta } from "@/lib/metadata"

import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bgImage from "@/assets/images/casestudies/background.png";
import { Button } from "../ui/Button";



interface CaseStudy {
id: number;
title: string;
description: string;
link?: string;
}

const caseStudies: CaseStudy[] = [
{ id: 1, title: "Baby Voice Recognition System", description: "AI-powered system to detect and analyze baby cries for health tracking." },
{ id: 2, title: "AI Chatbot for Pre-Diagnosis & Appointment Triage", description: "Conversational AI assisting with pre-diagnosis and appointment triage." },
{ id: 3, title: " AI-Based Quality Inspection System", description: "AI-driven analytics to predict equipment failures and reduce downtime." },
{ id: 4, title: " AI-Powered Enhancements for Logistics Industry", description: "Machine learning to forecast demand trends and improve inventory planning." },
{ id: 5, title: "Smart Safety Detector System", description: "AI-based platform delivering customized learning experiences for students." },
];

export default function CaseStudiesSlider() {
const [currentIndex, setCurrentIndex] = useState(0);
const [direction, setDirection] = useState<"left" | "right">("right");
const scrollRef = useRef<HTMLDivElement>(null);
const router = useRouter();

const handleNext = () => {
setDirection("right");
if (window.innerWidth < 768) {
scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });
setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
} else {
setCurrentIndex((prev) => (prev + 2) % caseStudies.length);
}
};

const handlePrev = () => {
setDirection("left");
if (window.innerWidth < 768) {
scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });
setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
} else {
setCurrentIndex((prev) => (prev - 2 + caseStudies.length) % caseStudies.length);
}
};


return ( <section id="case" className="relative w-auto py-20 px-6 md:px-12 overflow-hidden"> <div className="absolute inset-0 -z-10"> <Image src={bgImage} alt="Case Studies Background" fill className="object-center" priority /> </div>

  <Meta {...pageMeta.caseStudies as MetaData} />
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-4xl font-bold mb-3 text-gray-900">Case Studies</h2>
      <p className="text-lg font-semibold mb-4 text-gray-800">
        From Problems to Possibilities—Equix Delivers Measurable Impact
      </p>
      <p className="text-sm text-black-700 leading-relaxed max-w-md">
        At Equix Solutions, we don’t just build AI products—we engineer intelligent solutions that solve real problems and create tangible value.
      </p>

      <div className="flex gap-3 mt-6">
        <button
          onClick={handlePrev}
          title="Previous case study"
          aria-label="Previous case study"
          className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center border border-gray-200 hover:bg-purple-100 transition"
        >
          <ChevronLeft size={18} className="text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          title="Next case study"
          aria-label="Next case study"
          className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center border border-gray-200 hover:bg-purple-100 transition"
        >
          <ChevronRight size={18} className="text-gray-700" />
        </button>
      </div>
    </div>

    {/* RIGHT CONTENT (DESKTOP SLIDER) */}
    <div className="hidden md:flex relative w-full h-[320px] gap-6 overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          className="flex w-full gap-6 absolute"
          custom={direction}
          
          initial="enter"
          animate="center"
          exit="exit"
        >
          {[...caseStudies, ...caseStudies] // Duplicate to fix wrapping
            .slice(currentIndex, currentIndex + 2)
            .map((study) => (
              <div
                key={study.id}
                className="relative flex-1 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 p-6 flex flex-col justify-between h-[320px]"
              >
                <span className="absolute top-6 left-6 text-8xl md:text-9xl font-extrabold text-purple-400/30 select-none leading-none">
                  {String(study.id).padStart(2, "0")}
                </span>

                <div className="relative z-10 mt-auto">
                  <h3 className="text-lg font-bold text-gray-900">{study.title}</h3>
                  <Button
                    variant="animated"
                    size="default"
                    className="mt-4 px-5 py-2 rounded-full bg-white text-gray-800 text-sm font-medium hover:bg-purple-50 transition"
                    onClick={() => router.push(`/casestudy/${study.id}`)}
                  >
                    View
                  </Button>
                </div>
              </div>
            ))}
        </motion.div>
      </AnimatePresence>
    </div>

    {/* MOBILE VIEW */}
    <div
      ref={scrollRef}
      className="md:hidden flex gap-6 w-full h-[320px] scrollbar-none overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
    >
      {caseStudies.map((study) => (
        <div
          key={study.id}
          className="min-w-[90%] max-w-[90%] snap-center relative rounded-xl bg-white/30 backdrop-blur-md border border-white/40 p-6 flex flex-col justify-between h-[320px]"
        >
          <span className="absolute top-6 left-6 text-8xl font-extrabold text-purple-400/30 select-none leading-none">
            {String(study.id).padStart(2, "0")}
          </span>

          <div className="relative z-10 mt-auto">
            <h3 className="text-lg font-bold text-gray-900">{study.title}</h3>
            <Button
              variant="animated"
              size="default"
              className="mt-4 px-5 py-2 rounded-full bg-white text-gray-800 text-sm font-medium hover:bg-purple-50 transition"
              onClick={() => router.push(`/casestudy/${study.id}`)}
            >
              View
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


);
}
