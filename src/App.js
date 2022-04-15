import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div class="container">
      <div className="App">
        <h1>Weather App</h1>
        <Weather />
        <footer>This project was coded by Muriel Cishek and is </footer>
        <a
          href="https://github.com/Murielcibra/react-tempo-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub{" "}
        </a>
      </div>
    </div>
  );
}
