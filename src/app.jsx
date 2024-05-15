import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { StateProvider } from './contexts/StateContext'
import './app.css'
import './styles/global.css';

export function App() {
  return (
    <>
      <StateProvider>
        <LanguageProvider>
          <div>
            <Header />
            <Body />
            <Footer />
          </div>
        </LanguageProvider> 
      </StateProvider>   
    </>
  );
}
