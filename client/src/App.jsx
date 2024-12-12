import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// import { PORT } from '../../.env';

import { messages } from './messages';

// const PORT = process.env.PORT;

function App() {
  const [messages, setMessages] = useState([]);

  const fetchAPI = async () => {
    // TODO: make port 3000 a variable from process.env
    try {
      const response = await axios.get('http://localhost:3000/messages');
      console.log(typeof response.data);
      setMessages(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <h1>Mini Messaging App</h1>
      <h2>{Object.values(messages)}</h2>
      <div className='messagesCtn'>
        <div>
          {typeof messages === 'undefined' ? (
            <p>Loading...</p>
          ) : (
            // Object.values(messages).map((message) => {
            messages.map((message) => {
              return (
                <>
                  <p>{message.user}</p>
                  <p>{message.text}</p>
                  <p>{message.added}</p>
                  <p>{message.id}</p>
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default App;
