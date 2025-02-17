import { useGSAP } from "@gsap/react"
import gsap from "gsap"

let Project = ({ image, url }: { image: string, url: string | undefined }) => {
  return (
    <li className="project">
      <a href={url}>
        <img src={`/imgs/${image}`} className="w-full" width={400} alt="" />
      </a>
    </li>
  )
}

function Projects() {
  let projects = [{ image: "coral.png" }, { image: "ecommer.png" }, { image: "jadoo.png" }, { image: "landing.png", url: "https://landing-40.web.app/" }, { image: "noteapp.png" }, { image: "artchitectural1.png" }]
  useGSAP(() => {
    gsap.from(".project", {
      opacity: 0,
      stagger: 0.2
    })
  }, [])

  return (
    <main >
      <ul className="Projects_container ">
        {projects.map((item) => (<Project image={item.image} url={item.url} />))}
      </ul>
    </main>
  )
}
export default Projects