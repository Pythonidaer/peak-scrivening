import type { Quote } from '../types/quote';
import '../styles/QuoteDisplay.css';

interface QuoteDisplayProps {
  quote: Quote | null;
  loading: boolean;
  error: string | null;
  onNewQuote: () => void;
}

export function QuoteDisplay({ quote, loading, error, onNewQuote }: QuoteDisplayProps) {
  if (loading) {
    return <div className="quote-container loading">Loading quotes...</div>;
  }

  if (error) {
    return <div className="quote-container error">Error: {error}</div>;
  }

  if (!quote) {
    return <div className="quote-container empty">No quotes available</div>;
  }

  return (
    <div className="quote-container">
      <div className="quote-content">
        <p className="quote-text">{quote.text}</p>
      </div>
      <button className="new-quote-button" onClick={onNewQuote}>
        New Quote
      </button>
    </div>
  );
}
