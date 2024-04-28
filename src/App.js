// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [language, setLanguage] = useState('es');

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    return (
        <div className="App">
            <Header language={language} onLanguageChange={handleLanguageChange} />
            <About language={language} />
            <Projects language={language} />
            <Contact language={language} />
            <Footer language={language} />
        </div>
    );
}

export default App;
