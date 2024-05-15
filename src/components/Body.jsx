// Body.jsx
import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Inicio from './Inicio';
import '../styles/body.css';
import { useStateContext } from '../contexts/StateContext';

const Body = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const { showInicio, setShowInicio } = useStateContext();



  return (
    <>
      
        <div>
          <Header 
          setShowAboutMe={setShowAboutMe} 
          setShowProjects={setShowProjects} 
          setInicio={setShowInicio} 
          />
          <div className="container">
            <Inicio show={showInicio} />
            <AboutMe show={showAboutMe} />
            <Projects show={showProjects} />
          </div>
          {/* Otro contenido del cuerpo */}
        </div>
      
    </>
  );
}

export default Body;
