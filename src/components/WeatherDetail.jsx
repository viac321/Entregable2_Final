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
          className="bg-W_one/60 text-W_two
         dark:bg-D_one/40 dark:text-D_four p-2 rounded-md
         sm:grid "
        >
          {/*encabezado*/}
          <h3 className="text-2xl rounded-md text-W_four dark:text-D_four ">
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
          className="flex justify-items-center
           text-2xl sm:col-span-1 sm:block sm:grid-rows-auto gap-1"
        >
          <div
            className="text-W_two bg-W_one/60
           dark:bg-D_one/40 dark:text-D_four rounded-xl p-4
           grid justify-items-center sm:col-start-2
           sm:grid sm:justify-items-center"
          >
            <div>
              <img src="/wind.svg" alt="Velocidad del viento" />
            </div>
            <span>{weather.wind.speed} m/s</span>
          </div>

          <div
            className="text-W_two bg-W_one/60 
          dark:bg-D_one/40 dark:text-D_four rounded-xl p-2
          grid justify-items-center
          sm:grid sm:justify-items-center"
          >
            <div>
              <img src="/humidity.svg" alt="Humedad" />
            </div>
            <span>{weather.main.humidity} %</span>
          </div>

          <div
            className="text-W_two bg-W_one/60
           dark:bg-D_one/40 dark:text-D_four rounded-xl p-2
           grid justify-items-center
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
        sm:grid sm:justify-items-center">
          <button
            onClick={handleToggleTemp}
            className="bg-black/60 rounded-lg text-2xl border-spacing-2 border-D_four
          "
          >
            {unit === "F°" ? (
              <IconTemperatureCelsius
                className="text-W_three bg-W_one
             dark:bg-D_one dark:text-D_four overflow-hidden"
              />
            ) : (
              <IconTemperatureFahrenheit
                className="text-W_three bg-W_one 
             dark:bg-D_one dark:text-D_four overflow-hidden"
              />
            )}
          </button>
          <button onClick={handleToggleTheme} className="rounded-lg text-2xl ">
            <IconMoonFilled
              className="dark:bg-D_one dark:text-D_four text-W_three bg-W_one 
           overflow-hidden  dark:hidden"
            />
            <IconSunFilled className="hidden dark:block dark:bg-D_one dark:text-D_four text-W_three bg-W_one" />
          </button>
        </div>
    </article>
  );
};
export default WeatherDetail;
