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
          Chemical structure and source.
        </AnimatedText>

        <Reveal delay={300}>
          <p className="text-white/65 text-base md:text-lg max-w-2xl leading-relaxed">
            Carbamate pesticides are derived from carbamic acid, NH₂COOH. The class includes
            insecticides such as carbaryl, aldicarb, carbofuran, methomyl, oxamyl, and propoxur.
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
            Carbamates inhibit acetylcholinesterase, the enzyme that breaks down acetylcholine.
            When AChE is blocked, acetylcholine builds up in nerve synapses and causes continual
            firing of nerve pulses.
            <Cite ids={[1, 7]} />
          </ChemCard>
          <ChemCard label="In use" title="A six-compound class">
            Carbaryl, aldicarb, carbofuran, methomyl, oxamyl, and propoxur are six carbamates
            covered in the concerns section.
          </ChemCard>
        </div>
      </div>
    </section>
  )
}
