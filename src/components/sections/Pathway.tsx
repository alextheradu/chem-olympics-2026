import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { AnimatedText, Reveal } from '../ui/AnimatedText'
import { Cite } from '../ui/Cite'
import { ChemReaction } from '../ui/ChemReaction'
import { pathway } from '../../data/pathway'
import { getLenis } from '../../hooks/useLenis'

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
            scrub: 0.25,
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

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const onWheel = (e: WheelEvent) => {
      const rect = wrapper.getBoundingClientRect()
      // Only active while section is pinned (spans the viewport)
      if (rect.top > 0 || rect.bottom < window.innerHeight) return
      // Trigger when horizontal has any meaningful contribution
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY) * 0.4) return

      e.preventDefault()
      const lenis = getLenis()
      if (!lenis) return
      const target = (lenis as any).targetScroll ?? lenis.scroll
      // lerp:1 = instant Lenis target update (no extra smoothing layer on top of GSAP scrub)
      lenis.scrollTo(target + e.deltaX * 2.5, { lerp: 1 })
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <section
      id="pathway"
      ref={wrapperRef}
      className="relative bg-black"
      style={{ height: `${pathway.length * TRACK_VH_PER_STAGE}vh` }}
    >
      <div ref={stickyRef} className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-x-0 top-0 hairline z-30" />
        {/* Header / progress */}
        <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 lg:px-16 pt-20 md:pt-24 pointer-events-none">
          <Reveal>
            <p className="section-eyebrow mb-2">03 · Contamination Pathway</p>
          </Reveal>
          <AnimatedText
            as="h2"
            className="text-white text-2xl md:text-3xl font-normal tracking-tight max-w-2xl leading-[1.05]"
            stagger={20}
          >
            Contamination pathway from source to organism.
          </AnimatedText>

          <div className="mt-4 flex items-center gap-2">
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

          <p className="mt-3 text-white/30 text-[10px] tracking-[0.15em] uppercase">
            Scroll to advance →
          </p>
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
              className="relative h-full flex-shrink-0 px-6 md:px-12 lg:px-16 pt-[11rem] md:pt-[13rem] pb-10 overflow-y-auto"
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
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto">
                <p className="chem-formula text-white/40 text-sm tracking-[0.3em] mb-2">
                  STAGE {stage.index}
                </p>
                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.0] mb-5">
                  {stage.label}
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl mb-4">
                  {stage.chemistry}
                  <Cite ids={stage.citationIds} />
                </p>

                {stage.reaction ? (
                  <div className="mb-5 max-w-3xl">
                    <ChemReaction
                      {...stage.reaction}
                      formula={stage.equation ?? ''}
                      formulaLabel={stage.equationLabel}
                    />
                  </div>
                ) : stage.equation ? (
                  <div className="mono-card rounded-xl px-5 py-3 max-w-2xl mb-5 overflow-x-auto">
                    <p className="chem-formula text-white text-sm whitespace-nowrap mb-1">
                      {stage.equation}
                    </p>
                    {stage.equationLabel ? (
                      <p className="text-white/45 text-xs tracking-wide">{stage.equationLabel}</p>
                    ) : null}
                  </div>
                ) : null}

                <div className="pt-4 border-t border-white/10 max-w-xl">
                  <p className="section-eyebrow mb-2">Example</p>
                  <p className="text-white/70 text-sm leading-relaxed">{stage.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
