import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let _lenis: Lenis | null = null

export function getLenis(): Lenis | null {
  return _lenis
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis()
    _lenis = lenis
    const raf = (time: number) => {
      lenis.raf(time * 1000)
    }

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      _lenis = null
    }
  }, [])
}
