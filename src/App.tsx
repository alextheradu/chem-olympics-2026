import { ScrollProgress } from './components/layout/ScrollProgress'
import { ChemicalOverview } from './components/sections/ChemicalOverview'
import { Citations } from './components/sections/Citations'
import { ContaminationPathway } from './components/sections/ContaminationPathway'
import { HealthImpact } from './components/sections/HealthImpact'
import { Hero } from './components/sections/Hero'
import { OrganismsPanel } from './components/sections/OrganismsPanel'
import { Solutions } from './components/sections/Solutions'
import { useLenis } from './hooks/useLenis'

export default function App() {
  useLenis()

  return (
    <>
      <ScrollProgress />
      <main>
        <Hero />
        <ChemicalOverview />
        <OrganismsPanel />
        <ContaminationPathway />
        <HealthImpact />
        <Solutions />
        <Citations />
      </main>
    </>
  )
}
