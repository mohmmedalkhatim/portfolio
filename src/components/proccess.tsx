import { Textarea } from "@headlessui/react"


export const Process = () => {
  return (
    <section className='process'>
      <div className="item1 flex pl-8">
        <div className="anime">
          <h2 className="ml-4 text-3xl leading-loose mb-4">Define project goals, target audience, and scope.</h2>
          <div className="flex flex-col gap-8">
            <div className="inline-flex gap-2">
              <div className="flex">
                <div className="rounded mt-3 border-[0.16rem] w-0 inlin"></div>
              </div>
              <p className="pr-4 w-[40rem] text-md p-4">
              The Planning & Design phase is where the foundation of the web project is established.
                This step involves defining the project's goals, understanding the target audience,
                and determining the scope to ensure the project stays focused and aligned with the
                client's needs. Once the objectives are clear, wireframes are created to visualize
                the structure and flow of the website. This is followed by designing the user interface,
                ensuring that the site is both aesthetically pleasing and user-friendly, setting the stage
                for a successful development process.
              </p>
            </div>
            <Textarea cols={4} className={"border p-3 rounded-md text-[#e5e7eb] border-[#e1e1e140] placeholder:text-[#e5e7eb] placeholder:opacity-50 focus:outline-none placeholder:text-sm  bg-[#22272e] "} placeholder="writh your goals...">

            </Textarea>
          </div>
        </div>
        <img src="/icons/frist.svg" width={600} alt="" className="anime p-12" />
      </div>
      <div className="item1 flex pl-8">
        <div className="anime">
          <h2 className="ml-4 text-3xl leading-loose mb-4">Define project goals, target audience, and scope.</h2>
          <div className="flex flex-col gap-8">
            <div className="inline-flex gap-2">
              <div className="flex">
                <div className="rounded mt-3 border-[0.16rem] w-0 inlin"></div>
              </div>
              <p className="pr-4 w-[40rem] text-md p-4">

              </p>
            </div>
            <Textarea cols={4} className={"border p-3 rounded-md text-[#e5e7eb] border-[#e1e1e140] placeholder:text-[#e5e7eb] placeholder:opacity-50 focus:outline-none placeholder:text-sm  bg-[#22272e] "} placeholder="writh your goals...">

            </Textarea>
          </div>
        </div>
        <img src="/icons/second.svg" width={600} alt="" className="anime p-12" />
      </div>
    </section>
  )
}
