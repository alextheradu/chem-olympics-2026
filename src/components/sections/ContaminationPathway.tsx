import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { type PathwayNode, pathwayNodes } from '../../data/pathway'

gsap.registerPlugin(ScrollTrigger)

const SVG_W = 1000
const SVG_H = 300

function nodePixel(node: PathwayNode) {
  return { x: (node.xPct / 100) * SVG_W, y: (node.yPct / 100) * SVG_H }
}

function buildPath(nodes: PathwayNode[]) {
  const points = nodes.map(nodePixel)
  if (points.length < 2) return ''

  let d = `M ${points[0].x} ${points[0].y}`
  for (let i = 1; i < points.length; i += 1) {
    const prev = points[i - 1]
    const current = points[i]
    const cx = (prev.x + current.x) / 2
    d += ` C ${cx} ${prev.y}, ${cx} ${current.y}, ${current.x} ${current.y}`
  }

  return d
}

const PATH_D = buildPath(pathwayNodes)

export function ContaminationPathway() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [activeNode, setActiveNode] = useState<PathwayNode | null>(pathwayNodes[0])

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const length = path.getTotalLength()
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })

    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'center center',
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="pathway" ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contamination Pathway
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-normal text-[var(--text)] mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          From field to food chain
        </motion.h2>

        <motion.p
          className="text-[var(--text-muted)] mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Scroll to watch carbaryl travel from farm application through soil, water, and organisms. Click any
          node for detailed chemistry.
        </motion.p>

        <div className="relative w-full overflow-x-auto pb-6">
          <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="w-full" style={{ minWidth: 680, overflow: 'visible' }}>
            <path ref={pathRef} d={PATH_D} fill="none" stroke="#4A6FD4" strokeWidth={3} strokeLinecap="round" />

            {pathwayNodes.map((node, index) => {
              const { x, y } = nodePixel(node)
              const isActive = activeNode?.id === node.id

              return (
                <motion.g
                  key={node.id}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActiveNode(isActive ? null : node)}
                >
                  {isActive && <circle cx={x} cy={y} r={34} fill="none" stroke="#4A6FD4" strokeWidth={2} opacity={0.4} />}
                  <circle cx={x} cy={y} r={26} fill={isActive ? '#4A6FD4' : 'white'} stroke="#4A6FD4" strokeWidth={2} />
                  <text x={x} y={y - 4} textAnchor="middle" dominantBaseline="middle" fontSize={18}>
                    {node.icon}
                  </text>
                  <text
                    x={x}
                    y={y + 38}
                    textAnchor="middle"
                    fill="#1a1a2a"
                    fontSize={11}
                    fontFamily="Inter, sans-serif"
                    fontWeight="500"
                  >
                    {node.label}
                  </text>
                </motion.g>
              )
            })}
          </svg>
        </div>

        <AnimatePresence mode="wait">
          {activeNode && (
            <motion.div
              key={activeNode.id}
              className="mt-8 rounded-2xl border border-[#4A6FD422] bg-[#F8F9FF] p-6 md:p-8"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{activeNode.icon}</span>
                    <div>
                      <p className="section-label">Stage {activeNode.id} of 5</p>
                      <h3 className="text-2xl font-normal text-[var(--text)]">{activeNode.label}</h3>
                    </div>
                  </div>
                  <p className="text-[var(--text-muted)] leading-relaxed">{activeNode.chemistry}</p>
                  <p className="mt-4 text-sm text-[var(--text-muted)] italic">{activeNode.example}</p>
                </div>

                {activeNode.equation && (
                  <div className="flex flex-col justify-center">
                    <div className="rounded-xl p-6 bg-white border shadow-sm">
                      <p className="section-label mb-3">Chemical Equation</p>
                      <p className="chem-formula text-[var(--text)] text-lg font-medium leading-relaxed">
                        {activeNode.equation}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
