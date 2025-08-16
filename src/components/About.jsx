import React from 'react';

export default function About() {
  return (
    <div className="container grid two">
      <div className="card">
        <h2 className="section-title">Estilo</h2>
        <p>
          Mezclas enérgicas con ritmos latinos, house y hip-hop. Inspiración aventurera con estética náutica y toques piratas.
        </p>
      </div>
      <div className="card">
        <h2 className="section-title">Servicios</h2>
        <ul className="list">
          <li>Eventos privados y corporativos</li>
          <li>Clubs y festivales</li>
          <li>Producción de mixtapes personalizados</li>
          <li>Servicios de audio y DJ booth</li>
        </ul>
      </div>
    </div>
  );
}
