export interface Approach {
  title: string
  actor: string
  body: string
}

export const approaches: Approach[] = [
  {
    title: 'Regulatory restriction',
    actor: 'EPA · EU Commission',
    body:
      'Carbofuran granular use was cancelled in the U.S. in 2009; aldicarb registrations have been repeatedly tightened. EU has banned several N-methyl carbamates outright, citing groundwater contamination and pollinator risk.',
  },
  {
    title: 'Integrated Pest Management',
    actor: 'FAO · land-grant extensions',
    body:
      'Threshold-based scouting, beneficial-insect releases, and crop rotation reduce reliance on broad-spectrum carbamates. Adoption is slow on commodity crops because chemical inputs remain cheaper per acre.',
  },
  {
    title: 'Bioremediation',
    actor: 'Academic researchers',
    body:
      'Soil bacteria of the Pseudomonas and Bacillus genera express carbaryl hydrolase enzymes that cleave the carbamate linkage. Field trials show measurable cleanup of contaminated soils.',
  },
  {
    title: 'Buffer strips & runoff controls',
    actor: 'NRCS · watershed groups',
    body:
      'Vegetated buffers, cover crops, and conservation tillage cut sediment-bound carbamate loads to surface waters by 60–90% in modelled and field studies.',
  },
]

export const bestPractice = {
  title: 'Best practice — IPM with regulatory backstop',
  reasoning:
    'No single control eliminates carbamate harm. The most defensible approach pairs Integrated Pest Management at the farm scale with hard regulatory limits at the registration scale. IPM cuts unnecessary applications; regulation removes the most dangerous compounds (aldicarb, carbofuran) outright. Bioremediation and buffer strips treat the residue that still escapes.',
}

export const shortcomings: { title: string; body: string }[] = [
  {
    title: 'Cost shifts to growers',
    body: 'IPM is labour-intensive. Smallholders without subsidised extension services face genuine economic pressure to spray.',
  },
  {
    title: 'Enforcement gaps',
    body: 'Restricted carbamates remain available through grey-market channels in many countries; illegal wildlife poisoning persists.',
  },
  {
    title: 'Replacement chemistry',
    body: 'Banning one carbamate often shifts use to neonicotinoids — also bee-toxic, with their own ecological costs.',
  },
]
