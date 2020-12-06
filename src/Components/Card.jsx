import React from "react";
import "./styles/Card.css";



function Card(props){
  return (
    
      <div className="card border-light bg-light col-sm-10 col-md-5 col-lg  portfolio__item ">
        <img className="card-img-top img-fluid c-img" src={props.imgURL} alt="Card " />
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.description}</p>
          <h6>Plataformas disponibles:</h6>
          <ul>
            <li>iOS</li>
            <li>android</li>
          </ul>

          
              <a href={props.aboutLink} className="btn btn-dark button card-link">
                Saber mas
              </a>

          
      </div>
    </div>
  );
}

export default Card;
