import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedText, Reveal } from '../ui/AnimatedText'
import { Cite } from '../ui/Cite'
import { organisms, type Organism } from '../../data/organisms'

function OrganismPanel({ org, index }: { org: Organism; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1.15])
  const reverse = index % 2 === 1

  return (
    <div ref={ref} className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-16 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div
          className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
            reverse ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          <div className="lg:col-span-6 relative aspect-[4/5] lg:aspect-auto lg:h-[80vh] overflow-hidden rounded-2xl border border-white/10">
            <motion.img
              src={org.imageUrl}
              alt={org.label}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
              style={{ y: imgY, scale: imgScale }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-black/5 to-transparent" />
            <div className="absolute top-6 left-6 flex items-center gap-3">
              <span className="chem-formula text-white text-xs tracking-[0.25em]">{org.index}</span>
              <span className="block w-8 h-px bg-white/40" />
              <span className="text-white/70 text-xs tracking-[0.25em] uppercase">{org.subtitle}</span>
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] text-white/40 tracking-wide">
              {org.imageCredit}
            </div>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <p className="section-eyebrow mb-4">Organism · {org.index}</p>
            </Reveal>
            <AnimatedText
              as="h3"
              className="text-white text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.02] mb-6"
              stagger={20}
            >
              {org.label}
            </AnimatedText>
            <Reveal delay={150}>
              <p className="text-white/75 text-base md:text-lg leading-relaxed mb-6">
                {org.intro}
                <Cite ids={org.citationIds} />
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p className="text-white/65 text-sm md:text-base leading-relaxed mb-8">
                {org.mechanism}
              </p>
            </Reveal>

            <Reveal delay={350}>
              <div className="mono-card rounded-xl px-5 py-4 mb-5">
                <p className="chem-formula text-white text-sm md:text-base mb-1">{org.equation}</p>
                <p className="text-white/45 text-xs tracking-wide">{org.equationLabel}</p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex items-center gap-3 text-white/55 text-xs tracking-[0.18em] uppercase">
                <span className="block w-6 h-px bg-white/30" />
                <span>{org.keyFact}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Organisms() {
  return (
    <section id="organisms" className="relative bg-black">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="px-6 md:px-12 lg:px-16 pt-32 md:pt-40 max-w-7xl mx-auto">
        <Reveal>
          <p className="section-eyebrow mb-6">04 · Affected organisms</p>
        </Reveal>
        <AnimatedText
          as="h2"
          className="text-white text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight max-w-4xl leading-[1.02]"
          stagger={22}
        >
          One mechanism, three very different victims.
        </AnimatedText>
        <Reveal delay={300}>
          <p className="text-white/65 text-base md:text-lg max-w-2xl leading-relaxed mt-8 mb-16">
            Carbamate AChE inhibition is non-selective. Whatever has a cholinergic synapse — fish,
            bees, even soil microbiota indirectly — is at risk once the residue moves off-field.
          </p>
        </Reveal>
      </div>

      {organisms.map((org, i) => (
        <OrganismPanel key={org.id} org={org} index={i} />
      ))}
    </section>
  )
}
