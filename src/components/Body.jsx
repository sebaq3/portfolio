// Body.jsx
import React, { useState, useEffect  } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Inicio from './Inicio';
import '../styles/body.css';
import { useStateContext } from '../contexts/StateContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const Body = () => {
  const { showInicio, setShowInicio } = useStateContext();
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [autoTransitionDone, setAutoTransitionDone] = useState(false);


  useEffect(() => {
    if (showInicio && !autoTransitionDone) {
      const timer = setTimeout(() => {
        setShowInicio(false);
        setShowAboutMe(true);
        setAutoTransitionDone(true);
      }, 5000);
      
      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or showInicio changes
    }
  }, [showInicio, autoTransitionDone]);

  const getCurrentComponent = () => {
    if (showInicio) return <Inicio show={showInicio} key="inicio" />;
    if (showAboutMe) return <AboutMe show={showAboutMe} key="aboutMe" />;
    if (showProjects) return <Projects show={showProjects} key="projects" />;
    return null;
  };



  return (
    <>
      
        <div>
          <Header 
            setShowAboutMe={setShowAboutMe} 
            setShowProjects={setShowProjects} 
            setInicio={setShowInicio} 
          />
          <div className="container">
            <TransitionGroup>
              <CSSTransition
                key={showInicio ? 'inicio' : showAboutMe ? 'aboutMe' : 'projects'}
                timeout={500}
                classNames="fade"
              >
                {getCurrentComponent()}
              </CSSTransition>
            </TransitionGroup>
          </div>
          {/* Otro contenido del cuerpo */}
        </div>
      
    </>
  );
}

export default Body;
