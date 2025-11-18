import { motion } from "framer-motion";

interface Functionality {
  title: string;
  description: string;
}

interface ChallengesOverviewProps {
  title?: string;
 
  functionalities?: Functionality[];
}

export default function ChallengesOverview({
  title = "Challenges & Considerations",
  functionalities = [
    {
      title: "Real-Time Voice Recognition & Analysis",
      description: "Detects and interprets baby vocalizations with low-latency processing."
    },
    {
      title: "Emotional Transcript Generator",
      description: "Translates audio cues into understandable text, like \"I'm hungry\" or \"I feel sleepy.\""
    },
    {
      title: "AI-Driven Behavior Mapping",
      description: "Learns and adapts over time for personalized predictions."
    },
    {
      title: "Parent Insight Dashboard",
      description: "Shows trends, moods, patterns, and developmental progress."
    },
    {
      title: "Smart Alerts",
      description: "Push notifications for signs of distress, discomfort, or irregular patterns."
    },
    {
      title: "Multilingual & Cultural Adaptation (Planned)",
      description: "Recognizes global cry variations and nuances."
    }
  ]
}: ChallengesOverviewProps) {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="bg-gradient-to-br from-[#0f0525] via-[#1a0b3f] to-[#0f0525] rounded-3xl p-8 md:p-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
        >
          {title}
        </motion.h2>

        

        {/* Key Functionalities */}
        <h3 className="text-lg md:text-xl font-semibold text-white mb-6">
          Key Functionalities
        </h3>

        {/* Functionalities List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="border border-white rounded-2xl overflow-hidden"
        >
          {functionalities.map((functionality, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col md:flex-row md:items-center gap-4 p-5 md:p-6 hover:bg-purple-900/20 transition-colors duration-300 ${
                index !== functionalities.length - 1 ? 'border-b border-white' : ''
              }`}
            >
              <div className="md:w-2/5 flex-shrink-0">
                <h4 className="text-white font-semibold text-sm md:text-base">
                  {functionality.title}
                </h4>
              </div>
              <div className="md:w-3/5">
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {functionality.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}