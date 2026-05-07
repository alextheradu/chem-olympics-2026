export interface Organism {
  id: 'aquatic' | 'pollinator' | 'plant'
  index: string
  label: string
  subtitle: string
  intro: string
  mechanism: string
  equation: string
  equationLabel: string
  keyFact: string
  imageUrl: string
  imageCredit: string
  citationIds: number[]
}

export const organisms: Organism[] = [
  {
    id: 'aquatic',
    index: '01',
    label: 'Aquatic Life',
    subtitle: 'Fish & invertebrates',
    intro:
      'Field-applied carbamates leave the soil in runoff after rainfall and irrigation, reaching ditches, streams, and rivers. Acute toxicity to fish and Daphnia begins at low parts-per-billion concentrations.',
    mechanism:
      'Carbaryl crosses the gill epithelium and reaches the synapse, where it carbamylates the serine hydroxyl in the active site of acetylcholinesterase (AChE). With AChE blocked, acetylcholine accumulates and nerves fire continuously — paralysis, convulsions, organ failure follow.',
    equation: 'AChE—OH + Carbaryl  →  AChE—O—C(=O)—NH—CH₃  +  1-naphthol',
    equationLabel: 'Reversible carbamylation of the AChE active site',
    keyFact: 'LC₅₀ rainbow trout: 1.3 mg L⁻¹ (96 h)',
    imageUrl:
      'https://images.pexels.com/photos/3046582/pexels-photo-3046582.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageCredit: 'Pexels — freshwater stream',
    citationIds: [1, 6],
  },
  {
    id: 'pollinator',
    index: '02',
    label: 'Pollinators',
    subtitle: 'Bees & beneficial insects',
    intro:
      'Carbaryl is among the most acutely bee-toxic insecticides in routine use. Spray drift onto flowering crops, contact with treated foliage, or contaminated nectar all deliver lethal doses.',
    mechanism:
      'The same AChE inhibition acts on the insect nervous system. Bees lose flight coordination, fail to return to the hive, and die. Sub-lethal doses impair foraging memory and brood care, eroding colony health over weeks.',
    equation: 'CH₃—NH—C(=O)—O—C₁₀H₇  +  AChE—OH  →  CH₃—NH—C(=O)—O—AChE  +  C₁₀H₇—OH',
    equationLabel: 'Carbamylation at the AChE serine residue',
    keyFact: 'LD₅₀ honeybee (contact): 1.0 µg / bee — class "highly toxic"',
    imageUrl:
      'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageCredit: 'Pexels — honeybee on flower',
    citationIds: [2, 3],
  },
  {
    id: 'plant',
    index: '03',
    label: 'Plants & Soil',
    subtitle: 'Crops, vegetation, microbiota',
    intro:
      'Carbamates do not target plants directly, but residues persist in soil and on harvested produce. At pH > 7 carbaryl hydrolyses to 1-naphthol, which suppresses soil microbes and disturbs nitrogen cycling in the root zone.',
    mechanism:
      'In alkaline or moist soils carbaryl undergoes ester hydrolysis. The 1-naphthol product is more water-soluble and biologically active against soil bacteria and fungi that fix nitrogen and decompose organic matter.',
    equation: 'C₁₂H₁₁NO₂  +  H₂O  →[OH⁻]  C₁₀H₇—OH  +  CH₃—NH—COOH',
    equationLabel: 'Alkaline hydrolysis of carbaryl in soil (pH > 7)',
    keyFact: 'Soil half-life: 7–14 d aerobic, up to 28 d anaerobic',
    imageUrl:
      'https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageCredit: 'Pexels — cultivated field',
    citationIds: [3, 6],
  },
]
