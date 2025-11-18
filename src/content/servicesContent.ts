// src/content/servicesContent.ts
import AppWindowIcon from "@/assets/images/services/icons/AppWindow.png";
import MobileIcon from "@/assets/images/services/icons/DeviceMobileCamera.png";
import FigmaIcon from "@/assets/images/services/icons/FigmaLogo.png";
import AIIcon from "@/assets/images/services/icons/ai.png";
import MonitorIcon from "@/assets/images/services/icons/Monitor.png";
import PencilRulerIcon from "@/assets/images/services/icons/PencilRuler.png";

import WebImg from "@/assets/images/services/web.png";
import MobileImg from "@/assets/images/services/mobile.png";
import UIUXImg from "@/assets/images/services/ui.png";
import AIImg from "@/assets/images/services/ai.png";
import LegacyImg from "@/assets/images/services/legacy.png";
import BrandImg from "@/assets/images/services/brand.png";

export const servicesContent = {
  heading: "Services at a Glance",
  subHeading:
    "We craft digital ecosystems that are bold in design, strong in tech, and built to scale. Strategy, design, and code—flawlessly fused.",
  services: [
    {
      name: "Web Experiences",
      icon: AppWindowIcon,
      image: WebImg,
      description:
        "Lightning-fast, responsive websites and platforms that captivate and convert—built for users, optimized for growth.",
    },
    {
      name: "Mobile Apps",
      icon: MobileIcon,
      image: MobileImg,
      description:
        "Cross-platform mobile applications that deliver seamless experiences and unlock growth opportunities.",
    },
    {
      name: "UI/UX Design",
      icon: FigmaIcon,
      image: UIUXImg,
      description:
        "Intuitive, user-first designs that make every interaction smooth, meaningful, and memorable.",
    },
    {
      name: "AI & Data Solutions",
      icon: AIIcon,
      image: AIImg,
      description:
        "Harness the power of data and AI to unlock insights, drive automation, and fuel smarter decisions.",
    },
    {
      name: "Legacy System Modernization",
      icon: MonitorIcon,
      image: LegacyImg,
      description:
        "Transform outdated systems into agile, future-ready platforms without disrupting business continuity.",
    },
    {
      name: "Brand Identity",
      icon: PencilRulerIcon,
      image: BrandImg,
      description:
        "Strong, memorable branding that communicates your values and resonates with your audience.",
    },
  ],
};
