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
      'Pesticides sprayed on crop fields can run off into nearby water after rain or irrigation. That runoff can harm aquatic organisms, including fish and invertebrates, which are important parts of the food chain.',
    mechanism:
      'When carbaryl contacts an aquatic organism, acetylcholinesterase, or AChE, is inhibited at synaptic junctions in the nervous system. AChE normally breaks down acetylcholine. When it is inhibited, acetylcholine builds up and nerves keep firing. This can cause paralysis, convulsions, uncontrolled movement, and death.',
    equation: 'AChE-OH + Carbaryl  →  AChE-O-C(=O)-NH-CH₃  +  1-naphthol',
    equationLabel: 'AChE inhibition after carbaryl exposure',
    keyFact: 'Low food-chain organisms can pass exposure pressure higher through the food chain.',
    imageUrl:
      'https://images.pexels.com/photos/3046582/pexels-photo-3046582.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageCredit: 'Pexels - freshwater stream',
    citationIds: [1, 7],
  },
  {
    id: 'pollinator',
    index: '02',
    label: 'Pollinators',
    subtitle: 'Bees & beneficial insects',
    intro:
      'Carbaryl is highly toxic to bees, so pollinators can be affected when spray drifts onto flowering crops, treated leaves, or nectar sources.',
    mechanism:
      'The same AChE inhibition affects the insect nervous system. Bees may lose coordination, fail to return to the hive, or die. Lower exposure can still weaken foraging and colony health.',
    equation: 'CH₃-NH-C(=O)-O-C₁₀H₇  +  AChE-OH  →  CH₃-NH-C(=O)-O-AChE  +  C₁₀H₇-OH',
    equationLabel: 'Carbamylation at the AChE serine residue',
    keyFact: 'Carbaryl is listed as highly toxic to bees.',
    imageUrl:
      'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageCredit: 'Pexels - honeybee on flower',
    citationIds: [2, 3],
  },
  {
    id: 'plant',
    index: '03',
    label: 'Plants & Soil',
    subtitle: 'Crops, vegetation, microbiota',
    intro:
      'Plants and soil can be affected when pesticide residue remains after application. The main concern is not only plant damage, but also residue in soil, runoff, and effects on soil organisms.',
    mechanism:
      'In moist or alkaline soil, carbaryl can hydrolyze into 1-naphthol and a carbamic acid derivative. These products can move with water and may affect soil bacteria and fungi that help roots and nutrient cycling.',
    equation: 'C₁₂H₁₁NO₂  +  H₂O  →[OH⁻]  C₁₀H₇-OH  +  CH₃-NH-COOH',
    equationLabel: 'Alkaline hydrolysis of carbaryl in soil (pH > 7)',
    keyFact: 'Carbamate residue movement depends on water, soil type, and pH.',
    imageUrl:
      'https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageCredit: 'Pexels - cultivated field',
    citationIds: [3, 6],
  },
]
