import React from 'react';
import '../styles/inicio.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Inicio = () => {
    return (
        <main style={{ marginLeft: '10px' }}>
            <div className="content-container" style={{ marginLeft: '250px' }}>
                <div className="w3-container w3-teal">
                    <div className="mt-5" id="carrusel_box">
                        <div className="container_carrusel">
                            <div className="carousel">
                                <div className="carousel__face"><span>Anime</span></div>
                                <div className="carousel__face"><span>Franquicias</span></div>
                                <div className="carousel__face"><span>Videojuegos</span></div>
                                <div className="carousel__face"><span>Pintering</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Inicio;
