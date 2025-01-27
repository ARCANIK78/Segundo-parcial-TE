import React from 'react';
import Navbar from './components/Navbar';
import Servicio from './components/servicio';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Header />
      <Servicio/>
      <Contact />
    </div>
  );
}

export default App;
