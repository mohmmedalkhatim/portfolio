import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { FaGithub } from "react-icons/fa"
import { TbBurger, TbMenu } from "react-icons/tb"
import { Link } from "react-router-dom"

const Header = () => {
  useGSAP(()=>{
    gsap.from(".Name",{x:-20,opacity:0,})
    gsap.from(".link",{x:-20,opacity:0,stagger:0.21})
  },[])
  return (
    <header className="w-full flex items-center fixed top-0  z-50 justify-between h-24 md:px-[5rem]">
        <div className="Name ml-16">Mohamed Alkhatm</div>
        <nav className="sm:flex items-center hidden  justify-between gap-8 w-[20rem]">
            <Link to="/" className="link">Home</Link>
            <Link to="/projects" className="link">Projects</Link>
            <Link to="/Contact" className="link">Contacts</Link>
            <a href="https://github.com/mohmmedalkhatm" className="link"><FaGithub size={"2rem"}/></a>
        </nav>
        <nav className="pr-10 md:hidden Name">
          <TbMenu size={"2rem"}/>
        </nav>
    </header>
  )
}
export default Header