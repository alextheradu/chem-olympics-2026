import { motion } from 'framer-motion'

const ATOM_COLORS: Record<string, string> = {
  C: '#909090',
  N: '#3050f8',
  O: '#ff0d0d',
  H: '#ffffff',
  S: '#d4b800',
}

export interface Atom {
  id: string
  element: 'C' | 'N' | 'O' | 'H' | 'S'
  x: number
  y: number
  label?: string
}

export interface Bond {
  from: string
  to: string
  double?: boolean
  triple?: boolean
}

interface MoleculeDisplayProps {
  atoms: Atom[]
  bonds: Bond[]
  formula: string
  name: string
  viewBox?: string
  className?: string
  showLegend?: boolean
  highlightAtoms?: string[]
}

function bondPath(a: Atom, b: Atom, offset = 0) {
  if (offset === 0) return `M ${a.x} ${a.y} L ${b.x} ${b.y}`
  const dx = b.y - a.y
  const dy = a.x - b.x
  const len = Math.sqrt(dx * dx + dy * dy)
  const nx = (dx / len) * offset
  const ny = (dy / len) * offset
  return `M ${a.x + nx} ${a.y + ny} L ${b.x + nx} ${b.y + ny}`
}

export function MoleculeDisplay({
  atoms,
  bonds,
  formula,
  name,
  viewBox = '0 0 380 280',
  className = '',
  showLegend = true,
  highlightAtoms = [],
}: MoleculeDisplayProps) {
  const atomMap = Object.fromEntries(atoms.map((a) => [a.id, a]))
  const highlightSet = new Set(highlightAtoms)

  return (
    <div className={`w-full flex flex-col items-center gap-4 ${className}`}>
      <motion.svg
        viewBox={viewBox}
        className="w-full max-w-md"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
        aria-label={`${name} molecular structure`}
      >
        {bonds.map((bond, i) => {
          const a = atomMap[bond.from]
          const b = atomMap[bond.to]
          if (!a || !b) return null
          const lines: string[] = []
          if (bond.triple) {
            lines.push(bondPath(a, b, 0), bondPath(a, b, 4), bondPath(a, b, -4))
          } else if (bond.double) {
            lines.push(bondPath(a, b, 3), bondPath(a, b, -3))
          } else {
            lines.push(bondPath(a, b, 0))
          }

          return lines.map((d, j) => (
            <motion.path
              key={`${bond.from}-${bond.to}-${j}`}
              d={d}
              stroke="rgba(255,255,255,0.55)"
              strokeWidth={1.5}
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.04 + j * 0.02 }}
            />
          ))
        })}

        {atoms.map((atom, i) => (
          <motion.g
            key={atom.id}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: bonds.length * 0.04 + i * 0.05 }}
          >
            {highlightSet.has(atom.id) && (
              <circle
                cx={atom.x}
                cy={atom.y}
                r={(atom.label ? 18 : 11) + 6}
                fill="rgba(255,200,60,0.12)"
                stroke="rgba(255,200,60,0.5)"
                strokeWidth={1}
                strokeDasharray="3 2"
              />
            )}
            <circle
              cx={atom.x}
              cy={atom.y}
              r={atom.label ? 18 : 11}
              fill={ATOM_COLORS[atom.element]}
              stroke="rgba(0,0,0,0.6)"
              strokeWidth={1.2}
            />
            <text
              x={atom.x}
              y={atom.y}
              textAnchor="middle"
              dominantBaseline="central"
              fill={atom.element === 'H' ? '#000' : '#fff'}
              fontSize={atom.label ? 10 : 10}
              fontFamily="Inter, sans-serif"
              fontWeight={600}
            >
              {atom.label ?? atom.element}
            </text>
          </motion.g>
        ))}

        <text
          x={parseInt(viewBox.split(' ')[2]) / 2}
          y={parseInt(viewBox.split(' ')[3]) - 12}
          textAnchor="middle"
          fill="rgba(255,255,255,0.45)"
          fontSize="12"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.04em"
        >
          {formula} · {name}
        </text>
      </motion.svg>

      {showLegend ? (
        <div className="flex flex-wrap gap-3 text-[11px] text-white/50 tracking-wide">
          {Object.entries(ATOM_COLORS).map(([el, color]) => (
            <div key={el} className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: color }} />
              <span>{el}</span>
            </div>
          ))}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full inline-block border border-dashed border-yellow-400/50 bg-yellow-400/10" />
            <span>carbamate group</span>
          </div>
        </div>
      ) : null}
    </div>
  )
}
