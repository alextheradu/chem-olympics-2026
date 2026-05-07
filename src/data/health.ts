export interface ImpactItem {
  label: string
  body: string
  metric?: string
}

export const humanImpact = {
  intro:
    'Carbamate poisoning is acute, often reversible, but always serious. Onset can occur within minutes of skin contact, inhalation, or ingestion. Severe cases require atropine and supportive care.',
  acute: [
    { label: 'Neuro', body: 'Dizziness, headache, blurred vision, tremors, muscle twitching.' },
    { label: 'GI', body: 'Nausea, vomiting, abdominal cramps, diarrhoea, sweating.' },
    { label: 'Skin', body: 'Mild rash on contact; chemical irritation at exposure site.' },
    { label: 'Severe', body: 'Convulsions, paralysis, respiratory failure, possible death without treatment.' },
  ] satisfies ImpactItem[],
  chronic: [
    { label: 'Weight', body: 'Long-term exposure: loss of appetite, weight loss, persistent weakness.' },
    { label: 'Mood', body: 'Reports of depression, anxiety, irritability after repeated low-dose exposure.' },
    { label: 'Development', body: 'Prenatal / infant exposure to propoxur linked to abnormal neurodevelopment.' },
    { label: 'Cancer', body: 'High-exposure cohorts show associations with stomach, esophageal, tongue cancers.' },
  ] satisfies ImpactItem[],
  firstAid:
    'If ingestion is suspected — call poison control / emergency services immediately. Do not induce vomiting unless directed.',
  citationIds: [3, 5, 6],
}

export const environmentImpact = {
  intro:
    'Carbamate residues do not just stay in the field. They reshape food webs in receiving waters, suppress pollination services in flowering crops, and alter soil microbial communities through hydrolysis products.',
  bullets: [
    { metric: '> 50%', label: 'Urban streams sampled', body: 'detected carbaryl above method-quantitation limits in monitoring studies.' },
    { metric: '1.0 µg', label: 'Honeybee LD₅₀', body: 'per bee — a single drift droplet can be lethal during bloom.' },
    { metric: '7–28 d', label: 'Soil half-life', body: 'depending on aerobic conditions, pH, and organic carbon.' },
    { metric: '1.3 mg L⁻¹', label: 'Trout LC₅₀ (96 h)', body: 'sub-lethal effects on Daphnia magna at much lower thresholds.' },
  ] satisfies ImpactItem[],
  citationIds: [1, 2, 6],
}
