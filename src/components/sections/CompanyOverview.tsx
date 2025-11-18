"use client";
import Meta  from "../layout/Meta";
import { MetaData, pageMeta } from "@/lib/metadata";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { craftedContent } from "@/content/company";

export default function CraftedWithPurpose() {
  const [index, setIndex] = useState(1);
  const total = craftedContent.products.length;

  // Slide functions
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  // ✅ Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => next(), 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="company" className="relative w-full py-10 bg-[var(--color-bg)]">
      <Meta {...pageMeta.companyOverview as MetaData} />
      <div className="mx-auto max-w-6xl px-6 overflow-hidden">
        <div className="relative rounded-3xl backdrop-blur-xl bg-[#F4F4FF] border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.1)] p-12">
          {/* Background Ellipses */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute -top-[275px] left-1/2 -translate-x-1/2 w-[318px] h-[670px] rounded-full bg-[#EDB9FF] blur-[106px] -rotate-90 z-0"></div>
            <div className="absolute top-[628px] left-1/2 w-[917px] h-[140px] -translate-x-1/2 rounded-full bg-[#9D7FDC] blur-[200px] z-0"></div>
          </div>

          {/* Headings */}
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
              <span className="text-[var(--color-secondary)]">Crafted</span> with Purpose. Built for{" "}
              <span className="text-[var(--color-primary)]">Impact.</span>
            </h2>
            <h5 className="mt-4 text-lg font-bold font-urbanist text-black">
              {craftedContent.subHeading1}
            </h5>
            <h5 className="mt-2 text-lg font-bold font-urbanist text-black">
              {craftedContent.subHeading2}
            </h5>
          </div>

          {/* Intro Paragraphs */}
          <div className="mt-8 relative z-10 grid gap-8 md:grid-cols-2 text-base leading-relaxed text-black">
            {craftedContent.intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Features */}
          <h1 className="mt-12 relative z-10 text-center text-2xl font-bold uppercase text-black">
            {craftedContent.featureHeading}
          </h1>
          <div className="mt-8 relative z-10 flex flex-col gap-6 max-w-6xl mx-auto p-4">
            <div className="flex flex-wrap justify-center gap-4">
              {craftedContent.features.slice(0, 3).map((f) => (
                <Feature key={f.title} title={f.title} desc={f.desc} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {craftedContent.features.slice(3, 5).map((f) => (
                <Feature key={f.title} title={f.title} desc={f.desc} />
              ))}
            </div>
          </div>

          {/* Carousel */}
          <div className="relative mt-10 overflow-visible z-10">
            <div className="relative mx-auto flex h-[340px] w-full max-w-4xl items-center justify-center">
             {craftedContent.products.map((p, i) => {
  const offset = ((i - index + craftedContent.products.length) %
    craftedContent.products.length) as 0 | 1 | 2;

  const x = offset === 0 ? -240 : offset === 1 ? 0 : 240;
  const rot = offset === 0 ? -8 : offset === 2 ? 8 : 0;
  const scl = offset === 1 ? 1 : 0.9;
  const opa = 1;
  const z = offset === 1 ? 30 : 10;
  const y = offset === 1 ? 0 : 40; // ✅ Slightly lower side cards

  return (
    <motion.div
      key={p.id}
      whileTap={{ scale: 0.95 }}
      className="absolute cursor-pointer"
      onClick={next}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ x, y, rotate: rot, scale: scl, opacity: opa, zIndex: z }}
      transition={{ type: "spring", stiffness: 240, damping: 26 }}
    >
      {/* Card */}
      <div
        className={`relative w-[280px] md:w-[320px] h-[240px] md:h-[260px] overflow-hidden rounded-2xl shadow-lg border transition-all duration-300
          ${
            offset === 1
              ? "border-white/30 bg-white/40 backdrop-blur-2xl"
              : "border-gray/20 bg-white"
          }`}
      >
        {/* ✅ Arched top effect for active card */}
        {offset === 1 && (
          <div className="absolute -top-6 left-0 w-full h-12 bg-white/60 rounded-b-[100%] blur-sm"></div>
        )}

        {/* Glow */}
        {offset === 1 && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#2626A4] rounded-full blur-3xl opacity-70 -z-10"></div>
        )}

        {/* Content */}
        <div className="flex h-full flex-col items-center justify-between px-6 py-6 text-center relative z-10">
          <div>
            <h4 className="text-lg font-semibold text-black">{p.title}</h4>
            <p className="mt-2 text-sm text-black/70">{p.blurb}</p>
          </div>
          <div className="relative">
            <Link href={`/product/${p.id}`} onClick={(e) => e.stopPropagation()}>
              <span className="relative inline-block rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] px-7 py-2 text-sm font-semibold text-white shadow hover:scale-105 transition-transform">
                View
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
})}

            </div>

            {/* Carousel Nav */}
            <div className="mt-8 flex items-center justify-center gap-6 relative z-10">
              <button
                onClick={prev}
                title="Previous"
                className="grid size-12 place-items-center rounded-full bg-white/70 border border-white/40 shadow hover:bg-[var(--color-primary)]/20 transition"
              >
                <ChevronLeft className="h-6 w-6 text-black" />
              </button>
              <button
                onClick={next}
                title="Next"
                className="grid size-12 place-items-center rounded-full bg-white/70 border border-white/40 shadow hover:bg-[var(--color-primary)]/20 transition"
              >
                <ChevronRight className="h-6 w-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative w-full max-w-[320px] px-6 py-5 mx-auto rounded-xl bg-white/30 backdrop-blur-[16px] border border-white/40 shadow-lg text-center transition-all duration-300 hover:border-[var(--color-primary)]"
    >
      <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-br from-white/20 to-gray-100/10"></div>
      <div className="relative z-10">
        <h4 className="text-lg font-bold text-black">{title}</h4>
        <p className="mt-1 text-sm text-black leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}
