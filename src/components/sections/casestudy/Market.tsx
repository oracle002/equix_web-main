import { motion } from "framer-motion";

interface AudienceTag {
  text: string;
}

interface Trend {
  text: string;
}

interface TargetAudienceMarketProps {
  audiences?: AudienceTag[];
  marketSize?: string;
  marketSizeDesc?: string;
  parentingApps?: string;
  parentingAppsDesc?: string;
  trends?: Trend[];
}

export default function TargetAudienceMarket({

  marketSize = "Global baby care market:",
  marketSizeDesc = "Expected to exceed $110 billion by 2026.",
  parentingApps = "Parenting apps segment:",
  parentingAppsDesc = "Growing rapidly with a CAGR of 9.6% (2023—2030).",
  trends = [
    { text: "Increasing use of AI in healthcare & parenting." },
    { text: "Rise in nuclear family households." },
    { text: "Growing demand for real-time parenting support apps." },
    { text: "Higher smartphone and wearable penetration." }
  ]
}: TargetAudienceMarketProps) {
  


  const trendVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 pt-1 md:pt-1">


      {/* Market Opportunity */}
      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 rounded-3xl p-8 md:p-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
        >
          Market Opportunity
        </motion.h2>

        {/* Market Size */}
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
            Market Size
          </h3>
          <p className="text-sm md:text-base text-black mb-1">
            <span className="font-semibold">{marketSize}</span> {marketSizeDesc}
          </p>
          <p className="text-sm md:text-base text-black">
            <span className="font-semibold">{parentingApps}</span> {parentingAppsDesc}
          </p>
        </div>

        {/* Trends Supporting Adoption */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
            Trends Supporting Adoption
          </h3>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {trends.map((trend, index) => (
              <motion.div
                key={index}
                variants={trendVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-[#1a0b3f] text-white rounded-2xl p-5 hover:shadow-lg transition-all duration-300"
              >
                <p className="text-sm md:text-base font-semibold leading-relaxed">
                  {trend.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}