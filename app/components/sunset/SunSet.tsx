"use client"
import { useGlobalContext } from '@/app/context/globalContext'
import { sunset } from '@/app/utils/Icons';
import { unixToTime } from '@/app/utils/misc';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

const SunSet = () => {
  const { forecast } = useGlobalContext();
  if (!forecast || !forecast?.sys || !forecast?.sys?.sunset) return (
    <Skeleton className='h-[12rem] w-full' />
  )
  const timeZone = forecast?.timezone
  const sunSetTime = unixToTime(forecast?.sys?.sunset, timeZone)
  const sunRiseTime = unixToTime(forecast?.sys?.sunrise, timeZone)
  return (
    <div className='pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none'>
      <div className=" top">
        <h1 className='flex items-center gap-2 font-medium'>
          {sunset}Sunset
        </h1>
        <p className='pt-4 text-2xl'>{sunSetTime}</p>
      </div>
      <p>Sunrise: {sunRiseTime}</p>
    </div>
  )
}

export default SunSet