import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="Weather info">
      <div className="date-container">
        <div className="city" id="city">
          {props.data.city}
        </div>
        <div className="date">
          <span id="date">
            {" "}
            <FormattedDate date={props.data.date} />
          </span>
        </div>
        <ul>
          <li className="text- capitalize" id="description">
            {props.data.description}
          </li>
        </ul>
        <div className="future-forecast">
          <div className="today" id="current-temp">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="w-icon"
              id="icon"
            />

            <div className="others">
              <div className="day"></div>

              <div className="temp" id="temperature">
                {Math.round(props.data.temperature)}
                <span>°</span>
              </div>
              <WeatherTemperature celsius={props.data.temperature} />

              <div className="humidity">
                Humidity:{""}
                <span id="humidity">
                  {" "}
                  {""}
                  {props.data.humidity}
                </span>
                %
              </div>
              <div>
                Windspeed:
                <span id="windspeed">
                  {" "}
                  {""}
                  {props.data.wind}
                </span>{" "}
                km/h
              </div>
            </div>
          </div>
          <div className="weather-forecast" id="weather-forecast"></div>
        </div>
      </div>
    </div>
  );
}
