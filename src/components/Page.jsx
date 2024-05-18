import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';

import { LanguageProvider } from '../contexts/LanguageContext';
import { StateProvider } from '../contexts/StateContext'
import '../styles/global.css';

function Page() {
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

export default Page;
