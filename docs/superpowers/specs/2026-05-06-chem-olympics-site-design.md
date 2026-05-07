# Chem Olympics 2026 Site — Design Spec

Date: 2026-05-06
Status: Approved (proceeding to implementation)

## Context

Pascack Hills High School entry for NJ Chemistry Olympics website-design competition.
Topic: **Carbamate pesticides → environmental impact**. Source of truth for chemistry
content is `../../../sofar.md` in the parent directory; that file will grow as the team
adds content.

Hero + Navbar already shipped in the existing design language (black + raw Pexels video bg
+ Inter + liquid-glass cards + character-staggered headings). Hero is **off-limits**.

## Locked decisions

| Decision | Choice |
|---|---|
| Content fidelity | Real chemistry from `sofar.md`, transcribed into typed TS data modules. Sync as notes grow. |
| Scroll style | Hybrid: linear + parallax everywhere; **one pinned horizontal scrollytelling** section for the contamination pathway. |
| Video backgrounds | Hero only. Rest = solid black. |
| Color | Strict monochrome (black / white / gray) outside molecules. CPK colors (C=gray, N=blue, O=red, H=white) only inside molecule diagrams. |
| Pathway interaction | Pinned horizontal scroll, 5 stages: Spray → Soil → Runoff → Aquatic uptake → Food chain. |
| Text animations | Universal — every heading + body block reveals on scroll-into-view. |
| Imagery | Photographs allowed alongside SVG molecules. |
| Architecture | Approach 1 — typed TS data modules in `src/data/*.ts`. |

## File tree

```
src/
  App.tsx                             # composes all sections; useLenis
  data/
    carbamate.ts                      # parent compound, carbamic acid, derivation
    concerns.ts                       # 6 N-methyl carbamate pesticides
    organisms.ts                      # 3 affected: aquatic life, pollinators, plants
    pathway.ts                        # 5 ordered stages w/ chemistry per stage
    health.ts                         # human + environmental impact
    solutions.ts                      # approaches, best practice, shortcomings
    citations.ts                      # numbered refs (≥3 academic) — all sofar.md URLs
  components/
    layout/
      Navbar.tsx                      # rewritten mono — PHHS Chem Olympics + chem links
      ScrollProgress.tsx              # white-on-black thin progress bar
      SectionAnchor.tsx               # id wrapper for nav links
    sections/
      Hero.tsx                        # untouched
      Source.tsx                      # carbamate parent compound + carbamic acid reveal
      Concerns.tsx                    # 6-pesticide grid w/ scroll reveal
      Pathway.tsx                     # PINNED horizontal scrollytelling (centerpiece)
      Organisms.tsx                   # 3 affected organisms, sticky panels
      HealthImpact.tsx                # human + env effects, animated counters
      Solutions.tsx                   # approaches → best practice → shortcomings
      Citations.tsx                   # numbered list, hover preview
    ui/
      MoleculeDisplay.tsx             # SVG molecule w/ CPK atoms (rebuilt)
      ChemCard.tsx                    # liquid-glass content card (rebuilt mono)
      AnimatedText.tsx                # word/char stagger reveal on scroll-into-view
      AnimatedHeading.tsx             # exists; reused for section titles
      FadeIn.tsx                      # exists
      Cite.tsx                        # inline [n] superscript → links to citations
      Figure.tsx                      # photo + caption, parallax on scroll
  hooks/
    useLenis.ts                       # exists
    useScrollTrigger.ts               # GSAP ScrollTrigger setup w/ Lenis sync
    useInView.ts                      # IntersectionObserver wrapper
```

## Scroll choreography

- **Source** — parallax: title pinned briefly, carbamic acid SVG (NH₂COOH) draws on with bond-by-bond stagger; parent-compound text fades up.
- **Concerns** — 6-card grid; each card slides in with brief y-translate stagger; molecular formula reveals letter-by-letter.
- **Pathway (pinned, horizontal)** — `ScrollTrigger.create({ pin: true, scrub: 1 })`, scroll progress translates inner track left through 5 panels. Each panel: stage title + chemistry block + equation + example. Progress dots at top track active stage.
- **Organisms** — three full-height panels stacked vertically; left side sticky illustration, right side scrolls through fish → bees → plants.
- **HealthImpact** — split symptom list (acute / chronic), counter animations on scroll-in.
- **Solutions** — three columns: approaches / best practice / shortcomings; reveal as scroll enters.
- **Citations** — numbered list, hover lifts card.

## Style tokens (rewritten `index.css`)

- Body bg: `#0a0a0a`. Text: `#ffffff`. Muted: `rgba(255,255,255,0.55)`.
- Border: `rgba(255,255,255,0.12)`.
- Liquid-glass spec from `prompt.md` retained verbatim.
- All legacy `--primary` / `--aquatic` / `--insect` / `--plant` color tokens removed.
- New util `.mono-card`: `bg-white/[0.04] border border-white/[0.1] rounded-xl backdrop-blur-md`.
- `.cpk-c`, `.cpk-n`, `.cpk-o`, `.cpk-h` — only used inside `<MoleculeDisplay>`.

## Animation primitives

- `<AnimatedText>` — split into words; stagger 30ms per word; trigger via IntersectionObserver at 30% visibility.
- Re-uses GSAP for ScrollTrigger-bound animations (Pathway, parallax), Framer Motion for in-view reveals (everything else).

## Rubric coverage

- ✅ One waste source: Carbamate pesticides
- ✅ 3 organisms / environment: aquatic life, pollinators, plants
- ✅ Chemical structure of waste + source: Source section
- ✅ Concerns of chemicals used: Concerns section (6 pesticides)
- ✅ Impact env + health: HealthImpact section
- ✅ Interactive contamination pathway graphic: Pathway section
- ✅ Solutions / best practice / shortcomings: Solutions section
- ✅ Chemical formulas + structures + reaction conditions: throughout, esp. Source/Pathway/Organisms
- ✅ Citations w/ ≥3 academic: Citations section
- ✅ Attractive, easy navigation: Navbar anchors

## Out of scope

- MDX / markdown parsing pipeline
- Three.js / WebGL scenes
- Multi-route SPA — single-page only
- CMS — content lives in TS modules synced manually from `sofar.md`

## Living document

`sofar.md` will grow. When it does, sync new facts into the matching `src/data/*.ts`
module — components are data-driven and pick up changes automatically.
