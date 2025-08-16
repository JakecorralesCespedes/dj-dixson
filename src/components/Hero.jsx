import React from 'react';
import strawHat from '../assets/paja_Luffy.png';

export default function Hero({ name, location, instagram }) {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1 className="display">{name}</h1>
          <p className="lead">DJ profesional — {location}. Disponible para eventos privados, clubs y festivales.</p>
          <div className="cta-group">
            <a className="btn btn-primary" href="#contact">Reserva ahora</a>
            <a className="btn btn-ghost" href={instagram} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <div className="hero-art" aria-hidden>
          <img className="straw-hat-img" src={strawHat} alt="Sombrero de paja" />
        </div>
      </div>
    </section>
  );
}
