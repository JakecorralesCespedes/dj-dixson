import React from 'react';

export default function Footer({ name }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} {name}. Todos los derechos reservados.</p>
  <p className="small">Tema inspirado en aventuras piratas. No afiliado ni asociado a marcas registradas.</p>
      </div>
    </footer>
  );
}
