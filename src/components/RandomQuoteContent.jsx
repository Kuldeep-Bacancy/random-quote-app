import React from 'react'
import axios from 'axios';
import useRandom from '../context/RandomQuoteContext';
import { baseURL, config, options } from '../config/config'


function RandomQuoteContent() {
  const { quote, loading, category, setQuote, setLoading, setCategory } = useRandom();

  const generateQuote = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}${category}`, config);
      const data = await response.data;
      setQuote(data[0].quote);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }

  }

  return (
    <div>
      <h2>Random Quote Generator</h2>
      <p className='mt-7'>{quote.length > 0 ? quote : "Your Quote will display over here!"}</p>
      <select
        className='g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {
          options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))
        }

      </select>
      <button onClick={generateQuote} className='mt-5 sm-2'>{loading ? 'Loading...' : 'Generate Quote'}</button>
    </div>
  )
}

export default RandomQuoteContent