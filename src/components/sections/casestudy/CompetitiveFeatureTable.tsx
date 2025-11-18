"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export interface CompetitiveFeature {
  feature: string;
  equix: boolean | string;
  babyVoice: boolean | string;
  typicalApps: boolean | string;
}

export default function CompetitiveFeatureTable() {
  const competitiveFeatures: CompetitiveFeature[] = [
    { feature: "AI-Driven Cry Analysis", equix: true, babyVoice: true, typicalApps: false },
    { feature: "Real-Time Transcription", equix: true, babyVoice: false, typicalApps: false },
    { feature: "Adaptive Learning", equix: true, babyVoice: false, typicalApps: false },
    { feature: "Parent-Led: Ready-to-Use Insights", equix: true, babyVoice: true, typicalApps: false },
    { feature: "Cultural & Multilingual Expansion", equix: "Planned", babyVoice: false, typicalApps: false }
  ];

  return (
   <section className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-16">
      {/* ===== Desktop Table ===== */}
      <div className="hidden md:block">
        <motion.div className="space-y-3">
          {/* Table Headers */}
          <motion.div className="flex flex-row gap-3">
            <div className="flex-1 bg-[#DEDEFF] py-2 px-4 rounded-xl">
              <span className="font-bold text-gray-900 text-sm">Feature</span>
            </div>
            <div className="flex-1 bg-[#DEDEFF] py-2 px-4 rounded-xl">
              <span className="font-bold text-gray-900 text-sm">Baby Voice Recognition</span>
            </div>
            <div className="flex-1 bg-[#DEDEFF] py-2 px-4 rounded-xl">
              <span className="font-bold text-gray-900 text-sm">Typical Baby Apps</span>
            </div>
          </motion.div>

          {/* Table Rows */}
          {competitiveFeatures.map((row, index) => (
            <motion.div
              key={index}
              className="flex flex-row gap-3 hover:scale-[1.01] transition-transform duration-300"
            >
              {/* Feature Name */}
              <div className="flex-1 bg-[#F4F4FF] py-2 px-4 rounded-xl">
                <span className="font-semibold text-gray-900 text-xs">{row.feature}</span>
              </div>

              {/* Baby Voice Column */}
              <div className="flex-1 bg-[#F4F4FF] py-2 px-4 rounded-xl flex items-center justify-center">
                {typeof row.babyVoice === "string" ? (
                  <span className="text-purple-700 font-medium text-xs">{row.babyVoice}</span>
                ) : row.babyVoice ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <X className="w-4 h-4 text-red-500" />
                )}
              </div>

              {/* Typical Apps Column */}
              <div className="flex-1 bg-[#F4F4FF] py-2 px-4 rounded-xl flex items-center justify-center">
                {typeof row.typicalApps === "string" ? (
                  <span className="text-purple-700 font-medium text-xs">{row.typicalApps}</span>
                ) : row.typicalApps ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <X className="w-4 h-4 text-red-500" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ===== Mobile Cards ===== */}
      <div className="md:hidden space-y-4">
        {competitiveFeatures.map((row, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 20px 50px rgba(147, 117, 206, 0.5)",
              transition: { duration: 0.3 },
            }}
            className="relative rounded-3xl p-6 backdrop-blur-md border border-white/10
                       bg-gradient-to-br from-[#2A0B4E] via-[#3A1C77] to-[#5B2EBF]
                       cursor-pointer flex flex-col shadow-xl hover:shadow-purple-500/40 space-y-4 overflow-hidden"
          >
            {/* Feature Title */}
            <h3 className="font-bold text-white text-lg md:text-xl mb-2">{row.feature}</h3>

            {/* Comparison Columns */}
            <div className="grid grid-cols-2 gap-3">
              {/* Baby Voice */}
              <div className="flex items-center justify-between bg-[#3A1C77]/70 rounded-xl p-3">
                <span className="text-white font-medium text-sm">Baby Voice</span>
                {typeof row.babyVoice === "string" ? (
                  <span className="text-purple-300 font-semibold text-sm">{row.babyVoice}</span>
                ) : row.babyVoice ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <X className="w-5 h-5 text-red-400" />
                )}
              </div>

              {/* Typical Apps */}
              <div className="flex items-center justify-between bg-[#3A1C77]/70 rounded-xl p-3">
                <span className="text-white font-medium text-sm">Typical Apps</span>
                {typeof row.typicalApps === "string" ? (
                  <span className="text-purple-300 font-semibold text-sm">{row.typicalApps}</span>
                ) : row.typicalApps ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <X className="w-5 h-5 text-red-400" />
                )}
              </div>
            </div>

            {/* Background Glow Effects */}
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-gradient-to-br from-purple-500/30 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -top-12 -left-12 w-36 h-36 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
