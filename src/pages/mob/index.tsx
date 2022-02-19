import React from 'react'
import style from '../../components/library/mobs/Mobinfo.module.scss';

const MobIndex = () => {
  return (
    <div className={style.mobInfoWindow}>
      <div className={style.mobData}>
        <img src={`https://maplestory.io/api/GMS/83/mob/5130103/icon`} ></img>
        <div className={style.mobStats}>
          <div className={style.mobName}>
            Mob Name
          </div>
          <div className='flex'>
            <p className='mr-auto'>Level:</p>
            <p className='ml-auto'>10</p>
          </div>
          <div className='flex'>
            <p className='mr-auto'>HP:</p>
            <p className='ml-auto'>99</p>
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
  )
}

export default MobIndex;
