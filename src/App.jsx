import axios from "axios";
import { useEffect, useState } from "react";
import WeatherDetail from "./components/WeatherDetail";
import PacmanLoader from "react-spinners/PacmanLoader";
import "./App.css"
import "./components/WeatherSearch.jsx"


function App() {
  const [weather, setWeather] = useState(null);
 

  const success = (pos) => {
    const {
      coords: { latitude, longitude },
    } = pos;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8d5ebef1ba7e9899515a707fe20507cd&units=metric`
      )
      .then(({ data }) => setWeather(data))
      .catch(({ err }) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <main
    className={` h-screen w-screen bg-[url('/clear_sky.webp')] bg-cover bg-center`}

    >
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl"></h1>
        {weather ? (
          <WeatherDetail weather={weather} />
        ) : (
          <PacmanLoader
            color={"#36d7b7"}
            size={80}
            aria-label="Loading Pac-Man"
            data-testid="loader"
          />
        )}
      </div>
    </main>
  );
}

export default App;
