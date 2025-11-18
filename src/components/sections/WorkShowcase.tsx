"use client";
import Meta from "../layout/Meta";
import { MetaData, pageMeta } from "@/lib/metadata";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import star from "@/assets/images/star-icon-violet.svg";




// ✅ Importing images
import product1 from "@/assets/images/products/Sunrise.png";
import product2 from "@/assets/images/products/Appointment.png";
import product3 from "@/assets/images/products/YellowDoor.png";
import product4 from "@/assets/images/products/HR Management App.png";
import product5 from "@/assets/images/products/RareFauna.png";
import product6 from "@/assets/images/products/Oudh Markaz.png";


// Product data with proper TypeScript typing
interface Product {
  id: number;
  title: string;
  category: string;
  bgColor?: string;
  image: import("next/image").StaticImageData; // Next.js StaticImageData type
  size?: string;
}

export const products: Product[] = [
  { id: 1, title: "Sunrise", category: "Web Development", bgColor: "from-purple-200/30 to-purple-300/30", image: product1, size: "tall" },
  { id: 2, title: "Appointment Booking App", category: "App Development", bgColor: "from-emerald-200/30 to-emerald-300/30", image: product2 },
  { id: 3, title: "YellowDoor", category: "Branding", bgColor: "from-yellow-200/30 to-orange-300/30", image: product3 },
  { id: 4, title: "HR Management App", category: "App Development", image: product4 },
  { id: 5, title: "RareFauna", category: "Branding", bgColor: "from-slate-200/30 to-blue-300/30", image: product5 },
  { id: 6, title: "Oudh Markaz", category: "Web Development", image: product6, size: "tall" },
];

