import { IconMoonFilled } from "@tabler/icons-react";
import { IconSunFilled } from "@tabler/icons-react";
import { IconTemperatureFahrenheit } from "@tabler/icons-react";
import { IconTemperatureCelsius } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const WeatherDetail = ({ weather }) => {
  //|||--------------------------------DarkMode---------------------------------------------------------|||
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("theme")) ?? false
  );
  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };
  useEffect(() => {
    if (isDark == true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

  //--------------------------------------TempUnitsChange-------------------------------------------------
  const celsiusToFahrenheit = (tempCelsius) => {
    const tempF = (tempCelsius * (9 / 5) + 32).toFixed(1);
    return tempF;
  };

  const [temp, setTemp] = useState(weather.main.temp);
  const [unit, setUnit] = useState("C°");
  //const [count, setCount]= useState(count+1);
  const handleToggleTemp = () => {
    if (unit === "F°") {
      setTemp(weather.main.temp);
      setUnit("C°");
    } else {
      setTemp(celsiusToFahrenheit(weather.main.temp));
      setUnit("F°");
    }
  };
  useEffect(() => {
    if (isDark == true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <article
      className="text-center grid gap-4 "
    >
      <div className="grid gap-4 sm:grid-cols-[1fr_auto] ">
        <section
          className="text-W_four bg-W_two/60 border-4 border-W_four/60
         dark:bg-D_one/40 dark:text-D_one p-2 rounded-md
         sm:grid "
        >
          {/*encabezado*/}
          <h3 className="text-2xl rounded-md text-W_four dark:text-D_one ">
            {weather.name}, {weather.sys.country}
          </h3>

          {/*seccion: temp, descripcion e imagen*/}
          <h3 className="text-2xl">{weather.weather[0].description}</h3>
          <span className="text-2xl">
            {Math.floor(temp)}
            {unit}
          </span>
          <div>
            <img
              className="block mx-auto"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
        </section>

        {/*sec2: detalles adicionales del clima*/}
        <section
          className="flex justify-items-center text-W_four bg-W_two/60 
          border-4 border-W_four/60
          dark:bg-D_one/40 dark:text-D_one rounded-xl
           text-2xl sm:col-span-1 sm:block sm:grid-rows-auto gap-3 sm:text-base sm:gap-1"
        >
          <div
            className="p-2 gap-1 
           grid justify-items-center sm:col-start-2
           sm:grid sm:justify-items-center"
          >
            <div>
              <img src="/wind.svg" alt="Velocidad del viento" />
            </div>
            <span>{weather.wind.speed} m/s</span>
          </div>

          <div
            className="p-2 gap-1 border-2 border-y-transparent border-x-W_four/60 
            sm:border-2 sm:border-x-transparent sm:border-b-transparent 
            sm:border-t-W_four/60 
            grid justify-items-center
            sm:grid sm:justify-items-center"
          >
            <div>
              <img src="/humidity.svg" alt="Humedad" />
            </div>
            <span>{weather.main.humidity} %</span>
          </div>

          <div
            className="p-2 gap-1
           grid justify-items-center sm:border-2 sm:border-x-transparent sm:border-b-transparent 
           sm:border-t-W_four/60
           sm:grid sm:justify-items-center"
          >
            <div>
              <img src="/pressure.svg" alt="Presión" />
            </div>
            <span>{weather.main.pressure} hpa</span>
          </div>
        </section>
       
      </div>
      <div className="grid grid-cols-2 gap-2 justify-items-center
        text-W_four bg-W_two/60 border-4 border-W_four/60
        dark:bg-D_one/40 dark:text-D_one
        rounded-md
        sm:grid sm:justify-items-center">
          <button 
            onClick={handleToggleTemp} 
          >
            {unit === "F°" ? (
              <IconTemperatureCelsius
                className=" overflow-hidden"
              />
            ) : (
              <IconTemperatureFahrenheit
                className=" overflow-hidden"
              />
            )}
          </button>
          
          <button onClick={handleToggleTheme} className="rounded-lg text-2xl ">
            <IconMoonFilled
              className=" 
           overflow-hidden  dark:hidden"
            />
            <IconSunFilled className="hidden dark:block" />
          </button>
        </div>
    </article>
  );
};
export default WeatherDetail;
