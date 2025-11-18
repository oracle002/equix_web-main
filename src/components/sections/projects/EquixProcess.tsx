"use client";

import Image from "next/image";
import bgProcess from "@/assets/images/logo.png";

interface ProcessStep {
  number: string;
  title: string;
  text: string;
}

interface EquixProcessProps {
  steps: ProcessStep[];
}

export default function EquixProcess({ steps }: EquixProcessProps) {
  return (
    <section className="relative bg-white py-6 md:py-6 px-4 md:px-6 overflow-hidden">
      {/* ===== Background Glow ===== */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] md:w-[917px] md:h-[550px] bg-[#EDB9FF] rounded-full blur-[100px] md:blur-[100px] pointer-events-none z-0 opacity-50"></div>

      {/* ===== Background Logo ===== */}
      <div className="absolute inset-0 flex top-25 justify-center items-center pointer-events-none z-10">
        <Image
          src={bgProcess}
          alt="Equix Background"
          className="w-[400px] md:w-[500px] lg:w-[500px] h-auto object-contain"
        />
      </div>

      {/* ===== Heading ===== */}
      <div className="relative max-w-6xl mx-auto text-center mb-12 md:mb-20 z-20">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight">
          Equix Process
        </h2>
      </div>

      {/* ===== Timeline ===== */}
      <div className="relative max-w-5xl mx-auto z-20">
        {/* Center Line - Hidden on mobile */}
        <div className="hidden md:block absolute w-1 bg-white left-1/2 transform -translate-x-1/2 top-0 bottom-0"></div>

        {/* Steps */}
        <div className="relative space-y-12 md:space-y-16">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className="relative">
                {/* Mobile Layout */}
                <div className="md:hidden flex gap-4">
                  {/* Number Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#1A0B2E] text-white flex items-center justify-center font-bold text-sm rounded-full shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-black mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-700">
                      {step.text}
                    </p>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-2 gap-8 items-start">
                  {/* Left Side Content */}
                  <div className={`${isLeft ? 'pr-12 text-right' : ''}`}>
                    {isLeft && (
                      <>
                        <h3 className="text-lg lg:text-xl font-bold text-black mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sm lg:text-base leading-relaxed text-gray-700">
                          {step.text}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Right Side Content */}
                  <div className={`${!isLeft ? 'pl-12 text-left' : ''}`}>
                    {!isLeft && (
                      <>
                        <h3 className="text-lg lg:text-xl font-bold text-black mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sm lg:text-base leading-relaxed text-gray-700">
                          {step.text}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Number Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0">
                    <div className="w-14 h-14 bg-[#1A0B2E] text-white flex items-center justify-center font-bold text-base rounded-full shadow-lg">
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
