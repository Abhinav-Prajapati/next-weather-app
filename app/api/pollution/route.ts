import { NextRequest, NextResponse } from "next/server"
import axios from "axios"

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPEN_WEATHER_API_KEY
    const lat = 13.0827 // Make this dynamic later
    const lon = 80.2707
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
    console.log(url)
    const response = await axios.get(url)
    return NextResponse.json(response.data)
  } catch (error: any) {
    console.log("Error fetching air pullution data :", error.message)
    return new Response("Error fetching air pullution data :", { status: 500 })
  }
}