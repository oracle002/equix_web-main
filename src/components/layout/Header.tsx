'use client'

import { useState } from 'react'
import Link from 'next/link'
import { headerContent } from '@/content/header'
import { useActiveSection } from '@/hooks/useActiveSection'
import { Button } from '../ui/Button'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection()
  const pathname = usePathname()

  const isHome = pathname === '/' || pathname === ''

  const scrollToSection = (href: string) => {
    if (href.startsWith('#') && isHome) {
      const element = document.querySelector(href)
      if (element) {
        const headerOffset = 60
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })

        // Update URL hash without reload
        const sectionId = href.replace('#', '')
        window.history.pushState(null, '', `#${sectionId}`)
      }
      setIsMobileMenuOpen(false)
    } else {
      // Navigate to homepage with hash
      window.location.href = `/${href}`
    }
  }

  const getUnderlineClasses = (isActive: boolean) =>
    `absolute left-0 -bottom-0.5 h-0.5 bg-primary rounded-full transition-all duration-300 ease-in-out ${
      isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
    }`

  return (
<header
  className="fixed top-0 left-0 right-0 z-50
  backdrop-blur-xl bg-white/20 border-b border-white/30
  shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
>
  <div className="container mx-auto px-6 lg:px-8">
    <div className="flex items-center h-20 lg:mx-20">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <Link href="/" className="flex items-center">
          {headerContent.logo.image ? (
            <img
              src={headerContent.logo.image}
              alt={headerContent.logo.text}
              className="h-8 w-auto drop-shadow-md"
            />
          ) : (
            <span className="text-xl font-bold text-black/80 backdrop-blur-sm">
              {headerContent.logo.text}
            </span>
          )}
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-center flex-grow mx-12 relative">
        <div className="flex items-center space-x-6 flex-shrink min-w-0">
          {headerContent.navigation.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = isHome && activeSection === sectionId

            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative py-2 text-md font-medium tracking-wide transition-colors flex-shrink-0 ${
                  isActive
                    ? 'text-[var(--color-primary)]'
                    : 'text-black/70 hover:text-[var(--color-primary)]'
                }`}
              >
                {item.label}
                <span className={getUnderlineClasses(isActive)} />
              </button>
            )
          })}
        </div>
      </nav>

      {/* CTA Button */}
      <div className="hidden lg:flex items-center flex-shrink-0">
        <Button
          onClick={() => scrollToSection(headerContent.ctaButton.href)}
          className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] text-white px-6 py-2 rounded-full font-medium shadow-lg hover:scale-105 transition-transform"
        >
          {headerContent.ctaButton.text}
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 text-black ml-auto"
        aria-label="Toggle mobile menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <span
            className={`h-0.5 w-6 bg-current transform transition-all ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-current transition-all ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-current transform transition-all ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </div>
      </button>
    </div>

    {/* Mobile Navigation */}
    {isMobileMenuOpen && (
      <div className="lg:hidden bg-white/30 backdrop-blur-xl border-t border-white/30 mt-2 rounded-b-3xl shadow-lg transition-all duration-300">
        <div className="py-4 space-y-1">
          {headerContent.navigation.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = isHome && activeSection === sectionId

            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-6 py-3 transition-colors rounded-xl ${
                  isActive
                    ? 'text-[var(--color-primary)] font-semibold bg-white/40'
                    : 'text-black/80 hover:text-[var(--color-primary)] hover:bg-white/30'
                }`}
              >
                {item.label}
              </button>
            )
          })}
          <div className="px-6 pt-4">
            <Button
              onClick={() => scrollToSection(headerContent.ctaButton.href)}
              className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white w-full px-6 py-2 rounded-full font-medium shadow-md"
            >
              {headerContent.ctaButton.text}
            </Button>
          </div>
        </div>
      </div>
    )}
  </div>
</header>

  )
}
