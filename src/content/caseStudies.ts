export const caseStudies = [
  {
    id: "1",
    title: "Baby Voice Recognition System",
    tagline: "When They Cry, We Clarify.",
    subtitle: "Your baby’s voice decoded – instantly, intuitively, intelligently.",
    intro: [
      "The Baby Voice Recognition System is an AI-powered mobile application aimed at decoding infant vocalizations—such as cries and coos—to help parents understand their baby’s needs in real-time. By using advanced machine learning, speech recognition, and behavior mapping, the system provides accurate, contextual, and actionable insights to new-age parents, especially those in nuclear or dual-income households with limited external support.",
      " This case study explores the motivation, core functionalities, technical framework, target user base, monetization strategy, and the potential market impact of the solution."
    ],
    problemDescription: "Modern parenting faces a critical challenge: infants can only express their needs through non-verbal cues, primarily crying. For first-time and working parents, interpreting these cues is often a source of anxiety and trial-and-error. In a world where extended familial support is dwindling, especially in urban nuclear families, caregivers frequently struggle to identify whether a baby is hungry, tired, in pain, or simply needs attention.",
    challenges: [
      { text: "Inability to interpret baby cries accurately." },
      { text: "Emotional distress for parents and infants." },
      { text: "Lack of accessible real-time expert support." },
      { text: "Increased parental stress and decreased bonding confidence." }
    ],
    objectives: [
      { text: "Enable parents to accurately interpret infant cries using AI and machine learning." },
      { text: "Offer a manual, user-initiated system to record and analyze baby sounds (ensuring data control and privacy)." },
      { text: "Provide real-time actionable advice to improve response time and parental confidence." },
      { text: "Create a data-driven feedback loop that adapts to each baby's unique behavioral patterns over time." },
      { text: "Establish a scalable platform for integration with pediatric care systems and baby tech products." }
    ],
    audiences: [
      { text: "First-time parents (22–38 years)" },
      { text: "Nuclear and dual-working families" },
      { text: "Fathers eager to take an active role in parenting" },
      { text: "Pediatric clinics, baby wellness centers" },
      { text: "Baby care product companies (for B2B integration)" }
    ],
    solutionOverview: {
      title: "AI-Powered Baby Care Assistant",
      description: "The Baby Voice Recognition System leverages AI to act as a smart baby care assistant. It listens to a baby's sounds, analyzes patterns using a trained ML model, identifies the intent behind each cry, and provides a real-time emotional transcription and guidance to the parents.",
      functionalities: [
        { title: "Real-Time Voice Recognition & Analysis", description: "Detects and interprets baby vocalizations with low-latency processing." },
        { title: "Emotional Transcript Generator", description: "Translates audio cues into understandable text, like 'I’m hungry' or 'I feel sleepy.'" },
        { title: "AI-Driven Behavior Mapping", description: "Learns and adapts over time for personalized predictions." },
        { title: "Parent Insight Dashboard", description: "Shows trends, moods, patterns, and developmental progress." },
        { title: "Smart Alerts", description: "Push notifications for signs of distress, discomfort, or irregular patterns." },
        { title: "Multilingual & Cultural Adaptation (Planned)", description: "Recognizes global cry variations and nuances." }
      ]
    },
    techStack: [
      { title: "Front-End", text: "Flutter / React Native" },
      { title: "Back-End", text: "Node.js / Python with Firebase" },
      { title: "Voice Processing", text: "Google Speech-to-Text, OpenAI Whisper, Mozilla DeepSpeech" },
      { title: "AI/ML Model", text: "Google Gemini, OpenAI LLMs, or a custom deep learning model" },
      { title: "Storage", text: "Google Cloud / AWS – secure cloud storage with encryption" },
      { title: "Compliance", text: "GDPR & HIPAA compliant, with end-to-end encrypted data streams" }
    ],
    impactCategories: [
      { title: "For Parents", points: ["Reduces anxiety and improves response time.", "Enhances bonding with the baby through better understanding.", "Provides confidence and peace of mind to both parents."] },
      { title: "For Babies", points: ["Quicker care and attention reduce crying time.", "Helps in developing healthy emotional responses."] },
      { title: "For Pediatricians & Researchers", points: ["Provides data insights and patterns for better child wellness monitoring."] }
    ],
    challengesSection: {
      edgeHeading: "The Equix Edge",
      edgeTitle: "Let's build a world where no parent feels lost, and no baby cries in vain.",
      edgeDescriptions: [
        "From confusion to connection. From noise to knowledge.",
        "The future of parenting is here—smart, sensitive, and AI-powered.",
      ],
      joinTitle: "Join us in revolutionizing infant care.",
      joinDescription:
        "Whether you're an investor, a collaborator, or a caregiver—this journey starts with one voice: your baby's.",
    },
  },
  {
    id: "2",
    title: "AI Chatbot for Pre-Diagnosis and Appointment Triage",
    tagline: "Smarter First Steps for Faster Healing.",
    subtitle: "AI-driven patient guidance that streamlines care, reduces wait times, and empowers clinical teams.",
    intro: [
      "In today’s fast-evolving healthcare ecosystem, hospitals and clinics are overwhelmed with non-urgent queries, appointment backlogs, and overburdened medical staff. A significant amount of time is spent addressing symptoms, scheduling appointments, and redirecting patients—all of which could be streamlined through intelligent automation.",
      " The AI Chatbot for Pre-Diagnosis and Appointment Triage is a digital healthcare assistant designed to pre-screen symptoms, provide preliminary advice, and guide patients to the right department or specialist before they reach the hospital."
    ],

    problemDescription: "Healthcare providers, especially in high-volume hospitals and telehealth platforms, face long queues and bottlenecks for initial consultations, inundation of calls and basic medical inquiries, wasted clinical time on patients routed to the wrong departments, missed follow-ups or inefficient appointment scheduling, and patient frustration due to unclear navigation or delays. There’s a clear need for automated, accurate, and empathetic digital triage to handle early-stage patient interaction 24/7.",
    challenges: [
      { text: "Long queues and bottlenecks for initial consultations" },
      { text: "Inundation of calls and basic medical inquiries" },
      { text: "Wasted clinical time on patients routed to the wrong departments" },
      { text: "Missed follow-ups or inefficient appointment scheduling" },
      { text: "Patient frustration due to unclear navigation or delays" }
    ],
    objectives: [
      { text: "Pre-screen patient symptoms and assess urgency" },
      { text: "Recommend correct department, specialty, or action" },
      { text: "Automate appointment booking and follow-ups" },
      { text: "Reduce dependency on call centers and reception staff" },
      { text: "Enhance patient experience through instant digital interaction" }
    ],
    audiences: [
      { text: "Hospitals & Clinics" },
      { text: "Telehealth & Virtual Care Apps" },
      { text: "Primary Care Networks & Insurance Providers" }
    ],
    solutionOverview: {
      title: "AI-Powered Medical Chatbot",
      description: "Our AI-powered medical chatbot is designed as an integrated assistant across hospital websites, telehealth apps, and messaging platforms to pre-screen symptoms, provide advice, and guide patients to the right department or specialist.",
      functionalities: [
        { title: "AI-Driven Symptom Checker", description: "Built on large medical datasets with dynamic learning for improved accuracy." },
        { title: "Automated Scheduling", description: "Syncs with hospital ERP/booking systems for real-time slot booking." },
        { title: "Multi-Channel Availability", description: "Deployable on hospital websites, WhatsApp, mobile apps, or in-clinic kiosks." },
        { title: "Document Intake & Case History Collection", description: "Captures patient symptoms, health history, allergies, and insurance details." },
        { title: "Department/Doctor Recommendation", description: "Matches patient concern with the right department using medical taxonomy." },
        { title: "24/7 Access with Human Escalation", description: "Routes to live agent or nurse if user request exceeds AI’s scope." }
      ]
    },
    techStack: [
      { title: "Natural Language Understanding", text: "BERT / GPT fine-tuned for healthcare" },
      { title: "Medical Knowledge Base", text: "ICD-10, SNOMED CT, Mayo Clinic dataset" },
      { title: "Frontend", text: "React.js / Flutter widget or iframe integration" },
      { title: "Backend", text: "Node.js / Python FastAPI" },
      { title: "Scheduling Integration", text: "Google Calendar API, Practo/Zoho integrations, HL7 / FHIR APIs" },
      { title: "Security", text: "End-to-end encryption, OAuth2, HIPAA & GDPR compliance" }
    ],
    impactCategories: [
      { title: "For Hospitals & Clinics", points: ["30–40% reduction in front-desk workload", "Cut appointment booking time by over 70%", "24/7 availability without expanding staff"] },
      { title: "For Medical Staff", points: ["See only relevant, pre-screened patients", "Reduced no-shows with automated follow-ups", "Enhanced diagnosis accuracy with symptom history"] },
      { title: "For Patients", points: ["Faster access to care with less confusion", "Right doctor, first time", "A guided, professional experience from first click to consultation"] }
    ],
    
        coreFeatures: [
      { text: "AI-based symptom recognition and contextual conversation flow." },
      { text: "Automated appointment triage system integrated with hospital APIs." },
      { text: "Supports multilingual interaction for accessibility." },
      { text: "Patient health summary reports generated in real time." },
      { text: "Integration-ready with telemedicine and EMR systems." },
    ],
    industriesAndUseCases: [
      {
        category: "Healthcare Institutions",
        desc:
          "Hospitals and clinics use the chatbot for efficient patient intake and appointment management.",
      },
      {
        category: "Telemedicine Platforms",
        desc:
          "Pre-diagnosis automation reduces waiting times and increases doctor efficiency.",
      },
    ],
    challengesSection: {
      edgeHeading: "The Equix Edge",
      edgeTitle: "Whatever your healthcare model—clinic, hospital, or digital health platform—we’ll tailor the perfect AI triage solution for you.",
      edgeDescriptions: ["Let’s modernize patient care, reduce staff overload, and deliver precision from the first interaction.",],
      joinTitle: "",
      joinDescription: "",
    }
  },
  {
    id: "3",
    title: "AI-Based Quality Inspection System for Assembly Lines",
    tagline: "Because Quality Shouldn’t Be Left to Chance.",
    subtitle: "Real-time defect detection powered by vision intelligence and automation.",
    intro: [
      "In high-volume manufacturing sectors like Electronics, Packaging, and Automotive, ensuring consistent product quality is both a priority and a challenge. Traditional inspection systems often rely on human vision or rule-based machine vision, which are either error-prone or lack adaptability.",
      " To address this, we developed an AI-Based Quality Inspection System that integrates with existing assembly lines to perform real-time visual inspection of products using computer vision and deep learning."
    ],
    problemDescription: "Manual inspection processes and legacy vision systems struggle to scale with growing complexity, high throughput, and micro-level defects. Challenges faced by modern assembly lines include inconsistent results due to inspector fatigue, high cost of defects, time-consuming quality checks, difficulty adapting to design/material changes, and lack of integrated analytics for defect trends and root cause analysis.",
    challenges: [
      { text: "Inconsistent results due to inspector fatigue or human error" },
      { text: "High cost of defects going undetected until post-production" },
      { text: "Time-consuming and inaccurate quality checks under high-speed production" },
      { text: "Difficulty adapting to design or material changes" },
      { text: "Lack of integrated analytics for defect trends and root cause analysis" },
      { text:"High escalating costs- Quality escapes lead to customer returns, warranty claims, and reputational loss."}
    ],
    objectives: [
      { text: "Automate defect detection with high accuracy" },
      { text: "Minimize false positives and false negatives" },
      { text: "Integrate seamlessly with conveyor and robotic arms" },
      { text: "Reduce dependency on manual inspectors" },
      { text: "Enable real-time analytics and traceability of defects" },
      {text:"Maintain inspection accuracy without slowing down production"}
    ],

    solutionOverview: {
      title: "AI-Based Visual Quality Inspection",
      description: "The AI-Based Quality Inspection System combines high-resolution industrial cameras, real-time computer vision algorithms, and deep learning models to detect surface-level and structural defects across various products.",
      functionalities: [
        { title: "Real-Time Defect Detection", description: "Identify micro and macro-level defects on moving conveyor lines." },
        { title: "Multi-Product Recognition", description: "Handles variations in models, packaging types, and product batches." },
        { title: "Self-Learning AI Models", description: "Continuously improves accuracy based on operator feedback and new data." },
        { title: "Seamless PLC Integration", description: "Compatible with robotic sorters, rejecters, and production line controllers." },
        { title: "Quality Analytics Dashboard", description: "Insight into defect frequency, shift-based performance, and root cause identification." },
        { title: "Audit-Ready Logs", description: "Generates reports for ISO, Six Sigma, or customer-specific compliance checks." }
      ]
    },
    techStack: [
      { title: "Computer Vision", text: "OpenCV, YOLOv8, TensorFlow" },
      { title: "Image Processing", text: "High-speed line scan and area scan cameras" },
      { title: "AI/ML", text: "Deep CNNs, Transfer Learning, Anomaly Detection Models" },
      { title: "Backend", text: "Python (FastAPI), Node.js" },
      { title: "Frontend", text: "React.js (Analytics & Insights)" },
      { title: "Integration", text: "Modbus, OPC-UA, PLCs for machinery sync" }
    ],
    impactCategories: [
      { title: "For Production Managers", points: ["Improved first-pass yield and throughput", "Lower rework and return rates", "Data-driven QA decision-making"] },
      { title: "For Organizations", points: ["Enhanced customer satisfaction through consistent quality", "Reduced cost of poor quality", "Competitive edge in time-sensitive contracts"] },
      { title: "For Auditors & QA Teams", points: ["Proof of inspection with image logs", "Defect trends and production line performance metrics"] }
    ],
        coreFeatures: [
      { text: "AI-based symptom recognition and contextual conversation flow." },
      { text: "Automated appointment triage system integrated with hospital APIs." },
      { text: "Supports multilingual interaction for accessibility." },
      { text: "Patient health summary reports generated in real time." },
      { text: "Integration-ready with telemedicine and EMR systems." },
    ],
    industriesAndUseCases: [
      {
        category: "Healthcare Institutions",
        desc:
          "Hospitals and clinics use the chatbot for efficient patient intake and appointment management.",
      },
      {
        category: "Telemedicine Platforms",
        desc:
          "Pre-diagnosis automation reduces waiting times and increases doctor efficiency.",
      },
    ],
    challengesSection: {
      edgeHeading: "The Equix Edge",
      edgeTitle: "“AI in quality control isn’t about replacing workers—it’s about enhancing human precision at scale.”",
      edgeDescriptions: ["        ",    ,"In an era of mass production, brand loyalty hinges on product consistency. Our AI inspection solution ensures that every product leaving the line is inspection-certified, without slowing down your speed or increasing cost."],
      joinTitle: "",
      joinDescription: "",}
  },
  {
    id: "4",
    title: "AI-Powered Enhancements for Logistics Industry",
    tagline: "Reimagining Freight Operations with Intelligent Automation.",
    subtitle: "AI-led transformation in logistics documentation, reporting, and operational intelligence.",
    intro: [
      "In the global logistics and freight forwarding industry, legacy systems often fall short in addressing modern operational demands. Manual data entry, fragmented documentation processes, and lack of real-time intelligence lead to inefficiencies, errors, and missed opportunities.",
      " To address these challenges, an AI-driven revamp was conceptualized to bring automation, accuracy, and analytical intelligence to the core logistics platform."
    ],
    problemDescription: "The existing system, though functionally complete, was bottlenecked by manual data entry from emails and scanned documents, limited visibility into operational KPIs and shipment performance, disjointed invoice and cost management, redundant processes for document sharing and compliance tracking, time-intensive coordination between internal teams and clients, and lack of automation in customer communication and status updates.",
    challenges: [
      { text: "Manual data entry from emails and scanned documents" },
      { text: "Limited visibility into operational KPIs and shipment performance" },
      { text: "Disjointed invoice and cost management with high human dependency" },
      { text: "Redundant processes for document sharing and compliance tracking" },
      { text: "Time-intensive coordination between internal teams and clients" },
      { text: "Lack of automation in customer communication and status updates" }
    ],
    objectives: [
      { text: "Automate data extraction from unstructured documents (PDFs, emails)" },
      { text: "Generate invoices and key shipment documents with minimal human input" },
      { text: "Enable AI-assisted financial reconciliation post-shipment" },
      { text: "Provide live dashboards with actionable KPIs" },
      { text: "Reduce manual follow-ups with pre-alert notifications and status automation" },
      { text: "Centralize document access with intelligent per-customer repositories" }
    ],

    solutionOverview: {
      title: "AI-Driven Logistics Platform",
      description: "The AI system automates document handling, reporting, and operational intelligence, streamlining tasks and providing real-time insights for teams and clients.",
      functionalities: [
        { title: "AI Email Agent", description: "Extracts shipment details from incoming emails and maps them to system fields, minimizing human input for quote creation and booking." },
        { title: "AI Document Processor", description: "Processes uploaded documents like Bills of Lading and invoices, extracting key data fields, supporting OCR/PDF/scanned formats, with manual override and approval flows." },
        { title: "AI-Driven Invoice Reconciliation", description: "Auto-compares uploaded vendor invoices against internal estimates, highlighting discrepancies and suggesting corrections." },
        { title: "Smart KPI Dashboards", description: "Provides real-time insights on enquiries vs. confirmed shipments, gross profit, processing cycle time, and team productivity." },
        { title: "Automated Pre-Alert Notifications", description: "Triggers proactive shipment milestone notifications to teams, ensuring timely customer updates." },
        { title: "Intelligent Document Repository", description: "Centralized per-customer storage for KYC documents, invoices, agreements, and SOAs, with audit-ready tracking." }
      ]
    },

    impactCategories: [
      { title: "For Operations Teams", points: ["70% reduction in manual data entry and document processing", "Greater accuracy in shipment documentation and financials", "Faster shipment lifecycle completion"] },
      { title: "For Management", points: ["Improved decision-making through real-time KPI tracking", "Enhanced cost control via post-shipment analysis", "Easier compliance and documentation retrieval"] },
      { title: "For Clients", points: ["Real-time visibility on shipment progress", "Fewer follow-ups and better communication", "Self-service access to shipping and financial records"] }
    ],
   challengesSection: {
      edgeHeading: "The Equix Edge",
      edgeTitle: "“AI in quality control isn’t about replacing workers—it’s about enhancing human precision at scale.”",
      edgeDescriptions: ["        ",    ,"In an era of mass production, brand loyalty hinges on product consistency. Our AI inspection solution ensures that every product leaving the line is inspection-certified, without slowing down your speed or increasing cost."],
      joinTitle: "",
      joinDescription: "",}

  },
  {
    id: "5",
    title: "Smart Safety Detector System",
    tagline: "Safety First, Always Verified.",
    subtitle: "AI-powered vigilance to enforce PPE compliance in high-risk work zones.",
    intro: [
      "The Smart Safety Detector System is an AI-powered surveillance solution built to enhance worker safety compliance in high-risk industries such as refineries, construction sites, mines, and other hazardous work zones.", "Using CCTV-integrated deep learning models and IoT-enabled alerts, the system detects whether laborers are wearing required Personal Protective Equipment (PPE) before entering restricted or dangerous operational zones."
    ],
    problemDescription: "High-risk industries are prone to workplace injuries, especially when safety protocols are ignored. Traditional safety checks are manual, time-consuming, and often unreliable. Challenges include inconsistent supervision, PPE violations, delayed identification of non-compliance, lack of real-time alerts, and regulatory risks.",
    challenges: [
      { text: "Inconsistent manual supervision and dependency on floor managers" },
      { text: "PPE violations due to negligence or lack of awareness" },
      { text: "Delayed identification of safety non-compliance" },
      { text: "Lack of real-time alerts or proof of compliance" },
      { text: "Regulatory risks and insurance liabilities" }
    ],
    objectives: [
      { text: "Detect PPE compliance in real-time before site entry" },
      { text: "Alert safety managers instantly on non-compliance" },
      { text: "Integrate with existing CCTV infrastructure" },
      { text: "Maintain visual audit logs for compliance and incident analysis" },
      { text: "Minimize human dependency and error in safety enforcement" }
    ],
    audiences: [
      { text: "Construction companies and contractors" },
      { text: "Oil refineries, gas plants, and mining firms" },
      { text: "Industrial safety compliance departments" },
      { text: "Facility management & engineering firms" },
      { text: "Government & regulatory safety auditors" }
    ],
    solutionOverview: {
      title: "AI-Powered PPE Monitoring System",
      description: "A plug-and-play AI system integrated into CCTV networks and edge devices, detecting PPE compliance and alerting supervisors instantly while maintaining logs for audits.",
      functionalities: [
        { title: "Real-Time PPE Detection", description: "Recognizes helmets, reflective jackets, gloves, boots, and more using AI vision." },
        { title: "Instant Alerts & Notifications", description: "Sends notifications to assigned supervisors or safety managers on non-compliance." },
        { title: "CCTV Integration Ready", description: "Utilizes existing video feeds to reduce infrastructure costs." },
        { title: "Visual Audit Trails", description: "Maintains historical logs of compliance and non-compliance incidents." },
        { title: "Safety Compliance Dashboard", description: "Provides real-time insights, daily violation counts, and compliance performance over time." },
        { title: "Edge & Cloud Hybrid Model", description: "On-site processing for speed combined with centralized reporting for management." }
      ]
    },
    techStack: [
      { title: "AI/ML", text: "Custom-trained deep learning model (YOLOv8 / EfficientDet)" },
      { title: "Video Integration", text: "RTSP camera feeds, CCTV DVR/NVR support" },
      { title: "Backend", text: "Python (FastAPI) + Node.js" },
      { title: "Cloud/Edge", text: "AWS / Azure IoT / NVIDIA Jetson Nano" },
      { title: "Alerts", text: "Twilio, Firebase Cloud Messaging, Email APIs" },
      { title: "Dashboard", text: "React.js / Vue.js frontend with analytics" },
      { title: "Compliance", text: "OSHA / ISO 45001-aligned logging & reporting" }
    ],
    impactCategories: [
      { title: "For Organizations", points: ["Reduce safety-related incidents and operational shutdowns", "Ensure proactive risk management and prevent litigation", "Boost compliance with OSHA, ISO, and local safety regulations"] },
      { title: "For Managers", points: ["Real-time safety alerts and fewer manual checks", "Better control over large worksites with automated systems", "Digital logs for incident reviews and training reinforcement"] },
      { title: "For Workers", points: ["Clear expectations for safety", "Safer work environments and faster emergency response", "Culture of accountability and care"] }
    ],
    challengesSection: {
      edgeHeading: "The Equix Edge",
      edgeTitle: "“AI in quality control isn’t about replacing workers—it’s about enhancing human precision at scale.”",
      edgeDescriptions: ["        ",    ,"In an era of mass production, brand loyalty hinges on product consistency. Our AI inspection solution ensures that every product leaving the line is inspection-certified, without slowing down your speed or increasing cost."],
      joinTitle: "",
      joinDescription: "",}
  }
];





    // coreFeatures: [
    //   { text: "AI-Driven Cry Detection — Built on deep neural networks with adaptive learning for improved accuracy." },
    //   { text: "Real-Time Audio Analysis — Instant detection and categorization of baby cries using voice processing models." },
    //   { text: "Personalized Behavior Mapping — Learns unique patterns from each infant to deliver contextual insights." },
    //   { text: "Parent Dashboard — Displays emotional trends, daily summaries, and response recommendations." },
    //   { text: "Offline Mode — Operates seamlessly without continuous internet connection for safety and accessibility." },
    //   { text: "24/7 Support & Escalation — Directs parents to pediatric helplines or virtual consultations when needed." },
    // ],

    // industriesAndUseCases: [
    //   {
    //     category: "Parenting & Childcare Apps",
    //     desc:
    //       "Enhances caregiving with instant baby cry translation. Improves parent confidence through actionable insights.",
    //   },
    //   {
    //     category: "Pediatric Hospitals & Clinics",
    //     desc:
    //       "Enables pediatricians to analyze cry data for early diagnosis. Assists in remote infant monitoring and postnatal care.",
    //   },
    // ],

    // {
    //       title: "Real-Time Voice Recognition & Analysis",
    //       description: "Detects and interprets baby vocalizations instantly.",
    //     },
    //     {
    //       title: "Smart Alerts",
    //       heading: "Types of Alerts",
    //       points: [
    //         "Hunger cry alerts",
    //         "Discomfort or illness alerts",
    //         "Sleep pattern irregularities",
    //       ],
    //     },
    //     {
    //       description:
    //         "The system continuously improves with adaptive AI learning over time.",