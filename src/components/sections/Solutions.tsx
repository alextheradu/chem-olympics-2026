import { AnimatedText, Reveal } from '../ui/AnimatedText'
import { approaches, bestPractice, shortcomings } from '../../data/solutions'

export function Solutions() {
  return (
    <section id="solutions" className="relative px-6 md:px-12 lg:px-16 py-32 md:py-40 bg-black">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="section-eyebrow mb-6">06 · Solutions</p>
        </Reveal>
        <AnimatedText
          as="h2"
          className="text-white text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight max-w-4xl leading-[1.02] mb-8"
          stagger={22}
        >
          Four levers. None alone is enough.
        </AnimatedText>

        <Reveal delay={300}>
          <p className="text-white/65 text-base md:text-lg max-w-2xl leading-relaxed mb-20">
            Different actors — regulators, agronomists, microbiologists, watershed groups — work
            on different parts of the carbamate problem. The strongest response stacks them.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 mb-32">
          {approaches.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <article className="mono-card rounded-2xl p-6 md:p-8 h-full">
                <p className="section-eyebrow mb-3">{a.actor}</p>
                <h3 className="text-white text-xl md:text-2xl font-normal tracking-tight mb-3">
                  {a.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">{a.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Best practice */}
        <Reveal>
          <div className="mono-card-strong rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
            <div className="absolute top-6 right-6 chem-formula text-white/30 text-xs tracking-[0.3em]">
              RECOMMENDED
            </div>
            <p className="section-eyebrow mb-4">Best practice</p>
            <AnimatedText
              as="h3"
              className="text-white text-3xl md:text-5xl font-normal tracking-tight leading-[1.05] mb-6 max-w-3xl"
              stagger={20}
            >
              {bestPractice.title}
            </AnimatedText>
            <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-3xl">
              {bestPractice.reasoning}
            </p>
          </div>
        </Reveal>

        {/* Shortcomings */}
        <div>
          <Reveal>
            <p className="section-eyebrow mb-4">Limits & shortcomings</p>
          </Reveal>
          <AnimatedText
            as="h3"
            className="text-white text-3xl md:text-4xl font-normal tracking-tight leading-[1.05] mb-12 max-w-3xl"
            stagger={20}
          >
            What this approach does not solve.
          </AnimatedText>
          <div className="grid md:grid-cols-3 gap-5">
            {shortcomings.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="mono-card rounded-2xl p-6 md:p-8 h-full">
                  <h4 className="text-white text-base md:text-lg font-medium mb-3">{s.title}</h4>
                  <p className="text-white/65 text-sm leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
