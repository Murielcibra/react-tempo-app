import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div class="container">
      <div className="App">
        <Weather defaultCity="Dominican Republic" />
      </div>
    </div>
  );
}
