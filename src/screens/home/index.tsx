import About from "../../components/sections/about"
import Hero from "../../components/sections/hero"
import Skills from "../../components/sections/skills"
import TechStack from "../../components/sections/techstack"


function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <TechStack/>
      <Skills />
    </div>
  )
}
export default Home