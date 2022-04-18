import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="units" id="units">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span id="celsius-link" className="active">
          °C|
          <a href="/" onClick={showFahrenheit}>
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="units" id="units">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span id="celsius-link" className="active">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}
