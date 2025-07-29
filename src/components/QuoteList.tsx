import { useState, useEffect } from 'react';
import { useQuotes } from '../hooks/useQuotes';
import '../styles/QuoteList.css';
import type { Quote } from '../types/quote';

export function QuoteList() {
  const { quotes, loading, error } = useQuotes();
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!quotes) return;
    
    if (!searchTerm.trim()) {
      setFilteredQuotes(quotes);
      return;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();
    const filtered = quotes.filter(quote => 
      quote.text.toLowerCase().includes(lowerSearchTerm)
    );
    setFilteredQuotes(filtered);
  }, [quotes, searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return <div className="quote-list-container loading">Loading quotes...</div>;
  }

  if (error) {
    return <div className="quote-list-container error">Error: {error}</div>;
  }

  if (!quotes || quotes.length === 0) {
    return <div className="quote-list-container empty">No quotes available</div>;
  }

  return (
    <div className="quote-list-container">
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search quotes..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <div className="results-count">
          {filteredQuotes.length} {filteredQuotes.length === 1 ? 'quote' : 'quotes'} found
        </div>
      </div>

      {filteredQuotes.length === 0 ? (
        <div className="no-results">No quotes match your search.</div>
      ) : (
        <div className="quote-grid">
          {filteredQuotes.map(quote => (
            <div key={quote.id} className="quote-card">
              <div className="quote-card-content">
                <div className="quote-number">#{quote.id}</div>
                <p className="quote-card-text">{quote.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
