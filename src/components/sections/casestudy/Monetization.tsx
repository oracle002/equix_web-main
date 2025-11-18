// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import bulletIcon from "@/assets/images/bullet2.svg";
// import { caseStudies } from "@/content/caseStudies";

// export default function MonetizationStrategy() {
// const { id } = useParams();
// const study = caseStudies.find((c) => c.id === id);

// if (!study || !study.monetizationStrategy) return null;

// const containerVariants = {
// hidden: { opacity: 0 },
// visible: {
// opacity: 1,
// transition: { staggerChildren: 0.15 },
// },
// };

// const cardVariants = {
// hidden: { opacity: 0, y: 30 },
// visible: {
// opacity: 1,
// y: 0,
// transition: { duration: 0.5 },
// },
// };

// return ( <section className="bg-[#0A0219] text-white px-4 md:px-8 py-12 md:py-16 rounded-3xl mx-4 md:mx-8 my-12">
// {/* ===== Title ===== */}
// <motion.h2
// initial={{ opacity: 0, y: -20 }}
// whileInView={{ opacity: 1, y: 0 }}
// viewport={{ once: true }}
// transition={{ duration: 0.6 }}
// className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-10"
// >
// Monetization Strategy
// </motion.h2>

//   {/* ===== Strategy Cards Grid ===== */}
//   <motion.div
//     variants={containerVariants}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.2 }}
//     className="grid grid-cols-1 md:grid-cols-2 gap-6"
//   >
//     {study.monetizationStrategy.map((strategy, index) => (
//       <motion.div
//         key={index}
//         variants={cardVariants}
//         whileHover={{
//           scale: 1.02,
//           transition: { duration: 0.3 },
//         }}
//         className="bg-gradient-to-br from-[#3d2669] to-[#2a1a4a] border border-white/20 rounded-2xl p-6 shadow-md hover:border-white/40 transition-all duration-300"
//       >
//         {/* ===== Card Title ===== */}
//         <h3 className="text-white font-semibold text-base md:text-lg">
//           {strategy.title}
//         </h3>

//         {/* Divider */}
//         <div className="w-full h-px bg-white/40 my-4" />

//         {/* ===== Points List ===== */}
//         <ul className="space-y-2">
//           {strategy.points.map((point, idx) => (
//             <li
//               key={idx}
//               className="flex items-start gap-3 text-gray-200 text-sm md:text-base leading-relaxed"
//             >
//               <Image
//                 src={bulletIcon}
//                 alt="bullet"
//                 width={10}
//                 height={10}
//                 className="mt-1 flex-shrink-0"
//               />
//               <span>{point}</span>
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     ))}
//   </motion.div>
// </section>


// );
// }
