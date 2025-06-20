import React, { Dispatch } from 'react';
import { TbX } from 'react-icons/tb';

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
      <div className='absolute top-8 right-8 ' onClick={()=>setState(!state)}>
        <TbX  size={"2rem"}/>
      </div>
    </div>
  );
}
export default Dialog;
