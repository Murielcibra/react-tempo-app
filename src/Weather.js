import React from "react";
import "./weather.css";

export default function Weather() {
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
              San Francisco
            </div>
            <div className="date">
              Last updated: <span id="date"></span>
            </div>
            <ul>
              <li id="description">Clear</li>
            </ul>
            <div className="future-forecast">
              <div className="today" id="current-temp">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="weatherIcon"
                  className="w-icon"
                  id="icon"
                />

                <div className="others">
                  <div className="day"></div>

                  <div className="temp" id="temperature">
                    72 <span>°</span>
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
                    Humidity:<span id="humidity">75%</span>
                  </div>
                  <div>
                    Windspeed:<span id="windspeed">2km</span>
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
          />
        </div>
      </div>
    </div>
  );
}
