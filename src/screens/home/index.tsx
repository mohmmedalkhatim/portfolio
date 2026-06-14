import About from "../../components/sections/about"
import Hero from "../../components/sections/hero"
import Skills from "../../components/sections/skills"


function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
    </div>
  )
}
export default Home