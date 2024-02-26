"use client"
import React, { useContext, createContext, useEffect, use } from "react"
import { useState } from "react";
import axios from "axios";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({})
  const [airQuality, setAirQuality] = useState({})

  // Fetch air quality data from the apiroutes
  const fetchAirQuality = async () => {
    try {
      const response = await axios.get('api/pollution') // TODO: change name pullution ot air quality
      console.log(response.data)
      setAirQuality(response.data)
    } catch (error) {
      console.log("Error fetching air quality data from apiroutes: ", error.message)
    }
  }

  // Fetch forecast data from the apiroutes
  const fetchForecast = async () => {
    try {
      const response = await axios.get('api/weather')
      // console.log(response.data)
      setForecast(response.data)
    } catch (error) {
      console.log("Error fetching forecast data: ", error.message)
    }
  }

  useEffect(() => {
    fetchForecast();
    fetchAirQuality();
  }, [])

  return (
    <GlobalContext.Provider value={{ forecast, airQuality }}>
      <GlobalContextUpdate.Provider>
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);