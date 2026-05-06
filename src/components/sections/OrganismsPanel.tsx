import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { organisms } from '../../data/organisms'

gsap.registerPlugin(ScrollTrigger)

function OrganismPanel({ organism }: { organism: (typeof organisms)[number] }) {
  return (
    <div
      className="w-screen flex-shrink-0 h-screen flex items-center px-6 md:px-16 lg:px-24"
      style={{ borderLeft: `4px solid ${organism.colorHex}` }}
    >
      <div className="max-w-4xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col items-center gap-6">
          <div
            className="w-36 h-36 md:w-40 md:h-40 rounded-full flex items-center justify-center text-6xl md:text-7xl shadow-lg"
            style={{ background: `${organism.colorHex}18`, border: `2px solid ${organism.colorHex}40` }}
          >
            {organism.icon}
          </div>
          <div
            className="rounded-xl px-5 py-3 text-center text-xs sm:text-sm font-medium text-white chem-formula max-w-sm"
            style={{ background: organism.colorHex }}
          >
            {organism.keyFact}
          </div>
        </div>

        <div>
          <p className="section-label mb-2" style={{ color: organism.colorHex }}>
            Affected Organism
          </p>
          <h2 className="text-4xl lg:text-5xl font-normal text-[var(--text)] mb-2 leading-tight">
            {organism.label}
          </h2>
          <p className="text-[var(--text-muted)] text-lg mb-6">{organism.subtitle}</p>
          <p className="text-[var(--text-muted)] leading-relaxed mb-6">{organism.intro}</p>
          <p className="text-[var(--text)] leading-relaxed mb-4">{organism.mechanism}</p>

          <div className="rounded-xl p-4 bg-white border shadow-sm">
            <p className="section-label mb-2" style={{ color: organism.colorHex }}>
              {organism.equationLabel}
            </p>
            <p className="chem-formula text-sm text-[var(--text)] font-medium">{organism.equation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function OrganismsPanel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = trackRef.current
      if (!panels) return

      const tween = gsap.to(panels, {
        x: () => -(panels.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${panels.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      return () => tween.kill()
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="organisms" ref={containerRef} className="overflow-hidden bg-[#F8F9FF]">
      <div className="px-6 md:px-12 lg:px-16 pt-24 pb-8">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Affected Organisms
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-normal text-[var(--text)] leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Scroll to explore three impacted ecosystems
        </motion.h2>
      </div>

      <div ref={trackRef} className="flex" style={{ width: `${organisms.length * 100}vw` }}>
        {organisms.map((organism) => (
          <OrganismPanel key={organism.id} organism={organism} />
        ))}
      </div>
    </section>
  )
}
