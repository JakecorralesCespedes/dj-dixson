import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import SoundCloudPlayer from './components/SoundCloudPlayer.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // Configura aquí la info del DJ
  const profile = {
  name: 'DJ Dixson',
  phone: '+1 (203) 243-0201',
  instagram: 'https://www.instagram.com/djdixson?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  facebook: 'https://www.facebook.com/dixson.corrales.5/about',
  soundcloud: 'https://soundcloud.com/dixson-corrales?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  youtube: 'https://youtube.com/@djdixson2512?si=zwRrO09FgnKp_-So',
  location: 'Estados Unidos',
  };

  return (
    <>
      <Header name={profile.name} />
      <main>
        <Hero name={profile.name} location={profile.location} instagram={profile.instagram} />
        <section id="about" className="section">
          <About />
        </section>
        <section id="music" className="section">
          <div className="container">
            <h2 className="section-title">Música</h2>
            <p className="section-subtitle">Escucha mezclas recientes en SoundCloud</p>
            <div className="card">
              <SoundCloudPlayer url={`${profile.soundcloud}`} />
            </div>
          </div>
        </section>
        <section id="contact" className="section">
          <Contact phone={profile.phone} instagram={profile.instagram} facebook={profile.facebook} soundcloud={profile.soundcloud} youtube={profile.youtube} />
        </section>
      </main>
      <Footer name={profile.name} />
    </>
  );
}
