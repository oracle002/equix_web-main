"use client"

import { usePathname } from "next/navigation"
import { footerContent } from "@/content/footer"
import Link from "next/link"

export default function Footer() {
  const pathname = usePathname()
  const isHome = pathname === "/" || pathname === ""

  const scrollToSection = (href: string) => {
    if (href.startsWith("#") && isHome) {
      const element = document.querySelector(href)
      if (element) {
        const headerOffset = 60
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    } else if (href.startsWith("#")) {
      // Navigate to home with hash
      window.location.href = `/${href}`
    }
  }

  return (
    <footer className="bg-[var(--color-background)] text-white rounded-2xl mx-6 my-8 relative z-[9999]">
      <div className="flex flex-col md:flex-row justify-between items-start p-10 space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="space-y-4 max-w-md">
          <h2 className="font-bold leading-tight tracking-tight text-[clamp(28px,3.2vw,40px)]">
            {footerContent.left.heading.split("|").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>

          <a
            href={footerContent.left.email.href}
            className="mt-4 text-[15px] md:text-[16px] text-white/90 block"
          >
            {footerContent.left.email.label}
          </a>

          {footerContent.left.socials.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 underline underline-offset-4 hover:text-gray-300 block text-[15px]"
            >
              {social.label}
            </a>
          ))}

          <p className="mt-10 text-[12px] md:text-[13px] text-gray-400">
            {footerContent.left.copyright}
          </p>
        </div>

        {/* Right Section */}
        <nav className="md:self-end flex flex-col items-start md:items-end space-y-2.5 text-[15px] md:text-[16px] leading-7">
          {footerContent.navigation.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(item.href)}
              className="text-left hover:text-gray-300"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  )
}
