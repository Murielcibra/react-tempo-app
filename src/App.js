import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather defaultCity="Santo Domingo" />
      </div>
    </div>
  );
}
