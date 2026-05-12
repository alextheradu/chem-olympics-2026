import { AnimatedText, Reveal } from '../ui/AnimatedText'
import { Cite } from '../ui/Cite'
import { humanImpact, environmentImpact } from '../../data/health'

export function HealthImpact() {
  return (
    <section id="impact" className="relative px-6 md:px-12 lg:px-16 py-32 md:py-40 bg-black">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="section-eyebrow mb-6">05 · Impact</p>
        </Reveal>
        <AnimatedText
          as="h2"
          className="text-white text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight max-w-4xl leading-[1.02] mb-8"
          stagger={22}
        >
          Environmental and human health impacts.
        </AnimatedText>

        <Reveal delay={300}>
          <p className="text-white/65 text-base md:text-lg max-w-2xl leading-relaxed mb-24">
            Carbamate exposure can cause symptoms in people and can also affect aquatic life,
            pollinators, soil, and food chains after runoff.
          </p>
        </Reveal>

        {/* Environment metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-32">
          {environmentImpact.bullets.map((b, i) => (
            <Reveal key={i} delay={i * 80} className="bg-black p-6 md:p-8">
              <p className="chem-formula text-white text-3xl md:text-5xl font-normal tracking-tight mb-2">
                {b.metric}
              </p>
              <p className="section-eyebrow mb-2">{b.label}</p>
              <p className="text-white/60 text-sm leading-relaxed">{b.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Human health */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="section-eyebrow mb-4">Human health</p>
            </Reveal>
            <AnimatedText
              as="h3"
              className="text-white text-3xl md:text-4xl font-normal tracking-tight leading-[1.05] mb-6"
              stagger={22}
            >
              Symptoms appear in minutes.
            </AnimatedText>
            <Reveal delay={200}>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                {humanImpact.intro}
                <Cite ids={humanImpact.citationIds} />
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mono-card-strong rounded-xl px-5 py-4 text-sm text-white/85 leading-relaxed">
                <span className="text-white font-medium">First aid · </span>
                {humanImpact.firstAid}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            <div>
              <p className="section-eyebrow mb-4">Acute</p>
              <ul className="space-y-3">
                {humanImpact.acute.map((item, i) => (
                  <Reveal key={i} delay={i * 60}>
                    <li className="mono-card rounded-xl px-5 py-4">
                      <p className="text-white text-sm font-medium mb-1">{item.label}</p>
                      <p className="text-white/65 text-sm leading-relaxed">{item.body}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-eyebrow mb-4">Long-term</p>
              <ul className="space-y-3">
                {humanImpact.chronic.map((item, i) => (
                  <Reveal key={i} delay={i * 60 + 120}>
                    <li className="mono-card rounded-xl px-5 py-4">
                      <p className="text-white text-sm font-medium mb-1">{item.label}</p>
                      <p className="text-white/65 text-sm leading-relaxed">{item.body}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
