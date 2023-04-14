import { useState, useEffect } from 'react';
import myImage from './loading.gif';
import './quotes.css';

const CalQuotes = () => {
  const [calQuote, setMyQuote] = useState('');
  const [calAuthor, setMyAuthor] = useState('');
  const [calLoading, setMyLoading] = useState(true);
  const [calError, setMyError] = useState('');

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=god',
          {
            headers: {
              'X-Api-Key': 'bIjYCDyNgX1RI/dP1mdaMQ==JiMou8R3AeWdO2LE',
            },
          },
        );
        const data = await response.json();
        setMyQuote(data[0].quote);
        setMyAuthor(data[0].author);
        setMyLoading(false);
      } catch (error) {
        setMyError('Something went wrong!');
      }
    };

    setTimeout(() => {
      fetchQuotes();
    }, 3000);
  }, []);

  return (
    <>
      <center>
        <div className="calQuote">
          <p className="cal-quote">{calQuote}</p>
          <p className="cal-author">{calAuthor}</p>
          {calLoading && <img src={myImage} alt="Loading..." className="cal-image" />}
          {calError && <p className="cal-error">{calError}</p>}
        </div>
      </center>
    </>
  );
};

export default CalQuotes;
