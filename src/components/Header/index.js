import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import '../assets/estilo.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <Link to="#" className="logo"><img src={logo} alt="Logo"></img></Link>
        <ul className="menu">
          <li className="nav-item"><Link to="#pagina1" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="#pagina2" className="nav-link">Sobre</Link></li>
          <li className="nav-item"><Link to="#pagina3" className="nav-link">Filmes</Link></li>
          <li className="nav-item"><Link to="#pagina4" className="nav-link">Novidades</Link></li>
          <li className="nav-item"><Link to="#pagina5" className="nav-link">Contato</Link></li>
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
