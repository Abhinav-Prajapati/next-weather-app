import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
    try {
        const apiKey = process.env.OPEN_WEATHER_API_KEY
        const lat = 40
        const lon = -3
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
        const response = await axios.get(url)

        console.log(response.data)
        return NextResponse.json(response.data)
        // console.log(url)

    } catch (error) {
        console.log("error fetching data")
        return new Response("error fetching data", { status: 500 })
    }
}