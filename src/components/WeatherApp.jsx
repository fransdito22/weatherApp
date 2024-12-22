import React, { useEffect, useState } from "react";
import getWeatherData, { getWeatherDataByCoordinates } from "./Api";
import Navbar from "./Navbar";
import WeatherCard from "./WeatherCard";
import ErrorAlert from "./ErrorAlert";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          try {
            const data = await getWeatherDataByCoordinates(lat, lon);
            setWeatherData(data);
          } catch {
            setError("Gagal mendapatkan data lokasi");
          }
        },
        (error) => {
          setError("Gagal mendapatkan lokasi");
        }
      );
    } else {
      setError("Geolocation tidak didukung oleh browser ini.");
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch {
      setError("Kota tidak ditemukan");
    }
  };

  useEffect(() => {
    if (weatherData) {
      const weatherCondition = weatherData.weather[0].main.toLowerCase();
      switch (weatherCondition) {
        case "clear":
          setBackgroundImage("bg-[url('http://getwallpapers.com/wallpaper/full/3/6/d/727032-download-windows-xp-desktop-backgrounds-1920x1200-for-hd.jpg')]");
          break;
        case "clouds":
          setBackgroundImage("bg-[url('https://wallpapercave.com/wp/wp3980191.jpg')]");
          break;
        case "rain":
          setBackgroundImage("bg-[url('https://cdn.wallpapersafari.com/69/53/YnF2Sy.jpg')]");
          break;
        case "snow":
          setBackgroundImage("bg-[url('https://wallpaperaccess.com/full/419215.jpg')]");
          break;
        case "thunderstorm":
          setBackgroundImage("bg-[url('https://images.hdqwalls.com/download/thunderstorm-lightning-bolt-striking-down-at-sunset-in-nebraska-4k-u1-2560x1600.jpg')]");
          break;
        default:
          setBackgroundImage("bg-gray-200");
      }
    }
  }, [weatherData]);

  return (
    <div className={`${backgroundImage} bg-cover min-h-screen flex flex-col`}>
      <Navbar
        city={city}
        setCity={setCity}
        handleOnSubmit={handleOnSubmit}
      location={
  weatherData && weatherData.sys ? `${weatherData.name}, ${weatherData.sys.country}` : null
}
      />
      {error && <ErrorAlert error={error} />}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default WeatherApp;
