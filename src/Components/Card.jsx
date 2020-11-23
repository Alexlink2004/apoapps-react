import React from "react";
import "./styles/Card.css";

function Card(props) {
  return (
    <div className="card__container">
      <div className="card portfolio__item">
        <img class="card-img-top" src={props.imgURL} alt="Card Image" />
        <div class="card-body">
          <h4 class="card-title">{props.title}</h4>
          <p class="card-text">{props.description}</p>
          <a href={props.portfolioLink} class="btn btn-primary">
            Saber mas
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
