import { useEffect, useState } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  initialDelay?: number
  charDelay?: number
}

export function AnimatedHeading({
  text,
  className = '',
  initialDelay = 200,
  charDelay = 30,
}: AnimatedHeadingProps) {
  const [animated, setAnimated] = useState(false)
  const lines = text.split('\n')

  useEffect(() => {
    const timer = window.setTimeout(() => setAnimated(true), initialDelay)
    return () => window.clearTimeout(timer)
  }, [initialDelay])

  return (
    <h1 className={className}>
      {lines.map((line, lineIndex) => {
        const previousChars = lines.slice(0, lineIndex).reduce((count, current) => count + current.length, 0)

        return (
          <span key={line} className="block whitespace-nowrap">
            {line.split('').map((char, charIndex) => {
              const delay = (previousChars + charIndex) * charDelay

              return (
                <span
                  key={`${char}-${charIndex}`}
                  className="inline-block transition-all"
                  style={{
                    opacity: animated ? 1 : 0,
                    transform: animated ? 'translateX(0)' : 'translateX(-18px)',
                    transitionDuration: '500ms',
                    transitionDelay: `${delay}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                >
                  {char === ' ' ? '\u00a0' : char}
                </span>
              )
            })}
          </span>
        )
      })}
    </h1>
  )
}
