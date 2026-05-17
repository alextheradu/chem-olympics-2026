export interface PesticideConcern {
  name: string
  formula: string
  use: string
  risks: string[]
  citationIds: number[]
}

export const concerns: PesticideConcern[] = [
  {
    name: 'Aldicarb',
    formula: 'C₇H₁₄N₂O₂S',
    use: 'Systemic insecticide and nematicide used on crops such as cotton, citrus, and potatoes.',
    risks: [
      'Aldicarb can contaminate drinking water when it moves through soil.',
      'Human exposure may lead to brain and nervous system effects.',
      'Exposure can cause dizziness, blurred vision, tremors, vomiting, and death in extreme poisoning cases.',
    ],
    citationIds: [5],
  },
  {
    name: 'Carbofuran',
    formula: 'C₁₂H₁₅NO₃',
    use: 'Broad-spectrum insecticide and nematicide. Many uses are now restricted.',
    risks: [
      'It can contaminate water through runoff and harm aquatic life.',
      'Frequently used illegally to poison wildlife.',
      'It acts as a potent acetylcholinesterase inhibitor and can cause dizziness, nausea, convulsions, and respiratory failure.',
    ],
    citationIds: [4],
  },
  {
    name: 'Carbaryl',
    formula: 'C₁₂H₁₁NO₂',
    use: 'Foliar insecticide on crops, gardens, fruit trees.',
    risks: [
      'It is frequently detected in urban streams and is toxic to fish and aquatic invertebrates.',
      'Highly toxic to bees, which creates risk for pollinators.',
      'Studies suggest associations with stomach, esophageal, and tongue cancers in high-exposure scenarios.',
    ],
    citationIds: [3, 7],
  },
  {
    name: 'Methomyl',
    formula: 'C₅H₁₀N₂O₂S',
    use: 'Insecticide used on vegetables, ornamentals, and in fly control.',
    risks: [
      'Possible drinking water risks when residues move away from application sites.',
      'Highly toxic to birds, mammals, aquatic invertebrates.',
    ],
    citationIds: [8],
  },
  {
    name: 'Oxamyl',
    formula: 'C₇H₁₃N₃O₃S',
    use: 'Systemic insecticide and nematicide used on field crops.',
    risks: [
      'Toxic to birds, fish, aquatic organisms, and bees.',
      'Severe poisoning symptoms include headaches, muscle twitching, convulsions, and blurred vision.',
      'Repeated exposure can cause neurological issues, including depression, anxiety, or irritability.',
    ],
    citationIds: [9],
  },
  {
    name: 'Propoxur',
    formula: 'C₁₁H₁₅NO₃',
    use: 'Indoor pest control and public-health insecticide.',
    risks: [
      'Inhalation, skin absorption, or ingestion can cause headache, nausea, sweating, muscle spasms, low blood pressure, heart irregularities, and respiratory failure.',
      'Toxic to birds and honeybees.',
      'Prenatal and infant exposure have been linked to abnormal neurodevelopment, including poor motor skill development.',
    ],
    citationIds: [10],
  },
]
