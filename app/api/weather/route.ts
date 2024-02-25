import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
    try {
        const apiKey = process.env.OPEN_WEATHER_API_KEY
        const lat = 13.0827
        const lon = 80.2707
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        console.log(url)
        const response = await axios.get(url)
        // console.log(response.data)
        return NextResponse.json(response.data)

    } catch (error) {
        console.log("error fetching data")
        return new Response("error fetching data", { status: 500 })
    }
}