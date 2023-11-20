import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../assets/logo.png';
import Home from '../../pages/Home';
import Sobre from '../../pages/Sobre';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <Link to="#" className="logo"><img src={logo} alt="Logo"></img></Link>
        <ul className="menu">
          <li className="nav-item"><Link to="/" element={<Home/>}>Home</Link></li>
          <li className="nav-item"><Link to="/sobre" element={<Sobre/>} className="nav-link">Sobre</Link></li>
          <li className="nav-item"><Link to="/" element={<Home/>}>Filmes</Link></li>
          <li className="nav-item"><Link to="/" element={<Home/>}>Novidades</Link></li>
          <li className="nav-item"><Link to="/" element={<Home/>}>Contato</Link></li>
        </ul>
        <div className="px-3 geral">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
