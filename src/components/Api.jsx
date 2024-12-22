import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_APP_WEATHER_API_URL;
console.log(API_KEY)
console.log(BASE_URL)
const getWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    throw new Error("Data cuaca tidak dapat diambil.");
  }
};

export const getWeatherDataByCoordinates = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data by coordinates:", error.message);
    throw new Error("Data cuaca berdasarkan koordinat tidak dapat diambil.");
  }
};

export default getWeatherData;
