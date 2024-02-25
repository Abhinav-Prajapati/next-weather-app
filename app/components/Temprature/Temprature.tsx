'use client'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '@/app/context/globalContext'
import { kelvinToCelsius } from '@/app/utils/misc'
import { drizzleIcon, rain, snow, clearSky, cloudy, navigation } from '@/app/utils/Icons'
import moment from 'moment';

const Temprature = () => {
  const { forecast } = useGlobalContext()
  // console.log(forecast)
  const { main, timezone, name, weather } = forecast

  if (!forecast || !weather) return <div>Loading... </div>

  const getIcon = () => {
    switch (weather[0].main) {
      case 'Drizzle':
        return drizzleIcon
      case 'Rain':
        return rain
      case 'Snow':
        return snow
      case 'Clear':
        return clearSky
      case 'Clouds':
        return cloudy
      default:
        return clearSky
    }
  }

  const temp = kelvinToCelsius(main?.temp);
  const minTemp = kelvinToCelsius(main?.temp_min);
  const maxTemp = kelvinToCelsius(main?.temp_max);

  const [localTime, setLocalTime] = useState<string>("")
  const [currentDay, setCurrentDay] = useState<string>("")

  const { main: weatherMain, description } = weather[0];

  useEffect(() => {
    // Update ever 1 second
    const interval = setInterval(() => {
      const localMoment = moment().utcOffset(timezone / 60)
      // custom format: 12 hour time . change hh to HH for 24 hour time
      const formatedTime = localMoment.format('hh:mm')
      //day of the week
      const day = localMoment.format('dddd')
      setLocalTime(formatedTime)
      setCurrentDay(day)
    }, 1000)
  }, [])

  // console.log(weather)

  return (
    <div className=' px-4 pt-6 pb-5 border rounded-lg flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none'>
      <p className="flex justify-between items-center ">
        <span className="font-medium">{currentDay}</span>
        <span className="font-medium">{localTime}</span>
      </p>
      <p className="pt-2 font-bold flex gap-1">
        <span className="">{name}</span>
        <span className="">{navigation}</span>
      </p>
      <p className="py-10 text-9xl font-bold self-center">{temp}°</p>
      <div className="">
        <div className="">
          <span>{getIcon()}</span>
          <p className='pt-2 capitalize text-lg font-medium'>{description}</p>
        </div>
        <p className=' flex items-center gap-2'>
          <span>Low: {minTemp}°</span>
          <span>High: {maxTemp}°</span>
        </p>
      </div>
    </div>
  )
}

export default Temprature
