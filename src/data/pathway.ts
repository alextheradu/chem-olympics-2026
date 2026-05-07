export interface PathwayStage {
  id: number
  index: string
  label: string
  shortLabel: string
  imageUrl: string
  chemistry: string
  equation?: string
  equationLabel?: string
  example: string
  citationIds: number[]
}

export const pathway: PathwayStage[] = [
  {
    id: 1,
    index: '01',
    label: 'Application',
    shortLabel: 'Spray',
    imageUrl:
      'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1600',
    chemistry:
      'Carbaryl (C₁₂H₁₁NO₂) is sprayed on crops at 1–2 kg ha⁻¹ as a wettable powder or liquid emulsion. As an N-methyl carbamate it is the ester of carbamic acid and 1-naphthol — a configuration that makes it broadly insecticidal yet hydrolytically labile.',
    equation: 'NH₂COOH  +  C₁₀H₇—OH  ⇌  C₁₂H₁₁NO₂  +  H₂O',
    equationLabel: 'Esterification — formal synthesis from parent acid',
    example: 'Corn, apples, ornamentals — applied during the growing season, often pre-harvest.',
    citationIds: [4, 6],
  },
  {
    id: 2,
    index: '02',
    label: 'Soil Binding',
    shortLabel: 'Soil',
    imageUrl:
      'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600',
    chemistry:
      'Carbaryl reaching the soil partitions between organic matter (sorbed) and the soil-water phase. Sorption strength rises with organic-carbon content (Kₒc ≈ 200–300). In alkaline soils, hydrolysis to 1-naphthol begins immediately.',
    equation: 'C₁₂H₁₁NO₂  +  H₂O  →[OH⁻]  C₁₀H₇—OH  +  CH₃—NH—COOH',
    equationLabel: 'Hydrolysis dominant at pH > 7',
    example: 'Sandy, low-organic soils → faster leaching. Clay & peat soils → tighter binding, slower release.',
    citationIds: [6],
  },
  {
    id: 3,
    index: '03',
    label: 'Runoff',
    shortLabel: 'Runoff',
    imageUrl:
      'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1600',
    chemistry:
      'Rainfall and irrigation transport dissolved carbaryl and sediment-bound carbaryl into ditches, streams, and rivers. Detected concentrations in monitored urban streams routinely exceed chronic aquatic-life benchmarks.',
    example: 'Carbaryl is detected in more than half of sampled urban streams in some U.S. monitoring programs.',
    citationIds: [3, 6],
  },
  {
    id: 4,
    index: '04',
    label: 'Aquatic Uptake',
    shortLabel: 'Uptake',
    imageUrl:
      'https://images.pexels.com/photos/1131407/pexels-photo-1131407.jpeg?auto=compress&cs=tinysrgb&w=1600',
    chemistry:
      'Carbaryl is absorbed across gill membranes and skin. At the cholinergic synapse it carbamylates the serine —OH of acetylcholinesterase, blocking acetylcholine breakdown. Nerve impulses fire continuously; paralysis follows.',
    equation: 'AChE—OH  +  Carbaryl  →  AChE—O—C(=O)—NH—CH₃  (carbamyl-AChE)',
    equationLabel: 'Active-site carbamylation — reversible',
    example: 'Rainbow trout LC₅₀ ≈ 1.3 mg L⁻¹ (96 h). Daphnia magna respond at far lower concentrations.',
    citationIds: [1],
  },
  {
    id: 5,
    index: '05',
    label: 'Food Chain',
    shortLabel: 'Predators',
    imageUrl:
      'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1600',
    chemistry:
      'Carbaryl has a low bioconcentration factor, so it does not biomagnify like organochlorines — but sub-lethal effects propagate. Slow, disoriented insects and small fish are easier prey, so predators sample disproportionately exposed organisms.',
    example:
      'Birds and mammals near sprayed watersheds accumulate exposure indirectly. Carbofuran has been used illegally to bait raptors.',
    citationIds: [4, 6],
  },
]