export default function WorkShowcase() {
  return (
    <section id="showcase" className="min-h-screen  py-12 px-6">
      <Meta {...pageMeta.workShowcase as MetaData} />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Work That Speaks</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Where big ideas become scalable realities—crafted, coded, and delivered with intent.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Row 1: Tall left, two small right */}
          <SunriseCard product={products[0]} />
          <div className="grid grid-rows-2 gap-6">
            <AppointmentCard product={products[1]} />
            <YellowDoorCard product={products[2]} />
          </div>

          {/* Row 2: Two small left, tall right */}
          <div className="grid grid-rows-2 gap-6">
            <HRCard product={products[3]} />
            <RareFaunaCard product={products[4]} />
          </div>
          <OudhMarkazCard product={products[5]} />
        </div>

        {/* Banner Image Section - Fixed positioning */}
        {/* <div className="mt-16 flex justify-center">
          <div className="w-full max-w-4xl">
            <Image 
              src={bannerImage} 
              alt="Banner" 
              className="w-full h-auto object-cover rounded-2xl" 
            />
          </div>
          
        </div> */}
        <div className="w-full mt-15 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex justify-center items-center gap-3 md:gap-8 px-4"
      >
        {["Dream", "Design", "Develop"].map((tag, index) => (
          <div key={tag} className="flex items-center gap-3 md:gap-8">
            <h3 className="text-xl sm:text-2xl md:text-5xl lg:text-5xl font-light tracking-wide text-gray-900 whitespace-nowrap">
              {tag}
            </h3>
            {index < 2 && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "linear",
                }}
                className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 flex-shrink-0"
              >
                <Image src={star} alt="star" className="w-full h-full object-contain" />
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
        

        
      </div>
    </section>
  );
}

// Specific cards with proper TypeScript typing
function SunriseCard({ product }: { product: Product }) {
    const router = useRouter();
  return (
    <div className="relative rounded-3xl min-h-96 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-purple-200/30 to-purple-300/30 p-6 flex flex-col">
      
      {/* Top-right blurred circle */}
      <div className="absolute -top-40 -right-32 w-[380px] h-[380px] bg-[#D7C3FF] rounded-full filter blur-[100px] pointer-events-none"></div>

      {/* Bottom-left blurred circle */}
      <div className="absolute -bottom-40 -left-16 w-[170px] h-[170px] bg-[#EFE7FF] rounded-full filter blur-[100px] pointer-events-none"></div>

      {/* Text and Button  */}
      <div className="relative flex flex-col flex-grow justify-between z-10">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
          <p className="text-gray-700 font-medium">{product.category}</p>
        </div>
        <div className="mt-auto relative z-20">
          {/* White blur above image but below Button  */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[170px] h-[170px] bg-white/30 rounded-full filter blur-[100px] pointer-events-none z-10"></div>

          <Button  variant="animated" size="default" onClick={() => router.push(`/projects/${product.id}`)}className="relative z-20 bg-white text-[#410EAB] px-5 py-1.5 rounded-full font-medium backdrop-blur-md hover:bg-white/90 transition">
            View
          </Button >
        </div>
      </div>

      {/* Image on the right */}
      <div className="absolute bottom-0 left-1/2 w-[60%] h-auto -translate-x-1/2 pointer-events-none transition-transform duration-500 group-hover:scale-105 z-0">
        <Image
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}

function AppointmentCard({ product }: { product: Product }) {
  const router = useRouter();
  return (
    <div className="relative rounded-3xl p-6 bg-[#96FFD3]/50 min-h-48 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] flex flex-col">
      
      {/* Small blurred overlay top-left */}
      <div className="absolute -top-16 -left-16 w-[180px] h-[180px] bg-[#92E1B9] rounded-full filter blur-[100px] pointer-events-none"></div>

      {/* Text and Button  */}
      <div className="relative flex flex-col flex-grow justify-between z-10">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
          <p className="text-gray-700 font-medium">{product.category}</p>
        </div>
       <div className="mt-auto">
          <Button  variant="animated" size="default"  onClick={() => router.push(`/projects/${product.id}`)}  className="bg-white text-[#410EAB] px-5 py-1.5 rounded-full font-medium backdrop-blur-md hover:bg-white/90 transition">
            View
          </Button >
        </div>
      </div>

      {/* Image at bottom-right */}
      <div className="absolute bottom-0 right-0 w-[45%] h-auto pointer-events-none transition-transform duration-500 group-hover:scale-105">
        <Image
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}

function YellowDoorCard({ product }: { product: Product }) {
  const router = useRouter();
  return (
    <div className="relative rounded-3xl p-6 bg-[#FFDB8A]/50 min-h-48 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] flex flex-col">
      
      {/* Small blurred overlay top-left */}
      <div className="absolute -top-16 -left-16 w-[180px] h-[180px] bg-[#FFDB8A] rounded-full filter blur-[100px] pointer-events-none"></div>

      {/* Black circle behind image at bottom-right */}
      <div className="absolute -bottom-16 -right-16 w-[150px] h-[150px] bg-black/30 rounded-full filter blur-[100px] pointer-events-none"></div>

      {/* Text and Button  */}
      <div className="relative flex flex-col flex-grow justify-between z-10">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
          <p className="text-gray-700 font-medium">{product.category}</p>
        </div>
       <div className="mt-auto">
          <Button  variant="animated" size="default"  onClick={() => router.push(`/projects/${product.id}`)} className="bg-white text-[#410EAB] px-5 py-1.5 rounded-full font-medium backdrop-blur-md hover:bg-white/90 transition">
            View
          </Button >
        </div>
      </div>

      {/* Image at bottom-right */}
      <div className="absolute bottom-2 right-0 w-[48%] h-auto pointer-events-none transition-transform duration-500 group-hover:scale-105">
        <Image
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}

function RareFaunaCard({ product }: { product: Product }) {
 const router = useRouter();
  return (
    <div className="relative rounded-3xl p-6 bg-gradient-to-br from-slate-200/30 to-blue-300/30 min-h-48 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] flex flex-col">
      
      {/* Small blurred overlay top-left */}
      <div className="absolute -top-16 -left-16 w-[180px] h-[180px] bg-[#A6C5E8] rounded-full filter blur-[100px] pointer-events-none"></div>

      {/* Text and Button  */}
      <div className="relative flex flex-col flex-grow justify-between z-10">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
          <p className="text-gray-700 font-medium">{product.category}</p>
        </div>
        <div className="mt-auto">
          <Button  variant="animated" size="default"  onClick={() => router.push(`/projects/${product.id}`)}className="bg-white text-[#410EAB] px-5 py-1.5 rounded-full font-medium backdrop-blur-md hover:bg-white/90 transition">
            View
          </Button >
        </div>
      </div>

      {/* Image on the right side */}
      <div className="absolute top-0 right-0 w-[35%] h-auto pointer-events-none transition-transform duration-500 group-hover:scale-105">
        <Image
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full"
        />
      </div>

    </div>
  );
}

function HRCard({ product }: { product: Product }) {
  const router = useRouter();
  return (
    <div className="relative rounded-3xl p-6 bg-[#3A6375] min-h-48 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] flex flex-col">
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#8DBACD] rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="relative flex flex-col flex-grow justify-between z-10">
        <div>
          <h3 className="text-xl font-bold text-white">{product.title}</h3>
          <p className="text-gray-200 font-medium">{product.category}</p>
        </div>
        <div className="mt-auto">
          <Button  variant="animated" size="default"  onClick={() => router.push(`/projects/${product.id}`)}className="bg-white text-[#410EAB] px-5 py-1.5 rounded-full font-medium backdrop-blur-md hover:bg-white/90 transition">
            View
          </Button >
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[45%] h-auto pointer-events-none transition-transform duration-500 group-hover:scale-105">
        <Image src={product.image} alt={product.title} className="object-contain w-full h-full" />
      </div>
    </div>
  );
}

function OudhMarkazCard({ product }: { product: Product }) {
    const router = useRouter();
  return (
    <div className="relative rounded-3xl p-6 bg-[#F4F6F8] min-h-96 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] flex flex-col">
      <div className="absolute inset-0 z-0">
        <Image src={product.image} alt={product.title} className="w-full h-full object-cover" />
      </div>
      <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] bg-[#D2B48C] rounded-full filter blur-[100px] pointer-events-none z-10"></div>
      <div className="absolute -top-64 -left-64 w-[600px] h-[600px] bg-[#D2B48C] rounded-full filter blur-[100px] pointer-events-none z-10"></div>
      <div className="relative flex flex-col flex-grow justify-between z-20">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
          <p className="text-gray-700 font-medium">{product.category}</p>
        </div>
        <div className="mt-auto">
          <Button  variant="animated" size="default"  onClick={() => router.push(`/projects/${product.id}`)}className="bg-white text-[#410EAB] px-5 py-1.5 rounded-full font-medium backdrop-blur-md hover:bg-white/90 transition">
            View
          </Button>
        </div>
      </div>
    </div>
  );
}