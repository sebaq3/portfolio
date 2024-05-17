import Header from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { StateProvider } from './contexts/StateContext'
import './styles/global.css';

export function Page() {
  return (
    <>
      <StateProvider>
        <LanguageProvider>
          <div>
            <Navbar />
            <Body />
            <Footer />
          </div>
        </LanguageProvider> 
      </StateProvider>   
    </>
  );
}
