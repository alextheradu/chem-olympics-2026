interface ChemCardProps {
  label: string
  value: string
  accent?: string
}

export function ChemCard({ label, value, accent = '#4A6FD4' }: ChemCardProps) {
  return (
    <div className="rounded-xl p-4 bg-white shadow-sm border" style={{ borderColor: `${accent}22` }}>
      <p className="section-label mb-1" style={{ color: accent }}>
        {label}
      </p>
      <p className="text-[var(--text)] font-medium text-sm leading-relaxed chem-formula">{value}</p>
    </div>
  )
}
