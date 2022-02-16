import React from "react";
import "./Card.scss";

const Card = ({ dateBuilder }) => {
  return (
    <article className="card">
      <div className="card__location-box">
        <div className="card__location">Zielona Gora, POLAND</div>
        <div className="card__date">{dateBuilder(new Date())}</div>
      </div>

      <div className="card__weather-box">
        <div className="card__temp">16&#176;C</div>
        <div className="card__weather">Sunny</div>
      </div>
    </article>
  );
};

export default Card;
