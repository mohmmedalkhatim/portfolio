import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  TbBrandFacebook,
  TbBrandGithub,
  TbBrandLeetcode,
  TbAt,
  TbPhone,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from 'react-icons/tb';
import Input from '../components/Input';
import Button from '../components/button';
import { useState } from 'react';
import { db } from '../main';
import { addDoc, collection } from 'firebase/firestore';

class ContactProps {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function Contact () {
  let [formData, setFormData] = useState<ContactProps>({
    name: '',
    email: '',
    message: '',
    subject: '',
  });
  let onchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const links = [
    { name: 'facebook', icon: <TbBrandFacebook size={'1.8rem'} />, link: '' },
    {
      name: 'git hub',
      icon: <TbBrandGithub size={'1.8rem'} />,
      link: 'https://github.com/mohmmedalkhatim',
    },
    {
      name: 'leet code',
      icon: <TbBrandLeetcode size={'1.8rem'} />,
      link: '/',
    },
    {
      name: 'Linkedin',
      icon: <TbBrandLinkedin size={'1.8rem'} />,
      link: 'https://www.linkedin.com/in/mohmmed-alkhatm-3b5b49303/',
    },
  ];
  useGSAP(() => {
    gsap.from('.anime', { x: -16, opacity: 0, stagger: 0.2 });
  }, []);
  return (
    <main className='min-h-[100vh] pt-[8rem]  lg:pt-[8rem] md:pl-[10rem] pl-[4rem] lg:pl-[20rem] '>
      <div className='pt-4 flex flex-col lg:flex-row '>
        <div className='flex flex-col gap-4 bg-sky-500 p-12 rounded-lg'>
          <h5 className='mb-4 anime px-3'>Contact Information</h5>
          <div className='text-xl items-center gap-4 flex p-3 pt-6 anime'>
            <TbAt size={'1.8rem'} />
            evolutioncalculation@gmail.com
          </div>
          <div className='text-xl items-center gap-4 flex p-3 pt-6 anime'>
            <TbPhone size={'1.8rem'} />
            <div>+249117856830</div>
          </div>
          <div className='text-xl items-center gap-4 flex p-3 pt-6 anime'>
            <TbBrandWhatsapp size={'1.8rem'} />
            <div>+249117318639</div>
          </div>
          <div className='text-xl flex gap-16 pt-4'>
            {links.map((item, i) => (
              <a href={item.link} key={i} className='flex anime'>
                <div className='p-[4px]'>{item.icon}</div>
              </a>
            ))}
          </div>
        </div>
        <div className='w-[32rem] px-12 mt-[2rem] '>
          <h5 className='pb-12'>Get in touch</h5>
          <form
            onSubmit={async e => {
              e.preventDefault();
              // Handle form submission logic here
              const requests = collection(db, 'requests');
              await addDoc(requests, {
                name: formData.name?.trim(),
                email: formData.email?.trim(),
                subject: formData.subject?.trim(),
                message: formData.message?.trim(),
              })
                .then(() => {
                  alert('Data added successfully'+`${formData}`);
                  console.log();
                  })
                .catch(error => {
                  alert(formData)
                  console.error('Error adding document: ', error);
                });
            }}
            className='flex flex-col gap-6'
          >
            <div className='flex gap-4'>
              <Input label='name' onChange={onchange} />
              <Input label='email' onChange={onchange} required type='email' />
            </div>
            <div className='w-full'>
              <Input label='subject' onChange={onchange} />
            </div>
            <div className='w-full h'>
              <Input label='message' onChange={onchange} required />
            </div>
            <div className='flex items-center justify-end'>
              <Button>send massage</Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
export default Contact;
