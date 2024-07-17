import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Hero = () => {
  useGSAP(() => {
    gsap.timeline()
    .from(".Alro", { opacity: 0, x: -20 })
    .from(".second", { x: -20, opacity: 0 })
    .to(".and", { x: 20, y: -20 })
  }, [])
  return (
    <section className="Hero_container lg:p-[8rem]  pr-[12rem]">
      <div className=" flex flex-col gap-4 pt-12">
        <div className="text-[3rem] main-title font-semibold Alro"><div className="inline">Hi there I'm Software</div> <div className="text-[#3f99f4] inline">Developer</div></div>
        <div className="text-lg w-[24rem] second">
          <div className="line"></div>
          two years of expriace in the feild i make small buisness grow fast
          <div className="textLink">
            Contact me
            <img src="/icons/sign.svg" className="inline m-2" width={10} alt="" />
          </div>
        </div>

      </div>
      <div className="relative h-[17rem] flex z-[10] items-center justify-center">
        <div className="w-[15rem] z-20 bg-[url(/imgs/self.jpg)] bg-center bg-cover h-[15rem] and"></div>
        <div className=" w-[15rem] z-10 h-[15rem] bg-[#247ee8] absolute "></div>
      </div>
    </section>
  )
}
export default Hero