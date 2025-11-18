import { NavigationItem } from "@/types/content";

export interface FooterContent {
  left: {
    heading: string;
    email: {
      label: string;
      href: string;
    };
    socials: NavigationItem[];
    copyright: string;
  };
  navigation: NavigationItem[];
}

export const footerContent: FooterContent = {
  left: {
heading: "Have an idea?|Let’s bring it to life",
    email: {
      label: "info@equixsolutions.com",
      href: "mailto:info@equixsolutions.com",
    },
    socials: [
      { label: "Instagram", href: "https://instagram.com/equixsolutions" },
    ],
    copyright: "© Copyright 2025. Equix Solutions. All Rights Reserved",
  },
  navigation: [
    { label: "Equix Story", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#showcase" },
    { label: "Products", href: "#company" },
    { label: "Case studies", href: "#case" },
    { label: "Testimonials", href: "#testimonials" },
  ],
};
