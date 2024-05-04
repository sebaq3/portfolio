// Body.jsx
import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Inicio from './Inicio';
import '../styles/body.css'; // Importa el archivo de estilos para Body
import { useStateContext } from '../contexts/StateContext'; // Importa StateProvider

const Body = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const { showInicio, setShowInicio } = useStateContext();

  const handleInicioFalse = () => {
    setShowInicio(false);
  };
  const handleShowAboutMe = () => {
    setShowAboutMe(true);
    setShowProjects(false); // Ocultar Projects cuando se muestra About Me
    setShowInicio(false);
  };

  const handleShowProjects = () => {
    setShowAboutMe(false); // Ocultar About Me cuando se muestra Projects
    setShowProjects(true);
    setShowInicio(false);
  };

  return (
    <>
      
        <div>
          <Header setShowAboutMe={setShowAboutMe} setShowProjects={setShowProjects} setShowInicio={setShowInicio} />
          <div className="container">
            <Inicio show={showInicio}/>     
            <AboutMe show={showAboutMe} />
            <Projects show={showProjects} />
          </div>
          {/* Otro contenido del cuerpo */}
        </div>
      
    </>
  );
}

export default Body;
