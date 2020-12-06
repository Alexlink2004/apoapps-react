import {Link, Switch, Route, HashRouter as Router } from "react-router-dom";

import HomePage from "./Pages/HomePage.jsx";
import AboutMe from "./Pages/AboutMe.jsx";
import Navbar from "../src/Components/Navbar.jsx";
import AboutProduct from "./Pages/AboutProduct.jsx";
import Page404 from './Pages/404.jsx'

import "./App.css";
import "./Assets/Logos/TrigoMathLogo.webp";
import virusLogo from  './Assets/Logos/alexvsviruslogo.png';

export default function app() {
  return (
    <Router >
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/404" component={Page404}>
          <Page404/>
        </Route>
        
        <Route exact path="/" component={HomePage}>
          <HomePage />
        </Route>
        <Route exact path="/apoapps-react" component={HomePage}>
          <HomePage />
        </Route>
        <Route exact path="/me" component={AboutMe}>
          <AboutMe />
        </Route>
        <Route exact path="/tri-go-math" >
          <AboutProduct
            imgURL="https://play-lh.googleusercontent.com/ilouuYQ_h6BCwtW6yDiXk_pFfKNn0CEQjxmngtFxT48_TN-Fe7ZVuos0iVEiFHpAGQ=s180-rw"
            title="Tri-Go Math"
            titleImage=""
            description="Herramienta para estudiantes, la cual ayuda a realizar su tarea de matematicas de una manera sencilla"
            appState="Beta"
            appStore="https://apps.apple.com/es/app/tri-go-math/id1525513476"
            playStore="https://play.google.com/store/apps/details?id=com.apodaca.math_helper&hl=en_US&gl=US"
            
          />
        </Route>
        <Route exact path="/endless-beats">
          <AboutProduct
            imgURL='https://play-lh.googleusercontent.com/aynFiHgvTqoWPgQ5LB81d8WqrRkVgzbhiFheiEC--IcO6evRpcFt--e7HAK2g9i6OU6j=s180-rw'

            title="Endless Beats"
            titleImage=""
            description="Videojuego ritmico, en el cual consiste en esquivar hexagonos y subir de nivel, tiene personajes desbloqueables"
            appState="Alpha"
            appStore="https://apps.apple.com/us/app/endless-beats/id1524127084"
            playStore="https://play.google.com/store/apps/details?id=com.apodaca.game&hl=es"
          />
        </Route>
        <Route exact path="/alex-vs-virus">
          <AboutProduct
            imgURL={virusLogo}

            title="Alex vs virus"
            titleImage=""
            description="Videojuego el cual consiste en esquivar virus y tener el mayor puntaje posible"
            appState="Early access"
            appStore="#/404"
            playStore="https://play.google.com/store/apps/details?id=com.apodaca.app&hl=en&gl=US"
          />
        </Route>
        
      </Switch>
    </Router>
  );
}
