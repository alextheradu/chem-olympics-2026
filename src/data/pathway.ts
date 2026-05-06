export interface PathwayNode {
  id: number
  label: string
  icon: string
  xPct: number
  yPct: number
  chemistry: string
  equation?: string
  example: string
  source?: string
}

export const pathwayNodes: PathwayNode[] = [
  {
    id: 1,
    label: 'Farm Application',
    icon: '🌾',
    xPct: 8,
    yPct: 30,
    chemistry:
      'Carbaryl (C12H11NO2) is applied as a spray or dust to crops at 1-2 kg/ha. It belongs to the N-methyl carbamate class, derived from carbamic acid. Its naphthyl ester structure makes it effective against a broad spectrum of insects.',
    equation: 'NH2COOH + C10H7OH -> C12H11NO2 (carbaryl) + H2O',
    example: 'Corn, apples, and ornamental crops - typical application window: growing season, pre-harvest.',
    source: 'EPA Carbaryl Reregistration',
  },
  {
    id: 2,
    label: 'Soil Absorption',
    icon: '🌱',
    xPct: 28,
    yPct: 60,
    chemistry:
      'After application, carbaryl binds to soil particles via van der Waals forces and hydrogen bonding. Binding strength depends on soil organic matter content and pH. In alkaline soils, hydrolysis accelerates, producing 1-naphthol.',
    equation: 'Carbaryl(aq) + soil organic matter -> Carbaryl-SOM complex',
    example: 'Sandy, low-organic soils show higher leaching risk than clay-rich soils.',
  },
  {
    id: 3,
    label: 'Water Runoff',
    icon: '💧',
    xPct: 50,
    yPct: 25,
    chemistry:
      'Rainfall or irrigation carries dissolved and particulate-bound carbaryl from fields into drainage ditches, streams, and rivers. Detected levels in urban streams can exceed chronic aquatic toxicity thresholds.',
    example: 'Studies detect carbaryl in more than half of sampled urban streams in some monitoring programs.',
    source: 'EPA Aquatic Life Benchmarks',
  },
  {
    id: 4,
    label: 'Aquatic Contact',
    icon: '🐟',
    xPct: 72,
    yPct: 55,
    chemistry:
      'Aquatic organisms absorb carbaryl through gill membranes and skin. At the nerve synapse, carbaryl carbamylates the serine hydroxyl group in the AChE active site, blocking acetylcholine breakdown.',
    equation: 'AChE-OH + Carbaryl -> AChE-O-CO-NHCH3 (carbamyl-AChE)',
    example: 'Rainbow trout show paralysis at high exposure; Daphnia can be affected at much lower concentrations.',
    source: 'PMC11570982',
  },
  {
    id: 5,
    label: 'Bioaccumulation',
    icon: '🦅',
    xPct: 91,
    yPct: 30,
    chemistry:
      'Although carbaryl has a relatively low bioconcentration factor, sublethal effects propagate up the food chain. Insects and small fish with impaired nervous systems become easier prey, increasing predator exposure.',
    example: 'Predators near heavily sprayed agricultural watersheds can be exposed by consuming affected prey.',
  },
]
