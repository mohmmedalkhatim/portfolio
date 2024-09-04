import { Textarea } from "@headlessui/react"


export const Process = () => {
  return (
    <section className='proccess'>
      <div className="item1  md:pl-8">
        <div className="anime">
          <h2 className="ml-4 text-3xl leading-loose mb-4">Define project goals, target audience, and scope.</h2>
          <div className="flex flex-col gap-8">
            <div className="inline-flex gap-2">
              <div className="flex">
                <div className="rounded mt-3 border-[0.16rem] w-0 "></div>
              </div>
              <p className="pr-4 md:w-[40rem] text-md p-4">
                The Planning & Design phase is where the foundation of the web project is established.
                This step involves defining the project's goals, understanding the target audience,
                and determining the scope to ensure the project stays focused and aligned with the
                client's needs. Once the objectives are clear, wireframes are created to visualize
                the structure and flow of the website. This is followed by designing the user interface,
                ensuring that the site is both aesthetically pleasing and user-friendly, setting the stage
                for a successful development process.
              </p>
            </div>
            <Textarea cols={4} className={"border p-3 rounded-md text-[#e5e7eb] border-[#e1e1e140] placeholder:text-[#e5e7eb] placeholder:opacity-50 focus:outline-none placeholder:text-sm  bg-[#22272e] "} placeholder="write your goals...">

            </Textarea>
          </div>
        </div>
        <img src="/icons/frist.svg" width={600} alt="" className="anime p-12 sm:flex hidden" />
      </div>
      <div className="item1 md:pl-8 mt-24">
      <img src="/icons/third.svg" width={500} height={600}  alt="" className="anime sm:flex hidden" />
        <div className="anime">
          <h2 className="ml-4 text-3xl leading-loose mb-4">Development</h2>
          <div className="flex flex-col gap-8">
            <div className="inline-flex gap-2">
              <div className="flex">
                <div className="rounded mt-3 border-[0.16rem] w-0 inlin"></div>
              </div>
              <p className="pr-4 md:w-[40rem] text-md p-4">
                The Development step involves setting up the technical environment and bringing
                the project to life. This includes building the frontend, where the user interface
                and experience are crafted, and the backend, which handles data processing, storage,
                and business logic. Throughout this phase, APIs are developed to enable communication
                between the frontend and backend, and the database is integrated to manage and store
                information. This step is crucial for translating the project’s design and plans into
                a functional, interactive web application.
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="item1 md:pl-8 mt-24">
        <div className="anime">
          <h2 className="ml-4 text-3xl leading-loose mb-4"> Testing & Integration</h2>
          <div className="flex flex-col gap-8">
            <div className="inline-flex gap-2">
              <div className="flex">
                <div className="rounded mt-3 border-[0.16rem] w-0 inlin"></div>
              </div>
              <p className="pr-4 md:w-[40rem] text-md p-4">
                The Testing & Integration phase ensures that all components of the web project function correctly and work together seamlessly. During this stage, rigorous testing is conducted to identify and fix any bugs or performance issues, ensuring the application meets quality standards. Integration involves connecting the frontend with the backend, making sure that data flows smoothly between the user interface and the server. This step is crucial for delivering a reliable, user-friendly product that performs well in a real-world environment.
              </p>
            </div>
          </div>
        </div>
        <img src="/icons/second.svg" width={600} alt="" className="anime p-12 sm:flex hidden" />
      </div>
      <div className="item1 pl-8 my-24">
      <img src="/icons/forc.svg" width={600} alt="" className="anime sm:flex hidden " />
        <div className="anime">
          <h2 className="ml-4 text-3xl leading-loose mb-4"> Deployment & Maintenance</h2>
          <div className="flex flex-col gap-8">
            <div className="inline-flex gap-2">
              <div className="flex">
                <div className="rounded mt-3 border-[0.16rem] w-0 inlin"></div>
              </div>
              <p className="pr-4 md:w-[40rem] w-full text-md p-4">
              In the Deployment & Maintenance phase, the project is moved from the development environment to a live server, making it accessible to users. This involves configuring hosting services, setting up continuous integration and deployment (CI/CD) pipelines, and ensuring that the site functions smoothly in a production setting. After deployment, ongoing maintenance is essential to keep the site secure, up-to-date, and running efficiently. Regular monitoring, bug fixes, updates, and gathering user feedback are crucial to maintaining the site's performance and adapting to evolving user needs.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
