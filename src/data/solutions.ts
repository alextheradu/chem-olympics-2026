export interface Approach {
  title: string
  actor: string
  body: string
}

export const approaches: Approach[] = [
  {
    title: 'Regulatory restriction',
    actor: 'EPA and national regulators',
    body:
      'Government agencies can restrict or cancel high-risk carbamate uses. This helps lower exposure from compounds such as carbofuran and aldicarb, but enforcement is still needed.',
  },
  {
    title: 'Integrated Pest Management',
    actor: 'Farmers, researchers, and extension groups',
    body:
      'Integrated Pest Management uses scouting, crop rotation, beneficial insects, and targeted spraying. It reduces unnecessary pesticide use instead of relying on broad spraying every time.',
  },
  {
    title: 'Bioremediation',
    actor: 'Academic researchers',
    body:
      'Researchers study bacteria and enzymes that can break down carbamate residues in contaminated soil. This can help treat pollution after exposure has already happened.',
  },
  {
    title: 'Buffer strips & runoff controls',
    actor: 'Watershed groups and conservation programs',
    body:
      'Vegetated buffer strips, cover crops, and conservation tillage reduce the amount of pesticide residue that leaves fields in runoff water.',
  },
]

export const bestPractice = {
  title: 'Best practice - IPM with regulatory limits',
  reasoning:
    'The best option is to combine Integrated Pest Management with strong restrictions on the most dangerous carbamates. IPM lowers how often pesticides are used. Regulation can remove or limit compounds that create the highest risk. Buffer strips and bioremediation help with residue that still escapes the field.',
}

export const shortcomings: { title: string; body: string }[] = [
  {
    title: 'Cost shifts to growers',
    body: 'IPM takes more labor, monitoring, and planning. Smaller farms may still feel pressure to spray because it is cheaper and faster.',
  },
  {
    title: 'Enforcement gaps',
    body: 'Restricted carbamates can still be used illegally, and some compounds are used to poison wildlife.',
  },
  {
    title: 'Replacement chemistry',
    body: 'Banning one pesticide can shift use to another pesticide class, which may create new environmental problems.',
  },
]
