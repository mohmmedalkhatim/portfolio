import fun from 'firebase/functions'
import { TbBrandFacebook, TbBrandGithub, TbBrandLeetcode, TbBrandLinkedin, TbBrandX } from 'react-icons/tb'


function Contact() {
  let links = [
    { name: 'fasbook', icon: <TbBrandFacebook size={"1.8rem"} />, link: "" },
    { name: 'git hub', icon: <TbBrandGithub size={"1.8rem"} />, link: "https://github.com/mohmmedalkhatm" },
    { name: 'leet code', icon: <TbBrandLeetcode size={"1.8rem"} />, link: "/" },
    { name: 'Linkin', icon: <TbBrandLinkedin size={"1.8rem"} />, link: "/" },
    { name: 'x', icon: <TbBrandX size={"1.8rem"} />, link: "/" },

  ]

  return (
    <div className="h-screen pt-[8rem] pl-[9rem]">
      <div className='text-xl flex  gap-4'>
        {links.map((item, i) => (
          <a href={item.link} className='flex'>
            <div className='p-[4px]'>
              {item.icon}
            </div>
          </a>
        ))}
      </div>

    </div>
  )
}
export default Contact