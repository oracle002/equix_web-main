export interface MetaData {
  title: string;
  description: string;
  keywords: string[];
}

interface ProductMeta {
  dialogIQ: MetaData;
  visionTrackAI: MetaData;
  docuGenie: MetaData;
}

export const pageMeta: {
  [key: string]: MetaData | ProductMeta;
  products: ProductMeta;
} = {
  home: {
    title: "Equix Solutions | Web, App & AI Development Company",
    description:
      "Empowering brands through design, code, and AI. Equix Solutions builds future-ready websites, mobile apps, and intelligent digital experiences that scale.",
    keywords: [
      "digital transformation",
      "web & app development",
      "AI solutions",
      "creative technology agency",
      "UI/UX design company",
    ],
  },

  whyEquix: {
    title: "About Equix Solutions | Innovators in Design & Technology",
    description:
      "Born from creativity and driven by purpose, Equix Solutions blends strategy, design, and technology to craft human-centered digital experiences that inspire growth.",
    keywords: [
      "technology innovation agency",
      "UI/UX experts",
      "creative tech company",
      "about Equix Solutions",
      "digital experience creators",
    ],
  },

  services: {
    title:
      "Our Services | Web, Mobile, UI/UX & AI Solutions by Equix",
    description:
      "From web and mobile apps to AI and branding, Equix Solutions delivers bold, scalable digital solutions powered by innovation, strategy, and smart design.",
    keywords: [
      "web app development",
      "UI UX design",
      "AI & data solutions",
      "branding agency",
      "enterprise modernization",
    ],
  },

  workShowcase: {
    title: "Our Projects | Real Stories of Digital Transformation",
    description:
      "Explore Equix Solutions’ success stories—where design meets technology. See how we turn ideas into intelligent solutions across industries and platforms.",
    keywords: [
      "case studies",
      "web design portfolio",
      "AI project success stories",
      "digital transformation projects",
    ],
  },

  companyOverview: {
    title: "Equix AI Product Suite | Intelligent Automation Tools",
    description:
      "Discover scalable AI-powered products by Equix Solutions—DialogIQ, DocuGenie, and VisionTrack—built to automate, optimize, and transform business workflows.",
    keywords: [
      "AI automation tools",
      "document processing",
      "chatbot solutions",
      "computer vision software",
    ],
  },

  contactCard: {
    title: "Contact Equix Solutions | Start Your Digital Project Today",
    description:
      "Have a bold idea? Let’s build it together. Contact Equix Solutions to discuss web, app, or AI development—crafted to scale your business intelligently.",
    keywords: [
      "contact Equix",
      "hire web developers",
      "AI solution consultation",
      "digital transformation consultation",
    ],
  },

  caseStudies: {
    title: "Equix Case Studies | Real Impact of AI & Digital Solutions",
    description:
      "See how Equix Solutions transforms businesses with AI, automation, and design innovation. Explore measurable results and digital success stories.",
    keywords: [
      "AI case studies",
      "digital transformation results",
      "automation success",
      "AI implementation success stories",
    ],
  },

  voicesOfTrust: {
    title: "Client Testimonials | What Businesses Say About Equix",
    description:
      "Hear from our clients about their journey with Equix Solutions. Trusted by brands worldwide for web, mobile, AI, and digital transformation success.",
    keywords: [
      "client reviews",
      "software company testimonials",
      "digital agency feedback",
      "Equix Solutions client reviews",
    ],
  },

  footer: {
    title: "Equix Solutions | Dream. Design. Develop. Deliver.",
    description:
      "A global technology partner delivering next-gen web, mobile, and AI solutions that redefine digital experiences. Let’s shape your future together.",
    keywords: [
      "AI software company",
      "full-stack development agency",
      "creative tech firm",
      "digital design and development agency",
    ],
  },
  

products: {
    dialogIQ: {
      title: "Equix DialogIQ | AI Chatbot for Lead Generation",
      description:
        "Equix DialogIQ is a conversational AI platform designed for website chatbot automation, smart lead qualification, and AI-driven customer engagement.",
      keywords: [
        "AI chatbot for lead generation",
        "conversational AI platform",
        "website chatbot automation",
        "AI customer support bot",
        "multilingual chatbot solution",
        "NLP chatbot for websites",
        "chatbot with CRM integration",
        "no-code chatbot builder",
      ],
    },

    visionTrackAI: {
      title: "VisionTrack AI | Computer Vision Security System",
      description:
        "VisionTrack AI is an intelligent surveillance platform powered by computer vision for real-time threat detection, PPE compliance, and behavioral analytics.",
      keywords: [
        "AI surveillance software",
        "computer vision security system",
        "intelligent CCTV analytics",
        "real-time threat detection",
        "PPE compliance detection",
        "facial recognition software",
        "AI video analytics platform",
        "smart camera monitoring",
        "behavioral analytics system",
      ],
    },

    docuGenie: {
      title: "Equix DocuGenie | AI Document Automation Software",
      description:
        "DocuGenie automates document processing with OCR data extraction, intelligent workflow automation, and NLP-powered insights.",
      keywords: [
        "AI document automation software",
        "OCR data extraction tool",
        "intelligent document processing",
        "document workflow automation",
        "NLP-based document reader",
        "automated invoice processing",
        "AI for legal document review",
        "digital document management",
        "smart OCR for business",
      ],
    },
  },
};