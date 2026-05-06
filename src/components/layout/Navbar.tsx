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
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 50))

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-16 pt-4 md:pt-6 fixed top-0 left-0 right-0 z-50">
      <motion.nav
        className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between gap-4"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.58)' : 'rgba(0, 0, 0, 0.4)' }}
      >
        <a
          href="#"
          className="text-white text-base sm:text-xl font-semibold tracking-tight whitespace-nowrap"
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
              className="text-sm text-white/80 hover:text-white transition-colors duration-200"
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
          className="bg-white text-black px-3 sm:px-5 py-1.5 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          Explore Research
        </a>
      </motion.nav>
    </div>
  )
}
