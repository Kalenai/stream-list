import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onClick }) =>
  <nav>
    <div className="navbar">
        <ul>
            <li><Link to="/">Games</Link></li>
            <li><Link to="/communities">Communities</Link></li>
            <li><Link to="/popular">Popular</Link></li>
            <li><Link to="/creative">Creative</Link></li>
            <li><a href="https://www.twitch.tv/directory/discover" target="_blank" rel="noopener noreferrer">
              Discover
            </a></li>
        </ul>
    </div>
  </nav>

export default Navbar;