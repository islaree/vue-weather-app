import { WeatherResponse } from "../types/weather";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = "http://api.openweathermap.org/data/2.5/weather";

export async function getWeather(
  lat: number,
  lon: number
): Promise<WeatherResponse> {
  const res = await fetch(baseUrl + `?lat=${lat}&lon=${lon}&appid=${apiKey}`);

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const data: WeatherResponse = await res.json();
  return data;
}
