import React, { useState } from 'react';

const Semaforo = () => {
  // Estado para controlar la luz activa
  const [luzActiva, setLuzActiva] = useState(null);

  // Función para manejar el clic sobre cada farol
  const manejarClic = (color) => {
    if (luzActiva === color) {
      setLuzActiva(null); // Apagar si es el mismo que ya estaba activo
    } else {
      setLuzActiva(color); // Encender el nuevo y apagar los otros
    }
  };

  return (
    <div style={{ backgroundColor: 'black', width: '100px', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', borderRadius: '2%', margin: '20px auto', paddingTop: '10px', paddingBottom: '10px' }}>
      {/* Div de la bola verde */}
      <div style={{ backgroundColor: 'green', boxShadow: luzActiva === 'verde' ? '0 0 20px green' : '', width: '80px', height: '80px', borderRadius: '50%', cursor: 'pointer' }} onClick={() => manejarClic('verde')}></div>
      
      {/* Div de la bola amarilla */}
      <div style={{ backgroundColor: 'yellow', boxShadow: luzActiva === 'amarillo' ? '0 0 20px yellow' : '', width: '80px', height: '80px', borderRadius: '50%', cursor: 'pointer' }} onClick={() => manejarClic('amarillo')}></div>
      
      {/* Div de la bola roja */}
      <div style={{ backgroundColor: 'red', boxShadow: luzActiva === 'rojo' ? '0 0 20px red' : '', width: '80px', height: '80px', borderRadius: '50%', cursor: 'pointer' }} onClick={() => manejarClic('rojo')}></div>
    </div>
  );
};

export default Semaforo;