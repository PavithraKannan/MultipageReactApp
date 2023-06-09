import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('');
  const handleRefreshClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        // const response = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes/5');
        // setQuote(response.data[0].quote);
        console.log("welcome");
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="App">
      <h1>Breaking Bad Quotes</h1>
      <p>{quote}</p>
      <button onClick={ handleRefreshClick }>Next</button>
    </div>
  );
}
export default App;