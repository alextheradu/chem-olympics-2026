import type { PathwayReaction } from './reactions'
import { reactionApplication, reactionHydrolysis, reactionAChE } from './reactions'

export interface PathwayStage {
  id: number
  index: string
  label: string
  shortLabel: string
  imageUrl: string
  chemistry: string
  equation?: string
  equationLabel?: string
  reaction?: PathwayReaction
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
      'Carbaryl (C₁₂H₁₁NO₂) is an insecticide in the N-methyl carbamate class. It is derived from carbamic acid and is sprayed on crops to control insects.',
    equation: 'NH₂COOH  +  C₁₀H₇OH  ⟶  C₁₂H₁₁NO₂  +  H₂O',
    equationLabel: 'Esterification: carbamic acid + 1-naphthol → carbaryl + water',
    reaction: reactionApplication,
    example: 'Spraying pesticides on fields can start the pathway from field soil to nearby water.',
    citationIds: [7],
  },
  {
    id: 2,
    index: '02',
    label: 'Soil Binding',
    shortLabel: 'Soil',
    imageUrl:
      'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600',
    chemistry:
      'After application, some carbaryl stays on plants while some reaches soil. Water, soil type, and pH affect whether it stays bound to soil or moves with runoff water.',
    equation: 'C₁₂H₁₁NO₂  +  H₂O  ─[OH⁻]→  C₁₀H₇OH  +  CH₃NHCOOH',
    equationLabel: 'Hydrolysis dominant at pH > 7',
    reaction: reactionHydrolysis,
    example: 'Loose or low-organic soils can allow faster movement into drainage paths.',
    citationIds: [3],
  },
  {
    id: 3,
    index: '03',
    label: 'Runoff',
    shortLabel: 'Runoff',
    imageUrl:
      'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1600',
    chemistry:
      'Rainfall and irrigation can transport dissolved carbaryl and sediment-bound carbaryl into ditches, streams, and rivers. This is the major link between farm application and aquatic exposure.',
    example: 'Nearby water areas can receive pesticide runoff after storms or heavy irrigation.',
    citationIds: [1, 7],
  },
  {
    id: 4,
    index: '04',
    label: 'Aquatic Uptake',
    shortLabel: 'Uptake',
    imageUrl:
      'https://images.pexels.com/photos/1131407/pexels-photo-1131407.jpeg?auto=compress&cs=tinysrgb&w=1600',
    chemistry:
      'When carbaryl contacts aquatic organisms, it inhibits acetylcholinesterase at synaptic junctions. Acetylcholine builds up because it is not broken down normally, so nerve pulses continue firing.',
    equation: 'AChE–OH  +  Carbaryl  ⟶  AChE–O–C(=O)–NHCH₃  +  1-Naphthol',
    equationLabel: 'Carbamylation of AChE active site — blocks acetylcholine breakdown',
    reaction: reactionAChE,
    example: 'The buildup of acetylcholine can cause uncontrolled movement, paralysis, convulsions, and possible death.',
    citationIds: [1, 7],
  },
  {
    id: 5,
    index: '05',
    label: 'Food Chain',
    shortLabel: 'Predators',
    imageUrl:
      'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1600',
    chemistry:
      'When the bottom of the food chain is affected by pesticides, the impact can move upward. Small aquatic organisms, insects, fish, and predators are connected through feeding relationships.',
    example:
      'If invertebrates or small fish are weakened, larger fish and birds can be affected through food-chain changes.',
    citationIds: [1],
  },
]
