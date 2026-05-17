import { useState } from 'react'
import { AnimatedText, Reveal } from '../ui/AnimatedText'
import { Cite } from '../ui/Cite'
import { MoleculeDisplay, type Atom, type Bond } from '../ui/MoleculeDisplay'
import { concerns } from '../../data/concerns'
import { carbaryl, aldicarb, carbofuran, methomyl, oxamyl, propoxur } from '../../data/carbamate'

interface CompoundStructure {
  name: string
  formula: string
  carbamateAtoms: string[]
  viewBox: string
  atoms: Atom[]
  bonds: Bond[]
}

const structureMap: Record<string, CompoundStructure> = {
  Carbaryl: carbaryl as CompoundStructure,
  Aldicarb: aldicarb as CompoundStructure,
  Carbofuran: carbofuran as CompoundStructure,
  Methomyl: methomyl as CompoundStructure,
  Oxamyl: oxamyl as CompoundStructure,
  Propoxur: propoxur as CompoundStructure,
}

export function Concerns() {
  const [openStructure, setOpenStructure] = useState<string | null>(null)

  return (
    <section id="concerns" className="relative px-6 md:px-12 lg:px-16 py-32 md:py-40 bg-black">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="section-eyebrow mb-6">02 · Concerns</p>
        </Reveal>

        <AnimatedText
          as="h2"
          className="text-white text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight max-w-4xl leading-[1.02] mb-8"
          stagger={22}
        >
          Potential concerns of carbamate pesticides.
        </AnimatedText>

        <Reveal delay={300}>
          <p className="text-white/65 text-base md:text-lg max-w-2xl leading-relaxed mb-20">
            Carbamate pesticides share a nervous system mechanism, but each compound has different
            concerns for people, wildlife, water, and pollinators.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {concerns.map((c, i) => {
            const struct = structureMap[c.name]
            const isOpen = openStructure === c.name
            return (
              <Reveal key={c.name} delay={i * 80} y={32}>
                <article className="mono-card rounded-2xl p-6 md:p-8 h-full hover:bg-white/[0.06] transition-colors duration-500 group">
                  <div className="flex items-baseline justify-between gap-4 mb-4">
                    <h3 className="text-white text-lg md:text-xl font-semibold tracking-widest uppercase">
                      {c.name}
                    </h3>
                    <span className="chem-formula text-white/45 text-sm">{c.formula}</span>
                  </div>
                  <p className="text-white/55 text-xs uppercase tracking-[0.18em] mb-5">{c.use}</p>

                  <ul className="space-y-3 text-sm md:text-[15px] text-white/75 leading-relaxed">
                    {c.risks.map((risk, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-white/35 select-none mt-[0.4em] block w-3 h-px bg-white/35 flex-shrink-0" />
                        <span>{risk}</span>
                      </li>
                    ))}
                  </ul>

                  {struct ? (
                    <div className="mt-5">
                      <button
                        onClick={() => setOpenStructure(isOpen ? null : c.name)}
                        className="text-xs text-white/45 hover:text-white/75 transition-colors tracking-[0.12em] uppercase flex items-center gap-2"
                      >
                        <span>{isOpen ? '▲' : '▼'}</span>
                        <span>{isOpen ? 'Hide structure' : 'Show structure'}</span>
                      </button>

                      {isOpen && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <p className="text-white/35 text-[10px] tracking-[0.2em] uppercase mb-2">
                            Dashed ring = carbamate –O–C(=O)–N– group
                          </p>
                          <MoleculeDisplay
                            atoms={[...struct.atoms]}
                            bonds={[...struct.bonds]}
                            formula={struct.formula}
                            name={struct.name}
                            viewBox={struct.viewBox}
                            highlightAtoms={struct.carbamateAtoms}
                            showLegend={true}
                          />
                        </div>
                      )}
                    </div>
                  ) : null}

                  <div className="mt-5 pt-5 border-t border-white/10 text-xs text-white/40">
                    Refs<Cite ids={c.citationIds} />
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
