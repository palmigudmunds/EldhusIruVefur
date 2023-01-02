import "./index.css";
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import FrontPage from "./Views/FrontPage";
import Menu from "./Views/Menu";

function App() {

  // useEffect(() => {
  //   console.log('Initializing...');
  // }, []);

  return (
      <div className="App">
        <Routes>
          <Route path="/*" element={<FrontPage/>} />
          <Route exact path="/menu" element={<Menu/>}  />
        </Routes>
      </div>
  );
}

export default App;
