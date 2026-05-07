import { type ElementType, type ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

interface AnimatedTextProps {
  children: string
  as?: ElementType
  className?: string
  stagger?: number
  delay?: number
  by?: 'word' | 'char'
  threshold?: number
}

export function AnimatedText({
  children,
  as: Tag = 'p',
  className = '',
  stagger = 28,
  delay = 0,
  by = 'word',
  threshold = 0.25,
}: AnimatedTextProps) {
  const { ref, inView } = useInView<HTMLElement>(threshold)
  const tokens = by === 'word' ? children.split(/(\s+)/) : children.split('')

  return (
    <Tag ref={ref} className={className}>
      {tokens.map((token, i) => {
        if (/^\s+$/.test(token)) return <span key={i}>{token}</span>
        return (
          <span
            key={i}
            className="inline-block"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(0.6em)',
              transition: 'opacity 700ms cubic-bezier(0.2,0.7,0.2,1), transform 700ms cubic-bezier(0.2,0.7,0.2,1)',
              transitionDelay: `${delay + i * stagger}ms`,
              willChange: 'opacity, transform',
            }}
          >
            {token}
          </span>
        )
      })}
    </Tag>
  )
}

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  threshold?: number
}

export function Reveal({ children, className = '', delay = 0, y = 24, threshold = 0.2 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(threshold)

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : `translateY(${y}px)`,
        transition: 'opacity 800ms cubic-bezier(0.2,0.7,0.2,1), transform 800ms cubic-bezier(0.2,0.7,0.2,1)',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
