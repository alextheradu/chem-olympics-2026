import { motion, useScroll, useTransform } from 'framer-motion'

const navLinks = [
  { label: 'Source', href: '#source' },
  { label: 'Concerns', href: '#concerns' },
  { label: 'Pathway', href: '#pathway' },
  { label: 'Organisms', href: '#organisms' },
  { label: 'Impact', href: '#impact' },
  { label: 'Solutions', href: '#solutions' },
]

function scrollTo(selector: string) {
  if (selector === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}

export function Navbar() {
  const { scrollY } = useScroll()
  const maxWidth = useTransform(scrollY, [0, 400], ['100%', '92%'])
  const linkGap = useTransform(scrollY, [0, 400], ['1.75rem', '1.1rem'])
  const paddingY = useTransform(scrollY, [0, 400], ['0.5rem', '0.4rem'])

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-16 pt-4 md:pt-6 fixed top-0 left-0 right-0 z-50">
      <motion.nav
        className="liquid-glass rounded-xl px-4 flex items-center justify-between gap-4 mx-auto"
        style={{ maxWidth, paddingTop: paddingY, paddingBottom: paddingY }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('#')
          }}
          className="text-white text-base sm:text-xl font-semibold tracking-tight whitespace-nowrap"
        >
          PHHS · Chem Olympics
        </a>

        <motion.div className="hidden lg:flex items-center" style={{ gap: linkGap }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(link.href)
              }}
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* <a
          href="#source"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('#source')
          }}
          className="bg-white text-black px-4 sm:px-5 py-1.5 rounded-lg text-xs sm:text-sm font-medium hover:bg-white/85 transition-colors whitespace-nowrap"
        >
          Begin
        </a> */}
      </motion.nav>
    </div>
  )
}
