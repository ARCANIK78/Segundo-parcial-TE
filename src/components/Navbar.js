import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 bg-gray-800 text-white ">
      <h1 className="text-2xl font-bold">UCADEMY</h1>
      <ul className="flex space-x-4">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#servicio">Servicio</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
