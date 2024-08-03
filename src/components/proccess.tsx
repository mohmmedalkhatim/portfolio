import React from 'react'
import { TbArrowDown, TbArrowRight, TbColorPicker, TbCube, TbDatabase, TbLamp, TbLamp2, TbRepeat, TbTestPipe, TbUpload } from 'react-icons/tb'

export const Process = () => {
  return (
    <section className='process'>
      <div className="item">
      <div className='flex items-center gap-5'>
          <TbColorPicker size={"1.7rem"} />
          <div className='text-xl'>
            desgin
          </div>
        </div>
      </div>
      <div className="arrow"><TbArrowRight size={"1.7rem"} /></div>
      <div className="item">
      <div className='flex items-center gap-5'>
          <TbCube size={"1.7rem"} />
          <div className='text-xl'>
            build
          </div>
        </div>
      </div>
      <div className="arrow"><TbArrowRight size={"1.7rem"} /></div>
      <div className="item">
      <div className='flex items-center gap-5'>
          <TbTestPipe />
          <div>
            Test
          </div>
        </div>
      </div>
      <div className="arrow"><TbArrowRight size={"1.7rem"} /></div>
      <div className="item">
      <div className='flex items-center gap-5'>
          <TbRepeat />
          <div>
            Repeat
          </div>
        </div>
      </div>
      <div className="arrow"><TbArrowRight size={"1.7rem"} /></div>
      <div className="item">
      <div className='flex items-center gap-5'>
          <TbUpload />
          <div>
            deploy
          </div>
        </div>
      </div>
      <div className="arrow">
        <TbArrowDown />
      </div>
    </section>
  )
}
