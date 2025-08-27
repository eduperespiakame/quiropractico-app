import React from 'react';

const Booking = () => {
  const handleClick = () => {
    const mensaje = encodeURIComponent("Hola, quiero agendar una cita para un servicio quiropráctico HPA.");
    window.open(`https://wa.me/7223340581?text=${mensaje}`, '_blank');
  };

  return (
    <section id="booking">
      <h2>Agendar Cita</h2>
      <p>Puedes agendar tu cita directamente por WhatsApp.</p>
      <button onClick={handleClick}>Agendar por WhatsApp</button>
    </section>
  );
};

export default Booking;
