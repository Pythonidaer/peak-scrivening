import { Link, useLocation } from 'react-router-dom';
import '../styles/NavFooter.css';

export function NavFooter() {
  const location = useLocation();
  
  return (
    <nav className="nav-footer">
      <Link 
        to="/" 
        className={`nav-footer-link ${location.pathname === '/' ? 'active' : ''}`}
      >
        Random
      </Link>
      <Link 
        to="/slideshow" 
        className={`nav-footer-link ${location.pathname === '/slideshow' ? 'active' : ''}`}
      >
        Slideshow
      </Link>
      <Link 
        to="/list" 
        className={`nav-footer-link ${location.pathname === '/list' ? 'active' : ''}`}
      >
        List
      </Link>
    </nav>
  );
}
