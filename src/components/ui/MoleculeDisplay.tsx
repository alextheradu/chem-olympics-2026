import { motion } from 'framer-motion'

const ATOM_COLORS: Record<string, string> = {
  C: '#555555',
  O: '#E8524A',
  N: '#4A6FD4',
  H: '#999999',
}

interface Atom {
  id: string
  element: string
  x: number
  y: number
  label?: string
}

interface Bond {
  from: string
  to: string
  double?: boolean
}

const atoms: Atom[] = [
  { id: 'c1', element: 'C', x: 60, y: 120 },
  { id: 'c2', element: 'C', x: 90, y: 100 },
  { id: 'c3', element: 'C', x: 120, y: 120 },
  { id: 'c4', element: 'C', x: 120, y: 160 },
  { id: 'c5', element: 'C', x: 90, y: 180 },
  { id: 'c6', element: 'C', x: 60, y: 160 },
  { id: 'c7', element: 'C', x: 150, y: 100 },
  { id: 'c8', element: 'C', x: 180, y: 120 },
  { id: 'c9', element: 'C', x: 180, y: 160 },
  { id: 'c10', element: 'C', x: 150, y: 180 },
  { id: 'o1', element: 'O', x: 210, y: 140 },
  { id: 'cc', element: 'C', x: 245, y: 140 },
  { id: 'o2', element: 'O', x: 245, y: 105 },
  { id: 'n1', element: 'N', x: 280, y: 140 },
  { id: 'cm', element: 'C', x: 315, y: 140, label: 'CH3' },
]

const bonds: Bond[] = [
  { from: 'c1', to: 'c2' },
  { from: 'c2', to: 'c3', double: true },
  { from: 'c3', to: 'c4' },
  { from: 'c4', to: 'c5', double: true },
  { from: 'c5', to: 'c6' },
  { from: 'c6', to: 'c1', double: true },
  { from: 'c3', to: 'c7' },
  { from: 'c7', to: 'c8', double: true },
  { from: 'c8', to: 'c9' },
  { from: 'c9', to: 'c10', double: true },
  { from: 'c10', to: 'c4' },
  { from: 'c10', to: 'c5' },
  { from: 'c9', to: 'o1' },
  { from: 'o1', to: 'cc' },
  { from: 'cc', to: 'o2', double: true },
  { from: 'cc', to: 'n1' },
  { from: 'n1', to: 'cm' },
]

const atomMap = Object.fromEntries(atoms.map((atom) => [atom.id, atom]))

function getBondPath(a: Atom, b: Atom, double?: boolean) {
  if (!double) return `M ${a.x} ${a.y} L ${b.x} ${b.y}`

  const dx = b.y - a.y
  const dy = a.x - b.x
  const len = Math.sqrt(dx * dx + dy * dy)
  const nx = (dx / len) * 3
  const ny = (dy / len) * 3

  return `M ${a.x + nx} ${a.y + ny} L ${b.x + nx} ${b.y + ny} M ${a.x - nx} ${a.y - ny} L ${b.x - nx} ${b.y - ny}`
}

export function MoleculeDisplay() {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <motion.svg
        viewBox="0 0 380 280"
        className="w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        aria-label="Simplified carbaryl molecular structure"
      >
        {bonds.map((bond, index) => {
          const a = atomMap[bond.from]
          const b = atomMap[bond.to]

          return (
            <motion.path
              key={`${bond.from}-${bond.to}`}
              d={getBondPath(a, b, bond.double)}
              stroke="rgba(200,215,255,0.45)"
              strokeWidth={1.5}
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            />
          )
        })}

        {atoms.map((atom, index) => (
          <motion.g
            key={atom.id}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: bonds.length * 0.04 + index * 0.05 }}
          >
            <circle
              cx={atom.x}
              cy={atom.y}
              r={atom.label ? 16 : 10}
              fill={ATOM_COLORS[atom.element]}
              stroke="white"
              strokeWidth={1.5}
            />
            <text
              x={atom.x}
              y={atom.y}
              textAnchor="middle"
              dominantBaseline="central"
              fill="white"
              fontSize={atom.label ? 10 : 9}
              fontFamily="Inter, sans-serif"
              fontWeight="500"
            >
              {atom.label ?? atom.element}
            </text>
          </motion.g>
        ))}

        <text x="190" y="255" textAnchor="middle" fill="rgba(241,245,249,0.45)" fontSize="13" fontFamily="Inter, sans-serif">
          C12H11NO2 - Carbaryl
        </text>
      </motion.svg>

      <div className="flex gap-4 text-xs text-[var(--text-muted)]">
        {Object.entries(ATOM_COLORS).map(([element, color]) => (
          <div key={element} className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full inline-block" style={{ background: color }} />
            <span>{element}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
