import React from "react";
import "./styles/Card.css";



function Card(props) {
  return (
    <div className="card__container portfolio-item">
      <div className="card portfolio__item row">
        <img className="card-img-top c-img" src={props.imgURL} alt="Card " />
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.description}</p>
          <div className="row">
          <ul>
            <li><a href={props.portfolioLink} className="btn btn-dark button">
            Saber mas
          </a>
          </li>
          <li>
          <a href={props.portfolioLink} className="btn btn-dark button" >
            Ver en App Store
          </a>
          </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
