'use client'

import { useState, useEffect } from 'react'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0
    const sections = Array.from(document.querySelectorAll('section[id]'))

    const findActiveSection = () => {
      let maxVisibleRatio = 0
      let currentSectionId = ''
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        
        // Calculate visible portion of the section
        const visibleTop = Math.max(rect.top, headerHeight)
        const visibleBottom = Math.min(rect.bottom, viewportHeight)
        const visibleHeight = Math.max(0, visibleBottom - visibleTop)
        
        // Calculate what percentage of viewport this section occupies
        const visibleRatio = visibleHeight / viewportHeight
        
        if (visibleRatio > maxVisibleRatio) {
          maxVisibleRatio = visibleRatio
          currentSectionId = section.id
        }
      })
      
      if (currentSectionId && currentSectionId !== activeSection) {
        setActiveSection(currentSectionId)
      }
    }

    // Use throttle for better performance
    let timeoutId: NodeJS.Timeout
    const throttledCheck = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(findActiveSection, 50)
    }

    // Check on scroll
    window.addEventListener('scroll', throttledCheck, { passive: true })
    
    // Check on mount and resize
    findActiveSection()
    window.addEventListener('resize', findActiveSection)
    window.addEventListener('popstate', findActiveSection)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', throttledCheck)
      window.removeEventListener('resize', findActiveSection)
      window.removeEventListener('popstate', findActiveSection)
    }
  }, [activeSection])

  return activeSection
}