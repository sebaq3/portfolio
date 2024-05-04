// Inicio.jsx
import React from 'react';
import '../styles/inicio.css';
import { useStateContext } from '../contexts/StateContext';

const Inicio = ({ show }) => {

	const { showInicio } = useStateContext();
    return (    
    	<div className={`inicio ${show ? 'fade-in' : ''}`}>
        	<video autoPlay muted loop className="video-background">
          		<source src="https://qanplatform.com/_nuxt/qan-anim-02.bc047b0d.mp4" type="video/mp4" />
          		Tu navegador no soporta videos HTML5.
        	</video>
    </div>
  );
}

export default Inicio;
