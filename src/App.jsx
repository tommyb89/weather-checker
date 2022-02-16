import { useState } from "react";
import "./App.scss";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";

const api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const weatherBackground = () => {
    if (typeof weather.main != "undefined") {
      if (weather.weather[0].id >= 200 && weather.weather[0].id <= 232) {
        return "thunderstorm";
      } else if (weather.weather[0].id >= 300 && weather.weather[0].id <= 321) {
        return "drizzle";
      } else if (weather.weather[0].id >= 500 && weather.weather[0].id <= 531) {
        return "rain";
      } else if (weather.weather[0].id >= 600 && weather.weather[0].id <= 622) {
        return "snow";
      } else if (weather.weather[0].id >= 701 && weather.weather[0].id <= 781) {
        return "atmosphere";
      } else if (weather.weather[0].id == 800) {
        return "clear";
      } else if (weather.weather[0].id >= 801 && weather.weather[0].id <= 804) {
        return "clouds";
      }
    }
  };

  return (
    <div className={`app + ${weatherBackground()}`}>
      <main className="app__main">
        <h1 className="app__header">weather checker</h1>
        <Search
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />

        {typeof weather.main != "undefined" ? (
          <div className="app__weather-container">
            <Card
              dateBuilder={dateBuilder}
              location={weather.name}
              country={weather.sys.country}
              temp={Math.round(weather.main.temp)}
              weather={weather.weather[0].main}
            />
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default App;
