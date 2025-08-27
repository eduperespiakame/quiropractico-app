import React from 'react';
import './style_components/Location.css';

const Location = () => {
  return (
    <section id="location" className="location-section">
      <h2>Ubicación</h2>
      <p>Visítanos en nuestra clínica para una consulta personalizada:</p>

      <div className="map-container">
        <iframe
          title="Ubicación del Centro Quiropráctico"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.8139230681426!2d-99.52745233039337!3d19.401355263817027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20bb9789b312b%3A0x9ebd380f0cf1db19!2sQuiropractico%20Terapeuta%20HPA!5e0!3m2!1ses!2smx!4v1755881431003!5m2!1ses!2smx"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
