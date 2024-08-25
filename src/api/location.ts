import { Location, LocationsResponse } from "../types/location";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = "https://api.openweathermap.org/geo/1.0/direct";
const limit = 1;

export async function getLocation(query: string): Promise<Location | null> {
  const res = await fetch(
    `${baseUrl}?q=${query}&limit=${limit}&appid=${apiKey}`
  );

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const data: LocationsResponse = await res.json();
  return data.length > 0 ? data[0] : null;
}
