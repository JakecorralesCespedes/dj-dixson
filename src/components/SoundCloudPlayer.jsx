import React from 'react';

export default function SoundCloudPlayer({ url }) {
  if (!url) return null;
  // Usa el widget de SoundCloud. Puedes pegar una URL de perfil o track; el ejemplo usa el perfil.
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23f1c40f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`;
  return (
    <div className="sc-embed">
      <iframe
        title="SoundCloud Player"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={embedUrl}
      ></iframe>
    </div>
  );
}
