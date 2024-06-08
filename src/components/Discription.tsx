

const Discription = () => {
  return (
    <section className="px-[7rem]  h-[40rem] flex flex-col relative">
      <div className="flex gap-11">
        <article className="text-justify text-xl w-[80%]">
          Highly skilled web developer with three years of experience crafting dynamic and user-friendly
          web applications. Possesses a comprehensive understanding of front-end technologies like HTML,
          CSS, and JavaScript alongside back-end proficiency in TypeScript and an interest in performance
          optimization using Rust. Proven ability to build font-end  and back-end applictions . Seeking a
          challenging back-end role to leverage my diverse skillset and contribute to the development of 
          innovative web solutions.
        </article>

      </div>
      <div className="flex pt-12">
        <ul className="points">
          <li>
            <div className="line"></div>
            Coopeate with designers to create clean interfaces and simple, intuitive interactions and experiences,
          </li>
          <li>
            <div className="line" />
            Develop project concepts and maintain optimal workflow.
          </li>
          <li>
            <div className="line" />
            work with senior developer to manage large, complex design projects for cooporate clients
          </li>
          <li>
            <div className="line" />
            complete detailed programming and development tasks for frontend public and internal websites as well as back-end code
            <br />
          </li>
          <li>
            <div className="line" />
            carry out quality assurance tests to discover errors and optimize usability
          </li>
        </ul>
        <div className="flex-1 grid grid-cols-2 grid-row-3 items-center justify-center">
          <div className="flex items-center justify-center">
            <img src="/icons/vite.svg" width={70} alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/icons/react.svg" width={70} alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/icons/mantine.svg" width={70} alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/icons/tailwind.svg" width={70} alt="" />

          </div>
          <div className="flex items-center justify-center">
            <img src="/icons/ts.svg" width={70} alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/icons/next.svg" width={70} alt="" />
          </div>
        </div>
      </div>

    </section>
  )
}
export default Discription