import React from "react";
import { WiStrongWind, WiHumidity, WiThermometer } from "react-icons/wi";

    const WeatherCard = ({ weatherData }) => (
    <div className="flex justify-center mt-10 text-white">
        <div className="card glass w-full mx-80 mt-10 ">
        <div className="stats shadow bg-primary bg-opacity-50 ">
            <div className="stat">
            <div className="stat-title">
                <WiThermometer className="text-5xl text-white" />
            </div>
            <div className="stat-value text-white">{weatherData.main.temp}°C</div>
            <div className="stat-desc text-white">Suhu di {weatherData.name}</div>
            </div>
            <div className="stat">
            <div className="stat-title">
                <WiHumidity className="text-5xl text-white" />
            </div>
            <div className="stat-value text-white">{weatherData.main.humidity}%</div>
            <div className="stat-desc text-white">Kelembapan saat ini</div>
            </div>
            <div className="stat">
            <div className="stat-title">
                <WiStrongWind className="text-5xl text-white" />
            </div>
            <div className="stat-value text-white">{weatherData.wind.speed} m/s</div>
            <div className="stat-desc text-white">Kecepatan angin saat ini</div>
            </div>
        </div>
        <div className="flex flex-col items-center w-full">
            <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt="weather status icon"
            className="w-20 max-w-full mx-auto"
            />
            <p className="pb-3 text-center">{weatherData.weather[0].description}</p>
        </div>
        </div>
    </div>
    );

export default WeatherCard;
