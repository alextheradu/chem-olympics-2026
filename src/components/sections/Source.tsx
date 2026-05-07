import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedText, Reveal } from '../ui/AnimatedText'
import { ChemCard } from '../ui/ChemCard'
import { MoleculeDisplay } from '../ui/MoleculeDisplay'
import { Cite } from '../ui/Cite'
import { carbamicAcid, carbamateClass } from '../../data/carbamate'

export function Source() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yBg = useTransform(scrollYProgress, [0, 1], [40, -120])

  return (
    <section
      id="source"
      ref={ref}
      className="relative min-h-screen px-6 md:px-12 lg:px-16 py-32 md:py-40 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 grid-bg pointer-events-none opacity-40"
        style={{ y: yBg }}
        aria-hidden
      />
      <div className="absolute inset-x-0 top-0 hairline" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <p className="section-eyebrow mb-6">01 · Source</p>
        </Reveal>

        <AnimatedText
          as="h2"
          className="text-white text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight max-w-4xl leading-[1.02] mb-8"
          stagger={22}
        >
          A pesticide class built around one unstable acid.
        </AnimatedText>

        <Reveal delay={300}>
          <p className="text-white/65 text-base md:text-lg max-w-2xl leading-relaxed">
            Every carbamate insecticide in commercial use traces back to the same parent —
            carbamic acid, NH₂COOH. The molecule itself decomposes on contact with water,
            but its esters are stable, lipophilic, and lethal to insects.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mt-20 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="mono-card rounded-2xl p-8 lg:p-10">
                <p className="section-eyebrow mb-3">Parent compound</p>
                <h3 className="text-white text-2xl md:text-3xl font-normal mb-4 tracking-tight">
                  {carbamicAcid.name}
                </h3>
                <p className="chem-formula text-white/80 text-lg mb-5">{carbamicAcid.formula}</p>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {carbamicAcid.description}
                  <Cite ids={6} />
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <MoleculeDisplay
                atoms={[...carbamicAcid.atoms]}
                bonds={[...carbamicAcid.bonds]}
                formula={carbamicAcid.formula}
                name={carbamicAcid.name}
                viewBox="0 0 320 220"
              />
            </Reveal>
          </div>
        </div>

        <div className="mt-32 grid lg:grid-cols-3 gap-6">
          <ChemCard label="Class" title={carbamateClass.title}>
            <p className="chem-formula text-white/80 mb-3">{carbamateClass.generalFormula}</p>
            <p>{carbamateClass.derivation}</p>
          </ChemCard>
          <ChemCard label="Mechanism" title="Reversible AChE inhibitor">
            Carbamates block acetylcholinesterase by carbamylating the active-site serine.
            Unlike organophosphates, the bond hydrolyses back — making intoxication acute
            but recovery possible with prompt care.
            <Cite ids={[1, 6]} />
          </ChemCard>
          <ChemCard label="In use" title="A six-compound class">
            Carbaryl, aldicarb, carbofuran, methomyl, oxamyl, propoxur — six commercial
            N-methyl carbamates the rest of this site dissects in detail.
          </ChemCard>
        </div>
      </div>
    </section>
  )
}
