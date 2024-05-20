// Body.jsx
import React, { useState, useEffect  } from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Inicio from './Inicio';
import Cv from './Cv';
import Contact from './Contact';

import '../styles/body.css';



const Body = () => {

  return (
    <>
      <div className="container"> 
        <Inicio />
        <AboutMe />
        <Projects />
        <Cv />
        <Contact />
      </div>      
    </>
  );
}

export default Body;
