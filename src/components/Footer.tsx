import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Footer.css';
import { About } from './About';

export function Footer() {
  const [showAbout, setShowAbout] = useState(false);
  const location = useLocation();

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  const handleCloseAbout = () => {
    setShowAbout(false);
  };

  return (
    <>
      <footer className="app-footer">
        <div className="footer-left">
          <a href="https://github.com/Pythonidaer" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div className="footer-center">
          <nav className="footer-nav">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Random
            </Link>
            <Link 
              to="/slideshow" 
              className={`nav-link ${location.pathname === '/slideshow' ? 'active' : ''}`}
            >
              Slideshow
            </Link>
            <Link 
              to="/list" 
              className={`nav-link ${location.pathname === '/list' ? 'active' : ''}`}
            >
              List
            </Link>
          </nav>
        </div>
        <div className="footer-right">
          <button className="about-button" onClick={handleAboutClick}>About</button>
        </div>
      </footer>

      {showAbout && <About onClose={handleCloseAbout} />}
    </>
  );
}
