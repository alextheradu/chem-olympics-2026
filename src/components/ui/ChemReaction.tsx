import { Fragment } from 'react'
import type { ReactionMolecule, PathwayReaction } from '../../data/reactions'

const ATOM_COLORS: Record<string, string> = {
  C: '#909090',
  N: '#3050f8',
  O: '#ff0d0d',
  H: '#ffffff',
  S: '#d4b800',
}

function bondPath(
  a: { x: number; y: number },
  b: { x: number; y: number },
  offset = 0
): string {
  if (offset === 0) return `M ${a.x} ${a.y} L ${b.x} ${b.y}`
  const dx = b.y - a.y
  const dy = a.x - b.x
  const len = Math.sqrt(dx * dx + dy * dy)
  const nx = (dx / len) * offset
  const ny = (dy / len) * offset
  return `M ${a.x + nx} ${a.y + ny} L ${b.x + nx} ${b.y + ny}`
}

function MoleculeIcon({ atoms, bonds, viewBox, formula, displayWidth, highlightAtoms = [] }: ReactionMolecule) {
  const atomMap = Object.fromEntries(atoms.map((a) => [a.id, a]))
  const highlightSet = new Set(highlightAtoms)

  return (
    <div className="flex flex-col items-center gap-1.5" style={{ width: displayWidth }}>
      <svg
        viewBox={viewBox}
        style={{ width: '100%', display: 'block' }}
        aria-label={`${formula} structure`}
      >
        {bonds.map((bond, i) => {
          const a = atomMap[bond.from]
          const b = atomMap[bond.to]
          if (!a || !b) return null
          const lines = bond.double
            ? [bondPath(a, b, 3), bondPath(a, b, -3)]
            : [bondPath(a, b, 0)]
          return lines.map((d, j) => (
            <path
              key={`${bond.from}-${bond.to}-${j}`}
              d={d}
              stroke="rgba(255,255,255,0.55)"
              strokeWidth={1.5}
              strokeLinecap="round"
              fill="none"
            />
          ))
        })}

        {atoms.map((atom) => {
          const r = atom.label ? 16 : 10
          return (
            <g key={atom.id}>
              {highlightSet.has(atom.id) && (
                <circle
                  cx={atom.x}
                  cy={atom.y}
                  r={r + 6}
                  fill="rgba(255,200,60,0.12)"
                  stroke="rgba(255,200,60,0.5)"
                  strokeWidth={1}
                  strokeDasharray="3 2"
                />
              )}
              <circle
                cx={atom.x}
                cy={atom.y}
                r={r}
                fill={ATOM_COLORS[atom.element] ?? '#909090'}
                stroke="rgba(0,0,0,0.6)"
                strokeWidth={1.2}
              />
              <text
                x={atom.x}
                y={atom.y}
                textAnchor="middle"
                dominantBaseline="central"
                fill={atom.element === 'H' ? '#000' : '#fff'}
                fontSize={atom.label ? 9 : 9}
                fontFamily="Inter, sans-serif"
                fontWeight={600}
              >
                {atom.label ?? atom.element}
              </text>
            </g>
          )
        })}
      </svg>
      <p className="chem-formula text-white/40 text-[10px] text-center leading-tight">{formula}</p>
    </div>
  )
}

interface ChemReactionProps extends PathwayReaction {
  formula: string
  formulaLabel?: string
}

export function ChemReaction({ formula, formulaLabel, reactants, products, condition }: ChemReactionProps) {
  return (
    <div className="mono-card rounded-xl overflow-hidden">
      {/* Row 1: text formula */}
      <div className="px-5 py-3 border-b border-white/10 flex items-baseline gap-3 overflow-x-auto">
        <span className="section-eyebrow flex-shrink-0">Reaction</span>
        <p className="chem-formula text-white text-sm whitespace-nowrap">{formula}</p>
      </div>

      {/* Row 2: structural diagrams */}
      <div className="px-5 py-5 overflow-x-auto">
        <div className="flex items-center gap-3 min-w-max">
          {reactants.map((mol, i) => (
            <Fragment key={`r-${i}`}>
              {i > 0 && (
                <span className="text-white/35 text-xl font-light self-center pb-5">+</span>
              )}
              <MoleculeIcon {...mol} />
            </Fragment>
          ))}

          {/* Arrow */}
          <div className="flex flex-col items-center gap-1 px-1 self-center pb-5">
            {condition && (
              <span className="text-white/40 text-[10px] tracking-wide whitespace-nowrap">{condition}</span>
            )}
            <div className="flex items-center">
              <div className="w-10 h-px bg-white/35" />
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path
                  d="M0 5 L10 5 M6 1 L12 5 L6 9"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {products.map((mol, i) => (
            <Fragment key={`p-${i}`}>
              {i > 0 && (
                <span className="text-white/35 text-xl font-light self-center pb-5">+</span>
              )}
              <MoleculeIcon {...mol} />
            </Fragment>
          ))}
        </div>
      </div>

      {formulaLabel && (
        <div className="px-5 pb-3 -mt-1 text-white/35 text-[10px] tracking-wide">{formulaLabel}</div>
      )}
    </div>
  )
}
