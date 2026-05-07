import { Hero } from './components/sections/Hero'
import { Source } from './components/sections/Source'
import { Concerns } from './components/sections/Concerns'
import { Pathway } from './components/sections/Pathway'
import { Organisms } from './components/sections/Organisms'
import { HealthImpact } from './components/sections/HealthImpact'
import { Solutions } from './components/sections/Solutions'
import { Citations } from './components/sections/Citations'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { useLenis } from './hooks/useLenis'

export default function App() {
  useLenis()

  return (
    <main className="bg-black text-white">
      <ScrollProgress />
      <Hero />
      <Source />
      <Concerns />
      <Pathway />
      <Organisms />
      <HealthImpact />
      <Solutions />
      <Citations />
    </main>
  )
}
