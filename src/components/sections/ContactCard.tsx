"use client";
import Meta from "../layout/Meta";
import { MetaData, pageMeta } from "@/lib/metadata";


import React from "react";
import Image from "next/image";
import { contactContent } from "@/content/contactContent";
import contactLogo from "@/assets/images/contact/logo.png"; // your logo path

export default function ContactCard() {
  return (
    <section
      id="contact"
      className="relative w-[calc(100%-60px)] mx-auto  rounded-3xl overflow-hidden bg-[#0C0220] px-6 py-16 md:py-12 text-center"
    >
      <Meta {...(pageMeta.contactCard as MetaData)} />
      {/* Background graphics */}
<div className="absolute inset-0 z-0 flex justify-center items-center">
       
        {/* Gradient glow */}
  <div className="absolute w-[629px] h-[670px] left-1/2 -translate-x-1/2 top-[355px] rounded-full bg-[#EDB9FF] blur-[106px] rotate-[-90deg] -z-10" />
        {/* Logo */}
        <div className="mb-10 relative z-10">
   <Image
  src={contactLogo}
  alt="Contact Logo"
/>

  </div>

        {/* Semi-circle glow behind button */}
        <div className="absolute w-[629px] h-[670px] left-1/2 -translate-x-1/2 top-[355px] rounded-full bg-[#EDB9FF] blur-[106px] rotate-[-90deg] -z-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          {contactContent.heading.split("<br />").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < contactContent.heading.split("<br />").length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
          {contactContent.description}
        </p>

        {/* Button */}
        <button className="mt-8 px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 relative z-10" onClick={() => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL, "_blank")}>
          
          {contactContent.buttonText}
        </button>
      </div>
    </section>
  );
}
