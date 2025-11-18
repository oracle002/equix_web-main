"use client";
import Meta from "../layout/Meta";
import { MetaData, pageMeta } from "@/lib/metadata";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/content/testimonials";

const VoicesOfTrust = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section
      id="testimonials"
      className="w-full py-16 bg-gradient-to-b from-gray-100/50 to-purple-100/30"
    >
      <Meta {...pageMeta.voicesOfTrust as MetaData} />
      <div className="max-w-6xl mx-auto px-6 text-center relative">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Voices of Trust
        </h2>
        <p className="text-black-600 max-w-2xl mx-auto mb-16">
          We craft digital ecosystems that are bold in design, strong in tech,
          and built to scale. Strategy, design, and code—flawlessly fused.
        </p>

        {/* Desktop Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-4 z-20 hover:bg-gray-50 transition-all duration-200"
          title="Previous testimonial"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-4 z-20 hover:bg-gray-50 transition-all duration-200"
          title="Next testimonial"
        >
          <ArrowRight className="w-5 h-5 text-gray-700" />
        </button>

        {/* Slider Container */}
        <div className="relative mx-auto max-w-5xl">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={32}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
            centeredSlides={false}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="pb-4"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl mb-1 shadow-sm border border-gray-100 p-6 h-[280px] flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex justify-start mb-4 text-yellow-400 text-xl">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="mr-1">★</span>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-black-700 text-left mb-6 leading-relaxed flex-grow font-medium text-md overflow-hidden">
                    {(t.text || "No testimonial provided.").length > 200 
                      ? `${(t.text || "No testimonial provided.").substring(0, 200)}...`
                      : (t.text || "No testimonial provided.")
                    }
                  </p>

                  {/* User Info */}
                  <div className="flex items-center mt-auto">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover mr-3 flex-shrink-0"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 text-sm leading-tight">{t.name}</h4>
                      <p className="text-xs text-gray-500 font-medium">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-center mt-8 gap-4 items-center">
          {/* Mobile Arrows */}
          <button
            onClick={handlePrev}
            className="flex md:hidden bg-white shadow-md rounded-full p-3 hover:bg-gray-50 transition-all duration-200"
            title="Previous testimonial"
          >
            <ArrowLeft className="w-4 h-4 text-gray-700" />
          </button>

          {/* Dots Pagination */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-purple-600 w-8 h-3"
                    : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
                }`}
                title={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Arrows */}
          <button
            onClick={handleNext}
            className="flex md:hidden bg-white shadow-md rounded-full p-3 hover:bg-gray-50 transition-all duration-200"
            title="Next testimonial"
          >
            <ArrowRight className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VoicesOfTrust;