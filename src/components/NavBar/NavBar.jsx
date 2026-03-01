import React from 'react';
import './NavBar.css';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link spy={true} to="Intro" smooth={true} className="nav-logo">
        Kinjal Gupta
      </Link>
      <div className="nav-links">
        <Link spy={true} to="Experience" smooth={true} offset={-70}>Experience</Link>
        <Link spy={true} to="Skills" smooth={true} offset={-70}>Skills</Link>
        <Link spy={true} to="Projects" smooth={true} offset={-70}>Projects</Link>
        <Link spy={true} to="Achievements" smooth={true} offset={-70}>Achievements</Link>
        <Link spy={true} to="Blogs" smooth={true} offset={-70}>Blogs</Link>
      </div>
      <div className="nav-right">
        <Toggle />
        <Link spy={true} to="contact" smooth={true} offset={-70}>
          <button className="button primary nav-cta">Contact</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
