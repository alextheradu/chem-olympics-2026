import { Navbar } from '../layout/Navbar'
import { AnimatedHeading } from '../ui/AnimatedHeading'
import { FadeIn } from '../ui/FadeIn'

const VIDEO_URL = 'https://videos.pexels.com/video-files/35279738/14945782_3840_2160_60fps.mp4'

function scrollToSelector(selector: string) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video className="absolute inset-0 w-full h-full object-cover" src={VIDEO_URL} autoPlay loop muted playsInline />

      <Navbar />

      <div className="relative z-10 h-full flex flex-col px-6 md:px-12 lg:px-16 pb-12 lg:pb-16">
        <div className="flex-1" />

        <div className="lg:grid lg:grid-cols-2 lg:items-end gap-8">
          <div>
            <AnimatedHeading
              text={"Carbamate Pesticides'\nEnvironmental Impact."}
              className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 leading-[0.96]"
              initialDelay={200}
              charDelay={30}
            />

            <FadeIn delay={800} duration={1000}>
              <p className="text-base md:text-lg text-gray-300 mb-5">
                How carbamate pesticide runoff reaches aquatic life and affects human health.
              </p>
            </FadeIn>

            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#overview"
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSelector('#overview')
                  }}
                  className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Explore the Research
                </a>
                <a
                  href="#pathway"
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSelector('#pathway')
                  }}
                  className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Pathway
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={1400} duration={1000} className="hidden lg:flex items-end justify-end">
            <div className="liquid-glass border border-white/20 px-6 py-4 rounded-xl flex gap-6">
              {[
                { term: 'Carbamate', sub: 'Chemical source', href: '#source' },
                { term: 'Pesticide', sub: 'Six compounds', href: '#concerns' },
                { term: 'Ecosystem', sub: 'From field to fish', href: '#pathway' },
              ].map(({ term, sub, href }) => (
                <a
                  key={term}
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollToSelector(href) }}
                  className="flex flex-col items-center gap-1 group cursor-pointer"
                >
                  <span className="text-white text-base md:text-lg font-light group-hover:text-white/80 transition-colors">
                    {term}.
                  </span>
                  <span className="text-white/40 text-[10px] uppercase tracking-[0.15em] group-hover:text-white/60 transition-colors">
                    {sub}
                  </span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
