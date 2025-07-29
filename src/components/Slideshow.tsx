import { useState } from 'react';
import { useQuotes } from '../hooks/useQuotes';
import '../styles/Slideshow.css';

export function Slideshow() {
  const { quotes, loading, error } = useQuotes();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (loading) {
    return <div className="slideshow-container loading">Loading quotes...</div>;
  }

  if (error) {
    return <div className="slideshow-container error">Error: {error}</div>;
  }

  if (!quotes || quotes.length === 0) {
    return <div className="slideshow-container empty">No quotes available</div>;
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow-content">
        <div className="slideshow-counter">
          {currentIndex + 1} / {quotes.length}
        </div>
        <div className="slideshow-quote">
          <p className="slideshow-text">{quotes[currentIndex].text}</p>
        </div>
        <div className="slideshow-controls">
          <button className="slideshow-button" onClick={handlePrevious}>
            Previous
          </button>
          <button className="slideshow-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
