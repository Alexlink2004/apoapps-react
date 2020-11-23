import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import Card from '../Components/Card.jsx';
function HomePage () {
    return <div className="HomePage">
        <header> 
            <Navbar />
        </header>
        <body>
            <div className="card-columns">
            <Card
            imgURL='https://play-lh.googleusercontent.com/ilouuYQ_h6BCwtW6yDiXk_pFfKNn0CEQjxmngtFxT48_TN-Fe7ZVuos0iVEiFHpAGQ=s180-rw'
            title="Tri-Go Math"
            description="App para aprendizaje de matematicas"

            />
            <Card
            imgURL='https://play-lh.googleusercontent.com/aynFiHgvTqoWPgQ5LB81d8WqrRkVgzbhiFheiEC--IcO6evRpcFt--e7HAK2g9i6OU6j=s180-rw'
            title="Endless Beats"
            description="Videojuego ritmico"

            />
            <Card
            imgURL='https://play-lh.googleusercontent.com/pKT453nwT0PMPJWkhteh0j8LIoHA4eT7UJ6hZZW3tjxUGO8gfUrc2Mk4Pr5uVepbmWdI=s180-rw'
            title="Alex VS Virus"
            description="Videojuego creado para pasar el tiempo :)"

            />
            </div>
        </body>
    </div>
}

export default HomePage;