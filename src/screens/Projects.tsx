import { useGSAP } from "@gsap/react"
import gsap from "gsap"

let Project = ({name}:{name:string})=>{
  return(
    <li className="project">
    <img src={`/imgs/${name}`} className="w-full" width={400} alt="" />
    </li>
  )
}

function Projects() {
  let projects = ["coral.png","ecommer.png","jadoo.png","landing.png","noteapp.png","artchitectural1.png"]
  useGSAP(() => {
    gsap.from(".project", {
      opacity: 0,
      stagger: 0.2
    })
  }, [])

  return (
    <main >
      <ul className="Projects_container ">
        {projects.map((item)=>(<Project name={item}/>))}
      </ul>
    </main>
  )
}
export default Projects