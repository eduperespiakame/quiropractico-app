import React from 'react';
import './style_components/Services.css';

const servicesList = [
  { name: 'Ajuste quiropráctico', emoji: '💆‍♂️', description: 'Realineación manual de la columna vertebral' },
  { name: 'Terapia de columna', emoji: '🧘‍♀️', description: 'Tratamientos para mejorar la salud de la columna' },
  { name: 'Masajes terapéuticos', emoji: '💆‍♀️', description: 'Alivio muscular profundo y relajación' },
  { name: 'Tratamiento para Ciática', emoji: '🦵', description: 'Reducción del dolor del nervio ciático' },
  { name: 'Lumbalgia', emoji: '🛌', description: 'Terapia para dolor lumbar y zona baja de la espalda' },
  { name: 'Túnel carpiano', emoji: '🤲', description: 'Alivio del dolor y adormecimiento de muñecas' },
  { name: 'Cifosis', emoji: '🧍', description: 'Corrección de curvatura anormal en la espalda' },
  { name: 'Lordosis', emoji: '🏋️‍♂️', description: 'Mejora de postura y curvatura lumbar' },
  { name: 'Estrés', emoji: '😣', description: 'Terapias para reducir la tensión y el estrés' },
  { name: 'Ansiedad', emoji: '😟', description: 'Tratamientos relajantes y de bienestar mental' },
];


const Services = () => (
  <section id="services" className="services-section">
    <h2>Servicios</h2>
    <div className="services-grid">
      {servicesList.map((service, index) => (
        <div key={index} className="service-card">
          <span className="service-emoji">{service.emoji}</span>
          <p className="tooltip-container">
            {service.name}
            <span className="tooltip">{service.description}</span>
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
