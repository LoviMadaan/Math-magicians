import { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = 'XuKHhxC6MfTaFVJtb/DvGA==u1EBJAFxUnnN5810';
      const option = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': apiKey,
        },
      };
      const cateGory = 'god';
      const url = `https://api.api-ninjas.com/v1/quotes?category=${cateGory}`;
      const response = await fetch(url, option);
      if (!response.ok) {
        throw new Error('Could not fetch data');
      }
      const text = response.json();
      return text;
    };
    fetchData()
      .then((data) => {
        setQuote(data[0]);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [setQuote, setIsLoading]);
  return (
    <div className="quotes">
      {error && <h2>{ error }</h2>}
      { isLoading && <h2>Loading...</h2> }
      { quote && (
      <p>
        { quote.quote }
        {quote.author && ` -- ${quote.author}`}
      </p>
      )}
    </div>
  );
};

export default Quotes;