import "./index.css";
import React, { useEffect, useState }  from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import i18n from './i18n';

import FrontPage from "./Views/FrontPage";
import Menu from "./Views/Menu";
import LocaleContext from './LocaleContext';

function App() {

  const { pathname, hash, key } = useLocation();
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        // const yOffset = -100; 
        const element = document.getElementById(id);
        const pos = element.style.position;
        const top = element.style.top;
        element.style.position = 'relative';
        element.style.top = '-200px';
        if (element) {
          element.scrollIntoView({behavior: 'smooth' , block: 'start'});
          element.style.top = top;
          element.style.position = pos;
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
      <LocaleContext.Provider value={{locale, setLocale}}>
        <div className="App">
          <Routes>
            <Route path="/" element={<FrontPage/>} />
            <Route activeClassName='text-main' exact path="/menu" element={<Menu/>}  />
          </Routes>
        </div>
      </LocaleContext.Provider>
  );
}

export default App;
