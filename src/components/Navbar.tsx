import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { MdFacebook } from 'react-icons/md'
const Navbar = () => {
  useGSAP(()=>{
   const tl = gsap.timeline({
    defaults:{
      opacity:0,
      y:-30
    }
   });
   tl.from(".logo",{})
   tl.from(".ln",{height:0,y:0,opacity:1,direction:0.2})
   tl.from(".animation",{ stagger:0.3})
  },[])
  return (
    <nav className="w-[7rem] h-screen  flex-col logo md:flex hidden fixed items-center pt-16">
      <img src="/icons/favicon.svg " className="" width={30} alt="" />
      <div className="h-[28rem] border-2 rounded-full ln  bg-white  border-dashed my-8"/>
      <div className="m-4 animation">      
        <MdFacebook size={"1.7rem"} />
      </div>
      <div className="m-4 animation">      
        <FaLinkedin size={"1.7rem"} />
      </div>
    </nav>
  )
}
export default Navbar