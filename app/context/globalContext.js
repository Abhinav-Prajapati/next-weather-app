"use client"
import React, { useContext, createContext, useEffect } from "react"
import { useState } from "react";
import axios from "axios";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({})
  const fetchForecast = async () => {
    try {
      const response = await axios.get('api/weather')
      setForecast(response.data)
    } catch (error) {
      console.log("Error fetching forecast data: ", error.message)
    }
  }
  useEffect(() => {
    fetchForecast()
  }, [])

  return (
    <GlobalContext.Provider value={{ forecast }}>
      <GlobalContextUpdate.Provider>
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);