import {
  TbApi,
  TbAppWindow,
  TbBrandWindows,
  TbMoneybag,
  TbServer,
  TbUserDollar,
} from 'react-icons/tb';
import Service from './service';

let list = [
  {
    title: 'frontend ui',
    description: 'building a highly interactive ui',
    icon: <TbAppWindow size={'2rem'} />,
  },
  {
    title: 'server side code',
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
    icon: <TbServer size={'2rem'} />,
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

function Services () {
  return (
    <section className='h-auto content pt-0'>
      <section className='services_container'>
        {list.map((item, i) => (
          <div key={i} className='flex items-center md:justify-center'>
            <Service  {...item} />
          </div>
        ))}
      </section>
    </section>
  );
}
export default Services;
