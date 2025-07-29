import { useState, useEffect } from 'react';
import type { Quote } from '../types/quote';

export function useQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('/parsed-tips.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch quotes: ${response.status}`);
        }
        const data = await response.json();
        setQuotes(data);
        // Set a random quote initially
        const randomIndex = Math.floor(Math.random() * data.length);
        setCurrentQuote(data[randomIndex]);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  const getRandomQuote = () => {
    if (quotes.length === 0) return;
    
    let randomIndex: number;
    let newQuote: Quote;
    
    // Make sure we don't get the same quote twice in a row
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
      newQuote = quotes[randomIndex];
    } while (currentQuote && newQuote.id === currentQuote.id && quotes.length > 1);
    
    setCurrentQuote(newQuote);
  };

  return {
    quotes,
    currentQuote,
    loading,
    error,
    getRandomQuote
  };
}
