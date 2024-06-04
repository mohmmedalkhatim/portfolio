import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="w-full flex items-center fixed top-0 justify-between h-24 px-[5rem]">
        <div className="Name ml-16">Mohamed Alkhatm</div>
        <nav className="flex items-center justify-between gap-8 w-[20rem]">
            <Link to="/" className="link">Home</Link>
            <Link to="/projects" className="link">Projects</Link>
            <Link to="/" className="link">Contacts</Link>
            <Link to="/" className="link"><FaGithub size={"2rem"}/></Link>
        </nav>
    </header>
  )
}
export default Header