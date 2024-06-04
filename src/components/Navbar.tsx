import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { MdFacebook } from 'react-icons/md'
const Navbar = () => {
  return (
    <nav className="w-[7rem] h-screen flex-col flex fixed items-center pt-16">
      <img src="/icons/favicon.svg" width={30} alt="" />
      <div className="h-[20rem] border-2 rounded-full bg-white  border-dashed  my-8"></div>
      <div className="m-4">      
        <MdFacebook size={"1.7rem"} />
      </div>
      <div className="m-4">      
        <FaLinkedin size={"1.7rem"} />
      </div>
    </nav>
  )
}
export default Navbar