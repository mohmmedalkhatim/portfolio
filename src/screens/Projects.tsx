import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function Projects() {
  useGSAP(() => { 
    gsap.from(".project",{
      opacity:0,
      stagger:0.2
    })
  }, [])

  return (
    <main >
      <ul className="Projects_container">
        <li className="project">
          <img src="/imgs/noteapp.png" width={400} alt="" />
        </li>
        <li className="project">
          <img src="/imgs/Artchticral_carousel.png" width={400} alt="" />
        </li>
        <li className="project">

        </li>
        <li className="project">

        </li>
        <li className="project">

        </li>
        <li className="project">

        </li>
      </ul>
    </main>
  )
}
export default Projects