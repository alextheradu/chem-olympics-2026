import type { Atom, Bond } from '../components/ui/MoleculeDisplay'

export const carbamicAcid = {
  name: 'Carbamic Acid',
  formula: 'NH₂COOH',
  description:
    'The parent compound of all carbamate pesticides. A simple amide of carbonic acid, unstable on its own but the structural backbone for an entire pesticide class.',
  atoms: [
    { id: 'n', element: 'N', x: 80, y: 140 },
    { id: 'h1', element: 'H', x: 50, y: 110 },
    { id: 'h2', element: 'H', x: 50, y: 170 },
    { id: 'c', element: 'C', x: 150, y: 140 },
    { id: 'o1', element: 'O', x: 150, y: 90 },
    { id: 'o2', element: 'O', x: 220, y: 140 },
    { id: 'h3', element: 'H', x: 270, y: 110 },
  ] satisfies Atom[],
  bonds: [
    { from: 'n', to: 'h1' },
    { from: 'n', to: 'h2' },
    { from: 'n', to: 'c' },
    { from: 'c', to: 'o1', double: true },
    { from: 'c', to: 'o2' },
    { from: 'o2', to: 'h3' },
  ] satisfies Bond[],
} as const

export const carbamateClass = {
  title: 'N-methyl Carbamates',
  generalFormula: 'R—O—C(=O)—NH—CH₃',
  about:
    'Carbamate pesticides are esters derived from carbamic acid. The N-methyl carbamate sub-class is a potent acetylcholinesterase inhibitor used worldwide as insecticides. Their mechanism mirrors organophosphates, but the carbamylation of the AChE active site is reversible — making symptoms acute but recovery possible.',
  derivation: 'Carbamate = ester of carbamic acid (NH₂COOH).',
  origin:
    'First commercialized in the 1950s as a safer alternative to organophosphate and organochlorine pesticides. Today the class includes carbaryl, aldicarb, carbofuran, methomyl, oxamyl, and propoxur.',
}

// Carbaryl (C12H11NO2) — naphthyl methylcarbamate. Hero example.
export const carbaryl = {
  name: 'Carbaryl',
  formula: 'C₁₂H₁₁NO₂',
  iupac: '1-naphthyl methylcarbamate',
  atoms: [
    { id: 'c1', element: 'C', x: 60, y: 120 },
    { id: 'c2', element: 'C', x: 90, y: 100 },
    { id: 'c3', element: 'C', x: 120, y: 120 },
    { id: 'c4', element: 'C', x: 120, y: 160 },
    { id: 'c5', element: 'C', x: 90, y: 180 },
    { id: 'c6', element: 'C', x: 60, y: 160 },
    { id: 'c7', element: 'C', x: 150, y: 100 },
    { id: 'c8', element: 'C', x: 180, y: 120 },
    { id: 'c9', element: 'C', x: 180, y: 160 },
    { id: 'c10', element: 'C', x: 150, y: 180 },
    { id: 'o1', element: 'O', x: 210, y: 100 },
    { id: 'cc', element: 'C', x: 245, y: 120 },
    { id: 'o2', element: 'O', x: 245, y: 80 },
    { id: 'n1', element: 'N', x: 280, y: 140 },
    { id: 'cm', element: 'C', x: 315, y: 120, label: 'CH₃' },
  ] satisfies Atom[],
  bonds: [
    { from: 'c1', to: 'c2' },
    { from: 'c2', to: 'c3', double: true },
    { from: 'c3', to: 'c4' },
    { from: 'c4', to: 'c5', double: true },
    { from: 'c5', to: 'c6' },
    { from: 'c6', to: 'c1', double: true },
    { from: 'c3', to: 'c7' },
    { from: 'c7', to: 'c8', double: true },
    { from: 'c8', to: 'c9' },
    { from: 'c9', to: 'c10', double: true },
    { from: 'c10', to: 'c4' },
    { from: 'c8', to: 'o1' },
    { from: 'o1', to: 'cc' },
    { from: 'cc', to: 'o2', double: true },
    { from: 'cc', to: 'n1' },
    { from: 'n1', to: 'cm' },
  ] satisfies Bond[],
}
