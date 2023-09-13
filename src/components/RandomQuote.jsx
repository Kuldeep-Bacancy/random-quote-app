import React, {useState} from 'react'
import { RandomQuoteContextProvider } from '../context/RandomQuoteContext'
import RandomQuoteContent from './RandomQuoteContent';

const RandomQuote = () => {

  const[quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('happiness');


  return (
    <RandomQuoteContextProvider value={{ quote, loading, category, setQuote, setLoading, setCategory }}>
      <RandomQuoteContent />
    </RandomQuoteContextProvider>
  )
}

export default RandomQuote