export interface Feature {
  feature: string;
  meaning: string;
}

export interface WhositFor {
  title: string;
  text: string;
}

export interface Benefit {
  benefit: string;
  reason: string;
}

export interface Outcome {
  value: string;
  reason: string;
}

export interface Product {
  id: string;
  title: string; // Hero heading
  tagline: string; // Hero tagline
  introHeading: string; // Intro section heading
  intro: string[]; // Intro paragraphs
  featuresHeading: string; // Features section heading
  features: Feature[];
  whositForHeading: string; // Who's it for heading
  whositFor: WhositFor[];
  howItWorksHeading: string; // How it works heading
  howItWorks: string[];
  benefitsHeading: string; // Benefits section heading
  benefits: Benefit[];
  edgeHeading: string; // Edge heading
  edgetitle: string;
  edgedes: string[]; // ✅ Array of paragraphs now
  keyOutcomesHeading: string; // Key outcomes heading
  keyOutcomes: Outcome[];
  cta: {
    heading: string;
    description: string;
    demo: string;
    expert: string;
  };
}


export const products: Product[] = [
  // Product 1: DialogIQ
  {
    id: "1",
    title: "Let Your Platform Talk. And Convert.",
    tagline: "Plug-and-Play Conversational Intelligence for Real-Time Lead Generation & 24/7 Support",
    introHeading: "Meet DialogIQ — The Future of Digital Conversations",
    intro: [
      "Why let website visitors slip away when you can engage them instantly?",
      "Equix DialogIQ is an AI-powered chatbot solution that turns your digital touchpoints into smart, conversational sales and support assistants. Built on powerful NLP and designed for plug-and-play deployment, DialogIQ understands, engages, and converts your visitors—automatically.",
      "From capturing leads and booking demos to resolving queries and syncing with CRMs, DialogIQ works around the clock—so you don’t have to."
    ],
    featuresHeading: "What Makes DialogIQ a Game-Changer?",
    features: [
      { feature: "Contextual AI Engine", meaning: "Understands user intent & context to hold natural, multi-turn conversations." },
      { feature: "Smart Lead Qualification", meaning: "Filters high-intent leads and pushes them straight to your CRM." },
      { feature: "No-Code Setup", meaning: "Go live in hours—not weeks. No developers required." },
      { feature: "Multilingual & Multichannel", meaning: "Speak with users in English, Arabic, French & more across websites, apps etc." },
      { feature: "Custom Chat UI", meaning: "Branded chatbot experience to match your website design and voice." },
      { feature: "Real-Time Support", meaning: "Handles FAQs, queries, and order lookups without human agents." },
      { feature: "Integrated Dashboard", meaning: "Get insights on top questions, drop-offs, and conversions." },
      { feature: "Secure & GDPR Compliant", meaning: "Built with enterprise-grade encryption and data privacy in mind." }
    ],
    whositForHeading: "Who’s It For?",
    whositFor: [
      { title: "eCommerce Stores", text: "Handle returns, order status, and FAQs" },
      { title: "Healthcare & Clinics", text: "Book appointments, triage symptoms, share info" },
      { title: "EdTech Platforms", text: "Help students pick courses, enroll, and learn" },
      { title: "Finance & Insurance", text: "Share quotes, answer policy queries, verify KYC" },
      { title: "B2B Companies", text: "Guide leads, share decks, automate support" }
    ],
    howItWorksHeading: "How DialogIQ Works in the Real World",
    howItWorks: [
      "Qualify website visitors with smart questions and push leads to CRM",
      "Instantly respond to 50+ FAQs—cutting manual load by 60%",
      "Let users schedule demos or appointments directly from the chat",
      "Track chat performance and continuously optimize flows",
      "Update customers on order status or account details over WhatsApp"
    ],
    benefitsHeading: "Why Equix DialogIQ Stands Out",
    benefits: [
      { benefit: "Rapid Deployment", reason: "Go live without technical bottlenecks." },
      { benefit: "Modular & Flexible", reason: "Tailor flows for any business—no heavy dev work." },
      { benefit: "Conversion-Driven Design", reason: "More signups. More demos. More purchases." },
      { benefit: "Enterprise-Ready Security", reason: "Encrypted chats. Role-based access. Full compliance." },
      { benefit: "Global-Ready", reason: "Speak your customer’s language—wherever they are." }
    ],
    edgeHeading: "The Equix Edge",
edgetitle: "At Equix, we believe conversations convert.",
edgedes: [
  "DialogIQ isn’t just another chatbot. It’s your brand’s always-on digital rep—friendly, informed, and laser-focused on driving outcomes. As part of the Equix Smart Automation Suite, DialogIQ plugs into your existing stack and scales as you grow."
],
    keyOutcomesHeading: "Key Outcomes for Your Stakeholders",
    keyOutcomes: [
      { value: "Problem Solved", reason: "Replace static forms with dynamic, AI-powered engagement." },
      { value: "Revenue Boost", reason: "Improve conversions and lead quality effortlessly." },
      { value: "Support Savings", reason: "Automate up to 60% of routine queries." },
      { value: "Seamless Integration", reason: "Works with CRMs, helpdesks, and websites via APIs/widgets." },
      { value: "Scalable Architecture", reason: "Perfect for high-volume, multilingual customer interactions." }
    ],
    cta: {
      heading: "Get started with Equix DialogIQ today",
      description: "With Equix, you don’t have to reinvent the wheel to get the power of AI. Our products are purpose-built to modernize your operations, optimize your workflows, and future-proof your business—faster, smarter, and simpler.",
      demo: "Book a Demo",
      expert: "Talk to Our Experts"
    }
  },

  // Product 2: DocuGenie
  {
    id: "3",
    title: "Turn Documents Into Decisions—Instantly",
    tagline: "AI-powered document automation & intelligent workflow assistant for operations that can’t afford delays.",
    introHeading: "Say Hello to DocuGenie – Your Always-On Document Analyst",
    intro: [
      "Tired of manual paperwork, slow approvals, or misplaced files?",
      "Equix DocuGenie revolutionizes document-heavy workflows using cutting-edge AI. It reads, understands, and processes documents—be it scanned contracts, invoices, shipping papers, or email attachments—with zero fatigue and 24/7 precision.",
      "No more human bottlenecks. No more data entry chaos. Just fast, accurate, automated document processing—so your teams can focus on high-value work."
    ],
    featuresHeading: "What DocuGenie Brings to the Table",
    features: [
      { feature: "Advanced OCR Engine", meaning: "Reads handwritten, printed, or scanned docs with precision." },
      { feature: "NLP-Based Understanding", meaning: "Extracts key fields, clauses, and insights—even from complex formats." },
      { feature: "Industry-Ready Models", meaning: "Templates for Legal, Finance, Logistics, Insurance, and more." },
      { feature: "Smart Email Analyzer", meaning: "Parses inboxes, detects intent, and routes docs or replies." },
      { feature: "Hybrid Classification", meaning: "Combines rules + ML for smarter document categorization." },
      { feature: "Automated Data Entry", meaning: "Feeds clean, structured data into ERP, CRM, or custom systems." },
      { feature: "Multilingual Recognition", meaning: "Handles documents in English, Arabic, Hindi, French, and beyond." },
      { feature: "Audit Trail + Human Review", meaning: "Ensures trust with confidence scores and intervention layers." },
      { feature: "Seamless API Integration", meaning: "Syncs with SAP, Salesforce, Oracle, Zoho, and legacy systems." }
    ],
    whositForHeading: "Who Can Benefit from DocuGenie?",
    whositFor: [
      { title: "Legal Firms", text: "Parse NDAs, extract client info, and automate case intake." },
      { title: "Finance Teams", text: "Digitize invoices, read payment terms, and support audits." },
      { title: "Logistics Providers", text: "Process B/Ls, update ERP with container status." },
      { title: "Insurance Companies", text: "Automate claim form handling and policy verifications." },
      { title: "Operations & Back-Office", text: "Sort 100+ daily emails, extract attachments, route workflows." }
    ],
    howItWorksHeading: "Real-World Automation in Action",
    howItWorks: [
      "Extract names, clauses & deadlines from scanned agreements and update legal CRMs",
      "Sort, tag, and route 100+ emails daily to the correct departments automatically",
      "Parse invoice terms and notify the finance team before due dates hit",
      "Process shipping documents and sync milestones with ERP dashboards",
      "Validate KYC docs instantly and flag errors before they reach compliance"
    ],
    benefitsHeading: "Why Teams Choose Equix DocuGenie",
    benefits: [
      { benefit: "Faster Than Manual", reason: "Cut document processing time by over 80%." },
      { benefit: "Smarter Than Rules", reason: "Learns from patterns; handles edge cases better." },
      { benefit: "Plug & Play Deployment", reason: "Use pre-trained templates. Go live in a day." },
      { benefit: "Secure & Compliant", reason: "Role-based access, encryption, audit logs built-in." },
      { benefit: "Scalable & Adaptable", reason: "Process thousands of documents per day without slowdowns." }
    ],
    edgeHeading: "The Equix Edge",
    edgetitle: "At Equix Solutions, we build real-world-ready AI tools that scale with your needs.",
edgedes: [
  "DocuGenie isn’t just another OCR app—it’s your tireless virtual analyst that connects documents to outcomes. From parsing contracts to sorting inboxes, it gives your operations a competitive edge by automating what slows you down most. ",
  "It’s fast. It's reliable. It's intelligentAnd it fits right into your workflow—today.",
 
],

    keyOutcomesHeading: "Key Outcomes for Your Operations",
    keyOutcomes: [
      { value: "Problem Solved", reason: "Automates slow, manual document tasks with AI." },
      { value: "Efficiency Gains", reason: "Cuts labor hours, boosts turnaround time." },
      { value: "Unified Tech Stack", reason: "Combines OCR, NLP & ML under one platform." },
      { value: "Easy to Integrate", reason: "Works with your current tools, no rip-and-replace." },
      { value: "Control & Compliance", reason: "Full audit trails, low-risk automation, GDPR aligned." }
    ],
    cta: {
      heading: "Try Equix DocuGenie today",
      description: "Go from paperwork chaos to intelligent processing—fast, accurate, and automated for your operations.",
      demo: "Request a Demo",
      expert: "Talk to an Expert"
    }
  },

  // Product 3: VisionTrack AI
  {
    id: "2",
    title: "See Smarter. Act Faster.",
    tagline: "AI-powered computer vision solution for intelligent surveillance and real-time threat detection.",
    introHeading: "Meet VisionTrack AI – Smarter Eyes for Safer Spaces",
    intro: [
      "Security shouldn't be reactive. VisionTrack AI turns everyday CCTV and IP cameras into intelligent, always-on surveillance networks powered by AI.",
      "Whether you manage a single warehouse or a 200-camera smart city grid, VisionTrack adds real-time detection, behavioral analytics, and instant alerting to your infrastructure—without replacing your existing systems.",
      "From license plate recognition to PPE compliance and anomaly detection, it's more than surveillance—it’s video transformed into actionable insight."
    ],
    featuresHeading: "What Makes VisionTrack AI Unique?",
    features: [
      { feature: "Facial & License Plate Recognition", meaning: "Identify faces and vehicles accurately, even in low-light or crowd scenarios." },
      { feature: "Intrusion & Behavioral Monitoring", meaning: "Spot perimeter breaches, loitering, crowd build-up, or suspicious movement." },
      { feature: "PPE Compliance Detection", meaning: "Instantly flag workers missing helmets, vests, or badges." },
      { feature: "Environmental Anomaly Alerts", meaning: "Detect fire, smoke, or sudden motion before disaster strikes." },
      { feature: "Custom Alert Engine", meaning: "Trigger role-based alerts by behavior, time, zone, or safety rule violation." },
      { feature: "Deep Insights Dashboard", meaning: "Visualize heatmaps, footfall trends, and behavioral patterns." },
      { feature: "Flexible API Integration", meaning: "Plug into ERPs, access systems, CRMs, and third-party software." },
      { feature: "Hybrid Edge + Cloud Architecture", meaning: "Get instant local response with optional cloud processing." }
    ],
    whositForHeading: "Built for Every Industry",
    whositFor: [
      { title: "Enterprises & Government", text: "Secure facilities, log visitors, conduct forensic investigations" },
      { title: "Industrial & Manufacturing", text: "PPE tracking, hazard monitoring, safe-zone enforcement" },
      { title: "Retail & Warehousing", text: "Detect theft, optimize queues, monitor customer flow" },
      { title: "Smart Homes & Apartments", text: "Facial recognition access, visitor alerts, package detection" },
      { title: "Logistics Hubs & Transport", text: "LPR at gates, checkpoint footage, fleet surveillance" }
    ],
    howItWorksHeading: "VisionTrack in Action",
    howItWorks: [
      "Detect unauthorized access to restricted zones and\n notify security instantly",
      "Identify loitering near high-value areas and tag footage for audit",
      "Flag PPE violations such as missing helmets or safety vests in real time",
      "Detect smoke/fire anomalies before human guards can see them",
      "Read vehicle plates at entry points and push data to central ERP",
      "Analyze footfall, dwell time, and heatmaps for space optimization"
    ],
    benefitsHeading: "Why Choose VisionTrack AI?",
    benefits: [
      { benefit: "Instant Risk Response", reason: "Prevent incidents instead of reacting after the fact" },
      { benefit: "Forensic-Ready Tools", reason: "Deep search, incident tagging, and timeline playback" },
      { benefit: "Reduced Risk & Loss", reason: "Minimize theft, injury, and access violations" },
      { benefit: "Operational Intelligence", reason: "Turn camera data into actionable insights" },
      { benefit: "Privacy-Centric Design", reason: "No cloud? No problem. Run 100% locally" }
    ],
    edgeHeading: "The Equix Edge",
   edgetitle: "At Equix Solutions, we build smart tools that integrate with your business—not against it.",
edgedes: [
  "VisionTrack AI is part of our intelligent automation suite that makes real-time surveillance smarter, scalable, and operationally valuable.",
  "From startups to smart cities, our vision platform scales without the drag of bloated hardware or closed systems",
  "Your existing cameras just got an upgrade—with intelligence."
],

    keyOutcomesHeading: "VisionTrack Takeaways for Stakeholders",
    keyOutcomes: [
      { value: "Problem Solved", reason: "Transforms passive video surveillance into proactive, intelligent monitoring" },
      { value: "Tech Edge", reason: "Combines behavioral AI, edge computing, and smart alerting" },
      { value: "Compliance Ready", reason: "Privacy-focused, with full audit trail and role-based access" },
      { value: "ROI Driven", reason: "Reduce loss, speed up investigations, automate safety audits" },
      { value: "Easy Integration", reason: "Plug into your ERP, CRM, access control, or attendance system" }
    ],
    cta: {
      heading: "Experience the power of VisionTrack AI today",
      description: "With Equix, you don’t have to reinvent the wheel to get the power of AI. Our products are purpose-built to modernize your operations, optimize your workflows, and future-proof your business—faster, smarter, and simpler.",
      demo: "Request a Demo",
      expert: "Talk to an Expert"
    }
  }
];
