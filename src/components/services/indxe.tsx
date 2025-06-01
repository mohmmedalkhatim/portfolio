import { TbApi, TbAppWindow, TbAssembly, TbBrandRust, TbBrandWindows, TbChevronsDown, TbDesk, TbMoneybag, TbServer, TbUserDollar } from 'react-icons/tb';
import Service from './service';

let list = [
  {
    title: 'frontend ui',
    description: 'building a highly interactive ui',
    icon: <TbAppWindow size={'2rem'} />,
  },
  {
    title: 'Application programming interface',
    description: 'building highly performed api',
    icon: <TbApi size={'2rem'} />,
  },
  {
    title: 'Desktop app',
    description: 'building desktop apps',
    icon: <TbBrandWindows size={'2rem'} />,
  },
  {
    title: 'configuring the server ',
    description: ' configuring the deployment and the database integration',
    icon:<TbServer size={'2rem'}/>
  },
  {
    title: 'administrator',
    description: 'observing the system performance and security',
    icon: <TbUserDollar size={'2rem'} />,
  },
  {
    title: 'marketing',
    description: 'working on the seo and building a marketing strategies',
    icon: <TbMoneybag size={'2rem'} />,
  },
];

function Services() {
  return (
    <section className="h-auto content">
      <div className='px-8 flex anime items-center gap-12 lg:px-24 py-4'>
        <h4 className=''>Services</h4>
        <TbChevronsDown size={"3rem"} className='pt-4'/>
      </div>
      <section className="services_container">
        {list.map((item, i) => (
          <Service key={i} {...item} />
        ))}
      </section>
    </section>
  );
}
export default Services;
