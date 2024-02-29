"use client"
import React from 'react'
import CompassArrow from "../../../public/compass_arrow.svg"
import CompassBody from "../../../public/compass_body.svg"
import Image from 'next/image'
import { useGlobalContext } from '@/app/context/globalContext'
import { wind } from '@/app/utils/Icons'
import { Skeleton } from '@/components/ui/skeleton'

// TODO: fix arrow rotation (image tag)
// todo: fix postion of wind (speed p tag)

const Wind = () => {
  const { forecast } = useGlobalContext();

  const windSpeed = forecast?.wind?.speed;
  const windDirection = forecast?.wind?.deg;

  if (!windSpeed || !windDirection) return (<Skeleton />)



  return (
    <div className='pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex 
    flex-col gap-3 dark:bg-dark-grey shadow-sm dark:shadow-none'>
      <span className='flex items-center gap-2'>{wind}Wind</span>
      <div className=" relative flex items-center justify-center">
        <Image src={CompassBody} alt='Wind compass' />
        <Image
          className=' transform translate-x-10 dark:invert absolute top-0 left-[50%] transition-all duration-500 ease-in-out '
          src={CompassArrow} alt='Wind compass arrow'
          style={{
            transform: `rotate(${windDirection}deg)`,
            height: "100%",
          }}
          width={11}
          height={11}
        />
        <p className='absolute  text-xs '>{Math.round(windSpeed)} m/s</p>
      </div>
    </div>
  )
}

export default Wind