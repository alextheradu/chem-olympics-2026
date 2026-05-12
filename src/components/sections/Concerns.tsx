import { AnimatedText, Reveal } from '../ui/AnimatedText'
import { Cite } from '../ui/Cite'
import { concerns } from '../../data/concerns'

export function Concerns() {
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
          Potential concerns of carbamate chemicals.
        </AnimatedText>

        <Reveal delay={300}>
          <p className="text-white/65 text-base md:text-lg max-w-2xl leading-relaxed mb-20">
            Carbamate pesticides share a nervous system mechanism, but each compound has different
            concerns for people, wildlife, water, and pollinators.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {concerns.map((c, i) => (
            <Reveal key={c.name} delay={i * 80} y={32}>
              <article className="mono-card rounded-2xl p-6 md:p-8 h-full hover:bg-white/[0.06] transition-colors duration-500 group">
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <h3 className="text-white text-2xl md:text-3xl font-normal tracking-tight">
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

                <div className="mt-6 pt-5 border-t border-white/10 text-xs text-white/40">
                  Refs<Cite ids={c.citationIds} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
