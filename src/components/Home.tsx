import { QuoteDisplay } from './QuoteDisplay';
import { useQuotes } from '../hooks/useQuotes';

export function Home() {
  const { currentQuote, loading, error, getRandomQuote } = useQuotes();

  return (
    <QuoteDisplay 
      quote={currentQuote} 
      loading={loading} 
      error={error} 
      onNewQuote={getRandomQuote} 
    />
  );
}
