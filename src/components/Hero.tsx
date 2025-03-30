import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Link } from "react-router-dom"



const Hero = () => {
  useGSAP(() => {
    gsap.timeline()
      .from(".Alro", { opacity: 0, x: -20 })
      .from(".second", { x: -20, opacity: 0 })
      .to(".and", { x: 20, y: -20 })
  }, [])
  return (
    <section className="Hero_container  md:px-[8rem] py-[8rem]  md:pr-[12rem]">
      <div className=" flex flex-col gap-4 pt-12">
        <div className="max-w-[38rem] main-title font-semibold Alro">
          <h2 className="inline">Hi there I'm Software</h2>
          <h2 className="text-[#3f99f4] inline">Engineer</h2>
        </div>
        <div className="text-lg md:max-w-[24rem] max-w-[20rem] second">
          <p className="line"></p>
          three years of expriace in the feild I make small buisness grow fast
          <Link to={"/contacts"} className="textLink">
            Contact me
            <img src="/icons/sign.svg" className="inline m-2" width={10} alt="" />
          </Link>
        </div>
      </div>
      <div className="relative h-[17rem] items-start flex z-[10] md:items-center md:justify-center">
        <div className="w-[15rem] rounded-sm z-20 bg-[url(/imgs/self.png)] bg-center bg-cover h-[15rem] and"></div>
        <div className=" w-[15rem] z-10 rounded-sm h-[15rem] bg-[#247ee8] absolute "></div>
      </div>
    </section>
  )
}
export default Hero