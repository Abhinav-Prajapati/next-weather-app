"use client"
import { useGlobalContext } from '@/app/context/globalContext'
import { thermo } from '@/app/utils/Icons'
import { Skeleton } from "@/components/ui/skeleton"
import { Progress } from "@/components/ui/progress"

import React from 'react'
import { airQulaityIndexText } from '@/app/utils/misc'

const AirPollution = () => {
  const { airQuality } = useGlobalContext();
  // const { main, components } = airPollution;

  //Check if airPollution is available
  if (
    !airQuality ||
    !airQuality.list ||
    !airQuality.list[0] ||
    !airQuality.list[0].main
  ) return (
    <>
      <Skeleton className=' h-[12rem] w-full col-span-2 md:col-span-full' />
    </>
  )

  const airQualityIndex = airQuality.list[0].main.aqi;

  const airQualityIndexRating = airQulaityIndexText.find((item) => {
    return item.rating === airQualityIndex * 10
  })
  // console.log(airQualityIndex)

  return (
    <div className='air-pollution pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-8
       dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2'>
      <h1 className=' flex items-center gap-2 font-medium'>
        {thermo} Air Pollution
      </h1>
      <Progress value={airQualityIndex * 10} max={100} />
      <p>Air quality is {airQualityIndexRating?.description} </p>
    </div>
  )
}

export default AirPollution