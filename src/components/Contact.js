import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-50 bg-gray-800">
      <h2 className="text-4xl font-bold mb-5 text-white text-center">Contacto</h2>
      <form className="space-y-4 max-w-lg mx-auto">
        <input 
          type="text" 
          placeholder="Nombre" 
          className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500" 
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500" 
        />
        <textarea 
          placeholder="Mensaje" 
          className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
          rows="4"
        />
        <button 
          type="submit" 
          className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-200"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
