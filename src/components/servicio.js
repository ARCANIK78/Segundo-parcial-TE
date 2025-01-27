// src/components/Servicio.js
import React from 'react';
import cursoIcon from './img/curso.jpg'; // Cambia la ruta según tu estructura de carpetas
import webinarIcon from './img/webinar2.jpg'; // Cambia la ruta según tu estructura de carpetas
import bootcampIcon from './img/BOOTCAMP.jpg'; // Cambia la ruta según tu estructura de carpetas

const Servicio = () => {
  // Array de servicios con iconos y títulos
  const servicios = [
    { 
      title: 'Cursos', 
      icon: cursoIcon, 
      description: 'Aprende a tu propio ritmo con nuestros cursos en línea.'
    },
    { 
      title: 'Webinars', 
      icon: webinarIcon, 
      description: 'Únete a nuestros webinars en vivo y aprende de expertos.'
    },
    { 
      title: 'Bootcamp', 
      icon: bootcampIcon, 
      description: 'Programas intensivos para adquirir habilidades rápidamente.'
    }
  ];

  // Función para manejar el clic en el botón
  const handleButtonClick = (title) => {
    alert(`Gracias por interesarte en ${title}!`);
  };

  return (
    <section id="servicio" className="p-10 bg-gradient-to-r from-gray-800 to-gray-900">
      <h2 className="text-4xl font-bold mb-5 text-center text-white">Servicios</h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicios.map((servicio, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={servicio.icon} alt={servicio.title} className="w-50 h-50 mb-3 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">{servicio.title}</h3>
            <p className="text-center mb-4 text-gray-700">{servicio.description}</p>
            <button 
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-200"
              onClick={() => handleButtonClick(servicio.title)}
            >
              Más Información
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicio;