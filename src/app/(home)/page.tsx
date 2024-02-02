import {HomeModule} from './components'

export default function Home() {
  return (
      <main>
        <HomeModule.Navbar />
        <HomeModule.Hero />
        <HomeModule.Marquee />
        <HomeModule.Projects />
        <HomeModule.Behance />
        <HomeModule.Skills />
        <HomeModule.Services />
        <HomeModule.EmailMe />
        <HomeModule.Footer />
      </main>
  )
}
