// Inicio.jsx
import React, { useEffect } from 'react';
import '../styles/inicio.css';
import { useStateContext } from '../contexts/StateContext';

const Inicio = ({ show }) => {
	const asd = import.meta.env.VITE_PRUEBA_SECRETA;
	const asd2 = import.meta.env.PRUEBA_SECRETA;
	const { showInicio } = useStateContext();
	console.log(asd);
	console.log(asd2);
	console.log(show);

	
	
    return (    
    	<>			
			<div className={`inicio ${show ? 'fade-in' : ''}`}>
				<video autoPlay muted loop className="video-background">
					<source src="https://qanplatform.com/_nuxt/qan-anim-02.bc047b0d.mp4" type="video/mp4" />
					Tu navegador no soporta videos HTML5.
				</video>	
			</div>
		</>
  );
}

export default Inicio;
