import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="w-full flex items-center fixed top-0 justify-between h-24 px-[5rem]">
        <div className="Name ml-16">Mohamed Alkhatm</div>
        <nav className="flex items-center justify-between gap-8 w-[20rem]">
            <Link to="/" className="link">Home</Link>
            <Link to="/projects" className="link">Projects</Link>
            <Link to="/Contacts" className="link">Contacts</Link>
            <a href="https://github.com/mohmmedalkhatm" className="link"><FaGithub size={"2rem"}/></a>
        </nav>
    </header>
  )
}
export default Header