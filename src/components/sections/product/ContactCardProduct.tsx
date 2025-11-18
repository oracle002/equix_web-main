"use client";

import React from "react";

interface ContactCardProps {
  heading?: string;
  description?: string;
  buttonText?: string;
}

export default function ContactCardProduct({
  heading = "Try Equix DocuGenie today",
  description = "With Equix, you don't have to reinvent the wheel to get the power of AI. Our products are purpose-built to modernize your operations, optimize your workflows, and future-proof your business—faster, smarter, and simpler.",
  buttonText = "Talk to our consultant",
}: ContactCardProps) {
  return (
    <section
      id="contact"
      className="relative w-full max-w-[1200px] mx-auto my-12 rounded-3xl overflow-visible px-6 text-center"
    >
      {/* Decorative glow behind button */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          width: "300px",
          height: "448px",
          top: "60%", // adjust as needed to be just behind the button
          background: "#EDB9FF",
          filter: "blur(200px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {heading}
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          {description}
        </p>

        {/* Button */}
        <button className="mt-8 px-8 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative z-10 text-sm md:text-base" onClick={() => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL, "_blank")}>
          {buttonText}
        </button>
      </div>
    </section>
  );
}
