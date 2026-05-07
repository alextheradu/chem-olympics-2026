import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface FigureProps {
  src: string
  alt: string
  caption?: string
  className?: string
  parallax?: number
}

export function Figure({ src, alt, caption, className = '', parallax = 80 }: FigureProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax])

  return (
    <figure ref={ref} className={`relative overflow-hidden rounded-2xl border border-white/10 ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="block w-full h-full object-cover grayscale-[0.2]"
        style={{ y }}
        loading="lazy"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      {caption ? (
        <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-xs text-white/60 tracking-wide">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
