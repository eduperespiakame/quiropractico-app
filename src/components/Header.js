import React from 'react';
import './style_components/Header.css';

const Header = () => (
  <header>
    <h1>Centro Quiropráctico HPA</h1>
    <nav>
      <a href="#services">Servicios</a>
      <a href="#gallery">Galería</a>
      <a href="#schedule">Horarios</a>
      <a href="#booking">Agendar</a>
      <a href="#comments">Comentarios</a>
    </nav>
  </header>
);

export default Header;
