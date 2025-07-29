import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { NavFooter } from './NavFooter';
import '../styles/Layout.css';

export function Layout() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Peak Scrivening</h1>
      </header>
      
      <main className="app-content">
        <Outlet />
      </main>
      
      <NavFooter />
      <Footer />
    </div>
  );
}
