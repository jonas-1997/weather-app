import React from "react";
import { useContext } from "react";
import { WeatherContextType } from "./Layout";
import { WeatherContext } from "./Layout";
import getTime from "../utils/getTime";
import getWeekday from "../utils/getWeekday";
import day from "../SVGs/day.svg";
import cloudyDay from "../SVGs/cloudy-day-3.svg";
import cloudy from "../SVGs/cloudy.svg";
import showerRain from "../SVGs/rainy-6.svg";
import rain from "../SVGs/rainy-3.svg";
import thunder from "../SVGs/thunder.svg";
import snow from "../SVGs/snowy-6.svg";
import night from "../SVGs/night.svg";
import cloudyNight from "../SVGs/cloudy-night-3.svg";

function pickIcon(id: string) {
  if (id == "01d") {
    return day;
  } else if (id == "02d") {
    return cloudyDay;
  } else if (id == "03d" || id == "04d" || id == "03n" || id == "04n") {
    return cloudy;
  } else if (id == "09d" || id == "09n") {
    return showerRain;
  } else if (id == "10d" || id == "10n") {
    return rain;
  } else if (id == "11d" || id == "11n") {
    return thunder;
  } else if (id == "13d" || id == "13n") {
    return snow;
  } else if (id == "01n") {
    return night;
  } else if (id == "02n") {
    return cloudyNight;
  }
}

export default function Week() {
  const { weatherData, ForecastData } =
    useContext<WeatherContextType | null>(WeatherContext);
  return (
    <div className="week-component">
      <div className="weekday">
        {ForecastData ? getWeekday(ForecastData.daily[0].dt, ForecastData.timezone).slice(0,2) : null}
        <img src={ForecastData ? pickIcon(ForecastData.daily[0].weather[0].icon) : null} />
        <p>{ForecastData ? Math.floor(ForecastData.daily[0].temp.max - 273.15) : null}°C /
        {ForecastData ? Math.floor(ForecastData.daily[0].temp.min - 273.15) : null}°C</p>
      </div>
      <div className="weekday">
        {ForecastData ? getWeekday(ForecastData.daily[1].dt, ForecastData.timezone).slice(0,2) : null}
        <img src={ForecastData ? pickIcon(ForecastData.daily[1].weather[0].icon) : null} />
        <p>{ForecastData ? Math.floor(ForecastData.daily[1].temp.max - 273.15) : null}°C /
        {ForecastData ? Math.floor(ForecastData.daily[1].temp.min - 273.15) : null}°C</p>
      </div>
      <div className="weekday">
        {ForecastData ? getWeekday(ForecastData.daily[2].dt, ForecastData.timezone).slice(0,2) : null}
        <img src={ForecastData ? pickIcon(ForecastData.daily[2].weather[0].icon) : null} />
        <p>{ForecastData ? Math.floor(ForecastData.daily[2].temp.max - 273.15) : null}°C /
        {ForecastData ? Math.floor(ForecastData.daily[2].temp.min - 273.15) : null}°C</p>
      </div>
      <div className="weekday">
        {ForecastData ? getWeekday(ForecastData.daily[3].dt, ForecastData.timezone).slice(0,2) : null}
        <img src={ForecastData ? pickIcon(ForecastData.daily[3].weather[0].icon) : null} />
        <p>{ForecastData ? Math.floor(ForecastData.daily[3].temp.max - 273.15) : null}°C /
        {ForecastData ? Math.floor(ForecastData.daily[3].temp.min - 273.15) : null}°C</p>
      </div>
      <div className="weekday">
        {ForecastData ? getWeekday(ForecastData.daily[4].dt, ForecastData.timezone).slice(0,2) : null}
        <img src={ForecastData ? pickIcon(ForecastData.daily[4].weather[0].icon) : null} />
        <p>{ForecastData ? Math.floor(ForecastData.daily[4].temp.max - 273.15) : null}°C /
        {ForecastData ? Math.floor(ForecastData.daily[4].temp.min - 273.15) : null}°C</p>
      </div>
      <div className="weekday">
        {ForecastData ? getWeekday(ForecastData.daily[5].dt, ForecastData.timezone).slice(0,2) : null}
        <img src={ForecastData ? pickIcon(ForecastData.daily[5].weather[0].icon) : null} />
        <p>{ForecastData ? Math.floor(ForecastData.daily[5].temp.max - 273.15) : null}°C /
        {ForecastData ? Math.floor(ForecastData.daily[5].temp.min - 273.15) : null}°C</p>
      </div>
      <div className="weekday">
        {ForecastData ? getWeekday(ForecastData.daily[6].dt, ForecastData.timezone).slice(0,2) : null}
        <img src={ForecastData ? pickIcon(ForecastData.daily[6].weather[0].icon) : null} />
        <p>{ForecastData ? Math.floor(ForecastData.daily[6].temp.max - 273.15) : null}°C /
        {ForecastData ? Math.floor(ForecastData.daily[6].temp.min - 273.15) : null}°C</p>
      </div>
    </div>
  );
}
