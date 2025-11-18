"use client";

import { motion } from "framer-motion";

export default function VisionTrackComparison() {
  const data = [
    {
      area: "Custom Alert Logic",
      ai: "Rule-based by time, person, zone, color, behavior",
      traditional: "Limited to static event types",
    },
    {
      area: "Edge + Cloud Hybrid",
      ai: "Edge-first with cloud fallback for speed & privacy",
      traditional: "Cloud-only adds latency",
    },
    {
      area: "Modular Add-Ons",
      ai: "Add safety, behavior, anomaly, or access control modules",
      traditional: "Fixed feature sets",
    },
    {
      area: "Privacy Control",
      ai: "Local-only processing with no cloud dependency",
      traditional: "Limited control, mostly cloud-based",
    },
    {
      area: "Forensic Intelligence",
      ai: "Tag footage, re-identify across cameras, investigate faster",
      traditional: "Basic playback with minimal tagging",
    },
    {
      area: "Scalability",
      ai: "Works for 2 to 200+ cameras with consistent accuracy",
      traditional: "Limited to mid-sized deployments",
    },
    {
      area: "Integration-Ready",
      ai: "Connect to anything via webhooks or APIs",
      traditional: "Often closed systems",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[#0A0219] text-white px-4 md:px-8 py-12 md:py-16 rounded-3xl mx-4 md:mx-8 my-12">
      <div className="max-w-5xl w-full mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
          How VisionTrack Stands Out From the Rest
        </h2>

        {/* Desktop Table */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden md:block space-y-3"
        >
          {/* Header Row */}
          <motion.div variants={rowVariants} className="flex gap-3">
            <div className="flex-1 bg-gradient-to-r from-[#9375ce4d] to-[#785fc94d] py-4 px-6 rounded-2xl text-left">
              <span className="font-bold text-white text-sm md:text-lg">Area</span>
            </div>
            <div className="flex-1 sm:flex-[2] bg-gradient-to-r from-[#9375ce4d] to-[#785fc94d] py-4 px-6 rounded-2xl text-left">
              <span className="font-bold text-white text-sm md:text-lg">VisionTrack AI</span>
            </div>
            <div className="flex-1 sm:flex-[2] bg-gradient-to-r from-[#9375ce4d] to-[#785fc94d] py-4 px-6 rounded-2xl text-left">
              <span className="font-bold text-white text-sm md:text-lg">Traditional Solutions</span>
            </div>
          </motion.div>

          {/* Data Rows */}
          {data.map((row, idx) => (
            <motion.div
              key={idx}
              variants={rowVariants}
              className="flex gap-3 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex-1 bg-gradient-to-r from-[#9375ce1a] to-[#785fc91a] py-3 px-6 rounded-2xl text-left">
                <span className="text-white text-sm md:text-base">{row.area}</span>
              </div>
              <div className="flex-1 sm:flex-[2] bg-gradient-to-r from-[#9375ce1a] to-[#785fc91a] py-3 px-6 rounded-2xl text-left">
                <span className="text-white text-sm md:text-base">{row.ai}</span>
              </div>
              <div className="flex-1 sm:flex-[2] bg-gradient-to-r from-[#9375ce1a] to-[#785fc91a] py-3 px-6 rounded-2xl text-left">
                <span className="text-white text-sm md:text-base">{row.traditional}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Cards with Glassmorphism / Hover Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:hidden space-y-4"
        >
          {data.map((row, idx) => (
            <motion.div
              key={idx}
              variants={rowVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(147, 117, 206, 0.3)",
                transition: { duration: 0.3 },
              }}
              className="group relative from-[#9375CE]/25 via-[#785FC9]/20 to-[#3A1C77]/25 
                         rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-md border 
                         border-white/10 hover:border-purple-400/40 transition-all duration-300 
                         cursor-pointer overflow-hidden flex flex-col 
                         shadow-lg hover:shadow-purple-500/20"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-400/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10 space-y-2">
                <div>
                  <span className="font-bold text-white text-sm">Area:</span> <span className="text-white">{row.area}</span>
                </div>
                <div>
                  <span className="font-bold text-white text-sm">VisionTrack AI:</span> <span className="text-white">{row.ai}</span>
                </div>
                <div>
                  <span className="font-bold text-white text-sm">Traditional:</span> <span className="text-white">{row.traditional}</span>
                </div>
              </div>

              {/* Bottom glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
