import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { TbBrandFacebook, TbBrandGithub, TbBrandLeetcode, TbBrandLinkedin, TbBrandWhatsapp, TbBrandX } from 'react-icons/tb'


function Contact() {
  let links = [
    { name: 'fasbook', icon: <TbBrandFacebook size={"1.8rem"} />, link: "" },
    { name: 'git hub', icon: <TbBrandGithub size={"1.8rem"} />, link: "https://github.com/mohmmedalkhatim" },
    { name: 'leet code', icon: <TbBrandLeetcode size={"1.8rem"} />, link: "/" },
    { name: 'Linkin', icon: <TbBrandLinkedin size={"1.8rem"} />, link: "https://www.linkedin.com/in/mohmmed-alkhatm-3b5b49303/" },
    { name: 'x', icon: <TbBrandX size={"1.8rem"} />, link: "/" },
  ];
  useGSAP(()=>{
    gsap.from(".anime",{x:-16, opacity:0,stagger:0.2})
  },[])
  return (
    <main className="h-screen  pt-[8rem] pl-[4rem] md:pl-[9rem]">
      <div className='text-xl flex  gap-4'>
        {links.map((item, i) => (
          <a href={item.link} key={i} className='flex anime'>
            <div className='p-[4px]'>
              {item.icon}
            </div>
          </a>
        ))}
      </div>
      <div className='text-xl p-3 pt-6 anime'>
        evolutioncalculation@gmail.com
      </div>
      <div className='text-xl items-center gap-4 flex p-3 pt-6 anime'>
        <TbBrandWhatsapp size={"1.8rem"}/>
        <div>+249117318639</div>
      </div>
    </main>
  )
}
export default Contact