import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { AnimatedText, Reveal } from '../ui/AnimatedText'
import { Cite } from '../ui/Cite'
import { pathway } from '../../data/pathway'

gsap.registerPlugin(ScrollTrigger)

const TRACK_VH_PER_STAGE = 100

export function Pathway() {
  const wrapperRef = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)

  useGSAP(
    () => {
      const wrapper = wrapperRef.current
      const sticky = stickyRef.current
      const track = trackRef.current
      if (!wrapper || !sticky || !track) return

      const ctx = gsap.context(() => {
        const distance = () => track.scrollWidth - sticky.clientWidth

        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.6,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.min(pathway.length - 1, Math.floor(self.progress * pathway.length))
              setActiveIdx(idx)
            },
          },
        })
      }, wrapper)

      return () => ctx.revert()
    },
    { scope: wrapperRef }
  )

  return (
    <section
      id="pathway"
      ref={wrapperRef}
      className="relative bg-black"
      style={{ height: `${pathway.length * TRACK_VH_PER_STAGE}vh` }}
    >
      <div ref={stickyRef} className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Header / progress */}
        <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pointer-events-none">
          <Reveal>
            <p className="section-eyebrow mb-3">03 · Contamination Pathway</p>
          </Reveal>
          <AnimatedText
            as="h2"
            className="text-white text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight max-w-3xl leading-[1.05]"
            stagger={20}
          >
            From spray nozzle to apex predator — five stages.
          </AnimatedText>

          <div className="mt-8 flex items-center gap-2">
            {pathway.map((s, i) => (
              <div key={s.id} className="flex items-center gap-2 pointer-events-auto">
                <span
                  className={`text-[10px] tabular-nums font-medium tracking-wider transition-colors ${
                    i <= activeIdx ? 'text-white' : 'text-white/30'
                  }`}
                >
                  {s.index}
                </span>
                <span
                  className={`hidden md:inline text-xs transition-colors ${
                    i === activeIdx ? 'text-white' : 'text-white/35'
                  }`}
                >
                  {s.shortLabel}
                </span>
                {i < pathway.length - 1 ? (
                  <span
                    className={`block w-8 md:w-12 h-px transition-colors ${
                      i < activeIdx ? 'bg-white' : 'bg-white/20'
                    }`}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal track */}
        <div
          ref={trackRef}
          className="absolute inset-0 flex"
          style={{ width: `${pathway.length * 100}vw` }}
        >
          {pathway.map((stage) => (
            <div
              key={stage.id}
              className="relative h-full flex-shrink-0 px-6 md:px-12 lg:px-16 pt-48 md:pt-56 pb-16"
              style={{ width: '100vw' }}
            >
              {/* Backdrop image */}
              <div className="absolute inset-0 -z-0">
                <img
                  src={stage.imageUrl}
                  alt=""
                  className="w-full h-full object-cover grayscale-[0.6] brightness-[0.85]"
                  loading="lazy"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="relative z-10 grid lg:grid-cols-12 gap-10 h-full items-end max-w-7xl mx-auto">
                <div className="lg:col-span-7">
                  <p className="chem-formula text-white/40 text-sm tracking-[0.3em] mb-3">
                    STAGE {stage.index}
                  </p>
                  <h3 className="text-white text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[0.95] mb-8">
                    {stage.label}
                  </h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mb-6">
                    {stage.chemistry}
                    <Cite ids={stage.citationIds} />
                  </p>
                  {stage.equation ? (
                    <div className="mono-card rounded-xl px-5 py-4 max-w-xl">
                      <p className="chem-formula text-white text-sm md:text-base mb-1">
                        {stage.equation}
                      </p>
                      {stage.equationLabel ? (
                        <p className="text-white/45 text-xs tracking-wide">{stage.equationLabel}</p>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                <div className="lg:col-span-5 lg:pl-8 lg:border-l border-white/10">
                  <p className="section-eyebrow mb-3">Example</p>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">{stage.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
