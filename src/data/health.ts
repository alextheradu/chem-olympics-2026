export interface ImpactItem {
  label: string
  body: string
  metric?: string
}

export const humanImpact = {
  intro:
    'Carbamate exposure can affect the nervous system. Symptoms may appear after skin contact, inhalation, or ingestion, and serious exposure needs medical help right away.',
  acute: [
    { label: 'Neuro', body: 'Dizziness, headaches, weakness, shaking, tremors, and blurred vision.' },
    { label: 'GI', body: 'Nausea, vomiting, stomach cramps, diarrhea, and sweating.' },
    { label: 'Skin', body: 'Mild rash on contact; chemical irritation at exposure site.' },
    { label: 'Severe', body: 'Convulsions, paralysis, respiratory failure, possible death without treatment.' },
  ] satisfies ImpactItem[],
  chronic: [
    { label: 'Appetite', body: 'Long-term exposure can cause loss of appetite.' },
    { label: 'Weight', body: 'Long-term exposure can lead to weight loss and weakness.' },
    { label: 'Mood', body: 'Repeated exposure has been linked to depression, anxiety, or irritability for some carbamates.' },
    { label: 'Development', body: 'Propoxur exposure before birth or during infancy has been linked to abnormal neurodevelopment.' },
  ] satisfies ImpactItem[],
  firstAid:
    'If ingestion is suspected, call poison control or emergency services immediately. Do not induce vomiting unless directed.',
  citationIds: [5, 10, 11],
}

export const environmentImpact = {
  intro:
    'Carbamate residues do not always stay in the field. Runoff can move them into water, where aquatic organisms, insects, pollinators, and food webs can be affected.',
  bullets: [
    { metric: 'AChE', label: 'Nervous system enzyme', body: 'carbamates inhibit acetylcholinesterase at synaptic junctions.' },
    { metric: 'Runoff', label: 'Water pathway', body: 'rain and irrigation can move pesticide residue into nearby streams and rivers.' },
    { metric: 'Bees', label: 'Pollinators', body: 'carbaryl and several other carbamates are highly toxic to bees.' },
    { metric: 'Fish', label: 'Aquatic life', body: 'fish and aquatic invertebrates can be harmed when contaminated runoff reaches water.' },
  ] satisfies ImpactItem[],
  citationIds: [1, 2, 3, 7],
}
