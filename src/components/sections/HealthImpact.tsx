import { motion } from 'framer-motion'
import { ChemCard } from '../ui/ChemCard'

const humanSymptoms = [
  { severity: 'Mild', symptoms: 'Dizziness, headache, nausea, sweating, small skin rash on contact' },
  { severity: 'Moderate', symptoms: 'Muscle spasms, blurred vision, tremors, vomiting, stomach cramps' },
  { severity: 'Severe', symptoms: 'Convulsions, respiratory failure, loss of consciousness - seek medical help immediately' },
  { severity: 'Long-term', symptoms: 'Weight loss, persistent weakness, loss of appetite, neurological sensitivity' },
]

const environmentalItems = [
  { icon: '🐟', title: 'Aquatic toxicity', desc: 'Lethal to fish and invertebrates at low concentrations; disrupts aquatic food webs' },
  { icon: '🐦', title: 'Bird mortality', desc: 'Carbofuran is linked to songbird and raptor die-offs and is frequently used illegally' },
  { icon: '🐝', title: 'Pollinator collapse', desc: 'Carbaryl is acutely toxic to honeybees; sublethal doses impair navigation and colony health' },
  { icon: '🌍', title: 'Soil microbiome', desc: 'Hydrolysis product 1-naphthol can disrupt soil microbial communities' },
]

const compoundConcerns = [
  { label: 'Aldicarb', value: 'Highly toxic systemic carbamate; contaminates drinking water and causes acute neurological symptoms' },
  { label: 'Carbofuran', value: 'Potent AChE inhibitor; used illegally to poison wildlife and frequently contaminates waterways' },
  { label: 'Carbaryl', value: 'Detected in urban streams; highly toxic to bees and linked to human health concerns' },
  { label: 'Methomyl', value: 'Highly toxic to birds, mammals, and aquatic invertebrates; potential drinking water contaminant' },
  { label: 'Oxamyl', value: 'Can cause headaches, muscle twitching, and convulsions; toxic to birds, fish, and bees' },
  { label: 'Propoxur', value: 'Linked to abnormal neurodevelopment from prenatal exposure; toxic to birds and honeybees' },
]

export function HealthImpact() {
  return (
    <section id="impact" className="py-24 px-6 md:px-12 lg:px-16 bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Health & Environmental Impact
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-normal text-[var(--text)] mb-16 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Human and environmental consequences
        </motion.h2>

        <motion.div
          className="rounded-2xl bg-white border border-[#E8524A33] p-6 md:p-8 mb-16"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3" style={{ color: '#E8524A' }}>
            Core Mechanism
          </p>
          <p className="chem-formula text-2xl md:text-3xl font-medium text-[var(--text)] mb-3">
            AChE + Carbaryl <span className="text-[#E8524A]">⇌</span> AChE-Carbaryl (inhibited)
          </p>
          <p className="text-[var(--text-muted)] leading-relaxed">
            Reversible carbamylation of the serine residue at AChE's active site. Acetylcholine accumulates
            at nerve synapses, causing continuous nerve firing, paralysis, convulsions, and organ failure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-medium text-[var(--text)] mb-6">Human Health</h3>
            <div className="flex flex-col gap-4">
              {humanSymptoms.map((item) => (
                <motion.div
                  key={item.severity}
                  className="rounded-xl bg-white border p-4 flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-md self-start whitespace-nowrap"
                    style={{
                      background:
                        item.severity === 'Severe'
                          ? '#E8524A20'
                          : item.severity === 'Moderate'
                            ? '#D4820A20'
                            : '#4A6FD420',
                      color:
                        item.severity === 'Severe'
                          ? '#E8524A'
                          : item.severity === 'Moderate'
                            ? '#D4820A'
                            : '#4A6FD4',
                    }}
                  >
                    {item.severity}
                  </span>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.symptoms}</p>
                </motion.div>
              ))}
              <p className="text-xs text-[var(--text-muted)] italic mt-2">
                If exposed, seek medical attention immediately. Do not induce vomiting without medical advice.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-[var(--text)] mb-6">Environmental Impact</h3>
            <div className="flex flex-col gap-3">
              {environmentalItems.map((item) => (
                <motion.div
                  key={item.title}
                  className="rounded-xl bg-white border p-4 flex gap-4 items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-medium text-[var(--text)] mb-1">{item.title}</p>
                    <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-medium text-[var(--text)] mb-6">Carbamate Compounds of Concern</h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
        >
          {compoundConcerns.map((card) => (
            <motion.div
              key={card.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <ChemCard label={card.label} value={card.value} accent="#E8524A" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
