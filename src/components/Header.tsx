import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { FaGithub } from "react-icons/fa"
import { TbBurger, TbMenu } from "react-icons/tb"
import { Link } from "react-router-dom"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { useState } from "react"

const Header = () => {
  const [open, setopen] = useState(false)
  useGSAP(()=>{
    gsap.from(".Name",{x:-20,opacity:0,})
    gsap.from(".link",{x:-20,opacity:0,stagger:0.21})
  },[])
  return (
    <header className="w-full flex items-center fixed top-0 z-50 justify-between h-24 px-0 md:px-[5rem]">
        <div className="Name ml-12">Mohamed Alkhatm</div>
        <nav className="sm:flex items-center hidden  justify-between gap-8 w-[20rem]">
            <Link to="/" className="link">Home</Link>
            <Link to="/projects" className="link">Projects</Link>
            <Link to="/Contact" className="link">Contacts</Link>
            <a href="https://github.com/mohmmedalkhatm" className="link"><FaGithub size={"2rem"}/></a>
        </nav>
        <nav className="pr-10 md:hidden Name">
          
          <Menu>
            <MenuButton onClick={()=>open?setopen(false):setopen(true)}>
              <TbMenu size={"2rem"} />
            </MenuButton>
            <MenuItems className="flex flex-col p-12 gap-4" >
              <MenuItem>
              <Link to="/" className="font-light text-lg">Home</Link>
              </MenuItem>
              <MenuItem>
              <Link to="/projects" className="font-light text-lg">Projects</Link>
              </MenuItem>
              <MenuItem>
              <Link to="/Contact" className="font-light text-lg">Contacts</Link>
              </MenuItem>
            </MenuItems>
          </Menu>
        </nav>
    </header>
  )
}
export default Header