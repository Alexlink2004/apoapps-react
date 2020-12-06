import React from "react";
import logo from '../Assets/Logos/apoapps-logo-inverted.svg'
import Card from "../Components/Card.jsx";
import "./styles/HomePage.css";
function HomePage() {
  return (
    <div className="HomePage">
      <h1 className="title"> Mis proyectos:</h1>
      <div>
        <div className=" row ">
        
          <Card
          
            imgURL="https://play-lh.googleusercontent.com/ilouuYQ_h6BCwtW6yDiXk_pFfKNn0CEQjxmngtFxT48_TN-Fe7ZVuos0iVEiFHpAGQ=s180-rw"
            title="Tri-Go Math"
            description="App para aprendizaje de matematicas"
            aboutLink="#/tri-go-math"
            platform1="iOS"
            platform2="android"
            />
          <Card
            imgURL="https://play-lh.googleusercontent.com/aynFiHgvTqoWPgQ5LB81d8WqrRkVgzbhiFheiEC--IcO6evRpcFt--e7HAK2g9i6OU6j=s180-rw"
            title="Endless Beats"
            description="Videojuego ritmico"
            aboutLink="#/endless-beats"
            platform1="iOS"
            platform2="android"
            />
          <Card
            imgURL="https://cachiangips.com/static/media/cachiangLogo.b8ac92a2.png"
            title="Pagina CaChiang IPS"
            description="Pagina Empresarial"
            aboutLink="https://cachiangips.com"
            platform1="WEB"
            
            />
          <Card
            imgURL="https://play-lh.googleusercontent.com/pKT453nwT0PMPJWkhteh0j8LIoHA4eT7UJ6hZZW3tjxUGO8gfUrc2Mk4Pr5uVepbmWdI=s180-rw"
            title="Alex VS Virus"
            description="Videojuego creado para pasar el tiempo :)"
            aboutLink="#/alex-vs-virus"
            
            platform2="android"
            />
          <Card
            imgURL={logo}
            title="Pagina anterior de ApoApps"
            description="Pagina Empresarial"
            aboutLink="https://alexlink2004.github.io/about_alex_page"
            platform1="WEB"
            
            />

          
        </div>
      </div>
    </div>
  );
}

export default HomePage;
