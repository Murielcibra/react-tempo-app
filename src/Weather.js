import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="current-info">
            <div className="weather-app">
              <form id="search-form" className="mb-3">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Type a city.."
                      className="form-control"
                      id="city-input"
                      autocomplete="off"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="date-container">
              <div className="city" id="city">
                {weatherData.city}
              </div>
              <div className="date">
                Last updated: <span id="date">{weatherData.date}</span>
              </div>
              <ul>
                <li className="text- capitalize" id="description">
                  {weatherData.description}
                </li>
              </ul>
              <div className="future-forecast">
                <div className="today" id="current-temp">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    className="w-icon"
                    id="icon"
                  />

                  <div className="others">
                    <div className="day"></div>

                    <div className="temp" id="temperature">
                      {Math.round(weatherData.temperature)}
                      <span>°</span>
                    </div>
                    <div className="units" id="units">
                      <a href="#" id="celsius-link" className="active">
                        °C |
                      </a>
                      <a href="#" id="fahrenheit-link">
                        {" "}
                        °F
                      </a>
                    </div>

                    <div className="humidity">
                      Humidity:<span id="humidity">{weatherData.humidity}</span>
                    </div>
                    <div>
                      Windspeed:<span id="windspeed">{weatherData.wind}</span>
                    </div>
                  </div>
                </div>

                <div className="weather-forecast" id="weather-forecast"></div>
              </div>
            </div>
            <img
              className="motion-image"
              id="motion-image"
              src="image/rain.gif"
            />{" "}
            <footer>This project was coded by Muriel Cishek and is </footer>
            <a
              href="https://github.com/Murielcibra/react-tempo-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f6f001d26151b94d121b17eb30bad8c0";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
