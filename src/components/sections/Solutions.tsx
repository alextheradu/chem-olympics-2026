import { motion } from 'framer-motion'

const approaches = [
  {
    group: 'U.S. Environmental Protection Agency',
    flag: '🇺🇸',
    title: 'Regulatory Restriction',
    description:
      'The EPA has conducted re-registration reviews of carbamate pesticides, restricting high-risk uses. Carbofuran was banned for food-use applications in 2009. Carbaryl faces maximum application rate restrictions and buffer zone requirements near water bodies.',
    bestPractice: false,
    source: 'EPA Reregistration Program',
  },
  {
    group: 'Integrated Pest Management Researchers',
    flag: '🔬',
    title: 'Integrated Pest Management',
    description:
      'IPM combines biological controls, habitat manipulation, resistant crop varieties, and careful pesticide use. It reduces total carbamate application while maintaining crop yields and lowering aquatic runoff compared to conventional spray programs.',
    bestPractice: true,
    source: 'University Extension Programs & USDA',
  },
  {
    group: 'Biochemistry & Environmental Scientists',
    flag: '🧬',
    title: 'Microbial Biodegradation',
    description:
      'Researchers have identified bacterial strains such as Arthrobacter and Pseudomonas that express carbamate-hydrolyzing enzymes, breaking down carbaryl to less toxic metabolites. Field-scale application is still emerging.',
    bestPractice: false,
    source: 'Environmental Microbiology Research',
  },
]

const challenges = [
  'Illegal use of carbofuran and other banned carbamates persists globally, particularly for poaching and predator control.',
  'Enforcement gaps in developing countries allow unrestricted sale of high-toxicity carbamates withdrawn in Western markets.',
  'Carbamate hydrolysis products such as 1-naphthol can be as toxic as parent compounds and are not always monitored.',
  'Groundwater contamination from leaching is slow to remediate and can persist for years.',
  'Sublethal pollinator effects accumulate across seasons, making causation difficult to establish definitively.',
]

export function Solutions() {
  return (
    <section id="solutions" className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Solutions
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-normal text-[var(--text)] mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Approaches to the problem
        </motion.h2>

        <motion.p
          className="text-[var(--text-muted)] mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Different groups have pursued distinct strategies for reducing carbamate pesticide harm. Each offers
          trade-offs between feasibility, cost, and effectiveness.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              className={`glass-card-light rounded-2xl p-6 relative ${approach.bestPractice ? 'ring-2 ring-[#4A6FD4]' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {approach.bestPractice && (
                <div className="absolute -top-3 left-6 bg-[#4A6FD4] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Best Practice
                </div>
              )}
              <div className="text-3xl mb-3">{approach.flag}</div>
              <p className="section-label mb-1">{approach.group}</p>
              <h3 className="text-xl font-medium text-[var(--text)] mb-3">{approach.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{approach.description}</p>
              <p className="text-xs text-[var(--text-muted)] italic">Source: {approach.source}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="rounded-2xl bg-[#F0F4FF] border border-[#4A6FD433] p-6 md:p-8 mb-12"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Why IPM is the Best Practice</p>
          <p className="text-[var(--text)] leading-relaxed">
            Integrated Pest Management addresses the root problem: overreliance on broad-spectrum insecticides.
            It is evidence-based, scalable from individual farms to regional programs, and reduces pesticide
            pressure across multiple pathways at once. Unlike pure regulation or experimental biodegradation,
            IPM can produce measurable outcomes within a growing season.
          </p>
        </motion.div>

        <h3 className="text-2xl font-medium text-[var(--text)] mb-6">Challenges & Shortcomings</h3>
        <div className="flex flex-col gap-3">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge}
              className="flex gap-4 items-start rounded-xl bg-[#FFF8F0] border border-[#D4820A22] p-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="text-[#D4820A] font-bold text-lg mt-0.5">!</span>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{challenge}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
