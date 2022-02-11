import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { getCamelCase } from '../../services/Utils'
import MobService from '../../services/MobService';
import MapService from "../../services/MapService";
import { Mob } from '../../models/Mob';
import { MSMap } from '../../models/Map';
import { useRouter } from 'next/router';

const TestPage : NextPage = () => {
  const router = useRouter();
  const { mobId } = router.query;
  const [mob, setMob] = useState({} as Mob);
  const [maps, setMaps] = useState([] as MSMap[]);
  const [loading, setLoading] = useState({
    loadingMob: true,
    loadingMaps: true
  });

  useEffect(() => {
    setLoading({
      ...loading,
      loadingMob: true
    });
    if(!router.isReady) return;

    MobService.getMobData(mobId as string)
    .then((res) => {
      const newMob : Mob = {
        id: res.data.id,
        name: res.data.name,
        foundAt: res.data.foundAt,
        basicData:{
          hp: res.data.meta.maxHP,
          exp: res.data.meta.exp,
          level: res.data.meta.level,
          mp: res.data.meta.maxHP
        },
        stats:{
          accuracy: res.data.meta.accuracy,
          evasion: res.data.meta.evasion,
          magicDamage: res.data.meta.magicDamage,
          magicDefense: res.data.meta.magicDefense,
          physicalDamage: res.data.meta.physicalDamage,
          physicalDefense: res.data.meta.physicalDefense,
          speed: res.data.meta.speed
        }
      }
      setMob(newMob);
      setLoading({
        ...loading,
        loadingMob: false
      })
      return MapService.getMapDataFromArray(newMob.foundAt);
    })
    .then((results) => {
      let newMaps : MSMap[] = [];
      setLoading({
        ...loading,
        loadingMaps: true
      })
      results.forEach((res) => {
        newMaps = [
          ...newMaps,
          res.data
        ]
        setMaps(newMaps);
      });

      // Load all the maps
      console.log("MAPS: " + maps.length);
      setLoading({
        ...loading,
        loadingMaps: false
      });
    })
    .catch(err => console.log(err))
    .finally(() => {
      setLoading({
        loadingMaps: false,
        loadingMob: false
      })
    })
  }, [router.isReady]);
  return loading.loadingMob ? (<div>Loading...</div>) : (
    <div
      className='rounded-md shadow-lg items-center mx-auto p-6 space-x-4 max-w-2xl'
    >
      <div className='md:grid md:grid-cols-3 space-y-10 md:space-y-0'>
        <img className='mx-auto my-auto sm:mx-0 sm:shrink-0' src={`https://maplestory.io/api/GMS/83/mob/${mob.id}/icon`} ></img>
        {/* Mob Data */}
        <div className='col-span-2'>
          <div className='grid grid-cols-4 gap-x-2 divide-x'>
            <div className='col-span-2'>
              <div className='text-xl font-semibold text-black'>
                {mob.name}
              </div>
              <div className='text-black'>
              <div className='flex'>
                  <p className='mr-auto'>Level:</p>
                  <p className='ml-auto'>{mob.basicData.level}</p>
                </div>
                <div className='flex'>
                  <p className='mr-auto'>HP:</p>
                  <p className='ml-auto'>{mob.basicData.hp}</p>
                </div>
                <div className='flex'>
                  <p className='mr-auto'>MP:</p>
                  <p className='ml-auto'>{mob.basicData.mp}</p>
                </div>
                <div className='flex'>
                  <p className='mr-auto'>EXP:</p>
                  <p className='ml-auto'>{mob.basicData.exp}</p>
                </div>
              </div>
            </div>
            {/* Mob Stats */}
            <div className='col-span-2'>
              <div className='text-xl font-semibold text-black'>
                Stats
              </div>
              <div className='text-black'>
                {
                  Object.entries(mob.stats).map((entry : [string, any], index: number) => {
                    return (                
                      <div key={index} className='flex'>
                        <p className='mr-auto'>{getCamelCase(entry[0])}:</p>
                        <p className='ml-auto'>{String(entry[1])}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Locations */}
      <div className='mt-5'>
        <div className='bg-gray-400 text-white text-xl font-semibold'>
          Mob Locations
        </div>
        <div>
          { 
          loading.loadingMaps ? <div>Loading...</div> :
            maps.map((map: MSMap) => {
              console.log(map);
              return(
                <p key={map.id}>{`${map.streetName}: ${map.name}`}</p>
              )
            })
          }
        </div>
      </div>
      {/* Drops */}
      <div className='mt-5'>
        <div className='bg-gray-400 text-white text-xl font-semibold'>
          Mob Drops
        </div>
        <div>
          ITEM1, ITEM2
        </div>
      </div>
    </div>
  )
}



export default TestPage;