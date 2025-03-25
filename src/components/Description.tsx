import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Description = () => {

  useGSAP(() => {
    gsap.set(".anime",{x:-16,opacity:0})
    ScrollTrigger.batch(".anime", {     
      onEnter: (ele, _targer) => {
        gsap.to(ele, { x: 0, opacity: 1, stagger: 0.2 })
      },

    })
  }, [])
  return (
    <section className="md:px-[7rem]  flex flex-col relative">
      <div className="flex flex-col md:flex-row gap-11">
        <p className="text-justify anime text-lg w-full p-12 lg:w-[80%] ">
          specialized in desktop app development alongside frontend web appliction
          with react and tauri, I like focusing my effored to build an interactive ui
          with a perfect user experience, my main skills set is problem solving and ui
          development, I have the knowledge and technical skills to build an api in both
          languages rust and type-script, and I have the knowledge to use any version
          control system.
        </p>
        <img src="/icons/favicon.svg" width={120} className="anime" alt="" />
      </div>
      <div className="flex pt-12">
        <ul className="points">
          <li className="anime">
            <div className="line"></div>
            Coopeate with designers to create clean interfaces and simple, intuitive interactions and experiences,
          </li>
          <li className="anime">
            <div className="line" />
            Develop project concepts and maintain optimal workflow.
          </li>
          <li className="anime">
            <div className="line" />
            work with developers to manage large, complex design projects for cooporate clients
          </li>
          <li className="anime">
            <div className="line" />
            complete detailed programming and development tasks for frontend public and internal websites as well as back-end code
            <br />
          </li>
          <li className="anime">
            <div className="line" />
            carry out quality assurance tests to discover errors and optimize usability
          </li>
        </ul>
        <div className="flex-1 grid grid-cols-2 grid-row-3 items-center justify-center">
          <a href="" className="flex anime items-center justify-center">
            <img src="/icons/tauri.svg" width={80} alt="" />
          </a>
          <a className="flex anime items-center justify-center">
            <img src="/icons/react.svg" width={80} alt="" />
          </a>
          <a className="flex anime items-center justify-center">
            <img src="/icons/nestjs.svg" width={80} alt="" />
          </a>
          <a className="flex anime items-center justify-center">
            <img src="/icons/tailwind.svg" width={80} alt="" />

          </a>
          <a className="flex anime items-center justify-center">
            <img src="/icons/ts.svg" width={80} alt="" />
          </a>
          <a className="flex anime items-center justify-center">
            <img src="/icons/next.svg" width={80} alt="" />
          </a>
        </div>
      </div>

    </section>
  )
}
export default Description