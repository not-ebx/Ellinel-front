import React from 'react'
import style from '../../components/library/mobs/Mobinfo.module.scss';

const MobIndex = () => {
  return (
    <div className={style.mobInfoWindow}>
      <div className={style.mobStats}>
        <div className='grid grid-cols-4 gap-x-2 divide-x'>
          <div className='col-span-2'>
            <div className='text-xl font-semibold text-black'>
              Mob Name
            </div>
            <div className='text-black'>
            <div className='flex'>
                <p className='mr-auto'>Level:</p>
                <p className='ml-auto'>10</p>
              </div>
              <div className='flex'>
                <p className='mr-auto'>HP:</p>
                <p className='ml-auto'>99}</p>
              </div>
              <div className='flex'>
                <p className='mr-auto'>MP:</p>
                <p className='ml-auto'>99</p>
              </div>
              <div className='flex'>
                <p className='mr-auto'>EXP:</p>
                <p className='ml-auto'>10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobIndex;
