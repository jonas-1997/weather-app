import React, { useState, useEffect, createContext } from "react";
import Overview from "./Overview";
import Header from "./Header";
import Week from "./Week";
import Highlight from "./Highlight";
import getWeather from "../utils/getWeatherData";
import getWeatherForecast from "../utils/getWeatherForecast";

export interface WeatherContextType {
  weatherData: null | object | string;
  ForecastData: null | object | string;
}
type Weather = null | object

export const WeatherContext = createContext<WeatherContextType | null>(null);

export default function Layout() {
  const [weatherData, setWeatherData] = useState<Weather>(null);
  const [ForecastData, setForecastData] = useState<Weather>(null);

  useEffect(() => {
    getWeather("Leipzig").then((data) => {
      setWeatherData(data);
      getWeatherForecast(data.coord.lon, data.coord.lat).then((data) =>
        setForecastData(data)
      )
    })
  }, []);

  return (
    <WeatherContext.Provider value={{weatherData, ForecastData}}>
      <div className="flex-layout">
        <div className="flex-left">
          <Overview />
        </div>
        <div className="flex-right">
          <Header />
          <Week />
          <Highlight />
        </div>
      </div>
    </WeatherContext.Provider>
  );
}
