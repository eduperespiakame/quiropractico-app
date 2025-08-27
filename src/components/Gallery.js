import React, { useState } from 'react';
import './style_components/Gallery.css';

import img1 from './img_galery/11a.png';
import img2 from './img_galery/13a.png';
import img3 from './img_galery/consul.jpeg';
import img4 from './img_galery/8.jpg';
import img5 from './img_galery/toon.png';

const images = [
  { src: img1, alt: 'Ajuste Quiropráctico' },
  { src: img2, alt: 'Terapia Manual' },
  { src: img3, alt: 'Sesión de Masaje' },
  { src: img4, alt: 'Quiropractico HPA' },
  { src: img5, alt: 'Quiropractico Toon' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);

  return (
    <section className="gallery-section" id="gallery">
      <h2>Galería</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(img)}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p>{selectedImage.alt}</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
