import React, { Dispatch } from 'react';
import { TbX } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const routes = [
  { name: 'main', route: '/' },
  { name: 'projects', route: '/projects' },
  { name: 'contacts', route: '/contacts' },
];

function Dialog ({
  state,
  setState,
}: {
  state: boolean;
  setState: Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className='fixed top-0 right-8 z-50 bg-slate-800 w-full h-screen transition-[right] duration-300'
      style={{ right: state ? '0' : '-100%' }}
    >
      <div className='pt-20 flex flex-col'>
        {routes.map(item => (
          <Link className='py-4 px-4 hover:bg-gray-500' to={item.route}>{item.name}</Link>
        ))}
      </div>
      <div className='absolute top-8 right-8 ' onClick={() => setState(!state)}>
        <TbX size={'2rem'} />
      </div>
    </div>
  );
}
export default Dialog;
