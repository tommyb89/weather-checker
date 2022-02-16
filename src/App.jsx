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
  return (
    <div className="app snow">
      <main className="app__main">
        <h1 className="app__header">weather checker</h1>
        <Search />

        <div className="app__weather-container">
          <Card dateBuilder={dateBuilder} />
        </div>
      </main>
    </div>
  );
};

export default App;
