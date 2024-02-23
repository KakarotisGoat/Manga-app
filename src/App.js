import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Manga from './Manga';
import About from './About';
import './App.css';
// Always check the react-router-dom version before using and when used you have to make changes in index.js file also.
// Routes -  acts as a container/parent for all the individual routes that will be created in our app.
// Route -  is used to create a single route. 

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
        <div className="App">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="manga" element={ <Manga/> } />
          <Route path="about" element={ <About/> } />
        </Routes>
      </div>
      {/* <Home/> */}
      {/* <Manga/> */}
      <Footer/>
    </>
  );
};

export default App;
