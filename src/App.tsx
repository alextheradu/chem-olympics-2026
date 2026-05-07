import { Hero } from './components/sections/Hero'
import { useLenis } from './hooks/useLenis'

export default function App() {
  useLenis()

  return (
    <main>
      <Hero />
    </main>
  )
}
