import "./index.css";
import React from 'react';
import Navigation from './components/Navigation';
import MainMenu from './components/MainMenu';
import AboutUs from './components/AboutUs';
import HoursLocation from "./components/HoursLocation";

const App = () => {

  // useEffect(() => {
  //   console.log('Initializing...');
  // }, []);

  return (
    <>
      <Navigation/>
      <MainMenu/>
      <AboutUs/>
      <HoursLocation/>
    </>
  );
}

export default App;
