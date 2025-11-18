import { NavigationItem } from '@/types/content'

export interface HeaderContent {
  logo: {
    text: string
    image?: string
  }
  navigation: NavigationItem[]
  ctaButton: {
    text: string
    href: string
  }
}

export const headerContent: HeaderContent = {
  logo: {
    text: "Equix Solutions",
    image: "/logo.png"
  },
  navigation: [
    { label: "Equix Story", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#showcase" },
    { label: "Products", href: "#company" },
    { label: "Case studies", href: "#case" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  ctaButton: {
    text: "Let's Talk",
    href: "#contact"
  }
}
