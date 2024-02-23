import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link className="route" to="/">Home</Link></li>
        <li><Link className="route" to="manga">Manga</Link></li>
        <li><Link className="route" to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
