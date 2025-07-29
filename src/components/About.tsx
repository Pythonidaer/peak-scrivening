import { useNavigate } from 'react-router-dom';
import '../styles/About.css';

interface AboutProps {
  onClose: () => void;
}

export function About({ onClose }: AboutProps) {
  const navigate = useNavigate();
  return (
    <div className="about-overlay">
      <div className="about-container">
        <button className="close-button" onClick={onClose}>×</button>
        
        <h2 className="about-title">About Peak Scrivening</h2>
        
        <div className="about-content">
          <p>
            <strong>Peak Scrivening</strong> is a collection of 366 joke-writing tips shared by comedian 
            <strong> Gary Gulman</strong> throughout 2019 on Twitter (now X).
          </p>
          
          <p>
            This project was created to make these valuable insights more accessible and searchable for comedy writers, 
            performers, and fans of Gary's work.
          </p>
          
          <p>
            <strong>Note:</strong> The quotes might not be 100% accurate due to the parsing process, which removed Twitter links 
            (now rebranded as X, so the links were basically dead) and didn't include images. If some context is lost on a quote, feel free to reach out to me by email and bring it to my attention. I will probably not change it, but, I might.
          </p>
          <p>
          The content is presented 
          as educational material with full credit to Gary Gulman.
          </p>
          
          <h3>Alternative Views</h3>
          <div className="view-options">
            <button 
              className="view-option-button" 
              onClick={() => {
                navigate('/slideshow');
                onClose();
              }}
            >
              Slideshow View
            </button>
            <button 
              className="view-option-button" 
              onClick={() => {
                navigate('/list');
                onClose();
              }}
            >
              List View
            </button>
          </div>
          
          <h3>Contact</h3>
          <p>
            For feedback or suggestions, please reach out via:
          </p>
          <ul className="contact-list">
            <li>
              <a href="https://github.com/Pythonidaer" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <a href="mailto:codefolio.work@gmail.com">codefolio.work@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
