import React from "react";
import "./Card.scss";

const Card = ({ dateBuilder, location, country, temp, weather }) => {
  return (
    <article className="card">
      <div className="card__location-box">
        <div className="card__location">
          {location}, {country}
        </div>
        <div className="card__date">{dateBuilder(new Date())}</div>
      </div>

      <div className="card__weather-box">
        <div className="card__temp">{temp}&#176;C</div>
        <div className="card__weather">{weather}</div>
      </div>
    </article>
  );
};

export default Card;
