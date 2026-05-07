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
    use: 'Systemic insecticide, nematicide on cotton, citrus, potatoes.',
    risks: [
      'Acute neurotoxicity — dizziness, blurred vision, tremors, vomiting, possibly death.',
      'Drinking-water contamination from soil leaching.',
      'Children and farm workers face elevated exposure risk.',
    ],
    citationIds: [5],
  },
  {
    name: 'Carbofuran',
    formula: 'C₁₂H₁₅NO₃',
    use: 'Broad-spectrum insecticide / nematicide; many uses now restricted.',
    risks: [
      'Potent AChE inhibitor — convulsions, respiratory failure, lethal at low doses.',
      'Frequently used illegally to poison wildlife.',
      'Aquatic-life casualties from runoff.',
    ],
    citationIds: [4],
  },
  {
    name: 'Carbaryl',
    formula: 'C₁₂H₁₁NO₂',
    use: 'Foliar insecticide on crops, gardens, fruit trees.',
    risks: [
      'Detected in over half of sampled urban streams.',
      'Highly toxic to bees and aquatic invertebrates.',
      'Associations with stomach, esophageal, tongue cancers in high-exposure cohorts.',
    ],
    citationIds: [3, 6],
  },
  {
    name: 'Methomyl',
    formula: 'C₅H₁₀N₂O₂S',
    use: 'Vegetables, ornamentals, fly control around livestock.',
    risks: [
      'Highly toxic to birds, mammals, aquatic invertebrates.',
      'Listed as a potential drinking-water risk.',
    ],
    citationIds: [6],
  },
  {
    name: 'Oxamyl',
    formula: 'C₇H₁₃N₃O₃S',
    use: 'Systemic insecticide / nematicide on field crops.',
    risks: [
      'Severe poisoning: headaches, muscle twitching, convulsions, blurred vision.',
      'Toxic to birds, fish, aquatic organisms, bees.',
      'Repeated exposure linked to depression, anxiety, irritability.',
    ],
    citationIds: [6],
  },
  {
    name: 'Propoxur',
    formula: 'C₁₁H₁₅NO₃',
    use: 'Indoor pest control, public-health insecticide.',
    risks: [
      'Prenatal / infant exposure linked to abnormal neurodevelopment.',
      'Highly toxic to birds and honeybees.',
      'Inhalation or absorption causes headache, nausea, sweating, low blood pressure, respiratory failure.',
    ],
    citationIds: [6],
  },
]
