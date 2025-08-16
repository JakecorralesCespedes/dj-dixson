import React, { useState } from 'react';
import strawHat from '../assets/paja_Luffy.png';

export default function Header({ name }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="logo" aria-label="Ir al inicio" onClick={() => setOpen(false)}>
          <img className="logo-img" src={strawHat} alt="Sombrero de paja - DJ Dixson" />
          <span className="logo-text">{name}</span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <nav className={`nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          <a href="#home">Inicio</a>
          <a href="#about">Sobre mí</a>
          <a href="#music">Música</a>
          <a href="#contact" className="btn btn-primary">Reservas</a>
        </nav>
      </div>
    </header>
  );
}
