import "./index.css";
import React, { useEffect }  from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'

import FrontPage from "./Views/FrontPage";
import Menu from "./Views/Menu";

function App() {

  const { pathname, hash, key } = useLocation();

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
      <div className="App">
        <Routes>
          <Route path="/" element={<FrontPage/>} />
          <Route activeClassName='text-red-600' exact path="/menu" element={<Menu/>}  />
        </Routes>
      </div>
  );
}

export default App;
