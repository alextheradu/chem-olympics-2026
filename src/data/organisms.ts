export interface Organism {
  id: 'aquatic' | 'insect' | 'plant'
  label: string
  subtitle: string
  colorVar: string
  colorHex: string
  icon: string
  intro: string
  mechanism: string
  equation: string
  equationLabel: string
  keyFact: string
  citationId: number
}

export const organisms: Organism[] = [
  {
    id: 'aquatic',
    label: 'Aquatic Life',
    subtitle: 'Fish & Invertebrates',
    colorVar: '--aquatic',
    colorHex: '#4A6FD4',
    icon: '🐟',
    intro:
      'Carbaryl enters waterways through agricultural runoff, where it poses acute toxicity to fish and aquatic invertebrates at very low concentrations.',
    mechanism:
      'Carbaryl inhibits acetylcholinesterase (AChE), the enzyme responsible for breaking down acetylcholine at nerve synapses. When AChE is blocked, acetylcholine accumulates, causing continuous nerve firing.',
    equation: 'AChE + Carbaryl -> AChE-Carbaryl (inhibited complex)',
    equationLabel: 'AChE Inhibition (reversible carbamylation)',
    keyFact: 'LC50 for rainbow trout: 1.3 mg/L (96-hour exposure)',
    citationId: 1,
  },
  {
    id: 'insect',
    label: 'Insect Pollinators',
    subtitle: 'Bees & Beneficial Insects',
    colorVar: '--insect',
    colorHex: '#D4820A',
    icon: '🐝',
    intro:
      'Carbaryl is highly toxic to honeybees and other beneficial pollinators. Contact or ingestion during crop spraying causes rapid mortality, threatening pollination services critical to agriculture.',
    mechanism:
      'The same AChE inhibition that affects fish acts on insect nervous systems. In bees, this causes uncontrolled wing muscle firing, disorientation, and inability to return to the hive. Sublethal doses impair foraging behavior and memory.',
    equation: 'CH3NHCOO-C10H7 + AChE -> CH3NHCOO-AChE + C10H7OH',
    equationLabel: 'Carbamylation of AChE active site',
    keyFact: 'LD50 (honeybee, contact): 1.0 microgram/bee - highly toxic',
    citationId: 2,
  },
  {
    id: 'plant',
    label: 'Plant Life',
    subtitle: 'Crops & Vegetation',
    colorVar: '--plant',
    colorHex: '#2EA84A',
    icon: '🌿',
    intro:
      'While carbaryl targets pest insects, it can also cause phytotoxic effects on certain crops and non-target vegetation, particularly at high application rates or during stress conditions.',
    mechanism:
      'Carbaryl is absorbed by plant tissues through leaves and roots. It can disrupt plant enzyme systems and accumulate in crop residues. Soil persistence allows carbaryl hydrolysis products such as 1-naphthol to affect root-zone microbiota.',
    equation: 'C12H11NO2 + H2O -> C10H7OH + CH3NHCOOH',
    equationLabel: 'Alkaline hydrolysis of carbaryl in soil (pH > 7)',
    keyFact: 'Soil half-life: 7-14 days aerobic; up to 28 days anaerobic',
    citationId: 3,
  },
]
