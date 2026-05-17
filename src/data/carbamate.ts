import type { Atom, Bond } from '../components/ui/MoleculeDisplay'

export const carbamicAcid = {
  name: 'Carbamic Acid',
  formula: 'NH₂COOH',
  description:
    'Carbamic acid is NH₂COOH. Carbamate pesticides are derived from this parent compound and keep the carbamate functional group in their structure.',
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
  generalFormula: 'R-O-C(=O)-NH-CH₃',
  about:
    'Carbamate pesticides are esters derived from carbamic acid. N-methyl carbamates are used as insecticides because they inhibit acetylcholinesterase in the nervous system.',
  derivation: 'Carbamate = ester of carbamic acid (NH₂COOH).',
  origin:
    'Examples in this site include carbaryl, aldicarb, carbofuran, methomyl, oxamyl, and propoxur.',
}

// carbamateAtoms marks the shared –O–C(=O)–N– functional group for highlighting.
export const carbamateAtomIds = ['o1', 'cc', 'o2', 'n1'] as const

// Carbaryl (C12H11NO2), naphthyl methylcarbamate.
export const carbaryl = {
  name: 'Carbaryl',
  formula: 'C₁₂H₁₁NO₂',
  iupac: '1-naphthyl methylcarbamate',
  carbamateAtoms: ['o1', 'cc', 'o2', 'n1'],
  viewBox: '0 0 360 220',
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

// Aldicarb (C7H14N2O2S): oxime carbamate — CH₃S-C(Me)₂-CH=N-O-C(=O)-NH-CH₃
export const aldicarb = {
  name: 'Aldicarb',
  formula: 'C₇H₁₄N₂O₂S',
  iupac: '(E)-2-methyl-2-(methylthio)propanal O-(methylcarbamoyl)oxime',
  carbamateAtoms: ['o1', 'cc', 'oc', 'n2'],
  viewBox: '0 0 340 200',
  atoms: [
    { id: 'cme', element: 'C', x: 22, y: 100, label: 'CH₃' },
    { id: 's',   element: 'S', x: 62, y: 100 },
    { id: 'cq',  element: 'C', x: 100, y: 100 },
    { id: 'me1', element: 'C', x: 100, y: 65, label: 'Me' },
    { id: 'me2', element: 'C', x: 100, y: 135, label: 'Me' },
    { id: 'ch',  element: 'C', x: 138, y: 100 },
    { id: 'n1',  element: 'N', x: 172, y: 100 },
    { id: 'o1',  element: 'O', x: 207, y: 100 },
    { id: 'cc',  element: 'C', x: 242, y: 100 },
    { id: 'oc',  element: 'O', x: 242, y: 65 },
    { id: 'n2',  element: 'N', x: 277, y: 100 },
    { id: 'cm',  element: 'C', x: 312, y: 100, label: 'CH₃' },
  ] satisfies Atom[],
  bonds: [
    { from: 'cme', to: 's' },
    { from: 's',   to: 'cq' },
    { from: 'cq',  to: 'me1' },
    { from: 'cq',  to: 'me2' },
    { from: 'cq',  to: 'ch' },
    { from: 'ch',  to: 'n1', double: true },
    { from: 'n1',  to: 'o1' },
    { from: 'o1',  to: 'cc' },
    { from: 'cc',  to: 'oc', double: true },
    { from: 'cc',  to: 'n2' },
    { from: 'n2',  to: 'cm' },
  ] satisfies Bond[],
}

// Carbofuran (C12H15NO3): benzofuranyl methylcarbamate
export const carbofuran = {
  name: 'Carbofuran',
  formula: 'C₁₂H₁₅NO₃',
  iupac: '2,3-dihydro-2,2-dimethylbenzofuran-7-yl methylcarbamate',
  carbamateAtoms: ['o1', 'cc', 'oc', 'n1'],
  viewBox: '0 0 310 200',
  atoms: [
    // Furan ring (dihydro part)
    { id: 'of',  element: 'O', x: 65, y: 110 },
    { id: 'cd',  element: 'C', x: 65, y: 148 },
    { id: 'me1', element: 'C', x: 35, y: 130, label: 'Me' },
    { id: 'me2', element: 'C', x: 32, y: 163, label: 'Me' },
    // Benzene ring (aromatic)
    { id: 'r1',  element: 'C', x: 102, y: 90 },   // fused top — bears carbamate
    { id: 'r2',  element: 'C', x: 138, y: 78 },
    { id: 'r3',  element: 'C', x: 165, y: 100 },
    { id: 'r4',  element: 'C', x: 155, y: 135 },
    { id: 'r5',  element: 'C', x: 118, y: 147 },
    { id: 'r6',  element: 'C', x: 92,  y: 125 }, // fused bottom
    // Carbamate at r1
    { id: 'o1',  element: 'O', x: 118, y: 55 },
    { id: 'cc',  element: 'C', x: 145, y: 40 },
    { id: 'oc',  element: 'O', x: 145, y: 16 },
    { id: 'n1',  element: 'N', x: 178, y: 50 },
    { id: 'cm',  element: 'C', x: 205, y: 35, label: 'CH₃' },
  ] satisfies Atom[],
  bonds: [
    { from: 'r1', to: 'of' },
    { from: 'of', to: 'cd' },
    { from: 'cd', to: 'r6' },
    { from: 'cd', to: 'me1' },
    { from: 'cd', to: 'me2' },
    { from: 'r1', to: 'r2', double: true },
    { from: 'r2', to: 'r3' },
    { from: 'r3', to: 'r4', double: true },
    { from: 'r4', to: 'r5' },
    { from: 'r5', to: 'r6', double: true },
    { from: 'r6', to: 'r1' },
    { from: 'r2', to: 'o1' },
    { from: 'o1', to: 'cc' },
    { from: 'cc', to: 'oc', double: true },
    { from: 'cc', to: 'n1' },
    { from: 'n1', to: 'cm' },
  ] satisfies Bond[],
}

// Methomyl (C5H10N2O2S): oxime carbamate — CH₃-C(=N-O-C(=O)-NHCH₃)-SCH₃
export const methomyl = {
  name: 'Methomyl',
  formula: 'C₅H₁₀N₂O₂S',
  iupac: 'S-methyl N-(methylcarbamoyloxy)thioacetimidate',
  carbamateAtoms: ['o1', 'cc', 'oc', 'n2'],
  viewBox: '0 0 295 170',
  atoms: [
    { id: 'cm1', element: 'C', x: 28, y: 85, label: 'CH₃' },
    { id: 'c1',  element: 'C', x: 68, y: 85 },
    { id: 'n',   element: 'N', x: 103, y: 62 },
    { id: 's',   element: 'S', x: 68, y: 128 },
    { id: 'cms', element: 'C', x: 28, y: 128, label: 'CH₃' },
    { id: 'o1',  element: 'O', x: 140, y: 52 },
    { id: 'cc',  element: 'C', x: 177, y: 52 },
    { id: 'oc',  element: 'O', x: 177, y: 22 },
    { id: 'n2',  element: 'N', x: 213, y: 67 },
    { id: 'cm2', element: 'C', x: 250, y: 52, label: 'CH₃' },
  ] satisfies Atom[],
  bonds: [
    { from: 'cm1', to: 'c1' },
    { from: 'c1',  to: 'n', double: true },
    { from: 'c1',  to: 's' },
    { from: 's',   to: 'cms' },
    { from: 'n',   to: 'o1' },
    { from: 'o1',  to: 'cc' },
    { from: 'cc',  to: 'oc', double: true },
    { from: 'cc',  to: 'n2' },
    { from: 'n2',  to: 'cm2' },
  ] satisfies Bond[],
}

// Oxamyl (C7H13N3O3S): (CH₃)₂N-C(=O)-C(=N-O-C(=O)-NHCH₃)-SCH₃
export const oxamyl = {
  name: 'Oxamyl',
  formula: 'C₇H₁₃N₃O₃S',
  iupac: 'N,N-dimethyl-2-(methylthio)-2-oxoethanimidamide O-(methylcarbamoyl)oxime',
  carbamateAtoms: ['o1', 'cc', 'oc', 'n2'],
  viewBox: '0 0 330 185',
  atoms: [
    { id: 'ndm', element: 'N', x: 28, y: 98 },
    { id: 'ma',  element: 'C', x: 10, y: 72, label: 'Me' },
    { id: 'mb',  element: 'C', x: 10, y: 124, label: 'Me' },
    { id: 'cco', element: 'C', x: 65, y: 98 },
    { id: 'oco', element: 'O', x: 65, y: 68 },
    { id: 'c1',  element: 'C', x: 103, y: 98 },
    { id: 'n1',  element: 'N', x: 138, y: 74 },
    { id: 's',   element: 'S', x: 103, y: 135 },
    { id: 'cms', element: 'C', x: 65, y: 152, label: 'CH₃' },
    { id: 'o1',  element: 'O', x: 175, y: 64 },
    { id: 'cc',  element: 'C', x: 211, y: 64 },
    { id: 'oc',  element: 'O', x: 211, y: 34 },
    { id: 'n2',  element: 'N', x: 247, y: 79 },
    { id: 'cm2', element: 'C', x: 283, y: 64, label: 'CH₃' },
  ] satisfies Atom[],
  bonds: [
    { from: 'ndm', to: 'ma' },
    { from: 'ndm', to: 'mb' },
    { from: 'ndm', to: 'cco' },
    { from: 'cco', to: 'oco', double: true },
    { from: 'cco', to: 'c1' },
    { from: 'c1',  to: 'n1', double: true },
    { from: 'c1',  to: 's' },
    { from: 's',   to: 'cms' },
    { from: 'n1',  to: 'o1' },
    { from: 'o1',  to: 'cc' },
    { from: 'cc',  to: 'oc', double: true },
    { from: 'cc',  to: 'n2' },
    { from: 'n2',  to: 'cm2' },
  ] satisfies Bond[],
}

// Propoxur (C11H15NO3): 2-isopropoxyphenyl methylcarbamate
export const propoxur = {
  name: 'Propoxur',
  formula: 'C₁₁H₁₅NO₃',
  iupac: '2-isopropoxyphenyl methylcarbamate',
  carbamateAtoms: ['o1', 'cc', 'oc', 'n1'],
  viewBox: '0 0 315 200',
  atoms: [
    // Benzene ring
    { id: 'r1', element: 'C', x: 150, y: 95 },  // bears carbamate
    { id: 'r2', element: 'C', x: 178, y: 80 },  // bears isopropoxy
    { id: 'r3', element: 'C', x: 200, y: 100 },
    { id: 'r4', element: 'C', x: 192, y: 130 },
    { id: 'r5', element: 'C', x: 163, y: 145 },
    { id: 'r6', element: 'C', x: 140, y: 126 },
    // Carbamate at r1 (going left)
    { id: 'o1', element: 'O', x: 118, y: 72 },
    { id: 'cc', element: 'C', x: 92,  y: 64 },
    { id: 'oc', element: 'O', x: 92,  y: 38 },
    { id: 'n1', element: 'N', x: 65,  y: 78 },
    { id: 'cm', element: 'C', x: 38,  y: 65, label: 'CH₃' },
    // Isopropoxy at r2 (going right-up)
    { id: 'oip', element: 'O', x: 205, y: 58 },
    { id: 'cip', element: 'C', x: 228, y: 45 },
    { id: 'mi1', element: 'C', x: 250, y: 28, label: 'Me' },
    { id: 'mi2', element: 'C', x: 250, y: 62, label: 'Me' },
  ] satisfies Atom[],
  bonds: [
    { from: 'r1', to: 'r2', double: true },
    { from: 'r2', to: 'r3' },
    { from: 'r3', to: 'r4', double: true },
    { from: 'r4', to: 'r5' },
    { from: 'r5', to: 'r6', double: true },
    { from: 'r6', to: 'r1' },
    { from: 'r1', to: 'o1' },
    { from: 'o1', to: 'cc' },
    { from: 'cc', to: 'oc', double: true },
    { from: 'cc', to: 'n1' },
    { from: 'n1', to: 'cm' },
    { from: 'r2', to: 'oip' },
    { from: 'oip', to: 'cip' },
    { from: 'cip', to: 'mi1' },
    { from: 'cip', to: 'mi2' },
  ] satisfies Bond[],
}
