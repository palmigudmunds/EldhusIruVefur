import "./index.css";
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Menu from "./Views/Menu";

function App() {

  // useEffect(() => {
  //   console.log('Initializing...');
  // }, []);

  return (
      <div className="App">
        <Routes>
          <Route path="/*" element={<Menu/>} />
        </Routes>
      </div>
  );
}

export default App;
