import { AnimatedText, Reveal } from '../ui/AnimatedText'
import { citations } from '../../data/citations'

const TYPE_LABEL: Record<string, string> = {
  academic: 'Academic',
  government: 'Government',
  ngo: 'NGO / Org',
}

export function Citations() {
  return (
    <section id="citations" className="relative px-6 md:px-12 lg:px-16 py-32 md:py-40 bg-black">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="section-eyebrow mb-6">07 · References</p>
        </Reveal>
        <AnimatedText
          as="h2"
          className="text-white text-4xl md:text-6xl font-normal tracking-tight leading-[1.02] mb-12"
          stagger={22}
        >
          Sources.
        </AnimatedText>

        <ol className="divide-y divide-white/10 border-y border-white/10">
          {citations.map((c, i) => (
            <Reveal key={c.id} delay={i * 50}>
              <li id={`cite-${c.id}`} className="py-6 grid grid-cols-12 gap-6 items-baseline group">
                <span className="col-span-1 chem-formula text-white/40 text-sm tabular-nums">
                  [{String(c.id).padStart(2, '0')}]
                </span>
                <div className="col-span-11 md:col-span-8">
                  <p className="text-white text-base md:text-lg font-normal leading-snug mb-1 group-hover:translate-x-1 transition-transform">
                    {c.title}
                  </p>
                  <p className="text-white/55 text-sm">
                    {c.authors}
                    {c.journal ? ` · ${c.journal}` : ''} · {c.year}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3 flex md:justify-end items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {TYPE_LABEL[c.type]}
                  </span>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 hover:text-white text-sm underline underline-offset-4"
                  >
                    Open ↗
                  </a>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <p className="text-white/35 text-xs tracking-[0.2em] mt-12 uppercase">
          Pascack Hills High School · NJ Chemistry Olympics 2026
        </p>
      </div>
    </section>
  )
}
