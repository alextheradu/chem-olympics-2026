import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Organisms', href: '#organisms' },
  { label: 'Pathway', href: '#pathway' },
  { label: 'Solutions', href: '#solutions' },
]

function scrollToSelector(selector: string) {
  if (selector === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}

export function Navbar() {
  const [onLightSection, setOnLightSection] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setOnLightSection(y > window.innerHeight * 0.72))

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-16 pt-4 md:pt-6 fixed top-0 left-0 right-0 z-50">
      <motion.nav
        className={`${onLightSection ? 'glass-card-light' : 'liquid-glass'} rounded-xl px-4 py-2 flex items-center justify-between gap-4 transition-colors duration-300`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <a
          href="#"
          className={`${onLightSection ? 'text-[var(--text)]' : 'text-white'} text-base sm:text-xl font-semibold tracking-tight whitespace-nowrap transition-colors duration-300`}
          onClick={(event) => {
            event.preventDefault()
            scrollToSelector('#')
          }}
        >
          PHHS Chem Olympics
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${onLightSection ? 'text-[var(--text-muted)] hover:text-[var(--text)]' : 'text-white/80 hover:text-white'} text-sm transition-colors duration-200`}
              onClick={(event) => {
                event.preventDefault()
                scrollToSelector(link.href)
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#overview"
          onClick={(event) => {
            event.preventDefault()
            scrollToSelector('#overview')
          }}
          className={`${onLightSection ? 'bg-[#4A6FD4] text-white hover:bg-[#3a5fc4]' : 'bg-white text-black hover:bg-gray-100'} px-3 sm:px-5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap`}
        >
          Explore Research
        </a>
      </motion.nav>
    </div>
  )
}
