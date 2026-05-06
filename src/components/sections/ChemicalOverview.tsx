import { motion } from 'framer-motion'
import { ChemCard } from '../ui/ChemCard'
import { MoleculeDisplay } from '../ui/MoleculeDisplay'

const chemCards = [
  { label: 'Molecular Formula', value: 'C12H11NO2' },
  { label: 'Molecular Weight', value: '201.22 g/mol' },
  { label: 'Chemical Class', value: 'N-methyl carbamate' },
  { label: 'Parent Acid', value: 'Carbamic acid (NH2COOH)' },
  { label: 'Mode of Action', value: 'AChE inhibitor - reversible carbamylation' },
  { label: 'Solubility', value: '120 mg/L in water at 20 C' },
]

export function ChemicalOverview() {
  return (
    <section id="overview" className="py-24 px-6 md:px-12 lg:px-16 bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Chemical Structure
        </motion.p>

        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
          <motion.div
            className="mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <MoleculeDisplay />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[var(--text)] mb-6 leading-tight">
              Carbamate Pesticide:<br />Carbaryl
            </h2>

            <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
              Carbaryl is an N-methyl carbamate insecticide derived from carbamic acid. First synthesized in
              the 1950s, it belongs to the N-methyl class of carbamate pesticides, compounds characterized by
              a carbamic acid ester functional group. Its structure consists of a naphthyl ring system
              esterified to methylcarbamic acid.
            </p>

            <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
              As an acetylcholinesterase inhibitor, carbaryl binds reversibly to the enzyme active site and
              prevents breakdown of acetylcholine. That mechanism is effective against insects, but it also
              causes toxicity in non-target organisms including fish, birds, and mammals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {chemCards.map((card) => (
                <ChemCard key={card.label} label={card.label} value={card.value} accent="#4A6FD4" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
