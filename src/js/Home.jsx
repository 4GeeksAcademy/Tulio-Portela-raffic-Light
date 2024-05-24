// /src/js/Home.jsx

import React from "react";
import Semaforo from "./Semaforo"; // Importando o componente semaforo.jsx

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Hello Rigo!</h1>
      <a href="#" className="btn btn-success">
        If you see this green button... bootstrap is working...
      </a>
      <Semaforo />
     
    </div>
  );
};

export default Home;
