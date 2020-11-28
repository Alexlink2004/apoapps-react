import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./Pages/HomePage.jsx";
import AboutMe from "./Pages/AboutMe.jsx";
import Navbar from "../src/Components/Navbar.jsx";
import AboutProduct from "./Pages/AboutProduct.jsx";
import "./App.css";

export default function app() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/apoapps-react">
          <HomePage />
        </Route>
        <Route exact path="/me">
          <AboutMe />
        </Route>
        <Route exact path ="/tri-go-math">
          <AboutProduct
          title="Tri-Go Math"
          description="Herramienta para estudiantes, la cual ayuda a realizar su tarea de matematicas de una manera sencilla"
          app-state="Beta"
          app-store="/"
          play-store="/"
          
          />
        </Route>
      </Switch>
    </Router>
  );
}
