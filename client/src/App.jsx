import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// import { PORT } from '../../.env';

// const PORT = process.env.PORT;

function App() {
  const [messages, setMessages] = useState([]);

  const fetchAPI = async () => {
    // TODO: make port 3000 a variable from process.env
    try {
      const response = await axios.get('http://localhost:3000/messages');
      setMessages(response.data.messages);
      console.log(response.data.messages);
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
      <div className='messagesCtn'>
        <div>
          {messages === '' ? (
            <p>loading...</p>
          ) : (
            messages.map((message) => (
              <div key={message.id}>
                <p>{message.user}</p>
                <p>{message.text}</p>
                <p>{message.added}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;
