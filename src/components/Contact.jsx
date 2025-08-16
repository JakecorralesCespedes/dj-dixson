import React from 'react';
import ig from '../assets/instagram.svg';
import fb from '../assets/facebook.svg';
import sc from '../assets/soundcloud.svg';
import yt from '../assets/youtube.svg';

function IconImg({ src, alt }) {
  return <img className="icon" src={src} alt={alt} />;
}

export default function Contact({ phone, instagram, facebook, soundcloud, youtube }) {
  return (
    <div className="container grid two">
      <div className="card">
        <h2 className="section-title">Reserva</h2>
        <p>¿Listo para zarpar? Hablemos sobre tu evento.</p>
        <a className="btn btn-primary wide" href={`tel:${phone.replace(/[^+\d]/g, '')}`}>
          <span className="icon" aria-hidden>📞</span> Llamar {phone}
        </a>
        <a className="btn btn-ghost wide" href={`https://wa.me/${phone.replace(/[^\d]/g, '')}`} target="_blank" rel="noreferrer">
          <span className="icon" aria-hidden>💬</span> WhatsApp
        </a>
      </div>
      <div className="card">
        <h2 className="section-title">Redes</h2>
        <div className="socials">
          {instagram && (
          <a href={instagram} target="_blank" rel="noreferrer" className="social instagram" aria-label="Instagram">
            <IconImg src={ig} alt="Instagram" /> Instagram
          </a>
          )}
          {facebook && (
          <a href={facebook} target="_blank" rel="noreferrer" className="social facebook" aria-label="Facebook">
            <IconImg src={fb} alt="Facebook" /> Facebook
          </a>
          )}
          {soundcloud && (
          <a href={soundcloud} target="_blank" rel="noreferrer" className="social soundcloud" aria-label="SoundCloud">
            <IconImg src={sc} alt="SoundCloud" /> SoundCloud
          </a>
          )}
          {youtube && (
          <a href={youtube} target="_blank" rel="noreferrer" className="social" aria-label="YouTube">
            <IconImg src={yt} alt="YouTube" /> YouTube
          </a>
          )}
        </div>
      </div>
    </div>
  );
}
