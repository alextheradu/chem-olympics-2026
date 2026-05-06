import { motion } from 'framer-motion'
import { citations } from '../../data/citations'

const typeLabel: Record<string, string> = {
  academic: 'Academic',
  government: 'Government',
  ngo: 'NGO / Advocacy',
}

const typeColor: Record<string, string> = {
  academic: '#4A6FD4',
  government: '#2EA84A',
  ngo: '#D4820A',
}

export function Citations() {
  return (
    <footer id="citations" className="bg-white border-t border-gray-200 py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sources & Academic References
        </motion.p>

        <motion.h2
          className="text-2xl font-normal text-[var(--text)] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Citations
        </motion.h2>

        <div className="flex flex-col gap-4 mb-12">
          {citations.map((citation, index) => (
            <motion.div
              key={citation.id}
              className="flex gap-4 items-start"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <span className="text-sm font-mono text-[var(--text-muted)] min-w-[24px] mt-0.5">[{citation.id}]</span>
              <div>
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-md mr-2"
                  style={{ background: `${typeColor[citation.type]}18`, color: typeColor[citation.type] }}
                >
                  {typeLabel[citation.type]}
                </span>
                <span className="text-sm text-[var(--text)]">
                  {citation.authors} ({citation.year}).{' '}
                  <a
                    href={citation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic hover:underline"
                    style={{ color: '#4A6FD4' }}
                  >
                    {citation.title}
                  </a>
                  {citation.journal && `. ${citation.journal}`}.
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            Pascack Hills High School - NJ Chemistry Olympics 2026 - Carbamate Pesticide Environmental Impact
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            All chemistry content verified against cited sources. Design: React + GSAP + Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  )
}
