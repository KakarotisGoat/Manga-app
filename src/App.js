import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import Home from './Home';
// import Manga from './Manga';
import About from './About';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
      {/* <Manga/> */}
      <About/>
      <Footer/>
    </>
  );
};

export default App;
