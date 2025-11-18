"use client";
import Meta from "../layout/Meta";
import { MetaData, pageMeta } from "@/lib/metadata";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { servicesContent } from "@/content/servicesContent";

export default function ServicesSection() {
  const services = servicesContent.services;
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Determine which service is currently highlighted
  const activeService = hoveredService || services[0].name;
  const active = services.find((s) => s.name === activeService);

  return (
    <section
      id="services"
      className="relative text-white rounded-2xl mx-4 md:mx-10 my-12 overflow-hidden"
    >
      <Meta {...pageMeta.services as MetaData} />
      {/* Background Container */}
      <div className="bg-[#0D0524] rounded-[20px] p-6 md:p-8 lg:p-12">
        {/* HEADER */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {servicesContent.heading}
          </h2>
          <p className="text-gray-300 max-w-lg">{servicesContent.subHeading}</p>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="md:hidden">
          {/* Active Service Image */}
          <div className="relative mb-6 w-full h-[240px] sm:h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active?.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {active?.image && (
                  <Image
                    src={active.image}
                    alt={activeService}
                    fill
                    className="rounded-[20px] object-cover"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Services List - Mobile */}
          <div className="flex flex-col gap-3 mb-6">
            {services.map((service) => {
              const isActive = activeService === service.name;
              return (
                <motion.button
                  key={service.name}
                  onMouseEnter={() => setHoveredService(service.name)}
                  onMouseLeave={() => setHoveredService(null)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all overflow-hidden text-left"
                  style={{ height: "60px" }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBackgroundMobile"
                      className="absolute inset-0 rounded-[10px]"
                      style={{
                        background:
                          "linear-gradient(90.76deg, rgba(147,117,206,0.3) 46.54%, rgba(120,95,201,0.3) 99.79%)",
                      }}
                      transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    />
                  )}

                  <div className="relative flex items-center gap-3 z-10">
                    {isActive && (
                      <Image
                        src={service.icon}
                        alt={service.name}
                        width={44}
                        height={44}
                        className="object-contain flex-shrink-0"
                      />
                    )}
                    <span
                      className={`text-lg ${
                        isActive
                          ? "text-white font-bold"
                          : "text-gray-400 font-semibold"
                      }`}
                    >
                      {service.name}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Active Service Description */}
          <motion.p
            key={active?.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-300 leading-relaxed text-sm"
          >
            {active?.description}
          </motion.p>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT → Active Image + Description */}
          <div className="flex flex-col">
            <div className="relative mb-6 w-full max-w-[589px] h-[300px] lg:h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active?.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {active?.image && (
                    <Image
                      src={active.image}
                      alt={activeService}
                      fill
                      className="rounded-[20px] object-cover"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p
              key={active?.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-300 leading-relaxed max-w-lg"
            >
              {active?.description}
            </motion.p>
          </div>

          {/* RIGHT → Full Services List */}
          <div className="flex flex-col justify-between h-[300px] lg:h-[360px]">
            {services.map((service) => {
              const isActive = activeService === service.name;
              return (
                <motion.button
                  key={service.name}
                  onMouseEnter={() => setHoveredService(service.name)}
                  onMouseLeave={() => setHoveredService(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative flex items-center gap-3 rounded-lg font-bold transition-all overflow-hidden ${
                    isActive ? "px-6 py-4" : "px-3 py-2"
                  }`}
                  style={{
                    height: isActive ? "74px" : "45px",
                    width: isActive ? "590px" : "100%",
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBackgroundDesktop"
                      className="absolute inset-0 rounded-[10px]"
                      style={{
                        background:
                          "linear-gradient(90.76deg, rgba(147,117,206,0.3) 46.54%, rgba(120,95,201,0.3) 99.79%)",
                      }}
                      transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    />
                  )}

                  <div className="relative flex items-center gap-3 z-10">
                    {isActive && (
                      <Image
                        src={service.icon}
                        alt={service.name}
                        width={55}
                        height={55}
                        className="object-contain"
                      />
                    )}
                    <span
                      className={`${
                        isActive
                          ? "text-white text-xl font-bold"
                          : "text-gray-400 text-lg"
                      }`}
                    >
                      {service.name}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
