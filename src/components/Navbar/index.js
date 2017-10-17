import React from 'react';
import './Navbar.css';

const Navbar = ({ onClick }) =>
  <nav>
    <div className="navbar">
        <ul>
            <li><a href="">Games</a></li>
            <li><a href="">Communities</a></li>
            <li><a href="">Popular</a></li>
            <li><a href="">Creative</a></li>
            <li><a href="">Discover</a></li>
        </ul>
    </div>
  </nav>

export default Navbar;