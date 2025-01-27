// src/components/Header.js
import React, { useState, useEffect } from 'react';

import image1 from './img/maxresdefault (1).jpg';
import image2 from './img/maxresdefault.jpg';
import image3 from './img/python-thumb.jpg';

const images = [
  image1,
  image2,
  image3,
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header
      className="flex flex-col items-center justify-center h-screen text-white text-center"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-2 text-blue-600">Bienvenido a UCADEMY</h1>
        <p className="text-xl mb-5 text-gray-800">
          Explora nuestros cursos, webinars y bootcamps diseñados para potenciar tus habilidades.
        </p>
        <a
          href="#servicio"
          className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-500 transition duration-300"
        >
          Ver Cursos
        </a>
      </div>
    </header>
  );
};

export default Header;
