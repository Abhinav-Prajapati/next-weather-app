import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const lat = 13.0827;
    const lon = 80.2707;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }
    });

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error: any) {
    console.log("Error fetching five day forecast data :", error.message);
    return new Response("Error fetching five day forecast data :", { status: 500 });
  }
}