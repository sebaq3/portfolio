// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import './components/styles/Body.css';
import './components/styles/Container.css';

function App() {
    const [language, setLanguage] = useState('es');

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    return (
        <div className="App">
            <Header language={language} onLanguageChange={handleLanguageChange} />
            <div className="content"> {/* Aplica la clase 'content' aquí */}
                <About language={language} />
                <Projects language={language} />
                <Contact language={language} />
            </div>    
            <Footer language={language} />
        </div>
    );
}

export default App;
