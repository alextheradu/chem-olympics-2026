import { type ReactNode } from 'react'

interface ChemCardProps {
  label?: string
  title?: string
  children: ReactNode
  className?: string
}

export function ChemCard({ label, title, children, className = '' }: ChemCardProps) {
  return (
    <div className={`mono-card rounded-2xl p-6 md:p-8 ${className}`}>
      {label ? <p className="section-eyebrow mb-3">{label}</p> : null}
      {title ? <h3 className="text-white text-xl md:text-2xl font-normal mb-4 tracking-tight">{title}</h3> : null}
      <div className="text-white/75 text-sm md:text-base leading-relaxed">{children}</div>
    </div>
  )
}
