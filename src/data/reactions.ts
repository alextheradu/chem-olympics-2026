import type { Atom, Bond } from '../components/ui/MoleculeDisplay'
import { carbamicAcid, carbaryl } from './carbamate'

export interface ReactionMolecule {
  atoms: Atom[]
  bonds: Bond[]
  viewBox: string
  formula: string
  name: string
  displayWidth: number
  highlightAtoms?: string[]
}

export interface PathwayReaction {
  reactants: ReactionMolecule[]
  products: ReactionMolecule[]
  condition?: string
}

// 1-naphthol (C₁₀H₇OH) — same naphthalene ring as carbaryl, but –OH instead of carbamate ester
export const naphthol: ReactionMolecule = {
  name: '1-Naphthol',
  formula: 'C₁₀H₇OH',
  viewBox: '0 0 260 210',
  displayWidth: 120,
  atoms: [
    { id: 'c1',  element: 'C', x: 60,  y: 120 },
    { id: 'c2',  element: 'C', x: 90,  y: 100 },
    { id: 'c3',  element: 'C', x: 120, y: 120 },
    { id: 'c4',  element: 'C', x: 120, y: 160 },
    { id: 'c5',  element: 'C', x: 90,  y: 180 },
    { id: 'c6',  element: 'C', x: 60,  y: 160 },
    { id: 'c7',  element: 'C', x: 150, y: 100 },
    { id: 'c8',  element: 'C', x: 180, y: 120 },
    { id: 'c9',  element: 'C', x: 180, y: 160 },
    { id: 'c10', element: 'C', x: 150, y: 180 },
    { id: 'o1',  element: 'O', x: 212, y: 100 },
    { id: 'h1',  element: 'H', x: 238, y: 86  },
  ] satisfies Atom[],
  bonds: [
    { from: 'c1',  to: 'c2' },
    { from: 'c2',  to: 'c3',  double: true },
    { from: 'c3',  to: 'c4' },
    { from: 'c4',  to: 'c5',  double: true },
    { from: 'c5',  to: 'c6' },
    { from: 'c6',  to: 'c1',  double: true },
    { from: 'c3',  to: 'c7' },
    { from: 'c7',  to: 'c8',  double: true },
    { from: 'c8',  to: 'c9' },
    { from: 'c9',  to: 'c10', double: true },
    { from: 'c10', to: 'c4' },
    { from: 'c8',  to: 'o1' },
    { from: 'o1',  to: 'h1' },
  ] satisfies Bond[],
}

// Water (H₂O) — bent geometry
export const water: ReactionMolecule = {
  name: 'Water',
  formula: 'H₂O',
  viewBox: '0 0 110 96',
  displayWidth: 68,
  atoms: [
    { id: 'o',  element: 'O', x: 55, y: 44 },
    { id: 'h1', element: 'H', x: 22, y: 70 },
    { id: 'h2', element: 'H', x: 88, y: 70 },
  ] satisfies Atom[],
  bonds: [
    { from: 'h1', to: 'o' },
    { from: 'o',  to: 'h2' },
  ] satisfies Bond[],
}

// Methylcarbamic acid (CH₃-NH-C(=O)-OH) — hydrolysis product
export const methylCarbamicAcid: ReactionMolecule = {
  name: 'Methylcarbamic acid',
  formula: 'CH₃NHCOOH',
  viewBox: '0 0 195 120',
  displayWidth: 110,
  atoms: [
    { id: 'cm', element: 'C', x: 28,  y: 82, label: 'CH₃' },
    { id: 'n',  element: 'N', x: 72,  y: 82 },
    { id: 'cc', element: 'C', x: 112, y: 82 },
    { id: 'oc', element: 'O', x: 112, y: 46 },
    { id: 'oh', element: 'O', x: 150, y: 82 },
    { id: 'h',  element: 'H', x: 175, y: 66 },
  ] satisfies Atom[],
  bonds: [
    { from: 'cm', to: 'n' },
    { from: 'n',  to: 'cc' },
    { from: 'cc', to: 'oc', double: true },
    { from: 'cc', to: 'oh' },
    { from: 'oh', to: 'h' },
  ] satisfies Bond[],
}

// AChE active-site serine (simplified: Ser–OH)
export const serineOH: ReactionMolecule = {
  name: 'AChE (Ser–OH)',
  formula: 'Ser–OH',
  viewBox: '0 0 115 100',
  displayWidth: 80,
  atoms: [
    { id: 'ser', element: 'C', x: 28, y: 72, label: 'Ser' },
    { id: 'o',   element: 'O', x: 68, y: 72 },
    { id: 'h',   element: 'H', x: 94, y: 56 },
  ] satisfies Atom[],
  bonds: [
    { from: 'ser', to: 'o' },
    { from: 'o',   to: 'h' },
  ] satisfies Bond[],
}

// Carbamylated AChE (Ser–O–C(=O)–NH–CH₃) — AChE after carbamate transfer
export const carbamylatedAChE: ReactionMolecule = {
  name: 'Carbamylated AChE',
  formula: 'Ser–O–C(=O)–NHCH₃',
  viewBox: '0 0 215 118',
  displayWidth: 130,
  highlightAtoms: ['o1', 'cc', 'oc', 'n'],
  atoms: [
    { id: 'ser', element: 'C', x: 22,  y: 82, label: 'Ser' },
    { id: 'o1',  element: 'O', x: 64,  y: 82 },
    { id: 'cc',  element: 'C', x: 102, y: 82 },
    { id: 'oc',  element: 'O', x: 102, y: 46 },
    { id: 'n',   element: 'N', x: 140, y: 82 },
    { id: 'cm',  element: 'C', x: 178, y: 82, label: 'CH₃' },
  ] satisfies Atom[],
  bonds: [
    { from: 'ser', to: 'o1' },
    { from: 'o1',  to: 'cc' },
    { from: 'cc',  to: 'oc', double: true },
    { from: 'cc',  to: 'n'  },
    { from: 'n',   to: 'cm' },
  ] satisfies Bond[],
}

// Adapt existing carbamate.ts molecules for use as ReactionMolecules
export const rmCarbamicAcid: ReactionMolecule = {
  ...carbamicAcid,
  viewBox: '0 0 320 220',
  displayWidth: 140,
}

export const rmCarbaryl: ReactionMolecule = {
  ...carbaryl,
  displayWidth: 165,
  highlightAtoms: ['o1', 'cc', 'o2', 'n1'],
}

// The three pathway reactions
export const reactionApplication: PathwayReaction = {
  reactants: [rmCarbamicAcid, naphthol],
  products:  [rmCarbaryl, water],
}

export const reactionHydrolysis: PathwayReaction = {
  reactants: [rmCarbaryl, water],
  products:  [naphthol, methylCarbamicAcid],
  condition: 'OH⁻ / pH > 7',
}

export const reactionAChE: PathwayReaction = {
  reactants: [serineOH, rmCarbaryl],
  products:  [carbamylatedAChE, naphthol],
}
